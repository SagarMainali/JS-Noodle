function rps(input) {
     const result = document.getElementById("result");
     result.innerHTML = "wait while computer is choosing....";
     setTimeout(() => {
          const user_input = input.id;
          const comp_input = Math.floor(Math.random() * 3) + 1;
          if (comp_input == user_input) {
               result.innerHTML = "It's a tie! Choose again."
          }
          else if (comp_input == 1 && user_input == 2) {
               result.innerHTML = "Computer choosed Rock. <b style=\"color: green\">You won!</b>"
          }
          else if (comp_input == 2 && user_input == 1) {
               result.innerHTML = "Computer choosed Paper. <b style=\"color: red\">You lost!</b>"
          }
          else if (comp_input == 1 && user_input == 3) {
               result.innerHTML = "Computer choosed Rock. <b style=\"color: red\">You lost!</b>"
          }
          else if (comp_input == 3 && user_input == 1) {
               result.innerHTML = "Computer choosed Scissor. <b style=\"color: green\">You won!</b>"
          }
          else if (comp_input == 2 && user_input == 3) {
               result.innerHTML = "Computer choosed Paper. <b style=\"color: green\">You won!</b>"
          }
          else if (comp_input == 3 && user_input == 2) {
               result.innerHTML = "Computer choosed Scissor. <b style=\"color: red\">You lost!</b>"
          }
     }, 1000);
}
