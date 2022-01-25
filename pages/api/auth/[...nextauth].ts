import NextAuth from "next-auth"
import PipedriveProvider from "next-auth/providers/pipedrive"

export default NextAuth({
  providers: [
		PipedriveProvider({
			clientId: process.env.PIPEDRIVE_CLIENT_ID || '',
			clientSecret: process.env.PIPEDRIVE_CLIENT_SECRET || '',
		})
	],
	callbacks: {
		async jwt({ token, account }) {
			// Persist the OAuth access_token to the token right after signin
			if (account) {
				token.accessToken = account.access_token
				token.apiDomain = account.api_domain
			}
			return token
		},
		async session({ session, token, user }) {
			// Send properties to the client, like an access_token from a provider.
			session.accessToken = token.accessToken
			session.apiDomain = token.apiDomain
			return session
		}
	}
})