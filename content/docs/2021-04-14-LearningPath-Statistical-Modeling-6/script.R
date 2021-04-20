library(tidyverse)
set.seed(777)


# Homogeneity vs heterogeneity
generateSample <- function(
  sampleSize = 1000, min = 0, max = 100, 
  alpha = 10, beta = 3, 
  mean = 0, var = 5,
  hetero = FALSE
  ) 
{
  varFactor = 1 
  x = runif(sampleSize, min = min, max = max)
  if(hetero == TRUE) {
    varFactor = x
  }
  y = alpha + beta*x + rnorm(sampleSize, mean = mean, sd = sqrt(var*varFactor))
  
  return(list(x = x, y = y))
}

par(mfrow=c(2,2))

homo <- generateSample(
  sampleSize = 500, min = 0, max = 50, 
  alpha = 10, beta = 5,
  mean = 0, var = 5
)

plot(lm(homo$y ~ homo$x))

hetero <- generateSample(
  sampleSize = 500, min = 0, max = 50, 
  alpha = 10, beta = 5,
  mean = 0, var = log(20), hetero = TRUE
)

plot(lm(hetero$y ~ hetero$x))



par(mfrow=c(1,1))
library("gridExtra")
# Normal 
meanArr <- c()
varArr <- c()

for(i in 1:1000) {
  sample <- runif(100, 0, 100)
  meanArr <- c(meanArr, mean(sample))
  varArr <- c(varArr, var(sample))
}

df <- data.frame(mean = meanArr, variance = varArr)

normal <- ggplot(df, aes(x = mean, y = variance)) + 
  geom_point() +
  labs(title = "Gaussian distribution: Mean vs Variance") +
  geom_smooth(method="lm", se=TRUE, fullrange=FALSE, level=0.95)


# Binomial 
meanArr <- c()
varArr <- c()

for(i in 1:1000) {
  sample <- rbinom(100, 10, 0.3)
  meanArr <- c(meanArr, mean(sample))
  varArr <- c(varArr, var(sample))
}

df <- data.frame(mean = meanArr, variance = varArr)

binomial <- ggplot(df, aes(x = mean, y = variance)) + 
  geom_point() +
  labs(title = "Binomial distribution: Mean vs Variance") +
  geom_smooth(method="lm", se=TRUE, fullrange=FALSE, level=0.95)


# Poisson 
meanArr <- c()
varArr <- c()

for(i in 1:1000) {
  sample <- rpois(100, 3)
  meanArr <- c(meanArr, mean(sample))
  varArr <- c(varArr, var(sample))
}

df <- data.frame(mean = meanArr, variance = varArr)

poisson <- ggplot(df, aes(x = mean, y = variance)) + 
  geom_point() +
  labs(title = "Poisson distribution: Mean vs Variance") +
  geom_smooth(method="lm", se=TRUE, fullrange=FALSE, level=0.95)


# Gamma 
meanArr <- c()
varArr <- c()

for(i in 1:1000) {
  sample <- rgamma(100, 2, .6)
  meanArr <- c(meanArr, mean(sample))
  varArr <- c(varArr, var(sample))
}

df <- data.frame(mean = meanArr, variance = varArr)

gamma <- ggplot(df, aes(x = mean, y = variance)) + 
  geom_point() +
  labs(title = "Gamma distribution: Mean vs Variance") +
  geom_smooth(method="auto", se=TRUE, fullrange=FALSE, level=0.95)


grid.arrange(normal, binomial, poisson, gamma, ncol = 2)
