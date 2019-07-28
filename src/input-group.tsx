import React from "react";
import get from "ts-get";

export interface InputGroupProps {
  error?: string | null;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler;
}

export const InputGroup: React.FC<InputGroupProps> = ({ error, ...props }) => {
  return (
    <div>
      <input {...props} />
      {error ? <div>{error}</div> : null}
    </div>
  );
};
