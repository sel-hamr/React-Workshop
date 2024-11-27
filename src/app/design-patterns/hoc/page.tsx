import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>HOC</Section.Title>
        <Section.Description>
          The Higher Order Component (HOC) Pattern in React is a design pattern
          that allows you to reuse component logic. A higher-order component is
          a function that takes a component and returns a new component with
          additional props. HOCs are a powerful tool for code reuse and
          abstraction in React.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <Section.Code>
          {`
            import React from "react";

            const Label = ({ name ,color}: { name: string ,color:string}) => {
                return (
                    <div>
                        <p style={{ color: color }}>Hello {name}</p>
                    </div>
                );
          
            const withHey = (Component: React.FC, label: string) => {
                return (props: any) => {
                    const newProps = { [label]: "Hey" + props[label] };
                    return <Component {...newProps} {...props} />;
                };
                
            const SayHey = withData(Label, { label: "name" });
                
            export const DemoHOC = () => {
                return <RedTitle size="20px" />;
            };
                  `}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        In this example, we have a higher-order component that takes a component
        and a label as arguments. The higher-order component returns a new
        component that adds &apos;Hey&apos; to the value of the label prop. We
        then use the higher-order component to create a new component called
        SayHey that adds &apos;Hey&apos; to the value of the name prop.
      </Section.Description>
    </Section>
  );
}
