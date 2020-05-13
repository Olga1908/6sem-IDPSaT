a=seq(0,2*pi,0.01)
sinLine=tan(a)
cosLine=cat(a)
plot(a,sinLine,type='l',xlab = "Время", ylab = "Качество", main = "Графики функций",col="red")

lines(a,cosLine,col="black")
legend(5.18, 1.08, legend=c("sin", "cos"), col=c("red", "black"), lty=1:1, cex=0.8)

diag(6, 6, 6)
massiv <- array(seq(1,10),dim=c(2,2,2,2))
massiv
massiv1 <- array(seq(1,10),dim=c(2,2,2,2))
arr + 123
arr + massiv1
arr ^ 321
arr * massiv1


A <- matrix(data=c(1, 2, 3, 2, 5, 9, 5, 7, 8), nrow=3, ncol=3, byrow=TRUE)    
b <- matrix(data=c(20, 100, 200), nrow=3, ncol=1, byrow=FALSE)
solve(A,b)

