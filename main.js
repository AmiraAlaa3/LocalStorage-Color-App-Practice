let fontsInput = document.querySelectorAll(".font-list li");
let colorSInput = document.querySelectorAll(".color-list li");
let fontSizeInput = document.querySelector("#fontsize-list");
let testArticle = document.querySelector("article");

fontsInput.forEach((font) =>{
    font.addEventListener("click", (e) => {
        // remove class active from all
        fontsInput.forEach(font =>{
             font.classList.remove("active");
        })
        // add class active to current
        e.currentTarget.classList.add("active");
      
        // add font to local storage
        localStorage.setItem("font-family", e.currentTarget.dataset.font);
        // add font to text
        testArticle.style.fontFamily = e.currentTarget.dataset.font;

   })
})

colorSInput.forEach((color) =>{
    color.addEventListener("click", (e) => {
        // remove class active from all
        colorSInput.forEach(color =>{
             color.classList.remove("active");
        })
        // add class active to current
        e.currentTarget.classList.add("active");
      
        // add font to local storage
        localStorage.setItem("color",e.currentTarget.dataset.color);

        // add background color to text
        testArticle.style.backgroundColor = window.localStorage.getItem("color");

   })
})

fontSizeInput.onchange = function(){
    // save
    window.localStorage.setItem("font-size",fontSizeInput.options[fontSizeInput.selectedIndex].value) ;
    // add to text
    testArticle.style.fontSize = `${window.localStorage.getItem("font-size")}px`;
  
}

if(window.localStorage.getItem("font-family")){
    // add font to text
      testArticle.style.fontFamily = window.localStorage.getItem("font-family");
    //   2 - remove active class
    fontsInput.forEach(font =>{
        font.classList.remove("active");
    })
    //   3 - add active class 
    document.querySelector(`[data-font='${window.localStorage.getItem("font-family")}']`).classList.add("active");
}
if(window.localStorage.getItem("color")){
    // add font to text
      testArticle.style.backgroundColor = window.localStorage.getItem("color");

    //   2 - remove active class
    colorSInput.forEach(color =>{
        color.classList.remove("active");
    })

    //   3 - add active class 
    document.querySelector(`[data-color = '${window.localStorage.getItem("color")}']`).classList.add("active");
}
if(window.localStorage.getItem("font-size")){
    // add font to text
      testArticle.style.fontSize = `${window.localStorage.getItem("font-size")}px`;
    //   vip
    // =======================================================================================================
    //   display select option is save in local storage 
      document.querySelector(`[value ="${window.localStorage.getItem("font-size")}"]`).selected = "true";
    // =======================================================================================================
      
}

