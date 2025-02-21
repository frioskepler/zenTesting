import { HTMLAttributes, JSX } from 'react';
type Props = HTMLAttributes<HTMLElement> & {
    title: string;
    side: 'left' | 'right';
    icon: JSX.Element;
};
declare const SidePanel: ({ side, title, icon, className, children, ...props }: Props) => JSX.Element;
export default SidePanel;
