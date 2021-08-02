export const chartEdgeData = [
  {
    id: 'eStart',
    source: 'start',
    target: 'D.bothDepVars',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
  },
  /*********************************************
   * TOP BRANCH
   * Are they both dependent variables? - NO
   *********************************************/
  {
    id: 'eD.bothDepVars-No',
    sourceHandle: 'a',
    source: 'D.bothDepVars',
    target: 'D.typeOfDep',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  /**
   * LEFT branches of "What type of variable is your dependent?" - Scalar
   */
   {
    id: 'eD.typeOfDep-Scalar',
    sourceHandle: 'a',
    source: 'D.typeOfDep',
    target: 'D.assumeConstVar',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Scalar'
  },
  {
    id: 'eD.assumeConstVar-Yes',
    sourceHandle: 'b',
    source: 'D.assumeConstVar',
    target: 'Info.normality',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes (assume normality)'
  },
  {
    id: 'eD.assumeConstVar-No',
    sourceHandle: 'a',
    source: 'D.assumeConstVar',
    target: 'D.VarPropMean',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.Info.LogDependent-Info.normality',
    source: 'Info.LogDependent',
    target: 'Info.normality',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Assume normality'
  },
  {
    id: 'eD.D.VarPropMean-Info.LogDependent',
    source: 'D.VarPropMean',
    target: 'Info.LogDependent',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes',
    targetHandle: 'b',
  },
  /**
   * Non-parametric route
   */
  {
    id: 'eD.VarPropMean-Info.non-parametric',
    source: 'D.VarPropMean',
    target: 'Info.non-parametric',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.Info.non-parametric-D.IndVarScalar',
    source: 'Info.non-parametric',
    target: 'D.IndVarScalar',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    targetHandle: 'b'
  },
  {
    id: 'eD.IndVarScalar-D.TreatBothDep',
    source: 'D.IndVarScalar',
    target: 'D.TreatBothDep',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.TreatBothDep-T.Spearman',
    source: 'D.TreatBothDep',
    target: 'T.Spearman',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.TreatBothDep-H.NotSpearmanSeeStatistician',
    source: 'D.TreatBothDep',
    target: 'H.NotSpearmanSeeStatistician',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No',
    targetHandle: 'a'
  },
  {
    id: 'eD.IndVarScalar-D.IndVarNominal',
    source: 'D.IndVarScalar',
    target: 'D.IndVarNominal',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.IndVarNominal-Yes',
    source: 'D.IndVarNominal',
    target: 'D.IndVarNominalYesNumOfCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.IndVarNominalYesNumOfCats-D.InterestInMedian',
    source: 'D.IndVarNominalYesNumOfCats',
    target: 'D.InterestInMedians',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: '2+'
  },
  {
    id: 'eD.IndVarNominalYesNumOfCats-T.KruskalWallis',
    source: 'D.IndVarNominalYesNumOfCats',
    target: 'T.KruskalWallis',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: '3+ (Kruskal-Wallis)'
  },
  {
    id: 'eD.InterestInMedians-T.MannWhitney',
    source: 'D.InterestInMedians',
    target: 'T.MannWhitney',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.InterestInMedians-T.MedianTest',
    source: 'D.InterestInMedians',
    target: 'T.MedianTest',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.IndVarNominal-No',
    source: 'D.IndVarNominal',
    target: 'D.IndVarNominalNoNumOfCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.IndVarNominalNoNumOfCats-T.KruskalWallis',
    source: 'D.IndVarNominalNoNumOfCats',
    target: 'T.KruskalWallis',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Less than 5'
  },
  {
    id: 'eD.IndVarNominalNoNumOfCats-D.reduceNumOfCats',
    source: 'D.IndVarNominalNoNumOfCats',
    target: 'D.reduceNumOfCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'More than 5'
  },
  {
    id: 'eD.reduceNumOfCats-Info.reduceNumOfCats',
    source: 'D.reduceNumOfCats',
    target: 'Info.reduceNumOfCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eInfo.reduceNumOfCats-T.KruskalWallis',
    source: 'Info.reduceNumOfCats',
    target: 'T.KruskalWallis',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Kruskal-Wallis'
  },
  {
    id: 'eD.reduceNumOfCats-D.NpIndVarNotNominalTreatBothDep',
    source: 'D.reduceNumOfCats',
    target: 'D.NpIndVarNotNominalTreatBothDep',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.NpIndVarNotNominalTreatBothDep-test',
    source: 'D.NpIndVarNotNominalTreatBothDep',
    target: 'T.NpIndVarNotNominalTreatBothDep-Spearman',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.NpIndVarNotNominalTreatBothDep-help',
    source: 'D.NpIndVarNotNominalTreatBothDep',
    target: 'H.NpIndVarNotNominalTreatBothDep-SeeStatistician',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  /**
   * Assuming normality 
   */
  {
    id: 'eInfo.normality-D.normalityIndVarScalar',
    source: 'Info.normality',
    target: 'D.normalityIndVarScalar',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Assuming normality'
  },
  {
    id: 'eD.normalityIndVarScalar-Yes',
    source: 'D.normalityIndVarScalar',
    target: 'T.normalityLinearRegression',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.normalityIndVarScalar-No',
    source: 'D.normalityIndVarScalar',
    target: 'D.normalityIndVarNominal',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.normalityIndVarNominal-Yes',
    source: 'D.normalityIndVarNominal',
    target: 'D.normalityIndVarNominalYesCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.normalityIndVarNominal-No',
    source: 'D.normalityIndVarNominal',
    target: 'D.normalityIndVarNominalNoCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.normalityIndVarNominalYesCats-Ttest',
    source: 'D.normalityIndVarNominalYesCats',
    target: 'T.normalityIndVarNominalYesTtest',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: '2'
  },
  {
    id: 'eD.normalityIndVarNominalYesCats-ANOVA',
    source: 'D.normalityIndVarNominalYesCats',
    target: 'T.normalityIndVarNominalYesOneANOVA',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: '3+'
  },
  {
    id: 'eD.normalityIndVarNominalNoCats-6+',
    source: 'D.normalityIndVarNominalNoCats',
    target: 'D.normalityLinearlySpaced',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: '6+'
  },
  {
    id: 'eD.normalityIndVarNominalNoCats-TANOVAcontrast',
    source: 'D.normalityIndVarNominalNoCats',
    target: 'T.normalityANOVAcontrast',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Less than 5 - One-way ANOVA with polynomial contrasts'
  },
  {
    id: 'eD.normalityLinearlySpaced-LinearRegression',
    source: 'D.normalityLinearlySpaced',
    target: 'T.normalityLinearRegression2',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes',
    sourceHandle: 'a'
  },
  {
    id: 'eD.normalityLinearlySpaced-D.willingToCombine',
    source: 'D.normalityLinearlySpaced',
    target: 'D.normalityCombineCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.normalityCombineCats-D.normalityCombineCatsNo',
    source: 'D.normalityCombineCats',
    target: 'D.normalityCombineCatsNo',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },
  {
    id: 'eD.normalityCombineCats-Info.normalityCombineCatsYes',
    source: 'D.normalityCombineCats',
    target: 'Info.normalityCombineCatsYes',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eInfo.normalityCombineCatsYes-T.normalityANOVAcontrast',
    source: 'Info.normalityCombineCatsYes',
    target: 'T.normalityANOVAcontrast',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'One-way ANOVA with polynomial contrasts'
  },
  {
    id: 'eD.normalityCombineCatsNo-T.Spearman',
    source: 'D.normalityCombineCatsNo',
    target: 'T.normalityNotCombineCats-Spearman',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
  {
    id: 'eD.normalityCombineCatsNo-H.SeeStatistician',
    source: 'D.normalityCombineCatsNo',
    target: 'H.normalityNotCombineCats-SeeStatistician',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'No'
  },

  /**
   * RIGHT branches of "What type of variable is your dependent?" - Ordinal
   */
  {
    id: 'eD.typeOfDep-ordinal',
    sourceHandle: 'a',
    source: 'D.typeOfDep',
    target: 'D.howManyCats',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Ordinal'
  },

  /*********************************************
   * BOTTOM BRANCH
   * Are they both dependent variables? - YES
   *********************************************/
  {
    id: 'eD.bothDepVars-Yes',
    source: 'D.bothDepVars',
    target: 'D.avgDiff',
    arrowHeadType: 'arrow',
    type: 'smoothstep',
    label: 'Yes'
  },
]