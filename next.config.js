/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ['source.unsplash.com','images.unsplash.com','i.pinimg.com','crictoday.com','www.gettyimages.com'], // Add Unsplash domain
      },
};

export default config;
