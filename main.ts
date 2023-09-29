/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophie
 * Created on: Sep 2023
 * This program controls LED through a pin
*/

// on start
basic.clearScreen()
basic.showIcon(IconNames.Heart)
basic.pause(1000)
pins.digitalWritePin(DigitalPin.P16, 0)

// Pin on
input.onButtonPressed(Button.A, function() {
  pins.digitalWritePin(DigitalPin.P16, 1)
  basic.showIcon(IconNames.Yes)
})

// Pin off
input.onButtonPressed(Button.B, function () {
  pins.digitalWritePin(DigitalPin.P16, 0)
  basic.showIcon(IconNames.No)
})
