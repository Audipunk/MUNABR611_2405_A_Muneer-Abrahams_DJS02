const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (isEmpty(dividend) || isEmpty(divider)) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else if (dividend === "YOLO" && divider === "+++") {
    document.write("Something critical went wrong. Please reload the page")
    console.trace();
  } else if (!isNumeric(dividend) || !isNumeric(divider)) {
    result.innerText = "Please input valid whole numbers";
  } else if (dividend === "0" || divider === "0") {
    result.innerText = ""
    console.trace();
    result.innerText = "Division not performed. Invalid number provided. Try again";
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});

function isNumeric(num) {
  return (
    (typeof num === "number" ||
      (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num)
  );
}

function isEmpty(num) {
  return num === "";
}
