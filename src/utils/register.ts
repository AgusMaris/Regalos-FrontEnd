export const emailValidator = (email: string) => {
	const re = /\S+@\S+\.\S+/;

	if (!email || email.length <= 0) return "Ingrese un email";
	if (!re.test(email)) return "Ingrese un email valido";

	return "";
};

export const passwordValidator = (password: string) => {
	if (!password || password.length <= 4) return "Ingrese su contraseña";

	return "";
};

export const confirmpasswordValidator = (confirmpassword: string, password: string) => {
	if (!confirmpassword || confirmpassword.length <= 4 || confirmpassword !== password) return "Ingrese su contraseña";

	return "";
};


