var turn ="cross";
var cells= document.querySelectorAll(".cell")
cells.forEach(cell => {
    cell.addEventListener('click' ,() => {
        if(turn ==="cross"){
        cell.style.backgroundColor ="red";
        turn= "circle";
        }
        else{
            cell.style.backgroundColor ="blue";
            turn = "cross";
        }
    })
});