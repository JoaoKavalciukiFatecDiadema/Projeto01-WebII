import chalk from "chalk";
import readFile from "./index";
import urlValidation from "./http-validacao";
const path = process.argv

async function processText(filePath){
    const result = await readFile(filePath[2])

    if(path[3] === 'validar'){
        console.log(chalk.yellow("Lista de validados"), await urlValidation(result));
    } else {
        console.log(chalk.yellow("Lista de links"), result);
    }
}

processText(path)