"use client";

import { useEffect, useRef, type ElementRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={dialogRef}
      className="m-0 h-screen w-screen bg-black/90 text-white"
      onClose={onDismiss}
    >
      {children}
      {/* <button onClick={onDismiss} className="close-button"></button> */}
    </dialog>,
    document.getElementById("modal-root")!,
  );
}
