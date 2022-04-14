import { defineBootComponent } from "../BootHelper";
import { initSentry } from "../Items/Sentry";
import { extractJQuery } from "../Items/ExtractJQuery";
import { initAutoUpdater } from "../Items/AutoUpdater";
import { initAppFunctions } from "../Items/AppFunctions";
import { urlExchange } from "../Items/URLExchange";

export const coreStage = async () => {
	console.log("Beginning Core stage...");
	await defineBootComponent(initSentry);
	await defineBootComponent(urlExchange);
	await defineBootComponent(extractJQuery);
	await defineBootComponent(initAutoUpdater, typeof window.require !== "undefined");
	await defineBootComponent(initAppFunctions, typeof window.require !== "undefined");
}