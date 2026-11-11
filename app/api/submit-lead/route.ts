// app/api/submit-lead/route.ts — Req 12, 13
import { normalizeInstagramUsername } from "@/lib/instagram-normalizer";
import { isWhitespaceOnly } from "@/lib/validation";

export async function POST(request: Request): Promise<Response> {
  try {
    const body = await request.json();

    // Server-side validation — Req 8.1, 8.2
    if (!body.fullName || isWhitespaceOnly(String(body.fullName))) {
      return Response.json({
        success: false,
        message: "Nama lengkap wajib diisi.",
      });
    }
    if (
      !body.instagramUsername ||
      isWhitespaceOnly(String(body.instagramUsername))
    ) {
      return Response.json({
        success: false,
        message: "Instagram username wajib diisi.",
      });
    }

    const trimmedName = String(body.fullName).trim();
    const normalizedUsername = normalizeInstagramUsername(
      String(body.instagramUsername)
    );
    const timestamp = new Date().toISOString();

    const endpoint = process.env.APPS_SCRIPT_ENDPOINT;
    if (!endpoint) {
      // Req 13.1 — endpoint not yet configured
      return Response.json({
        success: false,
        message:
          "Endpoint belum dikonfigurasi. Silakan hubungi tim OffLoad Laundry.",
      });
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp,
        fullName: trimmedName,
        instagramUsername: normalizedUsername,
      }),
    });

    const result = await response.json();
    return Response.json({ success: result.success === true });
  } catch {
    return Response.json({
      success: false,
      message: "Terjadi kesalahan. Silakan coba lagi.",
    });
  }
}
