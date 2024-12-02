import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Understanding React&apos;s key</Section.Title>
        <Section.Description>
          React&apos;s key prop is a cornerstone for managing component
          rendering efficiently. This blog post explores the importance of the
          key prop with practical examples and highlights what happens when it
          is not provided. We&apos;ll also discuss insights inspired by your
          code and video reference.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">What is the key Prop?</p>

      <Section.Description>
        The key prop in React uniquely identifies elements within a list or
        dynamically rendered components. It ensures React can track which
        elements have changed, been added, or removed, allowing for efficient
        DOM updates.
      </Section.Description>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Description>
        Let’s consider a React application with two counters (e.g., for
        &apos;milk&apos; and &apos;tea&apos;). Switching between them
        demonstrates why key is essential.
      </Section.Description>
      <Section.Body>
        <Section.Code>
          {`
import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default function Page() {
  const [milkOrTea, setShow] = React.useState(true);

  return (
    <div>
      <h1>Key Prop Demonstration</h1>
      <button onClick={() => setShow(!milkOrTea)}>
        Toggle to {milkOrTea ? "tea" : "milk"}
      </button>

      {/* Switching between components with unique keys */}
      {milkOrTea ? (
        <Counter key="milk" />
      ) : (
        <Counter key="tea" />
      )}
    </div>
  );
}
`}
        </Section.Code>
      </Section.Body>
      <p className="text-2xl font-semibold">
        How the key Prop Works in This Example
      </p>
      <Section.Description>
        <b>1 - Component Differentiation</b>
        <ul className="list-disc px-8 my-2">
          <li>
            Each Counter has a unique key (milk or tea).
            <br />
          </li>
          <li>
            When toggling between milkOrTea, React creates a new instance of the
            Counter for each unique key.
          </li>
        </ul>
      </Section.Description>
      <Section.Description>
        <b>2 - Fresh State</b>
        <ul className="list-disc px-8 my-2">
          <li>
            The key ensures React treats the two Counter components as entirely
            separate. This prevents state (like count) from being shared between
            them.
            <br />
          </li>
        </ul>
      </Section.Description>
      <p className="text-2xl font-semibold">
        What Happens Without the key Prop?
      </p>
      <Section.Description>
        If the key is not provided:
        <br />
        <b>1 - Re-rendering All Components</b>
        <br />
        <ul className="list-disc px-8 my-2">
          <li>
            React cannot uniquely identify each element, so it re-renders the
            entire list or component tree.
            <br />
          </li>
          <li>
            This leads to inefficiency, especially in large lists or complex
            UIs.
          </li>
        </ul>
        <b>2 - Unintended State Sharing</b>
        <ul className="list-disc px-8 my-2">
          <li>
            React may reuse the same component instance even when toggling
            between elements, resulting in shared states across seemingly
            different components.
          </li>
        </ul>
      </Section.Description>
    </Section>
  );
}
