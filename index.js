let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let name = document.getElementById('name').value;
    let date = document.getElementById("date-completed").value;
    let difficulty = document.getElementById('dropdown').value;
    if (name !== '' && date && difficulty){
        let table = document.getElementById('list');
        let row = table.insertRow(1);
        row.setAttribute('id', `item-${id}`);
        row.insertCell(0).innerHTML = name
        row.insertCell(1).innerHTML = date
        row.insertCell(2).innerHTML = difficulty
    } else {
        alert("Please make sure all values are entered.")
    }
    
});





