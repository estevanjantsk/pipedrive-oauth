import NextAuth from "next-auth"
import PipedriveProvider from "next-auth/providers/pipedrive"

export default NextAuth({
  providers: [
		PipedriveProvider({
			clientId: process.env.PIPEDRIVE_CLIENT_ID || '',
			clientSecret: process.env.PIPEDRIVE_CLIENT_SECRET || '',
		})
	],
})