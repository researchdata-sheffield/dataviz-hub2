/**
 * Ensure ID begin with "e"
 */
export const chartEdgeData = [
  {
    id: "eStart",
    source: "start",
    target: "D.bothDepVars",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Begin"
  },
  /*********************************************
   * TOP BRANCH
   * Are they both dependent variables? - NO
   *********************************************/
  {
    id: "eD.bothDepVars-No",
    sourceHandle: "a",
    source: "D.bothDepVars",
    target: "D.typeOfDep",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  /**
   * LEFT branches of "What type of variable is your dependent?" - Scalar
   */
  {
    id: "eD.typeOfDep-Scalar",
    sourceHandle: "a",
    source: "D.typeOfDep",
    target: "D.assumeConstVar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Scalar"
  },
  {
    id: "eD.assumeConstVar-Yes",
    sourceHandle: "b",
    source: "D.assumeConstVar",
    target: "Info.normality",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes (assume normality)"
  },
  {
    id: "eD.assumeConstVar-No",
    sourceHandle: "a",
    source: "D.assumeConstVar",
    target: "D.VarPropMean",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.Info.LogDependent-Info.normality",
    source: "Info.LogDependent",
    target: "Info.normality",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Assume normality"
  },
  {
    id: "eD.D.VarPropMean-Info.LogDependent",
    source: "D.VarPropMean",
    target: "Info.LogDependent",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes",
    targetHandle: "b"
  },
  /**
   * Non-parametric route
   */
  {
    id: "eD.VarPropMean-Info.non-parametric",
    source: "D.VarPropMean",
    target: "Info.non-parametric",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.Info.non-parametric-D.IndVarScalar",
    source: "Info.non-parametric",
    target: "D.IndVarScalar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    targetHandle: "b",
    label: "Non-parametric route"
  },
  {
    id: "eD.IndVarScalar-D.TreatBothDep",
    source: "D.IndVarScalar",
    target: "D.TreatBothDep",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.TreatBothDep-T.Spearman",
    source: "D.TreatBothDep",
    target: "T.Spearman",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.TreatBothDep-H.NotSpearmanSeeStatistician",
    source: "D.TreatBothDep",
    target: "H.NotSpearmanSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No",
    targetHandle: "a"
  },
  {
    id: "eD.IndVarScalar-D.IndVarNominal",
    source: "D.IndVarScalar",
    target: "D.IndVarNominal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.IndVarNominal-Yes",
    source: "D.IndVarNominal",
    target: "D.IndVarNominalYesNumOfCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.IndVarNominalYesNumOfCats-D.InterestInMedian",
    source: "D.IndVarNominalYesNumOfCats",
    target: "D.InterestInMedians",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "2+"
  },
  {
    id: "eD.IndVarNominalYesNumOfCats-T.KruskalWallis",
    source: "D.IndVarNominalYesNumOfCats",
    target: "T.KruskalWallis",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "3+ (Kruskal-Wallis)"
  },
  {
    id: "eD.InterestInMedians-T.MannWhitney",
    source: "D.InterestInMedians",
    target: "T.MannWhitney",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.InterestInMedians-T.MedianTest",
    source: "D.InterestInMedians",
    target: "T.MedianTest",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.IndVarNominal-No",
    source: "D.IndVarNominal",
    target: "D.IndVarNominalNoNumOfCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.IndVarNominalNoNumOfCats-T.KruskalWallis",
    source: "D.IndVarNominalNoNumOfCats",
    target: "T.KruskalWallis",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Less than 5"
  },
  {
    id: "eD.IndVarNominalNoNumOfCats-D.reduceNumOfCats",
    source: "D.IndVarNominalNoNumOfCats",
    target: "D.reduceNumOfCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "More than 5"
  },
  {
    id: "eD.reduceNumOfCats-Info.reduceNumOfCats",
    source: "D.reduceNumOfCats",
    target: "Info.reduceNumOfCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eInfo.reduceNumOfCats-T.KruskalWallis",
    source: "Info.reduceNumOfCats",
    target: "T.KruskalWallis",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Kruskal-Wallis"
  },
  {
    id: "eD.reduceNumOfCats-D.NpIndVarNotNominalTreatBothDep",
    source: "D.reduceNumOfCats",
    target: "D.NpIndVarNotNominalTreatBothDep",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.NpIndVarNotNominalTreatBothDep-test",
    source: "D.NpIndVarNotNominalTreatBothDep",
    target: "T.NpIndVarNotNominalTreatBothDep-Spearman",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.NpIndVarNotNominalTreatBothDep-help",
    source: "D.NpIndVarNotNominalTreatBothDep",
    target: "H.NpIndVarNotNominalTreatBothDep-SeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  /**
   * Assuming normality
   */
  {
    id: "eInfo.normality-D.normalityIndVarScalar",
    source: "Info.normality",
    target: "D.normalityIndVarScalar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Assuming normality"
  },
  {
    id: "eD.normalityIndVarScalar-Yes",
    source: "D.normalityIndVarScalar",
    target: "T.normalityLinearRegression",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.normalityIndVarScalar-No",
    source: "D.normalityIndVarScalar",
    target: "D.normalityIndVarNominal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.normalityIndVarNominal-Yes",
    source: "D.normalityIndVarNominal",
    target: "D.normalityIndVarNominalYesCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.normalityIndVarNominal-No",
    source: "D.normalityIndVarNominal",
    target: "D.normalityIndVarNominalNoCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.normalityIndVarNominalYesCats-Ttest",
    source: "D.normalityIndVarNominalYesCats",
    target: "T.normalityIndVarNominalYesTtest",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "2"
  },
  {
    id: "eD.normalityIndVarNominalYesCats-ANOVA",
    source: "D.normalityIndVarNominalYesCats",
    target: "T.normalityIndVarNominalYesOneANOVA",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "3+"
  },
  {
    id: "eD.normalityIndVarNominalNoCats-6+",
    source: "D.normalityIndVarNominalNoCats",
    target: "D.normalityLinearlySpaced",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "6+"
  },
  {
    id: "eD.normalityIndVarNominalNoCats-TANOVAcontrast",
    source: "D.normalityIndVarNominalNoCats",
    target: "T.normalityANOVAcontrast",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Less than 5 - One-way ANOVA with polynomial contrasts"
  },
  {
    id: "eD.normalityLinearlySpaced-LinearRegression",
    source: "D.normalityLinearlySpaced",
    target: "T.normalityLinearRegression2",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes",
    sourceHandle: "a"
  },
  {
    id: "eD.normalityLinearlySpaced-D.willingToCombine",
    source: "D.normalityLinearlySpaced",
    target: "D.normalityCombineCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.normalityCombineCats-D.normalityCombineCatsNo",
    source: "D.normalityCombineCats",
    target: "D.normalityCombineCatsNo",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.normalityCombineCats-Info.normalityCombineCatsYes",
    source: "D.normalityCombineCats",
    target: "Info.normalityCombineCatsYes",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eInfo.normalityCombineCatsYes-T.normalityANOVAcontrast",
    source: "Info.normalityCombineCatsYes",
    target: "T.normalityANOVAcontrast",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "One-way ANOVA with polynomial contrasts"
  },
  {
    id: "eD.normalityCombineCatsNo-T.Spearman",
    source: "D.normalityCombineCatsNo",
    target: "T.normalityNotCombineCats-Spearman",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.normalityCombineCatsNo-H.SeeStatistician",
    source: "D.normalityCombineCatsNo",
    target: "H.normalityNotCombineCats-SeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  /**
   * Top Branches of "What type of variable is your dependent?" - Nominal
   */
  {
    id: "eD.typeOfDep-D.nominalIndVarNominal",
    source: "D.typeOfDep",
    target: "D.nominalIndVarNominal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Nominal"
  },
  {
    id: "eD.nominalIndVarNominal-Yes",
    source: "D.nominalIndVarNominal",
    target: "T.nominalChiSqTest",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.nominalIndVarNominal-No",
    source: "D.nominalIndVarNominal",
    target: "D.nominalTwoCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.nominalTwoCats-Yes",
    source: "D.nominalTwoCats",
    target: "T.nominalLogistic",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.nominalTwoCats-No",
    source: "D.nominalTwoCats",
    target: "H.nominalSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  /**
   * RIGHT branches of "What type of variable is your dependent?" - Ordinal
   */
  {
    id: "eD.typeOfDep-ordinal",
    sourceHandle: "a",
    source: "D.typeOfDep",
    target: "D.howManyCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Ordinal"
  },
  {
    id: "eD.howManyCats-H.ordinalRegression",
    source: "D.howManyCats",
    target: "H.ordinalRegression",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "More than 5 (Consult a statistician)"
  },
  {
    id: "eD.howManyCats-D.ordinalIndVarNominal",
    source: "D.howManyCats",
    target: "D.ordinalIndVarNominal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Less than 5"
  },
  {
    id: "eD.ordinalIndVarNominal-T.ChiSq",
    source: "D.ordinalIndVarNominal",
    target: "T.ordinalChiSq",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.ordinalIndVarNominal-D.ordinalCheckOrdinal",
    source: "D.ordinalIndVarNominal",
    target: "D.ordinalCheckOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.ordinalCheckOrdinal-H.ordinalRegression",
    source: "D.ordinalCheckOrdinal",
    target: "H.ordinalRegression",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No (Consult a statistician)"
  },
  {
    id: "eD.ordinalCheckOrdinal-D.ordinalNumOfCats",
    source: "D.ordinalCheckOrdinal",
    target: "D.ordinalNumOfCats",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.ordinalNumOfCats-D.ordinalSeeStatistician",
    source: "D.ordinalNumOfCats",
    target: "H.ordinalSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "More than 5"
  },
  {
    id: "eD.ordinalNumOfCats-T.ChiSq",
    source: "D.ordinalNumOfCats",
    target: "T.ordinalChiSq",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Less than 5"
  },
  /*********************************************
   * BOTTOM BRANCH
   * Are they both dependent variables? - YES
   *********************************************/
  {
    id: "eD.bothDepVars-Yes",
    source: "D.bothDepVars",
    target: "D.avgDiff",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.avgDiff-No",
    source: "D.avgDiff",
    target: "D.bothSameThing-Left",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.avgDiff-Yes",
    source: "D.avgDiff",
    target: "D.bothSameThing-Right",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.bothSameThing-Right-SeeStatistician",
    source: "D.bothSameThing-Right",
    target: "H.bothSameThing-Right-No",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.bothSameThing-Right-Yes",
    source: "D.bothSameThing-Right",
    target: "D.AreTheyScalar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  /**
   * LEFT-MOST branch
   */
  {
    id: "eD.bothSameThing-bothScalar",
    source: "D.bothSameThing-Left",
    target: "D.BothScalar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.BothScalar-T.Pearsons",
    source: "D.BothScalar",
    target: "T.PearsonsCorrelation",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.bothScalar-D.OneTypeEach",
    source: "D.BothScalar",
    target: "D.OneTypeEach",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.OneTypeEach-T.SpearmanCorrelationOneTypeEach",
    source: "D.OneTypeEach",
    target: "T.SpearmanCorrelationOneTypeEach",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes - Spearman Correlation"
  },
  {
    id: "eD.OneTypeEach-D.BothOrdinal",
    source: "D.OneTypeEach",
    target: "D.BothOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.BothOrdinal-T.SpearmanCorrelationOneTypeEach",
    source: "D.BothOrdinal",
    target: "T.SpearmanCorrelationOneTypeEach",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes - Spearman Correlation"
  },
  {
    id: "eD.BothOrdinal-D.NominalAndOrdinal",
    source: "D.BothOrdinal",
    target: "D.NominalAndOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.NominalAndOrdinal-D.howManyCats",
    source: "D.NominalAndOrdinal",
    target: "D.HowManyCatsInOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.HowManyCatsInOrdinal-T.HowManyCatsInOrdinal-ChiSq",
    source: "D.HowManyCatsInOrdinal",
    target: "T.HowManyCatsInOrdinal-ChiSq",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Less than 5 - Chi-squared Test"
  },
  {
    id: "eD.bothLessThanFive-T.HowManyCatsInOrdinal-ChiSq",
    source: "D.bothLessThanFive",
    target: "T.HowManyCatsInOrdinal-ChiSq",
    arrowHeadType: "arrow",
    label: "Both Less than 5 - Chi-squared Test"
  },
  {
    id: "eD.NominalAndOrdinal-D.avgDiffLeftBothOrdinal",
    source: "D.NominalAndOrdinal",
    target: "D.avgDiffLeftBothOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.avgDiffLeftBothOrdinal-D.bothLessThanFive",
    source: "D.avgDiffLeftBothOrdinal",
    target: "D.bothLessThanFive",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.avgDiffLeftBothOrdinal-T.avgDiffLeftSeeStatistician",
    source: "D.avgDiffLeftBothOrdinal",
    target: "H.avgDiffLeftSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  /**
   * LEFT-CENTRE branch
   */
  {
    id: "eD.bothSameThingLEft-D.centreBothScalar",
    source: "D.bothSameThing-Left",
    target: "D.centreBothScalar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.centreBothScalar-D.centreAssumeConstVar",
    source: "D.centreBothScalar",
    target: "D.centreAssumeConstVar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.centreBothScalar-H.centreSeeStatistician",
    source: "D.centreBothScalar",
    target: "H.centreSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No - see a statistician"
  },
  {
    id: "eD.centreVarMean-H.centreSeeStatistician",
    source: "D.centreVarMean",
    target: "H.centreSeeStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No - see a statistician"
  },
  {
    id: "eD.centreVarMean-Info.LogData",
    source: "D.centreVarMean",
    target: "Info.centreLogData",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.centreAssumeConstVar-D.centreVarMean",
    source: "D.centreAssumeConstVar",
    target: "D.centreVarMean",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.centreAssumeConstVar-T.ICC",
    source: "D.centreAssumeConstVar",
    target: "T.ICC",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes - ICC"
  },
  {
    id: "eInfo.LogData-T.ICC",
    source: "Info.centreLogData",
    target: "T.ICC",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Intraclass correlation coefficient"
  },
  /**
   * RIGHT - LEFT branch
   */
  {
    id: "eD.AreTheyScalar-D.BothOrdinal",
    source: "D.AreTheyScalar",
    target: "D.RLeftBothOrdinal",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.RLeftBothOrdinal-T.RLeftWilcoxon",
    source: "D.RLeftBothOrdinal",
    target: "T.RLeftWilcoxon",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.RLeftBothOrdinal-D.RLeftTalk",
    source: "D.RLeftBothOrdinal",
    target: "D.RLeftTalk",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.RLeftTalk-H.RLeftStatistician",
    source: "D.RLeftTalk",
    target: "H.RLeftStatistician",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "I'm willing"
  },
  {
    id: "eD.RLeftTalk-T.RLeftKappa",
    source: "D.RLeftTalk",
    target: "T.RLeftKappa",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "I'm not willing/ready"
  },
  /**
   * RIGHT-MOST branch
   */
  {
    id: "eD.AreTheyScalar-D.RightAssumeConstVar",
    source: "D.AreTheyScalar",
    target: "D.RightAssumeConstVar",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.RightAssumeConstVar-D.RightVarMean",
    source: "D.RightAssumeConstVar",
    target: "D.RightVarMean",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eD.RightAssumeConstVar-T.RightPairedTtest",
    source: "D.RightAssumeConstVar",
    target: "T.RightPairedTtest",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.RightVarMean-Info.RightLogData",
    source: "D.RightVarMean",
    target: "Info.RightLogData",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Yes"
  },
  {
    id: "eD.RightVarMean-T.RightWilcoxon",
    source: "D.RightVarMean",
    target: "T.RightWilcoxon",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "No"
  },
  {
    id: "eInfo.RightLogData-T.RightPairedTtest",
    source: "Info.RightLogData",
    target: "T.RightPairedTtest",
    arrowHeadType: "arrow",
    type: "smoothstep",
    label: "Paired T-Test"
  }
];
