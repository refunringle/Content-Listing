import { useEffect, useRef, useState } from "react";

/**
 * Hook for debouncing values
 * @param {any} value 
 * @param {number} delay 
 * @returns {any} a debounced value 
 */
export const useDebounce = (value, delay = 500) => {
    const timeout = useRef(null);
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timeout.current);
        };
    }, [value, delay]);

    return debouncedValue;
};