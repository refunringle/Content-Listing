import { API_URL } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useWindowSize } from "../hooks";

const MovieItem = ({ content, index }) => {
  const [loading, setLoading] = useState(true);

  const { height, width } = useWindowSize();

  const handleImageLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div key={`content-${index}`} className="flex flex-col items-center p-2">
      <div className="relative w-full">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <CircularProgress />
          </div>
        )}
        <Image
          src={`${API_URL}images/${content?.["poster-image"]}`}
          alt={content.name}
          width={width * 0.3}
          height={height * 0.2}
          className="w-full h-auto object-cover rounded-lg"
          style={{ aspectRatio: "2 / 3" }}
          onLoad={handleImageLoadingComplete}
        />
      </div>
      <p className="mt-2 text-lg text-center p-2 font-thin">{content.name}</p>
    </div>
  );
};

export default MovieItem;
