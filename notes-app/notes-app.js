const notes = [{
    title: 'My Next Trip',
    body: 'I would like to go to Australia'
}, {
    title: 'Homework',
    body: 'I need to finish the SWEN-220 project'
}];

const filters = {
    searchText: ''
};

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });
    // wipe old notes to replace with new filteredNotes
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach(function (note){
        const noteEl = document.createElement('p');
        noteEl.textContent = note.title;
        document.querySelector('#notes').appendChild(noteEl);
    });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function(e) {
    e.target.textContent = 'The button was clicked';
});

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value);
});

// document.querySelector('#name-form').addEventListener('submit', function(e){
//     // prevent refesh
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     // clear form
//     e.target.elements.firstName.value = '';
// });