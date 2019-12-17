function maxSum(arr) {
  const result = []
  arr.reduce((acc, curr) => {
    result.push(acc + curr)
    return acc + curr
  })
  result.sort((a, b) => a < b)
  return result[0]
}

maxSum([4, 6, -3, 5, 2, 1])