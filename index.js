// Importações //
const readline = require('readline-sync')

function start(){
    content = {}

    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipidia search term: ')
    }

    console.log(content)
}

start()