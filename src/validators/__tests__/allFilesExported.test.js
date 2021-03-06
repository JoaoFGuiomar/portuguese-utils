import fs from 'fs'
import * as validators from 'validators'

const parent = `${__dirname}/../`
const ignored = ['__tests__', 'index.js']

test('all functions are exported in the validators lib', () => {
  fs.readdir(parent, (err, files) => {
    const filtered = files
      .filter(file => ignored.indexOf(file) === -1)
      .map(file => file.replace('.js', ''))
    expect(Object.keys(validators).sort()).toEqual(filtered.sort())
  })
})
