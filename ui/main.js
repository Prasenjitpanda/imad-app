//couter code
var button = document.getElementById(`counter`);
var counter = 0;
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
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
       //ot done yet
};
//make the request
    request.open('GET',`http://prasenjitpanda123.imad.hasura-app.io/counter`,true);
    request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to the server and send the name
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0;l<names.length;l++){
        list += '<li>'+names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    //capture a list of name and render it as a list
    ul.ineerHTML = list;
};