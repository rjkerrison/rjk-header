const rootUrl = 'https://rjkerrison.co.uk'

const links = [
  ['/', 'rjkerrison.co.uk'],
  ['/textbook', 'Textbook'],
  ['/ticker-board', 'Ticker Board'],
].map(([url, text]) => [`${rootUrl}${url}`, text])

export default links
