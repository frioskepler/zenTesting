declare const useReport: (reportID?: string) => {
    goToDashboard: () => void;
    openReport: (reportID: string) => void;
    createNewReport: (reportType?: string) => void;
    favReport: (id: string) => void;
    outline: {
        tag: string;
        text: string | null;
    }[];
};
export default useReport;
