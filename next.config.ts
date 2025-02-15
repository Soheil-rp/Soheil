import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
const sharedPackages = ["../designsystem", "../core"]
const withTM = require("next-transpile-modules")(sharedPackages) // monorepo support
module.exports = withTM()
export default nextConfig;
