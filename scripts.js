const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Convert to numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  // Scenario 1: Validation when values are missing
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Scenario 2: Validate if the inputs are not numbers
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    console.error("Error: Non-numeric input provided.");
    document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page</h1>";
    throw new Error("Non-numeric input caused the crash.");
  }

  // Scenario 3: Invalid division by zero
  if (dividerNum === 0) {
    result.innerText = "Division not performed. Invalid number provided. Try again.";
    console.error("Error: Division by zero is invalid.");
    return;
  }

  // Perform the division
  const divisionResult = dividendNum / dividerNum;

  // Scenario 4: Display whole number result when possible
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } 
  // Scenario 5: Display the result rounded down if it's a decimal
  else {
    result.innerText = Math.floor(divisionResult);
  }
});
