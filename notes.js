const fs = require('fs');
const chalk = require('chalk');

const savenotes = function(notes){
    const data = JSON.stringify(notes);
    fs.writeFileSync('note.json' , data);
 };
 
 const loadnote = function(){
   try{
      const databuffer = fs.readFileSync('note.json');
      const dataJSON = databuffer.toString();
      return JSON.parse(dataJSON);
   }catch(e){
       return [];
   }
 };


const notes = loadnote();


//Adding a new Note
const getnotes = function(){
    console.log(chalk.yellow('Getting your notes'));
}
const addnote = function(title,body){
  const dupli = notes.filter(ele => {
     return ele.title === title;
  });

  if(dupli.length == 0){
  notes.push({
      title:title,
      body:body
  });
    savenotes(notes);
    console.log(chalk.green('Successfull!!'));
  }else{
      console.log(chalk.magentaBright('Note title value is already taken!!!'));
  }

};

//Removing a Note

const removing = function(){
    console.log(chalk.yellow('Started Removing node'));
};

const remove = function(title){
  const notestokeep = notes.filter(ele => {
      return ele.title !== title;
  });
  
  if(notes.length === notestokeep.length){
    console.log(chalk.magentaBright("No Note removed!!"));
  }else{
    savenotes(notestokeep);
    console.log(chalk.red('Removed Successfull!!!'));
  }
};

//Displaying all notes
const list = function(){
    notes.forEach(e => {
        console.log(chalk.grey(e.title));
    });
}

//Reading a note
const read = function(title){
    const user = notes.find(u => u.title == title);

    if(!user){
        console.log(chalk.bgHex(user.body));
    }
    else{
        console.log(chalk.bgRed('Note not found'));
    }
}

module.exports = {
    getnotes:getnotes,
    addnote:addnote,
    remove:remove,
    removing:removing,
    list:list,
    read:read,
};
