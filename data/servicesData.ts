export interface SubService {
  title: string;
  icon: string;
  description: string;
  bgClass: string;
  spanClass: string;
  isDark?: boolean;
}

export interface CapabilityItem {
  title: string;
  description: string;
}

export interface MetricCard {
  value: string;
  label: string;
}

export interface CatalogCategory {
  title: string;
  items: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  badge: string;
  description: string;
  heroImage: string;
  subTitle: string;
  subTitleDescription: string;
  specializedSolutions: SubService[];
  breakdownTitle: string;
  breakdownDescription: string;
  breakdownImage: string;
  qualityStandard: string;
  capabilities: CapabilityItem[];
  metrics: MetricCard[];
  ctaTitle: string;
  ctaDescription: string;
  detailedCatalog: CatalogCategory[];
}

export const servicesData: Record<string, ServiceData> = {
  electrical: {
    id: "electrical",
    title: "Electrical Services & Grid Systems",
    badge: "Expertise / Power",
    description: "Providing heavy industrial power distribution grids, high-tension connections, and custom substation installations. We power high-stakes infrastructure across Sri Lanka.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Our Specialized Solutions",
    subTitleDescription: "Explore our comprehensive power engineering capabilities, designed for grid stability, safety compliance, and maximum efficiency.",
    specializedSolutions: [
      {
        title: "Substation Installation & Testing",
        icon: "electric_bolt",
        description: "IP-rated high-voltage substations, custom transformer integrations, protective earthing grids, and overhead transmission line tapping.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Power Factor Correction (PFC) Boards",
        icon: "monitoring",
        description: "Advanced capacitor bank panels that actively stabilize utility voltage, eliminate reactive power penalties, and optimize thermal loads.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Industrial Mains & Distribution",
        icon: "settings_input_component",
        description: "Heavy-duty mains distribution boards (MDBs), high-conductivity busbar trunks, and protective circuit switchgears.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Emergency Generator & Synchronized UPS",
        icon: "smart_toy",
        description: "Synchronized industrial generator panels and double-conversion online UPS setups for critical continuous load networks.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Electrical Safety Audits & Compliance",
        icon: "bolt",
        description: "Diagnostic verification of ground leakages, insulation levels, and lightning protection loops matching global standards.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "Substation & Heavy Power Distribution",
    breakdownDescription: "We engineer heavy-power grids from tapping to terminals. Adhering to Ceylon Electricity Board (CEB) and IEEE guidelines, our engineering guarantees clean voltage profile and thermal resilience under extreme peak requirements.",
    breakdownImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "ISO 9001:2015 & IEEE Compliant",
    capabilities: [
      {
        title: "CEB Certified Design",
        description: "Substations, earthing plans, and structural calculations fully signed off by chartered power engineering consultants."
      },
      {
        title: "Thermal Diagnostics",
        description: "Embedded infrared heat mapping of active contacts and busbar nodes to swap degrading connections before high-resistance faults."
      },
      {
        title: "Auto-Load Shedding Logic",
        description: "Dynamic priority control boards that automatically toggle auxiliary breakers to secure baseline operations during utility drops."
      }
    ],
    metrics: [
      { value: "0%", label: "Ground Leakage" },
      { value: "100%", label: "CEB Approval Rate" }
    ],
    ctaTitle: "Power Up Your Infrastructure?",
    ctaDescription: "Our chartered engineers are ready to conduct an on-site load analysis and draft an optimized grid connectivity plan for your expansion.",
    detailedCatalog: [
      {
        title: "Home & Building Wiring Services",
        items: [
          "New Home Wiring: Full concealed wiring installation - points, distribution board, and earthing",
          "DB Board Installation: MCB board, main switch, surge protection, and earthing system",
          "DB Board Upgrade: Replace legacy rewirable fuses with modern MCBs and RCDs",
          "Rewiring Old Homes: Strip and replace deteriorated rubber cables with PVC wiring",
          "Additional Points: New sockets, light points, fan points added to existing wiring",
          "Earthing System: Earth rod, conductor, inspection pit, and continuity testing",
          "Surge Protection (SPD): Surge protective device installation at the distribution board",
          "CEB New Connection: Application processing, CEB inspection preparation, meter wiring",
          "Apartment Block Wiring: Complete per-unit wiring for residential apartment developments"
        ]
      }
    ]
  },
  automation: {
    id: "automation",
    title: "Industrial Automation & PLC",
    badge: "Expertise / Automation",
    description: "Optimizing machinery performance and factory output through precision control systems. We engineer the intelligence that drives your production line.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Our Specialized Solutions",
    subTitleDescription: "Explore our diverse engineering ecosystem, spanning high-voltage power networks, advanced automation logic, and security.",
    specializedSolutions: [
      {
        title: "PLC System Design & Programming",
        icon: "precision_manufacturing",
        description: "End-to-end architecture development using industry-leading protocols. We specialize in logic optimization and seamless hardware integration.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "SCADA & HMI Development",
        icon: "monitoring",
        description: "Intuitive visual interfaces and real-time data acquisition systems designed for maximum operator efficiency and clarity.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Motor Control Systems",
        icon: "settings_input_component",
        description: "Expert implementation of VFDs and Soft Starters to enhance torque control and energy savings.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Robotic Cell Integration",
        icon: "smart_toy",
        description: "Custom robotic arm configurations for picking, packing, and high-precision assembly lines.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Power Quality Audits",
        icon: "bolt",
        description: "Diagnostic evaluations to ensure your automated equipment is protected from harmonics and surges.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "PLC System Design & Programming",
    breakdownDescription: "Our PLC solutions are the central nervous system of your industrial operations. We go beyond simple coding; we engineer robust, fail-safe logic that prioritizes safety and maximizes throughput.",
    breakdownImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "ISO 9001:2015 Compliant",
    capabilities: [
      {
        title: "Multi-Platform Expertise",
        description: "Advanced proficiency in Siemens S7, Rockwell Automation/Allen-Bradley, and Schneider Electric systems."
      },
      {
        title: "Predictive Logic",
        description: "Embedded diagnostics that alert maintenance teams before a hardware failure occurs, significantly reducing downtime."
      },
      {
        title: "Efficiency Optimization",
        description: "Algorithmic cycle time reduction that has historically improved throughput by up to 18% for our clients."
      }
    ],
    metrics: [
      { value: "99.9%", label: "System Uptime" },
      { value: "24/7", label: "Technical Support" }
    ],
    ctaTitle: "Ready to Automate Your Facility?",
    ctaDescription: "Our engineering team is ready to conduct a site audit and design a custom automation roadmap tailored to your specific operational goals.",
    detailedCatalog: [
      {
        title: "PLC Programming & Software",
        items: [
          "PLC System Design: I/O mapping, hardware selection, panel layout, and full architecture design",
          "Ladder Logic Programming: Ladder diagram programming for all major PLC platforms",
          "HMI Screen Development: Touch screen operator interface - alarms, process trends, setpoint control",
          "SCADA System Integration: Supervisory control and data acquisition for multi machine site monitoring",
          "PLC to VFD Communication: Modbus RTU/TCP, Profibus, and EtherNet/IP drive integration",
          "Remote PLC Access: Secure VPN or cloud-based remote monitoring, diagnostics, and programming",
          "PLC Retrofitting & Upgrade: Legacy system fault diagnosis, obsolete PLC replacement, programme migration"
        ]
      },
      {
        title: "PLC Brands & Platforms Supported",
        items: [
          "Siemens - S7-200, S7-1200, S7-1500 (TIA Portal / STEP 7)",
          "Allen-Bradley / Rockwell - MicroLogix, CompactLogix, ControlLogix (Studio 5000)",
          "Mitsubishi - FX Series, Q Series, iQ-R Series (GX Works 2/3)",
          "Omron - CP1, CJ2, NJ/NX Series (Sysmac Studio)",
          "Schneider Electric - Modicon M221, M241, M340, M580 (EcoStruxure Machine Expert)",
          "Delta - DVP Series, AS Series (ISPSoft / DIADesigner)",
          "Vigor, Fatek, and other locally available and supported PLC brands"
        ]
      },
      {
        title: "Automation Applications We Engineer",
        items: [
          "Conveyor & Material Handling: Speed control, zone sequencing, jam detection, load sensing",
          "Batch Process Automation: Recipe management, ingredient dosing, process sequencing",
          "Packaging Machine Control: Fill, seal, label, reject - fully automated cycle control",
          "HVAC & Chiller Systems: Temperature zones, compressor sequencing, fault alarms",
          "Water Treatment Automation: Chemical dosing, filtration cycles, level and flow control",
          "Boiler & Burner Control: Flame monitoring, fuel/air ratio control, safety interlocks",
          "Compressed Air Management: Compressor sequencing, pressure control, leak detection",
          "Robotic Cell Integration: PLC robot handshaking, safety zone management, cycle timing"
        ]
      },
      {
        title: "Motor Control Systems",
        items: [
          "DOL Starter (Direct On Line): Small motors up to 5 kW",
          "Star-Delta Starter: Motors 5 kW - 75 kW",
          "Soft Starter: Conveyor belts, pumps, compressors",
          "VFD (Variable Frequency Drive): Any motor - variable speed control",
          "Reverse-Forward Circuit: Lifts, gates, conveyors",
          "Auto/Manual Selector: Pump and machine control panels",
          "Interlocking Circuits: Sequential multi motor systems"
        ]
      },
      {
        title: "Industrial Electrical Works",
        items: [
          "Factory Wiring: Full electrical installation for garment, food, and manufacturing plants",
          "Machine Wiring: Wiring and commissioning of any industrial production machine",
          "Cable Tray Installation: Structured cable management systems for factories and warehouses",
          "Bus Bar Trunking: High capacity busduct power distribution for large factory floors",
          "Earthing & Bonding: Complete industrial earthing grid and equipotential bonding",
          "Industrial Lighting: High-bay LED lighting design and installation for large spaces",
          "Power Quality Audit: Harmonics analysis, power factor measurement, voltage survey"
        ]
      }
    ]
  },
  home: {
    id: "home",
    title: "Bespoke Home Automation",
    badge: "Expertise / Smart Living",
    description: "Transforming standard residences into unified smart spaces with central control over lighting, acoustics, climate controls, and high-security access gates.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Our Smart Home Ecosystems",
    subTitleDescription: "Unify all smart systems in your house into one clean interface that works perfectly across your smartphones, iPads, and wall keypads.",
    specializedSolutions: [
      {
        title: "Circadian Smart Lighting Control",
        icon: "electric_bolt",
        description: "Architectural lighting loops programmed to transition color temperature dynamically, providing focus white at noon and warm amber at sunset.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Multi-Room Acoustics & Home Cinema",
        icon: "monitoring",
        description: "Bespoke high-fidelity speakers integrated into walls, motorized projection drops, and customized acoustic treatment calibration.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Intelligent Climate & Ventilation",
        icon: "settings_input_component",
        description: "Automation loops syncing variable refrigerant flow (VRF) units, split ACs, and exhaust fans to regulate relative humidity levels.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Vein Recognition & Access Security",
        icon: "smart_toy",
        description: "Biometric smart lock entries, cloud video doorbells, smart alarms, and optical license-plate recognition vehicle gates.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Concealed Infrastructure & Smart Racks",
        icon: "bolt",
        description: "Clean aesthetic wire hiding and silent central rack enclosures housing central smart components with dedicated power lines.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "Circadian Smart Lighting & Control",
    breakdownDescription: "We replace standard switches with architectural smart buttons. Controlling standard lighting, DALI nodes, and custom LED dimmers, our custom light plans adapt to your biological clock, saving energy.",
    breakdownImage: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "KNX & Crestron Elite Standards",
    capabilities: [
      {
        title: "Natural Light Synchronization",
        description: "Automatic transition of lighting levels and colors aligned to local solar schedules for wellness."
      },
      {
        title: "Bespoke Metal Keypads",
        description: "Brushed anodized keypads engraved with custom labels, eliminating standard multi-gang plastic switches."
      },
      {
        title: "Unified Touchscreen Hub",
        description: "Elegant wall tablets presenting complete room details (lights, sound, AC) in high-contrast layouts."
      }
    ],
    metrics: [
      { value: "<50ms", label: "Touch Latency" },
      { value: "30%", label: "Power Savings" }
    ],
    ctaTitle: "Elevate Your Living Space?",
    ctaDescription: "Schedule a smart lifestyle consultation with our design engineers. We will blueprint an absolute smart home strategy matching your architect's vision.",
    detailedCatalog: [
      {
        title: "Smart Lighting & Electrical Control",
        items: [
          "Smart Switch Installation: Wi-Fi or Zigbee smart switches - app, voice, and schedule control",
          "Dimmer Control Systems: Adjustable brightness per zone for perfect ambiance in any room",
          "Scene Programming: One touch presets - Movie, Dining, Sleep, Away, Welcome",
          "Scheduled Automation: Automatic on/off by time of day, sunrise/sunset, or occupancy",
          "LED Strip Integration: Colour changing RGBW ambient lighting for ceilings and features"
        ]
      },
      {
        title: "Climate & Comfort Automation",
        items: [
          "Smart AC Control: IR or Wi Fi AC controllers - scheduling, remote, auto temperature",
          "Occupancy Based Control: PIR sensors automatically control fans, lights, and air conditioning",
          "Motorized Curtains & Blinds: App, remote, voice, and schedule control of window coverings",
          "Smart Ceiling Fan Control: Variable speed and on/off via app - compatible with existing fans"
        ]
      },
      {
        title: "Security & Access Control",
        items: [
          "Smart Door Locks: Keypad, fingerprint, RFID, and app-controlled residential door locks",
          "Video Doorbell: Live video and two-way audio with visitors from anywhere in the world",
          "CCTV & NVR Systems: Full HD or 4K IP camera systems with remote viewing and recording",
          "Motion Sensor Alerts: Instant WhatsApp or push notifications on any detected movement",
          "Smart Gate Automation: Motorized sliding or swing gates with remote control and intercom",
          "Alarm System Integration: Intrusion alarm wired to phone notifications, siren, and strobe"
        ]
      },
      {
        title: "Entertainment & Whole-Home Integration",
        items: [
          "Home Theatre Setup: AV receiver, projector or display, and surround sound installation",
          "Multi-Room Audio: Ceiling or wall speakers zoned per room - independent volume control",
          "Google / Alexa Integration: Full voice control of all smart home devices through one ecosystem",
          "Unified App Control: Lights, climate, security, and gates - all in a single dashboard",
          "Custom Automation Rules: If-then logic: door opens → hall light on → AC adjusts to 24°C"
        ]
      }
    ]
  },
  iot: {
    id: "iot",
    title: "IoT & Energy Intelligence",
    badge: "Proprietary / Energy",
    description: "Installing intelligent sensors to monitor industrial metrics, power quality, and remote site status, piping data to our proprietary analytics dashboard.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Proprietary Edge Hardware",
    subTitleDescription: "Uncover hidden operational costs, electrical anomalies, and mechanical deterioration before they disrupt your balance sheets.",
    specializedSolutions: [
      {
        title: "Vantage Guardian Telemetry Modules",
        icon: "precision_manufacturing",
        description: "Our in-house designed telemetry boxes featuring real-time industrial modbus pulling, on-board computing, and redundant cellular transceivers.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Real-time Peak Demand Analytics",
        icon: "monitoring",
        description: "Live dashboard tracking active kVA demand, peak harmonics, and historical power quality logs for maximum optimization.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Non-invasive Clamp Sensors",
        icon: "settings_input_component",
        description: "Split-core current transformer clamps wrapping around cables for live grid load profiling without shutoff.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Mechanical Failure Diagnostics",
        icon: "smart_toy",
        description: "Continuous vibration sensors and ultrasonic probes flagging early motor degradation 72 hours before lockups.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Instant Multi-Channel Alerts",
        icon: "bolt",
        description: "Automatic alerts via SMS, email, and WhatsApp the instant parameters exceed normal safe envelopes.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "Proprietary Guardian Telemetry",
    breakdownDescription: "The Vantage Guardian connects traditional machinery to cloud dashboards. Custom programmed in-house, it translates machine parameters into useful analytics, avoiding high equipment replacement bills.",
    breakdownImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "Proprietary Edge Architecture",
    capabilities: [
      {
        title: "Offline Edge Processing",
        description: "Immediate safety shutdown relays processed on the hardware local circuit, guaranteeing response even during cellular outages."
      },
      {
        title: "Dual-Carrier Redundancy",
        description: "Integrated dual eSIM chips bridging to Dialog and Mobitel cellular networks for remote site uptime."
      },
      {
        title: "Low-Power Mesh Network",
        description: "Connect up to 250 self-powering wireless sensor nodes to a single central gateway within a 200m range."
      }
    ],
    metrics: [
      { value: "<2s", label: "Data Latency" },
      { value: "99.99%", label: "Wireless Uptime" }
    ],
    ctaTitle: "Eliminate Operational Gaps?",
    ctaDescription: "Integrate Vantage Guardian into your production line. We will install test telemetry nodes so you can see live operational data in 24 hours.",
    detailedCatalog: [
      {
        title: "Guardian Energy Monitor - Core Features",
        items: [
          "Real Time Energy Monitoring: Live kWh, voltage, current, and power factor per monitored circuit",
          "WhatsApp Instant Alerts: Immediate notifications for abnormal consumption, tripping, or faults",
          "Automated Monthly Reports: PDF energy summary delivered monthly - trends, savings, comparisons",
          "Appliance Level Breakdown: Identify the highest consuming device in any home or facility",
          "Tamper & Outage Detection: Instant alert if supply is interrupted, bypassed, or tampered with",
          "Cloud Dashboard: Secure web dashboard accessible from any browser or mobile device",
          "12 Month Data Logging: Full historical consumption data retained and available for analysis",
          "CEB Bill Forecasting: Real time running estimate of the current billing cycle charge"
        ]
      },
      {
        title: "IoT Control & Automation Systems",
        items: [
          "Smart Pump Controller: ESP32 based automatic pump control with live WhatsApp status updates",
          "Water Level Monitoring: Real-time tank level display - alerts for low level or overflow",
          "Generator Auto Start (IoT): Remote monitoring and automatic start trigger via cloud IoT module",
          "Temperature & Humidity Logging: Cold storage, server rooms, and warehouse environment monitoring",
          "Industrial IoT Dashboards: OEE, machine uptime, and energy per unit production tracking",
          "Remote Equipment Control: Securely switch industrial loads on or off from any location",
          "Predictive Maintenance Alerts: Detect motor current anomalies and vibration before failure occurs",
          "PLC to Cloud Integration: Bridge PLC data to cloud dashboards via OPC UA or MQTT protocol"
        ]
      },
      {
        title: "Guardian Subscription Plans",
        items: [
          "Guardian Basic: Single phase monitoring, WhatsApp alerts, automated monthly report",
          "Guardian Pro: Three phase monitoring, appliance breakdown analysis, dashboard access",
          "Guardian Industrial: Multi panel monitoring, OEE tracking, predictive alerts, and API access"
        ]
      }
    ]
  },
  panel: {
    id: "panel",
    title: "Custom Panel Fabrication",
    badge: "Engineering / Hardware",
    description: "State-of-the-art in-house metal fabrication and wiring of distribution boards, AMF panels, switchgears, and custom engineering panels matching strict IP ratings.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Meticulous Hardware Engineering",
    subTitleDescription: "Every sheet of steel, copper busbar, and safety breaker is fabricated and structured inside our Colombo warehouse to secure long-term operations.",
    specializedSolutions: [
      {
        title: "Motor Control Centers (MCC)",
        icon: "precision_manufacturing",
        description: "Custom modular cabinets containing slide-out control drawers, high-amperage terminal blocks, and individual motor starter circuitry.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Automatic Mains Failure (AMF)",
        icon: "monitoring",
        description: "Smart grid-to-generator auto-transfer cabinets engineered to safely restore facility power within 3 seconds of power drops.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Precision Sheetmetal Enclosures",
        icon: "settings_input_component",
        description: "Custom-bent galvanized steel cabinets finished in double-coat epoxy powder resist extreme environmental moisture.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Copper Busbar Power Trunks",
        icon: "smart_toy",
        description: "High-purity solid copper busbars engineered with precise bending layouts to transfer massive amperage with minimal thermal generation.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "IP65/IP66 Grade Certifications",
        icon: "bolt",
        description: "Weather-tested panel framing incorporating silicon sealing gaskets and thermal vents certified for wet coastal zones.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "Custom MCC & AMF Power Panels",
    breakdownDescription: "We build electrical panels that are highly structured, perfectly labeled, and completely safe. Utilizing premium Din-rails, heavy lugs, and smart spacing, every single connection is torque-tested to prevent degradation.",
    breakdownImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "IP65/IP66 Safety Standards",
    capabilities: [
      {
        title: "Corrosion Proof Finishes",
        description: "Pre-treated metal shells coated with architectural-grade powder paint designed for heavy industrial use."
      },
      {
        title: "Structured Wire Mapping",
        description: "Every single cable is color-matched, custom sleeved with printable markers, and detailed in exhaustive CAD circuit books."
      },
      {
        title: "Dynamic Ventilation Controls",
        description: "Thermo-controlled ventilation fans that switch on automatically to regulate inner cabinet environments."
      }
    ],
    metrics: [
      { value: "100%", label: "Torque Audited" },
      { value: "IP66", label: "Max Safety Rating" }
    ],
    ctaTitle: "Looking for Custom Cabinets?",
    ctaDescription: "Provide your electrical schematics to our design staff. We will draw custom enclosure layouts and submit full fabrication estimates.",
    detailedCatalog: [
      {
        title: "Panel Types We Fabricate",
        items: [
          "Main Distribution Panel (MDB): Main incoming power distribution for buildings and industrial facilities",
          "Sub Distribution Board (SDB): Floor level or zone level power distribution within a building",
          "Motor Control Centre (MCC): Multiple motor starters and control integrated into one panel",
          "PLC Control Panel: PLC, HMI, I/O modules, and power supply - fully wired and programmed",
          "Pump Control Panel: Auto/manual pump control with level, pressure, and dry run protection",
          "Generator ATS Panel: Automatic mains to generator transfer with voltage/frequency sensing",
          "Power Factor Correction Panel: Automatic capacitor bank switching for improved power factor",
          "Star Delta Starter Panel: Single or multiple motor star delta starter in dedicated enclosure",
          "VFD Drive Panel: Variable frequency drive with isolation bypass and metering",
          "Lighting Control Panel: Zone based lighting contactor control with timers and overrides",
          "Solar Combiner Box: PV array string combiner with string fuses and surge protection"
        ]
      },
      {
        title: "Our Meticulous Panel Build Process",
        items: [
          "Define requirements and design the Single Line Diagram (SLD) and control schematic",
          "Produce the panel layout drawing and obtain client approval before fabrication begins",
          "Select and procure the enclosure - GRP, mild steel, or stainless steel as appropriate",
          "Install DIN rails, cable management ducts, and component back plates",
          "Mount and secure all components - MCBs, contactors, relays, drives, PLCs, and HMIs",
          "Wire all power circuits using correctly sized, colour coded, and routed cables",
          "Wire all control circuits - 230V AC or 24V DC as per the control design",
          "Identify every wire with numbered ferrules at both ends",
          "Load, test, and verify PLC programme and HMI screens where applicable",
          "Conduct full functional testing of every circuit, protection, and interlock before dispatch",
          "Commission the panel on site and set all protection relay parameters",
          "Hand over with wiring diagrams, test reports, operation manual, and spare parts list"
        ]
      }
    ]
  },
  cctv: {
    id: "cctv",
    title: "AI-Powered CCTV & Security",
    badge: "Security / AI",
    description: "Deploying high-definition cameras equipped with facial recognition, automatic license plate readers, thermal warning grids, and central cloud control channels.",
    heroImage: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Intelligent Facility Defense",
    subTitleDescription: "Unify physical security barriers, smart facial tracking, and optical plate cameras into a single real-time warning grid.",
    specializedSolutions: [
      {
        title: "AI-Driven Event Alert Systems",
        icon: "precision_manufacturing",
        description: "Optical algorithms running real-time searches for unattended items, sudden crowds, and line-crossing threats, instantly alerting teams.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Central Multi-Site Command Centers",
        icon: "monitoring",
        description: "Cloud-tethered server arrays linking camera streams from different factories into a unified operational console.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Active Laser Perimeter Fences",
        icon: "settings_input_component",
        description: "Invisible active laser threat grids and microwave beams alerting control hubs before physical wire cutting occurs.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Biometric Gates & Turnstiles",
        icon: "smart_toy",
        description: "Industrial biometric gates, vein-scanning locks, and anti-tailgating turnstiles securing critical cleanrooms.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Redundant Off-Grid Battery Backups",
        icon: "bolt",
        description: "Enterprise storage servers equipped with robust RAID configurations and deep-cycle backup battery banks.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "AI Facial Tracking & Command Centers",
    breakdownDescription: "We engineer security setups that think. Replacing basic video storage with advanced AI loops, we reduce false triggers and speed up security team response rates by up to 90%.",
    breakdownImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "AES-256 Encrypted Networks",
    capabilities: [
      {
        title: "Plate & Profile Databases",
        description: "Register delivery vehicles and staff faces for automated whitelist gate entries and instant audit logs."
      },
      {
        title: "Active Audio Deterrence",
        description: "Dynamic strobe lights and directional horn speakers that fire high-volume voice warnings the instant a threat crosses laser fences."
      },
      {
        title: "AES-256 Encrypted Feeds",
        description: "Tethered data pathways encrypted from camera lens to control monitors, blocking external network access."
      }
    ],
    metrics: [
      { value: "0", label: "Uncaught Breaches" },
      { value: "AES-256", label: "Stream Encryption" }
    ],
    ctaTitle: "Secure Your Corporate Assets?",
    ctaDescription: "Blueprint a multi-site surveillance setup. Our engineers will perform a physical blindspot evaluation and submit custom layout blueprints.",
    detailedCatalog: [
      {
        title: "CCTV Installation Services",
        items: [
          "Analog HD CCTV (HD-TVI/AHD): HD TVI or AHD camera systems with DVR - cost effective full HD surveillance",
          "IP Camera Systems (PoE): Megapixel IP cameras on PoE switch with NVR - scalable and high resolution",
          "4K Ultra HD Surveillance: 4K resolution cameras for critical areas requiring maximum image detail",
          "PTZ Camera Installation: Pan tilt zoom cameras with auto tracking for wide area coverage",
          "Night Vision / IR Cameras: Infrared cameras for complete 24 hour visibility in zero light conditions",
          "Fisheye / 360° Cameras: Single camera full room coverage - eliminates blind spots completely",
          "ANPR / Number Plate Cameras: Automatic number plate recognition for gate, parking, and access roads",
          "Covert / Hidden Cameras: Discreet solutions for retail loss prevention and sensitive monitoring",
          "NVR / DVR Configuration: Recorder setup, HDD sizing, recording schedule, and retention policy",
          "Remote Viewing Setup: Smartphone and browser remote access configured for all authorized users",
          "Cloud Backup Integration: Off site cloud recording for tamper proof evidence and remote retrieval",
          "Motion Detection & Alerts: Camera triggered instant WhatsApp or push notification on any motion event",
          "CCTV Health Monitoring (IoT): Automated camera status monitoring - instant alert if any camera goes offline"
        ]
      },
      {
        title: "Camera Types & Applications",
        items: [
          "Dome Camera: Indoor rooms, retail, reception areas (Up to 8MP (4K))",
          "Bullet Camera: Outdoor perimeters, driveways, car parks (Up to 8MP (4K))",
          "PTZ Camera: Wide open areas, main entrance monitoring (Up to 4MP + optical zoom)",
          "Fisheye / 360°: Open floor areas - full room in one camera (Up to 12MP)",
          "Box Camera: Industrial, traffic monitoring, long-range (Up to 5MP + interchangeable lens)",
          "ANPR Camera: Vehicle gates, parking, access control roads (Full HD with built-in IR)"
        ]
      }
    ]
  },
  maintenance: {
    id: "maintenance",
    title: "Preventive Maintenance & SLAs",
    badge: "Services / Assurance",
    description: "Structured preventive checks and emergency 24/7 service contracts backed by strict SLAs, minimizing downtime and securing heavy industrial machinery investment.",
    heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=2000",
    subTitle: "Proactive Machine Safeguards",
    subTitleDescription: "Identify structural anomalies and electrical failures before they cause operational halts or expensive equipment damage.",
    specializedSolutions: [
      {
        title: "Structured Site Health Diagnostics",
        icon: "precision_manufacturing",
        description: "Scheduled quarterly inspections covering torque verifications, dust cleaning, and checking components for absolute stability.",
        bgClass: "bg-surface-container-low dark:bg-vantage-navy/50",
        spanClass: "md:col-span-7",
      },
      {
        title: "Guaranteed SLA Response Windows",
        icon: "monitoring",
        description: "Binding service contracts ensuring certified automation technicians arrive on-site within 2 to 4 hours of critical issues.",
        bgClass: "bg-primary-container text-on-primary",
        spanClass: "md:col-span-5",
        isDark: true,
      },
      {
        title: "Infrared Thermal Scanning",
        icon: "settings_input_component",
        description: "Quarterly infrared hot-spot imaging scans identifying loose copper connections before they cause circuit burnouts.",
        bgClass: "bg-surface-container-high dark:bg-vantage-navy/80",
        spanClass: "md:col-span-4",
      },
      {
        title: "Dedicated Emergency Spares Stock",
        icon: "smart_toy",
        description: "Allocated warehouse space holding critical PLCs, power supply cards, and contactors reserved solely for SLA partners.",
        bgClass: "bg-secondary-container text-on-secondary-fixed",
        spanClass: "md:col-span-4",
      },
      {
        title: "Earthing Loop Impedance Audits",
        icon: "bolt",
        description: "Routine verification of low-resistance earth loops to ensure complete equipment safety and noise reduction.",
        bgClass: "bg-surface-container-highest dark:bg-vantage-navy/95",
        spanClass: "md:col-span-4",
      }
    ],
    breakdownTitle: "Preventative Audits & Spares Storage",
    breakdownDescription: "Failures don't occur out of nowhere; they start as tiny thermal variations. Our preventative scanning locates loose terminations and component imbalances months before they trigger factory power drops.",
    breakdownImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200",
    qualityStandard: "24/7 Redundant Standby Crews",
    capabilities: [
      {
        title: "military-grade Thermal Cameras",
        description: "Detailed thermal audit reports showcasing exact surface heat margins across high-load grid components."
      },
      {
        title: "Immediate Hot-Swap Spares",
        description: "Pre-stocked replacement components stored in our local facility, enabling hot-swapping within hours."
      },
      {
        title: "Compliance Logging Platforms",
        description: "Automated logging of transformer tests, earthing values, and VFD loop integrity profiles for strict ISO compliance."
      }
    ],
    metrics: [
      { value: "<4hr", label: "On-site Dispatch" },
      { value: "98%", label: "Failure Reduction" }
    ],
    ctaTitle: "Secure Guaranteed Factory Uptime?",
    ctaDescription: "Protect your infrastructure from downtime. Partner with us for a preventive site audit and customize an SLA contract that secures peace of mind.",
    detailedCatalog: [
      {
        title: "Contract Types Available",
        items: [
          "Residential Maintenance: Quarterly full inspection, minor repairs, priority emergency response",
          "Commercial Maintenance: Monthly inspection, thermal imaging, minor repairs included",
          "Factory Maintenance: Weekly inspection, motor and panel servicing, 24 hour emergency cover",
          "Hotel & Hospitality Maintenance: Complete electrical upkeep - guest rooms, back of house, plant room",
          "Pump System Maintenance: Monthly inspection, lubrication, impeller check, and seal inspection",
          "Panel Maintenance: Quarterly tightening, thermal imaging scan, cleaning, and logging",
          "Generator Maintenance: Monthly load test, fuel check, battery and ATS functionality test",
          "PLC & Automation Maintenance: Programme backup, firmware updates, I/O checks, and calibration",
          "IoT System Maintenance: Sensor calibration, firmware updates, dashboard review, cloud check"
        ]
      },
      {
        title: "Included in Every Contract SLA",
        items: [
          "Dedicated account manager and guaranteed priority scheduling over non contract clients",
          "Written and signed inspection report issued after every scheduled visit",
          "Thermal imaging scan at every visit - hot joints identified before they cause failure",
          "Emergency call out response within the contractually agreed time window",
          "Preferential rates on all materials, components, and additional works",
          "Annual electrical compliance certificate suitable for insurance and regulatory purposes"
        ]
      }
    ]
  }
};
