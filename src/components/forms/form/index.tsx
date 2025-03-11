import React, { FC, ReactNode, FormEvent } from "react";

export interface FormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  autoComplete?: 'on' | 'off';
  id?: string;
  name?: string;
  noValidate?: boolean;
}

const Form: FC<FormProps> = ({
  onSubmit,
  children,
  className = '',
  disabled = false,
  loading = false,
  autoComplete = 'off',
  id,
  name,
  noValidate = false,
}) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!disabled && !loading) {
      onSubmit(event);
    }
  };

  return (
    <form
      id={id}
      name={name}
      onSubmit={handleSubmit}
      className={`space-y-4 ${disabled || loading ? 'opacity-70 pointer-events-none' : ''} ${className}`}
      autoComplete={autoComplete}
      noValidate={noValidate}
      aria-disabled={disabled || loading}
    >
      {loading && (
        <div className="absolute inset-0 bg-white/50 dark:bg-slate-900/50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}
      <div className={loading ? 'opacity-50' : ''}>
        {children}
      </div>
    </form>
  );
};

export default React.memo(Form);
