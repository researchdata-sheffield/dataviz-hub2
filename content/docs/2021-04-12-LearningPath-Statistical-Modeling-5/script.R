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



meanArr <- c()
sdArr <- c()
par(mfrow=c(2,2))

for (var in 1:50) {
  sample1 <- sample_n(iris[iris$Species == 'setosa',], 20)
  #sample2 <- sample_n(iris[iris$Species == 'versicolor',], 20)
  #score <- var.test(sample1$Sepal.Length, sample2$Sepal.Length)
  #print(score$estimate)
  meanArr <- c(meanArr, mean(sample1$Sepal.Length))
  sdArr <- c(sdArr, sd(sample1$Sepal.Length))
}

plot(meanArr, sdArr)
abline(lm(sdArr ~ meanArr))


for (var in 1:50) {
  sample <- sample_n(iris[iris$Species == 'versicolor',], 20)
  meanArr <- c(meanArr, mean(sample$Sepal.Length))
  sdArr <- c(sdArr, sd(sample$Sepal.Length))
}

plot(meanArr, sdArr)
abline(lm(sdArr ~ meanArr))


iris1 <- iris[iris$Species == "setosa",]
iris2 <- iris[iris$Species == "versicolor",]
iris3 <- iris[iris$Species == "virginica",]

par(mfrow=c(2,2))
plot(lm(mpg ~ disp, mtcars))



ggplot(iris, aes(x=Species, y=Sepal.Length, fill=Species)) + 
  geom_boxplot(alpha=0.5) +
  theme(legend.position="none")

bartlett.test(Sepal.Length ~ Species, data = iris)
interaction