function cabin(choice) {
    if (choice == 1) {
        document.getElementById("p1").style.display = "none";

        document.getElementById("cabin").style.display = "none";
        document.getElementById("game").style.display = "block";

    }

    if (choice == 2) {
        document.getElementById("monster").style.display = "block";
        document.getElementById("cabin").style.display = "none";
        

    }
}


function monster (choice) {
    if (choice == 1) {
        document.getElementById("monster").style.display = "none";
        document.getElementById("game").style.display = "block";

    }

if (choice == 2) {
    document.getElementById("monster").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("seng").style.display = "block";
 
}
}



function seng() {
    document.getElementById("monster").style.display = "none";
    document.getElementById("game").style.display = "none";
    document.getElementById("cabin").style.display = "block";
    document.getElementById("p1").style.display = "none";
    document.getElementById("seng").style.display = "none";
}
