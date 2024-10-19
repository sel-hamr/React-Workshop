import { DemoPartialComponent } from "@/components/design-patterns/partial-component";
import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Partial Component</Section.Title>
        <Section.Description>
          This pattern is used to create a component that can be used as a
          partial component in other components. This pattern is useful when you
          have a component that is used in multiple places in your application,
          and you want to avoid duplicating the code for that component.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <DemoPartialComponent />
      </Section.Body>
      <p className="text-2xl font-semibold">How to use :</p>
      <Section.Code>
        {`
import React from "react";

export const Label = ({ color, size }: { color: string; size: string }) => {
  return (
    <div>
      <p style={{ color: color, fontSize: size }}>Hello World</p>
    </div>
  );
};

export const partialComponent = (Component: React.FC, partialProps: any) => {
  return (props: any) => {
    return <Component {...partialProps} {...props} />;
  };
};

const RedTitle = partialComponent(Label, { color: "red" });

export const DemoPartialComponent = () => {
  return <RedTitle size="20px" />;
};
          `}
      </Section.Code>
    </Section>
  );
}
