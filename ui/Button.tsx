import { forwardRef } from "react";
import classNames from "classnames";

// Styles
import s from "./Button.module.scss";

export type ButtonVariants = "solid" | "outline";
export type ButtonColors = "brand" | "surface";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariants;
  color: ButtonColors;
  small?: boolean;
  square?: boolean;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, small, leading, trailing, className, children, ...props }, forwardedRef) => {
    return (
      <button
        {...props}
        type="button"
        ref={forwardedRef}
        className={classNames(s.button, small && s.small, s[variant], s[color], className)}
      >
        {leading && leading}
        {children}
        {trailing && trailing}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
