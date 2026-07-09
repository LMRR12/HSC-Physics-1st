// ==========================================
// Physics Practice Book
// Chapter 7 : Structural Properties of Matter
// data/structural_properties_of_matter.js
// ==========================================

const chapterData = {

    title: "Chapter 7 : Structural Properties of Matter",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [



// ==================================================
// INTERMOLECULAR FORCE & STATES OF MATTER
// ==================================================

{
    category: "Intermolecular Forces",

    title: "Intermolecular Force",

    formula: "F\\propto\\frac{1}{r^n}",

    description: "Intermolecular force depends strongly on the separation between molecules."
},

{
    category: "Intermolecular Forces",

    title: "Potential Energy of Molecules",

    formula: "U=f(r)",

    description: "Potential energy between two molecules depends on their separation."
},

{
    category: "Intermolecular Forces",

    title: "Equilibrium Separation",

    formula: "F=0",

    description: "At equilibrium distance, attractive and repulsive forces become equal."
},

{
    category: "Intermolecular Forces",

    title: "Solid State",

    formula: "F_{attractive}\\gg K.E.",

    description: "Strong intermolecular attraction keeps molecules fixed."
},

{
    category: "Intermolecular Forces",

    title: "Liquid State",

    formula: "F_{attractive}\\approx K.E.",

    description: "Molecules can move while remaining close together."
},

{
    category: "Intermolecular Forces",

    title: "Gas State",

    formula: "K.E.\\gg F_{attractive}",

    description: "Intermolecular attraction is negligible compared to molecular kinetic energy."
},



// ==================================================
// STRESS
// ==================================================

{
    category: "Stress",

    title: "Stress",

    formula: "\\sigma=\\frac{F}{A}",

    description: "Stress is the restoring force acting per unit area."
},

{
    category: "Stress",

    title: "Longitudinal Stress",

    formula: "\\sigma_l=\\frac{F}{A}",

    description: "Stress produced due to tensile or compressive force."
},

{
    category: "Stress",

    title: "Bulk Stress",

    formula: "\\sigma_b=\\frac{F}{A}=P",

    description: "Uniform pressure applied on all sides."
},

{
    category: "Stress",

    title: "Shearing Stress",

    formula: "\\tau=\\frac{F}{A}",

    description: "Tangential force acting per unit area."
},

{
    category: "Stress",

    title: "SI Unit of Stress",

    formula:"1\\;Pa=1\\;Nm^{-2}",

    description:"Stress is measured in pascal."
},



// ==================================================
// STRAIN
// ==================================================

{
    category:"Strain",

    title:"Longitudinal Strain",

    formula:"\\frac{\\Delta L}{L}",

    description:"Ratio of change in length to original length."
},

{
    category:"Strain",

    title:"Volumetric Strain",

    formula:"\\frac{\\Delta V}{V}",

    description:"Ratio of change in volume to original volume."
},

{
    category:"Strain",

    title:"Shearing Strain",

    formula:"\\theta",

    description:"Angular deformation produced by tangential force."
},

{
    category:"Strain",

    title:"Percentage Strain",

    formula:"\\frac{\\Delta L}{L}\\times100\\%",

    description:"Strain expressed in percentage."
},

{
    category:"Strain",

    title:"Dimension of Strain",

    formula:"1",

    description:"Strain is dimensionless."
},



// ==================================================
// HOOKE'S LAW
// ==================================================

{
    category:"Hooke's Law",

    title:"Hooke's Law",

    formula:"F\\propto x",

    description:"Within elastic limit, restoring force is proportional to deformation."
},

{
    category:"Hooke's Law",

    title:"Spring Force",

    formula:"F=-kx",

    description:"Restoring force of an ideal spring."
},

{
    category:"Hooke's Law",

    title:"Stress-Strain Relation",

    formula:"\\sigma\\propto\\epsilon",

    description:"Stress is proportional to strain within elastic limit."
},

{
    category:"Hooke's Law",

    title:"Spring Constant",

    formula:"k=\\frac Fx",

    description:"Force required to produce unit extension."
},



// ==================================================
// YOUNG'S MODULUS
// ==================================================

{
    category:"Young's Modulus",

    title:"Young's Modulus",

    formula:"Y=\\frac{Stress}{Strain}",

    description:"Ratio of longitudinal stress to longitudinal strain."
},

{
    category:"Young's Modulus",

    title:"Expanded Formula",

    formula:"Y=\\frac{FL}{A\\Delta L}",

    description:"Useful formula for extension or compression of wires."
},

{
    category:"Young's Modulus",

    title:"Extension",

    formula:"\\Delta L=\\frac{FL}{AY}",

    description:"Extension produced in a stretched wire."
},

{
    category:"Young's Modulus",

    title:"Force",

    formula:"F=\\frac{AY\\Delta L}{L}",

    description:"Force needed for a given extension."
},

{
    category:"Young's Modulus",

    title:"Area of Circular Wire",

    formula:"A=\\pi r^2",

    description:"Cross-sectional area of a wire."
},

{
    category:"Young's Modulus",

    title:"Diameter Form",

    formula:"A=\\frac{\\pi d^2}{4}",

    description:"Area expressed using diameter."
},



// ==================================================
// BULK MODULUS
// ==================================================

{
    category:"Bulk Modulus",

    title:"Bulk Modulus",

    formula:"K=-\\frac{P}{\\Delta V/V}",

    description:"Ratio of bulk stress to volume strain."
},

{
    category:"Bulk Modulus",

    title:"Volume Change",

    formula:"\\Delta V=-\\frac{PV}{K}",

    description:"Volume change due to pressure."
},

{
    category:"Bulk Modulus",

    title:"Compressibility",

    formula:"\\beta=\\frac1K",

    description:"Reciprocal of bulk modulus."
},

{
    category:"Bulk Modulus",

    title:"Compressibility Relation",

    formula:"K\\beta=1",

    description:"Relation between bulk modulus and compressibility."
},



// ==================================================
// MODULUS OF RIGIDITY
// ==================================================

{
    category:"Modulus of Rigidity",

    title:"Modulus of Rigidity",

    formula:"G=\\frac{Shear\\;Stress}{Shear\\;Strain}",

    description:"Ratio of shearing stress to shearing strain."
},

{
    category:"Modulus of Rigidity",

    title:"Expanded Formula",

    formula:"G=\\frac{F/A}{\\theta}",

    description:"Useful form for numerical calculations."
},

{
    category:"Modulus of Rigidity",

    title:"Shearing Angle",

    formula:"\\theta=\\frac{F}{AG}",

    description:"Angular deformation produced by shear force."
},

// ==================================================
// POISSON'S RATIO
// ==================================================

{
    category:"Poisson's Ratio",

    title:"Poisson's Ratio",

    formula:"\\mu=-\\frac{Lateral\\;Strain}{Longitudinal\\;Strain}",

    description:"Ratio of lateral strain to longitudinal strain."
},

{
    category:"Poisson's Ratio",

    title:"Lateral Strain",

    formula:"\\frac{\\Delta d}{d}",

    description:"Ratio of change in diameter to original diameter."
},

{
    category:"Poisson's Ratio",

    title:"Poisson's Ratio Formula",

    formula:"\\mu=-\\frac{\\Delta d/d}{\\Delta L/L}",

    description:"Expanded expression for Poisson's ratio."
},

{
    category:"Poisson's Ratio",

    title:"Range of Poisson's Ratio",

    formula:"0<\\mu<0.5",

    description:"For most isotropic elastic solids."
},



// ==================================================
// RELATION AMONG ELASTIC CONSTANTS
// ==================================================

{
    category:"Elastic Constants",

    title:"Young's Modulus & Rigidity Modulus",

    formula:"Y=2G(1+\\mu)",

    description:"Relation among Young's modulus, rigidity modulus and Poisson's ratio."
},

{
    category:"Elastic Constants",

    title:"Young's Modulus & Bulk Modulus",

    formula:"Y=3K(1-2\\mu)",

    description:"Relation involving bulk modulus."
},

{
    category:"Elastic Constants",

    title:"Young's Modulus (K & G)",

    formula:"Y=\\frac{9KG}{3K+G}",

    description:"Relation among Young's modulus, bulk modulus and rigidity modulus."
},

{
    category:"Elastic Constants",

    title:"Bulk Modulus",

    formula:"K=\\frac{Y}{3(1-2\\mu)}",

    description:"Bulk modulus expressed using Young's modulus."
},

{
    category:"Elastic Constants",

    title:"Rigidity Modulus",

    formula:"G=\\frac{Y}{2(1+\\mu)}",

    description:"Rigidity modulus expressed using Young's modulus."
},

{
    category:"Elastic Constants",

    title:"Poisson's Ratio",

    formula:"\\mu=\\frac{Y}{2G}-1",

    description:"Poisson's ratio in terms of Y and G."
},

{
    category:"Elastic Constants",

    title:"Poisson's Ratio (Y & K)",

    formula:"\\mu=\\frac{3K-Y}{6K}",

    description:"Poisson's ratio in terms of Young's and bulk moduli."
},



// ==================================================
// ELASTIC ENERGY
// ==================================================

{
    category:"Elastic Energy",

    title:"Elastic Potential Energy",

    formula:"U=\\frac12Fx",

    description:"Energy stored due to elastic deformation."
},

{
    category:"Elastic Energy",

    title:"Elastic Energy (Spring)",

    formula:"U=\\frac12kx^2",

    description:"Potential energy stored in a spring."
},

{
    category:"Elastic Energy",

    title:"Energy Density",

    formula:"u=\\frac12\\sigma\\epsilon",

    description:"Elastic energy stored per unit volume."
},

{
    category:"Elastic Energy",

    title:"Energy Density (Young's Modulus)",

    formula:"u=\\frac12Y\\epsilon^2",

    description:"Elastic energy density in terms of strain."
},



// ==================================================
// FLUID FLOW
// ==================================================

{
    category:"Fluid Flow",

    title:"Flow Rate",

    formula:"Q=Av",

    description:"Volume of fluid flowing per second."
},

{
    category:"Fluid Flow",

    title:"Equation of Continuity",

    formula:"A_1v_1=A_2v_2",

    description:"Mass conservation for incompressible fluids."
},

{
    category:"Fluid Flow",

    title:"Mass Flow Rate",

    formula:"\\dot m=\\rho Av",

    description:"Mass crossing a section per second."
},

{
    category:"Fluid Flow",

    title:"Discharge",

    formula:"Q=\\frac{V}{t}",

    description:"Volume flow rate of a liquid."
},

{
    category:"Fluid Flow",

    title:"Average Velocity",

    formula:"v=\\frac{Q}{A}",

    description:"Average velocity of fluid flow."
},



// ==================================================
// STREAMLINE & TURBULENT FLOW
// ==================================================

{
    category:"Fluid Motion",

    title:"Streamline Flow",

    formula:"Re<2000",

    description:"Flow occurs smoothly in parallel layers."
},

{
    category:"Fluid Motion",

    title:"Critical Region",

    formula:"2000<Re<3000",

    description:"Transition region between laminar and turbulent flow."
},

{
    category:"Fluid Motion",

    title:"Turbulent Flow",

    formula:"Re>3000",

    description:"Irregular flow with eddies and mixing."
},

{
    category:"Fluid Motion",

    title:"Reynolds Number",

    formula:"Re=\\frac{\\rho vd}{\\eta}",

    description:"Dimensionless quantity used to predict the nature of flow."
},

{
    category:"Fluid Motion",

    title:"Critical Velocity",

    formula:"v_c=\\frac{Re\\eta}{\\rho d}",

    description:"Maximum velocity for streamline flow."
},

{
    category:"Fluid Motion",

    title:"Critical Velocity (Radius Form)",

    formula:"v_c=\\frac{Re\\eta}{2\\rho r}",

    description:"Critical velocity expressed using pipe radius."
},

{
    category:"Fluid Motion",

    title:"Reynolds Number (Radius Form)",

    formula:"Re=\\frac{2\\rho vr}{\\eta}",

    description:"Alternative form using pipe radius."
},

// ==================================================
// VISCOSITY
// ==================================================

{
    category:"Viscosity",

    title:"Coefficient of Viscosity",

    formula:"\\eta=\\frac{Fl}{A(v_1-v_2)}",

    description:"Coefficient of viscosity according to Newton's law of viscosity."
},

{
    category:"Viscosity",

    title:"Newton's Law of Viscosity",

    formula:"F=\\eta A\\frac{dv}{dx}",

    description:"Viscous force is proportional to velocity gradient."
},

{
    category:"Viscosity",

    title:"Velocity Gradient",

    formula:"\\frac{dv}{dx}",

    description:"Rate of change of velocity per unit distance between adjacent fluid layers."
},

{
    category:"Viscosity",

    title:"Viscous Force",

    formula:"F=\\eta A\\frac{v}{l}",

    description:"For uniform velocity gradient."
},

{
    category:"Viscosity",

    title:"SI Unit",

    formula:"Pa\\cdot s",

    description:"SI unit of coefficient of viscosity."
},

{
    category:"Viscosity",

    title:"CGS Unit",

    formula:"Poise",

    description:"CGS unit of viscosity."
},

{
    category:"Viscosity",

    title:"Unit Conversion",

    formula:"1\\;Pa\\cdot s=10\\;Poise",

    description:"Relation between SI and CGS units."
},

{
    category:"Viscosity",

    title:"Dimension",

    formula:"[ML^{-1}T^{-1}]",

    description:"Dimensional formula of viscosity."
},

{
    category:"Viscosity",

    title:"Kinematic Viscosity",

    formula:"\\nu=\\frac{\\eta}{\\rho}",

    description:"Ratio of dynamic viscosity to density."
},

{
    category:"Viscosity",

    title:"Unit of Kinematic Viscosity",

    formula:"m^2s^{-1}",

    description:"SI unit of kinematic viscosity."
},



// ==================================================
// STOKES' LAW
// ==================================================

{
    category:"Stokes' Law",

    title:"Stokes' Law",

    formula:"F=6\\pi\\eta rv",

    description:"Viscous drag acting on a small sphere moving through a viscous fluid."
},

{
    category:"Stokes' Law",

    title:"Drag Force",

    formula:"F_d=6\\pi\\eta rv",

    description:"Drag force experienced by a sphere."
},

{
    category:"Stokes' Law",

    title:"Radius from Drag",

    formula:"r=\\frac{F}{6\\pi\\eta v}",

    description:"Radius of sphere expressed from Stokes' law."
},

{
    category:"Stokes' Law",

    title:"Velocity from Drag",

    formula:"v=\\frac{F}{6\\pi\\eta r}",

    description:"Velocity of sphere using drag force."
},



// ==================================================
// TERMINAL VELOCITY
// ==================================================

{
    category:"Terminal Velocity",

    title:"Terminal Velocity",

    formula:"v_t=\\frac{2r^2(\\rho-\\sigma)g}{9\\eta}",

    description:"Terminal velocity of a sphere falling through a viscous liquid."
},

{
    category:"Terminal Velocity",

    title:"Radius Formula",

    formula:"r=\\sqrt{\\frac{9\\eta v_t}{2(\\rho-\\sigma)g}}",

    description:"Radius of sphere from terminal velocity."
},

{
    category:"Terminal Velocity",

    title:"Coefficient of Viscosity",

    formula:"\\eta=\\frac{2r^2(\\rho-\\sigma)g}{9v_t}",

    description:"Viscosity expressed using terminal velocity."
},

{
    category:"Terminal Velocity",

    title:"Density Difference",

    formula:"\\rho-\\sigma",

    description:"Difference between density of sphere and density of liquid."
},

{
    category:"Terminal Velocity",

    title:"Variation with Radius",

    formula:"v_t\\propto r^2",

    description:"Terminal velocity is proportional to the square of sphere radius."
},

{
    category:"Terminal Velocity",

    title:"Variation with Viscosity",

    formula:"v_t\\propto\\frac1\\eta",

    description:"Higher viscosity produces lower terminal velocity."
},

{
    category:"Terminal Velocity",

    title:"Variation with Density",

    formula:"v_t\\propto(\\rho-\\sigma)",

    description:"Terminal velocity increases with density difference."
},



// ==================================================
// SURFACE TENSION
// ==================================================

{
    category:"Surface Tension",

    title:"Surface Tension",

    formula:"T=\\frac{F}{l}",

    description:"Surface tension is force per unit length acting along the liquid surface."
},

{
    category:"Surface Tension",

    title:"Force due to Surface Tension",

    formula:"F=Tl",

    description:"Force acting along a single liquid surface."
},

{
    category:"Surface Tension",

    title:"Soap Film Force",

    formula:"F=2Tl",

    description:"A soap film has two free surfaces."
},

{
    category:"Surface Tension",

    title:"SI Unit",

    formula:"Nm^{-1}",

    description:"SI unit of surface tension."
},

{
    category:"Surface Tension",

    title:"Dimension",

    formula:"[MT^{-2}]",

    description:"Dimensional formula of surface tension."
},

{
    category:"Surface Tension",

    title:"Work Done",

    formula:"W=T\\Delta A",

    description:"Work required to increase surface area."
},

{
    category:"Surface Tension",

    title:"Surface Energy",

    formula:"E=T\\times A",

    description:"Surface energy stored by a liquid surface."
},

{
    category:"Surface Tension",

    title:"Surface Energy Density",

    formula:"T=\\frac{E}{A}",

    description:"Surface tension equals surface energy per unit area."
},

{
    category:"Surface Tension",

    title:"Molecular Theory",

    formula:"T=\\frac{F}{l}",

    description:"Surface molecules experience inward cohesive force resulting in surface tension."
},

// ==================================================
// COHESIVE & ADHESIVE FORCE
// ==================================================

{
    category:"Surface Tension",

    title:"Cohesive Force",

    formula:"F_c",

    description:"Force of attraction between molecules of the same substance."
},

{
    category:"Surface Tension",

    title:"Adhesive Force",

    formula:"F_a",

    description:"Force of attraction between molecules of different substances."
},

{
    category:"Surface Tension",

    title:"Condition for Convex Meniscus",

    formula:"F_c>F_a",

    description:"When cohesive force exceeds adhesive force, a convex meniscus is formed."
},

{
    category:"Surface Tension",

    title:"Condition for Concave Meniscus",

    formula:"F_a>F_c",

    description:"When adhesive force exceeds cohesive force, a concave meniscus is formed."
},



// ==================================================
// ANGLE OF CONTACT
// ==================================================

{
    category:"Angle of Contact",

    title:"Young's Equation",

    formula:"T_{SA}=T_{SL}+T\\cos\\theta",

    description:"Relation among surface tensions at the point of contact."
},

{
    category:"Angle of Contact",

    title:"Angle of Contact",

    formula:"\\theta",

    description:"Angle between the tangent to the liquid surface and the solid surface measured inside the liquid."
},

{
    category:"Angle of Contact",

    title:"Complete Wetting",

    formula:"\\theta=0^\\circ",

    description:"Liquid spreads completely over the solid surface."
},

{
    category:"Angle of Contact",

    title:"No Wetting",

    formula:"\\theta>90^\\circ",

    description:"Liquid does not wet the solid surface."
},

{
    category:"Angle of Contact",

    title:"Perfect Non-Wetting",

    formula:"\\theta=180^\\circ",

    description:"Maximum possible angle of contact."
},



// ==================================================
// CAPILLARITY
// ==================================================

{
    category:"Capillarity",

    title:"Capillary Rise",

    formula:"h=\\frac{2T\\cos\\theta}{\\rho gr}",

    description:"Height of liquid rise inside a capillary tube."
},

{
    category:"Capillarity",

    title:"Surface Tension",

    formula:"T=\\frac{h\\rho gr}{2\\cos\\theta}",

    description:"Surface tension from capillary rise."
},

{
    category:"Capillarity",

    title:"Radius of Tube",

    formula:"r=\\frac{2T\\cos\\theta}{\\rho gh}",

    description:"Radius of capillary tube."
},

{
    category:"Capillarity",

    title:"Height Relation",

    formula:"h\\propto\\frac1r",

    description:"Capillary rise is inversely proportional to tube radius."
},

{
    category:"Capillarity",

    title:"Height Relation",

    formula:"h\\propto T",

    description:"Capillary rise is directly proportional to surface tension."
},

{
    category:"Capillarity",

    title:"Height Relation",

    formula:"h\\propto\\cos\\theta",

    description:"Capillary rise depends on angle of contact."
},



// ==================================================
// EXCESS PRESSURE
// ==================================================

{
    category:"Excess Pressure",

    title:"Liquid Drop",

    formula:"\\Delta P=\\frac{2T}{r}",

    description:"Excess pressure inside a liquid drop."
},

{
    category:"Excess Pressure",

    title:"Soap Bubble",

    formula:"\\Delta P=\\frac{4T}{r}",

    description:"Excess pressure inside a soap bubble."
},

{
    category:"Excess Pressure",

    title:"Cylindrical Surface",

    formula:"\\Delta P=\\frac{T}{r}",

    description:"Excess pressure inside a cylindrical liquid surface."
},

{
    category:"Excess Pressure",

    title:"Radius from Pressure",

    formula:"r=\\frac{2T}{\\Delta P}",

    description:"Radius of a liquid drop from excess pressure."
},

{
    category:"Excess Pressure",

    title:"Radius of Soap Bubble",

    formula:"r=\\frac{4T}{\\Delta P}",

    description:"Radius of a soap bubble from excess pressure."
},



// ==================================================
// IMPORTANT VARIATIONS & RESULTS
// ==================================================

{
    category:"Important Results",

    title:"Extension of Wire",

    formula:"\\Delta L\\propto F",

    description:"Extension is directly proportional to applied force."
},

{
    category:"Important Results",

    title:"Extension of Wire",

    formula:"\\Delta L\\propto L",

    description:"Extension is directly proportional to original length."
},

{
    category:"Important Results",

    title:"Extension of Wire",

    formula:"\\Delta L\\propto\\frac1A",

    description:"Extension is inversely proportional to cross-sectional area."
},

{
    category:"Important Results",

    title:"Extension of Wire",

    formula:"\\Delta L\\propto\\frac1Y",

    description:"Extension is inversely proportional to Young's modulus."
},

{
    category:"Important Results",

    title:"Viscous Force",

    formula:"F\\propto\\eta",

    description:"Viscous force increases with coefficient of viscosity."
},

{
    category:"Important Results",

    title:"Stokes' Drag",

    formula:"F\\propto rv",

    description:"Drag force is proportional to sphere radius and speed."
},

{
    category:"Important Results",

    title:"Surface Tension",

    formula:"T\\downarrow\\;\\text{with}\\;Temperature\\uparrow",

    description:"Surface tension decreases as temperature increases."
},

{
    category:"Important Results",

    title:"Viscosity of Liquids",

    formula:"\\eta\\downarrow\\;\\text{with}\\;Temperature\\uparrow",

    description:"Viscosity of liquids decreases with increasing temperature."
},

{
    category:"Important Results",

    title:"Viscosity of Gases",

    formula:"\\eta\\uparrow\\;\\text{with}\\;Temperature\\uparrow",

    description:"Viscosity of gases increases with increasing temperature."
},

{
    category:"Important Results",

    title:"Elastic Limit",

    formula:"\\sigma\\propto\\epsilon",

    description:"Stress remains proportional to strain only within the elastic limit."
},

],




// ==========================================
// PROBLEMS
// ==========================================

problems: [

    // ==================================================
// ELASTICITY, STRESS & STRAIN
// ==================================================

{
    category: "Stress and Strain",

    type: "Basic Stress Calculation",

    question: "A wire of cross-sectional area \\(2\\times10^{-6}\\,m^2\\) is stretched by a force of \\(100\\,N\\). Find the stress produced.",

    answer: "\\(5\\times10^7\\,Nm^{-2}\\)",

    explanation: "Using \\(Stress=\\frac{F}{A}\\)."
},

{
    category: "Stress and Strain",

    type: "Basic Longitudinal Strain",

    question: "A wire of length \\(2m\\) extends by \\(1mm\\). Calculate the longitudinal strain.",

    answer: "\\(5\\times10^{-4}\\)",

    explanation: "Using \\(strain=\\frac{\\Delta L}{L}\\)."
},

{
    category: "Stress and Strain",

    type: "Calculate Extension",

    question: "A wire of length \\(4m\\) experiences a strain of \\(2\\times10^{-4}\\). Find its extension.",

    answer: "\\(0.8mm\\)",

    explanation: "Using \\(\\Delta L=L\\times strain\\)."
},

{
    category: "Stress and Strain",

    type: "Stress-Strain Relation",

    question: "A material experiences a stress of \\(8\\times10^7\\,Pa\\) and strain \\(4\\times10^{-4}\\). Determine Young's modulus.",

    answer: "\\(2\\times10^{11}\\,Pa\\)",

    explanation: "Using \\(Y=\\frac{stress}{strain}\\)."
},

{
    category: "Stress and Strain",

    type: "Compare Stresses",

    question: "Two wires have equal forces applied. Wire A has radius twice that of wire B. Compare the stresses produced.",

    answer: "\\(Stress_A:Stress_B=1:4\\)",

    explanation: "Stress is inversely proportional to area and area is proportional to radius squared."
},

{
    category: "Stress and Strain",

    type: "Compare Strains",

    question: "Two wires of the same material and length have radii \\(r\\) and \\(2r\\). If the same force is applied, compare their strains.",

    answer: "\\(4:1\\)",

    explanation: "Strain is proportional to \\(\\frac1A\\) for same material and length."
},

{
    category: "Stress and Strain",

    type: "Volume Strain",

    question: "A cube of volume \\(1000cm^3\\) is compressed and its volume decreases by \\(2cm^3\\). Find the volume strain.",

    answer: "\\(2\\times10^{-3}\\)",

    explanation: "Using \\(Volume\\ strain=\\frac{\\Delta V}{V}\\)."
},

{
    category: "Stress and Strain",

    type: "Shearing Strain",

    question: "The upper surface of a block shifts by \\(5mm\\) while its height is \\(2m\\). Find the shearing strain.",

    answer: "\\(2.5\\times10^{-3}\\)",

    explanation: "Using \\(Shearing\\ strain=\\frac{x}{h}\\)."
},



// ==================================================
// HOOKE'S LAW
// ==================================================

{
    category: "Hooke's Law",

    type: "Force Extension Relation",

    question: "A spring extends by \\(4cm\\) when a force of \\(20N\\) is applied. Find the spring constant.",

    answer: "\\(500\\,Nm^{-1}\\)",

    explanation: "Using Hooke's law \\(F=kx\\)."
},

{
    category: "Hooke's Law",

    type: "Extension by Double Force",

    question: "Within elastic limit, the force applied to a wire is doubled. How does extension change?",

    answer: "Extension becomes double.",

    explanation: "According to Hooke's law, extension is directly proportional to force."
},

{
    category: "Hooke's Law",

    type: "Force from Extension",

    question: "A spring with constant \\(200Nm^{-1}\\) is stretched by \\(5cm\\). Find the applied force.",

    answer: "\\(10N\\)",

    explanation: "Using \\(F=kx\\)."
},

{
    category: "Hooke's Law",

    type: "Spring Combination",

    question: "Two identical springs each having spring constant \\(k\\) are connected in parallel. Find the equivalent spring constant.",

    answer: "\\(2k\\)",

    explanation: "For parallel combination, spring constants add."
},

{
    category: "Hooke's Law",

    type: "Spring Series Combination",

    question: "Two identical springs each having spring constant \\(k\\) are connected in series. Find the equivalent spring constant.",

    answer: "\\(\\frac{k}{2}\\)",

    explanation: "For series combination, \\(\\frac1{k_{eq}}=\\frac1k+\\frac1k\\)."
},



// ==================================================
// YOUNG'S MODULUS
// ==================================================

{
    category: "Young's Modulus",

    type: "Find Young's Modulus",

    question: "A wire of length \\(3m\\) and radius \\(0.5mm\\) extends by \\(1mm\\) when a force of \\(50N\\) is applied. Find Young's modulus.",

    answer: "\\(1.91\\times10^{11}\\,Pa\\)",

    explanation: "Using \\(Y=\\frac{FL}{A\\Delta L}\\)."
},

{
    category: "Young's Modulus",

    type: "Find Extension of Wire",

    question: "A wire of length \\(L\\), area \\(A\\), Young's modulus \\(Y\\) is stretched by force \\(F\\). Find extension.",

    answer: "\\(\\Delta L=\\frac{FL}{AY}\\)",

    explanation: "Rearranging Young's modulus equation."
},

{
    category: "Young's Modulus",

    type: "Effect of Length",

    question: "Two wires of same material and radius have lengths \\(L\\) and \\(2L\\). Under equal force, compare their extensions.",

    answer: "\\(1:2\\)",

    explanation: "Extension is directly proportional to length."
},

{
    category: "Young's Modulus",

    type: "Effect of Radius",

    question: "Two identical wires have radii \\(r\\) and \\(3r\\). Compare extensions under the same load.",

    answer: "\\(9:1\\)",

    explanation: "Extension is inversely proportional to area."
},

{
    category: "Young's Modulus",

    type: "Same Extension Condition",

    question: "Two wires of different materials have the same length and area. Which wire requires greater force for the same extension?",

    answer: "The wire with greater Young's modulus.",

    explanation: "From \\(F=\\frac{YA\\Delta L}{L}\\)."
},

{
    category: "Young's Modulus",

    type: "Finding Force",

    question: "A wire of length \\(2m\\), area \\(10^{-6}m^2\\), and Young's modulus \\(2\\times10^{11}Pa\\) extends by \\(1mm\\). Find force.",

    answer: "\\(100N\\)",

    explanation: "Using \\(F=\\frac{YA\\Delta L}{L}\\)."
},

// ==================================================
// ELASTIC ENERGY
// ==================================================

{
    category: "Elastic Energy",

    type: "Energy Stored in Stretched Wire",

    question: "A wire is stretched by a force of \\(100N\\) producing an extension of \\(2mm\\). Find the elastic energy stored.",

    answer: "\\(0.1J\\)",

    explanation: "Using \\(U=\\frac12F\\Delta L\\)."
},

{
    category: "Elastic Energy",

    type: "Spring Energy",

    question: "A spring of force constant \\(400Nm^{-1}\\) is compressed by \\(5cm\\). Find the stored energy.",

    answer: "\\(0.5J\\)",

    explanation: "Using \\(U=\\frac12kx^2\\)."
},

{
    category: "Elastic Energy",

    type: "Energy Density",

    question: "A material has stress \\(5\\times10^7Pa\\) and strain \\(2\\times10^{-4}\\). Find elastic energy density.",

    answer: "\\(5\\times10^3Jm^{-3}\\)",

    explanation: "Using \\(u=\\frac12\\sigma\\epsilon\\)."
},

{
    category: "Elastic Energy",

    type: "Energy Comparison",

    question: "Two wires of the same material and length have radii \\(r\\) and \\(2r\\). If the same extension is produced, compare the elastic energies stored.",

    answer: "\\(1:4\\)",

    explanation: "Energy stored is proportional to cross-sectional area for same material, length and strain."
},

{
    category: "Elastic Energy",

    type: "Work Done During Stretching",

    question: "A wire is stretched gradually from zero extension to \\(5mm\\) by a final force of \\(50N\\). Find the work done.",

    answer: "\\(0.125J\\)",

    explanation: "Work done equals area under force-extension graph: \\(W=\\frac12F\\Delta L\\)."
},



// ==================================================
// BULK MODULUS
// ==================================================

{
    category: "Bulk Modulus",

    type: "Basic Bulk Modulus",

    question: "A pressure of \\(2\\times10^6Pa\\) decreases the volume of a liquid by \\(0.01\\%\\). Find bulk modulus.",

    answer: "\\(2\\times10^{10}Pa\\)",

    explanation: "Using \\(K=\\frac{pressure}{volume\\ strain}\\)."
},

{
    category: "Bulk Modulus",

    type: "Volume Change Calculation",

    question: "A material with bulk modulus \\(8\\times10^{10}Pa\\) is subjected to pressure \\(4\\times10^6Pa\\). Find volume strain.",

    answer: "\\(5\\times10^{-5}\\)",

    explanation: "Using \\(K=\\frac{P}{\\Delta V/V}\\)."
},

{
    category: "Bulk Modulus",

    type: "Find Volume Decrease",

    question: "A metal sphere of volume \\(500cm^3\\) is subjected to pressure \\(10^7Pa\\). If bulk modulus is \\(10^{11}Pa\\), find decrease in volume.",

    answer: "\\(0.05cm^3\\)",

    explanation: "Using \\(\\Delta V=\\frac{PV}{K}\\)."
},

{
    category: "Bulk Modulus",

    type: "Compressibility Relation",

    question: "Find the compressibility of a substance having bulk modulus \\(5\\times10^{10}Pa\\).",

    answer: "\\(2\\times10^{-11}Pa^{-1}\\)",

    explanation: "Using \\(\\beta=\\frac1K\\)."
},

{
    category: "Bulk Modulus",

    type: "Compare Compressibility",

    question: "Material A has bulk modulus twice that of material B. Compare their compressibilities.",

    answer: "\\(1:2\\)",

    explanation: "Compressibility is inversely proportional to bulk modulus."
},



// ==================================================
// MODULUS OF RIGIDITY
// ==================================================

{
    category: "Modulus of Rigidity",

    type: "Basic Rigidity Modulus",

    question: "A tangential force of \\(100N\\) acts on a surface of area \\(0.02m^2\\). The upper surface shifts by \\(2mm\\) while height is \\(1m\\). Find rigidity modulus.",

    answer: "\\(2.5\\times10^6Pa\\)",

    explanation: "Using \\(G=\\frac{shear\\ stress}{shear\\ strain}\\)."
},

{
    category: "Modulus of Rigidity",

    type: "Find Shear Displacement",

    question: "A material has rigidity modulus \\(4\\times10^{10}Pa\\). If shear stress is \\(8\\times10^6Pa\\), find shear strain.",

    answer: "\\(2\\times10^{-4}\\)",

    explanation: "Using \\(G=\\frac{stress}{strain}\\)."
},

{
    category: "Modulus of Rigidity",

    type: "Shear Force Calculation",

    question: "A block of area \\(5m^2\\) experiences a shear strain of \\(10^{-3}\\). If rigidity modulus is \\(2\\times10^{10}Pa\\), find force required.",

    answer: "\\(10^8N\\)",

    explanation: "Shear stress \\(=G\\times strain\\), then \\(F=stress\\times A\\)."
},

{
    category: "Modulus of Rigidity",

    type: "Compare Rigidity",

    question: "Two materials experience the same shear stress. Material A has twice the rigidity modulus of material B. Compare their shear strains.",

    answer: "\\(1:2\\)",

    explanation: "Strain is inversely proportional to rigidity modulus."
},



// ==================================================
// COMPRESSIBILITY CONCEPTS
// ==================================================

{
    category: "Compressibility",

    type: "Relation with Bulk Modulus",

    question: "A liquid has a very high bulk modulus. What does it indicate about its compressibility?",

    answer: "It has very low compressibility.",

    explanation: "Compressibility is the reciprocal of bulk modulus."
},

{
    category: "Compressibility",

    type: "Why Liquids are Difficult to Compress",

    question: "Why are liquids nearly incompressible compared to gases?",

    answer: "Because liquid molecules are already closely packed.",

    explanation: "Very little empty space exists between liquid molecules."
},

{
    category: "Compressibility",

    type: "Gas Compression",

    question: "Why can gases be compressed much more easily than liquids?",

    answer: "Because gases contain large intermolecular spaces.",

    explanation: "Compression reduces the empty spaces between gas molecules."
},

// ==================================================
// POISSON'S RATIO
// ==================================================

{
    category: "Poisson's Ratio",

    type: "Basic Poisson's Ratio",

    question: "A wire of length \\(2m\\) and diameter \\(4mm\\) is stretched. Its length increases by \\(1mm\\) and diameter decreases by \\(0.002mm\\). Find Poisson's ratio.",

    answer: "\\(1\\)",

    explanation: "Using \\(\\mu=-\\frac{lateral\\ strain}{longitudinal\\ strain}\\)."
},

{
    category: "Poisson's Ratio",

    type: "Find Lateral Strain",

    question: "A wire has longitudinal strain \\(4\\times10^{-4}\\). If Poisson's ratio is \\(0.25\\), find lateral strain.",

    answer: "\\(-1\\times10^{-4}\\)",

    explanation: "Using \\(lateral\\ strain=-\\mu\\times longitudinal\\ strain\\)."
},

{
    category: "Poisson's Ratio",

    type: "Find Longitudinal Strain",

    question: "A material has Poisson's ratio \\(0.3\\). If lateral strain is \\(-6\\times10^{-5}\\), find longitudinal strain.",

    answer: "\\(2\\times10^{-4}\\)",

    explanation: "Using \\(\\mu=-\\frac{lateral\\ strain}{longitudinal\\ strain}\\)."
},

{
    category: "Poisson's Ratio",

    type: "Concept of Negative Sign",

    question: "Why is Poisson's ratio generally taken as negative in the formula?",

    answer: "Because lateral strain and longitudinal strain have opposite directions.",

    explanation: "Stretching causes increase in length but decrease in width."
},

{
    category: "Poisson's Ratio",

    type: "Range of Poisson's Ratio",

    question: "What is the maximum possible value of Poisson's ratio for ordinary elastic materials?",

    answer: "\\(0.5\\)",

    explanation: "For stable isotropic materials, \\(0<\\mu<0.5\\)."
},



// ==================================================
// ELASTIC CONSTANT RELATIONS
// ==================================================

{
    category: "Elastic Constants",

    type: "Find Young's Modulus from Rigidity Modulus",

    question: "A material has rigidity modulus \\(G\\) and Poisson's ratio \\(\\mu\\). Find Young's modulus.",

    answer: "\\(Y=2G(1+\\mu)\\)",

    explanation: "Using the relation among elastic constants."
},

{
    category: "Elastic Constants",

    type: "Find Bulk Modulus",

    question: "A material has Young's modulus \\(Y\\) and Poisson's ratio \\(\\mu\\). Express its bulk modulus.",

    answer: "\\(K=\\frac{Y}{3(1-2\\mu)}\\)",

    explanation: "Using relation between Young's modulus and bulk modulus."
},

{
    category: "Elastic Constants",

    type: "Find Rigidity Modulus",

    question: "A wire has Young's modulus \\(2\\times10^{11}Pa\\) and Poisson's ratio \\(0.25\\). Find rigidity modulus.",

    answer: "\\(8\\times10^{10}Pa\\)",

    explanation: "Using \\(G=\\frac{Y}{2(1+\\mu)}\\)."
},

{
    category: "Elastic Constants",

    type: "Find Poisson's Ratio from Y and G",

    question: "A material has Young's modulus \\(10^{11}Pa\\) and rigidity modulus \\(4\\times10^{10}Pa\\). Find Poisson's ratio.",

    answer: "\\(0.25\\)",

    explanation: "Using \\(\\mu=\\frac{Y}{2G}-1\\)."
},

{
    category: "Elastic Constants",

    type: "Relation Between Y and K",

    question: "For a material with Poisson's ratio \\(0.5\\), what happens to Young's modulus compared with bulk modulus?",

    answer: "The material becomes incompressible and bulk modulus becomes extremely large.",

    explanation: "From \\(Y=3K(1-2\\mu)\\)."
},



// ==================================================
// FLUID FLOW
// ==================================================

{
    category: "Fluid Flow",

    type: "Continuity Equation Basic",

    question: "Water flows through a pipe of area \\(4cm^2\\) with speed \\(2m/s\\). If area becomes \\(1cm^2\\), find new velocity.",

    answer: "\\(8m/s\\)",

    explanation: "Using \\(A_1v_1=A_2v_2\\)."
},

{
    category: "Fluid Flow",

    type: "Flow Rate",

    question: "A pipe of cross-sectional area \\(5\\times10^{-4}m^2\\) carries water at \\(3m/s\\). Find volume flow rate.",

    answer: "\\(1.5\\times10^{-3}m^3/s\\)",

    explanation: "Using \\(Q=Av\\)."
},

{
    category: "Fluid Flow",

    type: "Mass Flow Rate",

    question: "Water flows through a pipe of area \\(2\\times10^{-3}m^2\\) with velocity \\(4m/s\\). Find mass flow rate. Take density of water as \\(1000kg/m^3\\).",

    answer: "\\(8kg/s\\)",

    explanation: "Using \\(\\dot m=\\rho Av\\)."
},

{
    category: "Fluid Flow",

    type: "Area Velocity Relation",

    question: "The radius of a pipe is reduced to half. Compare the velocities of liquid flow.",

    answer: "\\(1:4\\)",

    explanation: "Area becomes one-fourth, so velocity becomes four times."
},

{
    category: "Fluid Flow",

    type: "Concept of Continuity",

    question: "Why does the velocity of an incompressible fluid increase in a narrow pipe section?",

    answer: "Because the same volume of fluid must pass through a smaller area per unit time.",

    explanation: "This follows from conservation of mass."
},

{
    category: "Fluid Flow",

    type: "Discharge Calculation",

    question: "A pipe delivers \\(500m^3\\) water in \\(10\\) minutes. Find discharge.",

    answer: "\\(0.833m^3/s\\)",

    explanation: "Using \\(Q=\\frac{V}{t}\\)."
},

// ==================================================
// REYNOLDS NUMBER & FLUID MOTION
// ==================================================

{
    category: "Reynolds Number",

    type: "Calculate Reynolds Number",

    question: "Water of density \\(1000kgm^{-3}\\) flows through a pipe of diameter \\(0.02m\\) with velocity \\(2m/s\\). If viscosity is \\(10^{-3}Pa\\cdot s\\), find Reynolds number.",

    answer: "\\(4\\times10^4\\)",

    explanation: "Using \\(Re=\\frac{\\rho vd}{\\eta}\\)."
},

{
    category: "Reynolds Number",

    type: "Determine Nature of Flow",

    question: "A fluid has Reynolds number \\(1500\\). Determine the type of flow.",

    answer: "Streamline flow.",

    explanation: "For \\(Re<2000\\), flow is generally streamline."
},

{
    category: "Reynolds Number",

    type: "Turbulent Flow Condition",

    question: "A liquid flowing in a pipe has Reynolds number \\(5000\\). What type of flow occurs?",

    answer: "Turbulent flow.",

    explanation: "For \\(Re>3000\\), flow becomes turbulent."
},

{
    category: "Reynolds Number",

    type: "Find Critical Velocity",

    question: "A liquid of density \\(800kgm^{-3}\\) and viscosity \\(0.04Pa\\cdot s\\) flows through a tube of diameter \\(0.01m\\). Find critical velocity if critical Reynolds number is 2000.",

    answer: "\\(10ms^{-1}\\)",

    explanation: "Using \\(v_c=\\frac{Re\\eta}{\\rho d}\\)."
},

{
    category: "Reynolds Number",

    type: "Effect of Diameter",

    question: "If the diameter of a pipe is doubled while other quantities remain constant, how does Reynolds number change?",

    answer: "It becomes double.",

    explanation: "Since \\(Re\\propto d\\)."
},

{
    category: "Reynolds Number",

    type: "Effect of Velocity",

    question: "If the velocity of fluid is increased three times, how does Reynolds number change?",

    answer: "It becomes three times.",

    explanation: "Since \\(Re\\propto v\\)."
},

{
    category: "Reynolds Number",

    type: "Effect of Viscosity",

    question: "A fluid's viscosity increases four times. How does Reynolds number change?",

    answer: "It becomes one-fourth.",

    explanation: "Since \\(Re\\propto\\frac1\\eta\\)."
},



// ==================================================
// VISCOSITY
// ==================================================

{
    category: "Viscosity",

    type: "Newton's Law of Viscosity",

    question: "Two parallel liquid layers have area \\(0.5m^2\\) and velocity difference \\(2m/s\\). The distance between them is \\(4mm\\). If viscosity is \\(0.02Pa\\cdot s\\), find viscous force.",

    answer: "\\(5N\\)",

    explanation: "Using \\(F=\\eta A\\frac{dv}{dx}\\)."
},

{
    category: "Viscosity",

    type: "Coefficient of Viscosity",

    question: "A force of \\(10N\\) acts between two fluid layers of area \\(2m^2\\). The velocity gradient is \\(5s^{-1}\\). Find viscosity.",

    answer: "\\(1Pa\\cdot s\\)",

    explanation: "Using \\(F=\\eta A\\frac{dv}{dx}\\)."
},

{
    category: "Viscosity",

    type: "Viscosity Unit Conversion",

    question: "Convert \\(5Pa\\cdot s\\) into poise.",

    answer: "\\(50\\) poise.",

    explanation: "Using \\(1Pa\\cdot s=10\\) poise."
},

{
    category: "Viscosity",

    type: "Dimension of Viscosity",

    question: "Find the dimensional formula of coefficient of viscosity.",

    answer: "\\([ML^{-1}T^{-1}]\\)",

    explanation: "Derived from \\(F=\\eta A\\frac{dv}{dx}\\)."
},

{
    category: "Viscosity",

    type: "Kinematic Viscosity",

    question: "A liquid has dynamic viscosity \\(2\\times10^{-3}Pa\\cdot s\\) and density \\(800kg/m^3\\). Find kinematic viscosity.",

    answer: "\\(2.5\\times10^{-6}m^2/s\\)",

    explanation: "Using \\(\\nu=\\frac{\\eta}{\\rho}\\)."
},

{
    category: "Viscosity",

    type: "Temperature Effect on Viscosity",

    question: "How does viscosity of liquids change with increase in temperature?",

    answer: "It decreases.",

    explanation: "Heating weakens intermolecular attraction in liquids."
},

{
    category: "Viscosity",

    type: "Temperature Effect on Gas",

    question: "How does viscosity of gases change with increase in temperature?",

    answer: "It increases.",

    explanation: "Higher molecular speed increases momentum transfer between layers."
},



// ==================================================
// VISCOUS FORCE COMPARISON
// ==================================================

{
    category: "Viscosity",

    type: "Compare Viscous Forces",

    question: "Two fluids have viscosities \\(\\eta\\) and \\(3\\eta\\). Under identical conditions compare viscous forces.",

    answer: "\\(1:3\\)",

    explanation: "Viscous force is directly proportional to viscosity."
},

{
    category: "Viscosity",

    type: "Effect of Area",

    question: "If the area of contact between fluid layers is doubled, how does viscous force change?",

    answer: "It becomes double.",

    explanation: "From \\(F=\\eta A\\frac{dv}{dx}\\)."
},

{
    category: "Viscosity",

    type: "Velocity Gradient",

    question: "If velocity difference between layers becomes three times while distance remains constant, what happens to viscous force?",

    answer: "It becomes three times.",

    explanation: "Viscous force is proportional to velocity gradient."
},

// ==================================================
// STOKES' LAW
// ==================================================

{
    category: "Stokes' Law",

    type: "Basic Stokes' Law",

    question: "A sphere of radius \\(1mm\\) moves through a liquid of viscosity \\(0.5Pa\\cdot s\\) with velocity \\(2m/s\\). Find the viscous drag.",

    answer: "\\(18.85\\times10^{-3}N\\)",

    explanation: "Using \\(F=6\\pi\\eta rv\\)."
},

{
    category: "Stokes' Law",

    type: "Find Velocity",

    question: "A sphere experiences a viscous force of \\(0.03N\\) in a liquid of viscosity \\(1Pa\\cdot s\\). If its radius is \\(2mm\\), find velocity.",

    answer: "\\(0.8m/s\\)",

    explanation: "Using \\(v=\\frac{F}{6\\pi\\eta r}\\)."
},

{
    category: "Stokes' Law",

    type: "Find Radius",

    question: "A sphere moving at \\(3m/s\\) experiences a drag force \\(0.02N\\) in a liquid of viscosity \\(0.5Pa\\cdot s\\). Find its radius.",

    answer: "\\(0.7mm\\) (approximately)",

    explanation: "Using \\(r=\\frac{F}{6\\pi\\eta v}\\)."
},

{
    category: "Stokes' Law",

    type: "Effect of Radius",

    question: "Two spheres move with the same velocity in the same liquid. Their radii are in ratio \\(1:3\\). Compare viscous forces.",

    answer: "\\(1:3\\)",

    explanation: "According to Stokes' law, \\(F\\propto r\\)."
},

{
    category: "Stokes' Law",

    type: "Effect of Velocity",

    question: "If velocity of a falling sphere becomes four times, how does viscous force change?",

    answer: "It becomes four times.",

    explanation: "Viscous force is directly proportional to velocity."
},



// ==================================================
// TERMINAL VELOCITY
// ==================================================

{
    category: "Terminal Velocity",

    type: "Basic Terminal Velocity",

    question: "A sphere of radius \\(1mm\\) and density \\(2500kg/m^3\\) falls through a liquid of density \\(1000kg/m^3\\). If viscosity is \\(0.5Pa\\cdot s\\), find terminal velocity.",

    answer: "\\(0.0013m/s\\)",

    explanation: "Using \\(v_t=\\frac{2r^2(\\rho-\\sigma)g}{9\\eta}\\)."
},

{
    category: "Terminal Velocity",

    type: "Find Viscosity from Terminal Velocity",

    question: "A sphere of radius \\(2mm\\) falls with terminal velocity \\(4\\times10^{-3}m/s\\). Its density difference with liquid is \\(500kg/m^3\\). Find viscosity.",

    answer: "\\(1.09Pa\\cdot s\\)",

    explanation: "Rearrange the terminal velocity equation."
},

{
    category: "Terminal Velocity",

    type: "Effect of Radius",

    question: "Two spheres of the same material have radii \\(r\\) and \\(2r\\). Compare their terminal velocities.",

    answer: "\\(1:4\\)",

    explanation: "Terminal velocity is proportional to square of radius."
},

{
    category: "Terminal Velocity",

    type: "Effect of Density",

    question: "A sphere with greater density is dropped in the same liquid. How does its terminal velocity change?",

    answer: "It increases.",

    explanation: "Terminal velocity depends on density difference."
},

{
    category: "Terminal Velocity",

    type: "Concept of Terminal Velocity",

    question: "Why does a falling sphere eventually move with constant velocity in a viscous liquid?",

    answer: "Because viscous force balances the effective weight of the sphere.",

    explanation: "Net force becomes zero after reaching terminal velocity."
},

{
    category: "Terminal Velocity",

    type: "Forces at Terminal Velocity",

    question: "At terminal velocity, what is the relation among weight, buoyant force and viscous force?",

    answer: "\\(Weight = Buoyant\\ force + Viscous\\ force\\)",

    explanation: "The resultant force becomes zero."
},



// ==================================================
// SURFACE TENSION
// ==================================================

{
    category: "Surface Tension",

    type: "Basic Surface Tension",

    question: "A force of \\(0.02N\\) acts along a wire of length \\(4cm\\). Find surface tension.",

    answer: "\\(0.5Nm^{-1}\\)",

    explanation: "Using \\(T=\\frac{F}{l}\\)."
},

{
    category: "Surface Tension",

    type: "Force on Soap Film",

    question: "A soap film has length \\(10cm\\) and surface tension \\(0.03Nm^{-1}\\). Find the force acting on the movable wire.",

    answer: "\\(6\\times10^{-3}N\\)",

    explanation: "Soap film has two surfaces, so \\(F=2Tl\\)."
},

{
    category: "Surface Tension",

    type: "Work Done Increasing Area",

    question: "The surface area of a liquid increases by \\(5cm^2\\). If surface tension is \\(0.04Nm^{-1}\\), find work done.",

    answer: "\\(2\\times10^{-5}J\\)",

    explanation: "Using \\(W=T\\Delta A\\)."
},

{
    category: "Surface Tension",

    type: "Surface Energy",

    question: "A liquid surface has area \\(0.2m^2\\) and surface tension \\(0.05Nm^{-1}\\). Find surface energy.",

    answer: "\\(0.01J\\)",

    explanation: "Using \\(E=TA\\)."
},

{
    category: "Surface Tension",

    type: "Temperature Effect",

    question: "Why does surface tension decrease when temperature increases?",

    answer: "Because intermolecular attraction becomes weaker.",

    explanation: "Higher temperature increases molecular motion."
},

{
    category: "Surface Tension",

    type: "Dimension of Surface Tension",

    question: "Find the dimensional formula of surface tension.",

    answer: "\\([MT^{-2}]\\)",

    explanation: "Surface tension is force per unit length."
},

// ==================================================
// COHESIVE & ADHESIVE FORCE
// ==================================================

{
    category: "Cohesion and Adhesion",

    type: "Cohesive Force Concept",

    question: "What is cohesive force? Give an example.",

    answer: "The force of attraction between molecules of the same substance. Example: attraction between water molecules.",

    explanation: "Cohesion is responsible for surface tension of liquids."
},

{
    category: "Cohesion and Adhesion",

    type: "Adhesive Force Concept",

    question: "What is adhesive force? Give an example.",

    answer: "The force of attraction between molecules of different substances. Example: attraction between water and glass.",

    explanation: "Adhesion determines wetting behaviour."
},

{
    category: "Cohesion and Adhesion",

    type: "Compare Cohesion and Adhesion",

    question: "Why does mercury form a convex meniscus in a glass tube?",

    answer: "Because cohesive force between mercury molecules is greater than adhesive force between mercury and glass.",

    explanation: "Greater cohesion pulls mercury molecules inward."
},

{
    category: "Cohesion and Adhesion",

    type: "Water Meniscus",

    question: "Why does water form a concave meniscus in a glass tube?",

    answer: "Because adhesive force between water and glass is greater than cohesive force between water molecules.",

    explanation: "Water molecules are attracted more strongly by glass."
},



// ==================================================
// ANGLE OF CONTACT
// ==================================================

{
    category: "Angle of Contact",

    type: "Basic Angle of Contact",

    question: "Define angle of contact.",

    answer: "The angle between the tangent to liquid surface and solid surface measured inside the liquid.",

    explanation: "It represents the wetting property of a liquid."
},

{
    category: "Angle of Contact",

    type: "Water Glass Contact Angle",

    question: "What is the approximate angle of contact between water and clean glass?",

    answer: "Less than \\(90^\\circ\\).",

    explanation: "Water wets glass due to strong adhesive force."
},

{
    category: "Angle of Contact",

    type: "Mercury Glass Contact Angle",

    question: "What is the approximate angle of contact between mercury and glass?",

    answer: "Greater than \\(90^\\circ\\).",

    explanation: "Mercury does not wet glass."
},

{
    category: "Angle of Contact",

    type: "Effect on Capillary Rise",

    question: "How does capillary rise change when angle of contact increases?",

    answer: "Capillary rise decreases.",

    explanation: "From \\(h=\\frac{2T\\cos\\theta}{\\rho gr}\\)."
},



// ==================================================
// CAPILLARY RISE
// ==================================================

{
    category: "Capillarity",

    type: "Basic Capillary Rise",

    question: "A capillary tube of radius \\(0.5mm\\) is dipped in water. If surface tension is \\(0.072Nm^{-1}\\), find capillary rise. Take angle of contact as zero.",

    answer: "\\(2.94cm\\)",

    explanation: "Using \\(h=\\frac{2T\\cos\\theta}{\\rho gr}\\)."
},

{
    category: "Capillarity",

    type: "Find Surface Tension",

    question: "A liquid rises \\(3cm\\) in a capillary tube of radius \\(0.4mm\\). Density is \\(800kg/m^3\\) and angle of contact is zero. Find surface tension.",

    answer: "\\(0.047Nm^{-1}\\)",

    explanation: "Using \\(T=\\frac{h\\rho gr}{2\\cos\\theta}\\)."
},

{
    category: "Capillarity",

    type: "Effect of Radius",

    question: "The radius of a capillary tube is doubled. How does capillary rise change?",

    answer: "It becomes half.",

    explanation: "Capillary rise is inversely proportional to radius."
},

{
    category: "Capillarity",

    type: "Effect of Surface Tension",

    question: "Two liquids have the same density and tube radius. Their surface tensions are in ratio \\(2:3\\). Compare capillary rises.",

    answer: "\\(2:3\\)",

    explanation: "Capillary rise is directly proportional to surface tension."
},

{
    category: "Capillarity",

    type: "Capillary Tube Comparison",

    question: "Two tubes have radii \\(r\\) and \\(3r\\). Compare the heights of liquid rise.",

    answer: "\\(3:1\\)",

    explanation: "Height is inversely proportional to radius."
},

{
    category: "Capillarity",

    type: "Concept of Trees",

    question: "How does capillary action help plants?",

    answer: "It helps transport water through narrow vessels of plants.",

    explanation: "Surface tension and adhesion assist upward movement."
},



// ==================================================
// EXCESS PRESSURE
// ==================================================

{
    category: "Excess Pressure",

    type: "Liquid Drop Pressure",

    question: "A liquid drop has radius \\(1mm\\) and surface tension \\(0.05Nm^{-1}\\). Find excess pressure inside it.",

    answer: "\\(100Pa\\)",

    explanation: "Using \\(\\Delta P=\\frac{2T}{r}\\)."
},

{
    category: "Excess Pressure",

    type: "Soap Bubble Pressure",

    question: "A soap bubble has radius \\(2mm\\) and surface tension \\(0.04Nm^{-1}\\). Find excess pressure.",

    answer: "\\(40Pa\\)",

    explanation: "Using \\(\\Delta P=\\frac{4T}{r}\\)."
},

{
    category: "Excess Pressure",

    type: "Compare Drop and Bubble",

    question: "Two spherical surfaces have the same radius and surface tension. Compare excess pressure inside a liquid drop and soap bubble.",

    answer: "\\(1:2\\)",

    explanation: "Bubble has two surfaces, so pressure is double."
},

{
    category: "Excess Pressure",

    type: "Find Radius from Pressure",

    question: "A liquid drop has excess pressure \\(200Pa\\) and surface tension \\(0.04Nm^{-1}\\). Find radius.",

    answer: "\\(0.4mm\\)",

    explanation: "Using \\(r=\\frac{2T}{\\Delta P}\\)."
},

{
    category: "Excess Pressure",

    type: "Effect of Radius",

    question: "If radius of a soap bubble is increased three times, how does excess pressure change?",

    answer: "It becomes one-third.",

    explanation: "Excess pressure is inversely proportional to radius."
},

{
    category: "Excess Pressure",

    type: "Why Small Drops Merge",

    question: "Why do small liquid drops combine to form larger drops?",

    answer: "The total surface area decreases, reducing surface energy.",

    explanation: "Liquids naturally tend to minimize surface energy."
},

// ==================================================
// MIXED CONCEPT PROBLEMS
// ==================================================

{
    category: "Mixed Problems",

    type: "Wire Extension Comparison",

    question: "Two wires A and B have equal lengths and are made of the same material. The radius of A is twice that of B. If equal forces are applied, compare their extensions.",

    answer: "\\(1:4\\)",

    explanation: "Using \\(\\Delta L=\\frac{FL}{AY}\\). Since area is proportional to radius squared, extension is inversely proportional to radius squared."
},

{
    category: "Mixed Problems",

    type: "Maximum Load Before Breaking",

    question: "A wire has breaking stress \\(5\\times10^8Pa\\) and cross-sectional area \\(2mm^2\\). Find the maximum load it can withstand.",

    answer: "\\(1000N\\)",

    explanation: "Using \\(Stress=\\frac{F}{A}\\), therefore \\(F=Stress\\times Area\\)."
},

{
    category: "Mixed Problems",

    type: "Elastic Limit Concept",

    question: "What happens when the stress applied to a wire exceeds its elastic limit?",

    answer: "The wire undergoes permanent deformation and does not regain its original shape.",

    explanation: "Elastic behaviour exists only within the elastic limit."
},

{
    category: "Mixed Problems",

    type: "Stress-Strain Curve",

    question: "In a stress-strain curve, what does the slope of the straight-line portion represent?",

    answer: "Young's modulus.",

    explanation: "Slope equals \\(\\frac{stress}{strain}\\)."
},

{
    category: "Mixed Problems",

    type: "Most Elastic Material",

    question: "Which material is considered more elastic: one with higher or lower Young's modulus?",

    answer: "Material with higher Young's modulus.",

    explanation: "Higher Young's modulus means greater resistance to deformation."
},

{
    category: "Mixed Problems",

    type: "Wire Energy and Extension",

    question: "A wire is stretched by a force F producing extension x. What happens to stored energy if force is doubled within elastic limit?",

    answer: "Energy becomes four times.",

    explanation: "Since \\(U=\\frac12Fx\\) and \\(x\\propto F\\), energy is proportional to \\(F^2\\)."
},



// ==================================================
// ELASTICITY + DIMENSIONAL PROBLEMS
// ==================================================

{
    category: "Mixed Problems",

    type: "Dimension of Young's Modulus",

    question: "Find the dimensional formula of Young's modulus.",

    answer: "\\([ML^{-1}T^{-2}]\\)",

    explanation: "Young's modulus has the dimension of stress."
},

{
    category: "Mixed Problems",

    type: "Dimension of Bulk Modulus",

    question: "Find the dimensional formula of bulk modulus.",

    answer: "\\([ML^{-1}T^{-2}]\\)",

    explanation: "Bulk modulus is pressure divided by strain."
},

{
    category: "Mixed Problems",

    type: "Dimension Comparison",

    question: "Compare the dimensions of pressure, stress, Young's modulus and bulk modulus.",

    answer: "All have the same dimensions \\([ML^{-1}T^{-2}]\\).",

    explanation: "All represent force per unit area."
},



// ==================================================
// FLUID + VISCOSITY PROBLEMS
// ==================================================

{
    category: "Mixed Problems",

    type: "Pipe Diameter Change",

    question: "Water flows through a pipe at \\(4m/s\\). If the diameter is reduced to half, find the new velocity.",

    answer: "\\(16m/s\\)",

    explanation: "Area becomes one-fourth, so velocity becomes four times."
},

{
    category: "Mixed Problems",

    type: "Reynolds Number Comparison",

    question: "Two pipes carry the same fluid. Their diameters are in ratio \\(2:3\\) and velocities are in ratio \\(3:2\\). Compare Reynolds numbers.",

    answer: "\\(1:1\\)",

    explanation: "Since \\(Re\\propto vd\\)."
},

{
    category: "Mixed Problems",

    type: "Viscosity and Temperature",

    question: "Why are lubricants generally chosen with suitable viscosity?",

    answer: "To reduce friction while maintaining proper lubrication between moving surfaces.",

    explanation: "Viscosity controls resistance to flow."
},

{
    category: "Mixed Problems",

    type: "Terminal Velocity Comparison",

    question: "Two spheres of same material have radii in ratio \\(2:3\\). Compare their terminal velocities.",

    answer: "\\(4:9\\)",

    explanation: "Terminal velocity is proportional to \\(r^2\\)."
},



// ==================================================
// SURFACE TENSION MIXED PROBLEMS
// ==================================================

{
    category: "Mixed Problems",

    type: "Needle Floating Concept",

    question: "Why can a carefully placed needle float on water surface?",

    answer: "Because surface tension provides an upward force supporting the needle.",

    explanation: "The surface behaves like a stretched membrane."
},

{
    category: "Mixed Problems",

    type: "Detergent Effect",

    question: "Why does detergent help in cleaning clothes?",

    answer: "It reduces surface tension and improves wetting of fabric.",

    explanation: "Lower surface tension allows water to spread more easily."
},

{
    category: "Mixed Problems",

    type: "Rain Drop Pressure",

    question: "Why is excess pressure inside a small rain drop greater than a large drop?",

    answer: "Because excess pressure is inversely proportional to radius.",

    explanation: "Using \\(\\Delta P=\\frac{2T}{r}\\)."
},

{
    category: "Mixed Problems",

    type: "Bubble Expansion",

    question: "A soap bubble expands while temperature remains constant. How does excess pressure change?",

    answer: "It decreases.",

    explanation: "Pressure difference is inversely proportional to radius."
},



// ==================================================
// ADVANCED ADMISSION PROBLEMS
// ==================================================

{
    category: "Advanced",

    type: "Equivalent Elastic Wire",

    question: "Two identical wires are connected in parallel. Compare their equivalent Young's modulus with a single wire.",

    answer: "Same Young's modulus, but double effective area.",

    explanation: "Material property remains unchanged while load capacity increases."
},

{
    category: "Advanced",

    type: "Wire Cut and Rejoined",

    question: "A wire is cut into two equal parts and the parts are connected in parallel. Compare the new extension with original extension.",

    answer: "\\(\\frac14\\) of original extension.",

    explanation: "Length becomes half and area becomes double, reducing extension by factor four."
},

{
    category: "Advanced",

    type: "Surface Energy Change",

    question: "A soap bubble's radius is doubled. Compare its surface energy before and after expansion.",

    answer: "\\(1:4\\)",

    explanation: "Surface energy is proportional to surface area."
},

{
    category: "Advanced",

    type: "Capillary Rise with Radius Change",

    question: "A capillary tube is replaced by another tube having radius three times larger. Compare capillary rise.",

    answer: "\\(3:1\\)",

    explanation: "Capillary rise is inversely proportional to radius."
},

{
    category: "Advanced",

    type: "Fluid Flow Transition",

    question: "A fluid flow changes from streamline to turbulent when velocity is increased. Explain why.",

    answer: "Because Reynolds number increases beyond the critical value.",

    explanation: "Reynolds number determines the nature of fluid flow."
},

{
    category: "Advanced",

    type: "Elastic Constant Limitation",

    question: "Why can Poisson's ratio not exceed 0.5 for stable isotropic materials?",

    answer: "Because it would imply physically impossible expansion behaviour under compression.",

    explanation: "The elastic constant relations impose this limit."
},

{
    category: "Advanced",

    type: "Terminal Velocity and Viscosity",

    question: "A sphere falls slower in glycerine than in water. Explain.",

    answer: "Because glycerine has higher viscosity, producing greater viscous resistance.",

    explanation: "Terminal velocity decreases as viscosity increases."
},

{
    category: "Advanced",

    type: "Combined Capillary and Surface Tension",

    question: "If surface tension of a liquid becomes half while other conditions remain unchanged, what happens to capillary rise?",

    answer: "Capillary rise becomes half.",

    explanation: "Since \\(h\\propto T\\)."
},

// ==================================================
// ADVANCED ELASTICITY PROBLEMS
// ==================================================


{
    category: "Advanced Elasticity",

    type: "Stress-Strain Curve Slope",

    question: "A stress-strain curve has a straight-line region where stress increases from \\(2\\times10^7Pa\\) to \\(8\\times10^7Pa\\) while strain changes from \\(1\\times10^{-4}\\) to \\(4\\times10^{-4}\\). Find Young's modulus.",

    answer: "\\(2\\times10^{11}Pa\\)",

    explanation: "Young's modulus equals slope of stress-strain curve: \\(Y=\\frac{\\Delta stress}{\\Delta strain}\\)."
},

{
    category: "Advanced Elasticity",

    type: "Energy from Stress-Strain Curve",

    question: "A wire is stretched up to strain \\(5\\times10^{-4}\\). If Young's modulus is \\(2\\times10^{11}Pa\\), find elastic energy density.",

    answer: "\\(2.5\\times10^4J/m^3\\)",

    explanation: "Using \\(u=\\frac12Y\\epsilon^2\\)."
},


{
    category: "Advanced Elasticity",

    type: "Breaking Load",

    question: "A wire of diameter \\(2mm\\) breaks at stress \\(4\\times10^8Pa\\). Find the breaking load.",

    answer: "\\(1256N\\)",

    explanation: "Using \\(F=stress\\times area\\)."
},



// ==================================================
// WIRES IN SERIES AND PARALLEL
// ==================================================

{
    category: "Wire Combination",

    type: "Two Wires in Series",

    question: "Two wires of lengths \\(L_1,L_2\\), areas \\(A_1,A_2\\), and Young's moduli \\(Y_1,Y_2\\) are connected in series. Find total extension.",

    answer: "\\(\\Delta L=\\frac{FL_1}{A_1Y_1}+\\frac{FL_2}{A_2Y_2}\\)",

    explanation: "Extension of each wire is added."
},


{
    category: "Wire Combination",

    type: "Equal Wires in Series",

    question: "Two identical wires are joined in series. Compare extension with a single wire of same material and total length.",

    answer: "Same extension.",

    explanation: "Doubling length doubles extension while force remains unchanged."
},


{
    category: "Wire Combination",

    type: "Equal Wires in Parallel",

    question: "Two identical wires are connected in parallel. Compare extension with a single wire.",

    answer: "Extension becomes half.",

    explanation: "Effective area doubles."
},


{
    category: "Wire Combination",

    type: "Different Material Series",

    question: "Two wires of equal length and area but Young's moduli Y and 2Y are connected in series. Compare their extensions.",

    answer: "\\(2:1\\)",

    explanation: "Extension is inversely proportional to Young's modulus."
},



// ==================================================
// THERMAL STRESS
// ==================================================

{
    category: "Thermal Stress",

    type: "Prevented Expansion",

    question: "A steel rod of length \\(2m\\) is heated by \\(50^\\circ C\\). If expansion is prevented, find thermal stress. Take \\(Y=2\\times10^{11}Pa\\), \\(\\alpha=12\\times10^{-6}/^\\circ C\\).",

    answer: "\\(1.2\\times10^8Pa\\)",

    explanation: "Using \\(Stress=Y\\alpha\\Delta T\\)."
},

{
    category: "Thermal Stress",

    type: "Thermal Force",

    question: "A rod of area \\(5mm^2\\) develops thermal stress \\(10^8Pa\\). Find the force produced.",

    answer: "\\(500N\\)",

    explanation: "Using \\(F=Stress\\times A\\)."
},



// ==================================================
// ADVANCED SURFACE ENERGY
// ==================================================

{
    category: "Surface Energy",

    type: "Drop Divided into Small Drops",

    question: "A liquid drop of radius R is divided into 8 equal drops. Compare the total surface areas before and after division.",

    answer: "\\(1:2\\)",

    explanation: "New radius becomes \\(R/2\\), total area becomes double."
},

{
    category: "Surface Energy",

    type: "Increase in Surface Energy",

    question: "A drop of radius \\(R\\) is divided into n identical droplets. Find increase in surface area.",

    answer: "\\(4\\pi R^2(n^{1/3}-1)\\)",

    explanation: "Total new surface area is calculated using conservation of volume."
},

{
    category: "Surface Energy",

    type: "Merging Drops",

    question: "Two identical drops merge to form one larger drop. What happens to surface energy?",

    answer: "Surface energy decreases.",

    explanation: "Total surface area decreases after merging."
},



// ==================================================
// ADVANCED CAPILLARITY
// ==================================================

{
    category: "Advanced Capillarity",

    type: "Radius Ratio from Rise",

    question: "A liquid rises 8cm in one capillary tube and 4cm in another. Find ratio of their radii.",

    answer: "\\(1:2\\)",

    explanation: "Since \\(h\\propto\\frac1r\\)."
},

{
    category: "Advanced Capillarity",

    type: "Surface Tension Comparison",

    question: "Two liquids rise to equal heights in capillary tubes of radii R and 2R. Compare their surface tensions.",

    answer: "\\(1:2\\)",

    explanation: "Since \\(T\\propto rh\\)."
},



// ==================================================
// ADVANCED STOKES LAW
// ==================================================

{
    category: "Advanced Stokes Law",

    type: "Terminal Velocity Ratio",

    question: "Two spheres have radii ratio 2:3 and density differences ratio 3:2 in the same liquid. Compare terminal velocities.",

    answer: "\\(4:9\\times3:2=2:3\\)",

    explanation: "Using \\(v_t\\propto r^2(\\rho-\\sigma)\\)."
},

{
    category: "Advanced Stokes Law",

    type: "Viscosity Comparison",

    question: "Two identical spheres fall through liquids having viscosities \\(\\eta\\) and \\(4\\eta\\). Compare terminal velocities.",

    answer: "\\(4:1\\)",

    explanation: "Terminal velocity is inversely proportional to viscosity."
},



// ==================================================
// DIMENSIONAL ANALYSIS
// ==================================================

{
    category: "Dimensional Analysis",

    type: "Check Surface Tension Formula",

    question: "Verify dimensionally whether \\(T=\\frac{Force}{Length}\\) is correct.",

    answer: "Correct.",

    explanation: "Force/length gives \\([MLT^{-2}]/L=[MT^{-2}]\\), the dimension of surface tension."
},

{
    category: "Dimensional Analysis",

    type: "Dimension of Viscous Coefficient",

    question: "Find dimension of viscosity using Newton's law of viscosity.",

    answer: "\\([ML^{-1}T^{-1}]\\)",

    explanation: "Derived from \\(F=\\eta A\\frac{dv}{dx}\\)."
},

{
    category: "Dimensional Analysis",

    type: "Dimension of Elastic Energy Density",

    question: "Find dimension of elastic energy density.",

    answer: "\\([ML^{-1}T^{-2}]\\)",

    explanation: "Energy per unit volume has dimension of pressure."
}

]

};