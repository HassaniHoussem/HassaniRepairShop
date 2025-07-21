import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4df33ff2ea462da3b123093a0599d007@o4509697306198016.ingest.de.sentry.io/4509697313210448",

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
