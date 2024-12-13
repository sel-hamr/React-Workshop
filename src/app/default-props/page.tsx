import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>
          Enhancing Flexibility in React Components with Default Props
        </Section.Title>
        <Section.Description>
          When building reusable React components, one challenge developers
          often face is balancing flexibility with simplicity. For example, how
          do you provide sensible defaults while still allowing the consumers of
          your component to customize its behavior? The solution lies in
          leveraging default props effectively.
          <br />
          In this article, we’ll discuss how to implement default props in React
          components to make them adaptable and user-friendly without
          compromising flexibility.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">
        The Problem: Managing Props Dynamically
      </p>

      <Section.Description>
        In real-world applications, React components often need to handle a wide
        range of inputs (props) that influence their appearance or behavior. For
        example:
        <ul className="list-disc px-8 my-2">
          <li>
            A button component might need to change its size, color, or disabled
            state based on certain conditions.
          </li>
          <li>
            A form field could adjust its placeholder text or validation rules
            dynamically.
          </li>
        </ul>
        While these customizations make components powerful, they can also lead
        to problems. Developers may forget to set certain props or pass
        incorrect values, causing the component to behave unexpectedly.
      </Section.Description>
      <p className="text-2xl font-semibold">The Solution: Default Props</p>
      <Section.Description>
        Default props are a powerful feature in React that allow you to define
        default values for a component’s props. When a prop is not provided by
        the parent component, React automatically uses the default value
        instead. This ensures that the component always has the necessary data
        to render correctly, even if the parent component forgets to pass
        certain props.
        <br />
        Here’s a simple example of setting default props in a functional React
        component:
      </Section.Description>
      <Section.Code>
        {`
import Button from "./components/button";
import { Loading, Warning } from "./components/icons";

export default function App() {
  return (
    <>
      <Button type="primary" icon={<Loading color="white" />} />
      <Button type="secondary" icon={<Loading />} />
      <Button icon={<Loading />} />
    </>
  );
}

const Button = ({
  type,
  icon,
  size,
  disabled,
}: {
  type?: string;
  icon: ReactElement;
  size?: string;
  disabled?: string;
}) => {
  const defaultProps = {
    size: size === "lg" ? "lg" : "md",
    color: type === "primary" ? "white" : "black",
  };

  const newProps = {
    ...defaultProps,
    ...icon.props,
  };
  if (disabled) {
    newProps.color = "gray";
  }

  const clonedIcon = React.cloneElement(icon, newProps);

  return <button>Submit {clonedIcon}</button>;
};

export default Button;
export const Loading = ({ size, color }: { size?: string; color?: string }) => {
  return <span style={{ fontSize: size, color: color }}>⏳</span>;
};

export const Error = () => {
  return <span>❌</span>;
};

export const Warning = () => {
  return <span>⚠️</span>;
};

export const Avatar = () => {
  return <span>😎</span>;
};

        `}
      </Section.Code>
    </Section>
  );
}
