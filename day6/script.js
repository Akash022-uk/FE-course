



    let body = document.getElementsByTagName("body")[0]; 
    let theme = document.getElementById("theme"); 

    
    function handleOnChange() {
        if (theme.checked) {
            body.style.backgroundColor = "red";
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    }

    
    

