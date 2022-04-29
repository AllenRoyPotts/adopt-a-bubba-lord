let anotherCake = prompt("Do You Want To Eat More Cheeze Cake");
let picURL = "https://s3.amazonaws.com/colorslive/jpg_512x512/1569369-9i2WHwN-_ZAaG3RY.jpg"

if(anotherCake.toLowerCase() == "yes"){

    document.write('<img src="' + picURL + '">')
}
