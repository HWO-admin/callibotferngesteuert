let kanal = 7
radio.setGroup(7)
basic.showNumber(kanal)
basic.forever(function () {
    let y = 0
    let x = 0
    if (x < 0) {
        if (y < 0) {
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Math.abs(x) + y)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, Math.abs(x))
        } else {
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, Math.abs(x) - y)
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, Math.abs(x))
        }
    }
    if (x > 0) {
        if (y > 0) {
            calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, Math.abs(x) + y)
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, Math.abs(x))
        } else {
            calliBot2.motor(C2Motor.rechts, C2Dir.rueckwaerts, Math.abs(x) - y)
            calliBot2.motor(C2Motor.links, C2Dir.rueckwaerts, Math.abs(x))
        }
    }
})
