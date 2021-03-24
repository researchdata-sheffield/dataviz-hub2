library(tidyverse)
library(ggplot2)

# Set for reproducibility
set.seed(777)
sampleSize <- 10000


# Normal Distribution
dataN1 <- tibble(Outcome = rnorm(sampleSize, mean = 0, sd = 1), distribution = "N(0,1)")
dataN2 <- tibble(Outcome = rnorm(sampleSize, mean = 0, sd = 3), distribution = "N(0,3)")
dataN3 <- tibble(Outcome = rnorm(sampleSize, mean = 2, sd = 5), distribution = "N(2,5)")
dataN4 <- tibble(Outcome = rnorm(sampleSize, mean = 5, sd = 10), distribution = "N(5,10)")
dataN5 <- tibble(Outcome = rnorm(sampleSize, mean = 10, sd = 2), distribution = "N(10,2)")

data <- bind_rows(dataN1, dataN2, dataN3, dataN4, dataN5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from normal distributions",
    subtitle = "10,000 samples"
  )



# chi-squared
dataChiSq1 <- tibble(Outcome = rchisq(sampleSize, df = 1), distribution = "Chi(1)")
dataChiSq2 <- tibble(Outcome = rchisq(sampleSize, df = 2), distribution = "Chi(2)")
dataChiSq3 <- tibble(Outcome = rchisq(sampleSize, df = 5), distribution = "Chi(5)")
dataChiSq4 <- tibble(Outcome = rchisq(sampleSize, df = 10), distribution = "Chi(10)")
dataChiSq5 <- tibble(Outcome = rchisq(sampleSize, df = 20), distribution = "Chi(20)")

data <- bind_rows(dataChiSq1, dataChiSq2, dataChiSq3, dataChiSq4, dataChiSq5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from chi-squared distributions",
    subtitle = "10,000 samples"
  )

# f-distribution
dataF1 <- tibble(Outcome = rf(sampleSize, df1 = 1, df2 = 1), distribution = "F(1,1)")
dataF2 <- tibble(Outcome = rf(sampleSize, df1 = 5, df2 = 5), distribution = "F(5,5)")
dataF3 <- tibble(Outcome = rf(sampleSize, df1 = 10, df2 = 20), distribution = "F(10,20)")
dataF4 <- tibble(Outcome = rf(sampleSize, df1 = 30, df2 = 5), distribution = "F(30,5)")
dataF5 <- tibble(Outcome = rf(sampleSize, df1 = 15, df2 = 30), distribution = "F(15, 30)")

data <- bind_rows(dataF1, dataF2, dataF3, dataF4, dataF5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from F-distributions",
    subtitle = "10,000 samples. Removed curves after x=15"
  ) +
  xlim(0, 15)




