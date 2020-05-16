x <- seq(-pi,pi,0.1)

plot(x, sin(x),
     main="График функции sin(x)",
     ylab="sin(x)",
     type="l",
     col="red")

legend("topleft",
       c("sin(x)"),
       fill=c("red")
)

diag(21,5,5)

ok <- array(seq(1,10,length.out = 16), dim = c(2,2,2,2))
ok

aperm(ok,c(4,3,2,1),resize = TRUE)

ok2 <- array(seq(20,30,length.out = 16), dim = c(2,2,2,2))
ok2

ok + 21

ok + ok2

ok^3

ok * ok2

A <- matrix(c(1,0,-1,0,33,2,1,2,10), byrow = TRUE, nrow = 3)
A

X = c(5,-2,5)
dim(X) <- c(3,1)

b <- solve(A,X)
b
