"use client";

import { useState } from "react";
import ChromeButton from "@/components/ui/chrome-button";
import type { MemberDocument } from "@/components/ui/members-data";

interface DocumentsDownloadButtonProps {
  documents: MemberDocument[];
}

export default function DocumentsDownloadButton({ documents }: DocumentsDownloadButtonProps) {
  const [downloadIndex, setDownloadIndex] = useState<number | null>(null);

  const downloadDocuments = () => {
    documents.forEach((document, index) => {
      window.setTimeout(() => {
        const link = window.document.createElement("a");
        link.href = document.file;
        link.download = document.filename;
        link.rel = "noopener";
        window.document.body.appendChild(link);
        link.click();
        link.remove();
        setDownloadIndex(index);
      }, index * 350);
    });

    window.setTimeout(() => {
      setDownloadIndex(null);
    }, documents.length * 350 + 1200);
  };

  const label =
    downloadIndex === null
      ? "Download"
      : `Downloading ${documents[downloadIndex].filename}`;

  return (
    <ChromeButton
      type="button"
      onClick={downloadDocuments}
      disabled={documents.length === 0}
      aria-label="Download visible documents"
      className="min-w-36"
    >
      {label}
    </ChromeButton>
  );
}
