"use client";
import { useState } from "react";
import { validateLeadForm, hasErrors, ValidationErrors } from "@/lib/validation";
import ThankYouModal from "@/components/forms/ThankYouModal";
import PrivacyPolicyModal from "@/components/modals/PrivacyPolicyModal";

export default function LeadForm() {
  const [fullName, setFullName] = useState("");
  const [instagramUsername, setInstagramUsername] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    const validationErrors = validateLeadForm(fullName, instagramUsername);
    if (hasErrors(validationErrors)) { setErrors(validationErrors); return; }
    setErrors({}); setStatus("submitting"); setSubmitError("");
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, instagramUsername }),
      });
      const data = await res.json();
      if (data.success) { setStatus("success"); }
      else { setStatus("error"); setSubmitError(data.message || "Terjadi kesalahan. Silakan coba lagi."); }
    } catch { setStatus("error"); setSubmitError("Gagal terhubung. Silakan coba lagi."); }
  };

  const handleClose = () => { setStatus("idle"); setFullName(""); setInstagramUsername(""); };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
          <input id="fullName" type="text" value={fullName}
            onChange={(e) => { setFullName(e.target.value); setErrors((p) => ({ ...p, fullName: undefined })); }}
            placeholder="Masukkan nama lengkap kamu"
            className={`w-full px-4 py-3 rounded-xl border ${errors.fullName ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition`}
            disabled={status === "submitting"} autoComplete="name" />
          {errors.fullName && <p className="mt-1 text-sm text-red-500" role="alert">{errors.fullName}</p>}
        </div>
        <div>
          <label htmlFor="instagramUsername" className="block text-sm font-medium text-gray-700 mb-1">Instagram Username</label>
          <input id="instagramUsername" type="text" value={instagramUsername}
            onChange={(e) => { setInstagramUsername(e.target.value); setErrors((p) => ({ ...p, instagramUsername: undefined })); }}
            placeholder="@username"
            className={`w-full px-4 py-3 rounded-xl border ${errors.instagramUsername ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"} text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition`}
            disabled={status === "submitting"} autoComplete="off" />
          {errors.instagramUsername && <p className="mt-1 text-sm text-red-500" role="alert">{errors.instagramUsername}</p>}
        </div>
        {submitError && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600" role="alert">{submitError}</div>}
        <button type="submit" disabled={status === "submitting"}
          className="w-full py-3.5 px-6 rounded-xl bg-accent text-gray-900 font-bold text-sm hover:bg-accent/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all shadow-sm">
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>Mendaftar...</span>
          ) : "Daftar Early Access"}
        </button>
        <p className="text-xs text-gray-500 text-center leading-relaxed">Gratis untuk bergabung. Kami akan menghubungi kamu saat OffLoad Laundry siap hadir.</p>
        <p className="text-xs text-gray-400 text-center">Dengan mendaftar, kamu menyetujui{" "}
          <button type="button" onClick={() => setShowPrivacy(true)} className="underline text-primary hover:text-primary/80 transition-colors">Kebijakan Privasi</button>{" "}kami.</p>
      </form>
      <ThankYouModal isOpen={status === "success"} onClose={handleClose} />
      <PrivacyPolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} />
    </>
  );
}
