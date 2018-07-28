console.log('Starting app.js')

// External
const fs = require('fs')
const yargs = require('yargs')

// Internal
const notes = require('./notes')
const util = require('./util')

const cmd = process.argv[2]
const argv = yargs.argv

switch (cmd) {
  case 'add':
    notes.addNote(argv.title, argv.body)
    break
  case 'get':
    notes.getNote(argv.title)
    break
  case 'list':
    notes.listAllNotes()
    break
  case 'update':
    notes.updateNote(argv.title, argv.body)
    break
  case 'remove':
    notes.removeNote(argv.title)
    break
  default:
    util.printHelperMenu()
}
