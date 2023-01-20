
const button = document.getElementById("button");
const image = document.getElementById("image");
const turn = document.getElementById("turn");

function rollDice() {
     image.classList.add("animation"); //add animation after certain second
     setTimeout(() => {
          const user_number = Math.floor(Math.random() * 6) + 1;
          image.classList.remove("animation"); //remove animation after certain second
          image.src = "dice" + user_number + ".svg";
          user_move(user_number);
          button.disabled = true;
          turn.style.color = "blue";
          turn.innerHTML = "----- Computer's turn -----"
     }, 1000);
     setTimeout(() => {
          comp_rollDice();
     }, 2500);
}

function comp_rollDice() {
     image.classList.add("animation"); //add animation after certain second
     setTimeout(() => {
          const comp_number = Math.floor(Math.random() * 6) + 1;
          image.src = "dice" + comp_number + ".svg";
          comp_move(comp_number);
          turn.innerHTML = "----- Your turn -----"
          turn.style.color = "green";
          image.classList.remove("animation"); //remove animation after certain second
     }, 1000);
}

let user_here = 0;
let user_prev = 1;

function user_move(where) {
     setTimeout(() => {
          const box = document.getElementById("u" + (user_here + where));
          document.getElementById("u" + user_prev).style.backgroundColor = "transparent";
          document.getElementById("u" + user_prev).style.color = "black";
          if ((user_here + where) < 26) {
               box.style.backgroundColor = "green";
               box.style.color = "white";
               user_here = user_here + where;
               user_prev = user_here;
          }
          else {
               alert("User reached first!");
               location.reload();
          }
     }, 100);
}

let comp_here = 0;
let comp_prev = 1;

function comp_move(where) {
     setTimeout(() => {
          const box = document.getElementById("c" + (comp_here + where));
          document.getElementById("c" + comp_prev).style.backgroundColor = "transparent";
          document.getElementById("c" + comp_prev).style.color = "black";
          if ((comp_here + where) < 26) {
               box.style.backgroundColor = "blue";
               box.style.color = "white";
               comp_here = comp_here + where;
               comp_prev = comp_here;
               button.disabled = false;
          }
          else {
               alert("Computer reached first!");
               location.reload();
          }
     }, 100);
}

