"""
Created by: Sophie N
Created on: Sep 2023
This module is a Micro:bit MicroPython program
"""

from microbit import *

// setup
display.clear()
display.show(Image.HEART)

while true:
    // on
    if button_a.is_pressed():
        pin16.write_digital(1)
        display.show(image.YES)
    // off
    if button_b.is_pressed():
        pin16.write_digital(0)
        display.show(image.NO)
