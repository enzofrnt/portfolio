setTimeout(function(){

// récupère la balise a avec l'id project 
var projectbtn = document.getElementById('projet');

// récupère l'élément d'id nav-projet
var navproject = document.getElementById('nav-projet');
var navprojectright = document.getElementById('nav-projet-right');

var projectbtnresp = document.getElementById('projectresp');

//dévalre une boolean
var navprojecthover = false;
var navprojectbtn = false;

// display navproject on projectbtn hover
projectbtn.addEventListener('mouseover', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
        navproject.style.display = 'flex';
        navprojectbtn = true;
        console.log("coucou");
    }
});

// display hive navproject on projectbtn not hover
projectbtn.addEventListener('mouseout', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
    navprojectbtn = false;
    console.log("coucou");
    setTimeout(function(){
        //apres les ms
        if(navprojecthover == false){
            //navproject not display
            navproject.style.display = 'none';
        }
    }, 700);
    //direct
    navproject.style.display = 'flex';
    //si navproject n'est pas hover
    }
});

//on navproject hover navproject display
navprojectright.addEventListener('mouseover', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
    console.log("coucou");
    navproject.style.display = 'flex';
    navprojecthover = true;
    }
});

//on navproject not hover navproject not display
navprojectright.addEventListener('mouseout', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
    console.log("coucou");
    navproject.style.display = 'none';
    navprojecthover = false;
    }
});

projectbtnresp.addEventListener('mouseover', function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {}
    else {
    console.log("coucou");
    navproject.style.display = 'flex';
    navprojectbtn = true;
    document.head.appendChild(newStyle);
    }
});
}, 100);