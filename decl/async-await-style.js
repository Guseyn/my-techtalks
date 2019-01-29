const fsPromises = require('fs').promises

const copyContent = async (file1, file2) => {
  const data = await fsPromises.readFile(file1, 'utf8')
  return await fsPromises.writeFile(file2, data)
}

const readFile = async (file) => {
  return fsPromises.readFile(await file, 'utf8');
}

const writeFile = async (file, content) => {
  return fsPromises.writeFile(await file, await content)
}

writeFile('./text2.txt', readFile('./text.txt'))
.catch((err) => {
  console.log('err')
})

const handleError = async () => {
  try {
    await writeFile('./text2.txt', readFile('./text.txt'))
  } catch (err) {
    console.log('err')
  }
}

//handleError()
//copyContent('./text1.txt', './text2.txt')
