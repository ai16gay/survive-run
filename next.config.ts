/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/build/Build/build.data.br',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
      {
        source: '/build/Build/build.framework.js.br',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
      {
        source: '/build/Build/build.wasm.br',
        headers: [
          {
            key: 'Content-Encoding',
            value: 'br',
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
