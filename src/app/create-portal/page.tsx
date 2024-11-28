import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>React createPortal</Section.Title>
        <Section.Description>
          React.createPortal is a method provided by React to render components
          outside the DOM hierarchy of their parent component. It allows you to
          mount a child node into a different part of the DOM, independent of
          where it is declared in your React component tree.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Why Use createPortal?</p>

      <Section.Description>
        Portals are particularly useful when you need to render elements that
        should visually break out of their parent container or work
        independently of its styling or positioning.
        <br />
        <br />
        <b>Common Use Cases</b>
        <ul className="list-disc px-8 my-2">
          <li>
            <b>Modals and Dialog Boxes</b>
            <br /> Modals often need to overlay the entire screen and not be
            constrained by the styles of their parent container. jsx Copy code
          </li>
          <li>
            <b>Tooltips</b>
            <br />
            Tooltips need to appear on top of other elements, even when
            triggered from within deeply nested components.
          </li>
          <li>
            <b>Dropdown Menus</b>
            <br />
            Like tooltips, dropdown menus often need to appear outside of their
            parent&apos;s overflow constraints.
          </li>
          <li>
            <b>Notification Toasts</b>
            <br /> Toast notifications are typically placed at a fixed position
            on the screen, independent of the current DOM structure.
          </li>
          <li>
            <b>Global Elements</b>
            <br />
            Some global elements like contextual menus or floating action
            buttons need to be rendered at specific places in the DOM, such as a
            body tag.
          </li>
        </ul>
      </Section.Description>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <Section.Code>
          {`
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <h1>React Portals Demo</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>This is a modal</h2>
          <button onClick={() => setShowModal(false)}>Close</button>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
      <div>
        {children}
        <button onClick={onClose}>Close Modal</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default App;
`}
        </Section.Code>
      </Section.Body>
    </Section>
  );
}
