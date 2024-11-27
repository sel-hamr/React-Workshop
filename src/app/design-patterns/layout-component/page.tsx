import ExampleOne from "@/components/design-patterns/layout-component/example-one";
import ExampleTwo from "@/components/design-patterns/layout-component/example-Two";
import { ContainerModel } from "@/components/design-patterns/layout-component/modal";
import SplitScreen from "@/components/design-patterns/layout-component/split-screen";
import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Layout component</Section.Title>
        <Section.Description>
          The Layout Components Pattern in React is a design pattern aimed at
          organizing the structure and layout of an application. These
          components focus on the visual arrangement and placement of elements
          on the page, rather than their functionality.
          <br />
          The key principle of this pattern is that components should not be
          aware of where they are being rendered, while Layout components should
          exclusively manage the presentation of those components.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example 1: </p>
      <Section.Body>
        <SplitScreen>
          <ExampleOne name="john" className="bg-green-600" />
          <ExampleTwo name="user" />
        </SplitScreen>
        <Section.Description>
          The SplitScreen component takes three props: children, leftWeight, and
          rightWeight. The children prop represents the child components passed
          into SplitScreen, and in this case, we assume exactly two child
          components are provided.
          <br />
          Within the SplitScreen component, we use array destructuring to
          extract the left and right child elements from the children prop.
          <br />
          We then render a SplitScreen component, which acts as the main wrapper
          for the split screen layout. Inside the SplitScreen, we render two
          child components, passing the leftWeight and rightWeight props to
          adjust the width ratios of the left and right child.
          <br />
          The left element is placed in the first child, and the right element
          in the second. With this approach, we create a flexible and reusable
          SplitScreen component that allows for customizable split-screen
          layouts with adjustable width ratios for each section.
        </Section.Description>
      </Section.Body>
      <p className="text-2xl font-semibold">How to use :</p>
      <Section.Code>
        {`   
            export default function SplitScreen({
            children,
            leftWeight = 1,
            rightWeight = 1,
            }: {
            children: React.ReactNode;
            leftWeight?: number;
            rightWeight?: number;
            }) {
            const [left, right] = React.Children.toArray(children);
            return (
                <div className="flex w-full">
                <div style={{ flex: leftWeight }}>{left}</div>
                <div style={{ flex: rightWeight }}>{right}</div>
                </div>
            );
            }


            <SplitScreen>
                <ExampleOne name="john" className="bg-green-600" />
                <ExampleTwo name="user" />
            </SplitScreen>
            `}
      </Section.Code>
      <p className="text-2xl font-semibold">Example 2: </p>
      <Section.Body>
        <ContainerModel />
      </Section.Body>
      <Section.Description>
        By following this approach, we can easily use the Modal Layout component
        to wrap any component and display it as a modal.
        <br />
        The Modal Layout isn&apos;t focused on the specific content it displays;
        it simply serves as a container for the provided children. This makes it
        highly flexible and reusable across different parts of the application.
      </Section.Description>
      <Section.Code>
        {`   
export default function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center"
          onClick={onClose}
        >
          <div
            className="w-1/2 h-1/2 bg-white rounded-2xl p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={onClose} className="ml-auto">
              Close
            </Button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export function ContainerModel() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button onClick={() => setShowModal(true)}>Show Model</Button>
      <Modal onClose={() => setShowModal(false)} open={showModal}>
        <p>hello</p>
      </Modal>
    </>
  );
}
            `}
      </Section.Code>
    </Section>
  );
}
