document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("NotesApp")) {
    localStorage.setItem("NotesApp", JSON.stringify([]));
  }

  showNotes();

  document.getElementById('addNoteBtn').addEventListener('click', function () {
    document.querySelector('.newNoteDiv').classList.add('show');
  });

  document.querySelector('.closeBtn').addEventListener('click', function () {
    document.querySelector('.newNoteDiv').classList.remove('show');
    clearWarning();
  });

  document.querySelector("#saveBtn").addEventListener("click", () => {
    let title = document.querySelector("#addNoteTitle").value;
    let description = document.querySelector("#addNoteDescription").value;
    let id = document.querySelector("#saveBtn").getAttribute("data-id");

    if (title.length === 0 || title.length > 20) {
      document.querySelector("#titleWarn").style.display = "block";
      return;
    } else {
      clearWarning();
    }

    let data = localStorage.getItem("NotesApp");
    let notes = data ? JSON.parse(data) : [];


    if (id) {
      notes = notes.map(note => {
        if (note.id == id) {
          return { ...note, title, description, updated: new Date().toISOString() };
        }
        return note;
      });
      document.querySelector("#saveBtn").removeAttribute("data-id");
    } else {
      let note = { id: notes.length + 1, title, description, updated: new Date().toISOString() };
      notes.push(note);
    }


    localStorage.setItem("NotesApp", JSON.stringify(notes));

    document.querySelector("#addNoteTitle").value = '';
    document.querySelector("#addNoteDescription").value = '';

    showNotes();
    document.querySelector('.newNoteDiv').classList.remove('show');
  });
});

function clearWarning() {
  document.querySelector("#titleWarn").style.display = "none";
}


function showNotes() {
  let data = localStorage.getItem("NotesApp");
  let notes = data ? JSON.parse(data) : [];

  const notesContainer = document.getElementById("notes");
  notesContainer.innerHTML = '';

  if (!notes || notes.length === 0) {
    let p = document.createElement("p");
    p.innerText = "No Notes Available";
    notesContainer.appendChild(p);
    return;
  }

  notes.sort((a, b) => new Date(b.updated) - new Date(a.updated));

  notes.forEach(item => {
    let note = document.createElement("div");
    note.classList.add("note");
    note.setAttribute("data-id", item.id);

    let title = document.createElement("h1");
    title.classList.add("noteTitle");
    title.innerText = item.title;

    let description = document.createElement("p");
    description.classList.add("noteDescription");
    description.innerText = item.description;

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let editBtn = document.createElement("div");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = '<i class="ri-edit-box-fill"></i>';

    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.innerHTML = '<i class="ri-delete-bin-fill"></i>';

    editBtn.addEventListener("click", function () {
      document.querySelector(".newNoteDiv").classList.add("show");
      document.querySelector("#addNoteTitle").value = item.title;
      document.querySelector("#addNoteDescription").value = item.description;
      document.querySelector("#saveBtn").setAttribute("data-id", item.id); // Set ID for saving
    });

    deleteBtn.addEventListener("click", function () {
      notes = notes.filter(note => note.id !== item.id);
      localStorage.setItem("NotesApp", JSON.stringify(notes));
      showNotes();
    });

    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    note.appendChild(title);
    note.appendChild(description);
    note.appendChild(buttons);

    notesContainer.appendChild(note);
  });
}
