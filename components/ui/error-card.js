import {
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const ErrorCard = ({
  title,
  message,
  subtitle = "Please Try Again Later.",
}) => {
  return (
    <div className="text-gray-700 dark:text-slate-200 font-medium p-6 m-4 w-fit max-w-lg h-fit mx-auto flex flex-col gap-2 items-center text-center border-[1px] dark:border-slate-500 rounded-md">
      <ExclamationTriangleIcon className="w-16 h-w-16 text-current" />
      <h1 className="text-2xl font-bold">{title || "Something went wrong!"}</h1>
      <p>{message || "We're having some technical issues at the moment."}</p>
      <p>{subtitle}</p>
      <br />
    </div>
  );
};
