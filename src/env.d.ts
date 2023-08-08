/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_API_KEY: string;
  readonly PUBLIC_AUTH_DOMAIN: string;
  readonly PUBLIC_PROJECT_ID: string;
  readonly PUBLIC_STORAGE_BUCKET: string;
  readonly PUBLIC_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_APP_ID: string;

  readonly TYPE_ACCOUNT: string;
  readonly PROJECT_ID: string;
  readonly PRIVATE_KEY_ID: string;
  readonly PRIVATE_KEY: string;
  readonly CLIENT_EMAIL: string;
  readonly CLIENT_ID: string;
  readonly AUTH_URI: string;
  readonly TOKEN_URI: string;
  readonly AUTH_PROVIDER_X509_CERT_URL: string;
  readonly CLIENT_X509_CERT_URL: string;
  readonly UNIVERSE_DOMAIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}