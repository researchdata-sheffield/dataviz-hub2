library(tidyverse)


##########################
######### T-test #########
##########################

# Two-tailed t-test (unpaired)
# assumptions: independent, normally distributed, homogeneous variance

treatment1 <- PlantGrowth[PlantGrowth$group == 'trt1',]$weight
treatment2 <- PlantGrowth[PlantGrowth$group == 'trt2',]$weight

shapiro.test(treatment1)
shapiro.test(treatment2)

# check if variances are equal
var.test(treatment1, treatment2)

t.test(
  treatment1, 
  treatment2, 
  alternative = "two.sided", 
  var.equal = FALSE
)

# Two-tailed t-test (paired)

age5 <- Loblolly[Loblolly$age == 5,]$height
age20 <- Loblolly[Loblolly$age == 20,]$height
age25 <- Loblolly[Loblolly$age == 25,]$height

shapiro.test(age20)
shapiro.test(age25)

# near equal variance
var.test(age20, age25)

t.test(
  age20, 
  age25, 
  alternative = "two.sided", 
  paired = TRUE
)

# change alternative to "less" or "greater" for one-tailed test


##########################
######### F-test #########
##########################
df_ftest <- data.frame(
  "Smoker" = c(43, 7), 
  "Non-smoker" = c(11, 39), 
  row.names = c("Drinker", "Non-drinker")
  )


fisher.test(df_ftest)


# var.test(
#   age20, 
#   age25,
#   ratio = 1,
#   conf.level = 0.95,
#   alternative = "two.sided"
# )



#########################
######### ANOVA #########
#########################
mtcars

lm1 <- lm(mpg ~ hp , mtcars)
lm2 <- lm(mpg ~ hp + gear, mtcars)

summary(lm1)
summary(lm2)

anova(lm1, lm2)





