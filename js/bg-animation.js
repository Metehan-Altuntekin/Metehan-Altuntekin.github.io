const bgArea = document.createElement("div")
bgArea.classList.add("bg-area")

for (let i = 0; i < 20; i++) {
  bgArea.innerHTML += `
  <svg class="bg-particle" width="100%" viewBox="0 0 145 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="23.4559" width="121.544" height="20.678" rx="8" fill="#925EE6" fill-opacity="0.07"/>
  <rect y="40.3223" width="123.676" height="20.678" rx="8" fill="#925EE6" fill-opacity="0.07"/>
  <path d="M54.375 20.6777H99.1544C95.743 22.2447 94.5508 23.366 93.8516 25.8472V30.4998V35.6693C94.514 37.8663 95.7564 38.8617 99.1544 40.3218H54.375C57.0818 39.2206 58.4412 38.3305 60.267 35.6693V30.4998C60.3079 28.2794 60.3136 27.0335 60.267 24.8133C59.162 22.3634 57.7154 21.5672 54.375 20.6777Z" fill="#925EE6" fill-opacity="0.07"/>
  </svg>
  `
}


document.querySelector("main").appendChild(bgArea)

for(let i = 0; i < 20; i++){
  document.querySelectorAll(".bg-particle")[i].style.left = RandomPos()
  document.querySelectorAll(".bg-particle")[i].style.top = RandomPos()
  console.log(document.querySelectorAll(".bg-particle")[i].style.top)
}

function CreateBgParticle(zone){

}