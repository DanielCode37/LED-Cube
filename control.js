const GPIO = require("onoff").Gpio;

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
	speed: 1,
	data: [
		[
			[0, 0, 0],
			[1, 0, 0],
		]
	]
}

function execute() {

}




TEST.writeSync(0);
