import React, { useContext } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Store";
import { Form } from "../Form";
import { RadioInput } from "../Form/RadioInput";
import { TinyColor } from "../TinyColor";

export const PaletteForm = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);

  const params = new URLSearchParams(history.location.search);

  const themeSelection = params.get("theme") || "analogous";

  const colorOptions = [
    {
      label: "Analogous",
      value: "analogous",
      id: "analogous",
      name: "colorSelection",
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

  const handleChange = (event) => {
    const newTheme = event.target.value;
    const prevTheme = state.theme;

    if (prevTheme !== newTheme) {
      dispatch({ type: "SET_THEME", payload: newTheme });
      params.set("theme", newTheme);
      history.push(`?${params.toString()}`);
    }
  };

  return (
    <Form className="py-4 flex flex-col gap-6">
      <div className="flex gap-6" onChange={handleChange}>
        {colorOptions.map((color, index) => (
          <RadioInput
            {...color}
            key={index}
            defaultChecked={color.value === themeSelection}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 place-items-center">
        <TinyColor />
      </div>
      <Link to={`/create/edit-alert${history.location.search}`}>Next</Link>
    </Form>
  );
};
