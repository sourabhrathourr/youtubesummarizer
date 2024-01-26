const OpenAI = require('openai')
const fs = require('fs').promises
const getSubtitles = require('youtube-captions-scraper').getSubtitles

const openai = new OpenAI()

async function main() {
  try {
    const examplePrompt = await fs.readFile('notes.txt', 'utf8')
    const summary = await fs.readFile('summary.txt', 'utf8')
    // const newPrompt = await fs.readFile('userPrompt.txt', 'utf8')

    let userPrompt = ''
    const captions = await getSubtitles({
      videoID: 'FExZvpVvYxA', // youtube video id
      lang: 'en', // default: `en`
    })

captions.forEach((caption) => {
  userPrompt += caption.text + ' '
})

const userPrompt1 = userPrompt.split(' ').slice(0, 3000).join(' ')
const userPrompt2 = userPrompt.split(' ').slice(3000, 6000).join(' ')
//Todo
//concatinate userPrompt1 and userPrompt2
//final summary

console.log('userPrompt1', userPrompt1)
console.log('userPrompt2', userPrompt2)

    const completion = await openai.chat.completions.create({
      messages: [
        { role: 'system', content: 'You are a helpful assistant that summarizes youtube video transcripts and provide meaningful notes.' },
        { role: 'user', content: `${examplePrompt}` },
        { role: 'assistant', content: `${summary}` },
        { role: 'user', content: `${userPrompt1}` },
      ],
      model: 'gpt-3.5-turbo',
      // model: 'gpt-4',
    })

    console.log('summary',completion.choices[0])
  } catch (err) {
    console.error(err)
  }
}

main()