import React from "react";
import { AutoCompleteDataType } from ".";
import { cn } from "@/lib/utils";

const DefaultInputItems = ({
  filteredSuggestions,
  setQuery,
  highlightedIndex,
}: AutoCompleteDataType) => {
  return (
    <div className="w-full mt-2 absolute top-8 bg-white rounded-lg text-sm border border-input shadow-sm px-2 py-1 max-h-[250px] overflow-auto cursor-pointer">
      {filteredSuggestions.map((item, key) => (
        <p
          onClick={() => setQuery(item)}
          className={cn(
            "bg-transparent",
            key == highlightedIndex && "bg-slate-500"
          )}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default DefaultInputItems;
