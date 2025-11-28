const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  // Remove the aggressive runtimeCaching for now - let's use simpler defaults
});

module.exports = withPWA({
  reactStrictMode: true,
    turbopack: {},
});


// npm i baseline-browser-mapping@latest -D