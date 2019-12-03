import { isNumber } from 'util';

export class Command {
  public help: boolean = false;
  public port: number = 3000;
}

export function CommandCheck(): Command {
  const command = new Command();
  for (let i = 2; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case '-p':
      case '--port':
        command.port = Number(process.argv[i + 1]);
        break;

      case 'help':
      case '-h':
        command.help = true;
        break;
    }
  }
  return command;
}
