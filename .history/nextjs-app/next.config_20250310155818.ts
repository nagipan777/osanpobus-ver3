import type { NextConfig } from "next";
import * as dotenv from 'dotenv'

dotenv.config()

const nextConfig: NextConfig = {
  env: {
    GAS_WEB_APP_URL: process.env.GAS_WEB_APP_URL,
  },
};

export default nextConfig;
