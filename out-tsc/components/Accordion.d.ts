import React, { ReactNode } from 'react';
interface Props {
    title: string;
    children: ReactNode;
    className?: string;
    defaultOpen?: boolean;
    highlight?: boolean;
}
declare const Accordion: ({ title, children, className, defaultOpen, highlight }: Props) => React.JSX.Element;
export default Accordion;
