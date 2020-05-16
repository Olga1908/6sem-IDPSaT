x <- seq(-pi,pi,0.1)
plot (x, cos(x),
main="График функции cos(x)",
type="l",
col="purple")
legend("topright",
       c("cos(x)"),
       fill=c("purple"))

diag(23,4,4)

nst <- array(seq(1,10), dim=c(2,2,2,2))
nst

aperm(nst, c(4,3,2,1), resize = TRUE)

nst <- array(seq(1,10), dim=c(2,2,2,2))
nst + 23


nst <- array(seq(1,10), dim=c(2,2,2,2))
nst2 <- array(seq(2,11), dim=c(2,2,2,2))
nst+nst2

nst <- array(seq(1,10), dim=c(2,2,2,2))
nst^2


nst <- array(seq(1,10), dim=c(2,2,2,2))
nst2 <- array(seq(2,11), dim=c(2,2,2,2))
nst*nst2

nst <- matrix(seq(1, 16), nrow = 4, ncol = 4)
nst
t(nst)

A <- matrix(c(1,2,5,-6,9,12,0,8,0), nrow = 3, ncol = 3)
A
X = c(5, -2, 5)
dim(X) <-c(3,1)
b <- solve(A,X)
b
