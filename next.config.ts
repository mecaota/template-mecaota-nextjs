import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {};
const nextConfigWithVanillaExtract = withVanillaExtract(nextConfig);

export default nextConfigWithVanillaExtract;
