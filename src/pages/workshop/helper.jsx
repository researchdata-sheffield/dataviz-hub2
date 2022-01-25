export function getColour(score, total) {
  const scorePercentage = score / total;

  if (scorePercentage == 0) {
    return { colour: "#ff8e50", level: "Incomplete" };
  }
  if (scorePercentage > 0 && scorePercentage <= 0.5) {
    return { colour: "#fc3", level: "Initial" };
  }
  if (scorePercentage > 0.5 && scorePercentage <= 0.9) {
    return { colour: "#e7ff3f", level: "Moderate" };
  }
  if (scorePercentage > 0.9) {
    return { colour: "#7dff6b", level: "Advanced" };
  }
}
