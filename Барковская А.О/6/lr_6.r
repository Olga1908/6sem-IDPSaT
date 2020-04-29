#1
vect=seq(0,2*pi,0.01)

sinLine=sin(vect)
cosLine=cos(vect)

plot(vect,sinLine,type='l',xlab = "Продажи", ylab = "Процент прибыли", main = "Графики функций",col="yellow")

lines(vect,cosLine,col="orange")
legend(3, 1, legend=c("sin", "cos"),
       col=c("yellow", "orange"), lty=1:1, cex=0.8)
#2
diag(3, 3, 3)

#3
mas4 <- array(seq(11,15),dim=c(2,2,2,2))
mas4

#4
mas <- array(seq(16,22),dim=c(2,2,2,2))
mas
mas4 + 33
mas4 + mas
mas4 ^ 2
mas4 * mas

#5
A <- matrix(data=c(16,13,11,15), nrow=2, ncol=2, byrow=TRUE)
A
b <- matrix(data=c(5, 6), nrow=2, ncol=1, byrow=FALSE)
b
solve(A,b)

