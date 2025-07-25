"use client";

import toast from "react-hot-toast";

import { UploadDropzone } from "@/lib/uploadthing";
import { ourFileRouter } from "@/app/api/uploadthing/core";

interface FileUploadProps {
  onChange: (url?: string) => void;
  endpoint: keyof typeof ourFileRouter;
}

export const FileUpload = ({ onChange, endpoint }: FileUploadProps) => {
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].ufsUrl );
      }}
      onUploadError={(error: Error) => {
        toast.error(`${error?.message}`);
      }}
      className="flex flex-col items-center justify-center border-2  border-gray-300 p-6 rounded-lg max-h-80 text-black bg-gray-700"

      
/>



  );
};
