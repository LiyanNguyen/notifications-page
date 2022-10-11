let markAsRead = document.querySelector("#markAsRead");
let unreadNotifs = document.querySelector("#unreadNotifs");
let newNotifs = document.querySelectorAll(".notif.new");
let allRedCircles = document.querySelectorAll(".redCircle");

console.log(markAsRead);

markAsRead.onclick = () => {
	unreadNotifs.innerText = "0"

	newNotifs.forEach((e) => {
		e.classList.remove("new");
		e.classList.add("old");
	})

	allRedCircles.forEach((e) => {
		e.remove();
	})
}