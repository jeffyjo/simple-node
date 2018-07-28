const helperMenu = [
  { command: "add", args: [ "title", "body" ] },
  { command: "get", args: [ "title" ] },
  { command: "list", args: [ ] },
  { command: "update", args: [ "title", "body" ] },
  { command: "remove", args: [ "title" ] },
]

let printHelperMenu = () => {
  console.log('\nCommand not recognized:')
  for (var menu of helperMenu) {
    printMenu(menu)
  }
}

let printMenu = (menu) => {
  const prefix = 'node app.js'
  let args = []
  for (arg of menu.args) {
    args.push(` --${arg} <${arg}>`)
  }

  console.log(`For ${menu.command} notes\t`, prefix, menu.command, args.toString() );
}

module.exports = {
  printHelperMenu
}
