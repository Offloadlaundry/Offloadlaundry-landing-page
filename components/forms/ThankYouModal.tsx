"use client";
import { useEffect } from "react";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ThankYouModal({ isOpen, onClose }: ThankYouModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-primary mb-3">Kamu Sudah Masuk Daftar!</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Terima kasih sudah tertarik dengan OffLoad Laundry. Kami akan mengabari kamu saat ada update terbaru menjelang peluncuran.
        </p>
        <button
          onClick={onClose}
          className="w-full py-3 px-6 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
        >
          Oke, Mengerti
        </button>
      </div>
    </div>
  );
}