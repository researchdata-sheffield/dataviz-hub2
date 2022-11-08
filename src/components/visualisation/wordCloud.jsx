import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { getNumberWithinRange, randomInteger } from "../../utils/shared";
import { WordCloud } from "../style/visStyle";
import kebabCase from "lodash.kebabcase";

/**
 * Create word cloud
 * @param {array} words
 * @param {string} width width of the word cloud
 * @param {string} height height of the word cloud
 * @param {string} radius radius of the word cloud circle
 * @param {array} colours text colours
 * @param {array} backgroundColour background colours for words
 * @param {string} padding padding style for words
 * @param {string} menu which menu will the word cloud be created
 * @param {string} order order of words - (default or random)
 * @param {number} minFontSize
 * @param {number} maxFontSize
 * @returns {React.Component} WordCloud component
 */
const wordCloud = React.memo(
  ({
    words,
    width,
    height,
    radius,
    colours,
    backgroundColour,
    padding,
    menu = "",
    order = "default",
    minFontSize = 0.95,
    maxFontSize = 2.1,
    fontUnit = "rem",
    wordStyle,
    ...props
  }) => {
    const [wordsArr, setWords] = useState(words);
    const wordCloudColours = colours || [
      "#9ADBE8",
      "#fedf00",
      "#00aeef",
      "#ff79b4"
    ];
    const wordBackgroundColour = backgroundColour || [];

    const FONT_UNIT = fontUnit;
    const MAX_FONT_SIZE = maxFontSize;
    const MIN_FONT_SIZE = minFontSize;

    // Extract unique tag count values, use it to calculate font-size factor
    const UNIQUE_COUNT = [
      ...new Set((words && words.map((o) => o.count)) || [])
    ];

    // (MAX_FONT_SIZE - MIN_FONT_SIZE) is the available size 'distance', divide it into sections
    const FONT_SIZE_FACTOR =
      (MAX_FONT_SIZE - MIN_FONT_SIZE) / (UNIQUE_COUNT.length - 1);

    useEffect(() => {
      setWords(words);

      if (order == "random") {
        setWords(
          wordsArr &&
            wordsArr
              .map((a) => ({ sort: Math.random(), value: a }))
              .sort((a, b) => a.sort - b.sort)
              .map((a) => a.value)
        );
      }
    }, [order, words]);

    return (
      <WordCloud
        width={width}
        height={height}
        radius={radius}
        backgroundColour={wordBackgroundColour.length > 0 ? true : false}
        {...props}
      >
        <div className="word-cloud-wrap space-y-0 space-x-1">
          {wordsArr &&
            wordsArr.map((item) => {
              // depends on the item count, calculate the required font size
              let fontSize = getNumberWithinRange(
                MIN_FONT_SIZE + FONT_SIZE_FACTOR * (item.count - 1),
                MIN_FONT_SIZE,
                MAX_FONT_SIZE
              );

              // assign random colour
              const colour =
                wordCloudColours[randomInteger(wordCloudColours.length)] || "";
              const bgColour =
                wordBackgroundColour[
                  randomInteger(wordBackgroundColour.length)
                ] || "";

              return (
                <Link
                  key={`${item.name} | ${item.type}${menu ? ` | ${menu}` : ""}`}
                  className={`word ${
                    item.type == "category" ? "font-semibold" : ""
                  }`}
                  to={`/visualisation/${item.type}/${kebabCase(item.name)}`}
                  style={{
                    fontSize: `${fontSize}${FONT_UNIT}`,
                    color: `${colour}`,
                    backgroundColor: `${bgColour}`,
                    padding: `${padding || ""}`,
                    ...(wordStyle || "")
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>
      </WordCloud>
    );
  }
);

export default wordCloud;

wordCloud.propTypes = {
  words: PropTypes.array,
  colours: PropTypes.array,
  width: PropTypes.any,
  height: PropTypes.any,
  radius: PropTypes.any,
  backgroundColour: PropTypes.array,
  padding: PropTypes.any,
  menu: PropTypes.string,
  order: PropTypes.string,
  minFontSize: PropTypes.number,
  maxFontSize: PropTypes.number,
  fontUnit: PropTypes.string,
  wordStyle: PropTypes.object
};

wordCloud.displayName = "WordCloud";
