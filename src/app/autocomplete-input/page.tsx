"use client";
import Autocomplete from "@/components/autocomplete";
import HighlightMatch from "@/components/autocomplete/highlightMatch";
import { Input } from "@/components/ui/input";
import Section from "@/components/ui/section";
import { Search } from "lucide-react";
import React from "react";

const suggestions = [
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tomato",
  "Ugli fruit",
  "Vanilla",
  "Watermelon",
  "Xigua",
  "Yellow passion fruit",
  "Zucchini",
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

const page = () => {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Autocomplete Input</Section.Title>
        <Section.Description>
          autocomplete is a component with custom rendering for the input field
          and the list of filtered suggestions can also highlight text ...
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <Autocomplete
          className="flex-1 basis-72 max-w-96"
          renderInput={({
            query,
            handleInputChange,
            handleInputBlue,
            handleInputKeyDown,
          }) => (
            <>
              <Input
                type="search"
                placeholder="Search for something"
                className="w-full rounded-full border-blue-500 text-blue-900 bg-background pl-8 "
                onChange={handleInputChange}
                onBlur={handleInputBlue}
                onKeyDown={handleInputKeyDown}
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </>
          )}
          suggestions={suggestions}
          renderItems={({ filteredSuggestions, query }) => (
            <div className="w-full mt-2 absolute top-8 bg-white rounded-lg text-sm border border-input shadow-sm px-2 py-1 max-h-[250px] overflow-auto">
              {filteredSuggestions.map((item) => (
                <p>{<HighlightMatch query={query} text={item} />}</p>
              ))}
            </div>
          )}
        />
        <Autocomplete
          className="flex-1 basis-72 max-w-96"
          suggestions={suggestions}
        />
      </Section.Body>
      <p className="text-2xl font-semibold">How to use :</p>
      <pre className="bg-zinc-800 text-white p-4 rounded-md w-full">
        {`        <Autocomplete className="flex-1 basis-72 max-w-96" />
        <Autocomplete
          className="flex-1 basis-72 max-w-96"
          renderInput={({
            query,
            handleInputChange,
            handleInputBlue,
            handleInputKeyDown,
          }) => (
            <>
              <Input
                type="search"
                placeholder="Search for something"
                className="w-full rounded-full border-blue-500 text-blue-900 bg-background pl-8 "
                onChange={handleInputChange}
                onBlur={handleInputBlue}
                onKeyDown={handleInputKeyDown}
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            </>
          )}
          renderItems={({ filteredSuggestions, query }) => (
            <div className="w-full mt-2 absolute top-8 bg-white rounded-lg text-sm border border-input shadow-sm px-2 py-1 max-h-[250px] overflow-auto">
              {filteredSuggestions.map((item) => (
                <p>{<HighlightMatch query={query} text={item} />}</p>
              ))}
            </div>
          )}
        />`}
      </pre>
    </Section>
  );
};

export default page;
