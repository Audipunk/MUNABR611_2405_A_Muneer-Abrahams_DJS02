const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  try {
    // Check if inputs are valid numbers
    if (isNaN(dividend) || isNaN(divider)) {
      throw new Error("Non-numeric input detected");
    }

    if (!dividend || !divider) {
      result.innerText =
        "Division not performed. Both values are required in inputs. Try again.";
    } else if (divider == 0) {
      result.innerText =
        "Division not performed. Invalid number provided. Try again.";
      console.error("Division by zero error. Invalid number provided."); // Log error with call stack
    } else {
      result.innerText = Math.trunc(dividend / divider);
    }
  } catch (error) {
    const errorDiv = document.createElement("div");
    errorDiv.classList.add("critical-error");
    errorDiv.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";

    // Append the errorDiv to the body
    document.body.innerHTML = ""; // Clear the current content
    document.body.appendChild(errorDiv);

    // Log the error with the call stack
    console.error(error.stack);
  }
});