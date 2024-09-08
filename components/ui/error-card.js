import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import React from "react";

/**
 * A React component to display an error message in a card format.
 * Useful for showing error states or notifications to users.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.title - The title of the error card. Defaults to "Something went wrong!" if not provided.
 * @param {string} props.message - The main error message to display. Defaults to "We're having some technical issues at the moment." if not provided.
 * @param {string} [props.subtitle] - Optional additional information or instructions for the user. Defaults to "Please Try Again Later." if not provided.
 *
 * @returns {JSX.Element} The rendered error card component.
 *
 */

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
