module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['www.gravatar.com', process.env.APP_DOMAIN, 'readit-client.vercel.app', process.env.NEXT_PUBLIC_CLIENT_BASE_URL, 'https://readit-client.vercel.app','https://readit-client.vercel.app/','www.readit-client.vercel.app', 'www.readit-client.shiroworks.vercel.app'],
  },
}
