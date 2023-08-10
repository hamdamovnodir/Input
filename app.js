let input1 = document.querySelector(".input1  input");
let input2 = document.querySelector(".input2  input");
let input3 = document.querySelectorAll(".icon i");
let input4 = document.querySelector(".input3 input");
let type = document.querySelector(".input3 p");
let btn = document.querySelector(".button");
input4.checked = false;
var typed = new Typed(".text", {
  strings: ["Frontend", "Development", "Kalibri", "Education"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true,
});

const sr = ScrollReveal({
  distance: "100px",
  duration: 2600,
  delay: 450,
  reset: true,
});

sr.reveal(".main_card", { delay: 300, origin: "top" });
sr.reveal(".input1", { delay: 450, origin: "top" });
sr.reveal(".input2", { delay: 450, origin: "top" });
sr.reveal(".button2", { delay: 400, origin: "bottom" });

for (let i = 0; i < input3.length; i++) {
  input3[0].addEventListener("click", () => {
    input2.type = "text";
  });
  input3[1].addEventListener("click", () => {
    input2.type = "password";
  });

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input4.checked == false) {
    } else {
      location.reload();
    }

    if (input1.value == "") {
      input1.classList.add("error");
    } else {
      input1.classList.remove("error");
    }
    if (input2.value == "") {
      input2.classList.add("error");
      console.log("asd");
    } else {
      console.log("easd");
      input2.classList.remove("error");
    }

    if (input4.chacked == "") {
      type.value.classList.add("type");
    }
  });
}
