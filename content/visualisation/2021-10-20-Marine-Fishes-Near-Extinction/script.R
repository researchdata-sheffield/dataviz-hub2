library(tidyverse)
library(data.table)

# number of digits when printing numbers
options(digits = 15) 

# Change the path to where data located
dataFiles <- list.files(
  path = "data/", 
  pattern = '200824_CvGBMPred_(.*?)_.csv',
  full.names = TRUE
  )

# use the fread function (from data.table) 
# for faster file reading speed
predictionData <- dataFiles %>%
  map_df(
    ~fread(
      .,
      col.names = c(
        "Index",
        "id",
        "prediction",
        "runNo"
      )
    )
  ) %>% tibble()


# Create a new column for probability
predictionData <- predictionData %>% 
  mutate(Probability = 1 - Prediction)


# For each region (id), get Median, Min and Max probability of extinction
finalData <- predictionData %>% 
  group_by(id) %>%
  summarise(
    median = median(Probability), 
    min = min(Probability), 
    max = max(Probability)
  )

finalData
