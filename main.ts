input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    A += 1
    senast = 1
})
input.onButtonPressed(Button.AB, function () {
    led.stopAnimation()
    if (senast == 1) {
        A += -1
    } else if (senast == 2) {
        B += -1
    }
})
input.onButtonPressed(Button.B, function () {
    led.stopAnimation()
    B += 1
    senast = 2
})
let senast = 0
let A = 0
let B = 0
senast = 0
basic.forever(function () {
    basic.showString("" + A + "-" + B)
    basic.pause(500)
})
