const fs = require('fs')

const addNotes=(title,body)=>{
    let notes=[]
    let note={
    	title,
    	body
    }

     try{
     	let noteStr = fs.readFileSync('notes.json')
    	notes=JSON.parse(noteStr)
     }catch(e){}
    
    let filtredNotes = notes.filter(note=>note.title===title)
    if(filtredNotes.length==0){
    	notes.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}else{
	console.log('note exist')
}
    
}

const listNotes=()=>{

            let noteList=JSON.parse(fs.readFileSync("note.json"))
            console.log(`Printing `+noteList.length+` note(s)`)
            for(let i=0;i<noteList.length;i++)
            {
            console.log("--")
          console.log("Title:",noteList[i].title)
          console.log("Body:",noteList[i].body)
            }
	console.log('LIST NOTES')
}

const removeNotes=(title)=>{
    let remove=require('./remove.js')
let noteList=JSON.parse(fs.readFileSync("note.json"))
remove(process.argv[4],noteList)
	console.log('REMOVE NOTES')
}

const readNotes=(title)=>{
    let read=require('./read.js')
let noteList=JSON.parse(fs.readFileSync("note.json"))
read(process.argv[4],noteList)
	console.log('READ NOTES')
}

module.exports ={
	addNotes,
	listNotes,
	removeNotes,
	readNotes


}


