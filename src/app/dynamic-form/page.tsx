import DynamicForm from "@/components/dynamic-form";
import Section from "@/components/ui/section";
import React from "react";
import { exampleData, exampleData2, exampleData3 } from "./data";

const page = () => {
  return (
    <Section>
      <Section.Back />
      <Section.Header>
        <Section.Title>Dynamic Form</Section.Title>
        <Section.Description>
          This is a dynamic form that can be used to create any form. by passing
          array of objects to the dataFields prop.
        </Section.Description>
      </Section.Header>
      <p className="text-2xl font-semibold">Example : </p>
      <Section.Body>
        <DynamicForm
          description="description of the form goes here"
          title="test form1"
          dataFields={exampleData}
        />
        <DynamicForm
          description="description of the form goes here 2"
          title="test form"
          dataFields={exampleData2}
        />
        <DynamicForm
          description="description of the form goes here 3"
          title="test form"
          dataFields={exampleData3}
        />
      </Section.Body>
      <p className="text-2xl font-semibold">How to use :</p>
      <pre className="bg-zinc-800 text-white p-4 rounded-md w-full">
        {`import DynamicForm from "@/components/dynamic-form";

         const exampleData3: FormField[] = [
                {
                  type: "email",
                  name: "email",
                  label: "Email",
                  placeholder: "Email",
                  error: "Email is required",
                  width: 1,
                  required: true,
                },
                {
                  type: "password",
                  name: "password",
                  label: "Password",
                  placeholder: "Password",
                  error: "Password is required",
                  width: 1,
                },
                {
                  type: "action",
                  name: "actions",
                  buttons: [
                    {
                      label: "Submit",
                      type: "submit",
                      className: "w-full",
                      variant: "secondary",
                    },
                  ],
                  width: 1,
                },
          ];
          <DynamicForm
          description="description of the form goes here"
          title="test form1"
          dataFields={Data}
        /> `}
      </pre>
    </Section>
  );
};

export default page;
