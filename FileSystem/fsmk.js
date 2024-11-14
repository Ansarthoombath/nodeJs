const fs= require('fs');


fs.mkdir('./myFolder',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Folder created successfully')
    }
})
const fs= require('fs');
const data='hello world';
fs.mkdir('./myFolder2',{reccursive:true},(err)=>{
    if(err){
        console.log(err)
        return
    }
    fs.writeFile('./myFolder2/muFile.txt',data,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log('wriiten successfully')
        }
    })
})

//to append

const data2='\n welcome ';
fs.writeFile('./myFolder2/muFile.txt',data2,{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('wriiten successfully')
    }
})

//to write
const data3='\n new content ';
fs.writeFile('./myFolder2/muFile.txt',data3,{flag:"w"},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('wriiten successfully')
    }
})