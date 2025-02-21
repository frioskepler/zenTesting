export type ID = string;
export type Collection = 'notifications' | 'reports' | 'assets' | 'users' | 'config';
export type List = 'messages' | 'questions';
export type Notification = {
    id: number;
    title: string;
    message: string;
    type: 'increase' | 'decrease' | 'info';
    time: string;
};
export type Asset = {
    id: string;
    name: string;
    type: string;
    class: string;
    currency: string;
    quantity: number;
    unitValue: number;
    acquisitionDate: string;
    acquisitionCost: number;
    currentMarketValue: number;
    holdingPeriod: string;
    associatedAccount: string;
    riskLevel: string;
    sector: string;
    country: string;
    issuer: string;
};
export type Report = {
    id: string;
    name: string;
    favorited: boolean;
    type: 'Performance' | 'Financial Statement' | 'Risk Assessment' | 'Tax Report' | 'Real Estate Report';
    period: string;
    generationDate: string;
    assetsIncluded: string[];
    totalValue: string;
    netIncome: string;
    roi: string;
    author: string;
    content: string;
};
export type User = {};
export declare enum Author {
    ME = "me",
    ZEN = "zen"
}
export type Question = {
    id: ID;
    time: number;
    text: string;
};
export type Message = {
    id: ID;
    time: number;
    author: Author;
    text: string;
    questions?: Question[];
};
export type State = {
    tabs: string[];
    openTab: null | number;
    users: Record<string, User>;
    assets: Record<string, Asset>;
    reports: Record<string, Report>;
    messages: Message[];
    questions: Question[];
    notifications: Record<string, Notification>;
    scrollEditorTo: {
        tag: string;
        text: string | null;
    } | null;
    config: {
        user: null | {};
        leftOpen: boolean;
        rightOpen: boolean;
        sidePanelWidth: number;
    };
    update: (payload: Partial<State>) => void;
    merge: (collection: Collection, payload: object) => void;
    add: (collection: Collection, id: string, payload: object | boolean | number | string) => void;
    push: (list: List, payload: Partial<Message | Question>) => void;
    remove: (list: List, id: ID) => void;
};
export declare const assetColumnDefs: {
    field: string;
}[];
export declare const reportColumnDefs: {
    field: string;
}[];
