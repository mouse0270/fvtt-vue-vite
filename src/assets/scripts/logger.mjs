import Module from "./module.mjs";

/**
 * Logs messages to the console based on the specified log type.
 *
 * @param {string} type - The type of log (e.g., 'log', 'warn', 'error').
 * @param {...any} args - The messages or data to be logged.
 * @returns {void}
 */
function log(type, ...args) {
	if (!Module?.flags?.logger?.enabled ?? true) return;
	console[type](`%c${Module.title}`,
		`background-color: ${Module?.flags?.logger?.background ?? '#d4d4d4'}; border-radius: 2px; color:  ${Module?.flags?.logger?.foreground ?? '#000'}; padding: 0.15rem 0.25rem;`,
	 	...args
	);
}

const timers = {};

/**
 * A logger object with various logging methods.
 * @namespace logger
 */
export const logger = {
	/**
	 * Logs the provided arguments as a log message.
	 * @memberof logger
	 * @function log
	 * @param {...any} args - The arguments to be logged.
	 */

	log: (...args) => log("log", ...args),

	/**
	 * Logs the provided arguments as an info message.
	 * @memberof logger
	 * @function info
	 * @param {...any} args - The arguments to be logged.
	 */
	info: (...args) => log("info", ...args),

	/**
	 * Logs the provided arguments as a warning message.
	 * @memberof logger
	 * @function warn
	 * @param {...any} args - The arguments to be logged.
	 */
	warn: (...args) => log("warn", ...args),

	/**
	 * Logs the provided arguments as an error message.
	 * @memberof logger
	 * @function error
	 * @param {...any} args - The arguments to be logged.
	 */
	error: (...args) => log("error", ...args),

	/**
	 * Logs the provided arguments as a debug message.
	 * @memberof logger
	 * @function debug
	 * @param {...any} args - The arguments to be logged.
	 * @description This method is usually filtered out from the browser console.
	 */
	debug: (...args) => log("debug", ...args),

	/**
	 * Measures the time taken for a specific operation.
	 * @memberof logger
	 * @function time
	 * @param {string} id - The identifier for the operation.
	 */
	time: (id) => {
		const time = timers?.[id] ?? performance.now();
		if (!timers[id]) timers[id] = time;
		else {
			logger.log(`${id.trim()}:`, performance.now() - time);
			delete timers[id];
		}
	}
}

export default logger;