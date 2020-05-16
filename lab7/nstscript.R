x <- c(0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0, 5.5, 6.0)
y <- c(0.4, 0.3, 1.0, 1.7, 2.1, 3.4, 4.1, 5.8, 7.7, 9.4, 11.4, 13.6)
plot (x, y, 
      main="Модель парной линейной регрессии")
cor(x,y)
fit <- lm(y~x)
fit
attributes(fit)
fit$coefficients[1]
fit$coefficients[2]
residuals(fit)
abline(fit, col="red")
summary(fit)