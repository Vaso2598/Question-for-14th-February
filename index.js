/* Input */
const input = document.getElementById("name");
const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("nameInput");
const choice = document.getElementById("yesOrNo");

function submitHandle() {
	const question = document.getElementsByTagName("p");
	const inputValue = input.value.trim();
	question[0].innerText = `${inputValue} ` + question[0].innerText;
	if (inputValue === "") {
		console.log("its empty");
		submitButton.classList.add("shake");
		setTimeout(() => submitButton.classList.remove("shake"), 500);
		return;
	} else {
		nameInput.style.display = "none";

		choice.style.display = "block";
	}
}
submitButton.addEventListener("click", submitHandle);
input.addEventListener("keydown", (e) => {
	if (e.key === "Enter") {
		submitHandle();
	}
});

/* Buttons */
const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
function centerButtons() {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	const centerX = sizes.width / 2;
	const centerY = sizes.height / 2;

	btnYes.style.top = `${centerY - 35}px`;
	btnYes.style.left = `${centerX - 300}px`;

	btnNo.style.top = `${centerY - 35}px`;
	btnNo.style.left = `${centerX + 100}px`;
}
centerButtons();
window.addEventListener("resize", centerButtons);

btnNo.addEventListener("mouseover", () => {
	const maxWidth = sizes.width - btnNo.offsetWidth - 200;
	const maxHeight = sizes.height - btnNo.offsetHeight - 200;

	const randomX = Math.floor(Math.random() * maxWidth);
	const randomY = Math.floor(Math.random() * maxHeight);

	btnNo.style.left = `${randomX}px`;
	btnNo.style.top = `${randomY}px`;
});

let messageAdded = false;
function createFloatingSVG() {
	const randomNumber = Math.floor(Math.random() * 10 + 5);
	for (let i = 0; i < randomNumber; i++) {
		const svg = document.createElement("img");
		svg.src = "./src/hearts.svg";
		svg.classList.add("floating-svg");

		const randomX = Math.random() * (sizes.width - 100);
		const randomY = Math.random() * (sizes.height - 200);

		svg.style.left = `${randomX}px`;
		svg.style.top = `${randomY}px`;

		document.body.appendChild(svg);

		setTimeout(() => svg.remove(), 2000);
	}

	if (!messageAdded) {
		const message = document.createElement("p");
		message.innerText = "Now, go ahead and tell that to the one who sent you this.";
		document.body.appendChild(message);

		messageAdded = true;
	}
}

btnYes.addEventListener("click", createFloatingSVG);
