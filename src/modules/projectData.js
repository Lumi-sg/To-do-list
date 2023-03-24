const projectInitialization = () => {
	class Project {
		constructor(title, description, priority, taskOne, taskTwo, taskThree, taskFour) {
			this.title = title;
			this.description = description;
			this.priority = priority;
			this.taskOne = taskOne;
			this.taskTwo = taskTwo;
			this.taskThree = taskThree;
			this.taskFour = taskFour;
		}
	}

	let DEFAULT_PROJECT1 = new Project(
		"Practice Melee",
		"daily SSBM practice",
		"Medium",
		"Practice moving around each stage and its platforms",
		"Practice SHFFLing on a target",
		"Practice character specific tech (shine grabs, shine OOS, laser grab)",
		"Practice comboing a character on various stages"
	);

	let DEFAULT_PROJECT2 = new Project(
		"Practice Piano",
		"Learning Piano",
		"Low",
		"Practice your scales",
		"Listen to a new song and learn to play the chord progression",
		"Re-harmonize the song",
		"Practice playing a piece of your choice"
	);

	let projectList = [];
	projectList.push(DEFAULT_PROJECT1);
	projectList.push(DEFAULT_PROJECT2);

	renderButton(DEFAULT_PROJECT1);
	renderButton(DEFAULT_PROJECT2);

	function renderButton(project) {
		const header = document.querySelector(".header");
		const projectButton = document.createElement("button");
		projectButton.className = project.title;
		projectButton.textContent = project.title;

		header.appendChild(projectButton);

		projectButton.addEventListener("click", () => {
			changeCurrentProject(projectButton);
		});
	}

	function changeCurrentProject(button) {
		const buttons = document.querySelectorAll("button");

		buttons.forEach((button) => {
			button.classList.remove("button-selected");
		});

		button.classList.add("button-selected");
		updateProjectText();
	}

	function updateProjectText() {
		const buttons = document.querySelectorAll("button");

		buttons.forEach((button) => {
			if (button.classList.contains("button-selected")) {
				let currentProject = button.innerText;

				const index = projectList.findIndex((project) => project.title === currentProject);

				const projectDescription = document.querySelector(".projectDescription");
				projectDescription.textContent = projectList[index].description;

				const projectPriority = document.querySelector(".projectPriority");
				projectPriority.textContent = projectList[index].priority;

				const taskOne = document.querySelector(".taskOne");
				taskOne.textContent = "•  " + projectList[index].taskOne;

				const taskTwo = document.querySelector(".taskTwo");
				taskTwo.textContent = "• " + projectList[index].taskTwo;

				const taskThree = document.querySelector(".taskThree");
				taskThree.textContent = "• " + projectList[index].taskThree;

				const taskFour = document.querySelector(".taskFour");
				taskFour.textContent = "• " + projectList[index].taskFour;
			}
		});
	}
};

export { projectInitialization };
