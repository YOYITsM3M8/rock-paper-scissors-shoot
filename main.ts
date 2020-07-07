input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 20)
    if (hand < 7 && hand > 0) {
        basic.showLeds(`
            # # . . .
            # # # . .
            # # # # .
            # # # # .
            # # # # .
            `)
    } else if (hand < 13 && hand > 7) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    basic.pause(1000)
    basic.clearScreen()
})
let hand = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    # # . . .
    # # # . .
    # # # # .
    # # # # .
    # # # # .
    `)
basic.showLeds(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.clearScreen()
basic.showString("SHOOT!")
basic.showString("Shake to Play")
