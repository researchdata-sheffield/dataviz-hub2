import { useState, useEffect } from 'react';

/**  
* Move background on mouse movement
* @elementId string: background element
* @parent boolean: whether to move background on mouse hovering parent element of 'elementId'
* Make sure to add the style overflow: hidden to parent/element, and add the style transform: scale(1.1) to the element
*/
export function backgroundMovement(elementId, parent = true, xFactor = 0.06, yFactor = 0.05) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [xLocation, setXLocation] = useState(0);
  const [yLocation, setYLocation] = useState(0);

  useEffect(
    () => {
      const onMouseMove = (event) => {
        // calculate mouse movement
        //console.log(xLocation + ", " + yLocation)
        //console.log(event.clientX - xLocation)
        let xMove = event.clientX - xLocation;
        let yMove = event.clientY - yLocation;

        // update mouse location
        setXLocation(event.clientX);
        setYLocation(event.clientY);
        
        // move background according to difference
        background.style.top = (-yFactor * yMove + parseInt(getComputedStyle(background).getPropertyValue('top'))) + "px";
        background.style.left = (-xFactor * xMove + parseInt(getComputedStyle(background).getPropertyValue('left'))) + "px";
      };


      var background = document.querySelector(`#${elementId}`);
      background.style.transition = "none";

      if (!background) {
        return;
      }
      var hoverElement = background;
      if (parent === true) {
        hoverElement = background.parentElement;
      }
      
      // hoverElement.addEventListener("mouseenter", () => {
      //   if (window) {
      //     setXLocation(window.screen.width/2);
      //     setYLocation(window.screen.height/2);
      //   }
      // });
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
          // hoverElement.removeEventListener("mouseenter", () => {});
        }
      };
    },
    [xLocation] // Only re-run effect if script src changes
  );

  return;
}