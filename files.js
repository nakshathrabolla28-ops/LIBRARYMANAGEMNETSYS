function addBook() {
    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let dept=document.getElementById("dept").value;
    let author=document.getElementById("author").value;
    let book=document.getElementById("book").value;
}
if(name=="" || roll=="" || dept=="" || author=="" || book==""){
    alert("Please fill all the fields");
    return false;
}else{
    alert("Book added successfully");
}
function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("author").value = "";
    document.getElementById("book").value = "";
}