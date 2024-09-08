import React from "react";
import {
  MagnifyingGlassIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { TextField } from "@mui/material";

export default function Header({
  search,
  setSearch,
  isSearching,
  toggleSearch,
}) {
  return (
    <header className="flex items-center justify-between p-4 text-white">
      <div className="flex-1 flex items-center space-x-2">
        {/* Left Arrow Icon */}
        <button
          className="p-2 text-gray-100 hover:text-gray-400"
          onClick={isSearching ? toggleSearch : undefined}
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-100" />
        </button>

        {/* Search Bar */}
        {isSearching ? (
          <TextField
            autoFocus
            onBlur={toggleSearch}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            placeholder="Search..."
            size="small"
            fullWidth
            className="bg-transparent border-none"
            sx={{
              "& fieldset": { border: "none" },
            }}
            InputProps={{
              style: {
                color: "white",
                paddingLeft: "0px",
              },
            }}
          />
        ) : (
          <div className="text-xl">Romantic Comedy</div>
        )}
      </div>

      {!isSearching && (
        <button
          className="p-2 rounded-full hover:bg-gray-700 focus:outline-none"
          onClick={toggleSearch}
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-100" />
        </button>
      )}
    </header>
  );
}
