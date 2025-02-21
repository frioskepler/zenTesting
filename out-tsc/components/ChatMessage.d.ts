import React from 'react';
import { Message } from '../types';
declare const ChatMessage: ({ message, onQuestionSelected }: {
    message: Message;
    onQuestionSelected: (newPrompt: string) => void;
}) => React.JSX.Element;
export default ChatMessage;
