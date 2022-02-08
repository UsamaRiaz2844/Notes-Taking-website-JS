// console.log("connected")
// let add = document.getElementById('addnotes'); 
// let text = document.getElementById('addtext'); 


// add.addEventListener('click', function(e){
//     let notes = localStorage.getItem('notes'); 
//     if(notes == null){
//         notesarray = [];
//         notesarray.push(text.value);
//     localStorage.setItem('notes', JSON.stringify(notesarray))

//     }else{
//         notesarray = JSON.parse(notes)
//         notesarray.push(text.value);
//     localStorage.setItem('notes', JSON.stringify(notesarray))
//     }
    
// })


// id="addtext" 
//                 id="addnotes"


let addtxt = document.getElementById('addtext');
let addnots = document.getElementById('addnotes'); 
shownotes();

addnots.addEventListener('click', function(e){
    let notes = localStorage.getItem('notesobj'); 
    console.log(addtxt.value);
    if(notes == null){
        let notesarray = [];
        notesarray.push(addtxt.value);
        localStorage.setItem('notesobj' , JSON.stringify(notesarray));
    }else{
        let notesarraystr = notes; 
        notesarray = JSON.parse(notesarraystr)
        notesarray.push(addtxt.value);
        localStorage.setItem('notesobj' , JSON.stringify(notesarray));

    }
     addtxt.value = '';

     shownotes();
})


function shownotes(){
    let notes = localStorage.getItem('notesobj');
    if(notes == null){
        notesarray = [];
        
    }else{
        let notesarraystr = notes; 
        notesarray = JSON.parse(notesarraystr)
       
    }
    let html = "";
    notesarray.forEach((element, index) => {
        html += `
        <div class="noteCard mx-2 my-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card Number ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button class="btn btn-primary btn-sm" onclick="deleted(${index})">Delete</button>

        </div>
      </div>
        `
    });
    notesdiv = document.getElementById('notes')
    if(notesarray.length != 0 ){
        notesdiv.innerHTML = html;
    }else{
        notesdiv.innerHTML = " You Have Nothing To Show Here. Plz Add A Note Here "
    }
}

function deleted (item){
    notes = localStorage.getItem('notesobj');
    notesarray = JSON.parse(notes);
    notesarray.splice(item , 1);
    localStorage.setItem('notesobj' , JSON.stringify(notesarray));
    shownotes();
    


}


// let search = document.getElementById('search');
// search.addEventListener('input' , function(){
//     let inputval = search.value.toLowerCase();
//     console.log('inout event fired', inputval);
//     let noteCards = document.getElementsByClassName("noteCard");
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
        
//         if(cardTxt.includes(inputval)) {
//             element.style.display = "block" ; 

//         }else{
//             element.style.display = "none" ; 
           
//         }

//     })
// })



let search = document.getElementById('search'); 

search.addEventListener('input', function(){
    let inputval = search.value.toLowerCase();
    console.log(inputval);
    let cardTxt = document.getElementsByClassName('noteCard'); 
     
    Array.from(cardTxt).forEach(function(element){
        let txtt = element.getElementsByTagName('p')[0].innerText;
        if(txtt.includes(inputval)){
            element.style.display = "block "
        }else{
            element.style.display = "none"
        }
    })



    })
    
