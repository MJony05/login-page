let aylana = document.querySelector(".aylana");
let back = document.querySelector(".back");
let front = document.querySelector(".front");

let input = document.querySelector(".input");
// let a  = ()=>{
//     back.style.transform = "rotateY(0)";
//   front.style.transform = "rotateY(180deg)";
// }
let shart = true;
aylana.addEventListener("click", () => {
  if (shart == true) {
    back.style.transform = "rotateY(0)";
    front.style.transform = "rotateY(180deg)";
    aylana.style.transform = `translateX(16rem) rotateZ(400deg)`;
    shart = false;
  } else {
    back.style.transform = "rotateY(-180deg)";
    front.style.transform = "rotateY(0)";
    aylana.style.transform = `translateX(0) rotateZ(0)`;
    shart = true;
    console.log(1241651);
  }
});
