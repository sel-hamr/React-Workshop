import { cn } from "@/lib/utils";

type HighlightMatchProps = {
  query: string;
  text: string;
  className?: string;
};

const HighlightMatch = ({ query, text, className }: HighlightMatchProps) => {
  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  if (parts.length === 1 || query === "") {
    return <>{text}</>;
  }
  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark key={index} className={cn("bg-yellow-200", className)}>
            {part}
          </mark>
        ) : (
          <>{part}</>
        )
      )}
    </>
  );
};

export default HighlightMatch;
