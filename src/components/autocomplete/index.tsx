"use client";
import React from "react";
import { cn } from "@/lib/utils";
import useAutoComplete from "./useAutoComplete";
import HighlightMatch from "./highlightMatch";
import DefaultInput from "./input";
import DefaultItems from "./items";

export type AutoCompleteDataType = {
  query: string;
  filteredSuggestions: string[];
  isPopoverOpen: boolean;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleInputBlue: () => void;
  handleInputKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  highlightedIndex: number;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setIsPopoverOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type AutocompleteProps = {
  className?: string;
  renderInput?: (props: AutoCompleteDataType) => JSX.Element;
  renderItems?: (props: AutoCompleteDataType) => JSX.Element;
  suggestions: string[];
};

const Autocomplete = ({
  className,
  renderInput,
  renderItems,
  suggestions,
}: AutocompleteProps) => {
  const autoCompleteData = useAutoComplete({
    suggestions,
  });

  return (
    <div className={cn("relative", className)}>
      {renderInput ? (
        renderInput({
          ...autoCompleteData,
        })
      ) : (
        <DefaultInput {...autoCompleteData} />
      )}
      {autoCompleteData.isPopoverOpen &&
        autoCompleteData.filteredSuggestions.length > 0 && (
          <>
            {renderItems ? (
              renderItems({ ...autoCompleteData })
            ) : (
              <DefaultItems {...autoCompleteData} />
            )}
          </>
        )}
    </div>
  );
};

Autocomplete.highlightMatch = HighlightMatch;

export default Autocomplete;
