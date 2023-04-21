function convertASTToString(astObject) {
  const noClosingTags = [
    'area',
    'base',
    'br',
    'col',
    'command',
    'embed',
    'hr',
    'img',
    'input',
    'keygen',
    'link',
    'meta',
    'param',
    'source',
    'track',
    'wbr',
  ]

  let childrenList = ''
  let attributesList = ''
  const { tagName, attributes, children } = astObject

  if (astObject.nodeType === 'text') {
    return astObject.value
  }

  if (attributes) {
    attributesList = attributes
      .map(({ name, value }) => `${name}="${value}"`)
      .join(' ')
  }

  if (children) {
    childrenList = children.map((child) => convertASTToString(child)).join('')
  }

  if (noClosingTags.includes(tagName)) {
    return `<${tagName} ${attributesList}>`
  }
  return `<${tagName} ${attributesList}>${childrenList}</${tagName}>`
}

export default convertASTToString
