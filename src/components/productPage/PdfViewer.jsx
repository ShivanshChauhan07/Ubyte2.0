import React from "react";

const PdfViewer = ({ source }) => {
  return (
    <div>
      <embed
        src={source}
        width="100%"
        height="600px"
        type="application/pdf"
        loading="lazy"
      />
    </div>
  );
};

export default PdfViewer;
