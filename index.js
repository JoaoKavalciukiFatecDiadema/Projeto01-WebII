import chalk from "chalk";
import fs from "fs"

function linkExtraction(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    
    const resultArray = []
    let temp;

    while((temp = regex.exec(text)) != null){ 
        resultArray.push({
            [temp[1]] : [temp[2]]
        })
    }
    return resultArray.length === 0 ? "Não há links" : resultArray
}


function errorTreatment(error){
   throw new Error(chalk.red(error))
}

async function readFile(filePath){
    const encode = "utf-8";
    try {
        const text = await fs.promises.readFile(filePath, encode)
        return (linkExtraction(text));
    } catch (error) {
        errorTreatment(error)
    }
}

readFile("./arquivos/texto.md")

export default readFile;