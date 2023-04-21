import convertASTToString from './src/convertASTToString.js'
import astSamples from './src/ast.json' assert { type: 'json' }

const astPattern = `{
  “ast”: {
    “nodeType”: “element”,
    “tagName”: “div”,
    “attributes”: [ { “name”: “class”, “value”: “test” }],
    “children”: [
      “nodeType”: “text”,
      “value”: “Hello world!”
    ]
  }
 }`

const ast = document.querySelector('.ast')
const htmlString = document.querySelector('.html-string')
const btnConvert = document.querySelector('.convert-button')

ast.textContent = JSON.stringify(astSamples)

const checkAst = (e) => {
  e.preventDefault()
  const abstractSyntaxTree = ast.value
  if (abstractSyntaxTree === '') {
    return alert('You have to enter Abstract Syntax Tree')
  }

  try {
    const astJson = JSON.parse(abstractSyntaxTree)
    const convertedAst = convertASTToString(astJson.ast)
    htmlString.textContent = convertedAst
  } catch (error) {
    return alert(
      `Invalid format of Abstract Syntex Tree.\n The supported format is as below:\n${astPattern}`
    )
  }
}

btnConvert.onclick = checkAst

ast.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault()
    btnConvert.click()
  }
})
