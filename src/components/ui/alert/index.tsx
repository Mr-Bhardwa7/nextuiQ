import React from "react";
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle, FiArrowRight } from 'react-icons/fi';
import Button from "../button";

export interface AlertProps {
  variant: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  showLink?: boolean;
  linkHref?: string;
  linkText?: string;
  onClose?: () => void;
  className?: string;
  id?: string;
}

const Alert: React.FC<AlertProps> = ({
  variant,
  title,
  message,
  showLink = false,
  linkHref = "#",
  linkText = "Learn more",
  onClose,
  className = "",
  id = `alert-${Math.random().toString(36).substr(2, 9)}`,
}) => {
  const variantClasses = {
    success: {
      container: "border-emerald-200 bg-emerald-50",
      icon: "text-emerald-500",
      title: "text-emerald-800",
      text: "text-emerald-600",
      link: "text-emerald-600 hover:text-emerald-700 underline"
    },
    error: {
      container: "border-red-200 bg-red-50",
      icon: "text-red-500",
      title: "text-red-800",
      text: "text-red-600",
      link: "text-red-600 hover:text-red-700 underline"
    },
    warning: {
      container: "border-amber-200 bg-amber-50",
      icon: "text-amber-500",
      title: "text-amber-800",
      text: "text-amber-600",
      link: "text-amber-600 hover:text-amber-700 underline"
    },
    info: {
      container: "border-blue-200 bg-blue-50",
      icon: "text-blue-500",
      title: "text-blue-800",
      text: "text-blue-600",
      link: "text-blue-600 hover:text-blue-700 underline"
    },
  };

  const icons = {
    success: <FiCheckCircle className="w-5 h-5" />,
    error: <FiXCircle className="w-5 h-5" />,
    warning: <FiAlertCircle className="w-5 h-5" />,
    info: <FiInfo className="w-5 h-5" />
  };

  return (
    <div
      className={`rounded-lg border p-4 ${variantClasses[variant].container} ${className}`}
      role="alert"
      aria-labelledby={`${id}-title`}
      aria-describedby={`${id}-message`}
    >
      <div className="flex items-start gap-3">
        <div className={variantClasses[variant].icon} aria-hidden="true">
          {icons[variant]}
        </div>

        <div className="flex-1">
          <h4 
            id={`${id}-title`}
            className={`text-sm font-semibold ${variantClasses[variant].title}`}
          >
            {title}
          </h4>

          <p 
            id={`${id}-message`}
            className={`mt-1 text-sm ${variantClasses[variant].text}`}
          >
            {message}
          </p>

          {showLink && (
            <Button
              tag="a"
              href={linkHref}
              variant="ghost"
              size="sm"
              className="mt-2 p-0 hover:underline"
              endIcon={<FiArrowRight className="ml-1" />}
            >
              {linkText}
            </Button>
          )}
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className={`${variantClasses[variant].text} hover:opacity-70 p-1 rounded-lg`}
            aria-label={`Close ${title} alert`}
          >
            <svg 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
