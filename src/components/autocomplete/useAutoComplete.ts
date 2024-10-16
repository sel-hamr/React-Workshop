import React, {
  useCallback,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";

type UseAutoCompleteProps = {
  suggestions: string[];
};

const useAutoComplete = ({ suggestions }: UseAutoCompleteProps) => {
  const [query, setQuery] = useState("");
  const queryDeferredValue = useDeferredValue(query);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const firstUpdate = useRef(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
  };

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    if (queryDeferredValue.trim() === "") {
      setFilteredSuggestions(suggestions);
    } else {
      const suggestionsFiltered = suggestions.filter((item) =>
        item.toLowerCase().includes(queryDeferredValue.toLowerCase())
      );
      setFilteredSuggestions(suggestionsFiltered);
      console.log(suggestionsFiltered, queryDeferredValue);
      if (suggestionsFiltered[0] !== queryDeferredValue) setIsPopoverOpen(true);
    }
  }, [queryDeferredValue]);

  const handleInputBlue = () => {
    setIsPopoverOpen(false);
  };
  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowDown") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === filteredSuggestions.length - 1 ? 0 : prevIndex + 1
        );
      } else if (e.key === "ArrowUp") {
        setHighlightedIndex((prevIndex) =>
          prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1
        );
      } else if (e.key === "Enter") {
        setQuery(filteredSuggestions[highlightedIndex]);
      }
    },
    [filteredSuggestions, highlightedIndex]
  );

  return {
    query: queryDeferredValue,
    setIsPopoverOpen,
    filteredSuggestions,
    isPopoverOpen,
    handleInputChange,
    handleInputBlue,
    handleInputKeyDown,
    highlightedIndex,

    setQuery,
  };
};

export default useAutoComplete;
