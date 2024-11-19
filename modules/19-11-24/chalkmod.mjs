import ch from 'chalk'

console.log(ch.blue('this is blue text'))
console.log(ch.bgRed.bold('hello world'))
console.log(ch.blue('hai'+ch.redBright.underline('welcome')))

console.log(
    ch.red('R')+
    ch.yellow('A')+
    ch.green('I')+
    ch.cyan('N')+
    ch.blue('B')+
    ch.magenta('O')+
    ch.red('W')
);

