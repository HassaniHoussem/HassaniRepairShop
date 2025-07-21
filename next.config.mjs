
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  experimental: {
    instrumentationHOOK:true
  }
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "hassani-gf",
  project: "javascript-nextjs",

  // Only print logs for uploading source maps in CI
  // Set to `true` to suppress logs
  silent: false,
  hideSourceMaps:true,
  hideSourceMaps:true,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
