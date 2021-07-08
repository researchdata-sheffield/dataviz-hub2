import React from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { getNumberWithinRange, randomInteger } from "../../utils/shared"
import { WordCloud } from "../style/visStyle"
import kebabCase from "lodash.kebabcase"

const wordCloud = React.memo(({ words, colours, width, height, radius }) => {
  const wordCloudColours = colours || ["#808080", "#ff5e5e", "#fedf00", "#0066b3", "#46399b", "#52ff9c", "#ade1f8", "#f0f0f0", "#fff", "#ff79b4", "#89f064", "#393939", "#08e8ff", "#00aeef"]
  
  //["#556272", "#4ecdc4", "#c8f463", "#ff6b6b", "#c54d57"];
  //["#3c6478", "#43ABC9", "#B5C689", "#EFD469", "#F58B4C", "#CD594A"]
  
  const FONT_UNIT = "rem";
  const MAX_FONT_SIZE = 2.5;
  const MIN_FONT_SIZE = 0.93;

  // Extract unique tag count values, use it to calculate font-size factor
  const UNIQUE_COUNT = [...new Set(words.map(o => o.count))];
  // (MAX_FONT_SIZE - MIN_FONT_SIZE) is the available size 'distance', divide it into sections
  const FONT_SIZE_FACTOR = (MAX_FONT_SIZE - MIN_FONT_SIZE) / (UNIQUE_COUNT.length - 1);

  return (
    <WordCloud width={width} height={height} radius={radius}>
      <div className="word-cloud-wrap space-y-0 space-x-2">
        {words && words.map((item) => {
          // depends on the item count, calculate the required font size
          const fontSize = getNumberWithinRange(MIN_FONT_SIZE + FONT_SIZE_FACTOR * (item.count - 1), MIN_FONT_SIZE, MAX_FONT_SIZE);
          const colour = wordCloudColours[randomInteger(wordCloudColours.length-1)];

          return(
            <Link 
              key={`${item.type} - ${item.name}`} 
              className={`word ${item.type == "category" && "font-semibold"}`}
              to={`/visualisation/${item.type}/${kebabCase(item.name)}`}
              style={{fontSize: `${fontSize}${FONT_UNIT}`, color: `${colour}`}}
            >
              {item.name}
            </Link>
          )
        })}
      </div>
    </WordCloud>
  )

})

export default wordCloud

wordCloud.propTypes = {
  words: PropTypes.array,
  colours: PropTypes.array,
  width: PropTypes.any,
  height: PropTypes.any,
  radius: PropTypes.any,
}

wordCloud.displayName = "WordCloud"