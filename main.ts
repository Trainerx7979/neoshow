input.onGesture(Gesture.TiltLeft, function () {
    MoveL_R = -1
})
input.onGesture(Gesture.ScreenUp, function () {
    MoveL_R = 0
})
input.onGesture(Gesture.TiltRight, function () {
    MoveL_R = 1
})
let Frame = 0
let MoveL_R = 0
let strip = neopixel.create(DigitalPin.P0, 112, NeoPixelMode.RGB)
strip.setBrightness(255)
for (let index = 0; index < 15; index++) {
    strip.showRainbow(1, 360)
}
basic.showIcon(IconNames.Skull)
let zeroPitch = input.rotation(Rotation.Pitch)
let zeroRoll = input.rotation(Rotation.Roll)
let LEDs = 30
strip.clear()
for (let index = 0; index <= 5; index++) {
    strip.setPixelColor(Math.constrain(LEDs + index, 0, 112), neopixel.rgb(Math.map(index, 0, 5, 65, 255), 0, Math.map(index, 0, 5, 255, 65)))
    strip.setPixelColor(Math.constrain(LEDs - index, 0, 112), neopixel.rgb(Math.map(index, 0, 5, 65, 255), 0, Math.map(index, 0, 5, 255, 65)))
}
strip.setPixelColor(LEDs, neopixel.rgb(255, 255, 255))
strip.show()
input.setAccelerometerRange(AcceleratorRange.OneG)
led.setDisplayMode(DisplayMode.Greyscale)
basic.forever(function () {
    strip.clear()
    if (MoveL_R == -1) {
        LEDs = Math.constrain(LEDs - 2, 0, 112)
    } else if (MoveL_R == 1) {
        LEDs = Math.constrain(LEDs + 2, 0, 112)
    }
    if (LEDs == 0 && MoveL_R == -1) {
        LEDs = 112
    } else if (LEDs == 112 && MoveL_R == 1) {
        LEDs = 0
    }
    Frame = randint(0, 7)
    for (let index = 0; index <= 10; index++) {
        strip.setPixelColor(Math.constrain(LEDs + index, 0, 112), neopixel.rgb(0, 0, Math.map(index, 0, 10, 255, 65)))
        strip.setPixelColor(Math.constrain(LEDs - index, 0, 112), neopixel.rgb(0, 0, Math.map(index, 0, 10, 255, 65)))
        strip.show()
    }
    strip.setPixelColor(LEDs, neopixel.rgb(255, 255, 255))
    if (Frame == 0) {
        images.createImage(`
            . # . # .
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            `).showImage(0)
    } else if (Frame == 1) {
        images.createImage(`
            . # . # .
            . . . . .
            . # # # .
            . # # # .
            . . . . .
            `).showImage(0)
    } else if (Frame == 2) {
        images.createImage(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            `).showImage(0)
    } else if (Frame == 3) {
        images.createImage(`
            . # . # .
            . . . . .
            . # # . .
            # # # # .
            . . . . .
            `).showImage(0)
    } else if (Frame == 4) {
        images.createImage(`
            . # . # .
            . . . . .
            . . # # .
            . # # # #
            . . . . .
            `).showImage(0)
    } else if (Frame == 5) {
        images.createImage(`
            . # . # .
            . . . . .
            . . . . .
            . # # . .
            . # # # .
            `).showImage(0)
    } else if (Frame == 6) {
        images.createImage(`
            . # . # .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `).showImage(0)
    } else {
        images.createImage(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            . # # . .
            `).showImage(0)
    }
})
