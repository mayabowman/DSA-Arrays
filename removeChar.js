function removeChar(string, vowels) {
  const vowelsArr = []
  const stringArr = []

  for (let i=0; i < vowels.length; i++) {
    vowelsArr.push(vowels.charAt(i))
  }

  for (let i = 0; i < string.length; i++) {
    stringArr.push(string.charAt(i))
  }

  vowelsArr.forEach(letter => {
    stringArr.forEach((strLtr, index) => {
      if (letter === strLtr) {
        stringArr.splice(index, 1)
      }
    })
  })

  const concatString = stringArr.reduce((acc, curr) => {
    return acc + curr
  })

  return concatString
}

removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')