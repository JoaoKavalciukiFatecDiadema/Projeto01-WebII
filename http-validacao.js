import fetch from "node-fetch"

async function statusCheck(urlArray){
    const arrayStatus  = await Promise.all(urlArray.map(async url => {
        const result = await fetch(url)
    }))
    return arrayStatus;
}

function arrayUrlGeneration(arrayLinks){
    return arrayLinks.map(linkObject => Object.values(linkObject).join())
}

async function urlValidation(arrayLinks){
    const links = arrayUrlGeneration(arrayLinks)
    const linkStatus = await statusCheck(links);
    return linkStatus
}

export default urlValidation
