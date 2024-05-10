'use strict'

const fp = require('fastify-plugin')
const oauthPlugin = require('@fastify/oauth2')

module.exports = fp(async function (fastify, opts) {
    fastify.register(oauthPlugin, {
        name: 'facebookOAuth2',
        credentials: {
            client: {
                id: process.env.OAUTH_FACEBOOK_CLIENT_ID,
                secret: process.env.OAUTH_FACEBOOK_CLIENT_SECRET,
            },
            auth: oauthPlugin.FACEBOOK_CONFIGURATION
        },
        // register a fastify url to start the redirect flow to the service provider's OAuth2 login
        startRedirectPath: '/oauth/facebook',
        // service provider redirects here after user login
        callbackUri: 'http://localhost:3000/oauth/facebook/callback'
        // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
        // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
    })

    fastify.register(oauthPlugin, {
        name: 'googleOAuth2',
        scope: ['profile', 'email'],
        credentials: {
            client: {
                id: process.env.OAUTH_GOOGLE_CLIENT_ID,
                secret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
            },
            auth: oauthPlugin.GOOGLE_CONFIGURATION
        },
        // register a fastify url to start the redirect flow to the service provider's OAuth2 login
        startRedirectPath: '/oauth/google',
        // service provider redirects here after user login
        callbackUri: 'http://localhost:3000/oauth/google/callback'
        // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
        // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
    })

    fastify.register(oauthPlugin, {
        name: 'githubOAuth2',
        credentials: {
            client: {
                id: process.env.OAUTH_GITHUB_CLIENT_ID,
                secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
            },
            auth: oauthPlugin.GITHUB_CONFIGURATION
        },
        // register a fastify url to start the redirect flow to the service provider's OAuth2 login
        startRedirectPath: '/oauth/github',
        // service provider redirects here after user login
        callbackUri: 'http://localhost:3000/oauth/github/callback'
        // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
        // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
    })

    fastify.register(oauthPlugin, {
        name: 'gitlabOAuth2',
        scope: ['read_user'],
        credentials: {
            client: {
                id: process.env.OAUTH_GITLAB_CLIENT_ID,
                secret: process.env.OAUTH_GITLAB_CLIENT_SECRET,
            },
            auth: oauthPlugin.GITLAB_CONFIGURATION
        },
        // register a fastify url to start the redirect flow to the service provider's OAuth2 login
        startRedirectPath: '/oauth/gitlab',
        // service provider redirects here after user login
        callbackUri: 'http://localhost:3000/oauth/gitlab/callback'
        // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
        // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
    })

    fastify.register(oauthPlugin, {
        name: 'discordOAuth2',
        scope: ['email', 'identify'],
        credentials: {
            client: {
                id: process.env.OAUTH_DISCORD_CLIENT_ID,
                secret: process.env.OAUTH_DISCORD_CLIENT_SECRET,
            },
            auth: oauthPlugin.DISCORD_CONFIGURATION
        },
        // register a fastify url to start the redirect flow to the service provider's OAuth2 login
        startRedirectPath: '/oauth/discord',
        // service provider redirects here after user login
        callbackUri: 'http://localhost:3000/oauth/discord/callback'
        // You can also define callbackUri as a function that takes a FastifyRequest and returns a string
        // callbackUri: req => `${req.protocol}://${req.hostname}/login/facebook/callback`,
    })
})
