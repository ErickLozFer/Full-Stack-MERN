var pTags = document.querySelectorAll("p");

function getColor(element) {
    console.log(element.value);
    console.log(pTags);
    for(var i = 0; i < pTags.length; i++) {
        if (i % 2 == 1) /*lo anterior solo es si se quieren los impares*/ {
            pTags[i].style.color = element.value;
        }
    }
}
