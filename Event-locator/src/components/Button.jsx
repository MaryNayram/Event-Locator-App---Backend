import { twMerge } from "tailwind-merge";

export default function Button({ children, className, ...props }) {
    return (
        <button 
            type="button"
            className={twMerge("px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-950", className)}
            {...props}
        >
            {children}
        </button>
    );
}
