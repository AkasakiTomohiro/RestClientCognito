"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Command {
    constructor() {
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
                const port = Number(process.argv[i + 1]);
                if (!isNaN(port) && Number.isInteger(port)) {
                    command.port = port;
                }
                else {
                    console.error("'-p' must be an integer");
                    process.exit(1);
                }
                break;
            case 'help':
            case '-h':
                process.exit(0);
                break;
        }
    }
    return command;
}
exports.CommandCheck = CommandCheck;
