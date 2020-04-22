
vector1 <- seq(1,9)

result <- array(1:16, dim=c(2, 2, 2, 2))

result

result + 1

result + array(16:1, dim=c(2, 2, 2, 2))

emptyVector <- array(0, dim=c(16))

result * array(emptyVector, dim=c(2, 2, 2, 2))

result ^ 2

result[,,1,1] <- t(result[,,1,1])
result[,,2,1] <- t(result[,,2,1])
result[,,1,2] <- t(result[,,1,2])
result[,,2,2] <- t(result[,,2,2])

result
