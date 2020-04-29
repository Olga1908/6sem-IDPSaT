year <- c(2012, 2013, 2014, 2015)
profit <- c(450, 350, 300, 356)

plot(year, profit, xlab = "Год", ylab = "Продажи" ,main= "Модель отрицательной линейной регрессии" )
cor(year, profit)

fit<-lm(profit~year)
fit

fit$coefficients[1]
fit$coefficients[2]

residuals(fit)
abline(fit)

summary(fit)

