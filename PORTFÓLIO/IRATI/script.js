let cout = 1;
document.getElementById("radio1").ariaChecked = true;

setInterval(function(){
    nextImage();
}, 5000) 

function nextImage(){
    cout++;
    if(cout>6){
        cout = 1;
    }
    document.getElementById("radio"+cout).checked = true;
}