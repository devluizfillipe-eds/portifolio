/**
 * Temporary workaround: disable Next.js built-in ESLint during build on Vercel
 * because of version/config mismatch (core-web-vitals config failing to load).
 * You can re-enable after aligning ESLint and Next versions.
 */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
