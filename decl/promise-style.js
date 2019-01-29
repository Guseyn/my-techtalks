const fs = require('fs')

const read = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, result) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

const write = (path, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err, result) => {
      if (err != null) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })
}

read('./text1.txt').then((data) => {
  write('./text2.txt', data)
})
