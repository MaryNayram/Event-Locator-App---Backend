import { twMerge } from "tailwind-merge";

export default function Input({ label, textarea, className, ...props }) {
    const baseStyle =
        "w-full p-2 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

    const inputId = props.id || label?.replace(/\s+/g, "-").toLowerCase(); // Generate an ID from label if not provided

    return (
        <p className="flex flex-col gap-1 my-4">
            {label && (
                <label htmlFor={inputId} className="text-sm font-bold uppercase text-stone-500">
                    {label}
                </label>
            )}
            {textarea ? (
                <textarea id={inputId} {...props} className={twMerge(baseStyle, className)} />
            ) : (
                <input id={inputId} type="text" {...props} className={twMerge(baseStyle, className)} />
            )}
        </p>
    );
}
