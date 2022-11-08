import { useEffect } from "react";

/**
 * Change style of the element based on page's Y position (offset)
 * @param {*} elementId affected element on scroll
 * @param {*} pageOffset position to make the element visible
 */
export function useTrackScrollPosition(elementId, pageOffset = 300) {
  let element;

  useEffect(() => {
    function scrollAction() {
      let el = document.getElementById(elementId);
      el.style.opacity = "0";
      el.style.visibility = "invisible";

      if (window.pageYOffset > pageOffset) {
        el.style.visibility = "visible";
        el.style.opacity = "1";
      }
      element = el;
    }
    document.addEventListener("scroll", scrollAction, { passive: true });
    return () => {
      document.removeEventListener("scroll", scrollAction);
    };
  }, []);

  return { element };
}
