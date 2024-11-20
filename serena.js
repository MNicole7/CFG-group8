function notInViewport(element){
  
    // Get the elements position relative to the viewport
    var elementPositionViewport = element.getBoundingClientRect();
    
    // Check if the element is outside the viewport
    return (elementPositionViewport.top > innerHeight); // || elementPositionViewport.top < 0
    
  }


function startAnimationsImgs(){
    //recipe images
    //on scroll run code
    document.addEventListener( 'scroll', event => {
        //get number of elements in the HTML with img-fluid classs
        var numOfElement = document.querySelectorAll( ".img-fluid" ).length;
        for (i=0; i < numOfElement; i++){
            var myElement = document.querySelectorAll( ".img-fluid" )[i];
            // Check the viewport status
            if( notInViewport( myElement ) ){
                myElement.classList.add("");
            } else {  
                //adds the class for the animation
                myElement.classList.add("moveImg");
            }
        }

    });
}

function startAnimationsIngredients(){
    //recipe images
    //on scroll run code
    document.addEventListener( 'scroll', event => {
        //ingredients
        var numOfElement = document.querySelectorAll( ".ingredients" ).length;
        for (i=0; i < numOfElement; i++){
            var myElement = document.querySelectorAll( ".ingredients" )[i];


            // Check the viewport status
            if( notInViewport( myElement ) ){
                myElement.classList.add("");
            } else {  
                myElement.classList.add("moveText");
            }
        }
    });
}

function startAnimationsInstructions(){
    //recipe images
    //on scroll run code
    document.addEventListener( 'scroll', event => {
        //ingredients
        var numOfElement = document.querySelectorAll( ".instructions" ).length;
        for (i=0; i < numOfElement; i++){
            var myElement = document.querySelectorAll( ".instructions" )[i];


            // Check the viewport status
            if( notInViewport( myElement ) ){
                myElement.classList.add("");
            } else {  
                myElement.classList.add("moveText");
            }
        }
    });
}

function startAnimationsAboutMe(){
    //About me section
    document.addEventListener( 'scroll', event => {
        //ingredients
        var numOfElement = document.querySelectorAll( ".aboutMe" ).length;
        for (i=0; i < numOfElement; i++){
            var myElement = document.querySelectorAll( ".aboutMe" )[i];


            // Check the viewport status
            if( notInViewport( myElement ) ){
                myElement.classList.add("");
            } else {  
                myElement.classList.add("moveMe");
            }
        }
    });
}
