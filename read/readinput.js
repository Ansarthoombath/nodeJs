const read=require('readline-sync');
const n1=read.question('Enter first letter: ');
const n2=Number(read.question('Enter second letter: '))
console.log('First letter:',n1)
console.log('Second letter:',n2)

//asynchronous

const readline=require('readline');
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
read.question("Enter ur Name: ",(name)=>{
    console.log(`Helllo, ${name}!`)
    read.close()
})

const readline=require('readline');
const read= readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
read.question("Enter temperature: ",(temp)=>{
    console.log(`temp in c, ${(temp-32)*(5/9)}!`)
    read.close()
})



