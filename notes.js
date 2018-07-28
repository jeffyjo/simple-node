console.log('Starting notes.js')

const fs = require('fs');
const db = './notes.json'

// Create
let addNote = (title, body) => {
  let aNotes = getAllNotes()

  var note = {
    title: title,
    body: body
  }

  aNotes.push(note)
  setAllNotes(aNotes)
}

// Read
let getNote = (title) => {
  let aNotes = getAllNotes()

  for (note of aNotes) {
    if(note.title == title) {
      console.log('\nGetting note:');
      printNote(note)
      return
    }
  }
  printCustom()
}

// Read All
let listAllNotes = () => {
  console.log('\nList all notes:');
  let aNotes = getAllNotes()

  for (note of aNotes) {
    printNote(note)
  }
}

// Update
let updateNote = (title, body) => {
  let aNotes = getAllNotes()

  for (note of aNotes) {
    if(note.title == title) {
      note.body = body
      setAllNotes(aNotes)
      printCustom('Note udpated')
      return
    }
  }

  printCustom()
}

// Delete
let removeNote = (title) => {
  let aNotes = getAllNotes()

  for (var i = 0; i < aNotes.length; i++) {
    if(aNotes[i].title == title) {
        aNotes.splice(i, 1)
        setAllNotes(aNotes)
        printCustom('Note removed')
        return
    }
  }
}

/* Helper functions for crud */
let getAllNotes = () => {
  // Get file as string
  let rawFile = fs.readFileSync(db)

  // Convert fil to object
  let aNotes = JSON.parse(rawFile)

  // Return array
  return aNotes
}

let setAllNotes = (aNotes) => {
  let sNotes = JSON.stringify(aNotes)
  fs.writeFileSync(db, sNotes)
}

let printNote = (note) => {
  console.log(`${note.title}:\t${note.body}`);
}

let printCustom = (message = 'No Matching note') => {
  console.log(message);
}

module.exports = {
  addNote,
  getNote,
  listAllNotes,
  updateNote,
  removeNote
}
