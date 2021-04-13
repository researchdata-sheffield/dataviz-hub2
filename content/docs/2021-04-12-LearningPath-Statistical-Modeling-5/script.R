library(tidyverse)

lm1 <- lm(mpg ~ hp , mtcars)
lm2 <- lm(mpg ~ hp + gear, mtcars)

summary(lm1)
summary(lm2)

anova(lm1, lm2)


# Residual vs fitted: residual vs predicted
# Normal Q-Q: distribution of errors, straight line if normally distributed
# Scale-Location: Ideally be randomly scattered
# Cook's distance: Indicates influence of each point on the model


lm3 <- lm(Sepal.Length ~ Species, iris)


plot(lm3)


sample1 <- sample_n(mtcars, 20)
sample2 <- sample_n(mtcars, 20)

var.test(sample1, sample2)

