import { Fragment, useCallback, useEffect, useState } from "react";
import tinycolor from "tinycolor2";
import { useHistory } from "react-router-dom";
import { ColorInput } from "./Form/ColorInput";

export const TinyColor = ({ input }) => {
  const [selectedColors, setSelectedColors] = useState([]);
  const [generatedTheme, setGeneratedTheme] = useState(input);
  const history = useHistory();
  const [hasSetColors, setHasSetColors] = useState(false);

  const randomColor = () => {
    return tinycolor.random();
  };
  const generatePalette = useCallback((paletteType) => {
    let color;
    switch (paletteType) {
      case "analogous": {
        color = randomColor().analogous();
        setGeneratedTheme("analogous");
        break;
      }
      case "monochrome": {
        color = randomColor().monochromatic();
        setGeneratedTheme("monochrome");

        break;
      }
      case "split": {
        color = randomColor().splitcomplement();
        setGeneratedTheme("split");

        break;
      }
      case "triad": {
        color = randomColor().triad();
        setGeneratedTheme("triad");

        break;
      }
      default: {
        color = randomColor();
        setGeneratedTheme("random");
      }
    }
    return color.map((color) => color.toHexString());
  }, []);

  const handlePaletteChange = (event) => {
    const newValue = event.target.value;
    const prevValue = event.target.attributes.value.value;
    const index = selectedColors.indexOf(prevValue);
    const newColors = [...selectedColors];
    newColors[index] = newValue;
    return setSelectedColors(newColors);
  };

  useEffect(() => {
    console.log({ generatedTheme });
    console.log({ input });
    if (generatedTheme !== input) {
      setSelectedColors(generatePalette(input));
    }
    return setHasSetColors(false);
  }, [generatePalette, generatedTheme, input]);

  useEffect(() => {
    if (hasSetColors && !selectedColors.length) {
      setSelectedColors(generatePalette(input));
    }
    return;
  }, [selectedColors, generatePalette, input, hasSetColors]);

  useEffect(() => {
    const searchParams = new URLSearchParams(history.location.search);
    const colors = searchParams.get("colors");
    const theme = searchParams.get("theme");
    if (colors && !hasSetColors && theme !== generatedTheme) {
      setHasSetColors(true);
      const colorHex = colors.split("-").map((color) => `#${color}`);
      console.log({ colorHex });
      setSelectedColors(colorHex);
    }
  }, [generatedTheme, hasSetColors, history.location.search]);

  useEffect(() => {
    if (selectedColors && selectedColors.length) {
      const string = selectedColors.map((color) => color.slice(1)).join("-");
      if (string) {
        const params = new URLSearchParams({ theme: input, colors: string });
        const prevParams = new URLSearchParams(history.location.search);
        if (params.get("colors") !== prevParams.get("colors")) {
          history.push(`?${params}`);
        }
      }
    }
  }, [selectedColors, history, input]);

  const handleClick = (e) => {
    e.preventDefault();
    return setSelectedColors(generatePalette(input));
  };

  return (
    <>
      {selectedColors.map((color, index) => {
        return (
          <Fragment key={index}>
            <ColorInput value={color} onChange={handlePaletteChange} />
          </Fragment>
        );
      })}
      <div className="col-span-3 md:col-span-6 flex items-center justify-center">
        <button onClick={handleClick}>generate</button>
      </div>
    </>
  );
};
