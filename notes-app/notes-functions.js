// Read existing notes (if any) from localStorage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes');
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
};

// Generate the DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('p');
    if (note.title.length > 0) {
        noteEl.textContent = note.title;
    } else {
        noteEl.textContent = 'Untitled Note';
    }
    return noteEl;
};

// Render application notes
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    // wipe old notes to replace with new filteredNotes
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note){
        const noteEl = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteEl);
    });
};
