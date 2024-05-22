let textarea = document.getElementById("text")
let result = document.getElementById("result")

const textResult = () => {
	result.innerHTML = textarea.value
}

textarea.oninput = () => {
	localStorage.setItem("textareaContent", textarea.value);
	textResult();
};

window.onload = () => {
	textarea.value = localStorage.getItem("textareaContent") || "";
	textResult();
};