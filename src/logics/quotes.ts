export interface Quote {
  text: string
  author?: string
}

/**
 * Quotes shown on the homepage. One is picked at random on every page load.
 * Add or remove entries here freely.
 */
export const quotes: Quote[] = [
  {
    text: 'What are you afraid of losing, when nothing in the world actually belongs to you?',
    author: 'Marcus Aurelius',
  },
  {
    text: 'Big dreams require big sacrifices, never settle for average.',
  },
  {
    text: 'The impediment to action advances action. What stands in the way becomes the way.',
    author: 'Marcus Aurelius',
  },
]

export function randomQuote(): Quote {
  return quotes[Math.floor(Math.random() * quotes.length)] ?? quotes[0]
}
