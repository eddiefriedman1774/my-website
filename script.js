function toggleDropDown(){
    let dropdownContent = document.getElementById("dropdown-content")
    if(dropdownContent.style.display=="none"){
        document.getElementById("dropdown-content").style.display="block"
    } else{
        document.getElementById("dropdown-content").style.display="none"
    }
}

function bodyLoad (){
    document.getElementById("dropdown").addEventListener("click",toggleDropDown)
}

//add vw 