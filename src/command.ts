export class Command {
  public port: number = 3000;
}

export function CommandCheck(): Command {
  const command = new Command();
  const pack = require('../package.json');
  for (let i = 2; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case '-p':
      case '--port':
        const port = Number(process.argv[i + 1]);
        if (!isNaN(port) && Number.isInteger(port)) {
          command.port = port;
        } else {
          console.error("'-p' must be an integer");
          process.exit(1);
        }
        break;
      case 'help':
      case '-h':
        console.log(`Version ${pack.version}`);
        console.log(`Syntax:  \t rcc [option]`);
        console.log(`Examples:\t rcc`);
        console.log(`         \t rcc -p 4000`);
        console.log(`Options:`);
        console.log(` -h, --help \t\t  Print this message.`);
        console.log(` -v, --version \t\t  Print the rcc version.`);
        console.log(` -p, --port \t\t  Http Server Listen Port.`);
        process.exit(0);
        break;
      case '-v':
      case '--version':
        console.log(`Version ${pack.version}`);
        process.exit(0);
        break;
    }
  }
  return command;
}
