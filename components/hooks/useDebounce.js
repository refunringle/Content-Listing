import { useEffect, useRef, useState } from "react";

/**
 * A custom React hook that provides a debounced version of a given value.
 * This is useful for optimizing performance and reducing the number of updates
 * in scenarios like user input or API calls where frequent updates can be costly.
 *
 * The hook delays updating the returned value until a specified delay period
 * has passed since the last change. This helps in reducing the number of operations
 * performed when the value changes rapidly.
 *
 * @param {any} value - The value to debounce.
 * @param {number} delay - The delay in milliseconds before updating the debounced value. Defaults to 500ms.
 *
 * @returns {any} - The debounced value.
 *
 * @example
 *
 * import React, { useState } from 'react';
 * import { useDebounce } from './path/to/useDebounce';
 *
 * const SearchComponent = () => {
 *   const [searchTerm, setSearchTerm] = useState('');
 *   const debouncedSearchTerm = useDebounce(searchTerm, 300);
 *
 *   useEffect(() => {
 *     if (debouncedSearchTerm) {
 *       // Perform API call or other action with debouncedSearchTerm
 *       console.log('Debounced Search Term:', debouncedSearchTerm);
 *     }
 *   }, [debouncedSearchTerm]);
 *
 *   return (
 *     <input
 *       type="text"
 *       value={searchTerm}
 *       onChange={(e) => setSearchTerm(e.target.value)}
 *       placeholder="Search..."
 *     />
 *   );
 * };
 *
 * export default SearchComponent;
 */
export const useDebounce = (value, delay = 500) => {
  const timeout = useRef(null); // Ref to store the timeout ID
  const [debouncedValue, setDebouncedValue] = useState(value); // State to store the debounced value

  useEffect(() => {
    // Clear the previous timeout if it exists
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    // Set a new timeout to update the debounced value
    timeout.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timeout on component unmount or before the next effect
    return () => {
      clearTimeout(timeout.current);
    };
  }, [value, delay]); // Depend on `value` and `delay`

  return debouncedValue; // Return the debounced value
};
