import { useState, useEffect, useCallback } from "react";

/**
 * Move background on mouse movement
 * @elementId string: background element
 * @parent boolean: whether to move background on mouse hovering parent element of 'elementId'
 * Make sure to add the style overflow: hidden to parent/element, and add the style transform: scale(1.1) to the element
 */
export function useBackgroundMovement(
  elementId,
  parent = true,
  xFactor = 0.06,
  yFactor = 0.05
) {
  const [location, setLocation] = useState({ x: 0, y: 0 });

  const getTranslateValues = useCallback((element) => {
    const style = getComputedStyle(element);
    const matrix = style.transform || style.MozTransform;

    if (typeof matrix === "undefined" || !matrix || matrix == "none") {
      return {
        x: 0,
        y: 0
      };
    }

    const matArr = matrix.replace(/[^0-9\-.,]/g, "").split(",");
    // 3D: index 12 and 13
    // 2D: index 4 and 5
    return {
      x: parseInt(matArr[12]) || parseInt(matArr[4]),
      y: parseInt(matArr[13]) || parseInt(matArr[5])
    };
  });

  useEffect(() => {
    const onMouseMove = (event) => {
      // calculate mouse movement
      let xMove = event.clientX - location.x;
      let yMove = event.clientY - location.y;

      // update mouse location
      setLocation({ x: event.clientX, y: event.clientY });

      // move background according to difference
      let translateValues = getTranslateValues(background);
      background.style.transform = `translate(${
        -xFactor * xMove + translateValues.x
      }px, ${-yFactor * yMove + translateValues.y}px) scale(1.1)`;
    };

    let background = document.querySelector(`#${elementId}`);
    if (!background) {
      return;
    }
    background.style.transition = "none";
    let hoverElement = background;

    if (parent === true) {
      hoverElement = background.parentElement;
    }

    hoverElement.addEventListener("mousemove", onMouseMove);
    hoverElement.addEventListener("mouseleave", () => {
      background.style.transition = ".5s ease";
      background.style.top = 0;
      background.style.left = 0;
    });

    // Remove event listeners on cleanup
    return () => {
      if (background) {
        hoverElement.removeEventListener("mousemove", onMouseMove);
        hoverElement.removeEventListener("mouseleave", () => {
          background.style.transition = "none";
        });
      }
    };
  }, [location, getTranslateValues]);
  return location;
}
