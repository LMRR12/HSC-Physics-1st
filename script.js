const search = document.getElementById("searchBox");

const chapters = document.querySelectorAll(".chapter");


search.addEventListener("keyup",()=>{


let value = search.value.toLowerCase();



chapters.forEach(chapter=>{


let text = chapter.innerText.toLowerCase();


if(text.includes(value))
{

chapter.style.display="block";

}

else{

chapter.style.display="none";

}


});


});