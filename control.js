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

const TEST = new GPIO(3, "out");

TEST.writeSync(0);