const myAge = 16;
const showPage = () => "showPage";
const showError = () => "showError";
const message = myAge >= 18 ? showPage() : showError();

console.log(message);

const team = ["Tyler", "Porter", "Tyler", "Porter"];

console.log(team.length <= 4 ? `Team size: ${team.length}` : "Too many people");
