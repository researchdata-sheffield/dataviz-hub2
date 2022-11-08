import { withPrefix } from 'gatsby';
import { useState, useEffect } from 'react';

/**
 * Adapt from https://usehooks.com/useScript/
 * @param {array} srcArr An array of scripts
 * @param {array} integrity integrity values to compare 
 * @param {array} async 
 * @returns 
 */
export function useScript(srcArr=[], integrity=[], async=[]) {
  // Keep track of script status ("idle", "loading", "ready", "error")
  const [status, setStatus] = useState(srcArr?.length != 0 ? "loading" : "idle");

  useEffect(
    () => {
      if (!srcArr || srcArr.length === 0) {
        setStatus("idle");
        return;
      }

      srcArr.map((src, index) => {
        let currSrc = src.includes("https://") ? src : withPrefix(`d3/${src}`);
        // Fetch existing script element by src
        // It may have been added by another intance of this hook
        let script = document.querySelector(`script[src="${currSrc}"]`);
        if(script) {
          script.remove()
        }
        //if (!script) {
        script = document.createElement("script");
        script.src = currSrc;
        script.async = async[index] || false;
        script.integrity = integrity[index] || "";
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
      });
    },
    [srcArr, integrity, async] // Only re-run effect if scripts src changes
  );

  return status;
}