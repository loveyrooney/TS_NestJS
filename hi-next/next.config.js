/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/origin/:path*",
        destination: "/offical/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/replace",
        destination: "/about",
      },
    ];
  },
};

module.exports = nextConfig;

//redirects : origin url을 이렇게 custom 할 수 있다.
//라우터를 커스텀하거나, 실제 다른 url로 연결하는 것도 가능.
//rewrites : custom 한 라우터로 접근 할 때, origin url을 띄울 수 있다.
//redirects는 url의 변화가 클라이언트에게 보이지만, rewrites는 숨길 수 있다.
