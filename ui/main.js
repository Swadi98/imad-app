//console.log('Loaded!');
var button= document.getElementById('counter');
var counter=0;
button.onclick= function(){
    counter =counter +1;
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
    
}


/*button.onclick =function(){
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        
        if(request.readyState === XMLHtttpRequest.DONE){
            if(request.status ===200){
                var counter = request.responseText;
                 var span= document.getElementById('count');
                 span.innerHTML= counter.toString();
                
            }        }
    };

    request.open('GET', 'http://kswadi01.imad.hasura-app.io/counter',true);
    request.send(null);
}; 
*/
/* var element=document.getElementById('main-text');
element.innerHTML='New Value';

var img=document.getElementById('madi');

var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft +1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick=function(){
    var interval = setInterval(moveRight,50);
   // img.style.marginLeft= '100px';
} */


