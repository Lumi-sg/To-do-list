import JustValidate from "just-validate";

const dataValidation = () => {
	const validation = new JustValidate("#todoForm", {
		focusInvalidField: true,
		errorFieldCssClass: "is-invalid",
		errorLabelStyle: {
			fontSize: "18px",
			color: "#dc3545",
		},
	});

	validation
		.addField("#projectName", [
			{
				rule: "required",
				errorMessage: "Please enter a project name",
			},
		])
		.addField("#description", [
			{
				rule: "required",
				errorMessage: "Please enter a description",
			},
		])
		.addField("#task1", [
			{
				rule: "required",
				errorMessage: "Please enter at least one task",
			},
		])
		.onSuccess(() => {
			console.log("Validation success");
			return true;
		})
		.onFail((fields) => {
			console.log("Validation failed", fields);
			return false;
		});
};

export { dataValidation };
