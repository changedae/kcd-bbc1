pins.digitalWritePin(DigitalPin.P9, 0)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P4) == 1) {
        pins.digitalWritePin(DigitalPin.P9, 1)
        basic.showString("" + (pins.digitalReadPin(DigitalPin.P4)))
        basic.pause(1000)
    } else {
        pins.digitalWritePin(DigitalPin.P9, 0)
        basic.showString("" + (pins.digitalReadPin(DigitalPin.P4)))
        basic.pause(1000)
    }
})
