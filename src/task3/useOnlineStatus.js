import { useState, useEffect } from "react";

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const onlineFn = () => setIsOnline(true);
  const offlineFn = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener("online", onlineFn);
    window.addEventListener("offline", offlineFn);

    return () => {
      window.removeEventListener("online", onlineFn);
      window.removeEventListener("offline", offlineFn);
    };
  }, []);

  return isOnline;
}
