// import Twitch from "@auth/core/providers/twitch"
import { defineConfig } from "auth-astro"
import Google from "@auth/core/providers/google"

export default defineConfig({
	providers: [
    Google({
      clientId: import.meta.env.GOOGLE_ID,
      clientSecret: import.meta.env.GOOGLE_SECRET
    })
	],

	// callbacks: {
	// 	session: ({ session, token }) => ({
	// 		...session,
	// 		user: {
	// 			...session.user,
	// 			id: token.sub,
	// 		},
	// 	}),
	// },
})
