const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const { writeFileSync } = require('fs')

const argv = require('yargs-parser')(process.argv.slice(2))

console.log(`
  To set up this project you need to provide your Aamu API url
  and the Aamu API key.

  You can find all the needed information in your Database settings.

  Ready? Let's do it! 🎉
`)

const questions = [
  {
    name: 'key',
    when: !argv.key && !process.env.AAMU_API_KEY,
    message: 'Your API key'
  },
]

inquirer
  .prompt(questions)
  .then(({ key }) => {
    const { AAMU_API_KEY } = process.env

    // env vars are given precedence followed by args provided to the setup
    // followed by input given to prompts displayed by the setup script
    key = AAMU_API_KEY || argv.key || key

    console.log('Writing config file...')
    const configFiles = [`.env`]
      .map(file => path.join(__dirname, '..', file))

    const fileContents = [
      `# All environment variables will be sourced`,
      `# and made available to gatsby-config.js, gatsby-node.js, etc.`,
      `# Do NOT commit this file to source control`,
      `AAMU_API_KEY='${key}'`
    ].join('\n') + '\n'

    configFiles.forEach(file => {
      writeFileSync(file, fileContents, 'utf8')
      console.log(`Config file ${chalk.yellow(file)} written`)
    })
    return { key }
  })
  .then((_, error) => {
    console.log(
      `All set! You can now run ${chalk.yellow(
        'yarn run dev'
      )} to see it in action.`
    )
  })
  .catch(error => console.error(error))
