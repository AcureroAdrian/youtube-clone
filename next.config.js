const withTwin = require('./config/withTwin')

/** @type {import('next').NextConfig} */

const nextConfig = withTwin({
  reactStrictMode: true,
})

module.exports = nextConfig
