import { useState, useEffect } from "react";

/**
 * Hook for load more visualisations
 * @param {object} allMdx All visualisation items
 * @param {*} nextPageRef React useRef - referencing load-more div.
 * @param {string} referenceId Element id for load-more div.
 * @param {int} pageLength
 * @returns current list of visualisation
 */
export function useLoadMoreVisualisation(
  allMdx,
  nextPageRef,
  referenceId,
  pageLength
) {
  const PAGE_LENGTH = pageLength ?? 10;
  const refId = referenceId ?? "visualisation-invite";
  const [currentMDXs, setCurrentMDXs] = useState([
    ...allMdx.slice(0, PAGE_LENGTH)
  ]);
  const [loadNextPage, setLoadNextPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(allMdx.length > PAGE_LENGTH);

  // Check if observed the loadNextPage element
  // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px 0px 0px 0px"
    };
    const refObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoadNextPage(true);
      }
    }, options);

    if (nextPageRef.current) {
      refObserver.observe(nextPageRef.current);
    }
  }, []);

  // Monitor remaining visualisations on update of visualisation objects
  useEffect(() => {
    const hasNext = allMdx.length > currentMDXs.length;
    setHasNextPage(hasNext);

    if (!hasNext) {
      const addMoreVisBox = document.querySelector(`#${refId}`);
      addMoreVisBox.style.visibility = "visible";
      addMoreVisBox.parentElement.appendChild(addMoreVisBox);
    }
  }, [currentMDXs]);

  // Load more visualisations objects
  useEffect(() => {
    // load more only if intended too & there are more objects
    if (!loadNextPage || !hasNextPage) {
      return;
    }

    // Get next page content
    const moreMDX = allMdx.length > currentMDXs.length;
    const nextPageMDX = moreMDX
      ? allMdx.slice(currentMDXs.length, currentMDXs.length + PAGE_LENGTH)
      : [];

    // Merge into current content
    setCurrentMDXs([...currentMDXs, ...nextPageMDX]);
    setLoadNextPage(false);
  }, [loadNextPage, hasNextPage]);

  return currentMDXs;
}
