"use client";

import { FileIcon, X } from "lucide-react";
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

  if (value && flileType === "pdf") {
    return (
      <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
        <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
        <a
          href={value}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-sm text-indigo-400 dark:text-indigo-400 hover:underline"
        >
          {value}
        </a>
        <button
          onClick={() => {
            onChange("");
          }}
          type="button"
          className=" bg-rose-500 text-white p-1 rounded-full absolute -top-2 -right-2 shadow-sm"
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
