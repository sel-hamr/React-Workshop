import React, { ReactElement } from "react";

export const Show = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  let when: any | null = null;
  let otherwise: ReactElement | null = null;

  React.Children.forEach(children, (child: any) => {
    if (child.props.isTrue === undefined) {
      otherwise = child;
    } else if (!when && child.props.isTrue) {
      when = child;
    }
  });

  return when || otherwise;
};

Show.When = ({
  isTrue,
  children,
}: {
  isTrue: boolean;
  children: ReactElement;
}) => isTrue && children;

Show.Else = ({ children }: { children: ReactElement }) => children;
