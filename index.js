class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replaceAll(/[^A-z0-9' -]|\^/g, '')
  }
  static titleize(string) {
    let array = string.split(' ')
    array[0] = array[0].charAt(0).toUpperCase() + array[0].slice(1)
    const dontCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (let i = 1; i < array.length; i++) {
      if (dontCap.includes(array[i])) {
        array[i] = array[i].charAt(0).toLowerCase() + array[i].slice(1)
      } else {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1)
      }
    }
    const newString = array.join(' ')
    return newString
  }
}