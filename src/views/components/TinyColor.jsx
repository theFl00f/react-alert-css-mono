import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import tinycolor from "tinycolor2";
import { useHistory } from "react-router-dom";
import { ColorInput } from "./Form/ColorInput";

export const TinyColor = () => {
  const history = useHistory();
  const searchParams = useMemo(
    () => new URLSearchParams(history.location.search),
    [history.location.search]
  );

  const themeSelection = searchParams.get("theme");
  const [selectedColors, setSelectedColors] = useState([]);
  const [generatedTheme, setGeneratedTheme] = useState(
    themeSelection || "analogous"
  );

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
    setSelectedColors(generatePalette(generatedTheme));
    return setHasSetColors(false);
  }, [generatePalette, generatedTheme]);

  useEffect(() => {
    setGeneratedTheme(themeSelection);
  }, [themeSelection]);

  useEffect(() => {
    if (hasSetColors && !selectedColors.length) {
      setSelectedColors(generatePalette(generatedTheme));
    }
    return;
  }, [selectedColors, generatePalette, generatedTheme, hasSetColors]);

  useEffect(() => {
    const colors = searchParams.get("colors");
    const theme = searchParams.get("theme");
    if (!colors && !theme) {
      setSelectedColors(generatePalette(generatedTheme));
    }

    const splitColors = (colors) => {
      return colors.split("-").map((color) => `#${color}`);
    };

    if (colors && !hasSetColors && theme !== generatedTheme) {
      const colorHex = splitColors(colors);
      setSelectedColors(colorHex);
      setHasSetColors(true);
    }

    if (splitColors(colors) !== selectedColors) {
      console.log("hello");
    }
  }, [
    generatePalette,
    generatedTheme,
    hasSetColors,
    history.location.search,
    searchParams,
  ]);

  useEffect(() => {
    if (selectedColors && selectedColors.length) {
      const string = selectedColors.map((color) => color.slice(1)).join("-");
      if (string) {
        const params = new URLSearchParams({
          theme: generatedTheme,
          colors: string,
        });
        const prevParams = new URLSearchParams(history.location.search);
        if (params.get("colors") !== prevParams.get("colors")) {
          history.push(`?${params.toString()}`);
        }
      }
    }
  }, [selectedColors, history, generatedTheme]);

  const handleClick = (e) => {
    e.preventDefault();
    return setSelectedColors(generatePalette(generatedTheme));
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
