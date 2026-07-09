// ==========================================
// Physics Practice Book
// Chapter 6 : Gravitation & Gravity
// data/gravitation_gravity.js
// ==========================================

const chapterData = {

    title: "Chapter 6 : Gravitation & Gravity",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [




// ==================================================
// UNIVERSAL GRAVITATION
// ==================================================

{
    category: "Universal Gravitation",

    title: "Newton's Law of Gravitation",

    formula: "F=G\\frac{m_1m_2}{r^2}",

    description: "Every two masses attract each other with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them."
},

{
    category: "Universal Gravitation",

    title: "Gravitational Constant",

    formula: "G=6.67\\times10^{-11}\\;Nm^2kg^{-2}",

    description: "Universal gravitational constant."
},

{
    category: "Universal Gravitation",

    title: "Inverse Square Law",

    formula: "F\\propto\\frac1{r^2}",

    description: "Gravitational force varies inversely as the square of distance."
},

{
    category: "Universal Gravitation",

    title: "Ratio of Gravitational Forces",

    formula: "\\frac{F_1}{F_2}=\\left(\\frac{r_2}{r_1}\\right)^2",

    description: "Relation between gravitational forces at two different distances."
},

{
    category: "Universal Gravitation",

    title: "Mass Dependence",

    formula: "F\\propto m_1m_2",

    description: "Force is directly proportional to both interacting masses."
},

{
    category: "Universal Gravitation",

    title: "Vector Form",

    formula: "\\vec F=-G\\frac{m_1m_2}{r^2}\\hat r",

    description: "Gravitational force acts along the line joining the centres of masses."
},




// ==================================================
// ACCELERATION DUE TO GRAVITY
// ==================================================

{
    category: "Acceleration due to Gravity",

    title: "Acceleration due to Gravity",

    formula: "g=\\frac{GM}{R^2}",

    description: "Acceleration produced by Earth's gravitational attraction."
},

{
    category: "Acceleration due to Gravity",

    title: "Weight",

    formula: "W=mg",

    description: "Weight of a body near Earth's surface."
},

{
    category: "Acceleration due to Gravity",

    title: "Relation Between g and Radius",

    formula: "g\\propto\\frac1{R^2}",

    description: "Acceleration due to gravity decreases with increasing distance."
},

{
    category: "Acceleration due to Gravity",

    title: "Relation Between g and Mass",

    formula: "g\\propto M",

    description: "Acceleration due to gravity is directly proportional to planetary mass."
},

{
    category: "Acceleration due to Gravity",

    title: "Earth Surface Value",

    formula: "g\\approx9.8\\;ms^{-2}",

    description: "Standard value of acceleration due to gravity."
},




// ==================================================
// FALLING BODY
// ==================================================

{
    category: "Falling Body",

    title: "First Equation",

    formula: "v=u+gt",

    description: "Velocity of a freely falling body."
},

{
    category: "Falling Body",

    title: "Second Equation",

    formula: "s=ut+\\frac12gt^2",

    description: "Distance travelled during free fall."
},

{
    category: "Falling Body",

    title: "Third Equation",

    formula: "v^2=u^2+2gs",

    description: "Relation among velocity, displacement and gravity."
},

{
    category: "Falling Body",

    title: "Body Dropped from Rest",

    formula: "s=\\frac12gt^2",

    description: "Distance covered by a body dropped vertically."
},

{
    category: "Falling Body",

    title: "Velocity After Falling",

    formula: "v=\\sqrt{2gh}",

    description: "Velocity after falling through height h."
},

{
    category: "Falling Body",

    title: "Time of Fall",

    formula: "t=\\sqrt{\\frac{2h}{g}}",

    description: "Time taken by a body to fall from height h."
},

{
    category: "Falling Body",

    title: "Maximum Height",

    formula: "H=\\frac{u^2}{2g}",

    description: "Maximum height reached by a vertically projected body."
},

{
    category: "Falling Body",

    title: "Time of Ascent",

    formula: "t=\\frac ug",

    description: "Time required to reach maximum height."
},

{
    category: "Falling Body",

    title: "Total Time of Flight",

    formula: "T=\\frac{2u}{g}",

    description: "Total time taken for upward projection."
},

{
    category: "Falling Body",

    title: "Velocity at Any Height",

    formula: "v=\\sqrt{u^2-2gh}",

    description: "Velocity after rising through height h."
},




// ==================================================
// VARIATION OF g
// ==================================================

{
    category: "Variation of g",

    title: "At Height",

    formula: "g_h=g\\left(\\frac{R}{R+h}\\right)^2",

    description: "Acceleration due to gravity at height h."
},

{
    category: "Variation of g",

    title: "Approximation at Small Height",

    formula: "g_h=g\\left(1-\\frac{2h}{R}\\right)",

    description: "Approximation when h << R."
},

{
    category: "Variation of g",

    title: "At Depth",

    formula: "g_d=g\\left(1-\\frac dR\\right)",

    description: "Acceleration due to gravity at depth d."
},

{
    category: "Variation of g",

    title: "At Earth's Centre",

    formula: "g=0",

    description: "Acceleration due to gravity becomes zero at Earth's centre."
},

{
    category: "Variation of g",

    title: "Due to Latitude",

    formula: "g_p>g_e",

    description: "Gravity is maximum at poles and minimum at equator."
},

{
    category: "Variation of g",

    title: "Due to Rotation",

    formula: "g'=g-\\omega^2R\\cos^2\\lambda",

    description: "Effective gravity considering Earth's rotation."
},




// ==================================================
// GRAVITATIONAL FIELD
// ==================================================

{
    category: "Gravitational Field",

    title: "Field Intensity",

    formula: "E=\\frac{GM}{r^2}",

    description: "Gravitational field intensity at distance r."
},

{
    category: "Gravitational Field",

    title: "Field Definition",

    formula: "E=\\frac FM",

    description: "Force per unit mass."
},

{
    category: "Gravitational Field",

    title: "Vector Form",

    formula: "\\vec E=-\\frac{GM}{r^2}\\hat r",

    description: "Direction of gravitational field is toward the attracting body."
},

{
    category: "Gravitational Field",

    title: "Inside Uniform Sphere",

    formula: "E=\\frac{GMr}{R^3}",

    description: "Field intensity inside a uniform solid sphere."
},

{
    category: "Gravitational Field",

    title: "At Centre",

    formula: "E=0",

    description: "Gravitational field becomes zero at the centre of a uniform sphere."
},

{
    category: "Gravitational Field",

    title: "Outside Sphere",

    formula: "E=\\frac{GM}{r^2}",

    description: "Outside a sphere it behaves as a point mass."
},

// ==================================================
// GRAVITATIONAL POTENTIAL
// ==================================================

{
    category: "Gravitational Potential",

    title: "Gravitational Potential",

    formula: "V=-\\frac{GM}{r}",

    description: "Gravitational potential at distance r from the centre of a mass."
},

{
    category: "Gravitational Potential",

    title: "Potential Difference",

    formula: "\\Delta V=V_2-V_1",

    description: "Difference in gravitational potential between two points."
},

{
    category: "Gravitational Potential",

    title: "Potential at Earth's Surface",

    formula: "V=-\\frac{GM}{R}",

    description: "Gravitational potential on Earth's surface."
},

{
    category: "Gravitational Potential",

    title: "Potential at Infinity",

    formula: "V=0",

    description: "Gravitational potential is taken as zero at infinity."
},

{
    category: "Gravitational Potential",

    title: "Potential Inside Uniform Sphere",

    formula: "V=-\\frac{GM}{2R^3}(3R^2-r^2)",

    description: "Potential inside a uniform solid sphere."
},

{
    category: "Gravitational Potential",

    title: "Potential at Centre",

    formula: "V=-\\frac{3GM}{2R}",

    description: "Maximum negative potential at the centre of a uniform sphere."
},


// ==================================================
// GRAVITATIONAL POTENTIAL ENERGY
// ==================================================

{
    category: "Potential Energy",

    title: "Potential Energy",

    formula: "U=-\\frac{GMm}{r}",

    description: "Gravitational potential energy of two masses."
},

{
    category: "Potential Energy",

    title: "Potential Energy Near Earth's Surface",

    formula: "U=mgh",

    description: "Approximation for small heights."
},

{
    category: "Potential Energy",

    title: "Change in Potential Energy",

    formula: "\\Delta U=mg(h_2-h_1)",

    description: "Potential energy difference for small vertical displacement."
},

{
    category: "Potential Energy",

    title: "Work Done by Gravity",

    formula: "W=-\\Delta U",

    description: "Work done by gravitational force."
},

{
    category: "Potential Energy",

    title: "Conservation of Mechanical Energy",

    formula: "K+U=\\text{constant}",

    description: "Mechanical energy remains constant in absence of external work."
},


// ==================================================
// FIELD & POTENTIAL RELATION
// ==================================================

{
    category: "Field & Potential",

    title: "Relation Between Field and Potential",

    formula: "\\vec E=-\\nabla V",

    description: "Gravitational field is the negative gradient of potential."
},

{
    category: "Field & Potential",

    title: "One Dimensional Relation",

    formula: "E=-\\frac{dV}{dr}",

    description: "Field intensity equals negative rate of change of potential."
},

{
    category: "Field & Potential",

    title: "Potential from Field",

    formula: "V=-\\int E\\,dr",

    description: "Potential obtained by integrating field intensity."
},


// ==================================================
// KEPLER'S LAWS
// ==================================================

{
    category: "Kepler's Laws",

    title: "First Law",

    formula: "\\text{Planet moves in an ellipse with Sun at one focus}",

    description: "Law of planetary orbit."
},

{
    category: "Kepler's Laws",

    title: "Second Law",

    formula: "\\frac{dA}{dt}=\\text{constant}",

    description: "Equal areas are swept in equal intervals of time."
},

{
    category: "Kepler's Laws",

    title: "Third Law",

    formula: "T^2\\propto r^3",

    description: "Square of orbital period is proportional to cube of orbital radius."
},

{
    category: "Kepler's Laws",

    title: "Ratio Form",

    formula: "\\frac{T_1^2}{T_2^2}=\\frac{r_1^3}{r_2^3}",

    description: "Comparison of orbital periods."
},


// ==================================================
// CENTRE OF MASS
// ==================================================

{
    category: "Centre of Mass",

    title: "Two Particle System",

    formula: "x=\\frac{m_1x_1+m_2x_2}{m_1+m_2}",

    description: "Centre of mass along x-axis."
},

{
    category: "Centre of Mass",

    title: "General Formula",

    formula: "\\vec R=\\frac{\\sum m_i\\vec r_i}{\\sum m_i}",

    description: "Position vector of centre of mass."
},

{
    category: "Centre of Mass",

    title: "Velocity of COM",

    formula: "\\vec V=\\frac{\\sum m_i\\vec v_i}{\\sum m_i}",

    description: "Velocity of centre of mass."
},

{
    category: "Centre of Mass",

    title: "Acceleration of COM",

    formula: "\\vec a=\\frac{\\sum \\vec F_{ext}}{\\sum m}",

    description: "Acceleration depends only on external force."
},


// ==================================================
// CENTRE OF GRAVITY
// ==================================================

{
    category: "Centre of Gravity",

    title: "Definition",

    formula: "\\sum W_ix_i=W\\bar x",

    description: "Moment principle for centre of gravity."
},

{
    category: "Centre of Gravity",

    title: "Uniform Body",

    formula: "CG\\equiv COM",

    description: "For uniform bodies, centre of gravity and centre of mass coincide."
},


// ==================================================
// ESCAPE VELOCITY
// ==================================================

{
    category: "Escape Velocity",

    title: "Escape Velocity",

    formula: "v_e=\\sqrt{\\frac{2GM}{R}}",

    description: "Minimum speed needed to escape Earth's gravity."
},

{
    category: "Escape Velocity",

    title: "Relation with g",

    formula: "v_e=\\sqrt{2gR}",

    description: "Escape velocity expressed using acceleration due to gravity."
},

{
    category: "Escape Velocity",

    title: "Relation with Orbital Velocity",

    formula: "v_e=\\sqrt2\\,v_o",

    description: "Escape velocity is √2 times orbital velocity."
},


// ==================================================
// SATELLITE
// ==================================================

{
    category: "Satellite",

    title: "Orbital Velocity",

    formula: "v_o=\\sqrt{\\frac{GM}{r}}",

    description: "Velocity required for circular orbit."
},

{
    category: "Satellite",

    title: "Orbital Velocity Near Earth",

    formula: "v_o=\\sqrt{gR}",

    description: "Orbital velocity close to Earth's surface."
},

{
    category: "Satellite",

    title: "Time Period",

    formula: "T=2\\pi\\sqrt{\\frac{r^3}{GM}}",

    description: "Orbital period of a satellite."
},

{
    category: "Satellite",

    title: "Angular Velocity",

    formula: "\\omega=\\frac{2\\pi}{T}",

    description: "Angular velocity of revolution."
},

{
    category: "Satellite",

    title: "Centripetal Force",

    formula: "\\frac{mv^2}{r}=\\frac{GMm}{r^2}",

    description: "Gravitational force provides centripetal force."
},

{
    category: "Satellite",

    title: "Height of Satellite",

    formula: "r=R+h",

    description: "Orbital radius equals Earth's radius plus altitude."
},

{
    category: "Satellite",

    title: "Total Energy",

    formula: "E=-\\frac{GMm}{2r}",

    description: "Total mechanical energy of a satellite."
},

{
    category: "Satellite",

    title: "Kinetic Energy",

    formula: "K=\\frac{GMm}{2r}",

    description: "Kinetic energy in circular orbit."
},

{
    category: "Satellite",

    title: "Potential Energy",

    formula: "U=-\\frac{GMm}{r}",

    description: "Potential energy of a satellite."
},

{
    category: "Satellite",

    title: "Energy Relation",

    formula: "U=-2K",

    description: "Potential energy is twice the kinetic energy in magnitude."
},

{
    category: "Satellite",

    title: "Geostationary Satellite Period",

    formula: "T=24\\;\\text{hours}",

    description: "Orbital period of a geostationary satellite."
},

{
    category: "Satellite",

    title: "Geostationary Orbit Radius",

    formula: "r\\approx4.216\\times10^7\\;m",

    description: "Distance from Earth's centre."
},

{
    category: "Satellite",

    title: "Geostationary Altitude",

    formula: "h\\approx3.58\\times10^7\\;m",

    description: "Height above Earth's surface."
},

{
    category: "Satellite",

    title: "Weightlessness",

    formula: "N=0",

    description: "Apparent weight becomes zero in free orbital motion."
},

{
    category: "Satellite",

    title: "Critical Condition",

    formula: "\\frac{GM}{r^2}=\\frac{v^2}{r}",

    description: "Condition for stable circular orbit."
},

// ==========================================
// END OF FORMULA SECTION
// ==========================================

],




// ==========================================
// PROBLEMS
// ==========================================

problems: [

    // ==================================================
// FALLING BODY
// ==================================================

{
    category: "Falling Body",

    type: "Free Fall : Find Final Velocity",

    question: "A stone is dropped from a height of 80 m. Find its velocity just before reaching the ground. (g = 10 ms⁻²)",

    answer: "\\(v=40\\;ms^{-1}\\)",

    explanation: "Using \\(v^2=u^2+2gh\\), \\(u=0\\). Therefore \\(v=\\sqrt{2\\times10\\times80}=40\\;ms^{-1}\\)."
},

{
    category: "Falling Body",

    type: "Free Fall : Find Time",

    question: "A body is dropped from a height of 125 m. Calculate the time required to reach the ground.",

    answer: "\\(5\\;s\\)",

    explanation: "Using \\(h=\\frac12gt^2\\), \\(125=5t^2\\). Hence \\(t=5\\;s\\)."
},

{
    category: "Falling Body",

    type: "Free Fall : Find Height",

    question: "A stone falls for 4 s. Determine the height through which it falls.",

    answer: "\\(80\\;m\\)",

    explanation: "Using \\(h=\\frac12gt^2\\), \\(h=\\frac12\\times10\\times16=80\\;m\\)."
},

{
    category: "Falling Body",

    type: "Upward Projection : Maximum Height",

    question: "A ball is projected vertically upward with speed 30 ms⁻¹. Find the maximum height.",

    answer: "\\(45\\;m\\)",

    explanation: "Using \\(H=\\frac{u^2}{2g}=\\frac{900}{20}=45\\;m\\)."
},

{
    category: "Falling Body",

    type: "Upward Projection : Time of Ascent",

    question: "A body is thrown upward with speed 40 ms⁻¹. Calculate the time required to reach maximum height.",

    answer: "\\(4\\;s\\)",

    explanation: "Using \\(t=\\frac ug=\\frac{40}{10}=4\\;s\\)."
},

{
    category: "Falling Body",

    type: "Upward Projection : Total Time",

    question: "A body is projected vertically upward at 50 ms⁻¹. Determine the total time of flight.",

    answer: "\\(10\\;s\\)",

    explanation: "Using \\(T=\\frac{2u}{g}=\\frac{100}{10}=10\\;s\\)."
},

{
    category: "Falling Body",

    type: "Velocity at Particular Height",

    question: "A body is thrown upward with speed 40 ms⁻¹. Find its speed after rising 60 m.",

    answer: "\\(20\\;ms^{-1}\\)",

    explanation: "Using \\(v^2=u^2-2gh=1600-1200=400\\). Hence \\(v=20\\;ms^{-1}\\)."
},

{
    category: "Falling Body",

    type: "Two Bodies Dropped Together",

    question: "Two stones are dropped simultaneously from heights 80 m and 45 m. Find the difference between their landing times.",

    answer: "\\(1\\;s\\)",

    explanation: "Times are \\(4\\;s\\) and \\(3\\;s\\). Difference = 1 s."
},

{
    category: "Falling Body",

    type: "Two Bodies Released Successively",

    question: "A stone is dropped. Another is released 2 s later from the same point. Determine their separation after 5 s from the first release.",

    answer: "\\(70\\;m\\)",

    explanation: "First falls for 5 s (125 m). Second falls for 3 s (45 m). Separation = 80 m."
},

{
    category: "Falling Body",

    type: "Average Velocity During Free Fall",

    question: "A body falls freely for 6 s. Calculate its average velocity.",

    answer: "\\(30\\;ms^{-1}\\)",

    explanation: "Final velocity = 60 ms⁻¹. Average velocity = (0+60)/2 = 30 ms⁻¹."
},


// ==================================================
// UNIVERSAL GRAVITATION
// ==================================================

{
    category: "Universal Gravitation",

    type: "Gravitational Force Between Two Bodies",

    question: "Two masses of 5 kg and 10 kg are separated by 2 m. Calculate the gravitational force.",

    answer: "\\(8.34\\times10^{-10}\\;N\\)",

    explanation: "Using \\(F=\\frac{Gm_1m_2}{r^2}\\)."
},

{
    category: "Universal Gravitation",

    type: "Force Ratio with Distance",

    question: "If the distance between two masses becomes three times larger, determine the new force.",

    answer: "\\(\\frac19F\\)",

    explanation: "Force varies inversely with square of distance."
},

{
    category: "Universal Gravitation",

    type: "Effect of Doubling Both Masses",

    question: "Both masses become twice their original values. Determine the new force.",

    answer: "\\(4F\\)",

    explanation: "Force is proportional to \\(m_1m_2\\)."
},

{
    category: "Universal Gravitation",

    type: "Finding Unknown Mass",

    question: "A 5 kg body attracts another object with force \\(3.3\\times10^{-10}\\;N\\) from 1 m away. Determine the second mass.",

    answer: "\\(1\\;kg\\)",

    explanation: "Rearrange Newton's law to obtain unknown mass."
},

{
    category: "Universal Gravitation",

    type: "Finding Separation",

    question: "Two 10 kg masses attract each other with force \\(6.67\\times10^{-9}\\;N\\). Find their separation.",

    answer: "\\(1\\;m\\)",

    explanation: "Rearrange \\(F=\\frac{Gm_1m_2}{r^2}\\)."
},

{
    category: "Universal Gravitation",

    type: "Planet Comparison",

    question: "Planet A has twice Earth's mass and the same radius. Compare gravitational force on the same object.",

    answer: "\\(2F\\)",

    explanation: "Force is directly proportional to planetary mass."
},

{
    category: "Universal Gravitation",

    type: "Moon-Earth Attraction",

    question: "Explain why Earth and Moon experience equal gravitational force despite different masses.",

    answer: "Forces are equal in magnitude.",

    explanation: "According to Newton's Third Law, action and reaction are equal and opposite."
},

{
    category: "Universal Gravitation",

    type: "Force at Half Distance",

    question: "Distance between two masses becomes half. Determine the new force.",

    answer: "\\(4F\\)",

    explanation: "Inverse square law."
},

{
    category: "Universal Gravitation",

    type: "Inverse Square Numerical",

    question: "Force becomes 16 N at distance r. Find force at distance 2r.",

    answer: "\\(4\\;N\\)",

    explanation: "Force decreases four times."
},

{
    category: "Universal Gravitation",

    type: "Three Distance Comparison",

    question: "Compare gravitational forces at distances R, 2R and 3R.",

    answer: "\\(1:1/4:1/9\\)",

    explanation: "Apply inverse square law directly."
},

// ==================================================
// ACCELERATION DUE TO GRAVITY
// ==================================================

{
    category: "Acceleration due to Gravity",

    type: "Find g Using Planetary Mass and Radius",

    question: "A planet has mass \\(6\\times10^{24}\\;kg\\) and radius \\(6.4\\times10^6\\;m\\). Calculate the acceleration due to gravity on its surface.",

    answer: "\\(9.8\\;ms^{-2}\\)",

    explanation: "Using \\(g=\\frac{GM}{R^2}\\). Substitute the given values to obtain approximately \\(9.8\\;ms^{-2}\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Compare g on Two Planets",

    question: "Planet A has twice Earth's mass and twice Earth's radius. Compare its acceleration due to gravity with Earth's.",

    answer: "\\(\\frac12g\\)",

    explanation: "\\(g\\propto\\frac{M}{R^2}=\\frac{2}{2^2}=\\frac12\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Weight of a Body",

    question: "Find the weight of a 60 kg person on Earth.",

    answer: "\\(588\\;N\\)",

    explanation: "Using \\(W=mg=60\\times9.8=588\\;N\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Mass from Weight",

    question: "An object weighs 245 N on Earth. Determine its mass.",

    answer: "\\(25\\;kg\\)",

    explanation: "\\(m=\\frac{W}{g}=\\frac{245}{9.8}=25\\;kg\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Weight on Another Planet",

    question: "The acceleration due to gravity on a planet is 4 ms⁻². Find the weight of a 15 kg object.",

    answer: "\\(60\\;N\\)",

    explanation: "Using \\(W=mg=15\\times4=60\\;N\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Radius from g",

    question: "If Earth's mass remains constant but its radius doubles, determine the new acceleration due to gravity.",

    answer: "\\(\\frac14g\\)",

    explanation: "\\(g\\propto\\frac1{R^2}\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Mass from g and Radius",

    question: "A planet has radius \\(5\\times10^6\\;m\\) and \\(g=8\\;ms^{-2}\\). Determine its mass.",

    answer: "\\(3.0\\times10^{24}\\;kg\\) (approximately)",

    explanation: "Using \\(M=\\frac{gR^2}{G}\\)."
},

{
    category: "Acceleration due to Gravity",

    type: "Compare Weight on Earth and Moon",

    question: "A person's weight on Earth is 600 N. What will be the weight on the Moon where \\(g=\\frac16g_E\\)?",

    answer: "\\(100\\;N\\)",

    explanation: "Weight is directly proportional to \\(g\\)."
},


// ==================================================
// VARIATION OF g
// ==================================================

{
    category: "Variation of g",

    type: "Gravity at Height",

    question: "Determine the acceleration due to gravity at a height equal to Earth's radius.",

    answer: "\\(\\frac14g\\)",

    explanation: "\\(g_h=g\\left(\\frac{R}{R+h}\\right)^2\\). Here \\(h=R\\)."
},

{
    category: "Variation of g",

    type: "Gravity at Small Altitude",

    question: "Calculate the percentage decrease in \\(g\\) at a height of 10 km above Earth.",

    answer: "Approximately 0.3% decrease.",

    explanation: "Use \\(g_h=g\\left(1-\\frac{2h}{R}\\right)\\)."
},

{
    category: "Variation of g",

    type: "Gravity at Depth",

    question: "Find \\(g\\) at a depth equal to one-fourth of Earth's radius.",

    answer: "\\(\\frac34g\\)",

    explanation: "\\(g_d=g\\left(1-\\frac dR\\right)\\)."
},

{
    category: "Variation of g",

    type: "Gravity at Earth's Centre",

    question: "Determine the value of \\(g\\) at Earth's centre.",

    answer: "\\(0\\)",

    explanation: "Gravitational pulls from all directions cancel completely."
},

{
    category: "Variation of g",

    type: "Compare Pole and Equator",

    question: "Where is acceleration due to gravity greater: at the poles or the equator?",

    answer: "At the poles.",

    explanation: "Earth's rotation reduces effective gravity at the equator."
},

{
    category: "Variation of g",

    type: "Height for Half Gravity",

    question: "At what height above Earth's surface will gravity become half its surface value?",

    answer: "\\((\\sqrt2-1)R\\)",

    explanation: "Set \\(g_h=\\frac12g\\) and solve."
},

{
    category: "Variation of g",

    type: "Depth for Half Gravity",

    question: "At what depth will gravity become half of its surface value?",

    answer: "\\(\\frac R2\\)",

    explanation: "Using \\(g_d=g\\left(1-\\frac dR\\right)\\)."
},

{
    category: "Variation of g",

    type: "Ratio of Gravity",

    question: "Find the ratio of acceleration due to gravity at Earth's surface and at height R.",

    answer: "\\(4:1\\)",

    explanation: "At height R, gravity becomes one-fourth."
},

{
    category: "Variation of g",

    type: "Altitude Comparison",

    question: "Compare gravity at heights \\(R\\) and \\(2R\\).",

    answer: "\\(\\frac14g:\\frac19g=9:4\\)",

    explanation: "Apply the variation formula separately."
},

{
    category: "Variation of g",

    type: "Mine Problem",

    question: "A mine is 800 m deep. Determine the percentage decrease in gravity.",

    answer: "Very small (approximately 0.013%).",

    explanation: "Use \\(g_d=g\\left(1-\\frac dR\\right)\\)."
},

// ==================================================
// GRAVITATIONAL FIELD
// ==================================================

{
    category: "Gravitational Field",

    type: "Field Intensity at Distance",

    question: "Find the gravitational field intensity at a point 8×10⁶ m from the centre of Earth.",

    answer: "\\(6.25\\;Nkg^{-1}\\) (approximately)",

    explanation: "Using \\(E=\\frac{GM}{r^2}\\)."
},

{
    category: "Gravitational Field",

    type: "Field from Force",

    question: "A 2 kg body experiences a gravitational force of 30 N. Determine the gravitational field intensity.",

    answer: "\\(15\\;Nkg^{-1}\\)",

    explanation: "Using \\(E=\\frac{F}{m}=\\frac{30}{2}=15\\;Nkg^{-1}\\)."
},

{
    category: "Gravitational Field",

    type: "Compare Field at Two Distances",

    question: "Compare the gravitational field intensity at distances R and 2R from Earth's centre.",

    answer: "\\(4:1\\)",

    explanation: "Since \\(E\\propto\\frac1{r^2}\\)."
},

{
    category: "Gravitational Field",

    type: "Field at Earth's Centre",

    question: "Determine the gravitational field intensity at the centre of a uniform spherical Earth.",

    answer: "\\(0\\)",

    explanation: "Gravitational pulls from all directions cancel."
},

{
    category: "Gravitational Field",

    type: "Field Inside Uniform Sphere",

    question: "A point lies halfway between the centre and surface of a uniform solid sphere. Compare the field intensity with surface value.",

    answer: "\\(\\frac12E\\)",

    explanation: "Inside a uniform sphere, \\(E\\propto r\\)."
},

{
    category: "Gravitational Field",

    type: "Unknown Planet Mass",

    question: "The gravitational field intensity at the surface of a planet is 12 Nkg⁻¹ and its radius is \\(5\\times10^6\\) m. Find the planet's mass.",

    answer: "\\(4.5\\times10^{24}\\;kg\\) (approximately)",

    explanation: "Using \\(E=\\frac{GM}{R^2}\\)."
},

{
    category: "Gravitational Field",

    type: "Field Due to Two Equal Masses",

    question: "Two equal masses are placed symmetrically. Find the gravitational field at the midpoint.",

    answer: "\\(0\\)",

    explanation: "The fields are equal and opposite."
},

{
    category: "Gravitational Field",

    type: "Field Direction",

    question: "State the direction of the gravitational field produced by Earth.",

    answer: "Towards the centre of Earth.",

    explanation: "Gravitational field always points toward the attracting mass."
},


// ==================================================
// GRAVITATIONAL POTENTIAL
// ==================================================

{
    category: "Gravitational Potential",

    type: "Potential at Earth's Surface",

    question: "Calculate the gravitational potential at Earth's surface.",

    answer: "\\(-6.25\\times10^7\\;Jkg^{-1}\\) (approximately)",

    explanation: "Using \\(V=-\\frac{GM}{R}\\)."
},

{
    category: "Gravitational Potential",

    type: "Potential at Infinity",

    question: "Determine the gravitational potential at infinity.",

    answer: "\\(0\\)",

    explanation: "By convention gravitational potential is zero at infinity."
},

{
    category: "Gravitational Potential",

    type: "Potential Difference",

    question: "The potentials at two points are -60 MJkg⁻¹ and -20 MJkg⁻¹. Find the potential difference.",

    answer: "\\(40\\;MJkg^{-1}\\)",

    explanation: "\\(\\Delta V=V_2-V_1=(-20)-(-60)=40\\)."
},

{
    category: "Gravitational Potential",

    type: "Potential at Double Distance",

    question: "Compare the gravitational potentials at distances R and 2R.",

    answer: "\\(2:1\\)",

    explanation: "Since \\(V\\propto\\frac1r\\)."
},

{
    category: "Gravitational Potential",

    type: "Potential Inside Uniform Sphere",

    question: "Find the gravitational potential at the centre of a uniform sphere of mass M and radius R.",

    answer: "\\(-\\frac{3GM}{2R}\\)",

    explanation: "Use the formula for potential inside a uniform sphere."
},

{
    category: "Gravitational Potential",

    type: "Potential from Planet Mass",

    question: "A planet has mass \\(5\\times10^{24}\\) kg and radius \\(5\\times10^6\\) m. Determine its surface potential.",

    answer: "\\(-6.67\\times10^7\\;Jkg^{-1}\\) (approximately)",

    explanation: "Using \\(V=-\\frac{GM}{R}\\)."
},

{
    category: "Gravitational Potential",

    type: "Potential Energy from Potential",

    question: "The gravitational potential at a point is -8×10⁶ Jkg⁻¹. Find the potential energy of a 5 kg body.",

    answer: "\\(-4\\times10^7\\;J\\)",

    explanation: "\\(U=mV\\)."
},

{
    category: "Gravitational Potential",

    type: "Potential Comparison",

    question: "Compare the magnitude of gravitational potential at Earth's surface and at height R.",

    answer: "\\(2:1\\)",

    explanation: "Potential varies inversely with distance from Earth's centre."
},

// ==================================================
// POTENTIAL ENERGY
// ==================================================

{
    category: "Potential Energy",

    type: "Potential Energy Between Two Bodies",

    question: "Calculate the gravitational potential energy of two masses 4 kg and 5 kg separated by 2 m.",

    answer: "\\(-3.34\\times10^{-10}\\;J\\)",

    explanation: "Using \\(U=-\\frac{GMm}{r}\\)."
},

{
    category: "Potential Energy",

    type: "Potential Energy Near Earth",

    question: "Find the increase in potential energy when a 10 kg object is lifted through 20 m.",

    answer: "\\(1960\\;J\\)",

    explanation: "Using \\(U=mgh\\)."
},

{
    category: "Potential Energy",

    type: "Work Done Against Gravity",

    question: "A 5 kg object is lifted 12 m. Calculate the work done against gravity.",

    answer: "\\(588\\;J\\)",

    explanation: "Work done equals increase in potential energy."
},

{
    category: "Potential Energy",

    type: "Potential Energy Ratio",

    question: "Compare gravitational potential energies of the same body at distances R and 3R.",

    answer: "\\(3:1\\)",

    explanation: "\\(U\\propto\\frac1r\\)."
},

{
    category: "Potential Energy",

    type: "Mechanical Energy Conservation",

    question: "A stone falls freely from height h. Explain the change in kinetic and potential energy.",

    answer: "Potential energy decreases while kinetic energy increases by the same amount.",

    explanation: "Total mechanical energy remains constant."
},

{
    category: "Potential Energy",

    type: "Find Height from Potential Energy",

    question: "A body gains 980 J of potential energy. Its mass is 10 kg. Determine the height.",

    answer: "\\(10\\;m\\)",

    explanation: "Using \\(mgh=980\\)."
},

{
    category: "Potential Energy",

    type: "Potential Energy at Infinity",

    question: "What is the gravitational potential energy of two bodies infinitely separated?",

    answer: "\\(0\\)",

    explanation: "Potential energy is taken as zero at infinity."
},

{
    category: "Potential Energy",

    type: "Negative Sign of Potential Energy",

    question: "Why is gravitational potential energy negative?",

    answer: "Because work must be done to separate two attracting masses to infinity.",

    explanation: "Infinity is chosen as the zero reference level."
},


// ==================================================
// RELATION BETWEEN GRAVITATIONAL FIELD & POTENTIAL
// ==================================================

{
    category: "Field & Potential",

    type: "Field from Potential Gradient",

    question: "The gravitational potential varies with distance as \\(V=-\\frac{GM}{r}\\). Determine the corresponding field intensity.",

    answer: "\\(E=\\frac{GM}{r^2}\\)",

    explanation: "Using \\(E=-\\frac{dV}{dr}\\). Differentiating \\(V=-\\frac{GM}{r}\\) gives \\(E=\\frac{GM}{r^2}\\)."
},

{
    category: "Field & Potential",

    type: "Potential from Field",

    question: "The gravitational field at a point is known. How can the gravitational potential be determined?",

    answer: "\\(V=-\\int E\\,dr\\)",

    explanation: "Potential is obtained by integrating the field with respect to distance."
},

{
    category: "Field & Potential",

    type: "Zero Field but Non-zero Potential",

    question: "Can gravitational field be zero while gravitational potential is non-zero? Explain with an example.",

    answer: "Yes. At the centre of a uniform spherical shell, field is zero but potential is negative.",

    explanation: "Field depends on the gradient of potential, not the potential itself."
},

{
    category: "Field & Potential",

    type: "Compare Field and Potential Variation",

    question: "Compare how gravitational field and gravitational potential vary with distance from Earth.",

    answer: "\\(E\\propto\\frac1{r^2},\\quad V\\propto\\frac1r\\)",

    explanation: "Field decreases faster than potential."
},

{
    category: "Field & Potential",

    type: "Potential Difference from Field",

    question: "A uniform gravitational field has intensity 10 Nkg⁻¹. Find the potential difference between two points 8 m apart.",

    answer: "\\(80\\;Jkg^{-1}\\)",

    explanation: "For a uniform field, \\(\\Delta V=Ed=10\\times8=80\\;Jkg^{-1}\\)."
},


// ==================================================
// KEPLER'S LAWS
// ==================================================

{
    category: "Kepler's Laws",

    type: "Orbital Period Ratio",

    question: "Planet A revolves at distance R while Planet B revolves at distance 4R. Determine the ratio of their orbital periods.",

    answer: "\\(1:8\\)",

    explanation: "Using Kepler's third law, \\(T\\propto r^{3/2}\\)."
},

{
    category: "Kepler's Laws",

    type: "Find Orbital Radius",

    question: "A satellite has an orbital period four times larger than another satellite. Determine the ratio of their orbital radii.",

    answer: "\\(\\sqrt[3]{16}:1\\approx2.52:1\\)",

    explanation: "Using \\(T^2\\propto r^3\\)."
},

{
    category: "Kepler's Laws",

    type: "Equal Area Law",

    question: "Which law states that equal areas are swept out in equal intervals of time?",

    answer: "Kepler's Second Law.",

    explanation: "It represents conservation of angular momentum."
},

{
    category: "Kepler's Laws",

    type: "Planetary Orbit Shape",

    question: "According to Kepler's First Law, what is the shape of a planetary orbit?",

    answer: "Ellipse.",

    explanation: "The Sun remains at one focus of the ellipse."
},

{
    category: "Kepler's Laws",

    type: "Compare Two Planets",

    question: "Planet X completes one revolution in 1 year. Planet Y revolves at four times the orbital radius. Determine its orbital period.",

    answer: "\\(8\\;years\\)",

    explanation: "Since \\(T\\propto r^{3/2}\\), \\(T=4^{3/2}=8\\)."
},

{
    category: "Kepler's Laws",

    type: "Find Radius from Period",

    question: "A planet completes one revolution in 27 years. Another completes one revolution in 1 year. Compare their orbital radii.",

    answer: "\\(9:1\\)",

    explanation: "\\(r\\propto T^{2/3}\\). Thus \\(27^{2/3}=9\\)."
},

{
    category: "Kepler's Laws",

    type: "Angular Speed Comparison",

    question: "Which planet moves faster in its orbit, the one nearer the Sun or the one farther away?",

    answer: "The nearer planet.",

    explanation: "Its orbital period is smaller, so angular speed is greater."
},

{
    category: "Kepler's Laws",

    type: "Perihelion and Aphelion",

    question: "According to Kepler's Second Law, where is a planet's speed maximum?",

    answer: "At perihelion.",

    explanation: "The planet moves fastest when nearest the Sun."
},


// ==================================================
// CENTRE OF MASS & CENTRE OF GRAVITY
// ==================================================

{
    category: "Centre of Mass",

    type: "Centre of Mass of Two Particles",

    question: "Two masses of 2 kg and 3 kg are placed at x = 0 m and x = 10 m respectively. Find the centre of mass.",

    answer: "\\(6\\;m\\)",

    explanation: "Using \\(x=\\frac{m_1x_1+m_2x_2}{m_1+m_2}\\)."
},

{
    category: "Centre of Mass",

    type: "Equal Masses",

    question: "Two equal masses are placed 8 m apart. Determine the centre of mass.",

    answer: "Midpoint (4 m).",

    explanation: "Equal masses have COM exactly halfway."
},

{
    category: "Centre of Mass",

    type: "Three Particle System",

    question: "Three equal masses are placed at x = 0 m, 2 m and 4 m. Find the centre of mass.",

    answer: "\\(2\\;m\\)",

    explanation: "Average of their positions."
},

{
    category: "Centre of Mass",

    type: "Unknown Mass",

    question: "A 4 kg mass and an unknown mass are placed 6 m apart. The centre of mass lies 2 m from the 4 kg mass. Find the unknown mass.",

    answer: "\\(2\\;kg\\)",

    explanation: "Use the centre of mass formula and solve for the unknown mass."
},

{
    category: "Centre of Gravity",

    type: "Uniform Rod",

    question: "Where is the centre of gravity of a uniform rod located?",

    answer: "At its midpoint.",

    explanation: "Uniform mass distribution makes the midpoint the CG."
},

{
    category: "Centre of Gravity",

    type: "CG and COM",

    question: "Under what condition do the centre of gravity and centre of mass coincide?",

    answer: "In a uniform gravitational field.",

    explanation: "Then every mass element experiences the same gravitational acceleration."
},

{
    category: "Centre of Gravity",

    type: "Stability",

    question: "Why does lowering the centre of gravity increase stability?",

    answer: "Because a larger tilt is required before the line of action of weight passes outside the base.",

    explanation: "Lower CG reduces the tendency to topple."
},

{
    category: "Centre of Gravity",

    type: "Hanging Body",

    question: "How can the centre of gravity of an irregular lamina be determined experimentally?",

    answer: "By suspending it from different points and drawing plumb lines.",

    explanation: "The intersection of the plumb lines gives the centre of gravity."
},


// ==================================================
// ESCAPE VELOCITY
// ==================================================

{
    category: "Escape Velocity",

    type: "Escape Velocity from Earth",

    question: "Calculate the escape velocity from Earth's surface. Take \\(g=9.8\\;ms^{-2}\\) and \\(R=6.4\\times10^6\\;m\\).",

    answer: "\\(11.2\\;kms^{-1}\\)",

    explanation: "Using \\(v_e=\\sqrt{2gR}\\). Substituting the values gives approximately \\(11.2\\times10^3\\;ms^{-1}\\)."
},

{
    category: "Escape Velocity",

    type: "Escape Velocity on Another Planet",

    question: "A planet has twice Earth's radius but the same acceleration due to gravity. Compare its escape velocity with Earth's.",

    answer: "\\(\\sqrt2\\,v_e\\)",

    explanation: "Since \\(v_e=\\sqrt{2gR}\\), doubling R increases escape velocity by \\(\\sqrt2\\)."
},

{
    category: "Escape Velocity",

    type: "Relation with Orbital Velocity",

    question: "If the orbital velocity of a satellite is 8 km/s, determine the escape velocity.",

    answer: "\\(11.31\\;kms^{-1}\\)",

    explanation: "Using \\(v_e=\\sqrt2v_o\\)."
},

{
    category: "Escape Velocity",

    type: "Mass Required for Escape Velocity",

    question: "A planet has radius \\(4\\times10^6\\;m\\) and escape velocity \\(8\\times10^3\\;ms^{-1}\\). Determine its mass.",

    answer: "\\(1.92\\times10^{24}\\;kg\\) (approximately)",

    explanation: "Using \\(v_e=\\sqrt{\\frac{2GM}{R}}\\) and solving for M."
},

{
    category: "Escape Velocity",

    type: "Compare Escape Velocities",

    question: "Planet A has four times Earth's mass and twice Earth's radius. Compare its escape velocity with Earth's.",

    answer: "\\(\\sqrt2\\,v_e\\)",

    explanation: "\\(v_e\\propto\\sqrt{\\frac{M}{R}}\\)."
},

{
    category: "Escape Velocity",

    type: "Kinetic Energy for Escape",

    question: "Find the minimum kinetic energy required for a 500 kg spacecraft to escape Earth.",

    answer: "\\(3.14\\times10^{10}\\;J\\) (approximately)",

    explanation: "Using \\(K=\\frac12mv_e^2\\)."
},

{
    category: "Escape Velocity",

    type: "Concept of Escape Velocity",

    question: "Why is escape velocity independent of the mass of the escaping body?",

    answer: "Because the mass of the body cancels during derivation.",

    explanation: "Both kinetic and gravitational potential energies are proportional to the object's mass."
},

{
    category: "Escape Velocity",

    type: "Escape Velocity at Height",

    question: "How does escape velocity change as altitude increases?",

    answer: "It decreases.",

    explanation: "Since \\(v_e=\\sqrt{\\frac{2GM}{R+h}}\\), increasing distance reduces escape velocity."
},


// ==================================================
// SATELLITES
// ==================================================

{
    category: "Satellite",

    type: "Orbital Velocity",

    question: "Calculate the orbital velocity of a satellite just above Earth's surface.",

    answer: "\\(7.9\\;kms^{-1}\\)",

    explanation: "Using \\(v_o=\\sqrt{gR}\\)."
},

{
    category: "Satellite",

    type: "Orbital Period",

    question: "A satellite revolves at a radius of \\(7\\times10^6\\;m\\). Determine its orbital period.",

    answer: "\\(5820\\;s\\) (approximately)",

    explanation: "Using \\(T=2\\pi\\sqrt{\\frac{r^3}{GM}}\\)."
},

{
    category: "Satellite",

    type: "Find Orbital Radius",

    question: "A satellite has an orbital period of 24 hours. Determine its orbital radius.",

    answer: "\\(4.22\\times10^7\\;m\\)",

    explanation: "Use Kepler's third law for satellites."
},

{
    category: "Satellite",

    type: "Height of Geostationary Satellite",

    question: "Determine the height of a geostationary satellite above Earth's surface.",

    answer: "\\(3.58\\times10^7\\;m\\)",

    explanation: "Subtract Earth's radius from the orbital radius."
},

{
    category: "Satellite",

    type: "Kinetic Energy of Satellite",

    question: "A satellite of mass 800 kg revolves at radius r. Determine its kinetic energy.",

    answer: "\\(\\frac{GMm}{2r}\\)",

    explanation: "Derived from orbital velocity."
},

{
    category: "Satellite",

    type: "Potential Energy of Satellite",

    question: "Find the gravitational potential energy of a satellite of mass m at orbital radius r.",

    answer: "\\(-\\frac{GMm}{r}\\)",

    explanation: "Using the gravitational potential energy formula."
},

{
    category: "Satellite",

    type: "Total Energy",

    question: "Determine the total mechanical energy of a satellite.",

    answer: "\\(-\\frac{GMm}{2r}\\)",

    explanation: "Total energy equals kinetic plus potential energy."
},

{
    category: "Satellite",

    type: "Energy Relation",

    question: "Show the relation between kinetic and potential energies of a satellite.",

    answer: "\\(U=-2K\\)",

    explanation: "For circular orbit, potential energy is twice kinetic energy in magnitude."
},

{
    category: "Satellite",

    type: "Compare Orbital Velocities",

    question: "Compare orbital velocities of satellites at radii R and 4R.",

    answer: "\\(2:1\\)",

    explanation: "Since \\(v\\propto\\frac1{\\sqrt r}\\)."
},

{
    category: "Satellite",

    type: "Compare Orbital Periods",

    question: "Compare orbital periods of satellites at radii R and 4R.",

    answer: "\\(1:8\\)",

    explanation: "Using \\(T\\propto r^{3/2}\\)."
},

{
    category: "Satellite",

    type: "Weightlessness in Satellite",

    question: "Why does an astronaut experience weightlessness inside an orbiting satellite?",

    answer: "Because both astronaut and satellite are in the same state of continuous free fall.",

    explanation: "The normal reaction becomes zero although gravity still acts."
},

{
    category: "Satellite",

    type: "Purpose of Geostationary Satellite",

    question: "Why are geostationary satellites widely used for communication?",

    answer: "They remain fixed relative to a point on Earth's surface.",

    explanation: "Their orbital period equals Earth's rotational period."
},

{
    category: "Satellite",

    type: "Artificial vs Natural Satellite",

    question: "Differentiate between artificial and natural satellites.",

    answer: "Artificial satellites are man-made; natural satellites occur naturally.",

    explanation: "Examples: INSAT is artificial, Moon is natural."
},

{
    category: "Satellite",

    type: "Launch Direction",

    question: "Why are satellites generally launched from west to east?",

    answer: "To utilize Earth's rotational speed and reduce fuel consumption.",

    explanation: "Earth's rotation provides an initial velocity boost."
},

{
    category: "Satellite",

    type: "Low Earth Orbit",

    question: "Why does a satellite in low Earth orbit move faster than one in a higher orbit?",

    answer: "Because orbital velocity decreases with increasing orbital radius.",

    explanation: "According to \\(v=\\sqrt{\\frac{GM}{r}}\\)."
},

// ==================================================
// CONTINUE...
// Next Part:
// • Applications of Gravitation
// • Mixed Concept Problems
// • Advanced Admission-Level Numericals
// • Conceptual Problems
// • Finish chapterData object
//

// ==================================================
// APPLICATIONS OF GRAVITATION
// ==================================================

{
    category: "Applications of Gravitation",

    type: "Finding Planetary Mass",

    question: "The radius of a planet is \\(7\\times10^6\\,m\\) and \\(g=8\\,ms^{-2}\\). Determine its mass.",

    answer: "\\(5.87\\times10^{24}\\,kg\\) (approximately)",

    explanation: "Using \\(M=\\frac{gR^2}{G}\\)."
},

{
    category: "Applications of Gravitation",

    type: "Finding Radius of a Planet",

    question: "A planet has mass \\(3\\times10^{24}\\,kg\\) and surface gravity \\(6\\,ms^{-2}\\). Determine its radius.",

    answer: "\\(5.77\\times10^6\\,m\\) (approximately)",

    explanation: "Rearrange \\(g=\\frac{GM}{R^2}\\)."
},

{
    category: "Applications of Gravitation",

    type: "Density of Earth",

    question: "Express Earth's average density in terms of \\(g\\), \\(R\\) and \\(G\\).",

    answer: "\\(\\rho=\\frac{3g}{4\\pi GR}\\)",

    explanation: "Using \\(M=\\frac43\\pi R^3\\rho\\) together with \\(g=\\frac{GM}{R^2}\\)."
},

{
    category: "Applications of Gravitation",

    type: "Mass of Earth from g",

    question: "How can Earth's mass be determined from the known values of \\(g\\), \\(R\\) and \\(G\\)?",

    answer: "\\(M=\\frac{gR^2}{G}\\)",

    explanation: "Derived directly from Newton's law of gravitation."
},

{
    category: "Applications of Gravitation",

    type: "Earth-Moon Force",

    question: "Determine the gravitational force between Earth and Moon if their masses and separation are known.",

    answer: "\\(F=\\frac{GM_EM_M}{r^2}\\)",

    explanation: "Apply Newton's universal law of gravitation."
},

{
    category: "Applications of Gravitation",

    type: "Artificial Satellite Uses",

    question: "Mention four practical applications of artificial satellites.",

    answer: "Communication, weather forecasting, GPS/navigation and remote sensing.",

    explanation: "Artificial satellites are widely used in science and modern technology."
},

{
    category: "Applications of Gravitation",

    type: "Uses of Newton's Law",

    question: "State four important applications of Newton's law of gravitation.",

    answer: "Determining planetary masses, predicting satellite motion, explaining tides and studying planetary motion.",

    explanation: "Newton's law explains numerous astronomical phenomena."
},

{
    category: "Applications of Gravitation",

    type: "Importance of Escape Velocity",

    question: "Why is escape velocity important in space missions?",

    answer: "It determines the minimum launch speed required to leave Earth's gravitational influence.",

    explanation: "Without reaching escape velocity, spacecraft eventually return."
},



// ==================================================
// MIXED CONCEPT PROBLEMS
// ==================================================

{
    category: "Mixed Concepts",

    type: "Find g from Escape Velocity",

    question: "Escape velocity of a planet is 10 km/s and its radius is \\(5\\times10^6\\) m. Determine g.",

    answer: "\\(10\\,ms^{-2}\\)",

    explanation: "Using \\(v_e=\\sqrt{2gR}\\)."
},

{
    category: "Mixed Concepts",

    type: "Find Orbital Velocity from Escape Velocity",

    question: "Escape velocity of Earth is 11.2 km/s. Find the orbital velocity near Earth's surface.",

    answer: "\\(7.9\\,kms^{-1}\\)",

    explanation: "Using \\(v_e=\\sqrt2v_o\\)."
},

{
    category: "Mixed Concepts",

    type: "Satellite Energy",

    question: "A satellite has kinetic energy \\(2\\times10^8\\) J. Determine its potential energy and total energy.",

    answer: "\\(U=-4\\times10^8\\) J, \\(E=-2\\times10^8\\) J.",

    explanation: "Use \\(U=-2K\\) and \\(E=K+U\\)."
},

{
    category: "Mixed Concepts",

    type: "Potential from Escape Velocity",

    question: "Express gravitational potential at Earth's surface in terms of escape velocity.",

    answer: "\\(V=-\\frac{v_e^2}{2}\\)",

    explanation: "Using \\(v_e^2=\\frac{2GM}{R}\\)."
},

{
    category: "Mixed Concepts",

    type: "Field from g",

    question: "Show that the gravitational field intensity at Earth's surface is numerically equal to g.",

    answer: "\\(E=g\\)",

    explanation: "Since \\(E=\\frac{GM}{R^2}\\) and \\(g=\\frac{GM}{R^2}\\)."
},

{
    category: "Mixed Concepts",

    type: "Potential Energy Lost",

    question: "A 20 kg object falls freely through 25 m. Determine the loss in gravitational potential energy.",

    answer: "\\(4900\\;J\\)",

    explanation: "Using \\(\\Delta U=mgh\\)."
},

{
    category: "Mixed Concepts",

    type: "Free Fall Energy",

    question: "A body falls from rest. At what height will its kinetic energy become equal to its remaining potential energy?",

    answer: "At half of the original height.",

    explanation: "Mechanical energy is conserved throughout the motion."
},

{
    category: "Mixed Concepts",

    type: "Find Radius Using Satellite Velocity",

    question: "A satellite moves with orbital velocity 8 km/s. Determine the orbital radius if Earth's mass is known.",

    answer: "\\(r=\\frac{GM}{v^2}\\)",

    explanation: "Rearrange the orbital velocity equation."
},

{
    category: "Mixed Concepts",

    type: "Gravity on Moon",

    question: "The Moon's radius is one-fourth of Earth's and its mass is one-eightieth of Earth's. Compare the acceleration due to gravity.",

    answer: "\\(\\frac15g\\)",

    explanation: "\\(g\\propto\\frac{M}{R^2}=\\frac{1/80}{1/16}=\\frac15\\)."
},

{
    category: "Mixed Concepts",

    type: "Planet Comparison",

    question: "Planet A has three times Earth's mass and twice Earth's radius. Compare its escape velocity with Earth's.",

    answer: "\\(\\sqrt{\\frac32}\\,v_e\\)",

    explanation: "Escape velocity varies as \\(\\sqrt{\\frac{M}{R}}\\)."
},



// ==================================================
// ADVANCED ADMISSION PROBLEMS
// ==================================================

{
    category: "Advanced",

    type: "Gravity at Height and Depth",

    question: "At what depth will gravity be equal to gravity at height \\(h=\\frac{R}{4}\\)?",

    answer: "\\(d=\\frac{9R}{25}\\)",

    explanation: "Equate the expressions for \\(g_h\\) and \\(g_d\\)."
},

{
    category: "Advanced",

    type: "Satellite Period Ratio",

    question: "Two satellites have orbital periods in the ratio 1:27. Compare their orbital radii.",

    answer: "\\(1:9\\)",

    explanation: "Using \\(r\\propto T^{2/3}\\)."
},

{
    category: "Advanced",

    type: "Potential Difference from Infinity",

    question: "Calculate the work required to bring a 4 kg body from infinity to Earth's surface.",

    answer: "\\(\\frac{4GM}{R}\\;J\\)",

    explanation: "Work equals the decrease in gravitational potential energy."
},

{
    category: "Advanced",

    type: "Satellite Velocity Change",

    question: "If a satellite is shifted to an orbit four times farther from Earth's centre, compare its orbital speed.",

    answer: "\\(1:2\\)",

    explanation: "Orbital velocity is inversely proportional to the square root of orbital radius."
},

{
    category: "Advanced",

    type: "Escape Energy",

    question: "Find the minimum energy needed to launch a body of mass m from Earth's surface into space.",

    answer: "\\(\\frac{GMm}{R}\\)",

    explanation: "This equals the magnitude of the initial gravitational potential energy."
},

{
    category: "Advanced",

    type: "Critical Speed",

    question: "A projectile is fired with a speed between orbital velocity and escape velocity. What will be its path?",

    answer: "An elliptical orbit.",

    explanation: "It remains gravitationally bound but does not move in a circular orbit."
}

]

// ==========================================
// END OF CHAPTER DATA
// ==========================================

};

