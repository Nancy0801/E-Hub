import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// cn is short for className, which is a common prop in React components
// It merges class names using clsx and tailwind-merge to handle conflicts
// Example usage:
// const buttonClass = cn("bg-blue-500", "text-white", "hover:bg-blue-700");
// This will combine the class names and resolve any conflicts, ensuring the final class name is optimized for Tailwind CSS.
// This utility function is useful for dynamically generating class names in React components,
// especially when using Tailwind CSS, as it helps to avoid conflicts and ensures that the final class names are valid and optimized.
// This function can be used in any React component to manage class names effectively.
// It can be imported and used like this:
// import { cn } from "@/lib/utils";
// const MyComponent = () => {
//   return <div className={cn("bg-blue-500", "text-white", "hover:bg-blue-700")}>Hello World</div>;
// };