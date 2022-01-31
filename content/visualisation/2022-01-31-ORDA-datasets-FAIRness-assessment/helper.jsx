export function getColour(score, total) {
  if (!score || !total) {
    return { colour: "#ff8e50", level: "Data not found" };
  }

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

export const mapPrinciple = (code) => {
  switch (code) {
    case "F":
      return "FINDABLE";
    case "A":
      return "ACCESSIBLE";
    case "I":
      return "INTEROPERABLE";
    case "R":
      return "REUSABLE";
    case "FAIR":
      return "TOTAL";
  }
};
