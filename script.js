//your JS code here. If required.
const size=document.getElementById("sizeInfo");
function update()
{
size.innerText=`Width:${window.innerWidth} and Height:${window.innerHeight}`;
}
update();
window.addEventListener("resize",update);
