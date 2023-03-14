/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  basePath: "/tables",
  async redirects() {
    return [
      {
          source: '/',
          destination: '/tables',
          basePath: false,
          permanent: false
      }
    ]
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.justboil.me',
      },
    ],
  },
}

export default nextConfig