let robot = require('robotjs')

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i)
}

function writeWord(word) {
  for (const c of word) {
    if (isLetter(c) && c.toUpperCase() === c) {
      robot.keyTap(c, 'shift')
    } else {
      robot.keyTap(c)
    }
  }
}

function formattedDate(d = new Date) {
  let month = String(d.getMonth() + 1)
  let day = String(d.getDate())
  const year = String(d.getFullYear())

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return `${day}.${month}.${year}`
}

function tab() {
  robot.keyTap('tab')
}

let daysToAdd = Number(process.argv[2])
let reasons = process.argv[3]
let input = process.argv.slice(4)

async function init() {
  await sleep(1000)
  console.log(robot.getMousePos())

  robot.moveMouse(822, 392)
  robot.mouseToggle('down')
  robot.mouseToggle('up')

  // robot.setKeyboardDelay(50)

  for (word of input) {
    writeWord(word)
    tab()
  }

  let date = new Date()
  date.setDate(date.getDate() + daysToAdd)
  writeWord(formattedDate(date))
  tab()

  for (var i = 0, len = 9; i < len; i++) {
    if (reasons.indexOf(String(i+1)) !== -1) {
      writeWord(' ')
    }
    tab()
  }

  await sleep(1000)

  robot.moveMouse(822, 392)
  robot.mouseToggle('down')
  robot.mouseToggle('up')

  robot.keyTap('p', 'control')

  await sleep(1000)

  robot.keyTap('enter')

  await sleep(1000)
}

init()
