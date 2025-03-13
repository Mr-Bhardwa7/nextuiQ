import React from "react";
import { Card } from "@/components/ui/card";
import { useDropzone } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";

interface DropzoneProps {
  onFileUpload?: (files: File[]) => void;
}

const DropzoneComponent: React.FC<DropzoneProps> = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles: File[]) => {
    onFileUpload?.(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/png": [],
      "image/jpeg": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
  });

  return (
    <Card className="p-6">
      <h2 className="mb-6 text-lg font-semibold">Dropzone</h2>
      <div className="transition border border-gray-300 border-dashed cursor-pointer dark:hover:border-brand-500 dark:border-gray-700 rounded-xl hover:border-brand-500">
        <form
          {...getRootProps()}
          className={`dropzone rounded-xl border-dashed border-gray-300 p-7 lg:p-10 ${
            isDragActive
              ? "border-brand-500 bg-gray-100 dark:bg-gray-800"
              : "border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
          }`}
          id="demo-upload"
          aria-label="File upload area"
        >
          <input {...getInputProps()} aria-label="File input" />

          <div className="flex flex-col items-center m-0">
            <div className="mb-[22px] flex justify-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-400">
                <FiUploadCloud size={29} />
              </div>
            </div>

            <h4 className="mb-3 font-semibold text-gray-800 text-theme-xl dark:text-white/90">
              {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
            </h4>

            <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-gray-700 dark:text-gray-400">
              Drag and drop your PNG, JPG, WebP, SVG images here or browse
            </span>

            <span className="font-medium underline text-theme-sm text-brand-500">
              Browse File
            </span>
          </div>
        </form>
      </div>
    </Card>
  );
};

DropzoneComponent.displayName = "Dropzone";

export const Dropzone = DropzoneComponent;

