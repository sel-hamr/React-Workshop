"use client";

import React, { useEffect, useState } from "react";

type Props = {
  children: React.ReactElement;
  getData: () => void;
};

export default function ContainerComponents({ children, getData }: Props) {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const res: any = await getData();
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
