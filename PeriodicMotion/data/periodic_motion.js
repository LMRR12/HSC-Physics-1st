// ==========================================
// Physics Practice Book
// Chapter 8 : Periodic Motion
// data/periodic_motion.js
// ==========================================

const chapterData = {

    title: "Chapter 8 : Periodic Motion",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [
    
        // ==================================================
// PERIODIC MOTION FUNDAMENTALS
// ==================================================

{
    category:"Periodic Motion",

    title:"Time Period",

    formula:"T=\\frac{Total\\;time}{Number\\;of\\;oscillations}",

    description:"Time required to complete one complete oscillation."
},

{
    category:"Periodic Motion",

    title:"Frequency",

    formula:"f=\\frac{1}{T}",

    description:"Number of oscillations completed per unit time."
},

{
    category:"Periodic Motion",

    title:"Angular Frequency",

    formula:"\\omega=2\\pi f",

    description:"Angular frequency of periodic motion."
},

{
    category:"Periodic Motion",

    title:"Angular Frequency Relation",

    formula:"\\omega=\\frac{2\\pi}{T}",

    description:"Relation between angular frequency and time period."
},

{
    category:"Periodic Motion",

    title:"Number of Oscillations",

    formula:"n=ft",

    description:"Number of oscillations completed in time t."
},

{
    category:"Periodic Motion",

    title:"Phase Difference",

    formula:"\\Delta\\phi=\\omega\\Delta t",

    description:"Phase difference between two points separated by time difference."
},

{
    category:"Periodic Motion",

    title:"Phase in One Complete Oscillation",

    formula:"2\\pi\\;rad=360^\\circ",

    description:"One complete cycle corresponds to phase angle of 2π radians."
},



// ==================================================
// SIMPLE HARMONIC MOTION
// ==================================================

{
    category:"Simple Harmonic Motion",

    title:"Condition of SHM",

    formula:"a\\propto -x",

    description:"Acceleration is directly proportional to displacement and opposite in direction."
},

{
    category:"Simple Harmonic Motion",

    title:"SHM Differential Equation",

    formula:"\\frac{d^2x}{dt^2}=-\\omega^2x",

    description:"Differential equation of simple harmonic motion."
},

{
    category:"Simple Harmonic Motion",

    title:"Displacement Equation",

    formula:"x=A\\sin(\\omega t+\\phi)",

    description:"General displacement equation of SHM."
},

{
    category:"Simple Harmonic Motion",

    title:"Cosine Form",

    formula:"x=A\\cos(\\omega t+\\phi)",

    description:"Alternative form of SHM equation."
},

{
    category:"Simple Harmonic Motion",

    title:"Amplitude",

    formula:"A=Maximum\\ displacement",

    description:"Maximum distance from mean position."
},

{
    category:"Simple Harmonic Motion",

    title:"Velocity in SHM",

    formula:"v=A\\omega\\cos(\\omega t+\\phi)",

    description:"Velocity equation of SHM."
},

{
    category:"Simple Harmonic Motion",

    title:"Velocity-Displacement Relation",

    formula:"v=\\pm\\omega\\sqrt{A^2-x^2}",

    description:"Velocity at any displacement in SHM."
},

{
    category:"Simple Harmonic Motion",

    title:"Maximum Velocity",

    formula:"v_{max}=A\\omega",

    description:"Maximum velocity occurs at mean position."
},

{
    category:"Simple Harmonic Motion",

    title:"Acceleration in SHM",

    formula:"a=-\\omega^2x",

    description:"Acceleration-displacement relation."
},

{
    category:"Simple Harmonic Motion",

    title:"Maximum Acceleration",

    formula:"a_{max}=A\\omega^2",

    description:"Maximum acceleration occurs at extreme position."
},

// ==================================================
// EPOCH & PHASE
// ==================================================

{
    category:"SHM Phase",

    title:"Epoch",

    formula:"\\phi",

    description:"The initial phase of an oscillating particle at t = 0 is called epoch."
},

{
    category:"SHM Phase",

    title:"Phase Angle",

    formula:"\\theta=\\omega t+\\phi",

    description:"Total phase of a particle at any instant."
},

{
    category:"SHM Phase",

    title:"Phase Difference",

    formula:"\\Delta\\theta=\\frac{2\\pi}{T}\\Delta t",

    description:"Phase difference between two oscillations separated by time interval."
},

{
    category:"SHM Phase",

    title:"Phase Difference for Half Cycle",

    formula:"\\Delta\\theta=\\pi",

    description:"Particles half a period apart have phase difference π radians."
},

{
    category:"SHM Phase",

    title:"Phase Difference for Quarter Cycle",

    formula:"\\Delta\\theta=\\frac{\\pi}{2}",

    description:"Particles separated by one-fourth period have phase difference π/2."
},



// ==================================================
// ENERGY IN SHM
// ==================================================

{
    category:"Energy in SHM",

    title:"Total Energy",

    formula:"E=\\frac12m\\omega^2A^2",

    description:"Total mechanical energy of a particle performing SHM."
},

{
    category:"Energy in SHM",

    title:"Kinetic Energy",

    formula:"K=\\frac12m\\omega^2(A^2-x^2)",

    description:"Kinetic energy at displacement x."
},

{
    category:"Energy in SHM",

    title:"Potential Energy",

    formula:"U=\\frac12m\\omega^2x^2",

    description:"Potential energy at displacement x."
},

{
    category:"Energy in SHM",

    title:"Energy Conservation",

    formula:"E=K+U",

    description:"Total energy remains constant in ideal SHM."
},

{
    category:"Energy in SHM",

    title:"Energy at Mean Position",

    formula:"K_{max}=E,\\quad U=0",

    description:"Maximum kinetic energy occurs at mean position."
},

{
    category:"Energy in SHM",

    title:"Energy at Extreme Position",

    formula:"U_{max}=E,\\quad K=0",

    description:"Maximum potential energy occurs at extreme position."
},

{
    category:"Energy in SHM",

    title:"Kinetic Energy Fraction",

    formula:"\\frac KE=1-\\frac{x^2}{A^2}",

    description:"Ratio of kinetic energy to total energy."
},

{
    category:"Energy in SHM",

    title:"Potential Energy Fraction",

    formula:"\\frac UE=\\frac{x^2}{A^2}",

    description:"Ratio of potential energy to total energy."
},



// ==================================================
// VELOCITY AND ACCELERATION RELATIONS
// ==================================================

{
    category:"SHM Relations",

    title:"Velocity at Mean Position",

    formula:"v=v_{max}=A\\omega",

    description:"Particle moves fastest at equilibrium position."
},

{
    category:"SHM Relations",

    title:"Velocity at Extreme Position",

    formula:"v=0",

    description:"Velocity becomes zero at maximum displacement."
},

{
    category:"SHM Relations",

    title:"Acceleration at Mean Position",

    formula:"a=0",

    description:"Acceleration is zero at equilibrium position."
},

{
    category:"SHM Relations",

    title:"Acceleration at Extreme Position",

    formula:"a_{max}=A\\omega^2",

    description:"Acceleration is maximum at extreme positions."
},

{
    category:"SHM Relations",

    title:"Displacement when Kinetic Energy is Half",

    formula:"x=\\frac{A}{\\sqrt2}",

    description:"Position where kinetic and potential energies are equal."
},



// ==================================================
// VERTICAL SPRING OSCILLATION
// ==================================================

{
    category:"Vertical Spring",

    title:"Spring Force",

    formula:"F=-kx",

    description:"Restoring force produced by a spring."
},

{
    category:"Vertical Spring",

    title:"Spring Constant",

    formula:"k=\\frac Fx",

    description:"Measure of stiffness of a spring."
},

{
    category:"Vertical Spring",

    title:"Time Period of Spring",

    formula:"T=2\\pi\\sqrt{\\frac mk}",

    description:"Time period of mass-spring oscillator."
},

{
    category:"Vertical Spring",

    title:"Angular Frequency of Spring",

    formula:"\\omega=\\sqrt{\\frac km}",

    description:"Angular frequency of spring oscillation."
},

{
    category:"Vertical Spring",

    title:"Effect of Mass",

    formula:"T\\propto\\sqrt m",

    description:"Time period increases with mass."
},

{
    category:"Vertical Spring",

    title:"Effect of Spring Constant",

    formula:"T\\propto\\frac1{\\sqrt k}",

    description:"Time period decreases for a stiffer spring."
},

{
    category:"Vertical Spring",

    title:"Extension of Vertical Spring",

    formula:"mg=kx",

    description:"Equilibrium extension of a hanging spring."
},

{
    category:"Vertical Spring",

    title:"Vertical Spring Frequency",

    formula:"f=\\frac1{2\\pi}\\sqrt{\\frac km}",

    description:"Frequency of spring oscillator."
},



// ==================================================
// SIMPLE PENDULUM
// ==================================================

{
    category:"Simple Pendulum",

    title:"Restoring Force",

    formula:"F=-mg\\sin\\theta",

    description:"Tangential restoring force of simple pendulum."
},

{
    category:"Simple Pendulum",

    title:"Small Angle Approximation",

    formula:"\\sin\\theta\\approx\\theta",

    description:"For small oscillations."
},

{
    category:"Simple Pendulum",

    title:"Pendulum Differential Equation",

    formula:"\\frac{d^2\\theta}{dt^2}=-\\frac gl\\theta",

    description:"Differential equation of simple pendulum."
},

{
    category:"Simple Pendulum",

    title:"Angular Frequency",

    formula:"\\omega=\\sqrt{\\frac gl}",

    description:"Angular frequency of simple pendulum."
},

{
    category:"Simple Pendulum",

    title:"Time Period",

    formula:"T=2\\pi\\sqrt{\\frac lg}",

    description:"Time period of simple pendulum."
},

{
    category:"Simple Pendulum",

    title:"Frequency",

    formula:"f=\\frac1{2\\pi}\\sqrt{\\frac gl}",

    description:"Frequency of simple pendulum."
},

{
    category:"Simple Pendulum",

    title:"Length of Pendulum",

    formula:"l=\\frac{gT^2}{4\\pi^2}",

    description:"Length required for a given time period."
},

// ==================================================
// CALCULATION OF g USING SIMPLE PENDULUM
// ==================================================

{
    category:"Simple Pendulum Applications",

    title:"Acceleration due to Gravity",

    formula:"g=\\frac{4\\pi^2l}{T^2}",

    description:"Calculation of gravitational acceleration using pendulum length and time period."
},

{
    category:"Simple Pendulum Applications",

    title:"Experimental Formula of g",

    formula:"g=\\frac{4\\pi^2l}{t^2}n^2",

    description:"When n oscillations are completed in time t."
},

{
    category:"Simple Pendulum Applications",

    title:"Number of Oscillations",

    formula:"n=\\frac{t}{T}",

    description:"Number of oscillations completed in total time t."
},



// ==================================================
// SECOND PENDULUM
// ==================================================

{
    category:"Second Pendulum",

    title:"Definition",

    formula:"T=2s",

    description:"A pendulum having time period of 2 seconds is called a second pendulum."
},

{
    category:"Second Pendulum",

    title:"Length of Second Pendulum",

    formula:"l=\\frac{g}{\\pi^2}",

    description:"Length of second pendulum."
},

{
    category:"Second Pendulum",

    title:"Standard Length",

    formula:"l\\approx0.994m",

    description:"Length of second pendulum at Earth's surface."
},



// ==================================================
// CHANGE OF TIME PERIOD
// ==================================================

{
    category:"Change of Time Period",

    title:"Due to Change in Length",

    formula:"\\frac{T_2}{T_1}=\\sqrt{\\frac{l_2}{l_1}}",

    description:"Time period changes with square root of length."
},

{
    category:"Change of Time Period",

    title:"Due to Change in Gravity",

    formula:"\\frac{T_2}{T_1}=\\sqrt{\\frac{g_1}{g_2}}",

    description:"Time period changes inversely with square root of gravity."
},

{
    category:"Change of Time Period",

    title:"Due to Length and Gravity Change",

    formula:"\\frac{T_2}{T_1}=\\sqrt{\\frac{l_2g_1}{l_1g_2}}",

    description:"Combined effect of length and gravity."
},

{
    category:"Change of Time Period",

    title:"Percentage Change",

    formula:"\\frac{\\Delta T}{T}=\\frac12\\frac{\\Delta l}{l}-\\frac12\\frac{\\Delta g}{g}",

    description:"Small change relation for pendulum time period."
},



// ==================================================
// HEIGHT AND DEPTH EFFECT
// ==================================================

{
    category:"Gravity Variation",

    title:"Gravity at Height",

    formula:"g_h=g\\left(\\frac{R}{R+h}\\right)^2",

    description:"Acceleration due to gravity at height h above Earth's surface."
},

{
    category:"Gravity Variation",

    title:"Approximate Gravity at Height",

    formula:"g_h=g\\left(1-\\frac{2h}{R}\right)",

    description:"For small height compared to Earth's radius."
},

{
    category:"Gravity Variation",

    title:"Time Period at Height",

    formula:"T_h=T\\sqrt{\\frac{g}{g_h}}",

    description:"Pendulum time period increases at greater height."
},

{
    category:"Gravity Variation",

    title:"Gravity at Depth",

    formula:"g_d=g\\left(1-\\frac dR\\right)",

    description:"Acceleration due to gravity at depth d inside Earth."
},

{
    category:"Gravity Variation",

    title:"Time Period at Depth",

    formula:"T_d=T\\sqrt{\\frac{g}{g_d}}",

    description:"Time period increases with depth."
},



// ==================================================
// HEIGHT OF MOUNTAIN USING PENDULUM
// ==================================================

{
    category:"Mountain Height",

    title:"Finding Height",

    formula:"h=\\frac R2\\left(\\frac{T_h^2-T^2}{T_h^2}\\right)",

    description:"Height of mountain calculated from change in pendulum time period."
},

{
    category:"Mountain Height",

    title:"Gravity Ratio from Time Period",

    formula:"\\frac{g_h}{g}=\\frac{T^2}{T_h^2}",

    description:"Relation between gravity and time period."
},



// ==================================================
// TIME CALCULATION USING PENDULUM
// ==================================================

{
    category:"Pendulum Clock",

    title:"Clock Time Relation",

    formula:"t=nT",

    description:"Total time measured by number of oscillations."
},

{
    category:"Pendulum Clock",

    title:"Clock Losing Time",

    formula:"\\frac{\\Delta t}{t}=-\\frac{\\Delta T}{T}",

    description:"A longer period makes a pendulum clock lose time."
},

{
    category:"Pendulum Clock",

    title:"Clock Gaining Time",

    formula:"\\frac{\\Delta t}{t}=\\frac{\\Delta T_{old}-\\Delta T_{new}}{T_{new}}",

    description:"Shorter time period causes clock to gain time."
},



// ==================================================
// SHM AND CIRCULAR MOTION
// ==================================================

{
    category:"SHM and Circular Motion",

    title:"Projection Relation",

    formula:"x=A\\cos\\omega t",

    description:"SHM is the projection of uniform circular motion on a diameter."
},

{
    category:"SHM and Circular Motion",

    title:"Amplitude Relation",

    formula:"A=r",

    description:"Amplitude of SHM equals radius of reference circle."
},

{
    category:"SHM and Circular Motion",

    title:"Angular Velocity Relation",

    formula:"\\omega=\\frac{v}{r}",

    description:"Angular velocity of reference particle."
},

{
    category:"SHM and Circular Motion",

    title:"Acceleration from Circular Motion",

    formula:"a=-\\omega^2x",

    description:"Projection of centripetal acceleration produces SHM acceleration."
},

{
    category:"SHM and Circular Motion",

    title:"Velocity from Circular Motion",

    formula:"v=\\omega\\sqrt{A^2-x^2}",

    description:"Velocity of projected particle."
},

{
    category:"SHM and Circular Motion",

    title:"Phase Relation",

    formula:"x=A\\sin(\\omega t+\\phi)",

    description:"Position of projection depends on angular position of circular motion."
},

],

problems: [

// ==================================================
// PERIODIC MOTION BASICS
// ==================================================

{
    category:"Periodic Motion",

    type:"Finding Time Period",

    question:"A particle completes 50 oscillations in 20 seconds. Find its time period.",

    answer:"\\(0.4s\\)",

    explanation:"Using \\(T=\\frac{total\\;time}{number\\;of\\;oscillations}\\)."
},

{
    category:"Periodic Motion",

    type:"Finding Frequency",

    question:"A body has a time period of 0.25 s. Find its frequency.",

    answer:"\\(4Hz\\)",

    explanation:"Using \\(f=\\frac1T\\)."
},

{
    category:"Periodic Motion",

    type:"Finding Angular Frequency",

    question:"A particle performs SHM with frequency 5 Hz. Find its angular frequency.",

    answer:"\\(10\\pi\\ rad/s\\)",

    explanation:"Using \\(\\omega=2\\pi f\\)."
},

{
    category:"Periodic Motion",

    type:"Number of Oscillations",

    question:"A particle has time period 2 seconds. How many oscillations will it complete in 5 minutes?",

    answer:"150 oscillations",

    explanation:"Using \\(n=\\frac{t}{T}\\)."
},


{
    category:"Periodic Motion",

    type:"Comparing Frequencies",

    question:"Two particles have time periods 2s and 5s. Compare their frequencies.",

    answer:"\\(5:2\\)",

    explanation:"Frequency is inversely proportional to time period."
},



// ==================================================
// PHASE PROBLEMS
// ==================================================

{
    category:"Phase",

    type:"Phase Difference from Time Difference",

    question:"Two particles have a time difference of 0.25 s. If time period is 2 s, find their phase difference.",

    answer:"\\(\\frac{\\pi}{4}\\ rad\\)",

    explanation:"Using \\(\\Delta\\phi=\\frac{2\\pi}{T}\\Delta t\\)."
},

{
    category:"Phase",

    type:"Phase Difference After Half Cycle",

    question:"Two particles are separated by half the time period. Find their phase difference.",

    answer:"\\(\\pi\\ rad\\)",

    explanation:"Half oscillation corresponds to 180° phase difference."
},

{
    category:"Phase",

    type:"Phase Difference After Quarter Cycle",

    question:"Two particles have a time separation of T/4. Find phase difference.",

    answer:"\\(\\frac{\\pi}{2}\\ rad\\)",

    explanation:"Quarter oscillation corresponds to 90° phase difference."
},



// ==================================================
// SIMPLE HARMONIC MOTION EQUATION
// ==================================================

{
    category:"SHM",

    type:"Finding Amplitude",

    question:"The displacement equation of a particle is \\(x=5\\sin(4t)\\) cm. Find amplitude.",

    answer:"\\(5cm\\)",

    explanation:"Coefficient of sine function represents amplitude."
},

{
    category:"SHM",

    type:"Finding Angular Frequency",

    question:"The equation of SHM is \\(x=0.1\\sin(20t)\\). Find angular frequency.",

    answer:"\\(20rad/s\\)",

    explanation:"Coefficient of t is angular frequency."
},

{
    category:"SHM",

    type:"Finding Time Period from Equation",

    question:"A particle follows \\(x=2\\sin(10\\pi t)\\). Find its time period.",

    answer:"\\(0.2s\\)",

    explanation:"\\(\\omega=10\\pi\\), therefore \\(T=\\frac{2\\pi}{\\omega}\\)."
},


{
    category:"SHM",

    type:"Maximum Velocity",

    question:"A particle performs SHM with amplitude 4 cm and angular frequency 5 rad/s. Find maximum velocity.",

    answer:"\\(20cm/s\\)",

    explanation:"Using \\(v_{max}=A\\omega\\)."
},


{
    category:"SHM",

    type:"Maximum Acceleration",

    question:"A particle has amplitude 2 cm and angular frequency 10 rad/s. Find maximum acceleration.",

    answer:"\\(2m/s^2\\)",

    explanation:"Using \\(a_{max}=A\\omega^2\\)."
},



// ==================================================
// VELOCITY-DISPLACEMENT PROBLEMS
// ==================================================

{
    category:"SHM",

    type:"Velocity at Given Displacement",

    question:"A particle has amplitude 10 cm and angular frequency 4 rad/s. Find velocity when displacement is 6 cm.",

    answer:"\\(32cm/s\\)",

    explanation:"Using \\(v=\\omega\\sqrt{A^2-x^2}\\)."
},

{
    category:"SHM",

    type:"Position of Maximum Velocity",

    question:"At which position is velocity maximum in SHM?",

    answer:"Mean position.",

    explanation:"Velocity is maximum when displacement is zero."
},

{
    category:"SHM",

    type:"Position of Maximum Acceleration",

    question:"At which position is acceleration maximum in SHM?",

    answer:"Extreme position.",

    explanation:"Acceleration magnitude is proportional to displacement."
},

{
    category:"SHM",

    type:"Finding Displacement from Acceleration",

    question:"A particle has angular frequency 5 rad/s and acceleration \\(-50m/s^2\\). Find displacement.",

    answer:"\\(2m\\)",

    explanation:"Using \\(a=-\\omega^2x\\)."
},

// ==================================================
// ENERGY IN SHM PROBLEMS
// ==================================================

{
    category:"Energy in SHM",

    type:"Total Energy",

    question:"A particle of mass 2 kg performs SHM with amplitude 0.5 m and angular frequency 4 rad/s. Find total energy.",

    answer:"\\(8J\\)",

    explanation:"Using \\(E=\\frac12m\\omega^2A^2\\)."
},

{
    category:"Energy in SHM",

    type:"Kinetic Energy at Displacement",

    question:"A particle of mass 1 kg has amplitude 2 m and angular frequency 3 rad/s. Find kinetic energy at displacement 1 m.",

    answer:"\\(13.5J\\)",

    explanation:"Using \\(K=\\frac12m\\omega^2(A^2-x^2)\\)."
},

{
    category:"Energy in SHM",

    type:"Potential Energy at Displacement",

    question:"A particle of mass 2 kg performs SHM with angular frequency 5 rad/s. Find potential energy at displacement 0.2 m.",

    answer:"\\(1J\\)",

    explanation:"Using \\(U=\\frac12m\\omega^2x^2\\)."
},

{
    category:"Energy in SHM",

    type:"Equal Kinetic and Potential Energy",

    question:"At what displacement from mean position are kinetic energy and potential energy equal?",

    answer:"\\(x=\\frac{A}{\\sqrt2}\\)",

    explanation:"When \\(K=U\\), each energy is half of total energy."
},

{
    category:"Energy in SHM",

    type:"Energy Ratio",

    question:"A particle is displaced to half its amplitude. Find the ratio of kinetic energy to potential energy.",

    answer:"\\(3:1\\)",

    explanation:"\\(K:E=1-x^2/A^2\\) and \\(U:E=x^2/A^2\\)."
},

{
    category:"Energy in SHM",

    type:"Maximum Kinetic Energy",

    question:"A 0.5 kg particle performs SHM with amplitude 0.4 m and frequency 5 Hz. Find maximum kinetic energy.",

    answer:"\\(19.74J\\)",

    explanation:"Maximum kinetic energy equals total energy."
},



// ==================================================
// VERTICAL SPRING PROBLEMS
// ==================================================

{
    category:"Vertical Spring",

    type:"Spring Time Period",

    question:"A mass of 2 kg is attached to a spring of force constant 200 N/m. Find time period.",

    answer:"\\(0.628s\\)",

    explanation:"Using \\(T=2\\pi\\sqrt{m/k}\\)."
},

{
    category:"Vertical Spring",

    type:"Spring Frequency",

    question:"A spring has force constant 500 N/m and carries a mass of 2 kg. Find frequency.",

    answer:"\\(2.52Hz\\)",

    explanation:"Using \\(f=\\frac1{2\\pi}\\sqrt{k/m}\\)."
},

{
    category:"Vertical Spring",

    type:"Effect of Mass Change",

    question:"A spring oscillator has mass m. If mass becomes 4m, compare new and old time periods.",

    answer:"\\(T_2=2T_1\\)",

    explanation:"Since \\(T\\propto\\sqrt m\\)."
},

{
    category:"Vertical Spring",

    type:"Effect of Spring Constant",

    question:"The spring constant of an oscillator is increased four times. Find the new time period.",

    answer:"\\(T_2=\\frac{T_1}{2}\\)",

    explanation:"Since \\(T\\propto\\frac1{\\sqrt k}\\)."
},

{
    category:"Vertical Spring",

    type:"Equilibrium Extension",

    question:"A 5 kg mass hangs from a spring of constant 100 N/m. Find extension.",

    answer:"\\(0.5m\\)",

    explanation:"Using \\(mg=kx\\)."
},



// ==================================================
// SIMPLE PENDULUM BASIC PROBLEMS
// ==================================================

{
    category:"Simple Pendulum",

    type:"Time Period Calculation",

    question:"Find the time period of a pendulum of length 1 m. Take \\(g=9.8m/s^2\\).",

    answer:"\\(2s\\)",

    explanation:"Using \\(T=2\\pi\\sqrt{l/g}\\)."
},

{
    category:"Simple Pendulum",

    type:"Finding Length",

    question:"A pendulum has time period 4 s. Find its length.",

    answer:"\\(3.98m\\)",

    explanation:"Using \\(l=\\frac{gT^2}{4\\pi^2}\\)."
},

{
    category:"Simple Pendulum",

    type:"Finding Gravity",

    question:"A pendulum of length 1 m completes one oscillation in 2.01 s. Find g.",

    answer:"\\(9.77m/s^2\\)",

    explanation:"Using \\(g=\\frac{4\\pi^2l}{T^2}\\)."
},

{
    category:"Simple Pendulum",

    type:"Frequency of Pendulum",

    question:"Find frequency of a pendulum having length 0.25 m.",

    answer:"\\(1Hz\\)",

    explanation:"Using \\(f=\\frac1{2\\pi}\\sqrt{g/l}\\)."
},

{
    category:"Simple Pendulum",

    type:"Length Comparison",

    question:"Two pendulums have lengths in ratio 4:9. Compare their time periods.",

    answer:"\\(2:3\\)",

    explanation:"Since \\(T\\propto\\sqrt l\\)."
},

// ==================================================
// EXPERIMENTAL g USING SIMPLE PENDULUM
// ==================================================

{
    category:"Simple Pendulum Applications",

    type:"Finding g from Multiple Oscillations",

    question:"A pendulum of length 1 m completes 100 oscillations in 200 seconds. Find the value of g.",

    answer:"\\(9.87m/s^2\\)",

    explanation:"First find \\(T=t/n\\), then use \\(g=\\frac{4\\pi^2l}{T^2}\\)."
},

{
    category:"Simple Pendulum Applications",

    type:"Finding Length from Oscillation Data",

    question:"A pendulum completes 50 oscillations in 100 seconds. If \\(g=9.8m/s^2\\), find its length.",

    answer:"\\(0.994m\\)",

    explanation:"Find time period first and use \\(l=\\frac{gT^2}{4\\pi^2}\\)."
},

{
    category:"Simple Pendulum Applications",

    type:"Comparing Gravity",

    question:"Two places have the same pendulum length. Their time periods are 2s and 2.2s. Compare gravitational accelerations.",

    answer:"\\(g_1:g_2=1.21:1\\)",

    explanation:"Since \\(g\\propto\\frac1{T^2}\\)."
},



// ==================================================
// HEIGHT OF MOUNTAIN PROBLEMS
// ==================================================

{
    category:"Mountain Height",

    type:"Finding Mountain Height",

    question:"A pendulum clock takes 2s at sea level and 2.001s at the top of a mountain. Find the height of the mountain. Take Earth's radius \\(6.4\\times10^6m\\).",

    answer:"Approximately \\(6.4km\\)",

    explanation:"Use change in time period due to reduced gravity at height."
},

{
    category:"Mountain Height",

    type:"Gravity at Mountain",

    question:"The time period of a pendulum increases by 0.1% at a mountain. Find the approximate height of the mountain.",

    answer:"\\(h=0.001R\\)",

    explanation:"Using \\(\\frac{\\Delta T}{T}=\\frac hR\\) approximately."
},



// ==================================================
// DEPTH OF MINE PROBLEMS
// ==================================================

{
    category:"Depth Effect",

    type:"Finding Depth Using Pendulum",

    question:"A pendulum clock's time period increases by 0.05% inside a mine. Find the depth.",

    answer:"\\(d=0.001R\\)",

    explanation:"Using \\(g_d=g(1-d/R)\\) and time period relation."
},

{
    category:"Depth Effect",

    type:"Compare Time Period at Depth",

    question:"A pendulum is taken to a depth equal to half Earth's radius. Compare its new time period with surface value.",

    answer:"\\(\\sqrt2:1\\)",

    explanation:"Gravity becomes half, so period increases by \\(\\sqrt2\\)."
},



// ==================================================
// SECOND PENDULUM
// ==================================================

{
    category:"Second Pendulum",

    type:"Finding Second Pendulum Length",

    question:"Find the length of a second pendulum at a place where \\(g=9.6m/s^2\\).",

    answer:"\\(0.973m\\)",

    explanation:"Using \\(l=g/\\pi^2\\)."
},

{
    category:"Second Pendulum",

    type:"Changing Second Pendulum Length",

    question:"A second pendulum is taken to a place where gravity decreases. What happens to its length?",

    answer:"Length decreases.",

    explanation:"For constant \\(T\\), \\(l\\propto g\\)."
},



// ==================================================
// PENDULUM CLOCK PROBLEMS
// ==================================================

{
    category:"Pendulum Clock",

    type:"Clock Losing Time",

    question:"A pendulum clock has a pendulum that is 0.1% longer than normal. How much time will it lose in one day?",

    answer:"43.2 seconds",

    explanation:"For small changes, \\(\\frac{\\Delta T}{T}=\\frac12\\frac{\\Delta l}{l}\\)."
},

{
    category:"Pendulum Clock",

    type:"Clock Gaining Time",

    question:"A pendulum clock has a pendulum 0.2% shorter than normal. How much time will it gain?",

    answer:"86.4 seconds per day",

    explanation:"Shorter length decreases time period and clock runs faster."
},

{
    category:"Pendulum Clock",

    type:"Temperature Effect",

    question:"Why does a pendulum clock lose time during summer?",

    answer:"Because pendulum length increases due to thermal expansion.",

    explanation:"Since \\(T\\propto\\sqrt l\\), increasing length increases time period."
},

{
    category:"Pendulum Clock",

    type:"Correction of Clock",

    question:"A pendulum clock loses time due to increased length. Should the pendulum length be increased or decreased to correct it?",

    answer:"Decrease the length.",

    explanation:"Reducing length decreases the time period."
},



// ==================================================
// ADVANCED PENDULUM COMPARISON
// ==================================================

{
    category:"Advanced Pendulum",

    type:"Length and Gravity Combined",

    question:"A pendulum length is increased four times while gravity becomes one-fourth. Compare new time period.",

    answer:"\\(4T\\)",

    explanation:"Using \\(T\\propto\\sqrt{l/g}\\)."
},

{
    category:"Advanced Pendulum",

    type:"Two Pendulum Synchronization",

    question:"Two pendulums have lengths 1m and 4m. If the first completes 20 oscillations, how many does the second complete in the same time?",

    answer:"10 oscillations",

    explanation:"Frequency is inversely proportional to square root of length."
},

// ==================================================
// ADVANCED SHM PROBLEMS
// ==================================================

{
    category:"Advanced SHM",

    type:"Finding Equation of SHM",

    question:"A particle has amplitude 5 cm and angular frequency 10 rad/s. It starts from mean position moving in positive direction. Write its equation.",

    answer:"\\(x=5\\sin(10t)\\;cm\\)",

    explanation:"Starting from mean position requires sine form with zero phase."
},

{
    category:"Advanced SHM",

    type:"Initial Phase",

    question:"A particle starts from extreme position. Write its displacement equation.",

    answer:"\\(x=A\\cos\\omega t\\)",

    explanation:"At extreme position, displacement is maximum at \\(t=0\\)."
},

{
    category:"Advanced SHM",

    type:"Finding Phase",

    question:"A particle is at half amplitude and moving towards mean position. Determine possible phase angle.",

    answer:"\\(\\theta=\\frac{\\pi}{3}\\)",

    explanation:"Using \\(x=A\\cos\\theta\\)."
},

{
    category:"Advanced SHM",

    type:"Time from Mean Position",

    question:"How much time does a particle take to travel from mean position to extreme position?",

    answer:"\\(T/4\\)",

    explanation:"Quarter of one complete oscillation."
},

{
    category:"Advanced SHM",

    type:"Time Between Two Points",

    question:"A particle moves from +A/2 to -A/2. Find the time taken.",

    answer:"\\(T/3\\)",

    explanation:"Using phase difference between the two positions."
},



// ==================================================
// ADVANCED ENERGY PROBLEMS
// ==================================================

{
    category:"Advanced SHM",

    type:"Finding Amplitude from Energy",

    question:"A particle of mass 1 kg has total energy 8 J and angular frequency 4 rad/s. Find amplitude.",

    answer:"\\(1m\\)",

    explanation:"Using \\(E=\\frac12m\\omega^2A^2\\)."
},

{
    category:"Advanced SHM",

    type:"Energy Ratio at Different Positions",

    question:"A particle is at displacement A/2. Find the ratio of kinetic energy to total energy.",

    answer:"\\(3:4\\)",

    explanation:"Using \\(K/E=1-x^2/A^2\\)."
},

{
    category:"Advanced SHM",

    type:"Energy Conservation",

    question:"If the amplitude of SHM is doubled, how does total energy change?",

    answer:"Becomes four times.",

    explanation:"Energy is proportional to square of amplitude."
},



// ==================================================
// SHM AND CIRCULAR MOTION
// ==================================================

{
    category:"SHM and Circular Motion",

    type:"Projection Amplitude",

    question:"A particle moves in a circle of radius 10 cm with angular velocity 5 rad/s. Find amplitude of its SHM projection.",

    answer:"\\(10cm\\)",

    explanation:"Amplitude equals radius of reference circle."
},

{
    category:"SHM and Circular Motion",

    type:"Maximum Velocity from Circular Motion",

    question:"A particle moves in a circle of radius 0.2m with angular velocity 8 rad/s. Find maximum velocity of SHM projection.",

    answer:"\\(1.6m/s\\)",

    explanation:"Using \\(v_{max}=A\\omega\\)."
},

{
    category:"SHM and Circular Motion",

    type:"Maximum Acceleration from Circular Motion",

    question:"A circular motion has radius 0.5m and angular velocity 4 rad/s. Find maximum acceleration of SHM.",

    answer:"\\(8m/s^2\\)",

    explanation:"Using \\(a_{max}=A\\omega^2\\)."
},

{
    category:"SHM and Circular Motion",

    type:"Phase Difference in Circular Projection",

    question:"Two SHM particles have phase difference 90°. What is their time separation?",

    answer:"\\(T/4\\)",

    explanation:"90° corresponds to one-fourth cycle."
},



// ==================================================
// SPRING + SHM ADVANCED
// ==================================================

{
    category:"Advanced Spring",

    type:"Equivalent Spring Constant",

    question:"Two identical springs each having spring constant k are connected in parallel. Find equivalent spring constant.",

    answer:"\\(2k\\)",

    explanation:"Parallel springs add their constants."
},

{
    category:"Advanced Spring",

    type:"Springs in Series",

    question:"Two identical springs each having constant k are connected in series. Find equivalent spring constant.",

    answer:"\\(k/2\\)",

    explanation:"For series combination \\(1/k_e=1/k_1+1/k_2\\)."
},

{
    category:"Advanced Spring",

    type:"Spring Combination Time Period",

    question:"A mass m is attached to two identical springs in parallel. Find time period.",

    answer:"\\(T=2\\pi\\sqrt{m/2k}\\)",

    explanation:"Equivalent spring constant becomes 2k."
},



// ==================================================
// MIXED ADMISSION PROBLEMS
// ==================================================

{
    category:"Mixed Advanced",

    type:"Same Time Period Condition",

    question:"A pendulum and spring oscillator have equal time periods. Establish the relation between their constants.",

    answer:"\\(2\\pi\\sqrt{l/g}=2\\pi\\sqrt{m/k}\\)",

    explanation:"Equate their time period expressions."
},

{
    category:"Mixed Advanced",

    type:"Amplitude and Velocity",

    question:"Two SHM particles have same amplitude but angular frequencies in ratio 2:3. Compare their maximum velocities.",

    answer:"\\(2:3\\)",

    explanation:"Maximum velocity is proportional to angular frequency."
},

{
    category:"Mixed Advanced",

    type:"Amplitude and Energy",

    question:"Two particles have amplitudes in ratio 2:3 and same mass and frequency. Compare their energies.",

    answer:"\\(4:9\\)",

    explanation:"Energy is proportional to square of amplitude."
},

{
    category:"Mixed Advanced",

    type:"Frequency Change",

    question:"The length of a pendulum is reduced by 36%. Find percentage change in frequency.",

    answer:"25% increase",

    explanation:"Frequency is inversely proportional to square root of length."
},

{
    category:"Mixed Advanced",

    type:"Gravity Change",

    question:"A pendulum is moved to a place where gravity becomes 4 times. How does frequency change?",

    answer:"Frequency becomes double.",

    explanation:"Frequency is proportional to \\(\\sqrt g\\)."
},

// ==================================================
// ADVANCED SHM TIME PROBLEMS
// ==================================================

{
    category:"Advanced SHM Time",

    type:"Time from Mean Position",

    question:"A particle executes SHM with period 4s. Find the time required to move from mean position to half amplitude.",

    answer:"\\(\\frac13s\\)",

    explanation:"Using \\(x=A\\sin\\omega t\\), for \\(x=A/2\\), phase angle is \\(30^\\circ\\)."
},

{
    category:"Advanced SHM Time",

    type:"Extreme to Mean Time",

    question:"A particle has time period 8s. Find the time taken to travel from one extreme position to mean position.",

    answer:"2s",

    explanation:"Extreme to mean position requires one-fourth of a cycle."
},

{
    category:"Advanced SHM Time",

    type:"Extreme to Extreme Time",

    question:"A particle completes SHM of time period 6s. Find the time between two opposite extreme positions.",

    answer:"3s",

    explanation:"Opposite extremes are separated by half a cycle."
},



// ==================================================
// INITIAL PHASE PROBLEMS
// ==================================================

{
    category:"Phase",

    type:"Initial Phase from Position",

    question:"A particle starts SHM from displacement \\(A/2\\) with positive velocity. Find the phase constant.",

    answer:"\\(\\phi=\\frac{\\pi}{3}\\)",

    explanation:"Using \\(x=A\\sin(\\omega t+\\phi)\\)."
},

{
    category:"Phase",

    type:"Negative Extreme Start",

    question:"A particle starts from negative extreme position. Write its SHM equation.",

    answer:"\\(x=-A\\cos\\omega t\\)",

    explanation:"Initial displacement is -A."
},



// ==================================================
// SPRING CUTTING PROBLEMS
// ==================================================

{
    category:"Spring Oscillator",

    type:"Spring Cut into Two Parts",

    question:"A spring of constant k is cut into two equal parts. Find the spring constant of each part.",

    answer:"\\(2k\\)",

    explanation:"Spring constant is inversely proportional to length."
},

{
    category:"Spring Oscillator",

    type:"Spring Cut into n Parts",

    question:"A spring of constant k is divided into n equal pieces. Find the constant of each piece.",

    answer:"\\(nk\\)",

    explanation:"Reducing length n times increases spring constant n times."
},

{
    category:"Spring Oscillator",

    type:"Time Period after Cutting",

    question:"A spring is cut into four equal parts. A mass is attached to one part. Compare new and old time periods.",

    answer:"\\(T_{new}=T/2\\)",

    explanation:"Spring constant becomes 4k."
},



// ==================================================
// SPRING COMBINATION ADVANCED
// ==================================================

{
    category:"Spring Oscillator",

    type:"Unequal Springs Parallel",

    question:"Two springs of constants 100 N/m and 200 N/m are connected parallel with a mass of 3 kg. Find time period.",

    answer:"\\(0.628s\\)",

    explanation:"Equivalent constant \\(k=300N/m\\)."
},

{
    category:"Spring Oscillator",

    type:"Unequal Springs Series",

    question:"Two springs of constants k and 2k are connected in series. Find equivalent constant.",

    answer:"\\(\\frac{2k}{3}\\)",

    explanation:"Using series combination formula."
},



// ==================================================
// EFFECTIVE GRAVITY PENDULUM
// ==================================================

{
    category:"Advanced Pendulum",

    type:"Pendulum in Accelerating Lift",

    question:"A pendulum is inside a lift accelerating upward with acceleration a. Find its time period.",

    answer:"\\(T=2\\pi\\sqrt{\\frac{l}{g+a}}\\)",

    explanation:"Effective gravity increases upward."
},

{
    category:"Advanced Pendulum",

    type:"Lift Moving Downward",

    question:"A lift accelerates downward with acceleration a. Find the pendulum time period.",

    answer:"\\(T=2\\pi\\sqrt{\\frac{l}{g-a}}\\)",

    explanation:"Effective gravity decreases."
},

{
    category:"Advanced Pendulum",

    type:"Horizontal Acceleration",

    question:"A pendulum is placed in a vehicle accelerating horizontally with acceleration a. Find effective gravity.",

    answer:"\\(g_e=\\sqrt{g^2+a^2}\\)",

    explanation:"Effective gravity is vector sum of gravitational and pseudo acceleration."
},



// ==================================================
// ENERGY RATIO ADVANCED
// ==================================================

{
    category:"Energy in SHM",

    type:"Energy Ratio Given",

    question:"The kinetic energy and potential energy of an SHM particle are in ratio 3:1. Find displacement.",

    answer:"\\(x=A/2\\)",

    explanation:"Using \\(K/U=(A^2-x^2)/x^2\\)."
},

{
    category:"Energy in SHM",

    type:"Velocity from Energy Ratio",

    question:"A particle has total energy E and potential energy E/4. Find velocity.",

    answer:"\\(v=\\sqrt{\\frac{3E}{2m}}\\)",

    explanation:"Remaining energy is kinetic energy."
},



// ==================================================
// GRAPH BASED SHM
// ==================================================

{
    category:"SHM Graph",

    type:"Velocity from Displacement Graph",

    question:"What does the slope of displacement-time graph represent?",

    answer:"Velocity",

    explanation:"Velocity is rate of change of displacement."
},

{
    category:"SHM Graph",

    type:"Acceleration Graph",

    question:"What does the slope of velocity-time graph represent?",

    answer:"Acceleration",

    explanation:"Acceleration is rate of change of velocity."
},

{
    category:"SHM Graph",

    type:"Displacement from Velocity Graph",

    question:"What does area under velocity-time graph represent?",

    answer:"Displacement",

    explanation:"Integration of velocity gives displacement."
},



// ==================================================
// LIQUID COLUMN SHM
// ==================================================

{
    category:"Liquid Oscillation",

    type:"U Tube Time Period",

    question:"Find the time period of liquid oscillation in a U-tube of liquid column length L.",

    answer:"\\(T=2\\pi\\sqrt{\\frac{L}{2g}}\\)",

    explanation:"Liquid column performs SHM due to restoring pressure difference."
},



// ==================================================
// ADVANCED COMPARISON
// ==================================================

{
    category:"Advanced Comparison",

    type:"Same Period Condition",

    question:"Two pendulums have lengths in ratio 4:9. What should be the ratio of their gravitational accelerations for equal time periods?",

    answer:"\\(4:9\\)",

    explanation:"Since \\(T\\propto\\sqrt{l/g}\\)."
},

{
    category:"Advanced Comparison",

    type:"Frequency and Amplitude",

    question:"Two SHM particles have amplitudes 2:3 and frequencies 3:2. Compare maximum velocities.",

    answer:"\\(1:1\\)",

    explanation:"Because \\(v_{max}=A\\omega\\)."
},

{
    category:"Advanced Comparison",

    type:"Acceleration Comparison",

    question:"Two SHM particles have amplitudes 2:3 and angular frequencies 3:4. Compare maximum accelerations.",

    answer:"\\(3:8\\)",

    explanation:"Maximum acceleration \\(=A\\omega^2\\)."
}


]

};