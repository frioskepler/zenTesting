interface UseApiReturn<T> {
    data: T | null;
    isLoading: boolean;
    error: string | null;
    request: (...args: unknown[]) => Promise<void>;
}
interface ApiFunc<T> {
    (...args: unknown[]): Promise<{
        data: T;
    }>;
}
declare const useApi: <T>(apiFunc: ApiFunc<T>) => UseApiReturn<T>;
export default useApi;
