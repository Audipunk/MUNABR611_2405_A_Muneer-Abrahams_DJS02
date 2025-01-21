const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //added Math floor method this returns only the integer
  result.innerText = Math.floor(dividend / divider);
  
  try{
    if (!dividend || !divider) {
      result.innerText = "Division not performed. Both values are required in inputs. Try again.";
      return;
    }

    if (divider == 0) {
      result.innerText = "Division not performed. Invalid number provided. Try again.";
      console.error("Error: Division by zero attempted. Call stack:", new Error().stack);
      return;
    }

    if (isNaN(dividend) || isNaN(divider)) {
     throw new Error("Non-numeric input provided. Critical failure.");
    }

} catch (error) {
  // This displays critical error message and log error with call stack
  document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>";
  console.error("Critical Error:", error.stack);
}
});
