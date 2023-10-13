const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelector(".input-box");

function showNotes() {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
        notesContainer.innerHTML = savedNotes;
    }
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputbox).appendChild(img);
    inputbox.addEventListener("keyup", updateStorage);
})

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    // else if (e.target.tagName === "p") {
    //     notes = document.querySelector(".input-box");
    //     notes.forEach(nt => {
    //         nt.onkeyup = function () {
    //             updateStorage();
    //         }
    //     })
    // }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})


// const notesContainer = document.querySelector(".notes-container");
// const createBtn = document.querySelector(".btn");

// function showNotes() {
//     // Retrieve notes from local storage and set them in the notes container
//     const savedNotes = localStorage.getItem('notes');
//     if (savedNotes) {
//         notesContainer.innerHTML = savedNotes;
//     }
// }

// showNotes();

// function updateStorage() {
//     // Save the HTML content of the notes container to local storage
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// createBtn.addEventListener("click", () => {
//     // Create a new note paragraph and delete image
//     let inputbox = document.createElement("p");
//     let img = document.createElement("img");
//     inputbox.className = "input-box";
//     inputbox.setAttribute("contenteditable", "true");
//     img.src = "images/delete.png";
//     notesContainer.appendChild(inputbox);
//     inputbox.appendChild(img);

//     // Attach a keyup event listener to the new note
//     inputbox.addEventListener("keyup", updateStorage);
// });

// notesContainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "IMG") {
//         e.target.parentElement.remove();
//         updateStorage();
//     }
// });

// // This part is not needed because you're already updating storage when notes are edited.
// // It can be removed:
// // notesContainer.addEventListener("keyup", function () {
// //     updateStorage();
// // });

// document.addEventListener("keydown", event => {
//     if (event.key === "Enter") {
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// });



// function showNotes() {
//     const savedNotes = localStorage.getItem('notes');
//     if (savedNotes) {
//         notesContainer.innerHTML = savedNotes;
//     }
// }

// // ...

// createBtn.addEventListener("click", () => {
//     let inputbox = document.createElement("p");
//     let img = document.createElement("img");
//     inputbox.className = "input-box";
//     inputbox.setAttribute("contenteditable", "true");
//     img.src = "images/delete.png";
//     notesContainer.appendChild(inputbox).appendChild(img);
//     inputbox.addEventListener("keyup", updateStorage);
// })
