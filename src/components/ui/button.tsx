import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0057FF] text-white hover:bg-[#0046CC] focus-visible:ring-[#0057FF] shadow-md hover:shadow-lg",
        secondary:
          "bg-[#00B86B] text-white hover:bg-[#009A59] focus-visible:ring-[#00B86B] shadow-md hover:shadow-lg",
        outline:
          "border-2 border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white focus-visible:ring-[#0057FF]",
        ghost:
          "text-[#111827] hover:bg-gray-100 focus-visible:ring-gray-400",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600",
        link: "text-[#0057FF] underline-offset-4 hover:underline focus-visible:ring-[#0057FF]",
        white:
          "bg-white text-[#0057FF] hover:bg-gray-50 shadow-md hover:shadow-lg",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
