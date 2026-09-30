import {
  ContactInfo,
  ServiceItem,
  TimelineItem,
  SkillCategory,
  ProjectItem,
  CVProjectItem,
  AchievementItem
} from '../types/portfolio';

export const PERSONAL_INFO: ContactInfo = {
  name: 'Madhankumar A',
  title: 'Aerospace Engineering Undergraduate · UAV Specialization',
  email: 'madhanmadhankumara@gmail.com',
  phone: '+91 7708254709',
  location: 'Tiruppur, Tamil Nadu, India',
  institution: 'Periyar Maniammai Institute of Science & Technology, Thanjavur, Tamil Nadu',
  degree: 'B.Tech – Aerospace Engineering',
  specialization: 'UAV Specialization',
  cgpa: '7.58 / 10.0',
  hscSchool: 'Anna Government Model Higher Secondary School, Patteswaram, Thanjavur, Tamil Nadu',
  hscScore: '74% (Completed: 2022)',
  linkedin: 'https://www.linkedin.com/in/madhankumar-a',
  github: 'https://github.com/madhankumar-a'
};

export const CAREER_OBJECTIVE = 
  "To build a career in the aerospace and emerging technology sectors by applying my knowledge of UAV systems, aircraft design, CAD, artificial intelligence, computer vision, embedded systems and engineering simulation to real-world challenges.";

export const ABOUT_TEXTS = [
  "I am an Aerospace Engineering undergraduate specializing in UAV systems at Periyar Maniammai Institute of Science & Technology. I have hands-on experience in CAD modelling, aeromodel design, IoT systems, robotics, computer vision and flight simulation.",
  "I enjoy developing practical engineering solutions by combining aerospace concepts with modern technologies such as Artificial Intelligence, Computer Vision, Embedded Systems and 3D Modelling.",
  "Through internships, academic projects and personal projects, I have gained practical experience in aircraft and UAV design, CAD drafting, aeromodel assembly, flight testing, AI-based applications, sensor integration and engineering problem solving."
];

export const SHORT_STATS = [
  { label: 'Degree', value: 'B.Tech Aerospace' },
  { label: 'Specialization', value: 'UAV & Autonomous Systems' },
  { label: 'Core CAD Tools', value: 'CATIA V5 & AutoCAD' },
  { label: 'Intelligence', value: 'AI & Computer Vision' },
  { label: 'Hardware', value: 'ESP32, Arduino & IoT' },
  { label: 'Flight Prototyping', value: 'Multirotor & Fixed-Wing' }
];

export const AREAS_OF_INTEREST = {
  aerospace: [
    'UAV Design & Optimization',
    'Aircraft Structures & Empennage',
    'Aerodynamics & Airfoil Selection',
    'VTOL Systems & Tilt-Rotor Mechanisms',
    'Flight Testing & Telemetry'
  ],
  technology: [
    'Artificial Intelligence & Deep Learning',
    'Computer Vision & Object Detection',
    'Robotics & Autonomous Navigation',
    'IoT & Embedded Systems',
    'Sensor Integration & Telemetry'
  ],
  engineering: [
    'CAD Modelling (CATIA V5 / AutoCAD)',
    '3D Engineering Design & Drafting',
    'Simulation (Simulink & Aeromodel)',
    'Rapid Prototyping & 3D Printing',
    'GD&T and Blueprint Documentation'
  ]
};

export const PROFESSIONAL_COMPETENCIES = [
  { name: 'Team Collaboration', desc: 'Cross-functional engineering and lab synchronization' },
  { name: 'Technical Leadership', desc: 'Guiding aeromodel prototyping and project lifecycles' },
  { name: 'Time Management', desc: 'Milestone tracking from CAD drafting to flight testing' },
  { name: 'Multi-tasking', desc: 'Concurrent hardware, software, and mechanical prototyping' },
  { name: 'Analytical Thinking', desc: 'FEA/CFD basic stress analysis, sensor calibration & data review' },
  { name: 'Cross-functional Communication', desc: 'Technical documentation, blueprint handovers and presentations' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'uav_design',
    title: 'UAV & Aeromodel Engineering',
    description: 'Design, structural fabrication, component selection, prototype assembly and flight testing for multirotor and fixed-wing UAVs.',
    icon: 'Plane',
    tags: ['Multirotor', 'Fixed-Wing', 'VTOL', 'Flight Test', 'Assembly']
  },
  {
    id: 'cad_design',
    title: 'CAD & Engineering Drafting',
    description: 'Parametric 3D CAD modeling, 2D engineering drafting, GD&T tolerancing, blueprint generation using CATIA V5 and AutoCAD.',
    icon: 'Box',
    tags: ['CATIA V5', 'AutoCAD', 'GD&T', '3D Printing', 'Drawings']
  },
  {
    id: 'computer_vision',
    title: 'AI & Computer Vision Systems',
    description: 'Custom real-time computer vision pipelines for UAV video processing, 3D reconstruction, object detection, and gesture interaction.',
    icon: 'Eye',
    tags: ['OpenCV', 'PyTorch', 'Object Detection', '3D SLAM', 'MediaPipe']
  },
  {
    id: 'iot_embedded',
    title: 'IoT & Embedded Robotics',
    description: 'Microcontroller programming, sensor fusion (MEMS, ultrasonic, LiDAR, I²S), wireless telemetry, and automated robotic systems using ESP32 & Arduino.',
    icon: 'Cpu',
    tags: ['ESP32', 'Arduino', 'I2S Sensors', 'Robotics', 'Automation']
  }
];

export const EDUCATION_DATA = [
  {
    degree: 'B.Tech – Aerospace Engineering',
    specialization: 'UAV Specialization',
    institution: 'Periyar Maniammai Institute of Science & Technology',
    location: 'Thanjavur, Tamil Nadu',
    period: '2024 – 2028 (Expected)',
    score: 'Current CGPA: 7.58 / 10.0',
    description: 'Specialized curriculum focused on Unmanned Aerial Vehicles, Aerodynamics, Aircraft Structures, Flight Mechanics, Propulsion, CAD/CAM Modeling, and Avionics integration.',
    highlights: [
      'Comprehensive UAV design and flight dynamics coursework',
      'Hands-on aeromodel construction and wind tunnel / aerodynamic observation',
      'Active participation in aerospace fabrication labs and drone flight demonstrations',
      'Integration of AI and computer vision with aerospace payloads'
    ]
  },
  {
    degree: 'Higher Secondary Certificate – HSC',
    specialization: 'Science & Mathematics',
    institution: 'Anna Government Model Higher Secondary School',
    location: 'Patteswaram, Thanjavur, Tamil Nadu',
    period: 'Completed: 2022',
    score: 'Score: 74%',
    description: 'Rigorous foundational studies in Advanced Mathematics, Physics, Chemistry, and Computer Science.',
    highlights: [
      'Strong academic foundation in analytical mathematics and physics mechanics',
      'Developed early passion for aeronautics and electronics projects'
    ]
  }
];

export const INTERNSHIPS: TimelineItem[] = [
  {
    title: 'Project-Based Intern',
    organization: 'Vimanna Labs',
    period: 'February 2026 – March 2026',
    domain: 'IoT Systems, Robotics & Aeromodel Engineering',
    description: 'Engaged in project-based learning covering IoT systems, robotics, and aeromodel engineering within a structured aerospace training environment.',
    highlights: [
      'Gained hands-on experience in aeromodel structural design, component integration, and prototype-to-flight assembly workflows.',
      'Completed pilot training for multirotor and fixed-wing aeromodel aircraft, including model setup, flight testing, and performance evaluation.',
      'Gained practical exposure to flight simulation, aircraft control principles, and aerospace project execution.'
    ],
    skills: ['UAV Prototyping', 'Aeromodel Assembly', 'Multirotor Pilot Training', 'Fixed-Wing Flight', 'Flight Simulation', 'IoT Systems']
  },
  {
    title: 'Project-Based Intern',
    organization: 'Sri Desinge CAD',
    period: 'March 2025',
    domain: 'CAD & Engineering Drafting',
    description: 'Created detailed 2D and 3D engineering drawings of mechanical and aerospace components using AutoCAD and CAD design suites.',
    highlights: [
      'Converted conceptual design sketches into technical drawings with accurate dimensions, annotations, and geometric tolerancing (GD&T).',
      'Prepared engineering documentation for blueprint preparation and CAD-based design records.',
      'Ensured strict compliance with manufacturing dimensional standards.'
    ],
    skills: ['AutoCAD', '2D Drafting', '3D Modeling', 'GD&T', 'Blueprint Generation', 'Technical Documentation']
  },
  {
    title: 'Technical Trainee',
    organization: 'MR Innovaters',
    period: 'May 2024 · 15 Days',
    domain: 'IoT & Basic Engineering Applications',
    description: 'Studied IoT systems, embedded technology, and sensor integration in engineering applications.',
    highlights: [
      'Participated in hands-on mini-projects involving electronics, automation, and real-world engineering problem solving.',
      'Developed practical understanding of circuit design and system-level engineering concepts.',
      'Programmed microcontrollers and interfaced various sensors with actuators.'
    ],
    skills: ['IoT Systems', 'Embedded Electronics', 'Sensor Integration', 'Circuit Design', 'Arduino', 'Automation']
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Aerospace & UAV Engineering',
    description: 'Aircraft design, aeromodel construction, flight mechanics & testing',
    icon: 'Plane',
    skills: [
      { name: 'UAV Design', level: 90, highlight: true },
      { name: 'Aircraft Structures', level: 85, highlight: true },
      { name: 'Aeromodel Design & Prototyping', level: 92, highlight: true },
      { name: 'Aerodynamics & Airfoils', level: 82 },
      { name: 'Fixed-Wing Aircraft', level: 88 },
      { name: 'Multirotor UAVs', level: 90, highlight: true },
      { name: 'Flight Testing & Telemetry', level: 86 },
      { name: 'Aircraft Assembly', level: 88 }
    ]
  },
  {
    title: 'CAD & Engineering Design',
    description: 'Parametric 3D CAD modeling, drafting, GD&T and simulation',
    icon: 'Box',
    skills: [
      { name: 'CATIA V5', level: 88, highlight: true },
      { name: 'AutoCAD', level: 90, highlight: true },
      { name: '2D Engineering Drawing', level: 92 },
      { name: '3D CAD Modelling', level: 88 },
      { name: 'GD&T (Geometric Dimensioning & Tolerancing)', level: 84 },
      { name: 'Engineering Documentation & Blueprints', level: 86 },
      { name: 'Ansys (FEA / CFD Basics)', level: 75 }
    ]
  },
  {
    title: 'Programming & Simulation',
    description: 'Computational scripting, simulation and numerical analysis',
    icon: 'Code',
    skills: [
      { name: 'Python', level: 88, highlight: true },
      { name: 'C Language', level: 82 },
      { name: 'MATLAB', level: 84, highlight: true },
      { name: 'MATLAB Simulink', level: 80 },
      { name: 'Flight Simulation', level: 85 },
      { name: 'Aeromodel Simulation', level: 84 }
    ]
  },
  {
    title: 'AI & Computer Vision',
    description: 'Object detection, deep learning models, image processing & gestures',
    icon: 'Eye',
    skills: [
      { name: 'OpenCV', level: 90, highlight: true },
      { name: 'Object Detection', level: 88, highlight: true },
      { name: 'Image & Video Processing', level: 86 },
      { name: 'Face & Emotion Detection', level: 84 },
      { name: 'Mask Detection', level: 85 },
      { name: 'Hand Detection & Tracking', level: 88 },
      { name: 'Gesture Recognition', level: 86 },
      { name: 'Crowd Detection', level: 82 },
      { name: 'Real-Time Vision Systems', level: 85 },
      { name: 'AI/ML Fundamentals (PyTorch/Scikit-Learn)', level: 78 }
    ]
  },
  {
    title: 'Embedded & IoT Systems',
    description: 'Microcontroller hardware, sensor integration and automation',
    icon: 'Cpu',
    skills: [
      { name: 'ESP32 (WROOM, CAM)', level: 90, highlight: true },
      { name: 'Arduino Platform', level: 92, highlight: true },
      { name: 'Sensors (MEMS, Ultrasonic, IR, I²S)', level: 88 },
      { name: 'Embedded Systems Architecture', level: 84 },
      { name: 'IoT Telemetry & Automation', level: 86 },
      { name: 'Circuit Design & Prototyping', level: 82 },
      { name: 'Actuator & Motor Control (BLDC, Servo)', level: 85 }
    ]
  },
  {
    title: 'Engineering Tools & Productivity',
    description: 'Documentation, presentation and collaborative development tools',
    icon: 'Tool',
    skills: [
      { name: 'Microsoft Word & Documentation', level: 92 },
      { name: 'Microsoft Excel & Data Analysis', level: 88 },
      { name: 'Microsoft PowerPoint & Technical Presentations', level: 90 },
      { name: '3D Slicing & 3D Printing Tools', level: 85 },
      { name: 'Git & Version Control', level: 80 }
    ]
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'uav-structural-design',
    title: 'UAV Structural Design & Fabrication',
    subtitle: 'Small-Scale VTOL UAV Airframe with Tilt-Rotor Mechanism',
    category: 'uav_aero',
    categoryLabel: 'Aerospace & UAV',
    badge: 'Flagship Aerospace Project',
    summary: 'Design and fabrication of UAV fuselage, wing, airfoil and empennage structures for a small-scale VTOL UAV with tilt-rotor mechanism.',
    fullDescription: 'Comprehensive structural design and physical prototyping of an autonomous VTOL UAV platform. The project encompassed airfoil selection, wing and fuselage parametric CAD generation in CATIA V5, internal rib and spar lightweighting, empennage stability sizing, 3D printing of structural brackets, and tilt-rotor mechanical articulation.',
    areas: [
      'UAV Design & Sizing',
      'Aircraft Structural Integrity',
      'Aerodynamics & Airfoil Profile',
      'CATIA V5 3D Modelling',
      'Additive Manufacturing (3D Printing)',
      'Structural Fabrication & Assembly',
      'Tilt-Rotor Mechanism Design'
    ],
    technologies: ['CATIA V5', 'AutoCAD', '3D Printing (PLA/PETG)', 'Ansys Basics', 'Aerodynamic Analysis'],
    hardware: ['Brushless Motors', 'Tilt Servos', 'Carbon Fiber Spars', '3D Printed Mounts', 'LiPo Power System'],
    applications: ['Aerial Surveillance', 'Vertical Takeoff in Confined Spaces', 'Rapid Logistics', 'Payload Delivery'],
    keyHighlights: [
      'Engineered lightweight wing and empennage assemblies with high stiffness-to-weight ratio.',
      'Developed custom tilt-rotor bracket allowing seamless transition from hover to forward flight.',
      'Executed structural assembly verification and balance alignment for flight stability.'
    ],
    status: 'Prototyped & Verified'
  },
  {
    id: 'drona-3d-model',
    title: 'Drona – Single-Pass Drone Video to 3D Model',
    subtitle: 'AI-Based 3D Environmental & Terrain Reconstruction from Single Drone Flight',
    category: 'ai_cv',
    categoryLabel: 'AI & Computer Vision',
    badge: 'AI & Aerial Photogrammetry',
    summary: 'An AI-based system designed to generate a metrically useful 3D model from a single-pass UAV video capture.',
    fullDescription: 'Drona solves the problem of rapid 3D environmental mapping by processing continuous single-pass UAV video footage. It estimates camera trajectory and monocular scene depth using foundation models (Depth Anything & Metric3D), performs feature tracking and bundle adjustment via COLMAP/ORB-SLAM3, and reconstructs interactive 3D point clouds and meshes using Open3D and VTK.',
    areas: [
      'Aerial Computer Vision',
      'Monocular Depth Estimation',
      'Structure-from-Motion (SfM)',
      'Simultaneous Localization & Mapping (SLAM)',
      '3D Point Cloud Reconstruction',
      'Georeferencing & Spatial Mapping'
    ],
    technologies: [
      'Python',
      'OpenCV',
      'COLMAP',
      'Open3D',
      'Depth Anything',
      'Metric3D',
      'PyTorch',
      'ORB-SLAM3',
      'GDAL / PROJ',
      'VTK / OpenGL',
      'FFmpeg'
    ],
    applications: [
      'Disaster Response & Damage Assessment',
      'Critical Infrastructure Inspection',
      'Terrain Reconstruction & Elevation Mapping',
      'Defense & Security Surveillance',
      'Rapid Tactical Mapping',
      'Bridge & Structural Inspection'
    ],
    keyHighlights: [
      'Eliminates the requirement for complex multi-orbit flight plans by reconstructing 3D geometry from a single video pass.',
      'Leverages modern deep metric depth estimation combined with classical SfM triangulation.',
      'Exports metric 3D meshes ready for GIS analysis and CAD inspection.'
    ],
    status: 'Software Pipeline Implemented'
  },
  {
    id: 'bhl-cad-system',
    title: 'BHL – 2D Drawing to 3D CAD System',
    subtitle: 'AI-Assisted Automated Reconstruction of 3D Models from 2D Engineering Blueprints',
    category: 'cad',
    categoryLabel: 'CAD & AI Systems',
    badge: 'CAD Automation Concept',
    summary: 'BHL is a software concept and tool for converting legacy 2D engineering drawings and sketches into interactive 3D CAD models.',
    fullDescription: 'Engineering archives and legacy blueprints are typically stored in 2D sheets. BHL analyzes standard orthographic projections (front, top, side views), extracts dimension annotations and geometric tolerancing using computer vision and optical character recognition, and programmatically generates parametric 3D CAD geometries.',
    features: [
      '2D Drawing Import (Scans, PDFs, Images)',
      'Engineering Drawing Analysis & View Segmentation',
      'AI-Assisted 3D Geometry Reconstruction',
      'Parametric 3D Model Generation',
      'Interactive 3D Viewing (Rotate, Pan, Slice)',
      'CAD-Oriented Standard Export (STEP, STL, OBJ)',
      'Desktop Application Concept & Workflow'
    ],
    technologies: ['Python', 'OpenCV', 'AI / Deep Learning', '3D Modelling Libraries', 'Image Processing', 'PyQt / GUI'],
    applications: ['Legacy Aerospace Blueprints Modernization', 'Automated Part Prototyping', 'Fast CAD Re-engineering'],
    keyHighlights: [
      'Automated extraction of projection lines, center lines, and dimensional callouts.',
      'Reduces manual CAD re-drafting time from hours to minutes.',
      'Provides interactive 3D viewport for geometry validation before export.'
    ],
    status: 'Core Concept & Prototype'
  },
  {
    id: 'solarguard-ai',
    title: 'SolarGuard AI',
    subtitle: 'AI-Assisted Solar Flare Analysis & Monitoring Using Aditya-L1 X-Ray Observations',
    category: 'ai_cv',
    categoryLabel: 'Space & AI',
    badge: 'Space Weather & AI',
    summary: 'An AI-assisted solar flare analysis and monitoring framework leveraging X-ray observations from India’s Aditya-L1 space mission.',
    fullDescription: 'Space weather events and sudden solar flares can disrupt satellite communications, GPS constellations, and high-altitude aviation avionics. SolarGuard AI ingests solar X-ray flux telemetry from Aditya-L1 instruments, detects anomaly patterns and flare onset using PyTorch deep learning, classifies flare severity (C, M, X class), and visualizes real-time geomagnetic risk metrics.',
    technologies: [
      'Python',
      'Astropy',
      'NumPy',
      'Pandas',
      'SciPy',
      'PyTorch',
      'Scikit-learn',
      'Matplotlib',
      'Plotly',
      'Streamlit'
    ],
    features: [
      'Aditya-L1 X-ray telemetry data parsing & calibration',
      'Solar flare peak detection and onset prediction',
      'Interactive time-series flux visualization',
      'Deep learning classification of flare energy classes',
      'Aviation & satellite space weather risk dashboard'
    ],
    applications: ['Satellite Constellation Protection', 'High-Altitude Flight Radiation Alerts', 'Space Science Research'],
    keyHighlights: [
      'Processed astrophysical X-ray flux curves with Astropy and SciPy filter pipelines.',
      'Built interactive dashboard with Plotly and Streamlit for solar event risk assessment.'
    ],
    status: 'Research & Dashboard Active'
  },
  {
    id: 'classroom-noise-detection',
    title: 'Classroom Noise Detection System',
    subtitle: 'ESP32 Embedded Acoustic Level Monitor with Visual Feedback & Telemetry',
    category: 'iot_robotics',
    categoryLabel: 'IoT & Embedded',
    badge: 'Embedded Hardware',
    summary: 'An ESP32-based classroom acoustic monitoring system designed to detect, process and indicate sound pressure levels in real-time.',
    fullDescription: 'Designed and deployed an intelligent ambient noise monitor built around the ESP32-WROOM-32E microcontroller. Utilizes an INMP441 omnidirectional I²S digital MEMS microphone for accurate decibel sampling. It drives an addressable WS2812B RGB LED ring for instantaneous color-coded feedback (Green -> Yellow -> Red) and sounds an alert buzzer when ambient decibel thresholds are breached.',
    hardware: [
      'ESP32-WROOM-32E Microcontroller',
      'INMP441 I²S Digital MEMS Microphone',
      'WS2812B RGB Addressable LED Ring (16-pixel)',
      '0.96" I²C OLED Display (128x64)',
      'Active Buzzer & Driver Circuit',
      'Custom 3D-Printed Enclosure'
    ],
    features: [
      'Real-time digital audio sampling via high-speed I²S bus',
      'Dynamic decibel (dB) calculation and RMS noise filtering',
      'Visual LED color ring gradient indicating acoustic intensity',
      'OLED live display of decibel levels and peak hold values',
      'Audio alert triggers upon sustained noise violations'
    ],
    technologies: ['C/C++', 'Arduino IDE / ESP-IDF', 'I2S Protocol', 'I2C Bus', 'FreeRTOS Tasks'],
    keyHighlights: [
      'Direct digital audio sampling avoids analog noise and electromagnetic interference.',
      'Compact, wall-mountable enclosure suitable for academic lecture halls and examination rooms.'
    ],
    status: 'Hardware Fabricated & Tested'
  },
  {
    id: 'smart-dustbin',
    title: 'Smart Automated Dustbin',
    subtitle: 'Contactless Automated Waste Disposal with Ultrasonic Detection',
    category: 'iot_robotics',
    categoryLabel: 'IoT & Embedded',
    badge: 'IoT Automation',
    summary: 'Automated contactless smart dustbin concept utilizing ESP32, distance sensing, servo motor control and embedded automation.',
    fullDescription: 'Constructed an automated waste management system featuring non-contact user presence detection using HC-SR04 ultrasonic sensors. When an approaching user is detected within range, the ESP32 controller commands a high-torque servo motor to smoothly actuate the lid mechanism and tracks bin capacity fill-levels.',
    hardware: ['ESP32', 'HC-SR04 Ultrasonic Sensors', 'SG90 / MG995 Servos', 'Power Supply Module'],
    technologies: ['C++', 'Arduino', 'Embedded Automation', 'Distance Calibration'],
    keyHighlights: [
      'Hygienic touchless operation with sub-200ms lid opening response time.',
      'Automated timeout closure and bin level overflow alert indicator.'
    ],
    status: 'Completed'
  },
  {
    id: 'smart-headlight',
    title: 'Smart Adaptive Headlight System',
    subtitle: 'IoT-Based Vehicle Lighting Automation with Environmental & Speed Sensing',
    category: 'iot_robotics',
    categoryLabel: 'IoT & Embedded',
    badge: 'Automotive IoT',
    summary: 'IoT-based vehicle lighting system using optical and environmental sensors for automatic beam adjustment.',
    fullDescription: 'Smart automotive safety project implementing dynamic headlight beam angle and intensity control based on oncoming vehicle light detection, ambient twilight levels, and steering angle.',
    hardware: ['Microcontroller', 'LDR Optical Sensors', 'High-Intensity LED Matrix', 'PWM Drivers'],
    technologies: ['Embedded C', 'Sensor Thresholding', 'PWM Control'],
    keyHighlights: ['Prevents high-beam glare for oncoming drivers while maximizing driver visibility.'],
    status: 'Completed'
  },
  {
    id: 'classroom-automation',
    title: 'Smart Classroom Environmental Automation',
    subtitle: 'Sensor-Based Automated Power & Climate Control',
    category: 'iot_robotics',
    categoryLabel: 'IoT & Embedded',
    badge: 'IoT Energy Saving',
    summary: 'Sensor-based classroom monitoring and automation concept integrating environmental and electrical parameters.',
    fullDescription: 'Integrated PIR motion sensors, temperature/humidity monitors, and relay switching modules to automatically regulate classroom fans and illumination, conserving electrical power during unoccupied hours.',
    hardware: ['ESP32', 'PIR Motion Sensors', 'DHT11 / DHT22', '4-Channel Relay Module'],
    technologies: ['IoT', 'Microcontroller Logic', 'Automation Circuits'],
    keyHighlights: ['Calculated over 30% reduction in classroom idle electricity consumption.'],
    status: 'Completed'
  },
  {
    id: 'arduino-rc-car',
    title: 'Autonomous & Bluetooth Arduino RC Car',
    subtitle: 'Robotic Ground Vehicle with Multi-Sensor Obstacle Avoidance & IR Tracking',
    category: 'iot_robotics',
    categoryLabel: 'Robotics',
    badge: 'Robotics Platform',
    summary: 'Arduino-based remote-controlled vehicle integrating motor control, ultrasonic sensing, IR sensing and Bluetooth communication.',
    fullDescription: 'Engineered a 4-wheel drive robotic testbed vehicle. Features dual operation modes: smartphone Bluetooth telemetry control via HC-05 module, and fully autonomous obstacle-avoidance mode utilizing a servo-mounted ultrasonic radar sensor and line-tracking IR sensors.',
    hardware: ['Arduino Uno', 'L298N Motor Driver', 'HC-05 Bluetooth', 'HC-SR04 Ultrasonic', 'IR Array', 'Chassis & Gear Motors'],
    technologies: ['Embedded C', 'Motor PWM Control', 'Obstacle Avoidance Algorithms', 'UART Telemetry'],
    keyHighlights: [
      'Smooth differential steering with PWM acceleration curves.',
      'Autonomous obstacle evasion with 3-direction path scanning.'
    ],
    status: 'Completed & Field Tested'
  },
  {
    id: 'esp32-cam-car',
    title: 'ESP32-CAM Wireless Surveillance Rover',
    subtitle: 'Wi-Fi Video Streaming Ground Rover for Remote Hazardous Inspection',
    category: 'iot_robotics',
    categoryLabel: 'Robotics',
    badge: 'Robotics & Vision',
    summary: 'Camera-enabled robotic vehicle concept using ESP32-CAM for real-time wireless visual inspection and navigation.',
    fullDescription: 'Integrated the compact ESP32-CAM board onto a lightweight mobile rover chassis. Hosts an embedded HTTP streaming server providing real-time low-latency video feeds to a remote web dashboard, allowing real-time teleoperation into cramped or dangerous inspection areas.',
    hardware: ['ESP32-CAM (OV2640)', 'Dual DC Motors', 'H-Bridge Driver', 'Li-Ion Battery Pack'],
    technologies: ['MJPEG Video Streaming', 'WebSockets / HTTP Webserver', 'Embedded C', 'Wi-Fi AP/STA Mode'],
    keyHighlights: [
      'Real-time first-person-view (FPV) video transmission over local Wi-Fi.',
      'Direct web-browser joystick control interface with zero external apps needed.'
    ],
    status: 'Completed'
  }
];

export const CV_PROJECTS: CVProjectItem[] = [
  {
    id: 'object-detection',
    title: 'Object Detection Pipeline',
    category: 'Computer Vision & Deep Learning',
    description: 'Developed computer vision applications for detecting and identifying objects from image and video inputs using AI-based image processing techniques and neural networks.',
    skills: ['Python', 'OpenCV', 'Object Detection', 'Image Processing', 'Bounding Box Tracking'],
    highlights: [
      'Processes multi-class objects in real-time camera feeds',
      'Applies non-maximum suppression (NMS) for precise bounding box localization',
      'Optimized for drone payload cameras and surveillance feeds'
    ],
    detectionType: 'general'
  },
  {
    id: 'crowd-detection',
    title: 'Crowd Detection & Density Analysis',
    category: 'Aerial & Ground Vision',
    description: 'Computer vision project focused on detecting, counting, and analyzing people in crowded environments using camera-based image and video processing.',
    skills: ['Computer Vision', 'Object Detection', 'Python', 'Video Processing', 'Density Mapping'],
    highlights: [
      'Accurate head and person detection in congested aerial and ground viewpoints',
      'Generates density heatmaps for public gathering monitoring',
      'Provides real-time count metrics and bottleneck detection'
    ],
    detectionType: 'crowd'
  },
  {
    id: 'driver-monitoring',
    title: 'Driver Monitoring System (DMS)',
    category: 'Automotive & Safety AI',
    description: 'Computer vision-based application focused on monitoring visual information related to driver activity, eye closure (PERCLOS), and head pose orientation.',
    skills: ['Computer Vision', 'Image Processing', 'Python', 'Real-Time Video', 'Drowsiness Detection'],
    highlights: [
      'Calculates eye aspect ratio (EAR) to detect drowsiness and micro-sleep events',
      'Monitors head pose yaw/pitch to flag phone usage and distraction',
      'Instant audible trigger for vehicle safety'
    ],
    detectionType: 'face'
  },
  {
    id: 'gesture-recognition',
    title: 'Gesture Recognition System',
    category: 'Human-Machine Interface',
    description: 'Vision-based system for detecting, classifying, and interpreting hand gestures using real-time camera input to command systems without contact.',
    skills: ['OpenCV', 'Hand Detection', 'Gesture Recognition', 'Python', 'Feature Extraction'],
    highlights: [
      'Recognizes multi-finger counts, directional swipes, and static sign gestures',
      'Low-latency classification suitable for drone ground control commands',
      'Robust against varying lighting conditions'
    ],
    detectionType: 'gesture'
  },
  {
    id: 'handconnect',
    title: 'HandConnect (HCI System)',
    category: 'Human-Computer Interaction',
    description: 'Computer vision project focused on hand detection and camera-based human-computer interaction, enabling mouse cursor control and virtual triggers.',
    skills: ['Hand Detection', 'Computer Vision', 'OpenCV', 'Python', 'Keypoint Estimation'],
    highlights: [
      'Extracts 21 3D hand landmarks for finger-tip spatial tracking',
      'Enables contactless mouse navigation, clicks, and window scrolling',
      'Intuitive touch-free computer operation'
    ],
    detectionType: 'hand'
  },
  {
    id: 'emotion-detection',
    title: 'Human Emotion Detection',
    category: 'Facial Analysis AI',
    description: 'Computer vision application for detecting and classifying human facial emotions (Happy, Sad, Angry, Surprised, Neutral) from visual camera input.',
    skills: ['Face Detection', 'Image Processing', 'Computer Vision', 'Python', 'CNN Classification'],
    highlights: [
      'Haar Cascade / DNN face localization followed by CNN emotion feature scoring',
      'Displays real-time emotion probability distributions',
      'Applicable in human-robot interaction and behavioral studies'
    ],
    detectionType: 'face'
  },
  {
    id: 'mask-detection',
    title: 'Protective Face Mask Detection',
    category: 'Biometric & Health Monitoring',
    description: 'Vision-based safety application for detecting whether individuals in video streams are wearing protective face masks properly.',
    skills: ['Object Detection', 'Face Detection', 'OpenCV', 'Python', 'Transfer Learning'],
    highlights: [
      'High-accuracy classification (Mask On vs. Mask Off vs. Improper Mask)',
      'Real-time multi-person verification at facility entryways',
      'Audible chime and alert notification logging'
    ],
    detectionType: 'face'
  },
  {
    id: 'air-canvas',
    title: 'Air Canvas',
    category: 'Interactive Gesture Application',
    description: 'Interactive computer vision application that enables virtual drawing and color sketching in the air using hand movements detected through a web camera.',
    skills: ['OpenCV', 'Hand Tracking', 'Gesture Recognition', 'Python', 'Canvas Overlay'],
    highlights: [
      'Virtual color palette selection with finger-tap gestures',
      'Smooth spline smoothing of drawn strokes in mid-air',
      'Save sketch and clear screen gesture triggers'
    ],
    detectionType: 'canvas'
  },
  {
    id: 'airdrawer',
    title: 'AirDrawer',
    category: 'Interactive Gesture Application',
    description: 'Camera-based hand interaction project for drawing, erasing, and controlling visual graphical elements through intuitive fingertip gestures.',
    skills: ['Computer Vision', 'Hand Tracking', 'Python', 'OpenCV', 'UI Controller'],
    highlights: [
      'Index finger draw mode and dual-finger selection mode',
      'Eraser mode with open palm detection',
      'Zero specialized hardware required — runs on standard web cameras'
    ],
    detectionType: 'canvas'
  }
];

export const ACHIEVEMENT_HIGHLIGHTS: string[] = [
  'YASSC State-Level Selection',
  'Dream2Reality Institutional 1st Place',
  'Aerospace Game Development',
  'Space Hackathon',
  'Smart India Hackathon',
  'UAV & Aeromodel Development',
  'CAD Design'
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'yassc-2026',
    title: 'Youth Astronomy & Space Science Congress (YASSC) 2026',
    subtitle: 'Regional Level → State Level',
    level: 'Regional Level → State Level',
    category: 'Space Science & Astronomy',
    badgeText: 'State-Level Selection',
    iconType: 'space',
    description: 'Selected for the prestigious State-Level YASSC 2026 through regional qualifying rounds. Developed ASTRA NOVA: MISSION HORIZON for the aerospace game competition.',
    points: [
      'Selected for the State-Level Youth Astronomy & Space Science Congress 2026 through the regional-level competition.',
      'Participated in astronomy and space-science related activities and project presentations.',
      'Developed ASTRA NOVA: MISSION HORIZON, an interactive aerospace-themed game for the YASSC Game Competition.'
    ],
    organization: 'Youth Astronomy & Space Science Congress',
    hasGameDemo: true
  },
  {
    id: 'dream2reality-1st-place',
    title: 'Dream2Reality – Idea Competition',
    subtitle: '1st Place – Institutional Level | Advanced to Regional Level',
    level: '1st Place – Institutional Level | Advanced to Regional Level',
    category: 'Aerospace Innovation & Entrepreneurship',
    badgeText: '1st Place Winner',
    iconType: 'trophy',
    description: 'Secured 1st Place at Institutional Level and advanced to Regionals in this CSR competition by PSG-STEP with Atlas Copco & Trident, organized by Dept. of Aerospace Engg & Periyar TBI.',
    points: [
      'Secured 1st Place at the Institutional Level in the Dream2Reality – Idea Competition.',
      'Advanced to the Regional-Level Competition.',
      'The competition was conducted as a CSR initiative by PSG-STEP, Coimbatore, in association with Atlas Copco and Trident.',
      'Organised by the Department of Aerospace Engineering and Periyar TBI, PMIST.'
    ],
    organization: 'PSG-STEP Coimbatore · Atlas Copco · Trident · Periyar TBI PMIST'
  },
  {
    id: 'bharatiya-antariksh-hackathon-2026',
    title: 'Bharatiya Antariksh Hackathon 2026',
    subtitle: 'National Space Technology Hackathon',
    level: 'National Level Hackathon',
    category: 'Space Tech & Engineering',
    badgeText: 'Space Hackathon',
    iconType: 'rocket',
    description: 'Participated in the prestigious national Bharatiya Antariksh Hackathon 2026, engineering technology solutions for space exploration and aerospace applications.',
    points: [
      'Participated in the Bharatiya Antariksh Hackathon 2026.',
      'Explored innovative solutions and technology applications related to space and aerospace engineering.'
    ],
    organization: 'National Space Innovation Consortium'
  },
  {
    id: 'smart-india-hackathon',
    title: 'Smart India Hackathon',
    subtitle: 'National Technology Innovation Initiative',
    level: 'National Level Hackathon',
    category: 'Technology & Problem Solving',
    badgeText: 'Smart India Hackathon',
    iconType: 'code',
    description: 'Participated in Smart India Hackathon initiatives, working on high-impact technology-based problem solving and multi-disciplinary software/hardware prototyping.',
    points: [
      'Participated in Smart India Hackathon activities.',
      'Worked on technology-based problem solving and innovative project development.'
    ],
    organization: 'Ministry of Education & AICTE'
  },
  {
    id: 'uav-aeromodel-development',
    title: 'UAV & Aeromodel Development',
    subtitle: 'Multirotor & Fixed-Wing Aircraft Engineering',
    level: 'Flight Prototyping & Testing',
    category: 'Aerospace Systems',
    badgeText: 'Flight Hardware',
    iconType: 'plane',
    description: 'Designed and assembled operational multirotor and fixed-wing aeromodel aircraft, validating airframes through field flight testing and performance evaluation.',
    points: [
      'Designed and assembled multirotor and fixed-wing aeromodel aircraft.',
      'Gained practical experience in aircraft assembly, flight testing and performance evaluation.'
    ],
    organization: 'Aerospace Flight & Aeromodel Labs'
  },
  {
    id: 'cad-engineering-design',
    title: 'CAD & Engineering Design',
    subtitle: 'Precision Aerospace Drawings & GD&T',
    level: 'CAD/CAM Standards',
    category: 'Engineering Drafting',
    badgeText: 'CATIA & GD&T',
    iconType: 'cad',
    description: 'Developed engineering drawings of mechanical and aerospace components using CATIA V5 and AutoCAD, applying strict dimensioning and GD&T principles.',
    points: [
      'Developed aerospace and mechanical engineering drawings using CAD/CAM tools.',
      'Applied dimensioning, modelling and GD&T principles in engineering design.'
    ],
    organization: 'Design & CAD Labs'
  },
  {
    id: 'student-mentorship',
    title: 'Aeromodel & STEM Student Mentorship',
    subtitle: 'Aerospace Education & Workshop Leadership',
    level: 'Institutional Leadership',
    category: 'Leadership & Mentorship',
    badgeText: 'STEM Mentorship',
    iconType: 'users',
    description: 'Mentored engineering students in aeromodel design, basic aerodynamics, and STEM project development methodologies.',
    points: [
      'Mentored students in aeromodel design and STEM project development.',
      'Conducted aeromodel fabrication and flight demonstration sessions.'
    ],
    organization: 'Aerospace Engineering Dept, PMIST'
  }
];

