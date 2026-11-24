import { createBrowserClient, parseCookieHeader, serializeCookieHeader } from "@supabase/ssr";

export const isSupabaseConfigured = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const NOT_CONFIGURED_MESSAGE =
  "Authentication is not configured yet. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to the environment and redeploy.";

const PREF_COOKIE = "ia_session_only";

function isSessionOnly() {
  return typeof document !== "undefined" && document.cookie.split("; ").includes(`${PREF_COOKIE}=1`);
}

/**
 * Browser Supabase client.
 * @param remember Pass the Remember me choice at login. When false the auth cookie is a session cookie
 * that ends when the browser closes. When omitted, the previously stored choice is used.
 */
export function createClient(remember?: boolean) {
  if (typeof document !== "undefined" && remember !== undefined) {
    document.cookie = remember
      ? `${PREF_COOKIE}=; path=/; max-age=0; samesite=lax`
      : `${PREF_COOKIE}=1; path=/; samesite=lax`;
  }
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(document.cookie).map(({ name, value }) => ({ name, value: value ?? "" }));
        },
        setAll(cookiesToSet) {
          const sessionOnly = isSessionOnly();
          cookiesToSet.forEach(({ name, value, options }) => {
            const opts = sessionOnly && value ? { ...options, maxAge: undefined, expires: undefined } : options;
            document.cookie = serializeCookieHeader(name, value, opts);
          });
        },
      },
    }
  );
}
