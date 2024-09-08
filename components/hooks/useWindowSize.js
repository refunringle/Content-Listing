import { useDeferredValue, useEffect, useState } from "react";

/**
 * A custom React hook that provides the current window size (width and height).
 * It updates the window size values whenever the browser window is resized.
 * It uses a deferred value to handle potential performance issues caused by frequent updates.
 *
 * @returns {Object} An object containing the current window size:
 * - `height` (number): The height of the window in pixels.
 * - `width` (number): The width of the window in pixels.
 *
 * @example
 *
 * import React from 'react';
 * import { useWindowSize } from './path/to/useWindowSize';
 *
 * const MyComponent = () => {
 *   const { width, height } = useWindowSize();
 *
 *   return (
 *     <div>
 *       <p>Window width: {width}px</p>
 *       <p>Window height: {height}px</p>
 *     </div>
 *   );
 * };
 *
 * export default MyComponent;
 */
export const useWindowSize = () => {
  const hasWindow = typeof window !== "undefined"; // Check if window object is available (i.e., in browser environment)
  const [windowSize, setWindowSize] = useState({
    height: hasWindow ? window.innerHeight : 0,
    width: hasWindow ? window.innerWidth : 0,
  });

  const deferred = useDeferredValue(windowSize); // Use deferred value to avoid performance issues on frequent updates

  useEffect(() => {
    if (!hasWindow) return; // Ensure code runs only in browser environment

    function handleResize() {
      setWindowSize({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize); // Attach resize event listener
    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on unmount
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return deferred; // Return deferred window size values
};
