const { ReadDataByPath, WrittenFile } = require('@cuties/fs')

new WrittenFile(
  './text2.txt',
  new ReadDataByPath('./text1.txt', 'utf8')
).call()
