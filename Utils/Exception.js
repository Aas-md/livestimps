export function logError(message, context = "default context aas") {
  console.error(`[${context}]`, message);
}


// Show a friendly message in a container
export function showErrorUI(message, containerSelector = "#app") {
  const container = document.querySelector(containerSelector);
  if (container) {
    container.innerHTML = `
      <div style="padding:20px; color:red; text-align:center;">
        ⚠ ${message}
      </div>
    `;
  }
}