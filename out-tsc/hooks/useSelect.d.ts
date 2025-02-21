type UseSelectReturn<T> = {
    selectedValue: T | null;
    isSelectOpen: boolean;
    openSelect: () => void;
    closeSelect: () => void;
    selectedOption: (value: T) => void;
    options: T[];
    setOptions: (newOptions: T[]) => void;
};
declare const useSelect: <T extends string | number | boolean>() => UseSelectReturn<T>;
export default useSelect;
