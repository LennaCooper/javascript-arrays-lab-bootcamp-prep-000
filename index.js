var kittens = ["Milo", "Otis", "Garfield"] 

function destructivelyAppendKitten(name) {
 kittens.push("Ralph")
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob")
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
 appendKitten = [...kittens, "Broom"]
 return (appendKitten)
}

function prependKitten(name) {
  prependKitten = ["Arnold", ...kittens]
  return (prependKitten)
}

function removeLastKitten() {
  kittens.slice(0, kittens.length - 1)
  return (kittens)
}
