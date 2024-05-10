'use strict'

const fp = require('fastify-plugin')
const oauthPlugin = require('@fastify/oauth2')

module.exports = fp(async function (fastify, opts) {
    fastify.register(oauthPlugin, {
        name: 'facebookOAuth2',
        credentials: {
            client: {
                id: '769635451974193',
                secret: '3d59fd26b0f1452d40407d6b0d404304'
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
                id: '843220945556-nmruj7bttqp8j1o8gkvu0ula15ac7su6.apps.googleusercontent.com',
                secret: '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'
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
                id: 'Ov23liu7IRIhY3ol23n2',
                secret: 'e14c515e79ce746eae327ac18b79ce174b3310da'
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
                id: '0f45e0e16b6a219a9b8970fb117fff5dcfb463ca6dc07fce1b297497cd348bb1',
                secret: 'gloas-73f330d3f02f82f42eb5437d466160686ef8e5cff41b6aa0a50ce75aeb544cb5'
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
                id: '1238355445572309066',
                secret: 'ONNRq0qu6_wvYPfZltA_pKie-W2JEZVd'
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
