import { DemoContainerComponents } from "@/components/design-patterns/container-component";
import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Container Components</Section.Title>
        <Section.Description>
          The Container Components Pattern in React is a design pattern that use
          to separate the logic and the UI of a component. The container
          component is responsible for fetching data, managing state, and
          passing data to the presentational component. The presentational
          component is responsible for rendering the UI based on the data passed
          to it.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <DemoContainerComponents />
      </Section.Body>
      <p className="text-2xl font-semibold">How to use :</p>
      <Section.Code>
        {`
export default function ContainerComponents({ children, getData }: Props) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res = await getData();
      setData(res);
    })();
  }, []);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        data,
      });
    } else {
      return child;
    }
  });
}

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await res.json();
};

const Example = ({ data }: any) => {
  if (!data) return <p>Loading ...</p>;
  return <p>{data.title}</p>;
};

export const DemoContainerComponents = () => {
  return (
    <ContainerComponents getData={fetchData}>
      <Example />
    </ContainerComponents>
  );
};
        `}
      </Section.Code>
    </Section>
  );
}
