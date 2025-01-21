const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert inputs to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Helper function to display error messages
  const displayError = (message) => {
    result.innerText = message;
    console.error(message);
  };

  // Scenario 1: Validate if inputs are empty
  if (!dividend || !divider) {
    displayError("Division not performed. Both values are required in inputs. Try again.");
    return;
  }

  // Scenario 2: Validate if inputs are not numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    displayError("Error: Non-numeric input provided.");
    result.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    throw new Error("Non-numeric input caused the crash.");
  }

  // Scenario 3: Validate division by zero
  if (dividerNum === 0) {
    displayError("Division not performed. Invalid number provided. Try again.");
    return;
  }

  // Perform division
  const divisionResult = dividendNum / dividerNum;

  // Scenario 4: Display result as a whole number when possible
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } 
  // Scenario 5: Display result rounded down if it's a decimal
  else {
    result.innerText = Math.floor(divisionResult);
  }
});
