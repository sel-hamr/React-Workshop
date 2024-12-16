import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>
          Understanding Event Capturing and Bubbling in React
        </Section.Title>
        <Section.Description>
          When working with React, understanding how events propagate through
          the DOM is crucial for building interactive and responsive user
          interfaces. Two key concepts in event propagation are event capturing
          and event bubbling. In this blog post, we&apos;ll explore these
          concepts and how they work in React.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Event Propagation</p>

      <Section.Description>
        Event propagation refers to the way events travel through the DOM tree.
        There are three phases of event propagation:
        <ul className="list-disc px-8 my-2">
          <li>
            <b>Capturing Phase: </b> The event starts from the root of the DOM
            tree and travels down to the target element.
          </li>
          <li>
            <b>Target Phase: </b>The event reaches the target element.
          </li>
          <li>
            <b>Bubbling Phase: </b>The event travels back up from the target
            element to the root of the DOM tree.
          </li>
        </ul>
      </Section.Description>
      <p className="text-2xl font-semibold">Event Bubbling</p>
      <Section.Description>
        Event bubbling is the default behavior in most browsers. When an event
        occurs on an element, it first triggers the event handlers on that
        element, then moves up the DOM tree, triggering event handlers on its
        ancestors.
      </Section.Description>
      <p className="text-2xl font-semibold">Example of Event Bubbling</p>
      <Section.Body>
        <Section.Code>
          {`
import React from 'react';

const BubblingExample = () => {
  const handleParentClick = () => {
    alert('Parent clicked!');
  };

  const handleChildClick = () => {
    alert('Child clicked!');
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div onClick={handleChildClick} style={{ padding: '20px', backgroundColor: '#d0d0d0' }}>
        Click me!
      </div>
    </div>
  );
};

export default BubblingExample;
`}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        In this example, clicking on the child div will trigger the
        handleChildClick event handler first, followed by the handleParentClick
        event handler due to event bubbling.
      </Section.Description>

      <p className="text-2xl font-semibold">Event Capturing</p>
      <Section.Description>
        Event capturing, also known as &apos;trickling,&apos; is the opposite of
        event bubbling. In the capturing phase, the event starts from the root
        and travels down to the target element. To use event capturing in React,
        you can add the capture keyword to the event handler.
      </Section.Description>
      <p className="text-2xl font-semibold">Example of Event Capturing</p>
      <Section.Body>
        <Section.Code>
          {`
import React from 'react';

const CapturingExample = () => {
  const handleParentClickCapture = () => {
    alert('Parent capture clicked!');
  };

  const handleChildClickCapture = () => {
    alert('Child capture clicked!');
  };

  return (
    <div onClickCapture={handleParentClickCapture} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div onClickCapture={handleChildClickCapture} style={{ padding: '20px', backgroundColor: '#d0d0d0' }}>
        Click me!
      </div>
    </div>
  );
};

export default CapturingExample;
`}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        In this example, clicking on the child div will trigger the
        handleParentClickCapture event handler first, followed by the
        handleChildClickCapture event handler due to event capturing.
      </Section.Description>

      <p className="text-2xl font-semibold">Stopping Event Propagation</p>
      <Section.Description>
        Sometimes, you may want to stop the event from propagating further. You
        can achieve this using the stopPropagation method.
      </Section.Description>
      <p className="text-2xl font-semibold">
        Example of Stopping Event Propagation
      </p>
      <Section.Body>
        <Section.Code>
          {`
import React from 'react';

const StopPropagationExample = () => {
  const handleParentClick = () => {
    alert('Parent clicked!');
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
    alert('Child clicked!');
  };

  return (
    <div onClick={handleParentClick} style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div onClick={handleChildClick} style={{ padding: '20px', backgroundColor: '#d0d0d0' }}>
        Click me!
      </div>
    </div>
  );
};

export default StopPropagationExample;
`}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        In this example, clicking on the child div will trigger the
        handleChildClick event handler and stop the event from propagating to
        the parent div.
      </Section.Description>
    </Section>
  );
}
