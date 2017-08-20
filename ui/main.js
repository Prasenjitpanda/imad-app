//couter code
var button = document.getElementById(`counter`);
var counter = 0;
button.onclick = function(){
    //create a request object.
    var request = new XMLHTTPRequest();
    // capture the response and store it in a variable.
    //render the variable in correct span
    request.onreadystatechabnge = function(){
        if (request.readyState === XMLHTTPRequest.DONE ){
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
    request.open('GET',`http://prasenjitpanda123.imad.hasura-app.io/counte`,true);
    request.send(null);
};