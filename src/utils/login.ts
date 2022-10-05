export const emailValidator = (email: string) => {
	const re = /\S+@\S+\.\S+/;

	if (!email || email.length <= 0) return "Ingrese un email";
	if (!re.test(email)) return "Ingrese un email valido";

	return "";
};

export const passwordValidator = (password: string) => {
	if (!password || password.length <= 0) return "Ingrese su contraseña";

	return "";
};