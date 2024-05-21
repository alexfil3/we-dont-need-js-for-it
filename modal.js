const dialog = document.querySelector("dialog");

document.querySelector("button").addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", function () {
  console.log(dialog.returnValue);
});
