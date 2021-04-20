library(tidyverse)

# Residual vs fitted: residual vs predicted
# Normal Q-Q: distribution of errors, straight line if normally distributed
# Scale-Location: Ideally be randomly scattered
# Cook's distance: Indicates influence of each point on the model
lm3 <- lm(mpg ~ disp, mtcars)

par(mfrow=c(2,2))
plot(lm3,1)
plot(lm3,2)
plot(lm3,3)
plot(lm3,5)



ggplot(iris, aes(x=Species, y=Sepal.Length, fill=Species)) + 
  geom_boxplot(alpha=0.5) +
  theme(legend.position="none")

bartlett.test(Sepal.Length ~ Species, data = iris)
