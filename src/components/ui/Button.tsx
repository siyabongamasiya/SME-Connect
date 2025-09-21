import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon' | 'default';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// Helper to generate button classNames similar to shadcn/ui style usage
export function buttonVariants(
  opts: { variant?: ButtonVariant; size?: ButtonSize } = {},
) {
  const { variant = 'primary', size = 'md' } = opts;

  const baseClasses = 'btn';
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };
  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
    icon: 'btn-sm',
    default: '',
  };

  return `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`.trim();
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = `${buttonVariants({ variant, size })} ${className}`.trim();

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}