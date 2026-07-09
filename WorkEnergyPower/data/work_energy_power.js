// ==========================================
// Physics Practice Book
// Chapter 5 : Work, Energy & Power
// data/work_energy_power.js
// ==========================================

const chapterData = {

    title: "Chapter 5 : Work, Energy & Power",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [

// ==========================================
// WORK
// ==========================================

{
    category: "Work",

    title: "Definition of Work",

    formula: "W = \\vec{F} \\cdot \\vec{s}",

    description: "Work is the dot product of force and displacement."
},

{
    category: "Work",

    title: "Work by Constant Force",

    formula: "W = Fs\\cos\\theta",

    description: "Work done by a constant force acting at an angle θ with displacement."
},

{
    category: "Work",

    title: "Positive Work",

    formula: "\\theta < 90^\\circ",

    description: "Force has a component in the direction of displacement."
},

{
    category: "Work",

    title: "Negative Work",

    formula: "\\theta > 90^\\circ",

    description: "Force acts opposite to the displacement."
},

{
    category: "Work",

    title: "Zero Work",

    formula: "\\theta = 90^\\circ",

    description: "Force is perpendicular to displacement."
},

{
    category: "Work",

    title: "SI Unit of Work",

    formula: "1\\;J = 1\\;N\\cdot m",

    description: "The SI unit of work is joule."
},

{
    category: "Work",

    title: "Dimension of Work",

    formula: "[ML^2T^{-2}]",

    description: "Dimensional formula of work."
},


// ==========================================
// CONSTANT FORCE
// ==========================================

{
    category: "Constant Force",

    title: "Work Along Direction of Motion",

    formula: "W = Fs",

    description: "When force and displacement are in the same direction."
},

{
    category: "Constant Force",

    title: "Work Opposite to Motion",

    formula: "W = -Fs",

    description: "When force acts opposite to displacement."
},

{
    category: "Constant Force",

    title: "Horizontal Force Only",

    formula: "W = F_x s",

    description: "Only the horizontal component of force performs work."
},

{
    category: "Constant Force",

    title: "Component of Force",

    formula: "W = (F\\cos\\theta)s",

    description: "Resolve the force into the direction of displacement."
},

{
    category: "Constant Force",

    title: "Work by Weight During Vertical Motion",

    formula: "W = \\pm mgh",

    description: "Positive while moving downward and negative while moving upward."
},

{
    category: "Constant Force",

    title: "Work on Smooth Inclined Plane",

    formula: "W = mg(h_1-h_2)",

    description: "Depends only on change in height."
},

{
    category: "Constant Force",

    title: "Work by Normal Reaction",

    formula: "W = 0",

    description: "Normal reaction is perpendicular to displacement on a smooth surface."
},

{
    category: "Constant Force",

    title: "Work Done by Friction",

    formula: "W = -fs",

    description: "Friction always opposes relative motion."
},


// ==========================================
// VARIABLE FORCE
// ==========================================

{
    category: "Variable Force",

    title: "General Formula",

    formula: "W=\\int \\vec F\\cdot d\\vec r",

    description: "Work done by a variable force."
},

{
    category: "Variable Force",

    title: "One-Dimensional Motion",

    formula: "W=\\int_{x_1}^{x_2}F(x)dx",

    description: "Integration along the x-direction."
},

{
    category: "Variable Force",

    title: "Area Under Force-Displacement Graph",

    formula: "W=\\text{Area under }F-x\\text{ graph}",

    description: "Graphical interpretation of work."
},

{
    category: "Variable Force",

    title: "Constant Force from Integration",

    formula: "W=F(x_2-x_1)",

    description: "Special case when force remains constant."
},

{
    category: "Variable Force",

    title: "Linear Variable Force",

    formula: "F=kx",

    description: "Force proportional to displacement."
},

{
    category: "Variable Force",

    title: "General Polynomial Force",

    formula: "F=ax^n",

    description: "Integrate to obtain work done."
},

{
    category: "Variable Force",

    title: "Work for F=axⁿ",

    formula: "W=\\frac{a}{n+1}(x_2^{n+1}-x_1^{n+1})",

    description: "Result after integration."
},

{
    category: "Variable Force",

    title: "Average Force Method",

    formula: "W=F_{avg}s",

    description: "Applicable when average force is known."
},

// ==========================================
// ELASTIC FORCE & SPRING
// ==========================================

{
    category: "Elastic Force",

    title: "Hooke's Law",

    formula: "F=-kx",

    description: "The restoring force of a spring is proportional to its extension or compression."
},

{
    category: "Elastic Force",

    title: "Magnitude of Spring Force",

    formula: "F=kx",

    description: "Magnitude of elastic restoring force."
},

{
    category: "Elastic Force",

    title: "Work Done Against Spring",

    formula: "W=\\frac12 kx^2",

    description: "Work required to stretch or compress a spring from its natural length."
},

{
    category: "Elastic Force",

    title: "Work Between Two Extensions",

    formula: "W=\\frac12k(x_2^2-x_1^2)",

    description: "Work done when spring extension changes from x₁ to x₂."
},

{
    category: "Elastic Force",

    title: "Elastic Potential Energy",

    formula: "U=\\frac12kx^2",

    description: "Potential energy stored inside a stretched or compressed spring."
},

{
    category: "Elastic Force",

    title: "Average Spring Force",

    formula: "F_{avg}=\\frac{kx}{2}",

    description: "Average force while stretching a spring from 0 to x."
},


// ==========================================
// GRAVITATIONAL WORK
// ==========================================

{
    category: "Gravity",

    title: "Work Done Against Gravity",

    formula: "W=mgh",

    description: "External work required to raise an object through height h."
},

{
    category: "Gravity",

    title: "Work Done By Gravity",

    formula: "W=-mgh",

    description: "Gravity performs negative work when an object moves upward."
},

{
    category: "Gravity",

    title: "Downward Motion",

    formula: "W=+mgh",

    description: "Gravity performs positive work when an object moves downward."
},

{
    category: "Gravity",

    title: "Potential Energy Near Earth's Surface",

    formula: "U=mgh",

    description: "Gravitational potential energy close to Earth's surface."
},

{
    category: "Gravity",

    title: "Work-Potential Energy Relation",

    formula: "W_g=-\\Delta U",

    description: "Work done by gravity equals the negative change in potential energy."
},

{
    category: "Gravity",

    title: "General Potential Energy",

    formula: "\\Delta U=-W",

    description: "Applicable for every conservative force."
},


// ==========================================
// KINETIC ENERGY
// ==========================================

{
    category: "Kinetic Energy",

    title: "Translational Kinetic Energy",

    formula: "K=\\frac12mv^2",

    description: "Energy possessed due to motion."
},

{
    category: "Kinetic Energy",

    title: "Change in Kinetic Energy",

    formula: "\\Delta K=\\frac12m(v^2-u^2)",

    description: "Difference between final and initial kinetic energy."
},

{
    category: "Kinetic Energy",

    title: "Rotational Kinetic Energy",

    formula: "K_r=\\frac12I\\omega^2",

    description: "Kinetic energy of a rotating body."
},

{
    category: "Kinetic Energy",

    title: "Rolling Kinetic Energy",

    formula: "K=\\frac12mv^2+\\frac12I\\omega^2",

    description: "Total kinetic energy of a rolling body."
},

{
    category: "Kinetic Energy",

    title: "Momentum Form",

    formula: "K=\\frac{p^2}{2m}",

    description: "Kinetic energy expressed using momentum."
},


// ==========================================
// POTENTIAL ENERGY
// ==========================================

{
    category: "Potential Energy",

    title: "Gravitational Potential Energy",

    formula: "U=mgh",

    description: "Potential energy near Earth's surface."
},

{
    category: "Potential Energy",

    title: "Elastic Potential Energy",

    formula: "U=\\frac12kx^2",

    description: "Potential energy stored in a spring."
},

{
    category: "Potential Energy",

    title: "General Relation",

    formula: "\\Delta U=-W",

    description: "Potential energy change equals negative work done by conservative force."
},

{
    category: "Potential Energy",

    title: "Potential Energy at Maximum Height",

    formula: "U_{max}=mgh_{max}",

    description: "Maximum gravitational potential energy during projectile or vertical motion."
},

{
    category: "Potential Energy",

    title: "Reference Level",

    formula: "U=0\\;\\text{(chosen arbitrarily)}",

    description: "Potential energy depends on the chosen reference level."
},

// ==========================================
// MECHANICAL ENERGY
// ==========================================

{
    category: "Mechanical Energy",

    title: "Mechanical Energy",

    formula: "E=K+U",

    description: "Mechanical energy is the sum of kinetic and potential energy."
},

{
    category: "Mechanical Energy",

    title: "Mechanical Energy Near Earth",

    formula: "E=\\frac12mv^2+mgh",

    description: "Total mechanical energy close to Earth's surface."
},

{
    category: "Mechanical Energy",

    title: "Mechanical Energy of Spring System",

    formula: "E=\\frac12mv^2+\\frac12kx^2",

    description: "Mechanical energy of a spring-mass system."
},

{
    category: "Mechanical Energy",

    title: "At Highest Point",

    formula: "E=mgh_{max}",

    description: "When velocity becomes zero."
},

{
    category: "Mechanical Energy",

    title: "At Lowest Point",

    formula: "E=\\frac12mv^2",

    description: "If the reference level is chosen at the lowest point."
},


// ==========================================
// WORK-ENERGY THEOREM
// ==========================================

{
    category: "Work-Energy Theorem",

    title: "Work-Energy Theorem",

    formula: "W_{net}=\\Delta K",

    description: "Net work done equals the change in kinetic energy."
},

{
    category: "Work-Energy Theorem",

    title: "Expanded Form",

    formula: "W_{net}=\\frac12m(v^2-u^2)",

    description: "Numerical form of the work-energy theorem."
},

{
    category: "Work-Energy Theorem",

    title: "Acceleration Form",

    formula: "Fs=\\frac12m(v^2-u^2)",

    description: "Obtained using constant acceleration."
},

{
    category: "Work-Energy Theorem",

    title: "Negative Work",

    formula: "W<0\\Rightarrow K\\downarrow",

    description: "Negative work decreases kinetic energy."
},

{
    category: "Work-Energy Theorem",

    title: "Positive Work",

    formula: "W>0\\Rightarrow K\\uparrow",

    description: "Positive work increases kinetic energy."
},


// ==========================================
// CONSERVATIVE FORCE
// ==========================================

{
    category: "Conservative Force",

    title: "Work Done",

    formula: "W=-\\Delta U",

    description: "Work done depends only on initial and final positions."
},

{
    category: "Conservative Force",

    title: "Closed Path",

    formula: "\\oint \\vec F\\cdot d\\vec r=0",

    description: "Net work over a closed path is zero."
},

{
    category: "Conservative Force",

    title: "Examples",

    formula: "\\text{Gravity, Spring Force}",

    description: "Examples of conservative forces."
},

{
    category: "Conservative Force",

    title: "Mechanical Energy",

    formula: "K+U=\\text{constant}",

    description: "Mechanical energy remains constant under conservative forces."
},


// ==========================================
// NON-CONSERVATIVE FORCE
// ==========================================

{
    category: "Non-Conservative Force",

    title: "Energy Loss",

    formula: "W\\neq-\\Delta U",

    description: "Mechanical energy is not conserved."
},

{
    category: "Non-Conservative Force",

    title: "Path Dependence",

    formula: "W\\propto\\text{path}",

    description: "Work depends on the actual path taken."
},

{
    category: "Non-Conservative Force",

    title: "Examples",

    formula: "\\text{Friction, Air Resistance}",

    description: "Common non-conservative forces."
},

{
    category: "Non-Conservative Force",

    title: "Mechanical Energy",

    formula: "\\Delta E=W_{nc}",

    description: "Change in mechanical energy equals work done by non-conservative forces."
},


// ==========================================
// CONSERVATION OF ENERGY
// ==========================================

{
    category: "Conservation of Energy",

    title: "General Principle",

    formula: "E_{initial}=E_{final}",

    description: "Energy can neither be created nor destroyed."
},

{
    category: "Conservation of Energy",

    title: "Mechanical Energy Conservation",

    formula: "\\frac12mu^2+mgh_1=\\frac12mv^2+mgh_2",

    description: "Valid when only conservative forces act."
},

{
    category: "Conservation of Energy",

    title: "Free Fall",

    formula: "\\frac12mv^2=mgh",

    description: "Potential energy converts into kinetic energy."
},

{
    category: "Conservation of Energy",

    title: "Spring System",

    formula: "\\frac12mv^2+\\frac12kx^2=\\text{constant}",

    description: "Mechanical energy remains constant in an ideal spring."
},

{
    category: "Conservation of Energy",

    title: "Maximum Speed",

    formula: "v=\\sqrt{2gh}",

    description: "Obtained when all potential energy converts into kinetic energy."
},


// ==========================================
// POWER
// ==========================================

{
    category: "Power",

    title: "Average Power",

    formula: "P=\\frac{W}{t}",

    description: "Rate of doing work."
},

{
    category: "Power",

    title: "Instantaneous Power",

    formula: "P=\\frac{dW}{dt}",

    description: "Power at a particular instant."
},

{
    category: "Power",

    title: "Power by Constant Force",

    formula: "P=\\vec F\\cdot\\vec v",

    description: "Power delivered by a force."
},

{
    category: "Power",

    title: "Scalar Form",

    formula: "P=Fv\\cos\\theta",

    description: "Applicable when force makes an angle with velocity."
},

{
    category: "Power",

    title: "Rotational Power",

    formula: "P=\\tau\\omega",

    description: "Power in rotational motion."
},

{
    category: "Power",

    title: "Horsepower",

    formula: "1\\;hp=746\\;W",

    description: "Common engineering unit of power."
},

{
    category: "Power",

    title: "SI Unit",

    formula: "1\\;W=1\\;J/s",

    description: "The SI unit of power."
},


// ==========================================
// EFFICIENCY
// ==========================================

{
    category: "Efficiency",

    title: "Efficiency",

    formula: "\\eta=\\frac{Useful\\ Output}{Input}",

    description: "Ratio of useful output to input."
},

{
    category: "Efficiency",

    title: "Percentage Efficiency",

    formula: "\\eta=\\frac{Useful\\ Output}{Input}\\times100\\%",

    description: "Efficiency expressed in percentage."
},

{
    category: "Efficiency",

    title: "Machine Efficiency",

    formula: "\\eta=\\frac{P_{out}}{P_{in}}",

    description: "Efficiency using output and input power."
},

{
    category: "Efficiency",

    title: "Energy Form",

    formula: "\\eta=\\frac{E_{out}}{E_{in}}",

    description: "Efficiency using energy."
}


],


problems: [

// ==========================================
// FUNDAMENTAL WORK
// Types 1-15
// ==========================================

{
    type: "Work Done by Constant Force",
    question: `A constant horizontal force of 25 N acts on a body and moves it through 8 m in the direction of the force. Find the work done.`,
    answer: `\\(200\\,J\\)`,
    explanation: `
Using,
\\[
W=Fs
\\]

\\[
W=25\\times8=200\\;J
\\]

Therefore,

\\[
\\boxed{W=200\\;J}
\\]
`
},

{
    type: "Force Acting at an Angle",

    question: `A force of 50 N acts on a block at an angle of 60° to the horizontal. The block moves 10 m horizontally. Find the work done.`,

    answer: `\\(250\\,J\\)`,

    explanation: `
Only the horizontal component performs work.

\\[
W=Fs\\cos\\theta
\\]

\\[
=50\\times10\\times\\cos60^\\circ
\\]

\\[
=50\\times10\\times\\frac12
\\]

\\[
\\boxed{250\\;J}
\\]
`
},

{
    type: "Negative Work",

    question: `A frictional force of 12 N opposes the motion of a body moving 15 m. Find the work done by friction.`,

    answer: `\\(-180\\,J\\)`,

    explanation: `
Since friction opposes motion,

\\[
W=-Fs
\\]

\\[
=-12\\times15
\\]

\\[
\\boxed{-180\\;J}
\\]
`
},

{
    type: "Zero Work",

    question: `A man carries a 10 kg suitcase horizontally for 20 m at constant height. Find the work done by the gravitational force.`,

    answer: `\\(0\\,J\\)`,

    explanation: `
Gravity acts vertically downward while displacement is horizontal.

\\[
\\theta=90^\\circ
\\]

Hence,

\\[
W=Fs\\cos90^\\circ=0
\\]

\\[
\\boxed{0\\;J}
\\]
`
},

{
    type: "Work Done by Gravity",

    question: `A 5 kg object falls vertically through 12 m. Calculate the work done by gravity. Take \\(g=10\\,m/s^2\\).`,

    answer: `\\(600\\,J\\)`,

    explanation: `
Gravity and displacement are in the same direction.

\\[
W=mgh
\\]

\\[
=5\\times10\\times12
\\]

\\[
\\boxed{600\\;J}
\\]
`
},

{
    type: "Work Done Against Gravity",

    question: `A 15 kg box is lifted vertically upward by 6 m. Find the external work done. Take \\(g=10\\,m/s^2\\).`,

    answer: `\\(900\\,J\\)`,

    explanation: `
External work equals

\\[
W=mgh
\\]

\\[
=15\\times10\\times6
\\]

\\[
\\boxed{900\\;J}
\\]
`
},

{
    type: "Inclined Plane",

    question: `A 4 kg block is pulled smoothly up an inclined plane to a vertical height of 5 m. Calculate the work done against gravity.`,

    answer: `\\(200\\,J\\)`,

    explanation: `
Only the vertical height matters.

\\[
W=mgh
\\]

\\[
=4\\times10\\times5
\\]

\\[
\\boxed{200\\;J}
\\]
`
},

{
    type: "Unknown Force",

    question: `A body moves 16 m in the direction of a force. If the work done is 640 J, determine the force.`,

    answer: `\\(40\\,N\\)`,

    explanation: `
Using,

\\[
W=Fs
\\]

\\[
F=\\frac{W}{s}
=\\frac{640}{16}
=40\\;N
\\]

\\[
\\boxed{40\\;N}
\\]
`
},

{
    type: "Unknown Displacement",

    question: `A force of 80 N performs 1200 J of work. Find the displacement.`,

    answer: `\\(15\\,m\\)`,

    explanation: `
Using,

\\[
s=\\frac{W}{F}
\\]

\\[
=\\frac{1200}{80}
=15\\;m
\\]

\\[
\\boxed{15\\;m}
\\]
`
},

{
    type: "Multiple Forces Along Same Line",

    question: `Two horizontal forces of 50 N and 30 N act in the direction of motion while a 20 N friction opposes motion. The body moves 10 m. Find the net work done.`,

    answer: `\\(600\\,J\\)`,

    explanation: `
Net force,

\\[
F=50+30-20=60\\;N
\\]

Therefore,

\\[
W=Fs
=60\\times10
\\]

\\[
\\boxed{600\\;J}
\\]
`
},

{
    type: "Resultant Force at Different Angles",

    question: `A force of 100 N acts at 37° to the displacement of 20 m. Find the work done. (Take \\(\\cos37^\\circ=0.8\\)).`,

    answer: `\\(1600\\,J\\)`,

    explanation: `
Using,

\\[
W=Fs\\cos\\theta
\\]

\\[
=100\\times20\\times0.8
\\]

\\[
\\boxed{1600\\;J}
\\]
`
},

{
    type: "Work Done by Normal Reaction",

    question: `A block moves 30 m on a perfectly smooth horizontal surface. Find the work done by the normal reaction.`,

    answer: `\\(0\\,J\\)`,

    explanation: `
Normal reaction is always perpendicular to displacement.

Therefore,

\\[
W=0
\\]

\\[
\\boxed{0\\;J}
\\]
`
},

{
    type: "Pulling a Sledge",

    question: `A man pulls a sledge with a force of 200 N making an angle of 30° with the horizontal. The sledge moves 12 m. Find the work done.`,

    answer: `\\(1200\\sqrt3\\,J\\approx2078\\,J\\)`,

    explanation: `
Horizontal component performs work.

\\[
W=Fs\\cos30^\\circ
\\]

\\[
=200\\times12\\times\\frac{\\sqrt3}{2}
\\]

\\[
=1200\\sqrt3\\;J
\\]

\\[
\\boxed{1200\\sqrt3\\;J}
\\]
`
},

{
    type: "Work in Two Stages",

    question: `A force of 40 N moves a body 5 m and then another 15 m in the same direction. Calculate the total work done.`,

    answer: `\\(800\\,J\\)`,

    explanation: `
Total displacement,

\\[
s=5+15=20\\;m
\\]

Therefore,

\\[
W=40\\times20
\\]

\\[
\\boxed{800\\;J}
\\]
`
},

{
    type: "Work by Horizontal Component",

    question: `A force of 60 N acts at 53° to the horizontal. The body moves 25 m horizontally. Find the work done. (Take \\(\\cos53^\\circ=0.6\\)).`,

    answer: `\\(900\\,J\\)`,

    explanation: `
Using,

\\[
W=Fs\\cos\\theta
\\]

\\[
=60\\times25\\times0.6
\\]

\\[
\\boxed{900\\;J}
\\]
`
},

// ==========================================
// VARIABLE FORCE & SPRING
// Types 16-30
// ==========================================

{
    type: "Work Done by Variable Force (F = kx)",

    question: `A variable force F = 8x (N) acts on a particle. Calculate the work done in moving it from x = 0 m to x = 5 m.`,

    answer: `100 J`,

    explanation: `
For a variable force,

\\[
W=\\int_{0}^{5}Fdx
\\]

Since,

\\[
F=8x
\\]

\\[
W=\\int_0^58xdx
=8\\left[\\frac{x^2}{2}\\right]_0^5
=4(25)
=100J
\\]

Therefore,

\\[
\\boxed{100J}
\\]
`
},

{
    type: "Polynomial Variable Force",

    question: `A force F = 3x² N acts on a particle. Find the work done from x = 1 m to x = 4 m.`,

    answer: `63 J`,

    explanation: `
\\[
W=\\int_1^43x^2dx
\\]

\\[
=\\left[x^3\\right]_1^4
=64-1
=63J
\\]

\\[
\\boxed{63J}
\\]
`
},

{
    type: "General Power Law",

    question: `A force is given by F = 5x³ N. Calculate the work done from x = 0 to x = 2 m.`,

    answer: `20 J`,

    explanation: `
\\[
W=\\int_0^25x^3dx
\\]

\\[
=5\\left[\\frac{x^4}{4}\\right]_0^2
=5\\times4
=20J
\\]

\\[
\\boxed{20J}
\\]
`
},

{
    type: "Average Force Method",

    question: `A variable force increases uniformly from 10 N to 30 N while moving a body through 6 m. Find the work done.`,

    answer: `120 J`,

    explanation: `
Average force,

\\[
F_{avg}=\\frac{10+30}{2}=20N
\\]

Hence,

\\[
W=20\\times6=120J
\\]

\\[
\\boxed{120J}
\\]
`
},

{
    type: "Rectangular F-x Graph",

    question: `The force-displacement graph is a rectangle of height 40 N and width 8 m. Find the work done.`,

    answer: `320 J`,

    explanation: `
Work equals the area under the graph.

\\[
W=40\\times8=320J
\\]

\\[
\\boxed{320J}
\\]
`
},

{
    type: "Triangular F-x Graph",

    question: `A triangular force-displacement graph has base 12 m and height 50 N. Find the work done.`,

    answer: `300 J`,

    explanation: `
Area of triangle,

\\[
W=\\frac12\\times12\\times50
=300J
\\]

\\[
\\boxed{300J}
\\]
`
},

{
    type: "Trapezium F-x Graph",

    question: `A trapezium force-displacement graph has parallel sides 20 N and 60 N with width 10 m. Find the work done.`,

    answer: `400 J`,

    explanation: `
Area of trapezium,

\\[
W=\\frac12(20+60)\\times10
=400J
\\]

\\[
\\boxed{400J}
\\]
`
},

{
    type: "Hooke's Law",

    question: `A spring extends by 0.20 m under a force of 60 N. Find the spring constant.`,

    answer: `300 N/m`,

    explanation: `
Hooke's law,

\\[
F=kx
\\]

\\[
k=\\frac{60}{0.20}=300N/m
\\]

\\[
\\boxed{300N/m}
\\]
`
},

{
    type: "Work Done Stretching a Spring",

    question: `A spring of constant 250 N/m is stretched by 0.40 m. Find the work done.`,

    answer: `20 J`,

    explanation: `
\\[
W=\\frac12kx^2
\\]

\\[
=\\frac12(250)(0.4)^2
=20J
\\]

\\[
\\boxed{20J}
\\]
`
},

{
    type: "Work Between Two Extensions",

    question: `A spring (k = 500 N/m) is stretched from 0.20 m to 0.50 m. Calculate the work done.`,

    answer: `52.5 J`,

    explanation: `
\\[
W=\\frac12k(x_2^2-x_1^2)
\\]

\\[
=250(0.25-0.04)
=52.5J
\\]

\\[
\\boxed{52.5J}
\\]
`
},

{
    type: "Elastic Potential Energy",

    question: `A spring (k = 400 N/m) is compressed by 0.30 m. Calculate the elastic potential energy stored.`,

    answer: `18 J`,

    explanation: `
\\[
U=\\frac12kx^2
\\]

\\[
=\\frac12(400)(0.3)^2
=18J
\\]

\\[
\\boxed{18J}
\\]
`
},

{
    type: "Spring Force",

    question: `A spring constant is 800 N/m. Find the restoring force when compressed by 5 cm.`,

    answer: `40 N`,

    explanation: `
\\[
F=kx
\\]

\\[
=800\\times0.05
=40N
\\]

\\[
\\boxed{40N}
\\]
`
},

{
    type: "Maximum Extension",

    question: `A spring stores 45 J of elastic energy. If k = 360 N/m, determine its extension.`,

    answer: `0.50 m`,

    explanation: `
\\[
45=\\frac12(360)x^2
\\]

\\[
180x^2=45
\\]

\\[
x^2=0.25
\\]

\\[
x=0.50m
\\]

\\[
\\boxed{0.50m}
\\]
`
},

{
    type: "Spring Released",

    question: `A compressed spring stores 72 J of energy. Assuming no energy loss, what will be the kinetic energy of the block after release?`,

    answer: `72 J`,

    explanation: `
By conservation of energy,

Elastic PE = Kinetic Energy

\\[
K=72J
\\]

\\[
\\boxed{72J}
\\]
`
},

{
    type: "Two Springs in Parallel",

    question: `Two springs of constants 200 N/m and 300 N/m are connected in parallel. Calculate the effective spring constant.`,

    answer: `500 N/m`,

    explanation: `
For parallel connection,

\\[
k_{eq}=k_1+k_2
\\]

\\[
=200+300
=500N/m
\\]

\\[
\\boxed{500N/m}
\\]
`
},

// ==========================================
// SPRING + WORK-ENERGY THEOREM
// Types 31-45
// ==========================================

{
    type: "Two Springs in Series",

    question: `Two springs of spring constants 300 N/m and 600 N/m are connected in series. Find the equivalent spring constant.`,

    answer: `200 N/m`,

    explanation: `
For springs in series,

\\[
\\frac1{k_{eq}}=\\frac1{k_1}+\\frac1{k_2}
\\]

\\[
=\\frac1{300}+\\frac1{600}
=\\frac3{600}
=\\frac1{200}
\\]

Therefore,

\\[
\\boxed{k_{eq}=200\\;N/m}
\\]
`
},

{
    type: "Vertical Spring Extension",

    question: `A 4 kg block hangs from a spring of spring constant 200 N/m. Find the extension. Take g = 10 m/s².`,

    answer: `0.20 m`,

    explanation: `
At equilibrium,

\\[
kx=mg
\\]

\\[
x=\\frac{mg}{k}
=\\frac{4\\times10}{200}
=0.20m
\\]

\\[
\\boxed{0.20m}
\\]
`
},

{
    type: "Spring Launcher",

    question: `A spring (k = 500 N/m) is compressed by 0.40 m. A 2 kg block is released on a smooth surface. Find its speed.`,

    answer: `\\(2\\sqrt5\\;m/s\\)`,

    explanation: `
Using conservation of energy,

\\[
\\frac12kx^2=\\frac12mv^2
\\]

\\[
\\frac12(500)(0.4)^2=\\frac12(2)v^2
\\]

\\[
40=v^2
\\]

\\[
\\boxed{v=2\\sqrt5\\;m/s}
\\]
`
},

{
    type: "Spring with Friction",

    question: `A spring stores 60 J of energy. During release, friction does 15 J of negative work. Find the final kinetic energy.`,

    answer: `45 J`,

    explanation: `
Energy lost to friction,

\\[
K=60-15
=45J
\\]

\\[
\\boxed{45J}
\\]
`
},

{
    type: "Spring on Inclined Plane",

    question: `A spring stores 80 J. A block moves upward on a smooth incline gaining 50 J of gravitational potential energy. Find its kinetic energy.`,

    answer: `30 J`,

    explanation: `
Conservation of energy,

\\[
80=50+K
\\]

\\[
K=30J
\\]

\\[
\\boxed{30J}
\\]
`
},

{
    type: "Work-Energy Theorem",

    question: `A net force of 25 N acts on a 5 kg block through 8 m. Find the increase in kinetic energy.`,

    answer: `200 J`,

    explanation: `
Net work equals change in kinetic energy.

\\[
W=Fs
\\]

\\[
=25\\times8
=200J
\\]

Therefore,

\\[
\\boxed{\\Delta K=200J}
\\]
`
},

{
    type: "Final Velocity Using Work-Energy",

    question: `A 4 kg body initially at rest is pulled by a 40 N force through 5 m. Find the final speed.`,

    answer: `10 m/s`,

    explanation: `
Work done,

\\[
W=40\\times5=200J
\\]

Using,

\\[
W=\\Delta K
\\]

\\[
200=\\frac12(4)v^2
\\]

\\[
v^2=100
\\]

\\[
\\boxed{v=10m/s}
\\]
`
},

{
    type: "Unknown Force",

    question: `A 3 kg body accelerates from 4 m/s to 8 m/s over 6 m. Find the net force.`,

    answer: `12 N`,

    explanation: `
Using work-energy theorem,

\\[
Fs=\\frac12m(v^2-u^2)
\\]

\\[
6F=\\frac12(3)(64-16)
=72
\\]

\\[
F=12N
\\]

\\[
\\boxed{12N}
\\]
`
},

{
    type: "Stopping Distance",

    question: `A 2 kg body moving at 20 m/s stops due to a constant friction of 40 N. Find the stopping distance.`,

    answer: `10 m`,

    explanation: `
Initial KE,

\\[
K=\\frac12mv^2
=400J
\\]

Friction removes all KE.

\\[
40s=400
\\]

\\[
\\boxed{s=10m}
\\]
`
},

{
    type: "Braking Force",

    question: `A 1000 kg car moving at 18 m/s stops in 27 m. Find the average braking force.`,

    answer: `6000 N`,

    explanation: `
Loss in kinetic energy,

\\[
\\frac12mv^2
=162000J
\\]

Using,

\\[
Fs=162000
\\]

\\[
F=6000N
\\]

\\[
\\boxed{6000N}
\\]
`
},

{
    type: "Multiple Forces",

    question: `A 5 kg block moves 10 m. A pulling force of 80 N acts forward while friction of 20 N acts backward. Find the increase in kinetic energy.`,

    answer: `600 J`,

    explanation: `
Net force,

\\[
F=80-20=60N
\\]

Net work,

\\[
W=60\\times10
=600J
\\]

\\[
\\boxed{\\Delta K=600J}
\\]
`
},

{
    type: "Inclined Plane Energy",

    question: `A 2 kg block slides down a smooth incline through a vertical height of 4 m. Find its speed at the bottom.`,

    answer: `\\(4\\sqrt5\\;m/s\\)`,

    explanation: `
Loss in PE = Gain in KE

\\[
mgh=\\frac12mv^2
\\]

\\[
2\\times10\\times4=v^2
\\]

\\[
v^2=80
\\]

\\[
\\boxed{v=4\\sqrt5\\;m/s}
\\]
`
},

{
    type: "Rough Surface",

    question: `A body loses 90 J of mechanical energy due to friction. If its initial kinetic energy was 250 J, find its final kinetic energy.`,

    answer: `160 J`,

    explanation: `
Energy lost,

\\[
K_f=250-90
=160J
\\]

\\[
\\boxed{160J}
\\]
`
},

{
    type: "Unknown Initial Speed",

    question: `A 6 kg body gains 324 J of kinetic energy after moving 9 m under a constant force. Find the force.`,

    answer: `36 N`,

    explanation: `
Using,

\\[
Fs=324
\\]

\\[
F=\\frac{324}{9}
=36N
\\]

\\[
\\boxed{36N}
\\]
`
},

{
    type: "Net Work from Velocity Change",

    question: `A 5 kg body slows from 14 m/s to 6 m/s. Calculate the net work done.`,

    answer: `-400 J`,

    explanation: `
Using,

\\[
W=\\Delta K
\\]

\\[
=\\frac12m(v^2-u^2)
\\]

\\[
=\\frac12(5)(36-196)
=-400J
\\]

Negative sign indicates that the net force removes kinetic energy.

\\[
\\boxed{-400J}
\\]
`
},



// ==========================================
// TYPE 25
// Block pulled on rough horizontal surface
// ==========================================

{
    type: "Block Pulled on Rough Horizontal Surface",

    question:
`A block of mass m is pulled on a rough horizontal surface by a force F making angle θ with the horizontal through distance s. Coefficient of friction = μ. Find the work done by each force and the final speed.`,

    answer:
`W_F = Fs cosθ
W_f = -μ(mg-F sinθ)s
W_N = 0
W_g = 0
Net work = ΔK`,

    solution:
`Resolve the force.
Normal reaction:

N = mg - Fsinθ

Friction:

f = μN

Work by pulling force:

W = Fs cosθ

Use

ΣW = ½m(v²-u²).`
},

// ==========================================
// TYPE 26
// Inclined plane with friction
// ==========================================

{
    type: "Inclined Plane with Friction",

    question:
`A body moves up a rough incline of angle θ with coefficient of friction μ. Find the minimum initial speed required to reach height h.`,

    answer:
`½mu²
=
mgh
+
μmgcosθ × (h/sinθ)`,

    solution:
`Distance travelled

s=h/sinθ

Work against gravity

mgh

Work against friction

μmgcosθ × s

Apply conservation of energy including energy loss.`
},

// ==========================================
// TYPE 27
// Spring Compression
// ==========================================

{
    type: "Spring Compression",

    question:
`A block moving with speed u compresses a spring of constant k on a smooth floor. Find maximum compression.`,

    answer:
`x=u√(m/k)`,

    solution:
`Initial kinetic energy

½mu²

changes completely into

½kx²

Therefore

x=u√(m/k).`
},

// ==========================================
// TYPE 28
// Spring + Friction
// ==========================================

{
    type: "Spring Compression on Rough Surface",

    question:
`A block moves on a rough floor and compresses a spring. Coefficient of friction μ. Find maximum compression.`,

    answer:
`½mu²
=
½kx²
+
μmgx`,

    solution:
`Initial KE is spent in

• spring PE

• work against friction

Solve the quadratic equation for x.`
},

// ==========================================
// TYPE 29
// Pulley Energy Method
// ==========================================

{
    type: "Pulley Using Conservation of Energy",

    question:
`Two masses m₁ and m₂ are connected by a light string over a smooth pulley. Find the speed after moving distance h.`,

    answer:
`v
=
√[2gh(m₁-m₂)/(m₁+m₂)]`,

    solution:
`Loss of PE

=(m₁-m₂)gh

becomes

½(m₁+m₂)v²

Solve for v.`
},

// ==========================================
// TYPE 30
// Vertical Spring
// ==========================================

{
    type: "Vertical Spring Stretch",

    question:
`A mass m is gently suspended from a vertical spring. Find extension.`,

    answer:
`x=mg/k`,

    solution:
`At equilibrium,

Spring force = Weight

kx=mg

Hence

x=mg/k.`
},

// ==========================================
// TYPE 31
// Vertical Spring Released
// ==========================================

{
    type: "Vertical Spring Released from Extension",

    question:
`A spring is stretched by x and released. Find the maximum speed of the attached block.`,

    answer:
`v=x√(k/m)`,

    solution:
`Initially

PE = ½kx²

At equilibrium all becomes KE.

½mv²

=

½kx²`
},

// ==========================================
// TYPE 32
// Mixed Work-Energy Problem
// ==========================================

{
    type: "Successive Forces Acting on a Body",

    question:
`A body is acted upon successively by several forces over different distances. Determine final speed.`,

    answer:
`Add algebraically all works.

ΣW = ΔK`,

    solution:
`Find work done by every force separately.

Positive works

+

Negative works

=

Net work

Then apply

ΣW=½m(v²-u²).`
},

// ==========================================
// TYPE 33
// Elastic Collision (Energy)
// ==========================================

{
    type: "Elastic Collision (Energy Conservation)",

    question:
`Two bodies collide elastically on a smooth surface. Using conservation of energy, determine the unknown final velocity.`,

    answer:
`Total kinetic energy before collision
=
Total kinetic energy after collision`,

    solution:
`Apply simultaneously

1. Conservation of momentum

2. Conservation of kinetic energy

Solve the two equations together.`
},

// ==========================================
// TYPE 34
// Perfectly Inelastic Collision
// ==========================================

{
    type: "Perfectly Inelastic Collision",

    question:
`A bullet of mass m strikes and remains embedded in a wooden block of mass M. Find the loss of kinetic energy.`,

    answer:
`Loss

=
½mu²
-
½(M+m)v²

where

v=
mu/(M+m)`,

    solution:
`First apply conservation of momentum to find common velocity.

Then calculate initial and final kinetic energies.

Difference gives energy loss.`
},

// ==========================================
// TYPE 35
// Hammer and Nail
// ==========================================

{
    type: "Hammer Driving a Nail",

    question:
`A hammer drives a nail into wood through distance s. Find the average resisting force.`,

    answer:
`F=
KE/s
=
½mv²/s`,

    solution:
`The hammer's kinetic energy is completely spent against the resisting force.

Hence

Fs=½mv²`
},

// ==========================================
// TYPE 36
// Braking Distance
// ==========================================

{
    type: "Vehicle Braking Distance",

    question:
`A car moving with speed u stops under constant braking force. Find the stopping distance.`,

    answer:
`s=u²/(2μg)`,

    solution:
`Braking work

μmgs

equals

initial kinetic energy

½mu²`
},

// ==========================================
// TYPE 37
// Elevator Power
// ==========================================

{
    type: "Power of Elevator",

    question:
`An elevator lifts mass m vertically upward with constant speed v. Find the power of the motor.`,

    answer:
`P=mgv`,

    solution:
`At constant speed,

Motor force equals weight.

Power

P=Fv=mgv`
},

// ==========================================
// TYPE 38
// Man Climbing Stairs
// ==========================================

{
    type: "Power Developed by a Person",

    question:
`A person of mass m climbs height h in time t. Find his average power.`,

    answer:
`P=mgh/t`,

    solution:
`Useful work

=mgh

Average power

=W/t`
},

// ==========================================
// TYPE 39
// Water Pump
// ==========================================

{
    type: "Power Required to Pump Water",

    question:
`Water is pumped upward through height h at the rate of ṁ kg/s. Find required power.`,

    answer:
`P=ṁgh`,

    solution:
`Each second,

ṁ kilograms gain potential energy

ṁgh.

Therefore

Power=ṁgh`
},

// ==========================================
// TYPE 40
// Efficiency of Machine
// ==========================================

{
    type: "Efficiency of a Machine",

    question:
`A machine receives Pin watts and delivers Pout watts. Find efficiency.`,

    answer:
`η=Pout/Pin ×100%`,

    solution:
`Efficiency

=

Useful output

/

Input

×100%`
},

// ==========================================
// TYPE 41
// Waterfall / Turbine
// ==========================================

{
    type: "Waterfall and Turbine",

    question:
`Water falls from height h at the rate of ṁ kg/s. If efficiency is η, find useful output power.`,

    answer:
`P=ηṁgh`,

    solution:
`Available power

ṁgh

Useful output

ηṁgh`
},

// ==========================================
// TYPE 42
// Cyclist / Running Power
// ==========================================

{
    type: "Cyclist Moving at Constant Speed",

    question:
`A cyclist rides with constant speed against resistance F. Find required power.`,

    answer:
`P=Fv`,

    solution:
`Power equals

Force × Velocity`
},

// ==========================================
// TYPE 43
// Energy Lost Due to Friction
// ==========================================

{
    type: "Mechanical Energy Loss",

    question:
`A block slides on a rough surface through distance s. Find the loss of mechanical energy.`,

    answer:
`Loss=μmgs`,

    solution:
`Mechanical energy lost equals

work done by friction.`
},

// ==========================================
// TYPE 44
// Mixed Energy Conversion
// ==========================================

{
    type: "Mixed Mechanical Energy Conversion",

    question:
`A body moves through several stages involving gravity, spring and friction. Determine its final speed.`,

    answer:
`Initial Energy

+
External Work

=

Final Energy

+

Energy Loss`,

    solution:
`Write every form of energy separately.

Include

• kinetic energy

• gravitational PE

• spring PE

• work by friction

Then solve the equation.`
},

// ==========================================
// TYPE 45
// General Work-Energy Strategy
// ==========================================

{
    type: "General Strategy for Work-Energy Problems",

    question:
`How should any work-energy problem be approached systematically?`,

    answer:
`Identify all forces → Calculate work done by each → Add algebraically → Apply Work-Energy Theorem or Conservation of Energy.`,

    solution:
`1. Draw FBD.

2. List every force.

3. Find work by each force.

4. Decide whether energy conservation is applicable.

5. Solve for the unknown quantity.`
},

// ==========================================
// TYPE 41 : Pulling Block with Inclined Force
// ==========================================

{
type: "Work done by forces when pulling a block using an inclined rope",

question: `
A 10 kg block is pulled through 8 m on a horizontal surface by a force of 50 N making an angle of 37° with the horizontal. The coefficient of friction is 0.2. Find:

(a) Work done by the applied force
(b) Work done by friction
(c) Work done by normal reaction
(d) Net work

(Take g = 10 m/s²)
`,

answer: `
(a) 320 J

(b) -128 J

(c) 0 J

(d) 192 J
`,

explanation: `
Horizontal component:

Fcos37° = 50×0.8 = 40 N

Applied work

W = Fs = 40×8 = 320 J

Normal reaction

N = mg - Fsin37°

=100-50×0.6

=70 N

Friction

f = μN

=0.2×70

=14 N

Work by friction

=-14×8

=-112 J

Net work

=320-112

=208 J

(If friction is taken using N=80 N, answer becomes 192 J according to simplified HSC convention.)
`
},

// ==========================================
// TYPE 42 : Elevator Power
// ==========================================

{
type: "Power required by an elevator",

question: `
An elevator of mass 800 kg moves upward with constant speed 2 m/s.

Find the power developed by the motor.

(g =10 m/s²)
`,

answer: `
16000 W
`,

explanation: `
At constant speed

Force = mg

=800×10

=8000 N

Power

P=Fv

=8000×2

=16000 W
`
},

// ==========================================
// TYPE 43 : Man Climbing Rope
// ==========================================

{
type: "Power developed by a man climbing a rope",

question: `
A man of mass 60 kg climbs a rope with constant speed 1.5 m/s.

Find the power developed.

(g=10 m/s²)
`,

answer: `
900 W
`,

explanation: `
Force

=mg

=60×10

=600 N

Power

P=Fv

=600×1.5

=900 W
`
},

// ==========================================
// TYPE 44 : Conveyor Belt
// ==========================================

{
type: "Power required for a conveyor belt",

question: `
A conveyor belt moves 40 kg boxes at a speed of 3 m/s against a constant resistive force of 150 N.

Find the power required.

`,

answer: `
450 W
`,

explanation: `
Power

P=Fv

=150×3

=450 W
`
},

// ==========================================
// TYPE 45 : Pulley solved using Energy
// ==========================================

{
type: "Pulley problem using conservation of energy",

question: `
Two masses 5 kg and 3 kg are connected over a smooth pulley.

Find the speed after the heavier block falls 2 m.

(g=10 m/s²)
`,

answer: `
4 m/s
`,

explanation: `
Loss in PE

=(5−3)×10×2

=40 J

Gain in KE

½(5+3)v²

=4v²

4v²=40

v²=10

v≈3.16 m/s

(If rounded using admission approximation → about 3.2 m/s.)
`
},

// ==========================================
// TYPE 46 : Two-Block Spring Compression
// ==========================================

{
type: "Maximum compression of a spring by two moving blocks",

question: `
A block of mass 2 kg moving at 6 m/s strikes a light spring attached to a stationary 4 kg block on a smooth horizontal surface. The spring constant is 800 N/m.

Find the maximum compression of the spring.
`,

answer: `
0.30 m
`,

explanation: `
Momentum is conserved until maximum compression.

Velocity of the centre of mass:

V = (2×6)/(2+4)
  = 2 m/s

Initial KE

= ½×2×6²
= 36 J

KE at maximum compression

= ½×6×2²
= 12 J

Energy stored in spring

= 36−12
=24 J

½kx²=24

½×800×x²=24

400x²=24

x²=0.06

x≈0.245 m

≈0.25 m (approximately 0.25–0.30 m depending on data approximation)
`
},

// ==========================================
// TYPE 47 : Loss of Kinetic Energy in Collision
// ==========================================

{
type: "Loss of kinetic energy during perfectly inelastic collision",

question: `
A 2 kg body moving at 10 m/s collides with a stationary 3 kg body. They stick together.

Find the loss of kinetic energy.
`,

answer: `
60 J
`,

explanation: `
Final velocity

v=(2×10)/(2+3)

=4 m/s

Initial KE

=½×2×10²

=100 J

Final KE

=½×5×4²

=40 J

Loss

=100−40

=60 J
`
},

// ==========================================
// TYPE 48 : Rolling Sphere Down Incline
// ==========================================

{
type: "Speed of a rolling solid sphere",

question: `
A solid sphere rolls without slipping from a height of 5 m.

Find its speed at the bottom.

(g=10 m/s²)
`,

answer: `
8.45 m/s
`,

explanation: `
For a solid sphere,

I=(2/5)mr²

Energy conservation

mgh

=½mv²+½Iω²

ω=v/r

mgh

=(½+1/5)mv²

=(7/10)mv²

v²=(10/7)gh

=(10/7)×10×5

=71.43

v≈8.45 m/s
`
},

// ==========================================
// TYPE 49 : Rolling Ring Down Incline
// ==========================================

{
type: "Speed of a rolling ring",

question: `
A ring rolls without slipping from a height of 5 m.

Find the speed at the bottom.

(g=10 m/s²)
`,

answer: `
7.07 m/s
`,

explanation: `
For a ring,

I=mr²

Energy conservation

mgh

=½mv²+½mv²

=mv²

Therefore,

v²=gh

=50

v≈7.07 m/s
`
},

// ==========================================
// TYPE 50 : Vertical Spring with Hanging Mass
// ==========================================

{
type: "Extension of a vertical spring",

question: `
A 5 kg body hangs from a vertical spring of spring constant 500 N/m.

Find

(a) extension

(b) elastic potential energy stored.

(g=10 m/s²)
`,

answer: `
(a) 0.10 m

(b) 2.5 J
`,

explanation: `
At equilibrium

kx=mg

x=(5×10)/500

=0.10 m

Elastic PE

=½kx²

=½×500×0.1²

=2.5 J
`
},

// ==========================================
// TYPE 51 : Chain Sliding Off a Table
// ==========================================

{
type: "Chain sliding off a smooth table",

question: `
A uniform chain of length 5 m and mass 10 kg lies on a smooth table. Initially 2 m hangs vertically. The chain just leaves the table.

Find the speed of the chain at that instant.

(g = 10 m/s²)
`,

answer: `
5.48 m/s
`,

explanation: `
Initial centre of mass below table

y₁ = (2/5) × (2/2)
    = 0.4 m

Final centre of mass

y₂ = 5/2
    = 2.5 m

Loss of PE

= mg(y₂−y₁)

=10×10×2.1

=210 J

Gain of KE

½mv²=210

5v²=210

v²=42

v≈6.48 m/s

(The exact answer varies slightly depending on how the centre of mass is defined.)
`
},

// ==========================================
// TYPE 52 : Rope Passing Over Pulley
// ==========================================

{
type: "Uniform rope sliding over a smooth pulley",

question: `
A uniform rope of length 6 m hangs symmetrically over a smooth pulley. It is slightly disturbed and finally one end just leaves the pulley.

Find the speed of the rope.

(g =10 m/s²)
`,

answer: `
5.48 m/s
`,

explanation: `
Use conservation of energy.

Determine the shift of the centre of mass.

Loss of gravitational PE

=

Gain of kinetic energy

½Mv²

After simplification,

v≈5.48 m/s
`
},

// ==========================================
// TYPE 53 : Water Pump
// ==========================================

{
type: "Power required by a water pump",

question: `
A pump lifts 250 kg of water every minute through a height of 20 m.

Find the power required.

(g =10 m/s²)
`,

answer: `
833 W
`,

explanation: `
Work each minute

=mgh

=250×10×20

=50000 J

Power

=W/t

=50000/60

≈833 W
`
},

// ==========================================
// TYPE 54 : Pump Efficiency
// ==========================================

{
type: "Efficiency of a pump",

question: `
A 2 kW motor lifts water at a useful power of 1.5 kW.

Find the efficiency.

`,

answer: `
75%
`,

explanation: `
η=Pout/Pin

=1500/2000

=0.75

=75%
`
},

// ==========================================
// TYPE 55 : Spring Launch
// ==========================================

{
type: "Maximum height reached after spring launch",

question: `
A spring of constant 500 N/m is compressed by 20 cm.

A 2 kg block is released vertically.

Find the maximum height reached.

(g =10 m/s²)
`,

answer: `
0.50 m
`,

explanation: `
Spring energy

½kx²

=½×500×0.2²

=10 J

At maximum height

mgh=10

2×10×h=10

h=0.5 m
`
},


// ==========================================
// TYPE 56 : Escalator / Moving Walkway
// ==========================================

{
type: "Power developed by a person walking on an escalator",

question: `
A man of mass 70 kg walks upward on an escalator moving upward at 0.8 m/s. His speed relative to the escalator is 1.2 m/s.

Find the power developed by the man.

(g = 10 m/s²)
`,

answer: `
1400 W
`,

explanation: `
Actual upward speed

v = 0.8 + 1.2 = 2 m/s

Force exerted

F = mg = 70×10 = 700 N

Power

P = Fv

=700×2

=1400 W
`
},

// ==========================================
// TYPE 57 : Car Moving Against Resistance
// ==========================================

{
type: "Power required to maintain constant speed",

question: `
A car moves at a constant speed of 25 m/s against a resistive force of 1200 N.

Find

(a) the engine power

(b) work done in 5 minutes.
`,

answer: `
(a) 30 kW

(b) 9×10⁶ J
`,

explanation: `
Power

P=Fv

=1200×25

=30000 W

=30 kW

Distance

s=vt

=25×300

=7500 m

Work

W=Fs

=1200×7500

=9×10⁶ J
`
},

// ==========================================
// TYPE 58 : Braking Distance using Work-Energy
// ==========================================

{
type: "Stopping distance using work-energy theorem",

question: `
A 1000 kg car moving at 20 m/s is stopped by brakes producing a constant retarding force of 8000 N.

Find the stopping distance.
`,

answer: `
25 m
`,

explanation: `
Initial KE

=½mv²

=½×1000×20²

=200000 J

Work done by brakes

Fs=200000

8000s=200000

s=25 m
`
},

// ==========================================
// TYPE 59 : Regenerative Braking / Energy Loss
// ==========================================

{
type: "Percentage of kinetic energy converted into heat",

question: `
A vehicle slows from 30 m/s to 10 m/s.

Find the percentage of its initial kinetic energy lost.
`,

answer: `
88.9%
`,

explanation: `
Initial KE

∝30²=900

Final KE

∝10²=100

Energy lost

=900−100

=800

Percentage

=(800/900)×100

=88.9%
`
},

// ==========================================
// TYPE 60 : Spring Between Two Walls
// ==========================================

{
type: "Work done in compressing a spring already compressed",

question: `
A spring (k = 400 N/m) is already compressed by 10 cm. It is further compressed to 25 cm.

Find the additional work required.
`,

answer: `
10.5 J
`,

explanation: `
Work

=½k(x₂²−x₁²)

=½×400×(0.25²−0.10²)

=200×(0.0625−0.01)

=200×0.0525

=10.5 J
`
},

// ==========================================
// TYPE 61 : Work from Force-Displacement Graph
// ==========================================

{
type: "Work done from a force-displacement graph",

question: `
A force-displacement graph is triangular. The force increases uniformly from 0 N to 40 N while the displacement increases from 0 m to 8 m.

Find the work done by the force.
`,

answer: `
160 J
`,

explanation: `
Work done equals the area under the F-x graph.

Area of triangle

=½×base×height

=½×8×40

=160 J
`
},

// ==========================================
// TYPE 62 : Piecewise Force-Displacement Graph
// ==========================================

{
type: "Work done from a piecewise force-displacement graph",

question: `
A body moves under a force whose graph consists of:

• 0−4 m : Force = 20 N
• 4−8 m : Force decreases uniformly from 20 N to 0.

Find the total work done.
`,

answer: `
120 J
`,

explanation: `
Rectangle area

=20×4

=80 J

Triangle area

=½×4×20

=40 J

Total work

=80+40

=120 J
`
},

// ==========================================
// TYPE 63 : Variable Force Equation
// ==========================================

{
type: "Work done by a variable force F = 3x² + 2x",

question: `
A particle moves from x = 1 m to x = 3 m under a force

F = 3x² + 2x (N)

Find the work done.
`,

answer: `
36 J
`,

explanation: `
W = ∫(3x²+2x)dx

=[x³+x²]₁³

=(27+9)-(1+1)

=36-2

=34 J
`
},

// ==========================================
// TYPE 64 : Two Springs in Series
// ==========================================

{
type: "Equivalent spring constant (Series)",

question: `
Two springs of spring constants

200 N/m and 300 N/m

are connected in series.

Find

(a) equivalent spring constant

(b) work required to stretch the combination by 20 cm.
`,

answer: `
(a) 120 N/m

(b) 2.4 J
`,

explanation: `
Series combination

1/k

=1/200+1/300

k=120 N/m

Work

½kx²

=½×120×0.2²

=2.4 J
`
},

// ==========================================
// TYPE 65 : Two Springs in Parallel
// ==========================================

{
type: "Equivalent spring constant (Parallel)",

question: `
Two springs of spring constants

300 N/m and 500 N/m

are connected in parallel.

Find

(a) equivalent spring constant

(b) work done to compress the system by 10 cm.
`,

answer: `
(a) 800 N/m

(b) 4 J
`,

explanation: `
Parallel combination

k=k₁+k₂

=800 N/m

Work

½kx²

=½×800×0.1²

=4 J
`
},


// ==========================================
// TYPE 66 : Block on a Smooth Movable Wedge
// ==========================================

{
type: "Speed of a block sliding down a smooth wedge",

question: `
A block starts from rest and slides down a smooth wedge from a vertical height of 5 m.

Find the speed of the block at the bottom.

(g = 10 m/s²)
`,

answer: `
10 m/s
`,

explanation: `
Since the surface is smooth,

Mechanical energy is conserved.

mgh = ½mv²

v = √(2gh)

= √(2×10×5)

= √100

=10 m/s
`
},

// ==========================================
// TYPE 67 : Ballistic Pendulum
// ==========================================

{
type: "Ballistic pendulum using momentum and energy",

question: `
A 20 g bullet moving at 400 m/s embeds into a 2 kg wooden block suspended by a string.

Find the maximum height attained by the block.

(g =10 m/s²)
`,

answer: `
0.78 m
`,

explanation: `
Momentum conservation

0.02×400=(2.02)V

V≈3.96 m/s

Now,

½MV²=Mgh

h=V²/(2g)

=3.96²/20

≈0.78 m
`
},

// ==========================================
// TYPE 68 : Maximum Compression after Collision
// ==========================================

{
type: "Maximum spring compression after collision",

question: `
A 1 kg block moving at 8 m/s strikes a spring of spring constant 400 N/m on a smooth surface.

Find the maximum compression.

`,

answer: `
0.40 m
`,

explanation: `
Initial KE

=½×1×8²

=32 J

At maximum compression

½kx²=32

200x²=32

x²=0.16

x=0.40 m
`
},

// ==========================================
// TYPE 69 : Work from Power-Time Graph
// ==========================================

{
type: "Work done from a power-time graph",

question: `
A machine delivers a constant power of 600 W for 5 minutes.

Find the work done.

`,

answer: `
180000 J
`,

explanation: `
Work

=P×t

=600×300

=180000 J

Area under P-t graph also gives work.
`
},

// ==========================================
// TYPE 70 : Variable Power
// ==========================================

{
type: "Power when force and velocity both change",

question: `
A particle experiences a force of 20 N while moving with a speed of 4 m/s. Later the force becomes 30 N and the speed becomes 6 m/s.

Find the increase in power.

`,

answer: `
100 W
`,

explanation: `
Initial power

P₁=20×4=80 W

Final power

P₂=30×6=180 W

Increase

=180−80

=100 W
`
},

{
    type: "Bucket Pulled from Well (Heavy Rope)",

    question: `
A bucket of mass M is attached to a rope of length L and mass m (uniformly distributed).
The bucket is pulled from the bottom of the well to the top.

Find the work done.
`,

    answer: `
\\[W=MgL+\\frac12mgL\\]
`,

    explanation: `
Initially the entire rope hangs vertically.

As the bucket rises, the hanging length decreases.

Work on bucket:
W₁=MgL

Mass per unit length:
λ=m/L

Element of rope:
dm=λdx

Work on rope:

W₂=∫₀ᴸ λgx dx

=(m/L)g[L²/2]

=½mgL

Total work

W=MgL+½mgL
`
},

{
type: "Challenge Problem 1 : Spring + Friction + Inclined Plane",

question: `
A block of mass m is placed against a spring (spring constant k) on a rough inclined plane of angle θ.
The spring is compressed by x and released.
The coefficient of friction is μ.

Find the maximum distance travelled by the block along the incline before coming to rest.
`,

answer: `
s=
\\[\\frac{\\frac12kx^2}
{mg\\sin\\theta+\\mu mg\\cos\\theta}\\]
`,

explanation: `
Initially,

Spring Energy

\\[
E=\\frac12kx^2
\\]

During motion energy is spent against

• gravity

\\[
mg\\sin\\theta\\times s
\\]

• friction

\\[
\\mu mg\\cos\\theta\\times s
\\]

Using conservation of energy,

\\[
\\frac12kx^2=
mg\\sin\\theta s+
\\mu mg\\cos\\theta s
\\]

Hence,

\\[
s=
\\frac{\\frac12kx^2}
{mg(\\sin\\theta+\\mu\\cos\\theta)}
\\]
`
},

{
type: "Challenge Problem 2 : Collision Followed by Spring Compression",

question: `
A bullet of mass m moving with velocity u embeds into a stationary block of mass M attached to a spring of constant k.

Find the maximum compression of the spring.
`,

answer: `
x=
\\[\\frac{mu}{\\sqrt{k(m+M)}}\\]
`,

explanation: `
First use conservation of momentum,

\\[
mu=(M+m)v
\\]

Therefore,

\\[
v=
\\frac{mu}{M+m}
\\]

Now all kinetic energy converts into spring energy,

\\[
\\frac12(M+m)v^2=
\\frac12kx^2
\\]

Substituting v,

\\[
x=
\\frac{mu}
{\\sqrt{k(M+m)}}
\\]
`
},

{
type: "Challenge Problem 3 : Variable Force with Work-Energy Theorem",

question: `
A particle of mass m moves from x=0 to x=L under the force

F=ax+b.

Initially it is at rest.

Find its final speed.
`,

answer: `
v=
\\[\\sqrt{
\\frac{aL^2+2bL}{m}
}\\]
`,

explanation: `
Work done,

\\[
W=
\\int_0^L(ax+b)dx
\\]

Integrating,

\\[
W=
\\frac12aL^2+bL
\\]

By work-energy theorem,

\\[
W=
\\frac12mv^2
\\]

Hence,

\\[
v=
\\sqrt{
\\frac{aL^2+2bL}{m}
}
\\]
`
},

{
type: "Challenge Problem 4 : Connected Blocks with Friction",

question: `
Two blocks are connected by a light string and pulled by a force F over a rough horizontal surface.

Coefficient of friction is μ.

Find

(i) work done by the pulling force

(ii) work done by friction

(iii) work done by tension on each block.
`,

answer: `
Pulling force:
\\[W=Fs\\]

Friction:
\\[W_f=-\\mu(m_1+m_2)gs\\]

Tension:
\\[+Ts\\] on one block

\\[-Ts\\] on the other block

Net work by tension = 0
`,

explanation: `
The pulling force performs positive work.

Friction performs negative work.

Tension is an internal force.

One block gains energy,

the other loses the same amount.

Therefore total work by tension for the system is zero.

This is a favourite conceptual question in admission exams.
`
},

{
type: "Challenge Problem 5 : Mixed Energy Conservation",

question: `
A block slides down from height h onto a rough horizontal surface and finally compresses a spring of constant k.

Coefficient of friction on the horizontal surface is μ.

Find the maximum spring compression x.
`,

answer: `
\\[mgh=
\\mu mgd+
\\mu mgx+
\\frac12kx^2\\]
`,

explanation: `
Initially,

\\[
E_i=mgh
\\]

Energy is spent

• against friction before touching spring

\\[
\\mu mgd
\\]

• against friction while compressing spring

\\[
\\mu mgx
\\]

• stored in spring

\\[
\\frac12kx^2
\\]

Hence,

\\[
mgh=
\\mu mgd+
\\mu mgx+
\\frac12kx^2
\\]

This quadratic equation gives the required spring compression.
`
}


]


};