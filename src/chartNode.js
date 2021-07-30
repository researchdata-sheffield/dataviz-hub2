/**
 * NOTES:
 * y: 0 start from the top of the screen
 * x: 0 start from the left
 * Distance between each node: ~ 350 in x, ~ 300 in y
 */
export const chartNodeData = [
  {
    id: 'start',
    type: 'start',
    data: { label: 'Start!' },
    position: { x: 2900, y: 3000 },
    isHidden: false
  },
  {
    id: 'D.bothDepVars',
    type: 'decision',
    data: { 
      label: 'Are they both dependent variables?',
      description: 'A dependent variable depends on changes in other variable.'
    },
    position: { x: 3220, y: 3030 }
  },
  /*********************************************
   * TOP BRANCH
   * Are they both dependent variables? - NO
   *********************************************/
  {
    id: 'D.typeOfDep',
    type: 'decision',
    data: { 
      label: 'What type of variable is your dependent?',
      description: 'Choose Scalar or Ordinal (ordered categories).' 
    },
    position: { x: 3350, y: 2730 }
  },
  /**
   * LEFT branches of "What type of variable is your dependent?" - Scalar
   */
  {
    id: 'D.assumeConstVar',
    type: 'decision',
    data: { 
      label: 'Are you happy to assume constant variance?',
      description: 'Constant variance is the assumption of homoscedasticity. This means the variance of distances of data points to the regression line is constant.'
    },
    position: { x: 3000, y: 2730 }
  },
  {
    id: 'D.VarPropMean',
    type: 'decision',
    data: { 
      label: 'Does spread increase with increases in mean?',
      description: 'Increase in variance with increases in mean is suggesting data points might have different scales - one or more points are significant larger.'
    },
    position: { x: 2650, y: 2730 }
  },
  {
    id: 'Info.normality',
    type: 'info',
    data: { 
      label: 'Assume normality',
      description: 'Assuming your data follows Gaussian/normal distribution.'
    },
    position: { x: 3000, y: 2400 }
  },
  {
    id: 'Info.LogDependent',
    type: 'info',
    data: { 
      label: 'Log the dependent variable and use this as your dependent',
      description: 'Transform the dependent variable into a more normalised one by taking the natural logarithm.'
    },

    position: { x: 2650, y: 2400 }
  },
  /**
   * Non-parametric route
   */
  {
    id: 'Info.non-parametric',
    type: 'info',
    data: { 
      label: 'Non-parametric route',
      description: 'In this route, non-parametric tests are no longer make any assumptions about the underlying distribution of your data.'
    },
    position: { x: 2350, y: 2730 }
  },
  {
    id: 'D.IndVarScalar',
    type: 'decision',
    data: { label: 'Is your independent variable Scalar?' },
    position: { x: 2350, y: 2330 }
  },
  {
    id: 'D.TreatBothDep',
    type: 'decision',
    data: { 
      label: 'Are you prepared to treat both as dependent?' 
    },
    position: { x: 2050, y: 2330 }
  },
  {
    id: 'T.Spearman',
    type: 'test',
    data: { 
      label: 'Spearman\'s Correlation',
      description: 'This is the coefficient indicate the direction and the magnitude of a relationship between two variables.' 
    },
    position: { x: 2050, y: 2630 }
  },

  /**
   * RIGHT Branches of "What type of variable is your dependent?"
   */
  {
    id: 'D.howManyCats',
    type: 'decision',
    data: { label: 'How many categories?' },
    position: { x: 3700, y: 2730 }
  },


  /*********************************************
   * BOTTOM BRANCH
   * Are they both dependent variables? - YES
   *********************************************/
  {
    id: 'D.avgDiff',
    type: 'decision',
    data: { 
      label: 'Are you interested in the averaged difference between them?',
      description: 'Averaged difference is the difference of the same measure between two variables.' 
    },
    position: { x: 3350, y: 3330 }
  },
]