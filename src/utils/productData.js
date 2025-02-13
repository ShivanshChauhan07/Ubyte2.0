const productData = [
  {
    id: 1,
    name: "STM32WB55CGU6 Evaluation Board V1.0",
    fullName: "",
    price: 7,
    shortDesc:
      "The STM32WB55CGU6 Evaluation Board is a hardware platform based on the STM32WB55CGU6 microcontroller, designed for IoT and embedded system applications. It features Bluetooth 5.0 connectivity, USB Type-C interface, onboard debugging, and expansion headers for external peripherals.",
    desc: {
      intro:
        "The STM32WB55CGU6 Evaluation Board is a high-performance development platform designed for IoT, wireless communication, and embedded system applications. It is based on the STM32WB55CGU6 microcontroller, which integrates dual-core processing, Bluetooth 5.0 connectivity, and various peripheral interfaces.",
      features: [
        {
          title: "Microcontroller & Processing Power",
          desc: [
            "MCU: STM32WB55CGU6",
            "Architecture: Dual-core ARM Cortex-M4 (main processor) and Cortex-M0+ (wireless processor)",
            "Operating Frequency: Up to 64 MHz (M4) and 32 MHz (M0+)",
            "Flash Memory: 1 MB",
            "RAM: 256 KB",
          ],
        },
        {
          title: "Wireless Communication",
          desc: [
            "Bluetooth 5.0 & BLE (Low Energy)",
            "Supports LE 2M, Long Range (LE Coded PHY), and Bluetooth Mesh",
            "Integrated RF transceiver with onboard PCB antenna and U.FL connector for an external antenna",
          ],
        },
        {
          title: "Power & Voltage Management",
          desc: [
            "Operating Voltage: 3.3V",
            "Power Input Options: USB Type-C (5V) – Primary power source , 5V Expansion Header – Secondary power source",
            "Power Regulation: Integrated voltage regulators for stable operation",
            "Low-Power Modes: Supports multiple power-saving modes for battery-operated applications",
          ],
        },
        {
          title: "Peripheral Interfaces & Connectivity",
          desc: [
            "USB 2.0 Full-Speed Interface (for communication and firmware updates)",
            {
              "Debugging & Programming:": [
                "SWD (Serial Wire Debug) with onboard ST-Link V2-1 debugger",
                "Support for SEGGER J-Link and external debuggers",
              ],
            },
            {
              "Expansion Headers:": [
                "Two 14-pin headers for external peripheral connections",
                "Supports SPI, I2C, UART, PWM, ADC, and DAC",
              ],
            },
          ],
        },
        {
          title: "Clock & Timing Features",
          desc: [
            "High-Speed Clock: 32 MHz main crystal oscillator",
            "Real-Time Clock (RTC): 32.768 kHz low-power crystal",
            "Internal Clock Options: Multiple PLL configurations for precise timing",
          ],
        },
        {
          title: "Indicators & User Controls",
          desc: [
            {
              "LED Indicators:": [
                "Power LED",
                "Status LED (programmable for debugging)",
                "User-controllable LED",
              ],
            },
            {
              "Push Buttons:": [
                "Reset Button",
                "User Button for input testing",
              ],
            },
          ],
        },
        {
          title: "Security Features",
          desc: [
            "Secure Boot & Firmware Protection",
            "AES-128/256 Encryption Engine",
            "True Random Number Generator (TRNG)",
            "Secure Firmware Updates via USB",
          ],
        },
        {
          title: "Applications",
          desc: [
            "IoT and Smart Home Automation",
            "Industrial Wireless Control Systems",
            "Wearable and Battery-Powered Gadgets",
            "Medical & Health Monitoring Devices",
          ],
        },
      ],
    },
    img: "/shop/Best1.png",
    images: [
      "/productPage/STM/Best1.png",
      "/productPage/STM/2.png",
      "/productPage/STM/3.png",
      "/productPage/STM/4.png",
      "/productPage/STM/5.png",
      "/productPage/STM/6.png",
    ],
    choose: {
      "Why Choose This Evaluation Board?": [
        "Optimized for IoT and wireless applications",
        "Dual-core architecture for efficient power and performance",
        "Integrated BLE 5.0 and secure connectivity options",
        "Expandable and easy-to-use with various peripherals",
        "Low power consumption for battery-based projects",
      ],
    },
    endDesc:
      "This evaluation board is a perfect choice for developers and engineers working on embedded systems, wireless communication, and IoT applications.",
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1739192627/Ubyte/STM32WB55CGU6_Evaluation_Board_Documentation_gqw4aq.pdf",
  },
  {
    id: 2,
    name: "SmartWheels V1 Pro",
    fullName:
      "SmartWheels V1 Pro – Advanced Automotive Control and Monitoring System",
    price: 290,
    shortDesc:
      "SmartWheels V1 Pro is an advanced automotive control and monitoring system with motor control, CAN/LIN communication, power management, and cloud connectivity—ideal for smart vehicles and IoT-based applications.",
    desc: {
      intro:
        "Introducing SmartWheels V1 Pro, a cutting-edge hardware platform designed for modern automotive applications. This robust and feature-rich controller integrates high-performance motor control, power management, communication interfaces, and cloud connectivity, making it an ideal solution for smart vehicle systems, fleet management, industrial automation, and IoT-based automotive projects.",
      features: [
        {
          title: "Key Features and Specifications",
          desc: [
            {
              "Powerful Processing & Connectivity": [
                "Powered by an ESP32 microcontroller with Wi-Fi and Bluetooth capabilities for seamless wireless communication.",
                "Includes an 80-pin automotive connector, USB Type-C (JTAG) debugging, and SEGGER J-Link support for advanced programming and debugging.",
              ],
            },
            {
              "Versatile Power Management": [
                "High-efficiency buck converters (5V, 12V) and an AMS1117 3.3V LDO regulator for reliable power delivery.",
                "Input protection features including reverse polarity protection, transient voltage suppression (TVS), and surge protection, ensuring stable operation across a 6V-36V voltage range.",
              ],
            },
            {
              "Advanced Motor Control (H-Bridge Driver)": [
                "Equipped with the DRV8874 H-Bridge motor driver for precise motor control with integrated current sensing and regulation.",
                "Features overcurrent, undervoltage, and thermal protection for enhanced reliability.",
              ],
            },
            {
              "Comprehensive Communication Interfaces": [
                "Isolated & Non-Isolated CAN Transceivers :- Supports ISO 11898 standard, high-speed data rates up to 1 Mbps, and AEC-Q100 qualification for vehicle networking. ",
                "Dual LIN Transceivers :- Ensures seamless integration with LIN 2.2A and ISO 17987-4:2016 compliant devices, essential for automotive subsystems.",
                "High-Speed Digital Inputs & Analog Inputs :- Adjustable voltage thresholds, transient protection, and 12-bit ADC resolution, allowing effective handling of various sensor inputs. ",
              ],
            },
            {
              "Cloud-Enabled Monitoring & Diagnostics": [
                "The INA237 power monitoring IC tracks input voltage, current consumption, and power behavior in real time.",
                "Data can be transmitted to the cloud for remote diagnostics, predictive maintenance, and power anomaly detection.",
              ],
            },
            {
              "Reliable Storage & Data Logging": [
                "Two high-voltage relay outputs (5A, 277VAC/30VDC) for extended control capabilities.",
                "Multiple PWM channels for precise actuator and motor control.",
              ],
            },
            {
              "Relay Control & Expandability": [
                "Includes W25Q64 (64Mbit) SPI Flash memory and M24C04 (4KB EEPROM) for robust data logging of critical operational parameters.",
              ],
            },
            {
              "Built-in Alarm System": [
                "A 4kHz passive buzzer provides audible alerts for alarms and user feedback.",
              ],
            },
          ],
        },
      ],
    },
    img: "/shop/Best2.png",
    images: [
      "/productPage/Smart/Best1.png",
      "/productPage/Smart/2.png",
      "/productPage/Smart/3.png",
      "/productPage/Smart/4.png",
      "/productPage/Smart/5.png",
      "/productPage/Smart/6.jpg",
    ],
    choose: {
      "Why Choose SmartWheels V1 Pro?": [
        "Designed for automotive and industrial-grade applications",
        "Robust build quality and high-voltage protection",
        "Supports IoT connectivity for cloud-based applications",
        "Multiple control and monitoring features in one compact package",
      ],
    },
    endDesc:
      "Upgrade your automotive or industrial automation project today with SmartWheels V1 Pro!",
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1739192666/Ubyte/SmartWheel_V1_Pro_Documentation_rldyva.pdf",
  },
  {
    id: 3,
    name: "Quad Channel USB to UART Converter",
    fullName: "",
    price: 10,
    shortDesc:
      "The Quad Channel USB-to-UART Converter is a compact and efficient interface that enables seamless USB-to-serial communication with four independent UART channels. It features an ESP32 auto-boot mode circuit. With USB Type-C power input, EEPROM storage, and flexible voltage selection (1.8V, 3.3V, 5V), it is ideal for embedded development and industrial applications.",
    desc: {
      intro:
        "The Quad Channel USB-to-UART Converter is a versatile and high-performance interface designed for applications requiring multiple UART connections over a USB interface. It integrates the XR21V1414IM48TR-F USB-to-Quad UART bridge, providing four independent serial channels with adjustable voltage levels (1.8V, 3.3V, and 5V).",
      features: [
        {
          title: "Key Features:",
          desc: [
            "USB Type-C Interface – Provides power and high-speed data communication.",
            "Quad UART Bridge (XR21V1414IM48TR-F) – Converts USB data into four UART channels, ensuring efficient serial communication.",
            "Voltage Level Shifters – Supports multiple logic levels for broad device compatibility.",
            "Integrated EEPROM (M24C02-WMN6TP) – Stores USB configuration settings for consistent operation.",
            "ESP32 Auto-Boot Support – Dedicated programmable Channel B with boot/reset controls for ESP32 development.",
            "Multiple Power Domains – Includes LDO regulators for 5V, 3.3V, and 1.8V operation.",
            "LED Indicators – Status LEDs for power, UART activity, and ESP32 boot/reset functions.",
            "Modular Voltage Selection – Allows independent voltage control for each channel.",
          ],
        },
      ],
    },
    img: "/shop/Best3.png",
    images: [
      "/productPage/Quad/Best1.png",
      "/productPage/Quad/2.png",
      "/productPage/Quad/3.png",
      "/productPage/Quad/4.png",
      "/productPage/Quad/5.png",
      "/productPage/Quad/6.png",
    ],
    choose: {
      "Applications:": [
        "Embedded System Development",
        "ESP32 Firmware Programming",
        "Industrial Automation",
        "IoT and Smart Device Prototyping",
        "Multi-UART Debugging & Monitoring",
      ],
    },
    endDesc:
      "This converter offers robust electrical protection, modular design, and a reliable USB-to-serial communication solution for developers and industrial users alike.",
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1739191460/Ubyte/QuadDatasheet_aztbm1.pdf",
  },
];

export default productData;
