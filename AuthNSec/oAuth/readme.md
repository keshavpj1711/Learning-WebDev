# oAuth - Open Authorisation

- Widely used protocol that allows applications to access a user's data on another service (like Google, Facebook, or GitHub) without needing to know the user's password. 
- Instead, OAuth lets users grant limited access to their information using secure tokens.

## What Problem Does OAuth Solve?

- Without OAuth: Apps would need your password to access your data on another service, which is risky and insecure.

- With OAuth: You log in directly to the service (like Google), approve what the app can access, and the app gets a special token to use—never your password

## The oAuth Flow

1. User clicks “Sign in with Google/Facebook/etc.”
2. App redirects user to the service’s login/consent page
3. User logs in and approves requested permissions
4. Service gives the app a token (not your password)
5. App uses the token to access only the allowed data


## Using OAuth for User Authentication

While **OAuth is designed for authorization**, many platforms use it for authentication too—letting users “log in with Google/Facebook/etc.” on their own site.

### How does this work?

After the OAuth flow, the app receives some basic user information (like your email or name) from the service, which it uses to create or log in a user account on its own platform.

> OAuth alone does not guarantee the user’s identity (it’s not an authentication protocol by design)

>For true authentication, protocols like OpenID Connect (built on top of OAuth) are used. 

## Real-World Examples

- “Sign in with Google” on websites
- Letting a calendar app access your Google Calendar

