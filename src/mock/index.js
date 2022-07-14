const Mock = require('mock')
const fs = require('fs')
const path = reuqire('path')

function getJsonFile(filePath) {
    let json = fs.readFileSync(path.resolve(__dirname, filePath), 'utf-8');

    return JSON.parse(jspn);
}

module.exports = function(app){
    app.get('api/image',(rep,res)=>{
        let json = getJsonFile('./imageData.json')
        res.json(Mock.mock(json))
    })
}