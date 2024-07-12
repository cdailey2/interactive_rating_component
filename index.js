const submitButton = document.getElementById("submit-button");
const ratingContainer = document.getElementById("rating-component");
const thanksContainer = document.getElementById("thank-you-component");
const ratings = document.querySelectorAll(".rating-button");
const response = document.getElementById("your-response");


ratings.forEach((rating) => {
    rating.addEventListener("focus", (event) => {
        submitButton.addEventListener("click", () => {
            
            // Change inner html for "#your-response div"
            response.textContent = `You selected ${event.target.id} out of 5`

            //Switch rating and thanks containers
            ratingContainer.classList.toggle("hidden");
            thanksContainer.classList.toggle("hidden");
        })
    })
})
