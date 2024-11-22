var url = require('url')
var adr = 'http://localhost:8000/index.htm?company=OneTeam&year=2024'

var q =url.parse(adr,true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)

var qdata = q.query
console.log(qdata.company)
console.log(q)

