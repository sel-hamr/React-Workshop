import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Understanding Re-rendering in React</Section.Title>
        <Section.Description>
          React is known for its efficient rendering engine that optimizes
          updates to the DOM, keeping UI interactions fast and responsive. But
          understanding how and when React triggers re-renders, especially when
          passing elements as props or children, is key to building performant
          applications. This blog post will dive into the mechanisms behind
          React&apos;s re-rendering process, discuss how elements passed as
          props or children can impact re-renders, and explore how React uses
          Object.is for re-render checks.
          <br />
          React uses Object.is to compare the new and previous values of state
          and props. If Object.is returns false, React checks whether the
          component&apos;s type is the same before deciding to re-render. For
          children components, React does not automatically re-render unless
          their props or context change.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Managing Re-Renders</p>

      <Section.Description>
        Here are some key strategies to minimize unnecessary re-renders:
        <ul className="list-disc px-8 my-2">
          <li>
            Memoize Components with React.memo: This prevents functional
            components from re-rendering unless their props have changed.
          </li>
          <li>
            Use useCallback and useMemo: Memoize functions and values to
            maintain stable references and prevent triggering re-renders in
            child components.
          </li>
          <li>
            Avoid Inline Functions and Objects in JSX: These create new
            references every render, causing unnecessary re-renders when passed
            as props.
          </li>
          <li>
            Passing Elements as Props: Passing JSX elements as props can lead to
            re-renders because React treats them as unique instances. Instead,
            use configuration data or wrap components with React.memo.
          </li>
        </ul>
      </Section.Description>
    </Section>
  );
}
