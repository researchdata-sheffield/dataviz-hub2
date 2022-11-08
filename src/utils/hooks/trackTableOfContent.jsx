/* eslint-disable no-unused-vars */
import { useEffect } from "react";

/**
 *
 * @param {insert selector for your table of contents elements} tocSelector
 * @param {item are selected in the form of `itemSelector [id]`} itemSelector
 *
 * structure of toc should be :
 * <li>
 *  <a>some heading</a>
 *  <ul>Sub headings
 *    <li><a>sub-heading ONE</a></li>
 *    <li><a>sub-heading TWO</a></li>
 *    ...
 * </ul>
 * </li>
 */
export function useTrackTableOfContent(tocSelector, itemSelector) {
  useEffect(() => {
    function handleClassList(element, tagName, type = "add") {
      if (tagName.substring(0, 1) !== "H") return;
      let el = element.parentElement;
      let rm = type === "remove";
  
      rm ? el.classList.remove("active") : el.classList.add("active");
  
      if (tagName !== "H1") {
        handleClassList(
          el.parentElement,
          `H${tagName.substring(1) - 1}`,
          rm ? "remove" : "add"
        );
      }
    }
        
    function handleTOC() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          let id = entry.target.getAttribute("id");
          let element = document.querySelector(`${tocSelector}[href="#${id}"]`);
          if (element === null) return;

          if (entry.intersectionRatio > 0) {
            handleClassList(element, entry.target.tagName);
          } else {
            handleClassList(element, entry.target.tagName, "remove");
          }
        });
      });

      // Track all items
      document.querySelectorAll(`${itemSelector} [id]`).forEach((item) => {
        observer.observe(item);
      });
    }
    document.addEventListener("DOMContentLoaded", handleTOC);

    return () => {
      document.removeEventListener("DOMContentLoaded", handleTOC);
    };
  }, [tocSelector, itemSelector]);
}
