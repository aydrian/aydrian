#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
var chalk = require('chalk')
var boxen = require('boxen')

// Define options for Boxen
let options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}
// Text + chalk definitions
let data = {
  name: chalk.white('Aydrian Howard /'),
  handle: chalk.cyan('aydrian'),
  work: chalk.white('Developer Advocate at MongoDB'),
  twitter: chalk.cyan('https://twitter.com/aydrianj'),
  github: chalk.cyan('https://github.com/aydrian'),
  linkedin: chalk.cyan('https://linkedin.com/in/aydrian'),
  web: chalk.cyan('http://itsaydrian.com'),
  twitch: chalk.cyan('https://twitch.tv/itsaydrian'),
  instagram: chalk.cyan('https://instagram.com/itsaydrian'),
  npx: chalk.white('npx aydrian'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  labelWeb: chalk.white.bold('       Web:'),
  labelTwitch: chalk.white.bold('    Twitch:'),
  labelInstagram: chalk.white.bold(' Instagram:'),
  labelCard: chalk.white.bold('      Card:')
}

// Actual strings we're going to output
var newline = '\n'
var heading = `${data.name} ${data.handle}`
var working = `${data.labelWork}  ${data.work}`
var twittering = `${data.labelTwitter}  ${data.twitter}`
var githubing = `${data.labelGitHub}  ${data.github}`
var linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
var webing = `${data.labelWeb}  ${data.web}`
var twitching = `${data.labelTwitch}  ${data.twitch}`
var instagraming = `${data.labelInstagram}  ${data.instagram}`
var carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
let output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  instagraming +
  newline +
  twitching +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))
