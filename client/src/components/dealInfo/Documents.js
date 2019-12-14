import React from "react";

function Documents() {
  return (
    <div>
      <div className="doc-box1">
        <div className="doc-head1">Common Documents</div>
        <div className="down1">
          <div className="doc-text-left">Marketing Deck.docx</div>
          <button className="doc-text-right">
            <i className="fas fa-download"></i>Download
          </button>
        </div>
        <div className="down2">
          <div className="doc-text-left">Presentation.pptx</div>
          <button className="doc-text-right">
            <i className="fas fa-download"></i>Download
          </button>
        </div>
      </div>
      <div className="doc-box2">
        <div className="doc-head2">Confidential Documents</div>
        <div className="down1">
          <div className="doc-text-left">Executive Summary.docx</div>
          <button className="doc-text-right">
            <i className="fas fa-download"></i>Download
          </button>
        </div>
        <div className="down2">
          <div className="doc-text-left">Issuance Summary.xls</div>
          <button className="doc-text-right">
            <i className="fas fa-download"></i>Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default Documents;
