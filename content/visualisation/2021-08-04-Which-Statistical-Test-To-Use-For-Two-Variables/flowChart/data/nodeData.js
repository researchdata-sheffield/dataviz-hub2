/**
 * NOTES:
 * y: 0 start from the top of the screen
 * x: 0 start from the left
 * Distance between each node: ~ 350 in x, ~ 300 in y
 */
export const chartNodeData = [
  {
    id: "start",
    type: "start",
    data: {
      label: "Click to start!",
      description: "Find out which statistical test to use for two variables."
    },
    position: { x: 2900, y: 3000 },
    isHidden: false
  },
  {
    id: "D.bothDepVars",
    type: "decision",
    data: {
      label: "Are they both dependent variables?",
      description: "A dependent variable depends on changes in other variable."
    },
    position: { x: 3220, y: 3030 }
  },
  /*********************************************
   * TOP BRANCH
   * Are they both dependent variables? - NO
   *********************************************/
  {
    id: "D.typeOfDep",
    type: "decision",
    data: {
      label: "What type of variable is your dependent?",
      description: `Choose from Scalar, Nominal, or Ordinal. <br/><br/>
        Scalar:  variables that are for continuous numeric measurements such as height, temperature, and salary. <br/><br/>
        Nominal: variables that has two or more UNORDERED categories or groups. Examples are gender, age, hair colour, answers to True or False questions, and faculties within the university. <br/><br/>
        Ordinal: ORDERED nominal variables so now the order matters. For example, a survey might ask surveyees to rate something at a scale from 0 to 9. 
        `
    },
    position: { x: 3350, y: 2730 }
  },
  /**
   * LEFT branches of "What type of variable is your dependent?" - Scalar
   */
  {
    id: "D.assumeConstVar",
    type: "decision",
    data: {
      label: "Are you happy to assume constant variance?",
      description:
        "Constant variance is the assumption of homoscedasticity. This means the data points are evenly scattered around the regression line."
    },
    position: { x: 3000, y: 2730 }
  },
  {
    id: "D.VarPropMean",
    type: "decision",
    data: {
      label: "Does spread increase with increases in mean?",
      description:
        "Increase in variance with increases in mean is suggesting data points might have different scales - one or more points are significant larger. On the graph you will see data points moving further away on the higher end of the regression line."
    },
    position: { x: 2650, y: 2730 }
  },
  {
    id: "Info.normality",
    type: "info",
    data: {
      label: "Assume normality",
      description:
        "Assuming your data follows Gaussian/normal distribution. You can check this visually by plotting a histogram."
    },
    position: { x: 2995, y: 2400 }
  },
  {
    id: "Info.LogDependent",
    type: "info",
    data: {
      label: "Log the dependent variable and use this as your dependent",
      description:
        "Transform the dependent variable into a more normalised one by taking the natural logarithm."
    },

    position: { x: 2645, y: 2400 }
  },
  /**
   * Non-parametric route
   */
  {
    id: "Info.non-parametric",
    type: "info",
    data: {
      label: "Non-parametric route",
      description:
        "In this route, non-parametric tests are no longer make any assumptions about the underlying distribution of your data."
    },
    position: { x: 2345, y: 2720 }
  },
  {
    id: "D.IndVarScalar",
    type: "decision",
    data: {
      label: "Is your independent variable Scalar?",
      description:
        "Scalar variables are for continuous numeric measurements such as height, temperature, and salary."
    },
    position: { x: 2350, y: 2330 }
  },
  {
    id: "D.TreatBothDep",
    type: "decision",
    data: {
      label: "Are you prepared to treat both as dependent?",
      description: "A dependent variable depends on changes in other variable."
    },
    position: { x: 2050, y: 2330 }
  },
  {
    id: "T.Spearman",
    type: "test",
    data: {
      label: "Spearman's Correlation",
      description:
        "This is the coefficient calculated using ranked values for each variable, indicate the direction and the magnitude of a relationship between two variables."
    },
    position: { x: 2040, y: 2630 }
  },
  {
    id: "H.NotSpearmanSeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "We hope you have a lot of data!"
    },
    position: { x: 1750, y: 2350 }
  },
  {
    id: "D.IndVarNominal",
    type: "decision",
    data: {
      label: "Is your independent variable nominal?",
      description:
        "Check if your independent variable have at least two categories."
    },
    position: { x: 2350, y: 2000 }
  },
  {
    id: "D.IndVarNominalYesNumOfCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description:
        "Number of categories in this nominal (unordered categorical) independent variable."
    },
    position: { x: 2050, y: 2000 }
  },
  {
    id: "D.InterestInMedians",
    type: "decision",
    data: {
      label: "Highly interested in medians?",
      description: "Median are one of the measure for central tendency."
    },
    position: { x: 1750, y: 2000 }
  },
  {
    id: "T.MedianTest",
    type: "test",
    data: {
      label: "Median Test",
      description:
        "This tests whether the median of two dependent variables are identical."
    },
    position: { x: 1450, y: 2015 }
  },
  {
    id: "T.MannWhitney",
    type: "test",
    data: {
      label: "Mann-Whitney",
      description: `Mann-Whitney tests whether there is a difference between two dependent variables.`
    },
    position: { x: 1745, y: 1715 }
  },
  {
    id: "T.KruskalWallis",
    type: "test",
    data: {
      label: "Kruskal-Wallis",
      description:
        "A non-parametric version of one-way ANOVA for testing whether multiple dependent variables comes from the same distribution."
    },
    position: { x: 2045, y: 1715 }
  },
  {
    id: "D.IndVarNominalNoNumOfCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description: "Number of categories in the independent variable."
    },
    position: { x: 2350, y: 1700 }
  },
  {
    id: "D.reduceNumOfCats",
    type: "decision",
    data: {
      label: "Prepared to reduce the number of categories"
    },
    position: { x: 2350, y: 1400 }
  },
  {
    id: "Info.reduceNumOfCats",
    type: "info",
    data: {
      label: "Reduce categories to less than 5"
    },
    position: { x: 2050, y: 1400 }
  },
  {
    id: "D.NpIndVarNotNominalTreatBothDep",
    type: "decision",
    data: {
      label: "Prepared to treat both variables as dependent variable."
    },
    position: { x: 2350, y: 1100 }
  },
  {
    id: "T.NpIndVarNotNominalTreatBothDep-Spearman",
    type: "test",
    data: {
      label: "Spearman's correlation",
      description:
        "This is the coefficient calculated using ranked values for each variable, indicate the direction and the magnitude of a relationship between two variables."
    },
    position: { x: 2050, y: 1115 }
  },
  {
    id: "H.NpIndVarNotNominalTreatBothDep-SeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "You would need to see a statistician for further guidance."
    },
    position: { x: 2340, y: 810 }
  },
  /**
   * Assuming normality
   */
  {
    id: "D.normalityIndVarScalar",
    type: "decision",
    data: {
      label: "Is your independent variable scalar?",
      description:
        "Check whether your independent variable is continuous or categorical."
    },
    position: { x: 2995, y: 2100 }
  },
  {
    id: "T.normalityLinearRegression",
    type: "test",
    data: {
      label: "Linear Regression",
      description:
        "An approach used for modelling the linear relationship between the dependent variable and independent variables."
    },
    position: { x: 2695, y: 2115 }
  },
  {
    id: "D.normalityIndVarNominal",
    type: "decision",
    data: {
      label: "Is your independent variable nominal?",
      description:
        "Check whether your independent variable is continuous or categorical."
    },
    position: { x: 2995, y: 1600 }
  },
  {
    id: "D.normalityIndVarNominalYesCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description:
        "Number of categories in your nominal (unordered categorical) independent variable."
    },
    position: { x: 2695, y: 1600 }
  },
  {
    id: "T.normalityIndVarNominalYesTtest",
    type: "test",
    data: {
      label: "T-test",
      description:
        "A hypothesis test that investigate the significant difference (whether there are measurable difference) between two groups."
    },
    position: { x: 2585, y: 1850 }
  },
  {
    id: "T.normalityIndVarNominalYesOneANOVA",
    type: "test",
    data: {
      label: "One Way ANOVA with multiple comparisons",
      description:
        "One-way analysis of variance is used to investigate the significance difference between the means of two groups. In this case, we need to conduct ANOVA on all possible pairwise means."
    },
    position: { x: 2790, y: 1850 }
  },
  {
    id: "D.normalityIndVarNominalNoCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description: "Number of categories in your independent variable."
    },
    position: { x: 2995, y: 1300 }
  },
  {
    id: "D.normalityLinearlySpaced",
    type: "decision",
    data: {
      label: "Prepared to consider linearly spaced?",
      description:
        "Are these categories equally spaced? If so, it might be an interval variable. An interval variable is used, as the the name suggesting, for define values along a scale. The length/distance between adjacent values is the same. Examples of interval variable are temperature, time, and percentages."
    },
    position: { x: 2695, y: 900 }
  },
  {
    id: "T.normalityLinearRegression2",
    type: "test",
    data: {
      label: "Linear Regression",
      description:
        "An approach used for modelling the linear relationship between the dependent variable and independent variables."
    },
    position: { x: 2685, y: 615 }
  },
  {
    id: "D.normalityCombineCats",
    type: "decision",
    data: {
      label: "Willing to combine neighbouring categories?",
      description:
        "For example, suppose 50 balls are divided into categories Red (18), Green (15), Blue (12), Yellow (2), Orange (1), and White (2). We can combine Yellow, Orange and White into the category 'Other' because they are minority."
    },
    position: { x: 3095, y: 900 }
  },
  {
    id: "Info.normalityCombineCatsYes",
    type: "info",
    data: {
      label: "Combine smallest categories with neighbours",
      description:
        "Merge smallest categories into its neighbours. This helps to reduce the number of categories."
    },
    position: { x: 3565, y: 890 }
  },
  {
    id: "T.normalityANOVAcontrast",
    type: "test",
    data: {
      label: "One-way ANOVA with polynomial contrasts",
      description:
        "One-way analysis of variance is used to investigate the significance difference between the means of two groups. We use polynomial contrasts to test polynomial patterns (linear, quadratic, cubic, ...) in categories."
    },
    position: { x: 3555, y: 1315 }
  },
  {
    id: "D.normalityCombineCatsNo",
    type: "decision",
    data: {
      label: "Prepared to treat both variables as dependent?",
      description: "Two variables are not dependent on each other."
    },
    position: { x: 3095, y: 600 }
  },
  {
    id: "T.normalityNotCombineCats-Spearman",
    type: "test",
    data: {
      label: "Spearman's correlation",
      description:
        "This is the coefficient calculated using ranked values for each variable, indicate the direction and the magnitude of a relationship between two variables."
    },
    position: { x: 3395, y: 615 }
  },
  {
    id: "H.normalityNotCombineCats-SeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "You would need to see a statistician for further guidance."
    },
    position: { x: 3085, y: 300 }
  },

  /**
   * Top Branches of "What type of variable is your dependent?" - Nominal
   */
  {
    id: "D.nominalIndVarNominal",
    type: "decision",
    data: {
      label: "Is your independent variable nominal?",
      description:
        "Check whether your independent variable is continuous or categorical."
    },
    position: { x: 3350, y: 2430 }
  },
  {
    id: "T.nominalChiSqTest",
    type: "test",
    data: {
      label: "Chi-squared Test",
      description:
        "Test the significant difference (whether there are measurable difference) between categories."
    },
    position: { x: 3650, y: 2445 }
  },
  {
    id: "D.nominalTwoCats",
    type: "decision",
    data: {
      label: "Do you have only two categories in your dependent variable?"
    },
    position: { x: 3350, y: 2130 }
  },
  {
    id: "T.nominalLogistic",
    type: "test",
    data: {
      label: "Logistic Regression"
    },
    position: { x: 3650, y: 2145 }
  },
  {
    id: "H.nominalSeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description:
        "If your dependent variable have more than two categories, there is something needs to change."
    },
    position: { x: 3340, y: 1830 }
  },

  /**
   * RIGHT Branches of "What type of variable is your dependent?" - Ordinal
   */
  {
    id: "D.howManyCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description: "How many categories in your dependent ordinal variable?"
    },
    position: { x: 3700, y: 2730 }
  },
  {
    id: "H.ordinalRegression",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "You should be using Ordinal Regression."
    },
    position: { x: 3545, y: 3045 }
  },
  {
    id: "D.ordinalIndVarNominal",
    type: "decision",
    data: {
      label: "Is your independent variable nominal?",
      description:
        "Check whether your independent variable is continuous or categorical."
    },
    position: { x: 4000, y: 2730 }
  },
  {
    id: "T.ordinalChiSq",
    type: "test",
    data: {
      label: "Chi-squared Test",
      description: "Test the significant difference between categories."
    },
    position: { x: 4300, y: 2745 }
  },
  {
    id: "D.ordinalCheckOrdinal",
    type: "decision",
    data: {
      label: "Is it ordinal?",
      description:
        "Check whether your independent variable is ordinal (ordered categories)."
    },
    position: { x: 4000, y: 3030 }
  },
  {
    id: "D.ordinalNumOfCats",
    type: "decision",
    data: {
      label: "How many categories?",
      description: "Number of categories in the independent ordinal variable."
    },
    position: { x: 4315, y: 3030 }
  },
  {
    id: "H.ordinalSeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "Please see a statistician to discuss options."
    },
    position: { x: 4700, y: 3045 }
  },
  /*********************************************
   * BOTTOM BRANCH
   * Are they both dependent variables? - YES
   *********************************************/
  {
    id: "D.avgDiff",
    type: "decision",
    data: {
      label: "Are you interested in the averaged difference between them?",
      description:
        "Averaged difference is the difference of the same measure between two variables."
    },
    position: { x: 3350, y: 3330 }
  },
  {
    id: "D.bothSameThing-Left",
    type: "decision",
    data: {
      label: "Are both measuring the same thing?",
      description:
        "Are both variables comes from the same experiment and measuring the same thing?"
    },
    position: { x: 3000, y: 3330 }
  },
  {
    id: "D.bothSameThing-Right",
    type: "decision",
    data: {
      label: "Are both measuring the same thing?",
      description:
        "Are both variables comes from the same experiment and measuring the same thing?"
    },
    position: { x: 3950, y: 3330 }
  },
  {
    id: "H.bothSameThing-Right-No",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description:
        "Your null hypothesis does not make sense. The average difference between two different things do not provide valuable insight."
    },
    position: { x: 4250, y: 3345 }
  },
  {
    id: "D.AreTheyScalar",
    type: "decision",
    data: {
      label: "Are they both scalar?",
      description:
        "Scalar variables are for continuous numeric measurements such as height, temperature, and salary."
    },
    position: { x: 4250, y: 3630 }
  },
  /**
   * LEFT-MOST branch
   */
  {
    id: "D.BothScalar",
    type: "decision",
    data: {
      label: "Are they both scalar?",
      description:
        "Scalar variables are for continuous numeric measurements such as height, temperature, and salary."
    },
    position: { x: 2700, y: 3330 }
  },
  {
    id: "T.PearsonsCorrelation",
    type: "test",
    data: {
      label: "Pearsons Correlation",
      description:
        "Measures the linear relationship between two variables. Calculated using raw values from each variable."
    },
    position: { x: 2400, y: 3345 }
  },
  {
    id: "D.OneTypeEach",
    type: "decision",
    data: {
      label: "One ordinal and one scalar?",
      description:
        "Are you comparing an ordinal variable and a scalar variable? <br/><br/>Ordinal variables has two or more ORDERED categories or groups. For example, a survey might ask surveyees to rate something at a scale from 0 to 9."
    },
    position: { x: 2700, y: 3630 }
  },
  {
    id: "T.SpearmanCorrelationOneTypeEach",
    type: "test",
    data: {
      label: "Spearman's correlation",
      description:
        "This is the coefficient calculated using ranked values for each variable, indicate the direction and the magnitude of a relationship between two variables."
    },
    position: { x: 2300, y: 3645 }
  },
  {
    id: "D.BothOrdinal",
    type: "decision",
    data: {
      label: "Both ordinal variables",
      description:
        "Both variables have ordered categories. <br/><br/>Ordinal variables has two or more ORDERED categories or groups. For example, a survey might ask surveyees to rate something at a scale from 0 to 9."
    },
    position: { x: 2700, y: 3930 }
  },
  {
    id: "D.NominalAndOrdinal",
    type: "decision",
    data: {
      label: "One nominal and one ordinal",
      description:
        "One variable have unordered categories, and the other variable have ordered categories."
    },
    position: { x: 2700, y: 4230 }
  },
  {
    id: "D.HowManyCatsInOrdinal",
    type: "decision",
    data: {
      label: "How many categories in your ordinal variable?",
      description:
        "Ordinal variables has two or more ORDERED categories or groups. For example, a survey might ask surveyees to rate something at a scale from 0 to 9."
    },
    position: { x: 2400, y: 4230 }
  },
  {
    id: "T.HowManyCatsInOrdinal-ChiSq",
    type: "test",
    data: {
      label: "Chi-squared Test",
      description: "Test the significant difference between categories."
    },
    position: { x: 2390, y: 4545 }
  },
  {
    id: "D.avgDiffLeftBothOrdinal",
    type: "decision",
    data: {
      label: "Both variables are ordinal",
      description:
        "Ordinal variables has two or more ORDERED categories or groups. For example, a survey might ask surveyees to rate something at a scale from 0 to 9."
    },
    position: { x: 2700, y: 4530 }
  },
  {
    id: "H.avgDiffLeftSeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description: "This is a specialised area."
    },
    position: { x: 3000, y: 4545 }
  },
  {
    id: "D.bothLessThanFive",
    type: "decision",
    data: {
      label: "Both less than 5 categories",
      description: "This is a specialised area."
    },
    position: { x: 2700, y: 4830 }
  },
  /**
   * LEFT-CENTRE branch
   */
  {
    id: "D.centreBothScalar",
    type: "decision",
    data: {
      label: "Are they both scalar?",
      description:
        "Check if both variables contains continuous numeric measurements."
    },
    position: { x: 3000, y: 3630 }
  },
  {
    id: "D.centreAssumeConstVar",
    type: "decision",
    data: {
      label: "Are you happy to assume constancy of variance?",
      description:
        "Constant variance is the assumption of homoscedasticity. This means the data points are evenly scattered around the regression line."
    },
    position: { x: 3300, y: 3630 }
  },
  {
    id: "T.ICC",
    type: "test",
    data: {
      label: "Intraclass correlation coefficient",
      description:
        "ICC measures the similarity of population in the same group, on a scale of 0 to 1."
    },
    position: { x: 3600, y: 3645 }
  },
  {
    id: "D.centreVarMean",
    type: "decision",
    data: {
      label: "Does variation increase with mean score?",
      description:
        "Increase in variance with increases in mean is suggesting data points might have different scales - one or more points are significant larger."
    },
    position: { x: 3300, y: 3930 }
  },
  {
    id: "H.centreSeeStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description:
        "See a statistician as there is no standard test for this scenario."
    },
    position: { x: 2985, y: 4195 }
  },
  {
    id: "Info.centreLogData",
    type: "info",
    data: {
      label: "Log Data",
      description: "Transform your data by taking natural logarithm."
    },
    position: { x: 3605, y: 3930 }
  },
  /**
   * RIGHT - LEFT branch
   */
  {
    id: "D.RLeftBothOrdinal",
    type: "decision",
    data: {
      label: "Are they both ordinal variables?",
      description:
        "Ordinal variables has two or more ORDERED categories or groups. For example, a survey might ask surveyees to rate something at a scale from 0 to 9."
    },
    position: { x: 3950, y: 3930 }
  },
  {
    id: "T.RLeftWilcoxon",
    type: "test",
    data: {
      label: "Wilcoxon Paired Test",
      description:
        "This test is used for data that doesn't follow the normal distribution, can be use to test the statistical difference between two paired groups."
    },
    position: { x: 3935, y: 4245 }
  },
  {
    id: "D.RLeftTalk",
    type: "decision",
    data: {
      label: "Are you willing to talk to a statistician?",
      description: "We strongly recommend you seek advice from a statistician."
    },
    position: { x: 3600, y: 4230 }
  },
  {
    id: "H.RLeftStatistician",
    type: "help",
    data: {
      label: "Please consult a statistician",
      description:
        "Talk to a statistician to clarify your question and get advice."
    },
    position: { x: 3585, y: 4530 }
  },
  {
    id: "T.RLeftKappa",
    type: "test",
    data: {
      label: "Kappa",
      description:
        "Cohen's kappa coefficient measures consistency between categorical variables X and Y."
    },
    position: { x: 3250, y: 4245 }
  },
  /**
   * RIGHT-MOST branch
   */
  {
    id: "D.RightAssumeConstVar",
    type: "decision",
    data: {
      label: "Are you happy to assume constancy of variance?",
      description:
        "Constant variance is the assumption of homoscedasticity. This means the data points are evenly scattered around the regression line."
    },
    position: { x: 4550, y: 3630 }
  },
  {
    id: "D.RightVarMean",
    type: "decision",
    data: {
      label: "Does variation increase with mean score?",
      description:
        "Increase in variance with increases in mean is suggesting data points might have different scales - one or more points are significant larger."
    },
    position: { x: 4550, y: 3930 }
  },
  {
    id: "T.RightWilcoxon",
    type: "test",
    data: {
      label: "Wilcoxon Paired Test",
      description:
        "This test is used for data that doesn't follow the normal distribution, can be use to test the statistical difference between two paired groups."
    },
    position: { x: 4540, y: 4230 }
  },
  {
    id: "Info.RightLogData",
    type: "info",
    data: {
      label: "Log Data",
      description: "Transform your data by taking natural logarithm."
    },
    position: { x: 4840, y: 3930 }
  },
  {
    id: "T.RightPairedTtest",
    type: "test",
    data: {
      label: "Paired T-Test",
      description:
        "The T-test is a hypothesis test that investigate the significant difference between two paired groups sampled from the same population."
    },
    position: { x: 4835, y: 3645 }
  }
];
