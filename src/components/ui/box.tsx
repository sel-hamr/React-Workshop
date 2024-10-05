import { cn } from "@/lib/utils";
import Link from "next/link";

type BoxProps = {
  title: string;
  href: string;
  className?: string;
};

const Box = ({ title, className, href }: BoxProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "px-2 py-3 bg-zinc-800 text-white rounded-md cursor-pointer transition-all text-sm hover:bg-zinc-700  hover:shadow-md hover:text-gray-100 hover:outline outline-2 outline-zinc-700 outline-offset-2  ",
        className
      )}
    >
      {title}
    </Link>
  );
};

export default Box;
