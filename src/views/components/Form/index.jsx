import React from "react";

export const Form = ({ args, children }) => {
  return <form {...args}>{children}</form>;
};
