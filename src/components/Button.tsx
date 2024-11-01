import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";


export type ButtonProps = { 
  variant?: "primary" | "secondary" | "tertiary";
  block?: boolean;
} & HTMLAttributes<HTMLButtonElement>


const classes = cva( "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg", {
  variants: {
    block: { 
      true: "w-full" 
    },
    variant: {
      primary: "border-2 border-transparent [background:linear-gradient(_var(--color-gray-950),_var(--color-gray-950))_padding-box,conic-gradient(from_45deg,_var(--color-violet-400),_var(--color-fuchsia-400),_var(--color-amber-300),_var(--color-teal-300),_var(--color-violet-400))_border-box]",
      secondary: "bg-gray-100 text-gray-950",
      tertiary: "bg-gray-800 text-gray-200"
    },
  },
  defaultVariants: {
    variant: "primary",
    block: false,
  },
});

export const Button = (props: ButtonProps ) => {
  
  const { 
    className = "",     // className prop is passed to the button
    children,           // children prop is passed to the button  
    ...otherProps       // other props are passed by cva  
  } = props;
  
  return (
    <button className={classes({ ...otherProps, className})}>
      {children}
    </button>
  )
}