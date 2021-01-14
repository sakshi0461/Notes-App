const yargs = require('yargs');
const note = require('./notes');

yargs.command({
   command:'add',
   describe: 'Adding a new note',
   builder:{
         title:{
             describe:'inside title describe',
             description:true,
             type: 'string', 
         },
         body:{
             describe:'inside body describe',
             description:true,
             type:'string'
         }
   },
   handler:function(argv){
       note.getnotes();
       note.addnote(argv.title, argv.body);
   }
});

yargs.command({
    command:'remove',
    describe:'Removing a node',
    builder:{
        title:{
            describe:'remvoein',
            description:true,
            type:'string'
        },
        body:{
            describe:'booodddyy',
            type:'string'
        }
    },
    handler:function(argv){
        note.removing();
        note.remove(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'Display list of all notes',
    handler:function(){
         note.list();
    }
});

yargs.command({
    command:'read',
    describe:'Reading a particular note',
    builder:{
        title:{
            describe:'title',
            description:true,
            type:'string'
        }
    },
    handler:function(argv){
        note.read(argv.title);
    }
});


yargs.argv;