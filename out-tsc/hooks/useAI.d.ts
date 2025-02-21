import { Message } from '../types';
declare const useAI: () => {
    ask: (prompt: string) => Promise<Partial<Message>>;
};
export default useAI;
