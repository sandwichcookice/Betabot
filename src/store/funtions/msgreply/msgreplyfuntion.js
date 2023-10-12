const fs = require('fs');
const path = require('path');

export function replyfuntion(file1,file2){

    const filePath = path.join(__dirname, file1, file2)
    const replyramdom = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim())
    const randomIndex = Math.floor(Math.random() * replyramdom.length)
    const response = replyramdom[randomIndex]
    return response;

}

