const GPIO = require("onoff").Gpio;

// LAYERS
const LAYERS = [
	new GPIO(5, "out"),
	new GPIO(6, "out"),
	new GPIO(13, "out"),
	new GPIO(19, "out"),
]

// COLUMNS
const COLUMNS = [
	[new GPIO(12, "out"), new GPIO(16, "out"), new GPIO(20, "out"), new GPIO(21, "out")],
	[new GPIO(14, "out"), new GPIO(15, "out"), new GPIO(18, "out"), new GPIO(23, "out")],
	[new GPIO(24, "out"), new GPIO(25, "out"), new GPIO(8, "out"), new GPIO(7, "out")],
	[new GPIO(22, "out"), new GPIO(10, "out"), new GPIO(9, "out"), new GPIO(11, "out")],
]

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

main();
async function main() {
	LAYERS[0].writeSync(1);
	COLUMNS[0][0].writeSync(1);
	await sleep(1000);

	COLUMNS[0][0].writeSync(0);
	COLUMNS[0][1].writeSync(1);
	await sleep(1000);

	COLUMNS[0][1].writeSync(0);
	COLUMNS[1][0].writeSync(1);
	await sleep(1000);

	COLUMNS[1][0].writeSync(0);
	COLUMNS[1][1].writeSync(1);
	await sleep(1000);



	COLUMNS[1][1].writeSync(0);
	LAYERS[0].writeSync(0);



	LAYERS[1].writeSync(1);
	COLUMNS[0][0].writeSync(1);
	await sleep(1000);

	COLUMNS[0][0].writeSync(0);
	COLUMNS[0][1].writeSync(1);
	await sleep(1000);

	COLUMNS[0][1].writeSync(0);
	COLUMNS[1][0].writeSync(1);
	await sleep(1000);

	COLUMNS[1][0].writeSync(0);
	COLUMNS[1][1].writeSync(1);
	await sleep(1000);

	COLUMNS[1][1].writeSync(0);
	LAYERS[1].writeSync(0);
}