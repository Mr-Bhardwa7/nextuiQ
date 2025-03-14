import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center h-10 w-10 rounded-full 
        bg-[hsl(var(--color-background))] 
        text-[hsl(var(--color-text-secondary))]
        hover:bg-[hsl(var(--color-muted))]
        border border-[hsl(var(--color-text-muted))]
        transition-colors duration-300"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {/* Sun icon */}
      <svg
        className={`h-5 w-5 ${theme === 'dark' ? 'hidden' : 'block'}`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 2.291c.414 0 .75.336.75.75v1.25a.75.75 0 01-1.5 0v-1.25c0-.414.336-.75.75-.75zm0 5.252a2.457 2.457 0 100 4.914 2.457 2.457 0 000-4.914zM6.294 10a3.707 3.707 0 117.414 0 3.707 3.707 0 01-7.414 0zm9.687-4.92a.75.75 0 010 1.06l-.884.884a.75.75 0 11-1.06-1.06l.883-.884a.75.75 0 011.061 0zM17.708 10a.75.75 0 01-.75.75h-1.25a.75.75 0 010-1.5h1.25c.414 0 .75.336.75.75zm-3.536 5.98a.75.75 0 001.06 0 .75.75 0 000-1.06l-.883-.884a.75.75 0 10-1.061 1.06l.884.884zM10 15.709a.75.75 0 01.75.75v1.25a.75.75 0 01-1.5 0v-1.25c0-.414.336-.75.75-.75zm-4.036-.813a.75.75 0 001.06 1.06l.884-.883a.75.75 0 10-1.06-1.061l-.884.884zM3.542 10a.75.75 0 01-.75.75h-1.25a.75.75 0 010-1.5h1.25c.414 0 .75.336.75.75zm1.36-4.036a.75.75 0 101.061-1.06l-.884-.884a.75.75 0 00-1.06 1.06l.883.884z"
          fill="currentColor"
        />
      </svg>
      {/* Moon icon */}
      <svg
        className={`h-5 w-5 ${theme === 'light' ? 'hidden' : 'block'}`}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.455 11.97l.725.191a1.35 1.35 0 00-1.236-.74l.511.549zM8.03 2.546l.55.51a1.35 1.35 0 00-.741-1.235l.191.725zM12.915 13.004a5.919 5.919 0 01-5.918-5.919h-1.5c0 4.097 3.321 7.419 7.418 7.419v-1.5zm4.029-1.583a5.908 5.908 0 01-4.029 1.583v1.5c1.95 0 3.726-.754 5.05-1.984l-1.021-1.099zm-.214.358c-.786 2.982-3.502 5.18-6.73 5.18v1.5c3.926 0 7.225-2.674 8.18-6.298l-1.45-.382zM10 16.959c-3.843 0-6.958-3.116-6.958-6.959h-1.5c0 4.672 3.787 8.459 8.458 8.459v-1.5zm-6.958-6.959c0-3.227 2.198-5.943 5.18-6.729l-.383-1.45C4.215 2.776 1.542 6.075 1.542 10h1.5zm3.955-2.915a5.908 5.908 0 011.583-4.029L7.481 2.035A7.397 7.397 0 005.497 7.085h1.5z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};
