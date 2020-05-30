// Importações //
const readline = require('readline-sync')
const robots = {
    text: require('./robots/text.js')
}

async function start(){
    const content = {}

    content.search = {"articleName": `${askAndReturnSearchTerm()}`, "lang": `${askAndReturnLanguage()}`}
    content.prefix = askAndReturnPrefix()

    await robots.text(content)

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipidia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        // Readline organiza os prefixos, porem so seleciona a posição no array //
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    function askAndReturnLanguage(){
        const languages = ["en", "pt"]
        const selectedLanguageIndex = readline.keyInSelect(languages, 'Choose one language: ')
        const selectedLanguageText = languages[selectedLanguageIndex]
        
        return selectedLanguageText
    }

    console.log(content)
}

start()