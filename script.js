const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next-btn");
const backBtns = document.querySelectorAll(".back-btn");
const progressBar = document.getElementById("progressBar");

let currentStep = 0;

// Show current step
function updateForm() {

  steps.forEach((step) => {
    step.classList.remove("active");
  });

  steps[currentStep].classList.add("active");

  // Progress calculation
  let progress = ((currentStep + 1) / steps.length) * 100;

  progressBar.style.width = progress + "%";
}

// NEXT
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    if (currentStep < steps.length - 1) {
      currentStep++;
      updateForm();
    }

  });
});

// BACK
backBtns.forEach((btn) => {
  btn.addEventListener("click",
    () => {

      if (currentStep > 0) {
        currentStep--;
        updateForm();
      }

    });
});



