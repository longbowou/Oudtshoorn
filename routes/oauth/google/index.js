'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/login', {}, (req, reply) => {
        fastify.googleOAuth2.generateAuthorizationUri(
            req,
            reply,
            (err, authorizationEndpoint) => {
                if (err) console.error(err)
                reply.redirect(authorizationEndpoint)
            }
        );
    });

// The service provider redirect the user here after successful login
    fastify.get('/callback', async function (request, reply) {
        const {token} = await this.googleOAuth2.getAccessTokenFromAuthorizationCodeFlow(request)

        console.log(token.access_token)

        // if later need to refresh the token this can be used
        // const { token: newToken } = await this.getNewAccessTokenUsingRefreshToken(token)
        // const user = await this.googleOAuth2.userinfo(token.access_token);
        
        reply.send({token: token});
    })
}
