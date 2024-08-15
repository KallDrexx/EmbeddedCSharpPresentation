---
theme: seriph 
background: /intro-background.avif
class: text-center
highlighter: shiki
lineNumbers: false
info: |
drawings:
  persist: false
# transition: slide-left
css: unocss
colorSchema: 'light'
title: Embedded Development 
---

# Embedded Development 

---

# What Is Embedded Development?

* Discipline of software development focused on low level hardware
* Direct integration with hardware
* Usually lower specs than you are used to
* Single function systems
* Real time systems

<!-- 
  * Assembly programming != embedded, OS still handles a lot for you (e.g. virtual memory locations) 
  * Real time deadlines
-->

---
layout: two-cols
---

# Arduino

* Arduino originally created for teaching in 2005
* Low cost and simple tooling stack
* Mostly used in hobbyist space
* Arduinos usually 16Mhz, 2KB RAM

::right::
![Arduino Board](/arduino.webp)

---
layout: two-cols
---

# ESP32

* ESP32 arrived in 2016
* ARM CPU 160Mhz+, 320KB+ RAM
* Wifi/Bluetooth
* Can be integrated easily in custom PCBs
* 33 Input/Output Pins
* Has several variants with different capabilities

::right::
<img src="/esp32_chip.jpg" style="max-height:40%">

---

# 8 and 16-Bit Microcontrollers

* Can operate in the low double digit Mhz range
* Lower complexity allows for better specialization of peripheral support
* Extreme reliability
* Very low power consumption
* Used everywhere, from toys to cars to rockets.

---

# What About Raspberry Pi?

* 1Ghz+ CPU / 512MB - 4GB RAM
* Runs Linux
* Not easily integrated into custom hardware
* Normal operating systems are not real time

---

# Peripherals

&nbsp;

![sensors](/sensors.jpg)

---

# Wiring Things Up

&nbsp;

![breadboard](/8bit-computer.jpg)

---

# Schematics

<img src="/microgpu_schematic.svg" style="max-height: 400px" />

---
layout: two-cols
---

# PCB Design

<img src="/mgpu-wireframe.png" style="width: 90%" />

::right::

<br><br>
<img src="/mgpu-render.png" style="width: 90%" />

---

# Physical PCBs

<img src="/mgpu-pcbs.jpg" style="max-height: 400px" />

---
layout: two-cols
---

# Physical PCBs

<img src="/mgpu-assembled.jpg" style="max-height: 400px" />

::right::
&nbsp;

<video src="/mgpu-active.mp4" type="video/mp4" autoplay loop style="max-height: 400px"></video>

---

# Embedded Programming Languages

* C / C++ are the gold standard
* Rust
* Python
* C#
* Typescript (Microsoft DeviceScript)

---

# The Meadow Microcontroller

* Supports C#
* 216Mhz, 32MB of RAM
* On board wifi and bluetooth
* Visual Studio integration
* Composable abstractions to make Embedded easy
* Over 700 drivers for popular peripherals
* Mostly open source
  * https://github.com/WildernessLabs/

---
layout: two-cols
---

# Blinking an LED
&nbsp;

<video src="/e01demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e01code.png)

---

# Inputs and Outputs
&nbsp;

<!-- ![pinout](Meadow_F7v2_Micro_Pinout.svg) -->
<img src="/Meadow_F7v2_Micro_Pinout.svg" style="max-height:80%" />

---
layout: two-cols
---

# Simple I/O Example
&nbsp;

<video src="/e02demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e02code.png)


---
layout: two-cols
---

# Simple I/O Example
&nbsp;

<!-- <video src="/e02demo.mp4" type="video/mp4" autoplay loop></video> -->
* Taking better advantage of C# with events!


::right::

![code](/e02code-2.png)

---

# Analog Vs Digital Signals
&nbsp;

<img src="/What-are-Analog-and-Digital-Signals.webp" style="max-height:80%" />

---
layout: two-cols
---

# Analog Input Example
&nbsp;

<video src="/e03demo.mp4" type="video/mp4" autoplay loop></video>

::right::
![code](/e03code.png)


---
layout: two-cols
---

# Motor Example
&nbsp;

<video src="/e04demo.mp4" type="video/mp4" autoplay loop></video>

::right::
<br />
<img src="/e04code.png" />

---
layout: two-cols
---

# Seven Segment Displays
&nbsp;

<img src="/e05code-1.png" style="max-height:200px" />
<video src="/e05demo.mp4" type="video/mp4" autoplay loop></video>

::right::
<img src="/e05code-2.png" style="max-height:500px" />

---
layout: two-cols
---

# Extra Functionality

* What if we want more seven segment displays?
* Peripherals to the rescue!

::right::
![instant pot](/InstantPot.jpg)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Send one bit at a time
* How do we communicate two bits with the same value?

::right::
![communication](/communication-1.png)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Latch pin signals to peripheral it can read
* Peripheral can only trust the value when latch is active
* How do we know when the peripheral has read the bit?
* How do we read a value?

::right::
![communication](/communication-2.png)

---
layout: two-cols
---

# How To Communicate With A Peripheral

* Slow and complicated
* Input and output latches not necessarily syncrhonized
* No clear signal on either end to start
* Not scalable to more peripherals

::right::
![communication](/communication-3.png)

---
layout: two-cols
---

# Serial Peripheral Interface (SPI)

* MOSI/COPI - Controller Output, Peripheral Input
  * Data to be sent to peripheral
* MISO/CIPO - Controller Input, Peripheral Output
  * Data to be received from peripheral
* CS - Chip Select
  * Specifies which peripheral to talk to
* SCLK - Clock Signal
  * Synchronizes controller and peripeherals


::right:: 
![spi](/spi_single.png)
&nbsp;

![spi_signal](/spi_signal.png)

---

# Multiple SPI Devices

&nbsp;

![spi slaves](/spi_slaves.png)

---
layout: two-cols
---

# I<sup>2</sup>C

* SDA - Serial Data Line
* SCL - Serial Clock Line
* Many controllers and peripherals with 2 wires
* Each peripheral has a unique address!
  * Controller must know the correct address
* No simultaneous read and write
* Slower than SPI


::right::
![i2c](/I2C-Block-Diagram.jpg)

![i2c frames](/i2c-frames.jpg)

---
layout: two-cols
---

# CAN Communication Bus

* Controller Area Network
* Wiring setup used in cars
* Any number of controllers

::right::
<img src="/can-bus.png" />

<br />
<img src="/can-bus-frames.png" />

---

# Debugging
&nbsp;

<img src="/SPI_02_ZoomIn.png" style="max-height:400px" />

---
layout: two-cols
---

# Expanding I/O Pins
&nbsp;

<video src="/e06demo.mp4" type="video/mp4" autoplay loop></video>

::right::
<img src="/e06code.png" />

---
layout: two-cols
---

# 14 Segment Display
&nbsp;

<img src="/e07demo.jpg" />

::right::
<img src="/e07code.png" style="max-height:500px" />

--- 
layout: two-cols
---

# Room Sensor Reading
&nbsp;

<img src="/e08demo.jpg" />

::right::
<img src="/e08code.png" />

---

# What Can You Do?

&nbsp;

<video src="/rolling_game.mp4" type="video/mp4" autoplay loop style="max-height:400px" ></video>

---

# What Can You Do?

<img src="/defcon-badge.png" style="max-height:400px"/>

---

# What Can You Do?

&nbsp;

<img src="/thermostat.webp" style="max-height:300px" />

---

# Thank You