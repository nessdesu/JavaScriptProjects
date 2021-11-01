

const fullName = prompt("Adınızı giriniz: ");
const myName = document.querySelector("#myName");
myName.innerHTML = `${fullName.toUpperCase()}`;

function showTime(){
    var date = new Date();
    var hours= date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();

    const days = ["Pazar", "Pazartesi", "Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    let day = days[date.getDay()];

    var time = hours + " : "+ mins + " : " + secs + " " + day;

    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setInterval(showTime, 1000);
}

showTime();

function seeHumor(){
    var picture = "https://external-preview.redd.it/N_bB0Oszfuks9wLTax6viC4Hh9FzHgpMcpYiuUHoQQU.jpg?auto=webp&s=22d6a707521ffee7ea809ec405a10477ee7bd2b8";
    var img = document.getElementById("mPic")
    img.src = picture.replace('150x150', '350x350')
    img.style.display ="block";

}
