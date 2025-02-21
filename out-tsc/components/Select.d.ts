import React from 'react';
interface SelectProps {
    options: string[];
    onChange: (value: string) => void;
}
declare const Select: React.FC<SelectProps>;
export default Select;
