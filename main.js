let infoPeople = [
    {
        foto: './pic3.jpg',
        name: 'Javlonbek Abdurasulov',
        groups: 1,
        number: +1243232434
    }
];
let foto = document.selectForm.foto;
let name = document.selectForm.name;
let groups = document.selectForm.groups;
let number = document.selectForm.nomer;


//  add new info in array
function addPerson() {

    if(foto.value != '' && name.value != '' && groups.value != '' && number.value != '' ){
        infoPeople.push({
            foto: piclocation,
            name: name.value,
            groups: groups.value,
            number: number.value
        })    
    }
    
    console.log(infoPeople);
    renderInfo(infoPeople)
    
}

// render on sreen infos
function renderInfo(data) {

    let list = document.getElementById('list');
    list.innerText = '';
    let count = 0;
    data.map(obj => {
        let tr = document.createElement('tr');
        let id = document.createElement('td');
        let rasm = document.createElement('td');
        let rasm_rasm = document.createElement('img');
        rasm_rasm.style.width = '50px';
        rasm_rasm.style.height = '50px';
        rasm_rasm.style.borderRadius = '50%'
        let ism = document.createElement('td');
        let guruh = document.createElement('td');
        let nomer = document.createElement('td');
        let actions = document.createElement('td');
        
        let deleter = document.createElement('i');
        deleter.classList.add('bi', 'bi-trash3-fill');
        deleter.setAttribute('onclick', `deletePerson(${count})`)
        
        let edit = document.createElement('i');
        edit.classList.add('bi', 'bi-pencil-square', 'mx-md-2', 'my-2');
        edit.setAttribute('onclick', `editPerson(${count})`);
        edit.setAttribute('data-bs-toggle',`modal`);
        edit.setAttribute('data-bs-target', '#exampleModal')
        
        id.innerText = count+1;
        rasm_rasm.src = obj.foto;
        ism.innerText = obj.name;
        guruh.innerText = obj.groups;
        nomer.innerText = obj.number;
        
        tr.appendChild(actions);
        tr.appendChild(id);
        rasm.appendChild(rasm_rasm);
        tr.appendChild(rasm);
        tr.appendChild(ism);
        tr.appendChild(guruh);
        tr.appendChild(nomer);
        actions.appendChild(deleter);
        actions.appendChild(edit);
        list.appendChild(tr);
        
        count++;
    })

}
renderInfo(infoPeople)

// take picture location
let piclocation = "";
function takePic(val) {
        val.src = window.URL.createObjectURL(val.files[0])
        piclocation = val.src
        console.log(piclocation);
}


//delete info
function deletePerson(val) {

    infoPeople.splice(val, 1);
    renderInfo(infoPeople)
}

let rasm = document.querySelector('.foto');
let ism = document.querySelector('.name');
let guruh = document.querySelector('.groups');
let raqam = document.querySelector('.number');

//edit info
function editPerson(val) {
 
    currentIndex = val;
    rasm = piclocation;
    ism.value = infoPeople[val].name;
    guruh.value = infoPeople[val].groups;
    raqam.value = infoPeople[val].number;
    
    console.log(val + rasm.src + ism + guruh + raqam);
 
}

// save edited infos
let currentIndex
function saveEditChanges() {

    
    infoPeople[currentIndex].foto = piclocation;
    infoPeople[currentIndex].name = ism.value;
     infoPeople[currentIndex].groups = guruh.value;
     infoPeople[currentIndex].number = raqam.value;

     renderInfo(infoPeople);
    
}
