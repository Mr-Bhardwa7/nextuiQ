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
      <h2 className="mb-6 text-lg font-semibold text-[oklch(var(--theme-foreground))]">Dropzone</h2>
      <div className="transition border border-[oklch(var(--theme-border))] border-dashed cursor-pointer hover:border-[oklch(var(--theme-primary))] rounded-xl">
        <form
          {...getRootProps()}
          className={`dropzone rounded-xl border-dashed p-7 lg:p-10 ${
            isDragActive
              ? "border-[oklch(var(--theme-primary))] bg-[oklch(var(--theme-muted))]"
              : "border-[oklch(var(--theme-border))] bg-[oklch(var(--theme-muted))]"
          }`}
          id="demo-upload"
          aria-label="File upload area"
        >
          <input {...getInputProps()} aria-label="File input" />

          <div className="flex flex-col items-center m-0">
            <div className="mb-[22px] flex justify-center">
              <div className="flex h-[68px] w-[68px] items-center justify-center rounded-full 
                bg-[oklch(var(--theme-muted))] text-[oklch(var(--theme-muted-foreground))]">
                <FiUploadCloud size={29} />
              </div>
            </div>

            <h4 className="mb-3 font-semibold text-[oklch(var(--theme-foreground))]">
              {isDragActive ? "Drop Files Here" : "Drag & Drop Files Here"}
            </h4>

            <span className="text-center mb-5 block w-full max-w-[290px] text-sm text-[oklch(var(--theme-muted-foreground))]">
              Drag and drop your PNG, JPG, WebP, SVG images here or browse
            </span>

            <span className="font-medium underline text-theme-sm text-[oklch(var(--theme-primary))]">
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

