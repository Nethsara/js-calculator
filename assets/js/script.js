$(document).ready(function () {
  const history = [];
  let topText = "";
  let typed = "";

  $(".num").click((e) => {
    typed += e.target.innerText;
    $("#calc-typed").text(typed);
  });

  $(".opt").click((e) => {
    const id = e.target.id;
    switch (id) {
      case "/":
      case "*":
      case "+":
      case "-":
        typed += ` ${id} `;
        $("#calc-typed").text(typed);
        break;
      case "=":
        topText = typed;
        $("#calc-operation").text(topText);
        typed = eval($("#calc-typed").text());
        $("#calc-typed").text(typed);
        break;
      case "%":
        topText = `${typed} %`;
        $("#calc-operation").text(topText);
        break;
      case "ac":
        $("#calc-typed").text(0);
        typed = "";
        $("#calc-operation").text(0);
        console.log(topText);
        history.push(topText);
        topText = "";
        $(".history-container").append(
          ` <input type="text" class="textfield" value='${
            history[history.length - 1]
          }' />`
        );
        history.shift();
        break;
      case "back":
        typed = typed.split("");
        typed.pop();
        console.log(typed);
        typed = typed.join("");
        $("#calc-typed").text(typed);
        break;
      case "negative":
        typed = eval(typed);
        typed *= -1;
        $("#calc-typed").text(typed);
    }
  });
});
