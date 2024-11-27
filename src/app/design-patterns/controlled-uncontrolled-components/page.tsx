import Section from "@/components/ui/section";
import React from "react";

export default function page() {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Controlled and Uncontrolled Components</Section.Title>
        <Section.Description>
          Controlled components and uncontrolled components are two ways to
          manage form data.
          <br />
          <br />
          In a controlled component, the form data is handled by a React
          component. The form data is stored in the component&apos;s state and
          is updated through the component&apos;s setState method. the benefit
          of using a controlled component is that you have full control over the
          form data. You can validate the form data, manipulate the form data,
          and perform other operations on the form data.
          <br />
          <br />
          In an uncontrolled component, the form data is handled by the DOM
          itself. The form data is stored in the DOM, and is accessed through
          the DOM&apos;s API. In an uncontrolled component, the component does
          not manage the form data directly. the benefit of using an
          uncontrolled component is that you do not need to write as much code
          as you would with a controlled component. or for simple form with
          limited interaction You can also use uncontrolled components to
          integrate with third-party libraries that require direct access to the
          DOM. However, uncontrolled components are not as flexible as
          controlled components, and you may run into issues with form data
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">
        Example for Uncontrolled Components:{" "}
      </p>
      <Section.Body>
        <Section.Code>
          {`
          import React from "react";
          
          export default function UncontrolledComponent() {
            const inputRef = React.useRef<HTMLInputElement>(null);
            
            const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              alert(inputRef.current?.value);
              };
              
              return (
                <form onSubmit={handleSubmit}>
                  <input type="text" ref={inputRef} />
                  <button type="submit">Submit</button>
                  </form>
                  );
                  }
                  `}
        </Section.Code>
      </Section.Body>
      <Section.Description>
        In this example, we have a simple form with an input field and a submit
        button. The input field is an uncontrolled component because we are
        using the ref attribute to access the input field&apos;s value directly.
        When the form is submitted, we use the inputRef.current.value to get the
        input field&apos;s value and show an alert with the value.
      </Section.Description>
      <p className="text-2xl font-semibold">
        Example for Controlled Components:{" "}
      </p>
      <Section.Body>
        <Section.Code>
          {`
          
          import React, { useState } from "react";
          
          export default function ControlledComponent() {
            const [value, setValue] = useState("");
            
            const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              setValue(e.target.value);
              };
              
              const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                alert(value);
                };
                
                return (
                  <form onSubmit={handleSubmit}>
                    <input type="text" value={value} onChange={handleChange} />
                    <button type="submit">Submit</button>
                    </form>
                    );
                    }
                    `}
        </Section.Code>
        <Section.Description>
          In this example, we have a simple form with an input field and a
          submit button. The input field is a controlled component because we
          are using the value attribute to set the input field&apos;s value and
          the onChange attribute to update the input field&apos;s value. When
          the form is submitted, we use the value state to get the input
          field&apos;s value and show an alert with the value.
        </Section.Description>
      </Section.Body>
    </Section>
  );
}
