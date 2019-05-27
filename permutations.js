const permutations = (string) => {
  let output = [];

  if (string.length === 1) {
    output = [string];
  }

    for (let i = 0; i < string.length; i++) {
      const letter = string[i]
      // Slice from the start of the string up to the current index (left)
      // Concat first slice with the remaining letters after the index (right)

      const left = string.substring(0, i)
      const right = string.substring(i + 1)
      const permString = left + right

      console.log({letter, left, right, permString})
      // Recursively create permutations
      const single_permutation = permutations(permString)
      // console.log({single_permutation})
      for (let j = 0; j < single_permutation.length; j++) {
        const perm_letter = single_permutation[j]

        // Loop through permutations and concat each current letter (from outer scope)
          // with the current permutation set
        // push string combination to output

        output.push(letter + perm_letter)
      }
    }

  return output
}

console.log(permutations("abc"))
// console.log(permutations("abcde"))