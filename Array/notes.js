const notes = [{
    title : 'My next trip',
    body: 'I want to go to spin'
},{
    title: 'Habbints to work on',
    body:'Ciao ciao bambina'

}, {
    title: 'Habbints to work on',
body:'Get a new seat'
}];

/* notes.push('Note 1', 'Note 2', 'Note 3');
notes.pop();
notes.shift(); //remove first note,
notes.unshift(); */
//notes.splice(1, 1, ' nuovo elemento posto di');
/* console.log(notes);

notes[1];
console.log(notes[1].title);
notes.indexOf('Note 2'); //return the position of the note in the notes array, if -1 the item is not found

notes.forEach((note, i) => {
    console.log('Ecco: ');
    console.log(note);
    i++;

    console.log(i);
}); */


/* const findNote = function (notes, noteTitle){
    const index = notes.findIndex(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
    return notes[index];
} */

const findNote = function (notes, noteTitle){
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase();
    });
}

const note = findNote(notes, 'Habbints to work on')
console.log(note);

