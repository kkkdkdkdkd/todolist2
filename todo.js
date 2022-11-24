
const buttonChange = document.querySelector(".changebutton");

function button(){
    
    if(document.querySelector('.bobody').style.backgroundColor ===  'rgb(238, 211, 249)'){
        document.querySelector('.bobody').style.backgroundColor = '#bdd7ee';
    } else{
        document.querySelector('.bobody').style.backgroundColor = 'rgb(238, 211, 249)';
    }
    //change button 두 번 클릭해야지 변경됨. 
    //수정 필요함
}

buttonChange.addEventListener('click', button);

//------------------------------------------------------------------------index

// const changeButton = document.querySelector(".changecolor");

// function Button(){
//     document.body.style.backgroundColor = '#bdd7ee';
//     // document.querySelector(".DTW").style.backgroundColor =  '#2e75b6';
// }

// changeButton.addEventListener('click',Button);

const change_color = document.querySelector(".changecolor");

function change(){
    document.body.style.backgroundColor = 'green';
}


change_color.addEventListener('click', change);
//------------------------------------------------------------------------





