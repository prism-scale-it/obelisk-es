import React, { useMemo } from "react";
import type { SignatureData } from "../types";
import { generateEmailSignature } from "../utils/generateSignature";

interface SignaturePreviewProps {
  data: SignatureData;
}

export const SignaturePreview: React.FC<SignaturePreviewProps> = ({ data }) => {
  const htmlContent = useMemo(() => generateEmailSignature(data), [data]);

  return (
    <div className="border-2 rounded-lg p-4 border-gray-300 bg-gray-50 overflow-hidden flex justify-center">
      <iframe
        srcDoc={htmlContent}
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "500px",
          border: "none",
          backgroundColor: "white",
        }}
        title="Signature Preview"
      />
    </div>
  );
};
