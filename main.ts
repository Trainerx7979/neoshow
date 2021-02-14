let Frame = 0
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.setBrightness(255)
for (let index = 0; index < 5; index++) {
    strip.showRainbow(1, 360)
}
basic.showIcon(IconNames.Skull)
let zeroPitch = input.rotation(Rotation.Pitch)
let zeroRoll = input.rotation(Rotation.Roll)
let LEDs = 12
strip.clear()
for (let index = 0; index <= 5; index++) {
    strip.setPixelColor(Math.constrain(LEDs + index, 0, 24), neopixel.rgb(0, 0, Math.map(index, 0, 5, 255, 65)))
    strip.setPixelColor(Math.constrain(LEDs - index, 0, 24), neopixel.rgb(0, 0, Math.map(index, 0, 5, 255, 65)))
}
strip.setPixelColor(LEDs, neopixel.rgb(255, 255, 255))
strip.show()
led.setDisplayMode(DisplayMode.Greyscale)
basic.forever(function () {
    Frame = randint(0, 7)
    if (input.rotation(Rotation.Pitch) < zeroPitch) {
        LEDs = LEDs - Math.constrain(LEDs - 1, 0, 24)
    } else if (input.rotation(Rotation.Pitch) > zeroPitch) {
        LEDs = LEDs + Math.constrain(LEDs + 1, 0, 24)
    }
    if (input.rotation(Rotation.Roll) < zeroRoll) {
        LEDs = Math.constrain(LEDs - 1, 0, 24)
    } else if (input.rotation(Rotation.Roll) > zeroRoll) {
        LEDs = Math.constrain(LEDs + 1, 0, 24)
    }
    strip.clear()
    for (let index = 0; index <= 5; index++) {
        strip.setPixelColor(Math.constrain(LEDs + index, 0, 24), neopixel.rgb(0, 0, Math.map(index, 0, 5, 255, 65)))
        strip.setPixelColor(Math.constrain(LEDs - index, 0, 24), neopixel.rgb(0, 0, Math.map(index, 0, 5, 255, 65)))
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
