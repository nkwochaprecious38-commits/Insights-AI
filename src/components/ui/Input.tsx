import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[#172B4D]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-[#111827] placeholder:text-[#9CA3AF] transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-[#356AE6] focus:border-transparent",
            error ? "border-red-400" : "border-[#E4E7EC] hover:border-[#9CA3AF]",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        {hint && !error && <p className="text-xs text-[#667085]">{hint}</p>}
      </div>
    );
  }
);
Input.displayName = "Input";
export default Input;
