const {Command, flags} = require('@oclif/command')
const jikanjs  = require('jikanjs');

let date = new Date();
let weekdays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']

let day = weekdays[date.getDay()];

class SukejuruCommand extends Command {
  async run() {
    console.log("»»————-　sukejuru　————-««");
    console.log("schedule for " + day + ":");
    this.schedule = jikanjs.loadSchedule(day).then(
      (response) => {
        response[day].forEach(element => {
          console.log(`→ ${element.title} ☆${element.score}`);
        });
      }
    ).catch((err) => {
      console.error(err);
    });
  }
}

SukejuruCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
}

module.exports = SukejuruCommand
