import ModuleRaid from "moduleraid";
const mR = new ModuleRaid();
window.mR = mR;

export const extractJQuery = () => {
	try {
		let jQuery = mR.findConstructor("jQuery")[0][1];

		window.$ = jQuery;
		window.jQuery = jQuery;
	} catch (e) {
		throw "jQuery failed. This will break approximately... everything.";
	}
}