import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

type DefaultInputProps = {
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlue: () => void;
  handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  query: string;
  className?: string;
};

const DefaultInput = ({
  className,
  handleInputBlue,
  handleInputChange,
  handleInputKeyDown,
  query,
}: DefaultInputProps) => {
  return (
    <>
      <Input
        type="search"
        placeholder="Search..."
        className={cn("w-full rounded-lg bg-background pl-8", className)}
        onChange={handleInputChange}
        onBlur={handleInputBlue}
        onKeyDown={handleInputKeyDown}
        value={query}
      />
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
    </>
  );
};

export default DefaultInput;
