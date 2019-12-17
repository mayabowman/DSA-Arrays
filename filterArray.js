function filterArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i < 5) {
      arr.shift()
    }
    return arr
  }
}

filterArray([2, 4, 6, 8])