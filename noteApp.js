showNotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addtxt.value = ""
    showNotes();
})
function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
    html += ` 
    <div class="card mx-2 my-2 bg-warning" style="width: 22rem;">
    <div class="card-body ">
        <h5 class="card-title">Notes ${index+1}</h5>
        <p class="card-text text-secondary">${element} </p>
        <button id=${index} onclick="deletenote(this.id)" class="btn btn-danger">Delete Note</button>
    </div>
    </div>`;
});
let notesElm=document.getElementById("notes");
if (notesObj.length!=0){
    notesElm.innerHTML=html;
}
else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}
function deletenote(index){

    console.log("i am deleting",index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes();
}