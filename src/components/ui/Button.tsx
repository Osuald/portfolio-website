import { forwardRef } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon: Icon,
      iconPosition = "left",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
      secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
      outline:
        "border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30",
      ghost:
        "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
          "inline-flex items-center justify-center space-x-2",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <>
            <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {Icon && iconPosition === "left" && <Icon className="h-5 w-5" />}
            {children}
            {Icon && iconPosition === "right" && <Icon className="h-5 w-5" />}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
