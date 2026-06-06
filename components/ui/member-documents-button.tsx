"use client";

import { useRouter } from "next/navigation";
import ChromeButton from "@/components/ui/chrome-button";

interface MemberDocumentsButtonProps {
  href: string;
}

export default function MemberDocumentsButton({ href }: MemberDocumentsButtonProps) {
  const router = useRouter();

  return (
    <ChromeButton
      type="button"
      onClick={() => router.push(href)}
      aria-label="Open member documents"
      className="min-w-36"
    >
      Necessary
    </ChromeButton>
  );
}
