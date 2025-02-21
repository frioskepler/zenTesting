import { AccountInfo } from '@azure/msal-browser';
declare const useAuth: () => {
    user: AccountInfo | null;
    accessToken: string | null;
    isAuthenticated: boolean;
    getAccessToken: () => Promise<string | null | undefined>;
    login: () => void;
    logout: () => void;
};
export default useAuth;
