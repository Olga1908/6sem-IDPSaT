x <- c(10,12,15,17,18,19,20,21,22,24)
y <- c(6,6,7,7,8,8,9,10,11,11)
plot(x,y,main="Модель прямой парной регрессии")
cor(x,y)
urovn<-lm(y~x)
urovn
urovn$coefficients[1]
urovn$coefficients[2]
summary(urovn)
residuals(urovn)
abline(urovn)
