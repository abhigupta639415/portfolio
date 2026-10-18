import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', showLabel = false }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-2 p-2 rounded-xl transition-all duration-200 cursor-pointer
        bg-transparent hover:bg-[#E7E3D8]/60 dark:hover:bg-[#34332E]/60
        text-[#171717] dark:text-[#F5F3EA]
        border border-[#E7E3D8] dark:border-[#34332E]
        hover:border-[#C49A2C] dark:hover:border-[#D4AF37]
        focus-visible:outline-2 focus-visible:outline-[#C49A2C] dark:focus-visible:outline-[#D4AF37]
        ${className}`}
      title={label}
      aria-label={label}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#D4AF37] transition-transform duration-300 transform rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#66645F] hover:text-[#C49A2C] transition-transform duration-300 transform -rotate-12 hover:rotate-0" />
        )}
      </div>
      {showLabel && (
        <span className="text-xs font-medium font-sans">
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </span>
      )}
    </button>
  );
}
