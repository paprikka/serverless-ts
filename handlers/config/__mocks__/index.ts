import * as fs from 'fs'
const envPath = __dirname + '/../../../' + '/dev.env.json'
const testConfig = fs.readFileSync(envPath, 'utf8')
export default JSON.parse(testConfig)