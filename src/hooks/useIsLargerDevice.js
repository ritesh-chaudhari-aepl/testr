// useIsLargerDevice.js
import { useState, useEffect } from "react";

// Define the maximum width for larger devices (e.g., desktops)
const MAX_WIDTH_FOR_LARGER_DEVICE = 1024;

const useIsLargerDevice = () => {
  const [isLargerDevice, setIsLargerDevice] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update isLargerDevice accordingly
      setIsLargerDevice(window.innerWidth >= MAX_WIDTH_FOR_LARGER_DEVICE);
    };

    // Call handleResize initially to set the correct initial value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Dependency array is empty to ensure this effect runs only once on mount

  return isLargerDevice;
};

export default useIsLargerDevice;
