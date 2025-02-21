import { Author, Message, Question, Report } from '../types';
export declare const timeWithMilliseconds: ({ value }: {
    value: string;
}) => string;
export declare const millisecondsToTimeString: (n: number) => string;
export declare const capitalise: <T extends string>(s: string) => T;
export declare const decapitalise: (s: string) => string;
export declare const cutString: (s: string) => string;
export declare const toFixedButDropZeroes: (n: number, maxDecimalPlaces?: number) => string;
export declare const copyToClipboard: (s: string, callback?: () => void) => void;
export declare const numberComparator: (a: number, b: number) => 0 | 1 | -1;
export declare const bigintComparator: (a: bigint | string, b: bigint | string) => 0 | 1 | -1;
export declare const calculateFilledPercentage: (ordQty: number, cumQty: number) => number;
export declare const createMessage: (author: Author, text: string, questions?: Question[]) => Message;
export declare const createQuestion: (text: string, index: number) => Question;
export declare const createReport: () => Report;
