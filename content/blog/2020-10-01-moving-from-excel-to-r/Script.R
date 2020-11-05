# Load required libraries
library(tidyverse)
library(ggrepel)

# Load built-in dataset
data(mtcars)

mtcars[1]
# Load csv file
population_2020 <- read.csv('world_population2020.csv')
pop_2020 <- read.csv('https://raw.githubusercontent.com/yld-weng/datasets/master/CC0-PublicDomain/world_population2020.csv')


myCalculation <- function(number) {
  square = number*number
  square + 7
}


###################################################
########## Data manipulation & summaries ##########
###################################################

mtcars

tail(mtcars, 10)

summary(mtcars)

colMeans(mtcars)

sum(mtcars$carb)

head(mtcars, 10) %>% summarise(mean_mpg=mean(mpg), sd_disp=sd(disp))

firstTen <- head(mtcars, 10)
mean(firstTen$mpg)


# rename
rename(mtcars, 'miles/gallon'=mpg)
mtcars %>% rename('miles/gallon'=mpg)
rename(mtcars, 'miles/gallon'=mpg, 'horsepower'=hp)
names(mtcars)[names(mtcars) == 'mpg'] <- 'miles/gallon'

colnames(mtcars)

# groupby
mtcars %>% group_by(cyl) %>% summarise(Total = n(), avgMpg=mean(mpg), hpSD=sd(hp))

# select
mtcars %>% select(mpg, hp, cyl, qsec)
mtcars %>% select(!ends_with("c"))
mtcars %>% select(starts_with("m") & ends_with("g"))
mtcars %>% select(mpg:hp)
mtcars %>% select(contains("m"))

# filter
mtcars %>% filter(mpg > 30)
mtcars %>% filter(hp > 150 & hp < 200)
mtcars %>% filter(!is.na(mpg))


# mutate
# if you have categorical variables, can use filter(your_VAR %in% c(var1,var2,var3))
mtcars %>% mutate(carName=rownames(mtcars)) %>% filter(str_detect(carName, 'Volvo|Honda'))

# mutate with function
# Litres / kilometres
toKm <- function(x) {
  235.214583/x
}

mtcars %>% mutate('Litre/100km' = toKm(mpg))

mtcars %>% mutate('Litre/100km' = 235/mpg)

#arrange
mtcars %>% arrange(mpg, hp)

mtcars %>% arrange(desc(mpg)) %>% arrange(desc(hp))

#slice 
mtcars %>% slice(29)
mtcars %>% slice_head(n=5)

# across
mtcars %>% summarise(across(,~median(., na.rm = TRUE)))

mtcars %>% summarise(across(contains('m'),~median(.)))
######################################
############### mtcars ###############
######################################

# simple scatter plot
ggplot(mtcars, aes(x=mpg, y=hp))

ggplot(mtcars, aes(x=mpg, y=hp)) + geom_point()

# Parameters
ggplot(mtcars, aes(mpg, hp)) + geom_point(alpha=.8,size=3, stroke=.8)

data(mtcars)
ggplot(mtcars, aes(mpg, hp, label=rownames(mtcars))) + geom_point(aes(color=factor(cyl)), size=4) + geom_text()

ggplot(mtcars, aes(mpg, hp, label=rownames(mtcars))) + 
  geom_point(aes(color=factor(cyl)), size=4) +
  geom_smooth(method=lm) +
  geom_label_repel(
    nudge_x = -1.5, 
    direction = "y", 
    hjust = 0.5, 
    force = 4, 
    size = 4
  ) 

# Aesthetics
ggplot(mtcars, aes(mpg, hp, label=rownames(mtcars))) + 
  geom_point(aes(color=factor(cyl)), size=4) + 
  geom_smooth(method=lm, se=FALSE) +
  geom_label_repel(
    data=subset(mtcars, mtcars$mpg > 25 | mtcars$hp > 220), 
    aes(label = mtcars %>% filter(mpg > 25 | hp > 220) %>% rownames(mtcars)), 
    nudge_x = -2, 
    direction = "y", 
    hjust = 0.5, 
    force = 4, 
    size = 4
  ) +
  labs(title = "Cars: Horsepower vs Miles per Gallon", 
       subtitle = "Explore fuel economy of popular cars via relationship 
       between mpg and horsepower. Cars are grouped by number of cylinders."
  ) + 
  theme_minimal() + scale_color_brewer(palette="Paired") +
  theme(legend.position = "bottom", text=element_text(size=17), legend.title=element_text(size = 18), plot.subtitle=element_text(size=13) ) +
  scale_x_continuous(position = "top") + scale_y_reverse()



#############################################################
############## 10 most used functions in Excel ##############
#############################################################


###### Conditional formula ######
pop_2020[(pop_2020$Population > 100000) & (pop_2020$Population < 200000),]
pop_2020[(pop_2020$Fert.Rate == 2.0 | pop_2020$Fert.Rate == 1.1),]

###### VLOOKUP ######
pop_2020[pop_2020$Region=="China",]$Land_Area

###### LEN ######
nchar(pop_2020[pop_2020$Region=="China",]$Land_Area)

###### COUNTA ######
sum(!is.na(pop_2020$Net_Migrants))

###### SUMIF / AVERAGEIF ######
sum(pop_2020[pop_2020$Density < 10,]$Population)

mean(pop_2020[pop_2020$Density < 10,]$Population)

###### LEFT / RIGHT ######
myString <- "ExcelToR"
substr(myString, 1, 5)
substr(myString, nchar(myString)-5+1, nchar(myString))

###### MAX / MIN ######
max(pop_2020$Density)
min(pop_2020$Density)

###### CONCATENATE ######
paste("Moving", "From", "Excel", "To", "R", sep = "!")

###### COUNTIF ######
pop_2020 %>% drop_na(Net_Migrants) %>% summarise(n = Net_Migrants > 500000) %>% count(n)

## INDEX ##
pop_2020[1,]
pop_2020[,4]
pop_2020[2:3,3]
