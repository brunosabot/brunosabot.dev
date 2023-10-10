import { useCallback, useEffect } from "react";

export default function useEscape(active: boolean, onClose: () => void) {
  const onEchap = useCallback(
    (event: KeyboardEvent) => {
      if (event.keyCode === 27) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (active) {
      window.addEventListener("keydown", onEchap);

      return () => {
        window.removeEventListener("keydown", onEchap);
      };
    }
  }, [onEchap, active]);
}
