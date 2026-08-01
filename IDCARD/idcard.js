// This function runs when any Edit button is clicked
function editField(elementId, promptMessage){
  const element = document.getElementById(elementId);
  const newValue = prompt(promptMessage, element.textContent);

  // Only update if user typed something and didn't cancel
  if(newValue !== null && newValue.trim() !== ""){
    element.textContent = newValue;
  }
}