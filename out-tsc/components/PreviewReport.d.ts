import React from 'react';
import '../pdf.css';
declare const PreviewReport: ({ reportID, printPDF }: {
    reportID: string;
    printPDF: boolean;
}) => React.JSX.Element;
export default PreviewReport;
