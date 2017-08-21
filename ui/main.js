//couter code
var button = document.getElementById('counter');
button.onclick = function(){
    //create a request object.
    var request = new XMLHttpRequest();
    // capture the response and store it in a variable.
    //render the variable in correct span
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status ===200){
                var counter = request.responseText;
                var span = document.getElementById('counter');
                span.innerHTML = counter.toString();
              
            }
        }
       //ot done yet
};
//make the request
    request.open(`GET`,`http://prasenjitpanda123.imad.hasura-app.io/counter` , true);
    request.send(null);
};
//submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
      var request = new XMLHttpRequest();
    // capture the response and store it in a variable.
    //render the variable in correct span
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if (request.status ===200){
                 var names = request.responseText;
    names =JSON.parse(names);
                 var list ='';
    for(var i=0;i<names.length;i++){
        list += '<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    //capture a list of name and render it as a list
    ul.innerHTML = list;
           
              
            }
        }
       //ot done yet
};
//make the reque
var nameInput = document.getElementById('name');
var name = nameInput.value;
    request.open(`GET`,`http://prasenjitpanda123.imad.hasura-app.io/submit-name?name=`+name , true);
    request.send(null);
    //make a request to the server and send the name
   
};