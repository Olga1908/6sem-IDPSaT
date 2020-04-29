graph=seq(0.5*pi,0.01)
line=sin(graph)
plot(graph,line,type='l',xlab = "Продажи", ylab = "Время", main = "Графики функций", col="red")
legend(1, 1, legend=c("sin"),col=c("red"), lty=1:1, cex=0.8)

diag(1, 1, 1, 1)

arr <- array(seq(1,5),dim=c(3,3,3,3))
arr

arr + 999
arr ^ 2
arr2 <- array(seq(1,5),dim=c(3,3,3,3))
arr2
arr + arr2
arr * arr2



A <- matrix(data=c(1,2,3,4), nrow=2, ncol=2, byrow=TRUE)    
b <- matrix(data=c(10, 20), nrow=2, ncol=1, byrow=FALSE)
solve(A,b)
