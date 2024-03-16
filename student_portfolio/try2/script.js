

var tablinks = document.getElementsByClassName("tab-links"); 
var tabcontents = document.getElementsByClassName("tab-content"); 

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    console.log(rect.top)
    return (
      rect.top <=500
    
    );
  }

let section2 = document.querySelector('.section2');
let text = document.querySelector('.text');
let innerText = document.querySelector('.inner-text');

window.addEventListener('scroll', function(){

      
    let section2 = document.querySelector('.section2');
    let text = document.querySelector('.text');
    let innerText = document.querySelector('.innerText');

    if(isElementInViewport(section2))
    {
        var rect = section2.getBoundingClientRect();
        let value = -(rect.top-400)+50;
        section2.style.clipPath = "circle("+ value+"px at center center)";
        text.style.left = 100 - value/6 + '%';
        innerText.style.right = 100 - value /4 + '%';
    }
})