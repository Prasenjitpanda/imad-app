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
              
            }
        }
       //ot done yet
};
//make the request
    request.open(`GET`,`http://prasenjitpanda123.imad.hasura-app.io/submit-name?name=`+name,true);
    request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name
    var names = request.responseText;
    names =JSON.parse(names);
    var list ='';
    for(var i=0;i<names.length;i++){
        list += '<li>'+ names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    //capture a list of name and render it as a list
    ul.innerHTML = list;
};