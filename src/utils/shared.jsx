import no_image_1 from "../images/blog/no_image_1.png"
import no_image_2 from "../images/blog/no_image_2.png"
import no_image_3 from "../images/blog/no_image_3.png"
import no_image_4 from "../images/blog/no_image_4.png"
import no_image_5 from "../images/blog/no_image_5.png"
import { useState, useEffect } from 'react';

export function shortenText(text, length) {
  let newText = text.split(" ").splice(0, length)
  if(newText.length < length){
    newText = newText.join(" ")
  } else {
    newText = newText.join(" ").concat(" ...")
  }
  return newText
}

// Assign thumbnail if not provided
export function getImageSource(node) {
  let imagesrc
  if(node.frontmatter && node.frontmatter.thumbnail && node.frontmatter.thumbnail.childImageSharp) {
    imagesrc = node.frontmatter.thumbnail.childImageSharp.fluid.src 
  } else {
    let image_set = [no_image_1, no_image_2, no_image_3, no_image_4, no_image_5]
    imagesrc = image_set[Math.floor(Math.random() * image_set.length)]
  }
  return imagesrc
}


/* https://usehooks.com/useScript/
*
*/
export function useScript(src, integrity="", async=true) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(src ? "loading" : "idle");

  useEffect(
    () => {
      if (!src) {
        setStatus("idle");
        return;
      }
      // Fetch existing script element by src
      // It may have been added by another intance of this hook
      let script = document.querySelector(`script[src="${src}"]`);
      if(script) script.remove()
      
      //if (!script) {
        script = document.createElement("script");
        script.src = src;
        script.async = async;
        script.integrity = integrity;
        script.crossOrigin = "anonymous";
        script.setAttribute("data-status", "loading");
        document.body.appendChild(script);

        // Store status in attribute on script
        // This can be read by other instances of this hook
        const setAttributeFromEvent = (event) => {
          script.setAttribute(
            "data-status",
            event.type === "load" ? "ready" : "error"
          );
        };

        script.addEventListener("load", setAttributeFromEvent);
        script.addEventListener("error", setAttributeFromEvent);
      // } else {
      //   // Grab existing script status from attribute and set to state.
      //   setStatus(script.getAttribute("data-status"));
      // }

      // Script event handler to update status in state
      // Note: Even if the script already exists we still need to add
      // event handlers to update the state for *this* hook instance.
      const setStateFromEvent = (event) => {
        setStatus(event.type === "load" ? "ready" : "error");
      };

      // Add event listeners
      script.addEventListener("load", setStateFromEvent);
      script.addEventListener("error", setStateFromEvent);

      // Remove event listeners on cleanup
      return () => {
        if (script) {
          script.removeEventListener("load", setStateFromEvent);
          script.removeEventListener("error", setStateFromEvent);
        }
      };
    },
    [src] // Only re-run effect if script src changes
  );

  return status;
}