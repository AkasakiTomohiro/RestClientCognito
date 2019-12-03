"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor() {
        this.help = false;
        this.port = 3000;
    }
}
exports.Command = Command;
function CommandCheck() {
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
exports.CommandCheck = CommandCheck;
