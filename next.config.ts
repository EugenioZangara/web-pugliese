import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const repoName = "web-pugliese";

export default function nextConfig(phase: string): NextConfig {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    ...(isDev ? {} : { output: "export" }),
    trailingSlash: true,

    images: {
      unoptimized: true,
    },

    basePath: isDev ? "" : `/${repoName}`,
    assetPrefix: isDev ? "" : `/${repoName}/`,
  };
}
