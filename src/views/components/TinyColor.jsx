import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import tinycolor from "tinycolor2";
import { useHistory } from "react-router-dom";
import { ColorInput } from "./Form/ColorInput";
import { joinColors, splitColors } from "../../util/colorUtil";
import { Context } from "../../context/Store";

export const TinyColor = () => {
  const history = useHistory();
  const [state, dispatch] = useContext(Context);
  const searchParams = useMemo(
    () => new URLSearchParams(history.location.search),
    [history.location.search]
  );

  const themeUrl = searchParams.get("theme");
  const paletteUrl = searchParams.get("colors");

  const [generatedTheme, setGeneratedTheme] = useState(themeUrl || "analogous");

  const randomColor = () => {
    return tinycolor.random();
  };

  const setPalette = (colors) => {
    dispatch({ type: "SET_PALETTE", payload: colors });

    const colorParams = joinColors(colors);

    const params = new URLSearchParams({
      theme: generatedTheme,
      colors: colorParams,
    });
    const prevParams = searchParams;
    if (params.get("colors") !== prevParams.get("colors")) {
      history.push(`?${params.toString()}`);
    }
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
    const index = state.palette.indexOf(prevValue);
    const newColors = [...state.palette];
    newColors[index] = newValue;
    return setPalette(newColors);
  };

  const handleClick = (e) => {
    e.preventDefault();
    return setPalette(generatePalette(generatedTheme));
  };

  // TODO: debug logic to only generate new palette if not in history or something

  useEffect(() => {
    //set local generated theme based on url
    setGeneratedTheme(themeUrl);
  }, [themeUrl]);

  useEffect(() => {
    // on theme change, generate and set new palette
    setPalette(generatePalette(generatedTheme));
  }, [generatedTheme]);

  useEffect(() => {
    // on paletteUrl change, set colors from url
    if (paletteUrl) {
      const colors = splitColors(paletteUrl);
      setPalette(colors);
    }
  }, [paletteUrl, themeUrl]);

  return (
    <>
      {state.palette &&
        state.palette.map((color, index) => {
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
