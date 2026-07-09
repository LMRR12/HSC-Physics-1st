// ==========================================
// Physics Practice Book
// Chapter 9 : Wave
// data/wave.js
// ==========================================

const chapterData = {

    title: "Chapter 9 : Wave",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [
    
// ==================================================
// BASIC WAVE QUANTITIES
// ==================================================

{
    category:"Wave Basics",

    title:"Wave Velocity",

    formula:"\ v=f\\lambda\ ",

    description:"Relation between wave velocity, frequency and wavelength."
},

{
    category:"Wave Basics",

    title:"Frequency",

    formula:"\ f=\\frac{1}{T}\ ",

    description:"Frequency is the reciprocal of time period."
},

{
    category:"Wave Basics",

    title:"Angular Frequency",

    formula:"\ \\omega=2\\pi f\ ",

    description:"Angular frequency of oscillation."
},

{
    category:"Wave Basics",

    title:"Wave Number",

    formula:"\ k=\\frac{2\\pi}{\\lambda}\ ",

    description:"Wave number represents phase change per unit distance."
},

{
    category:"Wave Basics",

    title:"Phase Difference",

    formula:"\ \\Delta\\phi=\\frac{2\\pi x}{\\lambda}\ ",

    description:"Phase difference between two points separated by distance x."
},

{
    category:"Wave Basics",

    title:"Phase Difference with Time",

    formula:"\ \\Delta\\phi=\\frac{2\\pi t}{T}\ ",

    description:"Phase difference due to time interval."
},



// ==================================================
// PROGRESSIVE WAVE
// ==================================================

{
    category:"Progressive Wave",

    title:"Equation of Progressive Wave",

    formula:"\ y=A\\sin(\\omega t-kx)\ ",

    description:"Equation of wave travelling in positive x direction."
},

{
    category:"Progressive Wave",

    title:"Negative Direction Wave",

    formula:"\ y=A\\sin(\\omega t+kx)\ ",

    description:"Equation of wave travelling in negative x direction."
},

{
    category:"Progressive Wave",

    title:"Particle Velocity",

    formula:"\ v_p=\\frac{dy}{dt}\ ",

    description:"Velocity of particles executing SHM due to wave."
},

{
    category:"Progressive Wave",

    title:"Particle Acceleration",

    formula:"\ a=\\frac{d^2y}{dt^2}\ ",

    description:"Acceleration of particles in a wave."
},

{
    category:"Progressive Wave",

    title:"Maximum Particle Velocity",

    formula:"\ v_{max}=A\\omega\ ",

    description:"Maximum velocity of particles of medium."
},

{
    category:"Progressive Wave",

    title:"Maximum Particle Acceleration",

    formula:"\ a_{max}=A\\omega^2\ ",

    description:"Maximum acceleration of particles."
},



// ==================================================
// WAVE ENERGY
// ==================================================

{
    category:"Wave Energy",

    title:"Energy of Wave",

    formula:"\ E\\propto A^2\ ",

    description:"Energy carried by a wave is proportional to square of amplitude."
},

{
    category:"Wave Energy",

    title:"Intensity of Wave",

    formula:"\ I=\\frac{P}{A}\ ",

    description:"Intensity is power transmitted per unit area."
},

{
    category:"Wave Energy",

    title:"Intensity Relation",

    formula:"\ I\\propto A^2\ ",

    description:"Wave intensity depends on amplitude."
},

{
    category:"Wave Energy",

    title:"Intensity at Distance",

    formula:"\ I\\propto\\frac1{r^2}\ ",

    description:"Intensity decreases according to inverse square law."
},

{
    category:"Wave Energy",

    title:"Intensity Level",

    formula:"\ \\beta=10\\log_{10}\\frac{I}{I_0}\ ",

    description:"Sound intensity level measured in decibel."
},

{
    category:"Wave Energy",

    title:"Standard Intensity",

    formula:"\ I_0=10^{-12}Wm^{-2}\ ",

    description:"Reference intensity of human hearing."
},



// ==================================================
// SUPERPOSITION OF WAVES
// ==================================================

{
    category:"Superposition",

    title:"Resultant Displacement",

    formula:"\ y=y_1+y_2\ ",

    description:"According to principle of superposition."
},

{
    category:"Superposition",

    title:"Same Phase Waves",

    formula:"\ A=A_1+A_2\ ",

    description:"Amplitude increases when waves are in same phase."
},

{
    category:"Superposition",

    title:"Opposite Phase Waves",

    formula:"\ A=|A_1-A_2|\ ",

    description:"Amplitude decreases for opposite phase waves."
},

{
    category:"Superposition",

    title:"Resultant Amplitude",

    formula:"\ A=\\sqrt{A_1^2+A_2^2+2A_1A_2\\cos\\phi}\ ",

    description:"Amplitude of two superposed waves with phase difference."
},



// ==================================================
// STANDING WAVE
// ==================================================

{
    category:"Standing Wave",

    title:"Equation of Standing Wave",

    formula:"\ y=2A\\sin kx\\cos\\omega t\ ",

    description:"Standing wave formed by superposition of two identical waves."
},

{
    category:"Standing Wave",

    title:"Node Position",

    formula:"\ x=n\\frac{\\lambda}{2}\ ",

    description:"Positions where displacement is always zero."
},

{
    category:"Standing Wave",

    title:"Antinode Position",

    formula:"\ x=(2n+1)\\frac{\\lambda}{4}\ ",

    description:"Positions of maximum amplitude."
},

{
    category:"Standing Wave",

    title:"Distance Between Nodes",

    formula:"\ \\frac{\\lambda}{2}\ ",

    description:"Distance between two consecutive nodes."
},

{
    category:"Standing Wave",

    title:"Distance Between Node and Antinode",

    formula:"\ \\frac{\\lambda}{4}\ ",

    description:"Distance between adjacent node and antinode."
},

// ==================================================
// BEATS
// ==================================================

{
    category:"Beats",

    title:"Beat Frequency",

    formula:"\ f_b=|f_1-f_2|\ ",

    description:"Number of beats produced per second due to interference of two waves of slightly different frequencies."
},

{
    category:"Beats",

    title:"Beat Time Period",

    formula:"\ T_b=\\frac{1}{|f_1-f_2|}\ ",

    description:"Time interval between two successive beats."
},

{
    category:"Beats",

    title:"Resultant Amplitude of Beats",

    formula:"\ A=2a\\cos\\left(\\frac{2\\pi(f_1-f_2)t}{2}\\right)\ ",

    description:"Amplitude varies periodically due to interference of close frequencies."
},

{
    category:"Beats",

    title:"Condition for Beats",

    formula:"\ |f_1-f_2|\\ll f_1,f_2\ ",

    description:"Frequencies should be close to each other."
},

{
    category:"Beats",

    title:"Finding Unknown Frequency",

    formula:"\ f_2=f_1\\pm f_b\ ",

    description:"Unknown frequency can be determined using beat frequency."
},



// ==================================================
// RESONANCE
// ==================================================

{
    category:"Resonance",

    title:"Condition of Resonance",

    formula:"\ f=f_0\ ",

    description:"Resonance occurs when external frequency equals natural frequency."
},

{
    category:"Resonance",

    title:"Amplitude at Resonance",

    formula:"\ A_{max}\ ",

    description:"Amplitude becomes maximum during resonance."
},

{
    category:"Resonance",

    title:"Natural Frequency",

    formula:"\ f_0=\\frac{1}{2\\pi}\\sqrt{\\frac{k}{m}}\ ",

    description:"Natural frequency of a spring-mass system."
},



// ==================================================
// TRANSVERSE VIBRATION OF STRING
// ==================================================

{
    category:"String Vibration",

    title:"Wave Velocity in String",

    formula:"\ v=\\sqrt{\\frac{T}{\\mu}}\ ",

    description:"Velocity of transverse wave in stretched string."
},

{
    category:"String Vibration",

    title:"Linear Density",

    formula:"\ \\mu=\\frac{m}{L}\ ",

    description:"Mass per unit length of string."
},

{
    category:"String Vibration",

    title:"Frequency of String",

    formula:"\ f=\\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}\ ",

    description:"Fundamental frequency of stretched string."
},

{
    category:"String Vibration",

    title:"Frequency Law of Length",

    formula:"\ f\\propto\\frac1L\ ",

    description:"Frequency is inversely proportional to vibrating length."
},

{
    category:"String Vibration",

    title:"Frequency Law of Tension",

    formula:"\ f\\propto\\sqrt T\ ",

    description:"Frequency increases with square root of tension."
},

{
    category:"String Vibration",

    title:"Frequency Law of Mass Density",

    formula:"\ f\\propto\\frac1{\\sqrt\\mu}\ ",

    description:"Frequency decreases with increasing linear density."
},



// ==================================================
// HARMONICS OF STRING
// ==================================================

{
    category:"String Harmonics",

    title:"nth Harmonic Frequency",

    formula:"\ f_n=nf_1\ ",

    description:"Frequency of nth harmonic."
},

{
    category:"String Harmonics",

    title:"Fundamental Frequency",

    formula:"\ f_1=\\frac{1}{2L}\\sqrt{\\frac{T}{\\mu}}\ ",

    description:"First harmonic frequency of string fixed at both ends."
},

{
    category:"String Harmonics",

    title:"Wavelength of nth Harmonic",

    formula:"\ \\lambda_n=\\frac{2L}{n}\ ",

    description:"Wavelength corresponding to nth harmonic."
},



// ==================================================
// OPEN PIPE
// ==================================================

{
    category:"Open Pipe",

    title:"Fundamental Frequency",

    formula:"\ f_1=\\frac{v}{2L}\ ",

    description:"Fundamental frequency of open organ pipe."
},

{
    category:"Open Pipe",

    title:"nth Harmonic",

    formula:"\ f_n=\\frac{nv}{2L}\ ",

    description:"All harmonics are present in an open pipe."
},

{
    category:"Open Pipe",

    title:"Wavelength",

    formula:"\ \\lambda_n=\\frac{2L}{n}\ ",

    description:"Wavelength of nth harmonic in open pipe."
},

{
    category:"Open Pipe",

    title:"End Correction",

    formula:"\ L_{effective}=L+1.2r\ ",

    description:"Effective length considering end correction."
},



// ==================================================
// CLOSED PIPE
// ==================================================

{
    category:"Closed Pipe",

    title:"Fundamental Frequency",

    formula:"\ f_1=\\frac{v}{4L}\ ",

    description:"Fundamental frequency of closed organ pipe."
},

{
    category:"Closed Pipe",

    title:"Allowed Harmonics",

    formula:"\ f_n=(2n-1)f_1\ ",

    description:"Only odd harmonics exist in closed pipe."
},

{
    category:"Closed Pipe",

    title:"nth Harmonic Frequency",

    formula:"\ f_n=\\frac{(2n-1)v}{4L}\ ",

    description:"Frequency of nth allowed harmonic."
},

{
    category:"Closed Pipe",

    title:"Wavelength",

    formula:"\ \\lambda_n=\\frac{4L}{2n-1}\ ",

    description:"Wavelength of allowed modes in closed pipe."
},

// ==================================================
// SOUND INTENSITY & LOUDNESS
// ==================================================

{
    category:"Sound Intensity",

    title:"Intensity of Sound",

    formula:"\ I=\\frac{P}{A}\ ",

    description:"Sound intensity is power transmitted per unit area."
},

{
    category:"Sound Intensity",

    title:"Intensity from Energy",

    formula:"\ I=\\frac{E}{At}\ ",

    description:"Intensity expressed as energy transmitted per unit area per unit time."
},

{
    category:"Sound Intensity",

    title:"Spherical Wave Intensity",

    formula:"\ I=\\frac{P}{4\\pi r^2}\ ",

    description:"Intensity at distance r from a point source."
},

{
    category:"Sound Intensity",

    title:"Intensity Ratio",

    formula:"\ \\frac{I_1}{I_2}=\\frac{r_2^2}{r_1^2}\ ",

    description:"Relation of intensities at different distances."
},

{
    category:"Sound Intensity",

    title:"Sound Intensity Level",

    formula:"\ \\beta=10\\log_{10}\\left(\\frac{I}{I_0}\\right)\ ",

    description:"Sound level measured in decibel."
},

{
    category:"Sound Intensity",

    title:"Difference of Sound Levels",

    formula:"\ \\beta_2-\\beta_1=10\\log_{10}\\frac{I_2}{I_1}\ ",

    description:"Difference between two sound intensity levels."
},

{
    category:"Sound Intensity",

    title:"Amplitude and Intensity",

    formula:"\ I\\propto A^2\ ",

    description:"Intensity is proportional to square of amplitude."
},

{
    category:"Sound Intensity",

    title:"Decibel Increase",

    formula:"\ \\Delta\\beta=20\\log_{10}\\frac{A_2}{A_1}\ ",

    description:"Sound level change in terms of amplitude ratio."
},



// ==================================================
// MUSICAL SOUND
// ==================================================

{
    category:"Musical Sound",

    title:"Frequency and Pitch",

    formula:"\ Pitch\\propto f\ ",

    description:"Pitch depends on frequency of sound."
},

{
    category:"Musical Sound",

    title:"Quality of Sound",

    formula:"\ Quality=f(\\text{harmonics})\ ",

    description:"Timbre depends on number and strength of harmonics."
},

{
    category:"Musical Sound",

    title:"Harmonic Frequency",

    formula:"\ f_n=nf_1\ ",

    description:"Frequency of nth harmonic."
},



// ==================================================
// MUSICAL INTERVAL
// ==================================================

{
    category:"Musical Interval",

    title:"Musical Interval",

    formula:"\ I=\\frac{f_2}{f_1}\ ",

    description:"Ratio of two frequencies is called musical interval."
},

{
    category:"Musical Interval",

    title:"Octave",

    formula:"\ \\frac{f_2}{f_1}=2\ ",

    description:"Two notes form an octave when frequencies are in ratio 2:1."
},

{
    category:"Musical Interval",

    title:"Perfect Fifth",

    formula:"\ \\frac{f_2}{f_1}=\\frac32\ ",

    description:"Frequency ratio of perfect fifth interval."
},

{
    category:"Musical Interval",

    title:"Perfect Fourth",

    formula:"\ \\frac{f_2}{f_1}=\\frac43\ ",

    description:"Frequency ratio of perfect fourth interval."
},



// ==================================================
// MUSICAL SCALE
// ==================================================

{
    category:"Musical Scale",

    title:"Equal Temperament Scale",

    formula:"\ r=2^{1/12}\ ",

    description:"Frequency ratio between two consecutive semitones."
},

{
    category:"Musical Scale",

    title:"Frequency of nth Note",

    formula:"\ f_n=f_0(2^{1/12})^n\ ",

    description:"Frequency of nth note in equal temperament scale."
},

{
    category:"Musical Scale",

    title:"Octave Relation",

    formula:"\ f_n=2f_0\ ",

    description:"Frequency doubles after one octave."
},



// ==================================================
// CHORD & HARMONY
// ==================================================

{
    category:"Chord",

    title:"Major Triad",

    formula:"\ 1:\\frac54:\\frac32\ ",

    description:"Frequency ratio of major chord notes."
},

{
    category:"Chord",

    title:"Minor Triad",

    formula:"\ 1:\\frac65:\\frac32\ ",

    description:"Frequency ratio of minor chord notes."
},

{
    category:"Chord",

    title:"Harmony",

    formula:"\ f_2\\approx nf_1\ ",

    description:"Harmony occurs when frequencies have simple integer ratios."
},



// ==================================================
// ADVANCED WAVE RELATIONS
// ==================================================

{
    category:"Advanced Wave",

    title:"Energy Transport",

    formula:"\ P\\propto A^2f^2\ ",

    description:"Average power of a wave depends on amplitude and frequency."
},

{
    category:"Advanced Wave",

    title:"Wave Equation",

    formula:"\ \\frac{\\partial^2 y}{\\partial x^2}=\\frac1{v^2}\\frac{\\partial^2 y}{\\partial t^2}\ ",

    description:"Differential equation of wave motion."
},

{
    category:"Advanced Wave",

    title:"Velocity from Tension and Density",

    formula:"\ v=\\sqrt{\\frac{T}{\\mu}}\ ",

    description:"Wave velocity in stretched medium."
},

{
    category:"Advanced Wave",

    title:"Doppler Effect",

    formula:"\ f'=f\\frac{v\\pm v_o}{v\\mp v_s}\ ",

    description:"Observed frequency when source and observer are moving."
},

// ==================================================
// TYPES OF WAVES
// ==================================================

{
    category:"Types of Waves",

    title:"Mechanical Wave",

    formula:"v=\\sqrt{\\frac{Elastic\\ Property}{Density}}",

    description:"Mechanical waves require a material medium for propagation."
},

{
    category:"Types of Waves",

    title:"Transverse Wave",

    formula:"Particle\\ displacement\\perp Wave\\ direction",

    description:"Particles vibrate perpendicular to the direction of propagation."
},

{
    category:"Types of Waves",

    title:"Longitudinal Wave",

    formula:"Particle\\ displacement\\parallel Wave\\ direction",

    description:"Particles vibrate parallel to the direction of propagation."
},

{
    category:"Types of Waves",

    title:"Progressive Wave",

    formula:"y=A\\sin(\\omega t-kx)",

    description:"A wave that transfers energy continuously through the medium."
},

{
    category:"Types of Waves",

    title:"Stationary Wave",

    formula:"y=2A\\sin kx\\cos\\omega t",

    description:"A wave formed by superposition of two identical waves travelling opposite directions."
},



// ==================================================
// FREE & FORCED VIBRATION
// ==================================================

{
    category:"Free Vibration",

    title:"Natural Frequency",

    formula:"f_0=\\frac1{2\\pi}\\sqrt{\\frac{k}{m}}",

    description:"Frequency of vibration when a system oscillates freely."
},

{
    category:"Free Vibration",

    title:"Angular Frequency",

    formula:"\\omega_0=\\sqrt{\\frac{k}{m}}",

    description:"Natural angular frequency of spring-mass system."
},

{
    category:"Forced Vibration",

    title:"Driving Force",

    formula:"F=F_0\\sin\\omega t",

    description:"External periodic force causing forced vibration."
},

{
    category:"Forced Vibration",

    title:"Resonance Condition",

    formula:"\\omega=\\omega_0",

    description:"Maximum amplitude occurs when driving frequency equals natural frequency."
},



// ==================================================
// BEAT ANALYSIS
// ==================================================

{
    category:"Beat",

    title:"Superposition of Two Waves",

    formula:"y=a\\sin2\\pi f_1t+a\\sin2\\pi f_2t",

    description:"Combination of two waves with slightly different frequencies."
},

{
    category:"Beat",

    title:"Beat Equation",

    formula:"y=2a\\cos\\pi(f_1-f_2)t\\sin2\\pi\\frac{f_1+f_2}{2}t",

    description:"Mathematical expression of beats."
},

{
    category:"Beat",

    title:"Beat Frequency",

    formula:"f_b=|f_1-f_2|",

    description:"Number of beats produced per second."
},

{
    category:"Beat",

    title:"Time Between Beats",

    formula:"T_b=\\frac1{|f_1-f_2|}",

    description:"Time interval between two consecutive beats."
},



// ==================================================
// LOUDNESS
// ==================================================

{
    category:"Loudness",

    title:"Loudness Relation",

    formula:"Loudness\\propto Intensity",

    description:"Loudness depends mainly on sound intensity."
},

{
    category:"Loudness",

    title:"Amplitude Relation",

    formula:"Loudness\\propto A^2",

    description:"Greater amplitude produces louder sound."
},

{
    category:"Loudness",

    title:"Audible Frequency Range",

    formula:"20Hz<f<20000Hz",

    description:"Normal human audible range."
},



// ==================================================
// STRING VIBRATION ADVANCED
// ==================================================

{
    category:"String Vibration",

    title:"Melde's Law",

    formula:"f\\propto\\frac1L",

    description:"Frequency is inversely proportional to vibrating length."
},

{
    category:"String Vibration",

    title:"Law of Tension",

    formula:"f\\propto\\sqrt T",

    description:"Frequency is proportional to square root of tension."
},

{
    category:"String Vibration",

    title:"Law of Linear Density",

    formula:"f\\propto\\frac1{\\sqrt\\mu}",

    description:"Frequency decreases with increase of mass per unit length."
},

{
    category:"String Vibration",

    title:"Sonometer Frequency",

    formula:"f=\\frac1{2L}\\sqrt{\\frac T\\mu}",

    description:"Frequency of transverse vibration of stretched string."
},



// ==================================================
// RESONANCE TUBE
// ==================================================

{
    category:"Resonance Tube",

    title:"First Resonance",

    formula:"L=\\frac\\lambda4",

    description:"First resonance in a closed tube."
},

{
    category:"Resonance Tube",

    title:"Second Resonance",

    formula:"L=\\frac{3\\lambda}{4}",

    description:"Second resonance in a closed tube."
},

{
    category:"Resonance Tube",

    title:"Difference Between Resonances",

    formula:"L_2-L_1=\\frac\\lambda2",

    description:"Used to calculate wavelength accurately."
},

{
    category:"Resonance Tube",

    title:"Velocity of Sound",

    formula:"v=f\\lambda",

    description:"Determining sound velocity using resonance tube."
},



// ==================================================
// MUSICAL QUALITY & NOISE
// ==================================================

{
    category:"Musical Sound",

    title:"Musical Sound",

    formula:"Regular\\ periodic\\ vibration",

    description:"Sound produced by regular vibrations."
},

{
    category:"Noise",

    title:"Noise",

    formula:"Irregular\\ vibration",

    description:"Unpleasant sound produced by irregular vibrations."
},

{
    category:"Musical Quality",

    title:"Timbre",

    formula:"Quality=f(Amplitude\\ of\\ Harmonics)",

    description:"Quality of sound depends on harmonic composition."
},

{
    category:"Musical Quality",

    title:"Melody",

    formula:"Combination\\ of\\ musical\\ notes\\ in\\ sequence",

    description:"Arrangement of notes producing a musical tune."
},

{
    category:"Musical Quality",

    title:"Solo",

    formula:"Single\\ performer",

    description:"Musical performance by one person."
},

{
    category:"Musical Quality",

    title:"Orchestra",

    formula:"Group\\ of\\ musicians",

    description:"Large group performing together."
},
    
    ],


    problems: [

// ==================================================
// BASIC WAVE PROBLEMS
// ==================================================

{
    category:"Wave Basics",

    type:"Finding Wave Velocity",

    question:"A wave has frequency 500 Hz and wavelength 0.8 m. Find its velocity.",

    answer:"\\(400\\;ms^{-1}\\)",

    explanation:"Using \\(v=f\\lambda\\)."
},

{
    category:"Wave Basics",

    type:"Finding Wavelength",

    question:"A sound wave travels with velocity 340 m/s and frequency 680 Hz. Find wavelength.",

    answer:"\\(0.5\\;m\\)",

    explanation:"Using \\(\\lambda=\\frac vf\\)."
},

{
    category:"Wave Basics",

    type:"Finding Frequency",

    question:"A wave has velocity 300 m/s and wavelength 2 m. Find its frequency.",

    answer:"\\(150\\;Hz\\)",

    explanation:"Using \\(f=\\frac v\\lambda\\)."
},

{
    category:"Wave Basics",

    type:"Angular Frequency",

    question:"Find angular frequency of a wave having frequency 50 Hz.",

    answer:"\\(100\\pi\\;rad/s\\)",

    explanation:"Using \\(\\omega=2\\pi f\\)."
},



// ==================================================
// PROGRESSIVE WAVE PROBLEMS
// ==================================================

{
    category:"Progressive Wave",

    type:"Wave Equation Formation",

    question:"A wave has amplitude 0.02 m, frequency 100 Hz and wavelength 4 m. Write its equation travelling in positive x direction.",

    answer:"\\(y=0.02\\sin(200\\pi t-\\frac\\pi2x)\\)",

    explanation:"Use \\(y=A\\sin(\\omega t-kx)\\)."
},

{
    category:"Progressive Wave",

    type:"Direction of Wave",

    question:"Determine the direction of propagation of \\(y=A\\sin(\\omega t+kx)\\).",

    answer:"Negative x direction",

    explanation:"Positive sign before kx indicates negative direction."
},

{
    category:"Progressive Wave",

    type:"Phase Difference Between Two Points",

    question:"Two points on a wave are separated by wavelength/4. Find their phase difference.",

    answer:"\\(\\frac\\pi2\\)",

    explanation:"Using \\(\\Delta\\phi=\\frac{2\\pi x}{\\lambda}\\)."
},

{
    category:"Progressive Wave",

    type:"Phase Difference After Time",

    question:"A wave has time period 0.02 s. Find phase difference after 0.005 s.",

    answer:"\\(\\frac\\pi2\\)",

    explanation:"Using \\(\\Delta\\phi=\\frac{2\\pi t}{T}\\)."
},



// ==================================================
// PARTICLE MOTION IN WAVE
// ==================================================

{
    category:"Progressive Wave",

    type:"Maximum Particle Velocity",

    question:"A particle of amplitude 5 cm performs SHM due to a wave of frequency 20 Hz. Find maximum velocity.",

    answer:"\\(2\\pi\\;ms^{-1}\\)",

    explanation:"Using \\(v_{max}=A\\omega\\)."
},

{
    category:"Progressive Wave",

    type:"Maximum Particle Acceleration",

    question:"A particle has amplitude 2 cm and frequency 50 Hz. Find maximum acceleration.",

    answer:"\\(1973\\;ms^{-2}\\)",

    explanation:"Using \\(a_{max}=A\\omega^2\\)."
},



// ==================================================
// SUPERPOSITION PROBLEMS
// ==================================================

{
    category:"Superposition",

    type:"Same Phase Waves",

    question:"Two waves of amplitudes 3 cm and 4 cm travel in the same phase. Find resultant amplitude.",

    answer:"\\(7\\;cm\\)",

    explanation:"For same phase, amplitudes add."
},

{
    category:"Superposition",

    type:"Opposite Phase Waves",

    question:"Two waves of amplitudes 8 cm and 5 cm are opposite in phase. Find resultant amplitude.",

    answer:"\\(3\\;cm\\)",

    explanation:"Amplitude difference is taken."
},

{
    category:"Superposition",

    type:"Phase Difference Effect",

    question:"Two waves of amplitudes 5 cm each have phase difference 60°. Find resultant amplitude.",

    answer:"\\(5\\sqrt3\\;cm\\)",

    explanation:"Using resultant amplitude formula."
},

{
    category:"Superposition",

    type:"Complete Destructive Interference",

    question:"Two waves have equal amplitudes. What phase difference produces zero resultant amplitude?",

    answer:"\\(\\pi\\;rad\\)",

    explanation:"Opposite phase causes cancellation."
},

// ==================================================
// STANDING WAVE PROBLEMS
// ==================================================

{
    category:"Standing Wave",

    type:"Distance Between Nodes",

    question:"A standing wave has wavelength 40 cm. Find distance between two consecutive nodes.",

    answer:"\\(20\\;cm\\)",

    explanation:"Distance between nodes is \\(\\lambda/2\\)."
},

{
    category:"Standing Wave",

    type:"Node to Antinode Distance",

    question:"A standing wave has wavelength 2 m. Find distance between a node and nearest antinode.",

    answer:"\\(0.5\\;m\\)",

    explanation:"Node-antinode distance is \\(\\lambda/4\\)."
},

{
    category:"Standing Wave",

    type:"Number of Nodes",

    question:"A string of length 2 m vibrates with wavelength 0.5 m. Find the number of loops formed.",

    answer:"8 loops",

    explanation:"Each loop contains length \\(\\lambda/2\\)."
},

{
    category:"Standing Wave",

    type:"Finding Wavelength",

    question:"A string of length 1.5 m forms 3 loops in standing vibration. Find wavelength.",

    answer:"\\(1\\;m\\)",

    explanation:"Three loops mean \\(L=3\\lambda/2\\)."
},

{
    category:"Standing Wave",

    type:"Amplitude at Position",

    question:"For a standing wave \\(y=2A\\sin kx\\cos\\omega t\\), find amplitude at a node.",

    answer:"Zero",

    explanation:"At node \\(\\sin kx=0\\)."
},



// ==================================================
// BEAT PROBLEMS
// ==================================================

{
    category:"Beats",

    type:"Finding Beat Frequency",

    question:"Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. Find beat frequency.",

    answer:"\\(4\\;Hz\\)",

    explanation:"Using \\(f_b=|f_1-f_2|\\)."
},

{
    category:"Beats",

    type:"Finding Beat Time",

    question:"Two sounds produce 5 beats per second. Find the time interval between successive beats.",

    answer:"\\(0.2\\;s\\)",

    explanation:"Using \\(T_b=1/f_b\\)."
},

{
    category:"Beats",

    type:"Unknown Frequency",

    question:"A tuning fork of 500 Hz produces 8 beats per second with another fork. Find possible frequencies of the second fork.",

    answer:"\\(492\\;Hz\\) or \\(508\\;Hz\\)",

    explanation:"Using \\(f_2=f_1\\pm f_b\\)."
},

{
    category:"Beats",

    type:"Finding Frequency Difference",

    question:"Two frequencies differ by 6 Hz and produce beats. How many beats occur in 10 seconds?",

    answer:"60 beats",

    explanation:"Number of beats = beat frequency × time."
},



// ==================================================
// RESONANCE PROBLEMS
// ==================================================

{
    category:"Resonance",

    type:"Resonance Condition",

    question:"A system has natural frequency 50 Hz. At what driving frequency will resonance occur?",

    answer:"\\(50\\;Hz\\)",

    explanation:"Resonance occurs when external frequency equals natural frequency."
},

{
    category:"Resonance",

    type:"Spring Resonance",

    question:"A spring-mass system has mass 2 kg and spring constant 800 N/m. Find natural frequency.",

    answer:"\\(3.18\\;Hz\\)",

    explanation:"Using \\(f=\\frac1{2\\pi}\\sqrt{\\frac km}\\)."
},



// ==================================================
// STRING VIBRATION PROBLEMS
// ==================================================

{
    category:"String Vibration",

    type:"Wave Velocity in String",

    question:"A string has tension 100 N and linear density 0.01 kg/m. Find wave velocity.",

    answer:"\\(100\\;ms^{-1}\\)",

    explanation:"Using \\(v=\\sqrt{T/\\mu}\\)."
},

{
    category:"String Vibration",

    type:"Fundamental Frequency",

    question:"A string of length 2 m has tension 400 N and linear density 0.04 kg/m. Find fundamental frequency.",

    answer:"\\(25\\;Hz\\)",

    explanation:"Using \\(f_1=\\frac1{2L}\\sqrt{T/\\mu}\\)."
},

{
    category:"String Vibration",

    type:"Effect of Tension",

    question:"The tension of a string is increased 4 times. How does frequency change?",

    answer:"Becomes twice",

    explanation:"Frequency is proportional to square root of tension."
},

{
    category:"String Vibration",

    type:"Effect of Length",

    question:"The vibrating length of a string is doubled. How does frequency change?",

    answer:"Becomes half",

    explanation:"Frequency is inversely proportional to length."
},

{
    category:"String Vibration",

    type:"Harmonic Frequency",

    question:"A string has fundamental frequency 100 Hz. Find its third harmonic frequency.",

    answer:"\\(300\\;Hz\\)",

    explanation:"Using \\(f_n=nf_1\\)."
},

{
    category:"String Vibration",

    type:"Wavelength of Harmonic",

    question:"A string of length 1 m vibrates in second harmonic. Find wavelength.",

    answer:"\\(1\\;m\\)",

    explanation:"Using \\(\\lambda_n=2L/n\\)."
},

// ==================================================
// OPEN PIPE PROBLEMS
// ==================================================

{
    category:"Open Pipe",

    type:"Fundamental Frequency",

    question:"An open organ pipe has length 0.85 m. Find its fundamental frequency. Take speed of sound as 340 m/s.",

    answer:"\\(200\\;Hz\\)",

    explanation:"Using \\(f_1=\\frac{v}{2L}\\)."
},

{
    category:"Open Pipe",

    type:"Finding Length",

    question:"An open pipe produces a fundamental frequency of 170 Hz. Find its length.",

    answer:"\\(1\\;m\\)",

    explanation:"Using \\(L=\\frac{v}{2f}\\)."
},

{
    category:"Open Pipe",

    type:"Second Harmonic",

    question:"An open pipe has fundamental frequency 250 Hz. Find frequency of fourth harmonic.",

    answer:"\\(1000\\;Hz\\)",

    explanation:"Using \\(f_n=nf_1\\)."
},

{
    category:"Open Pipe",

    type:"Wavelength of Harmonic",

    question:"A pipe of length 0.5 m is vibrating in third harmonic. Find wavelength.",

    answer:"\\(\\frac13\\;m\\)",

    explanation:"Using \\(\\lambda_n=\\frac{2L}{n}\\)."
},



// ==================================================
// CLOSED PIPE PROBLEMS
// ==================================================

{
    category:"Closed Pipe",

    type:"Fundamental Frequency",

    question:"A closed pipe has length 0.5 m. Find fundamental frequency. Take sound velocity 340 m/s.",

    answer:"\\(170\\;Hz\\)",

    explanation:"Using \\(f_1=\\frac{v}{4L}\\)."
},

{
    category:"Closed Pipe",

    type:"First Overtone",

    question:"A closed pipe has fundamental frequency 100 Hz. Find first overtone frequency.",

    answer:"\\(300\\;Hz\\)",

    explanation:"First overtone in closed pipe is third harmonic."
},

{
    category:"Closed Pipe",

    type:"Allowed Harmonic",

    question:"A closed pipe produces 500 Hz as the third allowed harmonic. Find fundamental frequency.",

    answer:"\\(100\\;Hz\\)",

    explanation:"Third harmonic means \\(5f_1\\)."
},

{
    category:"Closed Pipe",

    type:"Comparing Open and Closed Pipe",

    question:"An open pipe and closed pipe have equal lengths. Compare their fundamental frequencies.",

    answer:"\\(2:1\\)",

    explanation:"Open pipe frequency is twice the closed pipe frequency."
},



// ==================================================
// END CORRECTION PROBLEMS
// ==================================================

{
    category:"Air Column",

    type:"Effective Length",

    question:"An open pipe of radius 2 cm has physical length 50 cm. Find effective length.",

    answer:"\\(52.4\\;cm\\)",

    explanation:"Using end correction \\(L_e=L+1.2r\\)."
},

{
    category:"Air Column",

    type:"Finding End Correction",

    question:"A pipe has radius 1 cm. Find end correction.",

    answer:"\\(1.2\\;cm\\)",

    explanation:"End correction equals \\(1.2r\\)."
},



// ==================================================
// SOUND INTENSITY PROBLEMS
// ==================================================

{
    category:"Sound Intensity",

    type:"Intensity Calculation",

    question:"A sound source emits 20 W power uniformly. Find intensity at a distance of 10 m.",

    answer:"\\(1.59\\times10^{-2}\\;Wm^{-2}\\)",

    explanation:"Using \\(I=\\frac{P}{4\\pi r^2}\\)."
},

{
    category:"Sound Intensity",

    type:"Intensity Ratio",

    question:"The intensity of sound at 5 m distance is compared with that at 10 m distance. Find ratio.",

    answer:"\\(4:1\\)",

    explanation:"Intensity follows inverse square law."
},

{
    category:"Sound Intensity",

    type:"Decibel Level",

    question:"Find sound intensity level for intensity \\(10^{-6}Wm^{-2}\\).",

    answer:"60 dB",

    explanation:"Using \\(\\beta=10\\log(I/I_0)\\)."
},

{
    category:"Sound Intensity",

    type:"Change in Decibel",

    question:"Intensity of sound increases 100 times. Find increase in sound level.",

    answer:"20 dB",

    explanation:"Using \\(\\Delta\\beta=10\\log100\\)."
},



// ==================================================
// MUSICAL SCALE PROBLEMS
// ==================================================

{
    category:"Musical Scale",

    type:"Octave Frequency",

    question:"A note has frequency 256 Hz. Find frequency of one octave higher.",

    answer:"\\(512\\;Hz\\)",

    explanation:"Octave ratio is 2:1."
},

{
    category:"Musical Scale",

    type:"Semitone Frequency",

    question:"Find the frequency ratio between two adjacent semitones.",

    answer:"\\(2^{1/12}\\)",

    explanation:"Equal temperament scale relation."
},

{
    category:"Musical Scale",

    type:"Perfect Fifth",

    question:"A note has frequency 240 Hz. Find frequency of its perfect fifth.",

    answer:"\\(360\\;Hz\\)",

    explanation:"Perfect fifth ratio is 3:2."
},



// ==================================================
// DOPPLER EFFECT PROBLEMS
// ==================================================

{
    category:"Doppler Effect",

    type:"Moving Observer",

    question:"A source of 500 Hz approaches a stationary observer with velocity 20 m/s. Find observed frequency. Sound velocity = 340 m/s.",

    answer:"\\(530\\;Hz\\)",

    explanation:"Using \\(f'=f\\frac{v+v_o}{v}\\)."
},

{
    category:"Doppler Effect",

    type:"Moving Source",

    question:"A source of 600 Hz moves away from an observer at 30 m/s. Find observed frequency.",

    answer:"\\(552\\;Hz\\)",

    explanation:"Using \\(f'=f\\frac{v}{v+v_s}\\)."
},

{
    category:"Doppler Effect",

    type:"Relative Motion",

    question:"Both source and observer move towards each other. Write the observed frequency formula.",

    answer:"\\(f'=f\\frac{v+v_o}{v-v_s}\\)",

    explanation:"Both effects increase frequency."
},


// ==================================================
// FREE & FORCED VIBRATION PROBLEMS
// ==================================================

{
    category:"Free Vibration",

    type:"Natural Frequency of Spring",

    question:"A mass of 4 kg is attached to a spring of force constant 400 N/m. Find its natural frequency.",

    answer:"\\(1.59\\;Hz\\)",

    explanation:"Using \\(f=\\frac1{2\\pi}\\sqrt{\\frac km}\\)."
},

{
    category:"Free Vibration",

    type:"Effect of Mass Change",

    question:"The mass attached to a spring is increased 4 times. How does natural frequency change?",

    answer:"Becomes half",

    explanation:"Since \\(f\\propto\\frac1{\\sqrt m}\\)."
},

{
    category:"Free Vibration",

    type:"Effect of Spring Constant",

    question:"The spring constant is increased 9 times. Find the change in natural frequency.",

    answer:"Becomes three times",

    explanation:"Since \\(f\\propto\\sqrt k\\)."
},


{
    category:"Forced Vibration",

    type:"Resonance Frequency",

    question:"A system has natural frequency 80 Hz. Find the external frequency required for resonance.",

    answer:"\\(80\\;Hz\\)",

    explanation:"At resonance, driving frequency equals natural frequency."
},

{
    category:"Forced Vibration",

    type:"Amplitude at Resonance",

    question:"What happens to amplitude when external frequency becomes equal to natural frequency?",

    answer:"Amplitude becomes maximum.",

    explanation:"Energy transfer from external source becomes maximum."
},



// ==================================================
// ADVANCED BEAT PROBLEMS
// ==================================================

{
    category:"Beat",

    type:"Unknown Tuning Fork Frequency",

    question:"A tuning fork of frequency 400 Hz produces 6 beats per second with another fork. After loading wax, frequency becomes 394 Hz and beats disappear. Find the original frequency of the other fork.",

    answer:"\\(394\\;Hz\\)",

    explanation:"Wax decreases frequency and the new frequency matches the other fork."
},

{
    category:"Beat",

    type:"Beat Frequency Change",

    question:"Two tuning forks produce 10 beats per second. One fork frequency is increased by 4 Hz and beat frequency becomes 14 Hz. Find frequency relation.",

    answer:"Frequencies were moving away from each other.",

    explanation:"Increase in difference increases beat frequency."
},

{
    category:"Beat",

    type:"Number of Beats",

    question:"Two sounds of frequencies 512 Hz and 516 Hz are heard for 2 minutes. Find total beats.",

    answer:"480 beats",

    explanation:"Number of beats = frequency difference × time."
},



// ==================================================
// SONOMETER PROBLEMS
// ==================================================

{
    category:"Sonometer",

    type:"Finding Frequency",

    question:"A string of length 1 m, tension 100 N and linear density 0.0025 kg/m vibrates. Find fundamental frequency.",

    answer:"\\(100\\;Hz\\)",

    explanation:"Using \\(f=\\frac1{2L}\\sqrt{\\frac T\\mu}\\)."
},

{
    category:"Sonometer",

    type:"Effect of Length",

    question:"A sonometer wire length is reduced to half. How does frequency change?",

    answer:"Doubles",

    explanation:"Frequency is inversely proportional to length."
},

{
    category:"Sonometer",

    type:"Finding Tension",

    question:"A wire produces 200 Hz at tension 400 N. What tension is required for 300 Hz?",

    answer:"\\(900\\;N\\)",

    explanation:"Using \\(f\\propto\\sqrt T\\)."
},

{
    category:"Sonometer",

    type:"Finding Mass Density",

    question:"A wire frequency decreases from 200 Hz to 100 Hz. Compare their linear densities.",

    answer:"Density becomes four times",

    explanation:"Since \\(f\\propto\\frac1{\\sqrt\\mu}\\)."
},



// ==================================================
// RESONANCE TUBE PROBLEMS
// ==================================================

{
    category:"Resonance Tube",

    type:"Finding Wavelength",

    question:"A closed pipe gives first resonance at length 25 cm. Find wavelength.",

    answer:"\\(1\\;m\\)",

    explanation:"Using \\(L=\\lambda/4\\)."
},

{
    category:"Resonance Tube",

    type:"Velocity of Sound",

    question:"A resonance tube of length 20 cm produces resonance with a 425 Hz tuning fork. Find velocity of sound.",

    answer:"\\(340\\;ms^{-1}\\)",

    explanation:"First resonance: \\(\\lambda=4L\\), then use \\(v=f\\lambda\\)."
},

{
    category:"Resonance Tube",

    type:"Second Resonance",

    question:"The first resonance length of a closed pipe is 18 cm. Find second resonance length.",

    answer:"\\(54\\;cm\\)",

    explanation:"Second resonance length is three times first resonance length."
},

{
    category:"Resonance Tube",

    type:"End Correction",

    question:"A closed tube has physical length 30 cm and first resonance length 34 cm. Find end correction.",

    answer:"\\(4\\;cm\\)",

    explanation:"Effective length = physical length + end correction."
},



// ==================================================
// MIXED ADVANCED WAVE PROBLEMS
// ==================================================

{
    category:"Mixed Wave",

    type:"Energy Comparison",

    question:"Two waves have amplitudes in ratio 2:3. Find ratio of their intensities.",

    answer:"\\(4:9\\)",

    explanation:"Intensity is proportional to square of amplitude."
},

{
    category:"Mixed Wave",

    type:"Wave Speed Change",

    question:"The tension of a string is increased 16 times. Find the new wave speed.",

    answer:"Four times",

    explanation:"Using \\(v\\propto\\sqrt T\\)."
},

{
    category:"Mixed Wave",

    type:"Stationary Wave Formation",

    question:"Two waves of same amplitude and frequency travel in opposite directions. What type of wave forms?",

    answer:"Stationary wave",

    explanation:"Superposition creates nodes and antinodes."
},

{
    category:"Mixed Wave",

    type:"Node Position",

    question:"A stationary wave has wavelength 60 cm. Find distance between two adjacent nodes.",

    answer:"\\(30\\;cm\\)",

    explanation:"Node distance = wavelength/2."
},

{
    category:"Mixed Wave",

    type:"Sound Level Comparison",

    question:"Two sounds have intensities in ratio 1000:1. Find difference in intensity level.",

    answer:"30 dB",

    explanation:"Using \\(\\Delta\\beta=10\\log(1000)\\)."
}

    ]

};
