// get the mPopup
var mpopup = document.getElementById('mpopupBox');
var mpopup2 = document.getElementById('mpopupBox2');

// get the link that opens the mPopup
var mpLink = document.getElementById("mpopupLink");
var mpLink2 = document.getElementById("mpopupLink2");
var closeModal = document.getElementById("closeModal");
var closeModal2 = document.getElementById("closeModal2");
var closeModalButton = document.getElementById("closeModalButton");

// get the close action element
var close = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close2")[0];

// open the mPopup once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
}
mpLink2.onclick = function(){
	mpopup2.style.display = "block";
}

// close the mPopup once close element is clicked
//doesn't work. had to use a div
close.onclick = function() {

    mpopup.style.display = "none";

}


closeModal.onclick= function() {
	
    mpopup.style.display = "none";
}
closeModal2.onclick= function() {
	
    mpopup2.style.display = "none";
}
closeModalButton.onclick = function() {
    
    mpopup2.style.display = "none";
}

// close the mPopup when user clicks outside of the box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == mpopup2) {
        mpopup2.style.display = "none";
    }
}