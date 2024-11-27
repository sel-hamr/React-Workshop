import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Recursive Component</Section.Title>
        <Section.Description>
          The Recursive Component Pattern in React is a design pattern is a
          design pattern that allows a component to call itself. This pattern is
          useful when you need to render a component that can have an arbitrary
          number of children, or when you need to render a component that can
          have children of different types.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example with arrays: </p>
      <Section.Body>
        <Section.Code>
          {`
type DataType = {
  data: {
    name: string;
    children: DataType["data"][];
  };
};

export default function RecursiveWithArray({ data }: DataType) {
  return (
    <div className="mt-8">
      <p>{data.name}</p>
      {data.children && data.children.length > 0 && (
        <div>
          {data.children.map((child, index) => (
            <RecursiveWithArray key={index} data={child} />
          ))}
        </div>
      )}
    </div>
  );
}
            `}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        in this example with array data we see how we can use recursive
        component to render nested array data. we can also use this pattern to
        render nested object data like we gone use in next example.
      </Section.Description>
      <p className="text-2xl font-semibold">Example with Object: </p>
      <Section.Body>
        <Section.Code>
          {`
const isObject = (value: string) => typeof value === "object" && value !== null;

export default function RecursiveWithObject({ data }: Record<string, any>) {
  if (!isObject(data)) return <li>{data}</li>;
  else {
    const values = Object.entries(data);
    return values.map(([key, value]) => {
      return (
        <>
          <p>{key}</p>
          <RecursiveWithObject data={value} />
        </>
      );
    });
  }
}
            `}
        </Section.Code>
      </Section.Body>
    </Section>
  );
}
