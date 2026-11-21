export default function middleware(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip =
    (forwarded && forwarded.split(",")[0].trim()) ||
    req.headers.get("x-real-ip") ||
    "unknown";

  console.log({
    timestamp: new Date().toISOString(),
    ip,
    path: new URL(req.url).pathname,
    userAgent: req.headers.get("user-agent") || "unknown",
  });
}
