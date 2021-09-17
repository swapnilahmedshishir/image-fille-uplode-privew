const inputFile =document.getElementById("inputFile");
const privewConterner = document.getElementById("imageprivew");
const privewImage = privewConterner.querySelector(".image-privew-image");
const privewText = privewConterner.querySelector(".image-privew-text");


inputFile.addEventListener("change", function(){
    const file = this.files[0];
    
    if(file){
        const reader = new FileReader();

        privewImage.style.display="block";
        privewText.style.display="none";

        reader.addEventListener("load", function(){
            privewImage.setAttribute("src", this.result);

        });

        reader.readAsDataURL(file);
    }else{
        privewImage.style.display=null;
        privewText.style.display=null;
        privewImage.setAttribute("src","");

    }

});












