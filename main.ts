input.onButtonPressed(Button.A, function () {
    if (state == 0) {
        state = 1
    } else {
        state = 0
    }
})
input.onButtonPressed(Button.B, function () {
    state = 0
    second = 10
})
let state = 0
let second = 0
second = 10
state = 0
basic.forever(function () {
    if (state == 1) {
        if (second > 0) {
            second += -1
            basic.showNumber(second)
            basic.pause(1000)
            if (second == 0) {
                state = 0
                basic.pause(2000)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    . . . . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # # . # #
                    . # # # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . # # # .
                    # # . # #
                    # . . . #
                    # # . # #
                    . # # # .
                    `)
                basic.showLeds(`
                    # # . # #
                    # . . . #
                    . . . . .
                    # . . . #
                    # # . # #
                    `)
            }
        }
    }
})
