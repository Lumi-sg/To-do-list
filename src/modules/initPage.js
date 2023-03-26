const initPage = () => {
	// Create the HTML elements using JavaScript
	const body = document.querySelector("body");

	const pageContainer = document.createElement("div");
	pageContainer.className = "pageContainer";
	body.appendChild(pageContainer);

	const modal = document.querySelector(".modal");

	modal.style.display = "none";

	const header = document.createElement("div");
	header.className = "header";

	const topLabel = document.createElement("h1");
	topLabel.className = "topLabel";
	topLabel.textContent = "Projects:";
	header.appendChild(topLabel);

	const addProjectButton = document.createElement("button");
	addProjectButton.className = "addProject";
	addProjectButton.textContent = "+";
	topLabel.appendChild(addProjectButton);

	pageContainer.appendChild(header);

	const projectInformation = document.createElement("div");
	projectInformation.className = "projectInformation";

	const description = document.createElement("div");
	description.className = "description";

	const descriptionHeader = document.createElement("h1");
	descriptionHeader.textContent = "Description";
	description.appendChild(descriptionHeader);

	const descriptionParagraph = document.createElement("p");
	descriptionParagraph.className = "projectDescription";
	description.appendChild(descriptionParagraph);

	projectInformation.appendChild(description);

	const priority = document.createElement("div");
	priority.className = "priority";

	const priorityHeader = document.createElement("h1");
	priorityHeader.textContent = "Priority";
	priority.appendChild(priorityHeader);

	const p = document.createElement("div");
	p.className = "projectPriority";
	priority.appendChild(p);

	projectInformation.appendChild(priority);

	pageContainer.appendChild(projectInformation);

	const tasks = document.createElement("div");
	tasks.className = "Tasks";

	const taskLabel = document.createElement("div");
	taskLabel.className = "taskLabel";

	const taskLabelHeader = document.createElement("h1");
	taskLabelHeader.textContent = "Tasks:";
	taskLabel.appendChild(taskLabelHeader);

	tasks.appendChild(taskLabel);

	const taskContainer = document.createElement("div");
	taskContainer.className = "taskContainer";

	const task = document.createElement("div");
	task.className = "task";

	const task1 = document.createElement("p");
	task1.className = "taskOne";

	task.appendChild(task1);

	const task2 = document.createElement("p");
	task2.className = "taskTwo";

	task.appendChild(task2);

	const task3 = document.createElement("p");
	task3.className = "taskThree";

	task.appendChild(task3);

	const task4 = document.createElement("p");
	task4.className = "taskFour";
	task.appendChild(task4);

	taskContainer.appendChild(task);
	tasks.appendChild(taskContainer);

	pageContainer.appendChild(tasks);

	addProjectButton.addEventListener("click", () => {
		pageContainer.classList.add("modalIsOpen");
		modal.style.display = "block";
	});

	const modalSpan = document.getElementsByClassName("close")[0];

	modalSpan.addEventListener("click", () => {
		modal.style.display = "none";
		pageContainer.classList.remove("modalIsOpen");
	});
};
export { initPage };
