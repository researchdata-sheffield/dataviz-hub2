library(tidyverse)
library(ggplot2)

# Set for reproducibility
set.seed(777)
sampleSize <- 10000

# Bernoulli
data <- tibble(Outcome = rbinom(sampleSize, 1, 0.5))

ggplot(data, aes(x = Outcome)) + geom_histogram()


# Binomial
dataBinom2 <- tibble(Outcome = rbinom(sampleSize, 2, 0.2), OutcomeNo=2)
dataBinom4 <- tibble(Outcome = rbinom(sampleSize, 4, 0.2), OutcomeNo=4)
dataBinom10 <- tibble(Outcome = rbinom(sampleSize, 10, 0.2), OutcomeNo=10)
dataBinom50 <- tibble(Outcome = rbinom(sampleSize, 50, 0.2), OutcomeNo=50)

data <- bind_rows(dataBinom2, dataBinom4, dataBinom10, dataBinom50)

ggplot(data, aes(x = Outcome)) + 
  geom_histogram(binwidth = .5) + 
  facet_wrap(~OutcomeNo, scales = "free") +
  labs(
    title = "Sampling distributions (10,000 samples) of the Binomial distribution",
    subtitle = "10,000 samples with 0.2 as the probability of success."
  ) 


# Discrete Uniform
data <- tibble(Outcome = rdunif(sampleSize, 1, 6))

ggplot(data, aes(x = Outcome)) + 
  geom_histogram(binwidth = .5) +
  scale_x_continuous(breaks = seq(1,6,1)) +
  labs(
    title = "Simulating dice rolling outcomes",
    subtitle = "10,000 samples"
  )


# Poisson 
dataPois1 <- tibble(dist = rpois(sampleSize, 1), lambda = 1)
dataPois3 <- tibble(dist = rpois(sampleSize, 3), lambda = 3)
dataPois10 <- tibble(dist = rpois(sampleSize, 10), lambda = 10)
dataPois50 <- tibble(dist = rpois(sampleSize, 50), lambda = 50)


data <- bind_rows(dataPois1, dataPois3, dataPois10, dataPois50)

ggplot(data, aes(x = dist)) + 
  geom_histogram(binwidth = .5) + 
  facet_wrap(~lambda) +
  labs(
    title = "Sampling distributions of the poisson distribution",
    subtitle = "10,000 samples, lambdas are specified at the top of each graph"
  ) 



# Negative binomial
dataNb2 <- tibble(dist = rnbinom(sampleSize, 2, .3), success = 2)
dataNb3 <- tibble(dist = rnbinom(sampleSize, 3, .3), success = 3)
dataNb4 <- tibble(dist = rnbinom(sampleSize, 4, .3), success = 4)
dataNb5 <- tibble(dist = rnbinom(sampleSize, 5, .3), success = 5)
dataNb6 <- tibble(dist = rnbinom(sampleSize, 6, .3), success = 6)
dataNb7 <- tibble(dist = rnbinom(sampleSize, 7, .3), success = 7)

data <- bind_rows(dataNb2, dataNb3, dataNb4, dataNb5, dataNb6, dataNb7)

ggplot(data, aes(x = dist)) + 
  geom_histogram(binwidth = .5) + 
  facet_wrap(~success, ncol = 2) +
  labs(
    title = "Sampling distributions of the negative binomial distribution",
    subtitle = "10,000 samples, target number of successful trials are specified at the top of each graph",
    x = "Number of trials occured before the kth success"
  ) 



# Geometric
dataGeom2 <- tibble(dist = rgeom(sampleSize, .2), prob = 0.2)
dataGeom3 <- tibble(dist = rgeom(sampleSize, .3), prob = 0.3)
dataGeom4 <- tibble(dist = rgeom(sampleSize, .4), prob = 0.4)
dataGeom5 <- tibble(dist = rgeom(sampleSize, .5), prob = 0.5)

data <- bind_rows(dataGeom2, dataGeom3, dataGeom4, dataGeom5)

ggplot(data, aes(x = dist)) + 
  geom_histogram(binwidth = .5) + 
  facet_wrap(~prob) +
  labs(
    title = "Sampling distributions of the geometric distribution",
    subtitle = "10,000 samples, probability of successes are specified at the top of each graph"
  ) 

