const dataValidation = (title, description, task1, task2, task3, task4) => {
	if (
		!title.value ||
		!description.value ||
		!task1.value ||
		!task2.value ||
		!task3.value ||
		!task4.value
	) {
		console.log("validation failed");
		return false;
	}
	console.log("validation succeeded");
	return true;
};

export { dataValidation };
