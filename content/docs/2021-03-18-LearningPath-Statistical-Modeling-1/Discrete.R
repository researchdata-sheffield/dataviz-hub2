library(tidyverse)
library(ggplot2)

# Set for reproducibility
set.seed(777)
sampleSize <- 10000

# Bernoulli
data <- tibble(Outcome = rbinom(sampleSize, 1, 0.5))

ggplot(data, aes(x = Outcome)) + geom_histogram()


# Binomial
dataBinom2 <- tibble(Outcome = rbinom(sampleSize, 1, 0.2), OutcomeNo=2)
dataBinom4 <- tibble(Outcome = rbinom(sampleSize, 3, 0.2), OutcomeNo=4)
dataBinom10 <- tibble(Outcome = rbinom(sampleSize, 9, 0.2), OutcomeNo=10)
dataBinom50 <- tibble(Outcome = rbinom(sampleSize, 49, 0.2), OutcomeNo=50)

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







