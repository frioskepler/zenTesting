import { AccountInfo, PublicClientApplication } from '@azure/msal-browser';
declare const getUserAccessToken: (instance: PublicClientApplication, account: AccountInfo) => Promise<string | null>;
declare const login: (instance: PublicClientApplication) => void;
declare const logout: (instance: PublicClientApplication) => void;
export { getUserAccessToken, login, logout };
