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


# Exponential
dataExp1 <- tibble(Outcome = rexp(sampleSize, rate = 1), distribution = "Exp(1)")
dataExp2 <- tibble(Outcome = rexp(sampleSize, rate = .1), distribution = "Exp(0.1)")
dataExp3 <- tibble(Outcome = rexp(sampleSize, rate = .2), distribution = "Exp(0.2)")
dataExp4 <- tibble(Outcome = rexp(sampleSize, rate = .5), distribution = "Exp(0.5)")
dataExp5 <- tibble(Outcome = rexp(sampleSize, rate = .8), distribution = "Exp(0.8)")

data <- bind_rows(dataExp1, dataExp2, dataExp3, dataExp4, dataExp5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from Exponential distributions",
    subtitle = "10,000 samples"
  )

# Cauchy
dataCauchy1 <- tibble(Outcome = rcauchy(sampleSize, location = 0, scale = 1), distribution = "Cauchy(0,1)")
dataCauchy2 <- tibble(Outcome = rcauchy(sampleSize, location = 0, scale = 2), distribution = "Cauchy(0,2)")
dataCauchy3 <- tibble(Outcome = rcauchy(sampleSize, location = 0, scale = 0.5), distribution = "Cauchy(0,0.5)")
dataCauchy4 <- tibble(Outcome = rcauchy(sampleSize, location = -1, scale = 5), distribution = "Cauchy(-1,5)")
dataCauchy5 <- tibble(Outcome = rcauchy(sampleSize, location = -5, scale = 1), distribution = "Cauchy(-5,1)")

data <- bind_rows(dataCauchy1, dataCauchy2, dataCauchy3, dataCauchy4, dataCauchy5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from Cauchy distributions",
    subtitle = "10,000 samples"
  ) +
  xlim(-10,10)


# Gamma
dataGamma1 <-tibble(Outcome = rgamma(sampleSize, shape = 1, rate = 1), distribution = "Gamma(1,1)")
dataGamma2 <- tibble(Outcome = rgamma(sampleSize, shape = 2, rate = 1), distribution = "Gamma(2,1)")
dataGamma3 <- tibble(Outcome = rgamma(sampleSize, shape = 3, rate = 1), distribution = "Gamma(3,1)")
dataGamma4 <- tibble(Outcome = rgamma(sampleSize, shape = 1, rate = 5), distribution = "Gamma(1,5)")
dataGamma5 <- tibble(Outcome = rgamma(sampleSize, shape = 3, rate = 5), distribution = "Gamma(3,5)")

data <- bind_rows(dataGamma1, dataGamma2, dataGamma3, dataGamma4, dataGamma5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from Gamma distributions",
    subtitle = "10,000 samples. 1st parameter = shape, 2nd parameter = rate"
  ) +
  xlim(0, 8)


# Beta
dataBeta1 <-tibble(Outcome = rbeta(sampleSize, shape1 = .5, shape2 = .5), distribution = "Beta(0.5,0.5)")
dataBeta2 <- tibble(Outcome = rbeta(sampleSize, shape1 = 2, shape2 = 1), distribution = "Beta(2,1)")
dataBeta3 <- tibble(Outcome = rbeta(sampleSize, shape1 = 3, shape2 = 1), distribution = "Beta(3,1)")
dataBeta4 <- tibble(Outcome = rbeta(sampleSize, shape1 = 1, shape2 = 5), distribution = "Beta(1,5)")
dataBeta5 <- tibble(Outcome = rbeta(sampleSize, shape1 = 3, shape2 = 5), distribution = "Beta(3,5)")

data <- bind_rows(dataBeta1, dataBeta2, dataBeta3, dataBeta4, dataBeta5)

ggplot(data, aes(x = Outcome, fill = distribution)) + 
  geom_density(aes(group = distribution), alpha = 0.25) +
  labs(
    title = "Sampling from Beta distributions",
    subtitle = "10,000 samples. 1st parameter = shape 1, 2nd parameter = shape 2"
  )

?rnorm

