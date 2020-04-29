x <- c(10,12,15,17,18,19,20,21,22,24)
y <- c(6,6,7,7,8,8,9,10,11,11)

plot(x,y,main="Модель прямой парной регрессии")
cor(x,y)

fit<-lm(y~x)
fit

fit$coefficients[1]
fit$coefficients[2]

residuals(fit)
abline(fit)

summary(fit)