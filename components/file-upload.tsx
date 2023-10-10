"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
  onUploadfail?: (error: Error) => void;
}

const FileUpload = ({
  onChange,
  value,
  endpoint,
  onUploadfail,
}: FileUploadProps) => {
  const flileType = value?.split(".").pop();

  if (value && flileType !== "pdf") {
    return (
      <div className="relative h-20 w-20">
        <Image
          priority
          fill
          sizes="large"
          src={value}
          alt="Upload"
          className="rounded-full"
        />
        <button
          onClick={() => {
            onChange("");
          }}
          type="button"
          className=" bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        onUploadfail!(error);
        // console.log(error);
      }}
    ></UploadDropzone>
  );
};

export default FileUpload;
