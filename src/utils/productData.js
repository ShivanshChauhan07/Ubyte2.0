const productData = [
  {
    id: 1,
    name: "STM32WB55CGU6 Evaluation Board V1.0",
    fullName: "",
    price: 6.9,
    indiaPrice: 599,
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
    img: "/productPage/STM/Best1.png",
    images: [
      "/productPage/STM/Best1.png",
      "/productPage/STM/2.png",
      "/productPage/STM/3.png",
      "/productPage/STM/4.png",
      "/productPage/STM/5.png",
      "/productPage/STM/6.png",
      "/productPage/STM/7.png",
      "/productPage/STM/8.png",
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
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1740321140/Ubyte2.0/STM32WB55CGU6_Documentation_gz1srx.pdf",
    infra: "https://electronicsinfra.com/product/stm32wb55-eval-board/",
    mart: "https://www.indiamart.com/proddetail/stm32wb55cgu6-evaluation-board-2855821080788.html?pos=5&kwd=stm32wb55%20eval&tags=||||8769.508|Price|product|||NA|rsf:gd-|-res:RC2|ktp:N0|stype:attr=1|mtp:S|wc:2|qr_nm:gd|com-cf:nl|ptrs:na|mc:177218|cat:819|qry_typ:P|lang:en|flavl:0-1|cs:8913|v=4",
  },
  {
    id: 2,
    name: "SmartWheels V1 Pro (Including Enclosure)",
    fullName:
      "SmartWheels V1 Pro – Advanced Automotive Control and Monitoring System",
    price: 290,
    indiaPrice: 25130,
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
              "1. PERIPHERALS ": [
                "- 64Mb Flash",
                "- 4KB EEPROM",
                "- Passive Buzzer",
                "- RGB LED",
                "- Segger J-Link Debugger (Only available on evaluation samples)",
                "- Onboard Power Monitoring ",
              ],
            },
            {
              "2. DIGITAL AND POWER OUTPUTS": [
                "- 4X Low Side PWM Digital Output (36V 300mA Max)",
                "- 4X High Side PWM Adjustable Digital Output (5V, 12V and VBAT 300mA Max)",
                "- 2X High Side Power Output (3A Each)",
                "- 2X Low Side Power Output (3A Each)",
                "- 1X HBridge Output (3A)",
              ],
            },
            {
              "3. DIGITAL INPUTS": [
                "- 4X PU High Speed Digital Input (VBAT) ",
                "- 4X PU High Speed Digital Input (Adjustable 5V, 12V & VBAT)",
                "- 4X PD High Speed Digital Input (0-36V) ",
                "- 4X PD High Speed Digital Input (0-5V) ",
                "- 4X PD Digital Input (0-12V) ",
              ],
            },
            {
              "4. ANALOG INPUTS": [
                "- 4X 0-10V Analog Voltage Inputs",
                "- 4X 0-5V Analog Voltage Inputs",
                "- 2X 4-20mA Analog Current Loop Inputs",
              ],
            },
            {
              "5. ANALOG OUTPUTS": [
                "- 2x 4–20mA Isolated Analog Current Loop Transmitters",
                "- Data can be transmitted to the cloud for remote diagnostics, predictive maintenance, and power anomaly detection.",
              ],
            },
            {
              "6. WIRED COMMUNICATION": [
                "- Isolated CAN (Up to 1MBPS)",
                "- CAN FD (Up to 5MBPS)",
                "- Standard CAN (Up to 1MBPS)",
                "- LIN 2.2A (Upto 20KBd) ",
              ],
            },
            {
              "7. POWER SUPPLY": [
                "- Input: 10.8V to 36V With Reverse Polarity Protection, Reverse Current Blocking and Transient Voltage Protection",
              ],
            },
            {
              "8. WIRELESS COMMUNICATION": [
                "- ESP32 C3 Mini Wi-Fi & BLE",
                "- Optional 4G/2G + GPS (Neoway N58)",
              ],
            },
          ],
        },
      ],
    },
    img: "/productPage/Smart/Best.png",
    images: [
      "/productPage/Smart/Best.png",
      "/productPage/Smart/2.png",
      "/productPage/Smart/3.png",
      "/productPage/Smart/4.jpg",
      "/productPage/Smart/5.jpg",
      "/productPage/Smart/6.png",
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
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1743097555/Ubyte2.0/SmartWheels_V1_Pro_Part_1.docx_compressed_n9pcw8.pdf",
    infra: "",
    mart: "https://www.indiamart.com/proddetail/smartwheels-v1-pro-including-enclosure-2855818993255.html?pos=9&kwd=smart%20wheels%20v1%20pro&tags=BB||||31.840384|Price|product||ghaziabad|NA|rsf:gd-|-res:RC3|ktp:N0|stype:attr=1|mtp:S|wc:3|cq:ghaziabad|qr_nm:gl-gd|cs:15483|com-cf:nl|ptrs:na|mc:118962|cat:29|qry_typ:P|lang:en|rtn:1-0-0-0-4-5-0|tyr:2|qrd:250326|mrd:250330|prdt:250330|v=4&crs=bp ",
  },
  {
    id: 3,
    name: "Quad Channel USB to UART Converter",
    fullName: "",
    price: 8.69,
    indiaPrice: 749,
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
            "Quad UART Bridge – Converts USB data into four UART channels, ensuring efficient serial communication.",
            "Voltage Level Shifters – Supports multiple logic levels for broad device compatibility.",
            "Integrated EEPROM – Stores USB configuration settings for consistent operation.",
            "ESP32 Auto-Boot Support – Dedicated programmable Channel B with boot/reset controls for ESP32 development.",
            "Multiple Power Domains – Includes LDO regulators for 5V, 3.3V, and 1.8V operation.",
            "LED Indicators – Status LEDs for power, UART activity, and ESP32 boot/reset functions.",
            "Modular Voltage Selection – Allows independent voltage control for each channel.",
          ],
        },
      ],
    },
    img: "/productPage/Quad/Best1.png",
    images: [
      "/productPage/Quad/Best1.png",
      "/productPage/Quad/2.png",
      "/productPage/Quad/3.png",
      "/productPage/Quad/4.png",
      "/productPage/Quad/5.png",
      "/productPage/Quad/6.png",
      "/productPage/Quad/7.png",
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
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1740321242/Ubyte2.0/Quad_channel_Documentation_y2gnsz.pdf",
    infra:
      "https://electronicsinfra.com/product/quad-channel-usb-to-uart-converter/",
    mart: "https://www.indiamart.com/proddetail/quad-channel-usb-to-uart-convertor-2855820441030.html",
  },
  {
    id: 4,
    name: "SmartWheels EV2",
    fullName: "",
    price: 52.54,
    indiaPrice: 4500,
    shortDesc:
      "The SmartWheels EV2 is a low-cost development board featuring the NXP S32K144UAT0VLLT microcontroller with ISO26262 ASIL Class B safety compliance. It includes an onboard Segger J-Link debugger, a Bosch BNO055 IMU sensor, and a CAN2.0B transceiver supporting CAN FD. The board offers switchable 3.3V and 5V logic levels, adjustable ADC reference voltage, and 74 GPIOs, making it flexible for prototyping.",
    desc: {
      intro:
        "The SmartWheels EV2 is a low cost development board based on the NXP S32K144UAT0VLLT microcontroller. The S32K144 offers functional safety compliance with ISO26262 ASIL Class B. The SmartWheels EV2 is equipped with onboard Segger J-Link Debugger along with CAN2.0B transceiver and Bosch BNO055 IMU sensor. This makes the SmartWheels EV2 a complete development package in itself. The SmartWheels EV2 also allows the user to switch between 3.3V and 5V logic along with the ability to change the ADC Reference voltage between 3.3V and 5V. It makes the SmartWheels EV2 extremely flexible for prototyping. The SmartWheels EV2 is made in a breadboard Compatible form factor offering 74 GPIOs for utilizing various peripherals of the S32K144 microcontroller. The board also integrated a RGB LED along with 2 push buttons.",
      features: [
        {
          title: "Key Features:",
          desc: [
            "NXP S32K144UAT0VLLT chipset",
            "Onboard Segger J-Link Debugger",
            "USB Type-C for power supply and debugging",
            "Bosch BNO055 IMU sensor",
            "USB to UART through Segger J-Link.",
            "CAN2.0B Transceiver supporting CAN FD with extended frame",
            "4KB EEPROM",
            "RGB LED",
            "Two User Push Buttons",
            "10P JTAG for external debugger",
            "8 MHz high-speed external oscillator (HSE)",
            "High-precision (3.3V ± 0.2%) voltage reference for ADC",
            "Switchable ADC reference voltage between 3.3V and 5V",
          ],
        },
      ],
    },
    img: "/productPage/SmartEv/Best.png",
    images: [
      "/productPage/SmartEv/Best.png",
      "/productPage/SmartEv/2.png",
      "/productPage/SmartEv/3.jpg",
      "/productPage/SmartEv/4.png",
      "/productPage/SmartEv/5.png",
      "/productPage/SmartEv/6.png",
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
    endDesc: "",
    pdf: "https://res.cloudinary.com/dvi4f7mfm/image/upload/v1743097548/Ubyte2.0/Ubyte_SmartWheels_EV2_Datasheet_compressed_1_z5psqx.pdf",
    infra: "",
    mart: "https://www.indiamart.com/proddetail/smartwheels-ev2-2856275841012.html?pos=1&kwd=smart%20wheels%20ev2&tags=BB||||31.840384|Price|product||ghaziabad|NA|rsf:gd-|-res:RC2|ktp:N0|stype:attr=1|mtp:Brn|wc:2|cq:ghaziabad|qr_nm:gl-gd|cs:15286|com-cf:nl|ptrs:na|mc:204255|cat:58|qry_typ:P|lang:en|rtn:2-0-0-0-3-4-1|tyr:2|qrd:250326|mrd:250330|prdt:250330|v=4",
  },
];

export default productData;
