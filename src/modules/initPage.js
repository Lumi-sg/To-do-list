const initPage = () => {
	// Create the HTML elements using JavaScript
	const body = document.querySelector("body");

	const header = document.createElement("div");
	header.className = "header";

	const topLabel = document.createElement("h1");
	topLabel.className = "topLabel";
	topLabel.textContent = "Projects:";
	header.appendChild(topLabel);

	const defaultButton = document.createElement("button");
	defaultButton.className = "default";
	defaultButton.textContent = "Default Project";
	header.appendChild(defaultButton);

	const addProjectButton = document.createElement("button");
	addProjectButton.className = "addProject";
	addProjectButton.textContent = "+";
	header.appendChild(addProjectButton);

	body.appendChild(header);

	const projectInformation = document.createElement("div");
	projectInformation.className = "projectInformation";

	const description = document.createElement("div");
	description.className = "description";

	const descriptionHeader = document.createElement("h1");
	descriptionHeader.textContent = "Description";
	description.appendChild(descriptionHeader);

	const descriptionParagraph = document.createElement("p");
	descriptionParagraph.textContent = "Default Description";
	description.appendChild(descriptionParagraph);

	projectInformation.appendChild(description);

	const dueDate = document.createElement("div");
	dueDate.className = "dueDate";

	const dueDateHeader = document.createElement("h1");
	dueDateHeader.textContent = "Due Date";
	dueDate.appendChild(dueDateHeader);

	const dueDateParagraph = document.createElement("p");
	dueDateParagraph.textContent = "Default Due Date";
	dueDate.appendChild(dueDateParagraph);

	projectInformation.appendChild(dueDate);

	const priority = document.createElement("div");
	priority.className = "priority";

	const priorityHeader = document.createElement("h1");
	priorityHeader.textContent = "Priority";
	priority.appendChild(priorityHeader);

	const p = document.createElement("div");
	p.className = "p";
	p.textContent = "High";
	priority.appendChild(p);

	projectInformation.appendChild(priority);

	body.appendChild(projectInformation);

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
	task1.textContent = "Default Task 1";
	task.appendChild(task1);

	const task2 = document.createElement("p");
	task2.textContent = "Default Task 2";
	task.appendChild(task2);

	const task3 = document.createElement("p");
	task3.textContent = "Default Task 3";
	task.appendChild(task3);

	const task4 = document.createElement("p");
	task4.textContent = "Default Task 4";
	task.appendChild(task4);

	taskContainer.appendChild(task);
	tasks.appendChild(taskContainer);

	body.appendChild(tasks);
};
export { initPage };
