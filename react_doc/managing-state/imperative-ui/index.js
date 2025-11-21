const handleFormSubmit = async (e) => {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
    // Reset the form after submission
    textarea.value = '';
    handleTextareaChange(); // Update button state
  }
};

const handleTextareaChange = () => {
  if (textarea.value.trim().length === 0) {
    disable(button);
  } else {
    enable(button);
  }
};

const hide = (el) => {
  el.style.display = "none";
};

const show = (el) => {
  el.style.display = "";
};

// FIXED: Changed el.disable to el.disabled
const enable = (el) => {
  el.disabled = false;
};

const disable = (el) => {
  el.disabled = true;
};

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.trim().toLowerCase() === "istanbul") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
};

// Get DOM elements
const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const loadingMessage = document.getElementById("loading");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");

// Set up event listeners
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

// Initialize button state
handleTextareaChange();