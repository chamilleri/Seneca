import React from "react";
import classNames from "classnames";
import { useState } from "react";
import "./Toggle.scss";

type ToggleProps = {
  options: [string];
  onOptionSelected: (option) => void;
};

export const Toggle = ({ options, onOptionSelected }: ToggleProps) => {
  const [selected, setSelected] = useState<string>();
  return (
    <div
      className={classNames("toggle", {
        [`toggle--${options.indexOf(selected)}`]: selected
      })}
      data-count={options.length}
    >
      {options.map((option, i) => (
        <div
          key={option + i}
          className={classNames("toggle__option", {
            "toggle__cell--selected": selected === option
          })}
          onClick={() => {
            setSelected(option);
            onOptionSelected(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
};
