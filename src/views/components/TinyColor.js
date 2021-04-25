import { Fragment, useCallback, useEffect, useState } from "react";
import tinycolor from "tinycolor2";
import { ColorInput } from "../components/Form/ColorInput";

export const TinyColor = ({ input }) => {
  const [selectedColors, setSelectedColors] = useState([]);

  const randomColor = () => {
    return tinycolor.random();
  };
  const generatePalette = useCallback((paletteType) => {
    let color;
    switch (paletteType) {
      case "analogous": {
        color = randomColor().analogous();
        break;
      }
      case "monochrome": {
        color = randomColor().monochromatic();
        break;
      }
      case "split": {
        color = randomColor().splitcomplement();
        break;
      }
      case "triad": {
        color = randomColor().triad();
        break;
      }
      default: {
        color = randomColor();
      }
    }
    return color.map((color) => color.toHexString());
  }, []);

  const handlePaletteChange = (event) => {
    const newValue = event.target.value;
    console.log(event.target);
    const prevValue = event.target.attributes.value.value;
    const index = selectedColors.indexOf(prevValue);
    const newColors = [...selectedColors];
    newColors[index] = newValue;
    return setSelectedColors(newColors);
  };

  useEffect(() => {
    if (selectedColors.length === 0) setSelectedColors(generatePalette(input));
    return;
  }, [selectedColors, generatePalette, input]);

  useEffect(() => {
    setSelectedColors(generatePalette(input));
    return;
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [input]);

  return selectedColors.map((color, index) => {
    return (
      <Fragment key={index}>
        <p>{color}</p>
        <ColorInput value={color} onChange={handlePaletteChange} />
      </Fragment>
    );
  });
};
