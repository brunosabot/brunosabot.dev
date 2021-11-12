import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface IModalPortalProps {
  active: boolean;
  children: React.ReactNode;
}

export default function ModalPortal({
  active,
  children,
}: IModalPortalProps): React.ReactPortal | null {
  const elRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (window) {
      elRef.current = window.document.createElement("div");
    }
  }, []);

  useEffect(() => {
    const modalRoot = window.document.getElementById("modal-root");

    if (active && elRef.current && modalRoot !== null) {
      const { current } = elRef;
      modalRoot.appendChild(current);

      return () => {
        modalRoot.removeChild(current);
      };
    }

    return () => {};
  }, [active]);

  if (elRef.current && active) {
    return createPortal(children, elRef.current);
  }

  return null;
}
