var change_color = document.querySelector("#change_color");
var title = document.querySelector(".title span");
change_color.onclick = () => {
    var randomnumber = Math.floor(Math.random() * 16777215);
    var hexcode = "#" + randomnumber.toString(16);
    title.innerHTML = hexcode;
    document.body.style.backgroundColor = hexcode;
}