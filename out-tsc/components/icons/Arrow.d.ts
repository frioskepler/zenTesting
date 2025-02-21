import React, { SVGProps } from 'react';
declare const ROTATE: {
    up: string;
    down: string;
    left: string;
    right: string;
};
type Props = SVGProps<SVGSVGElement> & {
    direction?: keyof typeof ROTATE;
};
declare const Arrow: ({ direction, className, ...props }: Props) => React.JSX.Element;
export default Arrow;
