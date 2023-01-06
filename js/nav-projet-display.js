// récupère la balise a avec l'id project 
var projectbtn = document.getElementById('project');

// récupère l'élément d'id nav-projet
var navproject = document.getElementById('nav-projet');

//dévalre une boolean
var navprojecthover = false;
var navprojectbtn = false;


// display navproject on projectbtn hover
projectbtn.addEventListener('mouseover', function(){
    navproject.style.display = 'flex';
    navprojectbtn = true;
});

// display hive navproject on projectbtn not hover
projectbtn.addEventListener('mouseout', function(){
    navprojectbtn = false;
    setTimeout(function(){
        //apres les ms
        console.log('salut');
        if(navprojecthover == false){
            //navproject not display
            navproject.style.display = 'none';
            console.log('hey');
        }
    }, 700);
    //direct
    navproject.style.display = 'flex';
    console.log('cou');
    //si navproject n'est pas hover
    
});

//on navproject hover navproject display
navproject.addEventListener('mouseover', function(){
    navproject.style.display = 'flex';
    navprojecthover = true;
});

//on navproject not hover navproject not display
navproject.addEventListener('mouseout', function(){
    navproject.style.display = 'none';
    navprojecthover = false;
    
});