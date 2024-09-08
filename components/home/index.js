import React, { useCallback, useRef, useState, Suspense } from "react";
import useSWRInfinite from "swr/infinite";
import { ErrorCard } from "../ui";
import { Skeleton } from "@mui/material";
import Header from "./header";
import { useDebounce } from "../hooks";

const MovieItem = React.lazy(() => import("./movieItem"));

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const getKey = (pageIndex, previousPageData) => {
    const nextPage = pageIndex + 1;
    if (!previousPageData) return `data/page${nextPage}.json`;

    const { page } = previousPageData;
    const pageSizeRequested = parseInt(page["page-size-requested"], 10);
    const pageSizeReturned = parseInt(page["page-size-returned"], 10);
    const totalContentItems = parseInt(page["total-content-items"], 10);

    const totalPages = Math.ceil(totalContentItems / pageSizeRequested);
    const currentPage = pageIndex + 1;

    if (
      currentPage > totalPages ||
      (pageSizeReturned < pageSizeRequested &&
        totalContentItems <= pageSizeRequested * currentPage)
    ) {
      setHasMore(false);
      return null;
    }

    return `data/page${nextPage}.json`;
  };

  const {
    data: paginatedData,
    error,
    isLoading,
    setSize,
  } = useSWRInfinite(getKey);

  const observer = useRef();
  const lastProjRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setSize((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasMore, setSize]
  );

  const items = paginatedData
    ? paginatedData.flatMap(
        (pData) => pData?.page?.["content-items"]?.content || []
      )
    : [];

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    setSearch("");
  };

  if (isLoading) {
    return (
      <div className="min-h-[200px] text-center flex flex-col gap-2 p-2">
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
        <Skeleton variant="rectangular" height={60} />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorCard
        title="Error"
        message="Failed to fetch data."
        subtitle="Try Again"
      />
    );
  }

  return (
    <div className="app-container">
      <Header
        search={search}
        setSearch={setSearch}
        isSearching={isSearching}
        toggleSearch={toggleSearch}
      />
      {isSearching && !search.length > 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 text-center md:text-xl lg:text-2xl">
            Start typing to search for contents.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-base lg:text-lg">
            Enter keywords or movie titles in the search bar above to find what
            you're looking for.
          </p>
          <div className="mt-4 animate-spin rounded-full h-24 w-24 border-t-4 border-blue-500" />
        </div>
      ) : (
        <div className="grid-container">
          {filteredItems.length === 0 ? (
            <div className="h-80 flex">
              <span className="m-auto text-lg font-bold text-slate-400 dark:text-slate-200">
                No Movies Found.
              </span>
            </div>
          ) : (
            <ul className="grid grid-cols-3 gap-1 p-1">
              {filteredItems.map((content, index) => (
                <li
                  key={index}
                  ref={index === filteredItems.length - 1 ? lastProjRef : null}
                  className="p-1"
                >
                  <Suspense
                    fallback={<Skeleton variant="rectangular" height={60} />}
                  >
                    <MovieItem key={index} index={index} content={content} />
                  </Suspense>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
