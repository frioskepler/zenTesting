import React, { ButtonHTMLAttributes } from 'react';
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    disabled?: boolean;
};
declare const _default: ({ children, onClick, disabled, className, ...props }: Props) => React.JSX.Element;
export default _default;
