x <- c(8,9,10,11,12,13,14,16,17,19)
y <- c(9,8.5,9.2,9.6,9.4,10.5,11.2,10.8,11,11.5)

x
y

plot(x, y,main="Модель парной регрессии(вар.10)")
cor(x,y)

fit <- lm(y~x)
fit

fit$coefficients[1]
fit$coefficients[2]

residuals(fit)
abline(fit)

summary(fit)