import React, { SVGProps } from 'react';
type Props = SVGProps<SVGSVGElement> & {
    action?: 'open' | 'close';
};
declare const OpenSidepanel: ({ action, className, ...props }: Props) => React.JSX.Element;
export default OpenSidepanel;
