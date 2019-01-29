const fs = require('fs')

fs.readFile('./text1.txt', 'utf8', (err, result) => {
  if (err != null) {
    throw err
  }
 
  fs.writeFile('./text2.txt', result, (err) => {
    if (err != null) {
      throw err
    }
  })
})
