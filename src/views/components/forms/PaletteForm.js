import React, { useState } from "react";
import { Form } from "../Form";
import { RadioInput } from "../Form/RadioInput";
import tinycolor from "tinycolor2";
import { TinyColor } from "../TinyColor";

export const PaletteForm = () => {
  const [paletteSelection, setPaletteSelection] = useState("analogous");

  const colorOptions = [
    {
      label: "Analogous",
      value: "analogous",
      id: "analogous",
      name: "colorSelection",
      defaultChecked: true,
    },
    {
      label: "Monochromatic",
      value: "monochrome",
      id: "monochrome",
      name: "colorSelection",
    },
    {
      label: "Split Compliment",
      value: "split",
      id: "split",
      name: "colorSelection",
    },
    {
      label: "Triad",
      value: "triad",
      id: "triad",
      name: "colorSelection",
    },
  ];

  tinycolor.random();

  const handleChange = (event) => {
    return setPaletteSelection(event.target.value);
  };

  return (
    <Form>
      <div onChange={handleChange}>
        {colorOptions.map((color, index) => (
          <RadioInput {...color} key={index} />
        ))}
      </div>
      <div>
        <TinyColor input={paletteSelection} />
      </div>
    </Form>
  );
};
