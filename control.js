const GPIO = require("onoff").Gpio;
const fs = require("fs");

// GPIO.2
// GPIO.3
// GPIO.4
// GPIO.5 - Layer 1
// GPIO.6 - Layer 2
// GPIO.7 - RESERVED (3,4)
// GPIO.8 - RESERVED (3,3)
// GPIO.9 - RESERVED (4,3)
// GPIO.10 - RESERVED (4,2)
// GPIO.11 - RESERVED (4,4)
// GPIO.12 - (1,1)
// GPIO.13 - RESERVED (Layer 3)
// GPIO.14 - (2,1)
// GPIO.15 - (2,2)
// GPIO.16 - (1,2)
// GPIO.17
// GPIO.18 - RESERVED (2,3)
// GPIO.19 - RESERVED (Layer 4)
// GPIO.20 - RESERVED (1,3)
// GPIO.21 - RESERVED (1,4)
// GPIO.22 - RESERVED (4,1)
// GPIO.23 - RESERVED (2,4)
// GPIO.24 - RESERVED (3,1)
// GPIO.25 - RESERVED (3,2)
// GPIO.26
// GPIO.27

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

// DATA
const INPUT = {
	speed: 0.5,
	data: [
		[
			[0, 0, 0],
			[1, 0, 0],
		]
	]
}

function start(filename) {
	execute(JSON.parse(fs.readFileSync(`./files/${filename}.json`, "utf-8")));
}


/**
 * @param {{speed: number;data: number[][][];repeat: boolean}} program 
 */
function execute(program) {
	let i = 0;
	const interval = setInterval(() => {
		clearAll();

		if (program.data[i] == undefined) {
			clearInterval(interval);
			if (program.repeat) return execute(program);
			return;
		}

		for (const order of program.data[i]) {
			LAYERS[order[0]].writeSync(1);
			COLUMNS[order[1]][order[2]].writeSync(1);
		}

		i++;
	}, 1000 / program.speed);

}

function clearAll() {
	for (let x = 0; x < COLUMNS.length; x++) {
		for (let z = 0; z < COLUMNS[x].length; z++) {
			COLUMNS[x][z].writeSync(0);
		}
	}
}

module.exports = start;