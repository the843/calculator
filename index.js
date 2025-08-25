let btn = document.querySelectorAll("button");
let input = document.querySelector("input");

btn.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.textContent;
        if (value === "C") {
            input.value = "";
        } else if (value  === "=") {
            try {
                input.value = eval(input.value) || "";
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value ;
        }
    });
});
