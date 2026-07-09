// ==========================================
// Physics Practice Book
// Chapter 4 : Newtonian Mechanics
// data/newtonian_mechanics.js
// ==========================================

const chapterData = {

    title: "Chapter 4 : Newtonian Mechanics",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [

        // ==================================================
// FUNDAMENTAL FORCE & NEWTON'S LAWS
// ==================================================

{
    category: "Newton's Laws",

    title: "Newton's First Law",

    formula: "\\sum \\vec F=0 \\Rightarrow \\vec v=constant",

    description: "A body remains at rest or moves with uniform velocity unless acted upon by an external unbalanced force."
},


{
    category: "Newton's Laws",

    title: "Newton's Second Law",

    formula: "\\vec F=m\\vec a",

    description: "The net force acting on a body equals the product of its mass and acceleration."
},


{
    category: "Newton's Laws",

    title: "Newton's Second Law in Momentum Form",

    formula: "\\vec F=\\frac{d\\vec p}{dt}",

    description: "Force is the rate of change of momentum."
},


{
    category: "Newton's Laws",

    title: "Momentum",

    formula: "\\vec p=m\\vec v",

    description: "Linear momentum of a moving body."
},


{
    category: "Newton's Laws",

    title: "Newton's Third Law",

    formula: "\\vec F_{AB}=-\\vec F_{BA}",

    description: "Every action has an equal and opposite reaction."
},


{
    category: "Newton's Laws",

    title: "Net Force",

    formula: "\\vec F_{net}=\\sum\\vec F",

    description: "The resultant of all forces acting on a body."
},


{
    category: "Newton's Laws",

    title: "Weight",

    formula: "\\vec W=m\\vec g",

    description: "Gravitational force acting on a body near Earth's surface."
},


{
    category: "Newton's Laws",

    title: "Force Independence Principle",

    formula: "\\vec a=\\frac{\\sum\\vec F}{m}",

    description: "Acceleration depends on the vector sum of all forces, and individual forces act independently."
},



// ==================================================
// IMPULSE & MOMENTUM
// ==================================================

{
    category: "Momentum",

    title: "Impulse of Force",

    formula: "\\vec J=\\vec F\\Delta t",

    description: "Impulse is the product of force and time interval."
},


{
    category: "Momentum",

    title: "Impulse-Momentum Theorem",

    formula: "\\vec J=\\Delta\\vec p",

    description: "Impulse produces a change in momentum."
},


{
    category: "Momentum",

    title: "Change in Momentum",

    formula: "\\Delta\\vec p=m\\vec v-m\\vec u",

    description: "Difference between final and initial momentum."
},


{
    category: "Momentum",

    title: "Average Force During Impact",

    formula: "\\vec F_{avg}=\\frac{\\Delta\\vec p}{\\Delta t}",

    description: "Average force during a collision or impact."
},


{
    category: "Momentum",

    title: "Conservation of Linear Momentum",

    formula: "m_1u_1+m_2u_2=m_1v_1+m_2v_2",

    description: "Total momentum remains constant when no external force acts."
},


{
    category: "Momentum",

    title: "Momentum Conservation in Explosion",

    formula: "m_1v_1+m_2v_2=0",

    description: "Total momentum remains zero when a stationary body explodes into parts."
},


{
    category: "Momentum",

    title: "Centre of Mass Velocity",

    formula: "\\vec V_{cm}=\\frac{\\sum m_i\\vec v_i}{\\sum m_i}",

    description: "Velocity of the centre of mass of a system."
},


// ==================================================
// FUNDAMENTAL FORCES
// ==================================================

{
    category: "Fundamental Forces",

    title: "Gravitational Force",

    formula: "F=G\\frac{m_1m_2}{r^2}",

    description: "Force of attraction between two masses."
},


{
    category: "Fundamental Forces",

    title: "Electrostatic Force",

    formula: "F=\\frac{1}{4\\pi\\epsilon_0}\\frac{q_1q_2}{r^2}",

    description: "Force between two electric charges."
},


{
    category: "Fundamental Forces",

    title: "Strong Nuclear Force",

    formula: "F_s",

    description: "Force responsible for holding protons and neutrons together inside the nucleus."
},


{
    category: "Fundamental Forces",

    title: "Weak Nuclear Force",

    formula: "F_w",

    description: "Force responsible for radioactive decay processes."
},

// ==================================================
// COLLISION & COEFFICIENT OF RESTITUTION
// ==================================================

{
    category: "Collision",

    title: "Coefficient of Restitution",

    formula: "e=\\frac{\\text{Relative velocity of separation}}{\\text{Relative velocity of approach}}",

    description: "Measures the elasticity of a collision between two bodies."
},

{
    category: "Collision",

    title: "Coefficient of Restitution in One Dimension",

    formula: "e=\\frac{v_2-v_1}{u_1-u_2}",

    description: "Relation between initial and final velocities during a one-dimensional collision."
},

{
    category: "Collision",

    title: "Perfectly Elastic Collision",

    formula: "e=1",

    description: "A collision where both momentum and kinetic energy are conserved."
},

{
    category: "Collision",

    title: "Perfectly Inelastic Collision",

    formula: "e=0",

    description: "A collision where the colliding bodies move together after impact."
},

{
    category: "Collision",

    title: "Partially Elastic Collision",

    formula: "0 &lt; e &lt; 1",

    description: "Momentum is conserved but some kinetic energy is lost."
},

{
    category: "Collision",

    title: "Conservation of Linear Momentum",

    formula: "m_1u_1+m_2u_2=m_1v_1+m_2v_2",

    description: "Total linear momentum remains constant when no external force acts."
},

{
    category: "Collision",

    title: "Conservation of Kinetic Energy (Elastic Collision)",

    formula: "\\frac12m_1u_1^2+\\frac12m_2u_2^2=\\frac12m_1v_1^2+\\frac12m_2v_2^2",

    description: "Kinetic energy remains conserved in a perfectly elastic collision."
},

{
    category: "Collision",

    title: "Velocity of First Body After Elastic Collision",

    formula: "v_1=\\frac{(m_1-m_2)u_1+2m_2u_2}{m_1+m_2}",

    description: "Final velocity of the first body after a one-dimensional elastic collision."
},

{
    category: "Collision",

    title: "Velocity of Second Body After Elastic Collision",

    formula: "v_2=\\frac{2m_1u_1+(m_2-m_1)u_2}{m_1+m_2}",

    description: "Final velocity of the second body after a one-dimensional elastic collision."
},

{
    category: "Collision",

    title: "Common Velocity After Perfectly Inelastic Collision",

    formula: "v=\\frac{m_1u_1+m_2u_2}{m_1+m_2}",

    description: "Common velocity when the bodies stick together after collision."
},

{
    category: "Collision",

    title: "Reduced Mass",

    formula: "\\mu=\\frac{m_1m_2}{m_1+m_2}",

    description: "Effective mass used in collision energy calculations."
},

{
    category: "Collision",

    title: "Loss of Kinetic Energy in Perfectly Inelastic Collision",

    formula: "\\Delta K=\\frac12\\frac{m_1m_2}{m_1+m_2}(u_1-u_2)^2",

    description: "Loss of kinetic energy when two bodies stick together after collision."
},

{
    category: "Collision",

    title: "Loss of Kinetic Energy Using Coefficient of Restitution",

    formula: "\\Delta K=\\frac12\\mu(1-e^2)(u_1-u_2)^2",

    description: "General expression for the kinetic energy lost during a collision."
},

{
    category: "Collision",

    title: "Impulse During Collision",

    formula: "J=\\Delta p=m(v-u)",

    description: "Impulse equals the change in momentum."
},

{
    category: "Collision",

    title: "Average Impact Force",

    formula: "F_{avg}=\\frac{\\Delta p}{\\Delta t}",

    description: "Average force exerted during a collision."
},

{
    category: "Collision",

    title: "Rebound Velocity",

    formula: "v=e\\sqrt{2gh}",

    description: "Velocity immediately after rebounding from the ground."
},

{
    category: "Collision",

    title: "Height After Rebound",

    formula: "h'=e^2h",

    description: "Maximum height reached after rebounding from a height h."
},

// ==================================================
// ROTATIONAL MOTION
// ==================================================

{
    category: "Rotational Motion",

    title: "Angular Displacement",

    formula: "\\theta=\\frac{s}{r}",

    description: "Angular displacement is the ratio of arc length to radius."
},

{
    category: "Rotational Motion",

    title: "Relation Between Degree and Radian",

    formula: "180^\\circ=\\pi\\ rad",

    description: "Conversion relation between degree and radian measure."
},

{
    category: "Rotational Motion",

    title: "Angular Velocity",

    formula: "\\omega=\\frac{d\\theta}{dt}",

    description: "Rate of change of angular displacement."
},

{
    category: "Rotational Motion",

    title: "Average Angular Velocity",

    formula: "\\omega_{avg}=\\frac{\\Delta\\theta}{\\Delta t}",

    description: "Angular displacement per unit time."
},

{
    category: "Rotational Motion",

    title: "Linear Velocity and Angular Velocity",

    formula: "v=r\\omega",

    description: "Relation between linear velocity and angular velocity."
},

{
    category: "Rotational Motion",

    title: "Angular Acceleration",

    formula: "\\alpha=\\frac{d\\omega}{dt}",

    description: "Rate of change of angular velocity."
},

{
    category: "Rotational Motion",

    title: "Linear Acceleration and Angular Acceleration",

    formula: "a=r\\alpha",

    description: "Tangential acceleration produced due to angular acceleration."
},


{
    category: "Rotational Motion",

    title: "Rotational Equations of Motion",

    formula: "\\omega=\\omega_0+\\alpha t",

    description: "First equation of rotational motion."
},

{
    category: "Rotational Motion",

    title: "Rotational Equations of Motion",

    formula: "\\theta=\\omega_0t+\\frac12\\alpha t^2",

    description: "Second equation of rotational motion."
},

{
    category: "Rotational Motion",

    title: "Third Equation of Rotational Motion",

    formula: "\\omega^2=\\omega_0^2+2\\alpha\\theta",

    description: "Relation among angular velocity, acceleration and displacement."
},


// ==================================================
// MOMENT OF INERTIA
// ==================================================

{
    category: "Moment of Inertia",

    title: "Definition of Moment of Inertia",

    formula: "I=\\sum mr^2",

    description: "Resistance of a body against rotational motion."
},

{
    category: "Moment of Inertia",

    title: "Continuous Distribution",

    formula: "I=\\int r^2dm",

    description: "Moment of inertia for continuously distributed mass."
},

{
    category: "Moment of Inertia",

    title: "Radius of Gyration",

    formula: "I=Mk^2",

    description: "Relation between moment of inertia and radius of gyration."
},

{
    category: "Moment of Inertia",

    title: "Radius of Gyration",

    formula: "k=\\sqrt{\\frac IM}",

    description: "Distance from axis where entire mass can be assumed concentrated."
},


// ==================================================
// MOMENT OF INERTIA OF DIFFERENT OBJECTS
// ==================================================

{
    category: "Moment of Inertia",

    title: "Particle About Fixed Axis",

    formula: "I=MR^2",

    description: "Moment of inertia of a particle rotating about an axis."
},

{
    category: "Moment of Inertia",

    title: "Thin Ring About Center",

    formula: "I=MR^2",

    description: "Moment of inertia of a thin ring about its central axis."
},

{
    category: "Moment of Inertia",

    title: "Disc About Center",

    formula: "I=\\frac12MR^2",

    description: "Moment of inertia of a uniform disc about its axis."
},

{
    category: "Moment of Inertia",

    title: "Solid Sphere About Diameter",

    formula: "I=\\frac25MR^2",

    description: "Moment of inertia of a solid sphere."
},

{
    category: "Moment of Inertia",

    title: "Hollow Sphere About Diameter",

    formula: "I=\\frac23MR^2",

    description: "Moment of inertia of a hollow sphere."
},

{
    category: "Moment of Inertia",

    title: "Rod About Center",

    formula: "I=\\frac1{12}ML^2",

    description: "Moment of inertia of a rod about its centre."
},

{
    category: "Moment of Inertia",

    title: "Rod About One End",

    formula: "I=\\frac13ML^2",

    description: "Moment of inertia of a rod about one end."
},


// ==================================================
// THEOREMS
// ==================================================

{
    category: "Moment of Inertia",

    title: "Parallel Axis Theorem",

    formula: "I=I_{cm}+Md^2",

    description: "Relation between MI about parallel axes."
},

{
    category: "Moment of Inertia",

    title: "Perpendicular Axis Theorem",

    formula: "I_z=I_x+I_y",

    description: "Applicable for plane lamina."
},

// ==================================================
// ANGULAR MOMENTUM
// ==================================================

{
    category: "Angular Momentum",

    title: "Angular Momentum of a Particle",

    formula: "\\vec L=\\vec r\\times\\vec p",

    description: "Angular momentum of a particle about a point."
},

{
    category: "Angular Momentum",

    title: "Magnitude of Angular Momentum",

    formula: "L=mvr\\sin\\theta",

    description: "Magnitude of angular momentum of a particle."
},

{
    category: "Angular Momentum",

    title: "Angular Momentum of Rotating Body",

    formula: "L=I\\omega",

    description: "Angular momentum of a rigid rotating body."
},

{
    category: "Angular Momentum",

    title: "Relation Between Torque and Angular Momentum",

    formula: "\\vec\\tau=\\frac{d\\vec L}{dt}",

    description: "Torque is the rate of change of angular momentum."
},

{
    category: "Angular Momentum",

    title: "Angular Impulse",

    formula: "\\tau\\Delta t=\\Delta L",

    description: "Angular impulse produces change in angular momentum."
},

{
    category: "Angular Momentum",

    title: "Conservation of Angular Momentum",

    formula: "I_1\\omega_1=I_2\\omega_2",

    description: "Angular momentum remains constant when external torque is zero."
},


// ==================================================
// TORQUE
// ==================================================

{
    category: "Torque",

    title: "Torque Definition",

    formula: "\\vec\\tau=\\vec r\\times\\vec F",

    description: "Turning effect of a force about an axis."
},

{
    category: "Torque",

    title: "Magnitude of Torque",

    formula: "\\tau=rF\\sin\\theta",

    description: "Magnitude of torque produced by a force."
},

{
    category: "Torque",

    title: "Torque Due to Rotational Motion",

    formula: "\\tau=I\\alpha",

    description: "Rotational form of Newton's second law."
},

{
    category: "Torque",

    title: "Work Done by Torque",

    formula: "W=\\tau\\theta",

    description: "Work done during angular displacement."
},

{
    category: "Torque",

    title: "Rotational Power",

    formula: "P=\\tau\\omega",

    description: "Power produced by rotating bodies."
},


// ==================================================
// ROTATIONAL ENERGY
// ==================================================

{
    category: "Rotational Energy",

    title: "Rotational Kinetic Energy",

    formula:
    "K=\\frac12I\\omega^2",

    description: "Kinetic energy of a rotating body."
},

{
    category: "Rotational Energy",

    title: "Total Energy of Rolling Body",

    formula:
    "K=\\frac12Mv^2+\\frac12I\\omega^2",

    description: "Total kinetic energy of a body rolling without slipping."
},

{
    category: "Rotational Energy",

    title: "Pure Rolling Condition",

    formula:
    "v=R\\omega",

    description: "Relation between translational and rotational velocity during rolling."
},


// ==================================================
// COUPLE
// ==================================================

{
    category: "Couple",

    title: "Moment of Couple",

    formula:
    "\\tau=Fd",

    description: "Moment produced by two equal and opposite parallel forces."
},

{
    category: "Couple",

    title: "Work Done by Couple",

    formula:
    "W=\\tau\\theta",

    description: "Work done when a couple rotates a body."
},


// ==================================================
// FLYWHEEL
// ==================================================

{
    category: "Flywheel",

    title: "Energy Stored in Flywheel",

    formula:
    "E=\\frac12I\\omega^2",

    description: "Energy stored due to rotation of flywheel."
},

{
    category: "Flywheel",

    title: "Change in Flywheel Energy",

    formula:
    "\\Delta E=\\frac12I(\\omega_2^2-\\omega_1^2)",

    description: "Change in rotational energy of a flywheel."
},


// ==================================================
// CENTRIPETAL FORCE
// ==================================================

{
    category: "Circular Motion",

    title: "Centripetal Acceleration",

    formula:
    "a_c=\\frac{v^2}{r}",

    description: "Acceleration directed towards the centre of circular path."
},

{
    category: "Circular Motion",

    title: "Centripetal Acceleration in Angular Form",

    formula:
    "a_c=r\\omega^2",

    description: "Centripetal acceleration using angular velocity."
},

{
    category: "Circular Motion",

    title: "Centripetal Force",

    formula:
    "F_c=\\frac{mv^2}{r}",

    description: "Force required to maintain circular motion."
},

{
    category: "Circular Motion",

    title: "Centripetal Force Angular Form",

    formula:
    "F_c=mr\\omega^2",

    description: "Centripetal force expressed using angular velocity."
},

{
    category: "Circular Motion",

    title: "Centrifugal Force",

    formula:
    "F_{cf}=\\frac{mv^2}{r}",

    description: "Apparent outward force observed in a rotating frame."
},


// ==================================================
// BANKING OF ROADS
// ==================================================

{
    category: "Banking",

    title: "Angle of Banking Without Friction",

    formula:
    "\\tan\\theta=\\frac{v^2}{rg}",

    description: "Banking angle required for safe turning without friction."
},

{
    category: "Banking",

    title: "Maximum Speed on Banked Road",

    formula:
    "v=\\sqrt{rg\\tan\\theta}",

    description: "Maximum speed on an ideally banked road."
},

{
    category: "Banking",

    title: "Maximum Speed With Friction",

    formula:
    "v_{max}=\\sqrt{\\frac{rg(\\tan\\theta+\\mu)}{1-\\mu\\tan\\theta}}",

    description: "Maximum speed considering friction on banked road."
},

{
    category: "Banking",

    title: "Minimum Speed With Friction",

    formula:
    "v_{min}=\\sqrt{\\frac{rg(\\tan\\theta-\\mu)}{1+\\mu\\tan\\theta}}",

    description: "Minimum speed to avoid slipping downward."
},


// ==================================================
// FRICTION
// ==================================================

{
    category: "Friction",

    title: "Static Friction",

    formula:
    "f_s\\leq\\mu_sN",

    description: "Friction before motion starts."
},

{
    category: "Friction",

    title: "Limiting Friction",

    formula:
    "f_{max}=\\mu_sN",

    description: "Maximum value of static friction."
},

{
    category: "Friction",

    title: "Kinetic Friction",

    formula:
    "f_k=\\mu_kN",

    description: "Friction acting during motion."
},

{
    category: "Friction",

    title: "Coefficient of Friction",

    formula:
    "\\mu=\\frac{f}{N}",

    description: "Ratio of frictional force to normal reaction."
},

{
    category: "Friction",

    title: "Angle of Friction",

    formula:
    "\\tan\\lambda=\\mu",

    description: "Angle between resultant reaction and normal reaction."
},

{
    category: "Friction",

    title: "Angle of Repose",

    formula:
    "\\tan\\theta=\\mu",

    description: "Maximum inclination angle before sliding begins."
},


// ==================================================
// FLUID FRICTION
// ==================================================

{
    category: "Fluid Friction",

    title: "Newton's Law of Viscosity",

    formula:
    "F=\\eta A\\frac{dv}{dx}",

    description: "Relation between viscous force and velocity gradient."
},

{
    category: "Fluid Friction",

    title: "Stokes Law",

    formula:
    "F=6\\pi\\eta rv",

    description: "Viscous drag force on a small spherical body."
},

{
    category: "Fluid Friction",

    title: "Terminal Velocity",

    formula:
    "v_t=\\frac{2r^2(\\rho-\\sigma)g}{9\\eta}",

    description: "Constant velocity reached by a falling object in fluid."
},






    ],



    // ==========================================
    // PROBLEMS
    // ==========================================

    problems: [


// ==================================================
// NEWTON'S LAWS & FORCE ANALYSIS
// ==================================================

{
    category: "Newton's Laws",
    type: "Newton's Second Law",

    question: "A force of 20 N acts on a body of mass 5 kg. Find its acceleration.",

    answer: "4 m/s²",

    explanation: "Using F = ma, a = F/m = 20/5 = 4 m/s²."
},


{
    category: "Newton's Laws",
    type: "Resultant Force",

    question: "Two forces of 10 N and 15 N act on a body in the same direction. Find the acceleration of a 5 kg body.",

    answer: "5 m/s²",

    explanation: "Resultant force = 10 + 15 = 25 N. Acceleration = 25/5 = 5 m/s²."
},


{
    category: "Newton's Laws",
    type: "Resultant Force",

    question: "Two opposite forces of 30 N and 18 N act on a 4 kg object. Find acceleration.",

    answer: "3 m/s²",

    explanation: "Net force = 30 - 18 = 12 N. a = 12/4 = 3 m/s²."
},


{
    category: "Newton's Laws",
    type: "Multiple Forces",

    question: "A 10 kg block is acted upon by forces 40 N east, 15 N west and 5 N east. Find acceleration.",

    answer: "3 m/s² east",

    explanation: "Net force = 40 + 5 - 15 = 30 N. a = 30/10 = 3 m/s² east."
},


{
    category: "Newton's Laws",
    type: "Force Required",

    question: "A 8 kg body accelerates at 6 m/s². Find the net force acting on it.",

    answer: "48 N",

    explanation: "F = ma = 8 × 6 = 48 N."
},


{
    category: "Newton's Laws",
    type: "Mass Calculation",

    question: "A force of 50 N produces an acceleration of 10 m/s². Find the mass of the body.",

    answer: "5 kg",

    explanation: "From F = ma, m = F/a = 50/10 = 5 kg."
},


// ==================================================
// FREE BODY DIAGRAM BASED
// ==================================================

{
    category: "Newton's Laws",
    type: "Weight and Normal Reaction",

    question: "A 10 kg block rests on a horizontal surface. Find its normal reaction. Take g = 9.8 m/s².",

    answer: "98 N",

    explanation: "For equilibrium, Normal reaction N = mg = 10 × 9.8 = 98 N."
},


{
    category: "Newton's Laws",
    type: "Vertical Motion",

    question: "A person of mass 60 kg stands inside a lift accelerating upward at 2 m/s². Find apparent weight.",

    answer: "708 N",

    explanation: "For upward acceleration, N = m(g+a) = 60(9.8+2)=708 N."
},


{
    category: "Newton's Laws",
    type: "Lift Problem",

    question: "A 50 kg person is inside a lift moving downward with acceleration 3 m/s². Find apparent weight.",

    answer: "340 N",

    explanation: "N = m(g-a)=50(9.8-3)=340 N."
},


{
    category: "Newton's Laws",
    type: "Weightlessness",

    question: "A lift falls freely under gravity. What is the apparent weight of a person inside it?",

    answer: "Zero",

    explanation: "During free fall, acceleration equals g downward, so N = m(g-g)=0."
},


// ==================================================
// INCLINED PLANE
// ==================================================

{
    category: "Newton's Laws",
    type: "Inclined Plane",

    question: "A block slides down a smooth incline of angle 30°. Find acceleration. Take g=9.8 m/s².",

    answer: "4.9 m/s²",

    explanation: "Acceleration on smooth incline = g sinθ = 9.8×sin30° = 4.9 m/s²."
},


{
    category: "Newton's Laws",
    type: "Inclined Plane",

    question: "A 5 kg block is placed on a smooth incline of 37°. Find the component of weight along the plane. Take g=10 m/s².",

    answer: "30 N",

    explanation: "Component = mg sin37° = 5×10×0.6 = 30 N."
},


{
    category: "Newton's Laws",
    type: "Inclined Plane",

    question: "A block of mass 10 kg rests on a 60° smooth incline. Find normal reaction.",

    answer: "50 N",

    explanation: "N = mg cos60° = 10×10×0.5 = 50 N."
},


// ==================================================
// CONNECTED BODY SYSTEM
// ==================================================

{
    category: "Newton's Laws",
    type: "Two Blocks Connected",

    question: "Two blocks of masses 4 kg and 6 kg are connected by a light string on a smooth surface. A force of 20 N pulls the system. Find acceleration.",

    answer: "2 m/s²",

    explanation: "Total mass = 10 kg. a = F/M = 20/10 = 2 m/s²."
},


{
    category: "Newton's Laws",
    type: "String Tension",

    question: "Two blocks of masses 2 kg and 3 kg are connected on a smooth surface. A force of 10 N pulls the 3 kg block. Find tension in the string.",

    answer: "4 N",

    explanation: "Acceleration = 10/(2+3)=2 m/s². Tension = 2×2=4 N."
},


{
    category: "Newton's Laws",
    type: "Pulley System",

    question: "Two masses 4 kg and 6 kg are connected by a light string over a smooth pulley. Find acceleration. Take g=10 m/s².",

    answer: "2 m/s²",

    explanation: "Atwood machine: a=(m2-m1)g/(m1+m2)=((6-4)×10)/10=2 m/s²."
},


{
    category: "Newton's Laws",
    type: "Pulley Tension",

    question: "In an Atwood machine, masses 3 kg and 5 kg are connected. Find tension in the string. Take g=10 m/s².",

    answer: "37.5 N",

    explanation: "Acceleration = 2.5 m/s². Tension = m(g+a)=3(12.5)=37.5 N."
},

// ==================================================
// ADVANCED FORCE SYSTEMS
// ==================================================

{
    category: "Newton's Laws",
    type: "Force at an Angle",

    question: "A force of 50 N acts on a 10 kg block at an angle 60° above the horizontal. Find the horizontal acceleration on a smooth surface.",

    answer: "2.5 m/s²",

    explanation: "Horizontal component of force = Fcos60° = 50×0.5 = 25 N. Acceleration = 25/10 = 2.5 m/s²."
},


{
    category: "Newton's Laws",
    type: "Force at an Angle",

    question: "A 20 kg block is pulled by a force of 100 N making 37° with horizontal. Find the normal reaction on a smooth surface. Take g=10 m/s².",

    answer: "140 N",

    explanation: "Vertical component reduces normal reaction. N = mg - Fsin37° = 200 - 100(0.6) = 140 N."
},


{
    category: "Newton's Laws",
    type: "Force at an Angle",

    question: "A 10 kg block is pushed by a 50 N force at 30° below horizontal. Find normal reaction. Take g=10 m/s².",

    answer: "125 N",

    explanation: "Downward component increases reaction. N = mg + Fsin30° =100+25=125 N."
},


// ==================================================
// ROUGH SURFACE FORCE ANALYSIS
// ==================================================

{
    category: "Newton's Laws",
    type: "Frictionless vs Rough Surface",

    question: "A 10 kg block is pulled by 30 N on a rough horizontal surface. If friction is 10 N, find acceleration.",

    answer: "2 m/s²",

    explanation: "Net force = 30-10=20 N. a=20/10=2 m/s²."
},


{
    category: "Newton's Laws",
    type: "Minimum Force to Move",

    question: "A 5 kg block lies on a rough horizontal surface with coefficient of static friction 0.4. Find minimum force required to move it. Take g=10 m/s².",

    answer: "20 N",

    explanation: "Limiting friction = μN = μmg =0.4×5×10=20 N."
},


{
    category: "Newton's Laws",
    type: "Inclined Plane With Friction",

    question: "A block slides down a rough incline of angle 37° with coefficient of friction 0.25. Find acceleration. Take g=10 m/s².",

    answer: "4 m/s²",

    explanation: "a=g(sin37°-μcos37°)=10(0.6-0.25×0.8)=4 m/s²."
},


// ==================================================
// WEDGE PROBLEMS
// ==================================================

{
    category: "Newton's Laws",
    type: "Wedge Basic",

    question: "A block slides down a smooth wedge of angle 30°. Find acceleration relative to the wedge.",

    answer: "4.9 m/s²",

    explanation: "Acceleration along smooth incline = gsin30° = 4.9 m/s²."
},


{
    category: "Newton's Laws",
    type: "Wedge Normal Force",

    question: "A 4 kg block rests on a smooth incline of angle 60°. Find normal reaction. Take g=10 m/s².",

    answer: "20 N",

    explanation: "N=mgcos60°=4×10×0.5=20 N."
},


// ==================================================
// PSEUDO FORCE / ACCELERATING FRAME
// ==================================================

{
    category: "Newton's Laws",
    type: "Accelerating Frame",

    question: "A block of mass 2 kg is placed inside a lift accelerating upward at 5 m/s². Find force required to hold it stationary relative to lift.",

    answer: "30 N",

    explanation: "Effective gravity = g+a =15 m/s². F=m(g+a)=2×15=30 N."
},


{
    category: "Newton's Laws",
    type: "Pseudo Force",

    question: "A 5 kg object is observed from a frame accelerating at 4 m/s². Find magnitude of pseudo force.",

    answer: "20 N",

    explanation: "Pseudo force = ma =5×4=20 N opposite to frame acceleration."
},


// ==================================================
// MULTIPLE PULLEY SYSTEM
// ==================================================

{
    category: "Newton's Laws",
    type: "Two Pulley System",

    question: "A 4 kg mass hangs vertically and pulls a 6 kg block on a smooth horizontal table through a pulley. Find acceleration. Take g=10 m/s².",

    answer: "4 m/s²",

    explanation: "Driving force=40N. Total mass=10kg. a=40/10=4m/s²."
},


{
    category: "Newton's Laws",
    type: "Pulley Tension",

    question: "In a pulley system, a 2 kg mass accelerates downward at 2 m/s². Find tension in the string. Take g=10 m/s².",

    answer: "16 N",

    explanation: "For hanging mass: mg-T=ma. 20-T=4. Therefore T=16N."
},


// ==================================================
// EQUILIBRIUM APPLICATIONS
// ==================================================

{
    category: "Newton's Laws",
    type: "Equilibrium",

    question: "Three forces of 10 N, 20 N and F act on a particle in equilibrium. The first two forces are perpendicular. Find F.",

    answer: "22.36 N",

    explanation: "Resultant of first two forces = √(10²+20²)=22.36N. Third force balances it."
},


{
    category: "Newton's Laws",
    type: "Equilibrium",

    question: "A body is acted upon by two equal opposite forces. What is its acceleration?",

    answer: "0",

    explanation: "Net force is zero, therefore acceleration is zero."
},


// ==================================================
// VARIABLE MASS / SPECIAL CASES
// ==================================================

{
    category: "Newton's Laws",
    type: "Force Change",

    question: "A force acting on a body is doubled while mass remains constant. How does acceleration change?",

    answer: "Acceleration doubles",

    explanation: "From a=F/m, acceleration is directly proportional to force."
},


{
    category: "Newton's Laws",
    type: "Mass Change",

    question: "Force remains constant but mass is doubled. What happens to acceleration?",

    answer: "Acceleration becomes half",

    explanation: "a=F/m, therefore acceleration is inversely proportional to mass."
},


 
// ==================================================
// MOMENTUM & IMPULSE
// ==================================================

{
    category: "Momentum",
    type: "Basic Momentum",

    question: "A body of mass 5 kg moves with velocity 8 m/s. Find its momentum.",

    answer: "40 kg·m/s",

    explanation: "Momentum p = mv = 5×8 = 40 kg·m/s."
},


{
    category: "Momentum",
    type: "Change in Momentum",

    question: "A 2 kg ball changes its velocity from 5 m/s to 15 m/s in the same direction. Find change in momentum.",

    answer: "20 kg·m/s",

    explanation: "Δp=m(v-u)=2(15-5)=20 kg·m/s."
},


{
    category: "Momentum",
    type: "Change in Momentum",

    question: "A 1 kg object moving at 10 m/s comes to rest. Find impulse.",

    answer: "-10 N·s",

    explanation: "Impulse = change in momentum = m(v-u)=1(0-10)=-10 N·s."
},


{
    category: "Momentum",
    type: "Impulse",

    question: "A force of 50 N acts on a body for 0.2 s. Find impulse.",

    answer: "10 N·s",

    explanation: "Impulse J=FΔt=50×0.2=10 N·s."
},


{
    category: "Momentum",
    type: "Average Force",

    question: "A 0.5 kg ball changes velocity from 20 m/s to -10 m/s in 0.05 s. Find average force.",

    answer: "-300 N",

    explanation: "F=Δp/Δt =0.5(-10-20)/0.05=-300 N."
},


// ==================================================
// CONSERVATION OF MOMENTUM
// ==================================================

{
    category: "Momentum",
    type: "Two Body Collision",

    question: "A 2 kg body moving at 6 m/s collides with a stationary 4 kg body. They stick together. Find common velocity.",

    answer: "2 m/s",

    explanation: "m1u1+m2u2=(m1+m2)v. v=(2×6)/(6)=2 m/s."
},


{
    category: "Momentum",
    type: "Two Body Collision",

    question: "A 5 kg object moving at 10 m/s hits a 5 kg stationary object and they move together. Find final velocity.",

    answer: "5 m/s",

    explanation: "v=(5×10)/(5+5)=5 m/s."
},


{
    category: "Momentum",
    type: "Opposite Direction Collision",

    question: "A 4 kg object moving east at 5 m/s collides with a 6 kg object moving west at 3 m/s. They stick together. Find final velocity.",

    answer: "0.2 m/s west",

    explanation: "Taking east positive: v=(4×5+6×(-3))/(10)=(-2)/10=-0.2 m/s."
},


// ==================================================
// EXPLOSION PROBLEMS
// ==================================================

{
    category: "Momentum",
    type: "Explosion",

    question: "A 10 kg object at rest explodes into two parts of masses 4 kg and 6 kg. If the 4 kg part moves at 12 m/s east, find velocity of the other part.",

    answer: "8 m/s west",

    explanation: "Initial momentum=0. 4×12+6v=0. v=-8 m/s."
},


{
    category: "Momentum",
    type: "Explosion",

    question: "A stationary shell breaks into two fragments of equal mass. If one fragment moves with velocity 20 m/s, find velocity of the other.",

    answer: "20 m/s opposite direction",

    explanation: "Equal masses require equal and opposite momentum."
},


// ==================================================
// RECOIL PROBLEMS
// ==================================================

{
    category: "Momentum",
    type: "Gun Recoil",

    question: "A gun of mass 5 kg fires a bullet of mass 0.05 kg with velocity 400 m/s. Find recoil velocity.",

    answer: "4 m/s backward",

    explanation: "5v +0.05×400=0. Therefore v=-4 m/s."
},


{
    category: "Momentum",
    type: "Cannon Recoil",

    question: "A cannon of mass 1000 kg fires a shell of mass 10 kg with velocity 500 m/s. Find recoil velocity.",

    answer: "5 m/s backward",

    explanation: "1000v+10×500=0. v=-5 m/s."
},


// ==================================================
// MAN BOAT / PLATFORM PROBLEMS
// ==================================================

{
    category: "Momentum",
    type: "Man Boat",

    question: "A man of mass 60 kg jumps from a stationary boat of mass 120 kg with velocity 6 m/s relative to water. Find velocity of boat.",

    answer: "3 m/s opposite direction",

    explanation: "60×6+120v=0. v=-3 m/s."
},


{
    category: "Momentum",
    type: "Platform Movement",

    question: "A 50 kg person walks at 2 m/s on a 150 kg frictionless platform. Find platform velocity.",

    answer: "0.5 m/s opposite direction",

    explanation: "50×2+150v=0. v=-0.67 m/s relative approximation depending on reference frame."
},


// ==================================================
// BULLET BLOCK PROBLEMS
// ==================================================

{
    category: "Momentum",
    type: "Bullet Embedded in Block",

    question: "A bullet of mass 20 g moving at 200 m/s gets embedded in a 980 g block at rest. Find common velocity.",

    answer: "4 m/s",

    explanation: "Bullet mass=0.02kg. v=(0.02×200)/(1)=4 m/s."
},


{
    category: "Momentum",
    type: "Bullet Penetration",

    question: "A bullet loses half its velocity after passing through a wooden block. Find the ratio of momentum before and after.",

    answer: "2:1",

    explanation: "Momentum is proportional to velocity when mass remains constant."
},


// ==================================================
// FORCE-TIME GRAPH BASED
// ==================================================

{
    category: "Momentum",
    type: "Force Time Graph",

    question: "A force of 100 N acts uniformly for 5 seconds. Find impulse.",

    answer: "500 N·s",

    explanation: "Impulse equals area under force-time graph = F×t."
},


{
    category: "Momentum",
    type: "Variable Force",

    question: "A force increases linearly from 0 to 50 N in 4 seconds. Find impulse.",

    answer: "100 N·s",

    explanation: "Impulse = area of triangle = 1/2×base×height =1/2×4×50."
},


// ==================================================
// ADVANCED MOMENTUM CASES
// ==================================================

{
    category: "Momentum",
    type: "Centre of Mass",

    question: "Two masses 2 kg and 3 kg move with velocities 4 m/s and 6 m/s respectively in the same direction. Find velocity of centre of mass.",

    answer: "5.2 m/s",

    explanation: "Vcm=(2×4+3×6)/(5)=26/5=5.2 m/s."
},


{
    category: "Momentum",
    type: "Zero Momentum System",

    question: "Two bodies have equal mass and opposite velocities. Find velocity of centre of mass.",

    answer: "0",

    explanation: "Their momenta cancel each other."
},

// ==================================================
// COLLISION & IMPULSE ADVANCED PROBLEMS
// ==================================================

{
    category: "Collision",
    type: "Perfectly Elastic Collision",
    question: "A body of mass 2 kg moving with velocity 6 m/s collides elastically with another stationary body of mass 4 kg. Find the velocity of the first body after collision.",
    answer: "-2 m/s",
    explanation: "Using v₁ = ((m₁-m₂)u₁ + 2m₂u₂)/(m₁+m₂). Here u₂=0."
},

{
    category: "Collision",
    type: "Perfectly Elastic Collision",
    question: "A 5 kg body moving at 8 m/s collides elastically with a 3 kg stationary body. Find the velocity of the second body after collision.",
    answer: "10 m/s",
    explanation: "Using v₂ = (2m₁u₁)/(m₁+m₂)."
},

{
    category: "Collision",
    type: "Perfectly Inelastic Collision",
    question: "A 4 kg object moving at 10 m/s sticks with a 6 kg object moving in the same direction at 2 m/s. Find their common velocity.",
    answer: "5.2 m/s",
    explanation: "Use conservation of momentum: v=(m₁u₁+m₂u₂)/(m₁+m₂)."
},

{
    category: "Collision",
    type: "Perfectly Inelastic Collision",
    question: "A bullet of mass 20 g moving with velocity 400 m/s gets embedded into a wooden block of mass 980 g. Find the velocity of the combined system.",
    answer: "8 m/s",
    explanation: "Momentum before impact equals momentum after impact."
},

{
    category: "Collision",
    type: "Coefficient of Restitution",
    question: "Two balls approach each other with velocities 5 m/s and 3 m/s. After collision they separate with velocities 4 m/s and 2 m/s. Find coefficient of restitution.",
    answer: "1/4",
    explanation: "e = relative velocity of separation / relative velocity of approach."
},

{
    category: "Collision",
    type: "Energy Loss",
    question: "Two bodies of masses 2 kg and 3 kg collide and stick together. Their initial velocities are 10 m/s and 0 m/s. Find loss of kinetic energy.",
    answer: "60 J",
    explanation: "Loss = 1/2 × (m₁m₂/(m₁+m₂))(u₁-u₂)²."
},

{
    category: "Collision",
    type: "Explosion",
    question: "A bomb of mass 6 kg initially at rest explodes into two pieces of masses 2 kg and 4 kg. If the smaller piece moves at 12 m/s, find velocity of larger piece.",
    answer: "-6 m/s",
    explanation: "Initial momentum is zero, so final momentum must be zero."
},

{
    category: "Collision",
    type: "Rebound",
    question: "A ball falls from a height of 20 m and coefficient of restitution with ground is 0.5. Find the height after first rebound.",
    answer: "5 m",
    explanation: "h' = e²h."
},


{
    category: "Impulse",
    type: "Impulse Calculation",
    question: "A force of 50 N acts on a body for 0.4 s. Find the impulse produced.",
    answer: "20 Ns",
    explanation: "Impulse = Force × time."
},

{
    category: "Impulse",
    type: "Variable Force",
    question: "A force acting on a body changes momentum from 15 kgm/s to 45 kgm/s. Find impulse.",
    answer: "30 Ns",
    explanation: "Impulse equals change in momentum."
},

{
    category: "Impulse",
    type: "Average Force",
    question: "A 2 kg ball changes velocity from 10 m/s to -5 m/s in 0.1 s. Find average force.",
    answer: "-300 N",
    explanation: "F = m(v-u)/t."
},


// ==================================================
// FRICTION PROBLEMS
// ==================================================

{
    category: "Friction",
    type: "Static Friction",
    question: "A block of mass 10 kg rests on a rough horizontal surface. If coefficient of friction is 0.4, find limiting friction.",
    answer: "40 N",
    explanation: "Limiting friction = μN = μmg."
},

{
    category: "Friction",
    type: "Motion Under Friction",
    question: "A 5 kg block slides on a horizontal surface with coefficient of kinetic friction 0.2. Find acceleration.",
    answer: "-1.96 m/s²",
    explanation: "Friction opposes motion. a = -μg."
},

{
    category: "Friction",
    type: "Applied Force With Friction",
    question: "A horizontal force of 50 N pulls a 10 kg block. Coefficient of friction is 0.2. Find acceleration.",
    answer: "3.04 m/s²",
    explanation: "Net force = Applied force - friction."
},

{
    category: "Friction",
    type: "Angle of Friction",
    question: "A body has coefficient of friction 0.5. Find angle of friction.",
    answer: "26.6°",
    explanation: "tan λ = μ."
},

{
    category: "Friction",
    type: "Angle of Repose",
    question: "A block begins sliding on an inclined plane at 30°. Find coefficient of friction.",
    answer: "0.577",
    explanation: "Coefficient of friction = tan θ."
},

{
    category: "Friction",
    type: "Horizontal Pull",
    question: "A force pulls a 20 kg block at 30° above horizontal. If coefficient of friction is 0.25, find the normal reaction.",
    answer: "145.5 N",
    explanation: "Normal reaction decreases due to upward component of force."
},

{
    category: "Friction",
    type: "Horizontal Push",
    question: "A force pushes a block downward at an angle of 30°. Explain how friction changes.",
    answer: "Friction increases",
    explanation: "Downward component increases normal reaction."
},

{
    category: "Friction",
    type: "Rolling Friction",
    question: "Why is rolling friction smaller than sliding friction?",
    answer: "Because contact deformation and energy loss are smaller during rolling.",
    explanation: "Rolling avoids continuous sliding between surfaces."
},

// ==================================================
// INCLINED PLANE & CONNECTED BODY PROBLEMS
// ==================================================

{
    category: "Newton's Laws",
    type: "Inclined Plane Without Friction",
    question: "A block slides down a smooth inclined plane of angle 30°. Find its acceleration.",
    answer: "4.9 m/s²",
    explanation: "Acceleration on smooth incline = g sinθ."
},

{
    category: "Newton's Laws",
    type: "Inclined Plane With Friction",
    question: "A block slides down a rough inclined plane of angle 37°. Coefficient of friction is 0.25. Find acceleration.",
    answer: "4 m/s²",
    explanation: "a = g(sinθ - μcosθ)."
},

{
    category: "Newton's Laws",
    type: "Inclined Plane Upward Motion",
    question: "A body is projected upward along a rough inclined plane. Which forces act opposite to motion?",
    answer: "Component of weight and friction",
    explanation: "Both gravitational component and friction oppose upward motion."
},

{
    category: "Newton's Laws",
    type: "Minimum Force on Incline",
    question: "Find the minimum force required to move a block upward on an inclined plane.",
    answer: "Depends on μ, θ and mass",
    explanation: "Resolve forces parallel and perpendicular to plane."
},

{
    category: "Newton's Laws",
    type: "Angle of Repose",
    question: "A block is placed on an inclined plane. At 45° it just begins sliding. Find coefficient of friction.",
    answer: "1",
    explanation: "At limiting condition μ = tanθ."
},


{
    category: "Newton's Laws",
    type: "Two Blocks Connected by String",
    question: "Two blocks of masses 4 kg and 6 kg are connected by a string on a smooth surface. A force of 50 N pulls the 6 kg block. Find acceleration.",
    answer: "5 m/s²",
    explanation: "Treat both blocks as a single system: a = F/(m₁+m₂)."
},

{
    category: "Newton's Laws",
    type: "Tension Between Connected Blocks",
    question: "Two blocks of masses 3 kg and 7 kg are connected. A force of 40 N acts on the 3 kg block. Find tension in the string.",
    answer: "28 N",
    explanation: "Apply Newton's second law separately to each block."
},


{
    category: "Newton's Laws",
    type: "Atwood Machine",
    question: "Two masses 4 kg and 6 kg are connected over a smooth pulley. Find acceleration.",
    answer: "1.96 m/s²",
    explanation: "a = (m₂-m₁)g/(m₁+m₂)."
},

{
    category: "Newton's Laws",
    type: "Atwood Machine Tension",
    question: "Two masses 5 kg and 3 kg are connected by a light string over a pulley. Find tension.",
    answer: "36.75 N",
    explanation: "Use T = m₁(g+a) or m₂(g-a)."
},


{
    category: "Newton's Laws",
    type: "Three Block System",
    question: "Three blocks are connected on a smooth horizontal surface. A force acts on the first block. How is acceleration calculated?",
    answer: "a = F/(sum of masses)",
    explanation: "Consider all blocks as one system."
},


// ==================================================
// LIFT & ELEVATOR PROBLEMS
// ==================================================

{
    category: "Newton's Laws",
    type: "Lift Moving Upward",
    question: "A person of mass 60 kg stands inside a lift accelerating upward at 2 m/s². Find apparent weight.",
    answer: "708 N",
    explanation: "N = m(g+a)."
},

{
    category: "Newton's Laws",
    type: "Lift Moving Downward",
    question: "A person of mass 50 kg stands in a lift accelerating downward at 3 m/s². Find apparent weight.",
    answer: "340 N",
    explanation: "N = m(g-a)."
},

{
    category: "Newton's Laws",
    type: "Free Falling Lift",
    question: "What is the apparent weight of a person inside a freely falling lift?",
    answer: "Zero",
    explanation: "Both person and lift accelerate downward with g."
},

{
    category: "Newton's Laws",
    type: "Lift With Constant Velocity",
    question: "A lift moves upward with constant velocity. Find apparent weight of a person inside.",
    answer: "mg",
    explanation: "Acceleration is zero."
},


// ==================================================
// VARIABLE FORCE & MASS SYSTEMS
// ==================================================

{
    category: "Newton's Laws",
    type: "Variable Force",
    question: "A force F = 5t acts on a 2 kg body. Find acceleration at t = 4 s.",
    answer: "10 m/s²",
    explanation: "Calculate force first, then use F = ma."
},

{
    category: "Newton's Laws",
    type: "Rocket Motion",
    question: "A rocket moves upward due to expulsion of gases. Which principle explains its motion?",
    answer: "Conservation of momentum",
    explanation: "Momentum of rocket and gases remains conserved."
},


{
    category: "Newton's Laws",
    type: "Recoil",
    question: "A gun fires a bullet forward. Why does the gun recoil backward?",
    answer: "Conservation of momentum",
    explanation: "Total momentum before firing is zero."
},

{
    category: "Newton's Laws",
    type: "Walking Mechanism",
    question: "Why can a person walk forward?",
    answer: "Due to Newton's third law",
    explanation: "Foot pushes ground backward and ground pushes person forward."
},


{
    category: "Newton's Laws",
    type: "Horse Cart Problem",
    question: "A horse pulls a cart forward. Explain why the cart moves despite Newton's third law.",
    answer: "Ground exerts forward frictional force on horse.",
    explanation: "Action-reaction forces act on different bodies."
},

// ==================================================
// CENTRIPETAL FORCE & CIRCULAR MOTION APPLICATIONS
// ==================================================

{
    category: "Circular Motion",
    type: "Centripetal Force Basic",
    question: "A 2 kg object moves in a circle of radius 5 m with speed 10 m/s. Find centripetal force.",
    answer: "40 N",
    explanation: "Fc = mv²/r."
},

{
    category: "Circular Motion",
    type: "Change of Centripetal Force",
    question: "If the velocity of a particle in circular motion is doubled, how does centripetal force change?",
    answer: "Becomes four times",
    explanation: "Fc ∝ v²."
},

{
    category: "Circular Motion",
    type: "Radius Dependence",
    question: "A particle moves with constant speed in a circle. If radius is doubled, what happens to centripetal force?",
    answer: "Becomes half",
    explanation: "Fc = mv²/r."
},

{
    category: "Circular Motion",
    type: "Angular Velocity Form",
    question: "A body of mass 3 kg rotates with angular velocity 4 rad/s at radius 2 m. Find centripetal force.",
    answer: "96 N",
    explanation: "Fc = mrω²."
},


{
    category: "Circular Motion",
    type: "Centripetal Acceleration",
    question: "A car moves around a circular track of radius 50 m with speed 20 m/s. Find centripetal acceleration.",
    answer: "8 m/s²",
    explanation: "ac = v²/r."
},

{
    category: "Circular Motion",
    type: "Time Period Relation",
    question: "A particle completes a circle of radius 2 m in 4 seconds. Find centripetal acceleration.",
    answer: "π²/2 m/s²",
    explanation: "Use ac = 4π²r/T²."
},


// ==================================================
// VEHICLE TURNING ON FLAT ROAD
// ==================================================

{
    category: "Circular Motion",
    type: "Friction Providing Centripetal Force",
    question: "Why does a vehicle require friction while turning on a horizontal road?",
    answer: "Friction provides centripetal force",
    explanation: "Without friction the vehicle moves tangentially."
},

{
    category: "Circular Motion",
    type: "Maximum Speed on Flat Road",
    question: "A car turns on a horizontal road of radius 50 m. If coefficient of friction is 0.4, find maximum safe speed.",
    answer: "14 m/s",
    explanation: "vmax = √(μrg)."
},

{
    category: "Circular Motion",
    type: "Effect of Road Condition",
    question: "Why is turning speed lower on a wet road?",
    answer: "Because coefficient of friction decreases",
    explanation: "Less friction means less centripetal force available."
},


{
    category: "Circular Motion",
    type: "Skidding Condition",
    question: "A vehicle skids while turning. What force was insufficient?",
    answer: "Frictional force",
    explanation: "Required centripetal force exceeded available friction."
},


// ==================================================
// BANKING OF ROADS
// ==================================================

{
    category: "Circular Motion",
    type: "Banking Without Friction",
    question: "A road is banked at angle θ. Find condition for no friction requirement.",
    answer: "tanθ = v²/rg",
    explanation: "Horizontal component of normal provides centripetal force."
},

{
    category: "Circular Motion",
    type: "Angle of Banking",
    question: "A road has radius 100 m and vehicles move at 20 m/s. Find banking angle.",
    answer: "≈22°",
    explanation: "tanθ = v²/rg."
},

{
    category: "Circular Motion",
    type: "Effect of Increasing Speed",
    question: "If speed of vehicle increases on a banked road, what happens?",
    answer: "Required banking angle increases",
    explanation: "Because v² term increases."
},


{
    category: "Circular Motion",
    type: "Railway Track Banking",
    question: "Why are railway tracks banked at curves?",
    answer: "To reduce dependence on friction",
    explanation: "Normal reaction provides centripetal force component."
},


// ==================================================
// CENTRIFUGAL FORCE APPLICATIONS
// ==================================================

{
    category: "Circular Motion",
    type: "Centrifugal Force Frame",
    question: "Centrifugal force is observed in which frame?",
    answer: "Rotating reference frame",
    explanation: "It is a pseudo force appearing in non-inertial frames."
},

{
    category: "Circular Motion",
    type: "Bucket With Water",
    question: "A bucket filled with water is rotated vertically. Why does water not fall at the highest point?",
    answer: "Centripetal force requirement keeps water attached",
    explanation: "At sufficient speed, gravity is unable to separate water."
},

{
    category: "Circular Motion",
    type: "Minimum Speed of Bucket",
    question: "Find minimum speed required at the top of vertical circular motion for water to remain inside.",
    answer: "v = √(rg)",
    explanation: "At minimum speed normal reaction becomes zero."
},


{
    category: "Circular Motion",
    type: "Washing Machine",
    question: "Why does water leave clothes during spinning in a washing machine?",
    answer: "Due to centrifugal effect",
    explanation: "Water tends to move outward when clothes rotate."
},


// ==================================================
// VERTICAL CIRCULAR MOTION
// ==================================================

{
    category: "Circular Motion",
    type: "Vertical Circle Bottom Point",
    question: "A particle moves in a vertical circle. Where is tension maximum?",
    answer: "At the lowest point",
    explanation: "T = mv²/r + mg."
},

{
    category: "Circular Motion",
    type: "Vertical Circle Top Point",
    question: "What is the minimum velocity at the top of a vertical circle?",
    answer: "√(rg)",
    explanation: "For just maintaining circular motion."
},

{
    category: "Circular Motion",
    type: "Tension Difference",
    question: "In vertical circular motion, what is the difference between bottom and top tension?",
    answer: "2mg",
    explanation: "Tbottom = mv²/r + mg, Ttop = mv²/r - mg."
},


{
    category: "Circular Motion",
    type: "Loop The Loop",
    question: "A car completes a vertical loop. What condition prevents falling at the top?",
    answer: "v²/r ≥ g",
    explanation: "Centripetal acceleration must be at least equal to gravity."
},


// ==================================================
// MIXED NEWTONIAN APPLICATION
// ==================================================

{
    category: "Mixed Dynamics",
    type: "Friction + Circular Motion",
    question: "A car moves on a rough circular track. Which force supplies centripetal force?",
    answer: "Static friction",
    explanation: "Friction acts toward the centre."
},

{
    category: "Mixed Dynamics",
    type: "Newton + Circular Motion",
    question: "A satellite revolves around Earth. Which force provides centripetal force?",
    answer: "Gravitational force",
    explanation: "Gravity keeps satellite in orbit."
},

{
    category: "Mixed Dynamics",
    type: "String Tension Circular Motion",
    question: "A stone tied to a string rotates in a circle. What provides centripetal force?",
    answer: "Tension in string",
    explanation: "String pulls stone toward centre."
},


// ==================================================
// TORQUE & ROTATIONAL DYNAMICS
// ==================================================

{
    category: "Rotational Motion",
    type: "Torque Basic",
    question: "A force of 20 N acts perpendicular to a rod at a distance of 2 m from the axis. Find torque.",
    answer: "40 Nm",
    explanation: "τ = rF sinθ. Here θ = 90°."
},

{
    category: "Rotational Motion",
    type: "Torque at Angle",
    question: "A force of 50 N acts at 30° angle on a lever of length 4 m. Find torque.",
    answer: "100 Nm",
    explanation: "τ = rF sinθ."
},

{
    category: "Rotational Motion",
    type: "Zero Torque Condition",
    question: "When does a force produce zero torque?",
    answer: "When line of action passes through axis of rotation.",
    explanation: "Perpendicular distance becomes zero."
},

{
    category: "Rotational Motion",
    type: "Newton's Second Law for Rotation",
    question: "A body with moment of inertia 5 kgm² has angular acceleration 4 rad/s². Find torque.",
    answer: "20 Nm",
    explanation: "τ = Iα."
},

{
    category: "Rotational Motion",
    type: "Angular Acceleration",
    question: "A torque of 30 Nm acts on a wheel of moment of inertia 10 kgm². Find angular acceleration.",
    answer: "3 rad/s²",
    explanation: "α = τ/I."
},


// ==================================================
// COUPLE
// ==================================================

{
    category: "Rotational Motion",
    type: "Couple Moment",
    question: "Two equal and opposite forces of 40 N act on a body separated by 0.5 m. Find moment of couple.",
    answer: "20 Nm",
    explanation: "Moment of couple = force × perpendicular distance."
},

{
    category: "Rotational Motion",
    type: "Properties of Couple",
    question: "Does a couple produce translational motion?",
    answer: "No, it only produces rotation.",
    explanation: "Net force of a couple is zero."
},


// ==================================================
// MOMENT OF INERTIA NUMERICALS
// ==================================================

{
    category: "Moment of Inertia",
    type: "Radius of Gyration",
    question: "A body has mass 8 kg and moment of inertia 32 kgm². Find radius of gyration.",
    answer: "2 m",
    explanation: "k = √(I/M)."
},

{
    category: "Moment of Inertia",
    type: "Change of Axis",
    question: "A rod has moment of inertia I about its centre. Find MI about an axis through one end.",
    answer: "I + M(L/2)²",
    explanation: "Use parallel axis theorem."
},

{
    category: "Moment of Inertia",
    type: "Ring vs Disc",
    question: "A ring and disc have same mass and radius. Which has greater moment of inertia?",
    answer: "Ring",
    explanation: "More mass is concentrated away from axis."
},

{
    category: "Moment of Inertia",
    type: "Moment of Inertia Comparison",
    question: "Four objects have same mass and radius: ring, disc, solid sphere and rod. Which has maximum MI about central axis?",
    answer: "Ring",
    explanation: "Maximum mass distribution from axis."
},


// ==================================================
// ANGULAR MOMENTUM
// ==================================================

{
    category: "Angular Momentum",
    type: "Angular Momentum Basic",
    question: "A disc of moment of inertia 4 kgm² rotates with angular velocity 5 rad/s. Find angular momentum.",
    answer: "20 kgm²/s",
    explanation: "L = Iω."
},

{
    category: "Angular Momentum",
    type: "Conservation of Angular Momentum",
    question: "A skater pulls arms inward while rotating. What happens to angular velocity?",
    answer: "Angular velocity increases",
    explanation: "I decreases, so ω increases to conserve L."
},

{
    category: "Angular Momentum",
    type: "Changing Radius",
    question: "A rotating body reduces its radius to half without external torque. What happens to angular velocity?",
    answer: "Angular velocity increases",
    explanation: "L = Iω remains constant."
},

{
    category: "Angular Momentum",
    type: "Planetary Motion",
    question: "Which conservation law explains faster motion of planets near the Sun?",
    answer: "Conservation of angular momentum",
    explanation: "Areal velocity remains constant."
},


// ==================================================
// FLYWHEEL PROBLEMS
// ==================================================

{
    category: "Rotational Motion",
    type: "Flywheel Purpose",
    question: "Why is a flywheel used in machines?",
    answer: "To store rotational kinetic energy and maintain uniform speed.",
    explanation: "Large moment of inertia stores energy."
},

{
    category: "Rotational Motion",
    type: "Rotational Energy",
    question: "A flywheel of MI 20 kgm² rotates at 10 rad/s. Find rotational kinetic energy.",
    answer: "1000 J",
    explanation: "KE = 1/2 Iω²."
},

{
    category: "Rotational Motion",
    type: "Flywheel Energy Change",
    question: "If angular velocity of a flywheel doubles, how does rotational energy change?",
    answer: "Becomes four times",
    explanation: "Energy ∝ ω²."
},


// ==================================================
// ROLLING MOTION
// ==================================================

{
    category: "Rolling Motion",
    type: "Pure Rolling Condition",
    question: "A wheel rolls without slipping. What is relation between linear and angular velocity?",
    answer: "v = Rω",
    explanation: "Condition of pure rolling."
},

{
    category: "Rolling Motion",
    type: "Rolling Acceleration",
    question: "A wheel has radius 0.5 m and angular acceleration 4 rad/s². Find linear acceleration.",
    answer: "2 m/s²",
    explanation: "a = Rα."
},

{
    category: "Rolling Motion",
    type: "Rolling Down Incline",
    question: "Which reaches bottom first on an inclined plane: solid sphere or ring?",
    answer: "Solid sphere",
    explanation: "Lower rotational inertia gives greater acceleration."
},

{
    category: "Rolling Motion",
    type: "Energy Distribution",
    question: "In rolling motion, total kinetic energy consists of what two parts?",
    answer: "Translational and rotational kinetic energy",
    explanation: "KE = 1/2mv² + 1/2Iω²."
},


// ==================================================
// FLUID FRICTION
// ==================================================

{
    category: "Friction",
    type: "Viscous Force",
    question: "Which law gives viscous force for a small sphere moving through fluid?",
    answer: "Stokes' law",
    explanation: "F = 6πηrv."
},

{
    category: "Friction",
    type: "Terminal Velocity",
    question: "A falling body inside a fluid eventually reaches constant velocity. Why?",
    answer: "Viscous force balances weight.",
    explanation: "Net force becomes zero."
},

{
    category: "Friction",
    type: "Factors Affecting Viscous Force",
    question: "On which factors does viscous force depend?",
    answer: "Viscosity, radius, velocity",
    explanation: "From Stokes' law."
},

{
    category: "Friction",
    type: "Fluid Friction",
    question: "Why are vehicles designed with streamlined shapes?",
    answer: "To reduce fluid friction.",
    explanation: "Streamlining decreases drag force."
},


// ==================================================
// MIXED ADVANCED NEWTONIAN PROBLEMS
// ==================================================

{
    category: "Mixed Dynamics",
    type: "Torque + Angular Momentum",
    question: "A constant torque acts on a rotating body. What happens to angular momentum?",
    answer: "It changes uniformly.",
    explanation: "τ = dL/dt."
},

{
    category: "Mixed Dynamics",
    type: "Collision + Rotation",
    question: "A bullet strikes a rotating disc and sticks to it. Which conservation law is applied?",
    answer: "Conservation of angular momentum.",
    explanation: "External torque is negligible during impact."
},

{
    category: "Mixed Dynamics",
    type: "Rolling + Energy",
    question: "A solid sphere rolls down an incline without slipping. Which energy remains conserved?",
    answer: "Mechanical energy.",
    explanation: "Static friction does no work in pure rolling."
},

// ==================================================
// ADDITIONAL NEWTON'S LAWS & FRICTION CASES
// ==================================================


// ==================================================
// TWO BLOCK FRICTION SYSTEM
// ==================================================

{
    category: "Friction",
    type: "Two Blocks Friction",

    question: "A 4 kg block is placed on a 6 kg block. The coefficient of friction between them is 0.5. A horizontal force of 20 N is applied on the lower block. Find acceleration of the system. Take g=10 m/s².",

    answer: "2 m/s²",

    explanation: "Maximum friction between blocks = μN =0.5×4×10=20N. Since required friction equals limiting friction, both blocks move together. a=F/(m1+m2)=20/10=2 m/s²."
},


{
    category: "Friction",
    type: "No Slipping Condition",

    question: "A 2 kg block is placed on a 8 kg block. The coefficient of friction between them is 0.4. Find maximum acceleration of the lower block so that the upper block does not slip. Take g=10 m/s².",

    answer: "4 m/s²",

    explanation: "Friction required to accelerate upper block: f=ma. Maximum friction = μmg. Therefore a=μg=0.4×10=4 m/s²."
},


{
    category: "Friction",
    type: "Friction Direction Between Blocks",

    question: "A lower block is pulled to the right while an upper block rests on it without slipping. In which direction does friction act on the upper block?",

    answer: "Right",

    explanation: "Friction opposes relative motion. The upper block tends to lag behind, so friction pulls it forward."
},



// ==================================================
// FORCE AT ANGLE & MINIMUM FORCE
// ==================================================


{
    category: "Friction",
    type: "Minimum Pulling Force",

    question: "A block of mass 10 kg rests on a rough horizontal surface with coefficient of friction 0.5. Find minimum horizontal force required to start motion. Take g=10 m/s².",

    answer: "50 N",

    explanation: "Minimum force equals limiting friction. F=μmg=0.5×10×10=50N."
},


{
    category: "Friction",
    type: "Pulling at Angle",

    question: "A 20 kg block is pulled by a force at an angle θ above horizontal. If coefficient of friction is μ, find the angle at which minimum force is required.",

    answer: "tanθ=μ",

    explanation: "For minimum pulling force, differentiate force equation or use optimum condition tanθ=μ."
},


{
    category: "Friction",
    type: "Minimum Force With Angle",

    question: "A 10 kg block lies on a rough surface with μ=0.5. Find minimum force required to move it by pulling at optimum angle. Take g=10 m/s².",

    answer: "≈44.7 N",

    explanation: "Minimum force = μmg/√(1+μ²)=50/√1.25≈44.7N."
},



// ==================================================
// BLOCK + PULLEY + FRICTION
// ==================================================


{
    category: "Newton's Laws",
    type: "Pulley With Rough Table",

    question: "A 5 kg block on a rough horizontal table is connected to a hanging 3 kg mass through a pulley. Coefficient of friction is 0.2. Find acceleration. Take g=10 m/s².",

    answer: "1.25 m/s²",

    explanation: "Driving force=30N. Friction=μmg=0.2×5×10=10N. Net force=20N. Total mass=8kg. a=20/8=2.5 m/s²."
},


{
    category: "Newton's Laws",
    type: "Pulley Tension With Friction",

    question: "A 4 kg block on a rough table is connected to a 2 kg hanging mass. Coefficient of friction is 0.25. Find tension if system accelerates. Take g=10 m/s².",

    answer: "≈16.7 N",

    explanation: "Friction=0.25×4×10=10N. Net force=20-10=10N. Acceleration=10/6=1.67m/s². T=20-2(1.67)=16.7N."
},



// ==================================================
// FRICTION ON VERTICAL WALL
// ==================================================


{
    category: "Friction",

    type: "Vertical Wall Friction",

    question: "A block of mass 5 kg is pressed against a vertical wall by a horizontal force of 200 N. If coefficient of friction is 0.3, will the block remain stationary? Take g=10 m/s².",

    answer: "No",

    explanation: "Maximum friction=μN=0.3×200=60N. Weight=50N. Since friction can balance weight, block remains stationary."
},


{
    category: "Friction",

    type: "Minimum Force Against Wall",

    question: "Find minimum horizontal force required to keep a 10 kg block stationary against a vertical wall if μ=0.5.",

    answer: "200 N",

    explanation: "μF=mg. Therefore F=mg/μ=100/0.5=200N."
},



// ==================================================
// FRICTION DIRECTION CASES
// ==================================================


{
    category: "Friction",

    type: "Static Friction Direction",

    question: "A block is pushed horizontally but the force is less than limiting friction. What is the direction of friction?",

    answer: "Opposite to tendency of motion",

    explanation: "Static friction adjusts itself according to applied force."
},


{
    category: "Friction",

    type: "Rolling Friction",

    question: "Why is rolling friction smaller than sliding friction?",

    answer: "Because there is no continuous sliding between surfaces",

    explanation: "Only deformation occurs, reducing energy loss."
},



// ==================================================
// LADDER FRICTION
// ==================================================


{
    category: "Friction",

    type: "Ladder Equilibrium",

    question: "A ladder rests against a smooth wall and rough floor. Which force prevents slipping at the floor?",

    answer: "Static friction",

    explanation: "The floor friction balances the horizontal reaction from wall."
},


{
    category: "Friction",

    type: "Ladder Angle of Stability",

    question: "A ladder is just about to slip when making angle θ with horizontal. Find relation with coefficient of friction.",

    answer: "μ=tanθ",

    explanation: "At limiting equilibrium, angle of repose condition applies."
},


// ==================================================
// ADVANCED FORCE SYSTEM
// ==================================================


{
    category: "Newton's Laws",

    type: "Three Force Equilibrium",

    question: "Three forces act on a particle and keep it in equilibrium. If two forces are 6N and 8N perpendicular to each other, find third force.",

    answer: "10 N",

    explanation: "Third force balances resultant. R=√(6²+8²)=10N."
},


{
    category: "Newton's Laws",

    type: "Force Resolution",

    question: "A force of 100N acts at 37° above horizontal. Find its horizontal and vertical components.",

    answer: "80N and 60N",

    explanation: "Fx=100cos37=80N, Fy=100sin37=60N."
},



// ==================================================
// ACCELERATING FRAME
// ==================================================


{
    category: "Newton's Laws",

    type: "Pseudo Force In Elevator",

    question: "A person inside a lift accelerating downward experiences reduced weight. Explain using pseudo force.",

    answer: "Pseudo force acts upward",

    explanation: "In accelerating frame, pseudo force acts opposite to acceleration."
},


// ==================================================
// ADDITIONAL COLLISION & MOMENTUM CASES
// ==================================================


// ==================================================
// COLLISION WITH WALL
// ==================================================

{
    category: "Collision",

    type: "Elastic Collision With Wall",

    question: "A ball of mass 0.5 kg moving with velocity 20 m/s strikes a rigid wall normally and rebounds with the same velocity. Find impulse produced.",

    answer: "20 N·s",

    explanation: "Impulse = change in momentum = m(v-u). Taking initial velocity +20 and final velocity -20, J=0.5(-20-20)=-20 N·s. Magnitude =20N·s."
},


{
    category: "Collision",

    type: "Collision With Wall Partial Rebound",

    question: "A ball of mass 2 kg moving at 10 m/s strikes a wall and rebounds at 6 m/s. Find impulse.",

    answer: "32 N·s",

    explanation: "Initial velocity =10, final velocity=-6. J=m(v-u)=2(-6-10)=-32N·s. Magnitude=32N·s."
},



{
    category: "Collision",

    type: "Force During Collision",

    question: "A 1 kg ball changes velocity from 15 m/s to -5 m/s in 0.02 s after collision. Find average force.",

    answer: "-1000 N",

    explanation: "F=Δp/Δt=m(v-u)/t=(1(-5-15))/0.02=-1000N."
},



// ==================================================
// OBLIQUE COLLISION
// ==================================================

{
    category: "Collision",

    type: "Oblique Collision With Wall",

    question: "A ball strikes a smooth wall with velocity u at an angle θ. The collision is perfectly elastic. What happens to the velocity component parallel to the wall?",

    answer: "It remains unchanged",

    explanation: "Only normal component changes direction during collision."
},


{
    category: "Collision",

    type: "Impulse In Oblique Collision",

    question: "A ball of mass m strikes a smooth wall with velocity u at angle θ. Find impulse magnitude.",

    answer: "2mu cosθ",

    explanation: "Only normal velocity component changes. Change in momentum =2m(u cosθ)."
},



// ==================================================
// TWO DIMENSIONAL MOMENTUM
// ==================================================

{
    category: "Momentum",

    type: "Two Dimensional Explosion",

    question: "A stationary object explodes into two fragments. One fragment moves east with momentum 40 kgm/s. Find momentum of the other fragment.",

    answer: "40 kgm/s west",

    explanation: "Total momentum remains zero."
},


{
    category: "Momentum",

    type: "Perpendicular Collision",

    question: "A 3 kg body moving east at 4 m/s and a 4 kg body moving north at 3 m/s stick together. Find magnitude of final velocity.",

    answer: "2.4 m/s",

    explanation: "Momentum components: Px=12, Py=12. Resultant momentum=√288. Total mass=7kg. v=16.97/7≈2.4m/s."
},


{
    category: "Momentum",

    type: "Momentum Vector Conservation",

    question: "In a two dimensional collision, which quantities are conserved when external force is absent?",

    answer: "Momentum components in x and y directions",

    explanation: "Momentum conservation applies independently in each direction."
},



// ==================================================
// COLLISION ENERGY CASES
// ==================================================

{
    category: "Collision",

    type: "Energy Loss Using Restitution",

    question: "Two bodies collide with relative velocity 10 m/s and coefficient of restitution 0.6. Find relative velocity after collision.",

    answer: "6 m/s",

    explanation: "Relative separation velocity = e × relative approach velocity =0.6×10=6m/s."
},


{
    category: "Collision",

    type: "Elastic Collision Special Case",

    question: "A small mass collides elastically with an identical stationary mass. What happens after collision?",

    answer: "First body stops and second moves with same velocity",

    explanation: "For equal masses in elastic collision, velocities exchange."
},



// ==================================================
// EXPLOSION ADVANCED
// ==================================================

{
    category: "Momentum",

    type: "Explosion Energy",

    question: "A body at rest explodes into two equal masses. One fragment gets velocity v. Find velocity of the other fragment.",

    answer: "v opposite direction",

    explanation: "Equal masses must have equal opposite momenta."
},


{
    category: "Momentum",

    type: "Explosion Momentum Ratio",

    question: "A body explodes into masses 2 kg and 6 kg. If the smaller mass moves at 12 m/s, find velocity of larger mass.",

    answer: "4 m/s opposite direction",

    explanation: "2×12 + 6v=0. Therefore v=-4m/s."
},



// ==================================================
// CENTRE OF MASS ADDITIONAL CASES
// ==================================================

{
    category: "Centre of Mass",

    type: "Position of Centre of Mass",

    question: "Two masses 2 kg and 3 kg are placed at x=0 m and x=10 m. Find centre of mass position.",

    answer: "6 m",

    explanation: "xcm=(2×0+3×10)/(2+3)=6m."
},


{
    category: "Centre of Mass",

    type: "Three Particle Centre of Mass",

    question: "Three particles of masses 1 kg, 2 kg and 3 kg are placed at positions 0m, 2m and 4m. Find x-coordinate of centre of mass.",

    answer: "2.67 m",

    explanation: "xcm=(1×0+2×2+3×4)/6=16/6=2.67m."
},


{
    category: "Centre of Mass",

    type: "Centre of Mass Acceleration",

    question: "A system of total mass 10 kg experiences external force 50 N. Find acceleration of centre of mass.",

    answer: "5 m/s²",

    explanation: "Fext=MaCM. Therefore aCM=50/10=5m/s²."
},



// ==================================================
// ANGULAR MOMENTUM & TORQUE
// ==================================================

{
    category: "Rotational Motion",

    type: "Angular Impulse",

    question: "A torque of 20 Nm acts on a body for 5 seconds. Find change in angular momentum.",

    answer: "100 kgm²/s",

    explanation: "Angular impulse = τt = ΔL."
},


{
    category: "Rotational Motion",

    type: "Torque Power Relation",

    question: "A motor produces torque 50 Nm while rotating at angular velocity 20 rad/s. Find power.",

    answer: "1000 W",

    explanation: "Power = τω."
},


{
    category: "Rotational Motion",

    type: "Rotational Work",

    question: "A constant torque of 10 Nm rotates a wheel through 5 radians. Find work done.",

    answer: "50 J",

    explanation: "Work = torque × angular displacement."
},



// ==================================================
// ROTATIONAL COLLISION
// ==================================================

{
    category: "Rotational Motion",

    type: "Bullet Hits Rotating Rod",

    question: "A bullet strikes a rod hinged at one end and sticks to it. Which conservation law is used during collision?",

    answer: "Conservation of angular momentum",

    explanation: "External torque about hinge is zero during short collision."
},


{
    category: "Rotational Motion",

    type: "Angular Momentum Conservation",

    question: "A person on a rotating platform pulls weights closer to body. What happens to angular velocity?",

    answer: "It increases",

    explanation: "Moment of inertia decreases, so angular velocity increases to keep L constant."
},



// ==================================================
// FLYWHEEL ADVANCED
// ==================================================

{
    category: "Rotational Motion",

    type: "Rotational Power",

    question: "A flywheel rotates with torque 100 Nm and angular velocity 15 rad/s. Find power.",

    answer: "1500 W",

    explanation: "P=τω."
},



// ==================================================
// ROLLING MOTION ADVANCED
// ==================================================

{
    category: "Rolling Motion",

    type: "Rolling Acceleration",

    question: "Find acceleration of a solid sphere rolling down a smooth incline of angle θ.",

    answer: "5g sinθ / 7",

    explanation: "a=g sinθ/(1+I/MR²). For solid sphere I=2MR²/5."
},


{
    category: "Rolling Motion",

    type: "Rolling Acceleration Ring",

    question: "Find acceleration of a ring rolling down an incline.",

    answer: "g sinθ / 2",

    explanation: "For ring I=MR², therefore a=g sinθ/(1+1)."
},


{
    category: "Rolling Motion",

    type: "Cylinder Rolling",

    question: "A solid cylinder rolls down an incline. Find acceleration.",

    answer: "2g sinθ/3",

    explanation: "For cylinder I=MR²/2."
},


// ==================================================
// ADDITIONAL CIRCULAR MOTION, ROTATION & EQUILIBRIUM CASES
// ==================================================


// ==================================================
// CONICAL PENDULUM
// ==================================================

{
    category: "Circular Motion",

    type: "Conical Pendulum Basic",

    question: "A bob of mass m is attached to a string of length l and moves in a horizontal circle making angle θ with vertical. Find relation between angular velocity and θ.",

    answer: "ω² = g/(l cosθ)",

    explanation: "Vertical component of tension balances weight and horizontal component provides centripetal force."
},


{
    category: "Circular Motion",

    type: "Conical Pendulum Tension",

    question: "A bob of mass 2 kg forms a conical pendulum at angle 60° with vertical. Find tension. Take g=10 m/s².",

    answer: "40 N",

    explanation: "T cosθ=mg. T=mg/cos60°=20/0.5=40N."
},


{
    category: "Circular Motion",

    type: "Conical Pendulum Angular Velocity",

    question: "A conical pendulum has string length 2 m and angle 60°. Find angular velocity. Take g=10 m/s².",

    answer: "√10 rad/s",

    explanation: "ω²=g/(l cosθ)=10/(2×0.5)=10."
},


{
    category: "Circular Motion",

    type: "Conical Pendulum Radius",

    question: "A conical pendulum has string length l and angle θ. Find radius of circular path.",

    answer: "r=l sinθ",

    explanation: "Radius is the horizontal component of string length."
},



// ==================================================
// CYCLIST LEANING & TURNING
// ==================================================

{
    category: "Circular Motion",

    type: "Cyclist Leaning",

    question: "Why does a cyclist lean inward while taking a turn?",

    answer: "To provide necessary centripetal force and avoid toppling",

    explanation: "The resultant of forces must pass through the centre of gravity."
},


{
    category: "Circular Motion",

    type: "Cyclist Banking Relation",

    question: "A cyclist moves on a circular road of radius r with velocity v. Find angle of leaning.",

    answer: "tanθ=v²/rg",

    explanation: "The lean angle follows the same principle as banking."
},


{
    category: "Circular Motion",

    type: "Maximum Speed Turning",

    question: "A cyclist takes a turn of radius 20 m. If leaning angle is 45°, find speed. Take g=10m/s².",

    answer: "14.14 m/s",

    explanation: "tan45=v²/rg. Therefore v=√(20×10)=14.14m/s."
},



// ==================================================
// VERTICAL CIRCULAR MOTION ADVANCED
// ==================================================

{
    category: "Circular Motion",

    type: "Vertical Circle Minimum Height",

    question: "A particle is released from a height to complete a vertical circle of radius R. Find minimum height required.",

    answer: "5R/2",

    explanation: "Using conservation of energy and minimum velocity condition at top."
},


{
    category: "Circular Motion",

    type: "Vertical Circle Tension Bottom",

    question: "A particle of mass m moves in a vertical circle with velocity v at the lowest point. Find tension.",

    answer: "T=mv²/R+mg",

    explanation: "Tension provides both centripetal force and balances weight."
},


{
    category: "Circular Motion",

    type: "Vertical Circle Tension Top",

    question: "A particle moves at velocity v at the highest point of a vertical circle. Find tension.",

    answer: "T=mv²/R-mg",

    explanation: "Both gravity and tension act toward centre at the top."
},


{
    category: "Circular Motion",

    type: "Vertical Circle Zero Tension",

    question: "At what condition does tension become zero at the top of a vertical circle?",

    answer: "v²/R=g",

    explanation: "Gravity alone provides the required centripetal force."
},



// ==================================================
// CENTRIPETAL FORCE MIXED APPLICATIONS
// ==================================================

{
    category: "Circular Motion",

    type: "String Breaking Problem",

    question: "A stone tied to a string rotates in a circle. If velocity is increased, why may the string break?",

    answer: "Required centripetal force exceeds maximum tension",

    explanation: "Centripetal force increases with square of velocity."
},


{
    category: "Circular Motion",

    type: "Horizontal Circle Tension",

    question: "A stone of mass 1 kg rotates in a horizontal circle of radius 2m with velocity 6m/s. Find tension in string.",

    answer: "18 N",

    explanation: "T=mv²/r=36/2=18N."
},



// ==================================================
// EQUILIBRIUM, BEAM & HINGE PROBLEMS
// ==================================================

{
    category: "Rotational Motion",

    type: "Beam Equilibrium",

    question: "A uniform rod of length 4m and weight 100N is supported at its centre. Find reaction force.",

    answer: "100 N upward",

    explanation: "For equilibrium, upward reaction balances weight."
},


{
    category: "Rotational Motion",

    type: "Torque Balance Rod",

    question: "A uniform rod is hinged at one end. Where does its weight act?",

    answer: "At centre of mass",

    explanation: "For a uniform rod, centre of mass is at L/2."
},


{
    category: "Rotational Motion",

    type: "Hinge Reaction",

    question: "A horizontal force acts on a hinged rod. Which two conditions are used for equilibrium?",

    answer: "Sum of forces and sum of torques must be zero",

    explanation: "Translational and rotational equilibrium are both required."
},


{
    category: "Rotational Motion",

    type: "Door Torque",

    question: "Why is a door handle placed far from the hinge?",

    answer: "To increase torque",

    explanation: "Torque = force × perpendicular distance."
},



// ==================================================
// ADVANCED ROLLING + ENERGY
// ==================================================

{
    category: "Rolling Motion",

    type: "Rolling Energy Conservation",

    question: "A solid sphere rolls down an incline without slipping. Which friction acts?",

    answer: "Static friction",

    explanation: "Point of contact has no relative motion."
},


{
    category: "Rolling Motion",

    type: "Rolling Velocity From Height",

    question: "A ring rolls down from height h. Find velocity at bottom.",

    answer: "v=√gh",

    explanation: "Using energy conservation: mgh=1/2mv²+1/2Iω². For ring I=MR²."
},


{
    category: "Rolling Motion",

    type: "Rolling Comparison",

    question: "A sphere, cylinder and ring roll down the same incline. Which reaches first?",

    answer: "Solid sphere",

    explanation: "Smaller rotational inertia gives greater acceleration."
},



// ==================================================
// MIXED ADVANCED DYNAMICS
// ==================================================

{
    category: "Mixed Dynamics",

    type: "Collision And Rotation",

    question: "A bullet hits a suspended rod and sticks to it. Which quantities are conserved during impact?",

    answer: "Angular momentum about suspension point",

    explanation: "External impulsive torque about hinge is zero."
},


{
    category: "Mixed Dynamics",

    type: "Friction And Rotation",

    question: "A wheel rolls without slipping. What provides the torque needed for rotation?",

    answer: "Static friction",

    explanation: "Friction creates rotational acceleration."
},


{
    category: "Mixed Dynamics",

    type: "Energy In Rolling",

    question: "A rolling object has both translational and rotational kinetic energy. Which formula gives total energy?",

    answer: "K=1/2mv²+1/2Iω²",

    explanation: "Rolling motion combines translation and rotation."
},


{
    category: "Mixed Dynamics",

    type: "Torque Angular Momentum Relation",

    question: "A torque of constant magnitude acts on a body. How does angular momentum change?",

    answer: "Angular momentum changes uniformly",

    explanation: "τ=dL/dt."
},


{
    category: "Mixed Dynamics",

    type: "Centrifugal Force Application",

    question: "Why do passengers feel pushed outward when a vehicle turns?",

    answer: "Due to inertia in a rotating frame",

    explanation: "Centrifugal force appears in the non-inertial frame."
},



    ]

};