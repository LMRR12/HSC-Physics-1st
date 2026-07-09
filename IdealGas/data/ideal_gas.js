// ==========================================
// Physics Practice Book
// Chapter 10 : Ideal Gas
// data/ideal_gas.js
// ==========================================

const chapterData = {

    title: "Chapter 10 : Ideal Gas",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [

        // ==================================================
// IDEAL GAS & GAS LAWS
// ==================================================

{
    category:"Ideal Gas",

    title:"Ideal Gas Equation",

    formula:"PV=nRT",

    description:"Equation relating pressure, volume, temperature and number of moles of an ideal gas."
},

{
    category:"Ideal Gas",

    title:"Gas Constant",

    formula:"R=8.314\\;Jmol^{-1}K^{-1}",

    description:"Universal gas constant."
},

{
    category:"Ideal Gas",

    title:"Gas Constant in CGS",

    formula:"R=8.31\\times10^7\\;erg\\,mol^{-1}K^{-1}",

    description:"Value of gas constant in CGS system."
},



// ==================================================
// BOYLE'S LAW
// ==================================================

{
    category:"Boyle's Law",

    title:"Boyle's Law",

    formula:"PV=constant",

    description:"At constant temperature, pressure is inversely proportional to volume."
},

{
    category:"Boyle's Law",

    title:"Relation Between Two States",

    formula:"P_1V_1=P_2V_2",

    description:"Pressure-volume relation at constant temperature."
},



// ==================================================
// CHARLES' LAW
// ==================================================

{
    category:"Charles Law",

    title:"Charles Law",

    formula:"\\frac VT=constant",

    description:"At constant pressure, volume is directly proportional to absolute temperature."
},

{
    category:"Charles Law",

    title:"Two State Relation",

    formula:"\\frac{V_1}{T_1}=\\frac{V_2}{T_2}",

    description:"Volume-temperature relation."
},



// ==================================================
// GAY LUSSAC LAW
// ==================================================

{
    category:"Gay Lussac Law",

    title:"Pressure Law",

    formula:"\\frac PT=constant",

    description:"At constant volume, pressure is directly proportional to absolute temperature."
},

{
    category:"Gay Lussac Law",

    title:"Two State Relation",

    formula:"\\frac{P_1}{T_1}=\\frac{P_2}{T_2}",

    description:"Pressure-temperature relation."
},



// ==================================================
// AVOGADRO'S LAW
// ==================================================

{
    category:"Avogadro Law",

    title:"Avogadro Law",

    formula:"V\\propto n",

    description:"Equal volumes of gases at same temperature and pressure contain equal number of molecules."
},

{
    category:"Avogadro Law",

    title:"Molar Volume",

    formula:"V_m=\\frac Vn",

    description:"Volume occupied by one mole of gas."
},



// ==================================================
// COMBINED GAS LAW
// ==================================================

{
    category:"Gas Laws",

    title:"Combined Gas Equation",

    formula:"\\frac{PV}{T}=constant",

    description:"Combination of Boyle's, Charles' and Gay-Lussac's laws."
},

{
    category:"Gas Laws",

    title:"General Gas Relation",

    formula:"\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}",

    description:"Relation between two different states."
},



// ==================================================
// DENSITY OF GAS
// ==================================================

{
    category:"Gas Density",

    title:"Density Relation",

    formula:"\\rho=\\frac{PM}{RT}",

    description:"Density of an ideal gas in terms of pressure and temperature."
},

{
    category:"Gas Density",

    title:"Molar Mass",

    formula:"M=\\frac{\\rho RT}{P}",

    description:"Determination of molar mass from density."
},

{
    category:"Gas Density",

    title:"Density Variation with Temperature",

    formula:"\\rho\\propto\\frac1T",

    description:"Density decreases when temperature increases at constant pressure."
},

{
    category:"Gas Density",

    title:"Density Variation with Pressure",

    formula:"\\rho\\propto P",

    description:"Density increases with pressure at constant temperature."
},



// ==================================================
// MOLECULAR KINETIC THEORY
// ==================================================

{
    category:"Kinetic Theory",

    title:"Number of Molecules",

    formula:"N=nN_A",

    description:"Number of molecules in n moles."
},

{
    category:"Kinetic Theory",

    title:"Avogadro Number",

    formula:"N_A=6.022\\times10^{23}mol^{-1}",

    description:"Number of molecules in one mole."
},

{
    category:"Kinetic Theory",

    title:"Molecular Mass",

    formula:"m=\\frac MN_A",

    description:"Mass of one molecule."
},

{
    category:"Kinetic Theory",

    title:"Molecular Concentration",

    formula:"n_0=\\frac NV",

    description:"Number of molecules per unit volume."
},

// ==================================================
// PRESSURE OF PERFECT GAS
// ==================================================

{
    category:"Kinetic Theory",

    title:"Pressure Equation of Gas",

    formula:"P=\\frac13\\rho c^2",

    description:"Pressure of an ideal gas in terms of density and mean square velocity."
},

{
    category:"Kinetic Theory",

    title:"Molecular Pressure Equation",

    formula:"P=\\frac13\\frac{Nm}{V}c^2",

    description:"Pressure expressed using number and mass of molecules."
},

{
    category:"Kinetic Theory",

    title:"Gas Pressure Relation",

    formula:"PV=\\frac13Nm c^2",

    description:"Fundamental equation from kinetic theory."
},

{
    category:"Kinetic Theory",

    title:"Mean Square Velocity",

    formula:"c^2=\\frac{3PV}{Nm}",

    description:"Mean square velocity obtained from pressure equation."
},



// ==================================================
// MOLECULAR VELOCITIES
// ==================================================

{
    category:"Molecular Velocity",

    title:"Root Mean Square Velocity",

    formula:"c_{rms}=\\sqrt{\\frac{3RT}{M}}",

    description:"Root mean square speed of gas molecules."
},

{
    category:"Molecular Velocity",

    title:"RMS Velocity Using Boltzmann Constant",

    formula:"c_{rms}=\\sqrt{\\frac{3kT}{m}}",

    description:"RMS velocity using molecular mass."
},

{
    category:"Molecular Velocity",

    title:"Mean Square Velocity",

    formula:"\\bar{c^2}=\\frac{3RT}{M}",

    description:"Average of squares of molecular velocities."
},

{
    category:"Molecular Velocity",

    title:"Average Velocity",

    formula:"\\bar c=\\sqrt{\\frac{8RT}{\\pi M}}",

    description:"Mean velocity of gas molecules."
},

{
    category:"Molecular Velocity",

    title:"Most Probable Velocity",

    formula:"c_p=\\sqrt{\\frac{2RT}{M}}",

    description:"Velocity possessed by maximum number of molecules."
},



// ==================================================
// RELATION BETWEEN VELOCITIES
// ==================================================

{
    category:"Molecular Velocity",

    title:"Velocity Relation",

    formula:"c_p<\\bar c<c_{rms}",

    description:"Order of molecular velocities."
},

{
    category:"Molecular Velocity",

    title:"RMS and Most Probable Relation",

    formula:"c_{rms}=\\sqrt{\\frac32}c_p",

    description:"Relation between RMS and most probable velocity."
},

{
    category:"Molecular Velocity",

    title:"Mean and RMS Relation",

    formula:"c_{rms}=\\sqrt{\\frac98\\pi}\\bar c",

    description:"Relation between RMS and average velocity."
},



// ==================================================
// KINETIC ENERGY OF GAS
// ==================================================

{
    category:"Kinetic Theory",

    title:"Average Kinetic Energy",

    formula:"E=\\frac32kT",

    description:"Average kinetic energy of one molecule."
},

{
    category:"Kinetic Theory",

    title:"Total Kinetic Energy",

    formula:"E=\\frac32nRT",

    description:"Total translational kinetic energy of n moles."
},

{
    category:"Kinetic Theory",

    title:"Temperature Relation",

    formula:"E\\propto T",

    description:"Average kinetic energy depends only on absolute temperature."
},

{
    category:"Kinetic Theory",

    title:"Boltzmann Constant",

    formula:"k=\\frac RN_A",

    description:"Relation between gas constant and Boltzmann constant."
},



// ==================================================
// MEAN FREE PATH
// ==================================================

{
    category:"Mean Free Path",

    title:"Mean Free Path",

    formula:"\\lambda=\\frac{\\text{Total distance travelled}}{\\text{Number of collisions}}",

    description:"Average distance travelled by a molecule between collisions."
},

{
    category:"Mean Free Path",

    title:"Maxwell Mean Free Path",

    formula:"\\lambda=\\frac1{\\sqrt2\\pi d^2 n}",

    description:"Mean free path in terms of molecular diameter and concentration."
},

{
    category:"Mean Free Path",

    title:"Using Pressure",

    formula:"\\lambda=\\frac{kT}{\\sqrt2\\pi d^2P}",

    description:"Mean free path expressed using pressure and temperature."
},


{
    category:"Mean Free Path",

    title:"Clausius Mean Free Path",

    formula:"\\lambda=\\frac{3}{4n\\pi d^2}\ ",

    description:"Clausius expression for average distance between molecular collisions."
},

{
    category:"Mean Free Path",

    title:"Boltzmann Mean Free Path",

    formula:"\\lambda=\\frac1{\\pi d^2 n}",

    description:"Expression obtained using molecular kinetic theory."
},

{
    category:"Mean Free Path",

    title:"Effect of Pressure",

    formula:"\\lambda\\propto\\frac1P",

    description:"Mean free path decreases as pressure increases."
},

{
    category:"Mean Free Path",

    title:"Effect of Temperature",

    formula:"\\lambda\\propto T",

    description:"Mean free path increases with temperature at constant pressure."
},

{
    category:"Mean Free Path",

    title:"Collision Frequency",

    formula:"Z=\\frac{\\bar c}{\\lambda}",

    description:"Number of collisions per second."
},

// ==================================================
// DEGREE OF FREEDOM
// ==================================================

{
    category:"Degree of Freedom",

    title:"Degree of Freedom",

    formula:"f=\\text{Number of independent modes of motion}",

    description:"Number of independent coordinates required to describe molecular motion."
},

{
    category:"Degree of Freedom",

    title:"Monatomic Gas",

    formula:"f=3",

    description:"Three translational degrees of freedom."
},

{
    category:"Degree of Freedom",

    title:"Diatomic Gas",

    formula:"f=5",

    description:"Three translational and two rotational degrees of freedom at ordinary temperature."
},

{
    category:"Degree of Freedom",

    title:"Polyatomic Gas",

    formula:"f=6",

    description:"Three translational and three rotational degrees of freedom."
},



// ==================================================
// EQUIPARTITION OF ENERGY
// ==================================================

{
    category:"Equipartition Energy",

    title:"Energy Per Degree of Freedom",

    formula:"E=\\frac12kT",

    description:"Each independent degree of freedom contributes equal energy."
},

{
    category:"Equipartition Energy",

    title:"Total Energy of Molecule",

    formula:"E=\\frac f2kT",

    description:"Average energy of one molecule with f degrees of freedom."
},

{
    category:"Equipartition Energy",

    title:"Total Energy of n Moles",

    formula:"E=\\frac f2nRT",

    description:"Energy of n moles of ideal gas."
},

{
    category:"Equipartition Energy",

    title:"Internal Energy",

    formula:"U=\\frac f2nRT",

    description:"Internal energy of ideal gas."
},



// ==================================================
// SPECIFIC HEAT OF GAS
// ==================================================

{
    category:"Specific Heat",

    title:"Molar Specific Heat at Constant Volume",

    formula:"C_v=\\frac f2R",

    description:"Specific heat when volume remains constant."
},

{
    category:"Specific Heat",

    title:"Molar Specific Heat at Constant Pressure",

    formula:"C_p=C_v+R",

    description:"Relation between two molar specific heats."
},

{
    category:"Specific Heat",

    title:"Ratio of Specific Heats",

    formula:"\\gamma=\\frac{C_p}{C_v}",

    description:"Adiabatic index of gas."
},

{
    category:"Specific Heat",

    title:"Gamma in Terms of Degree of Freedom",

    formula:"\\gamma=\\frac{f+2}{f}",

    description:"Relation between gamma and degrees of freedom."
},



// ==================================================
// VAPOUR & GAS
// ==================================================

{
    category:"Vapour",

    title:"Gas",

    formula:"Gas\\;exists\\;above\\;critical\\;temperature",

    description:"A gas cannot be liquefied only by increasing pressure above critical temperature."
},

{
    category:"Vapour",

    title:"Vapour",

    formula:"Vapour\\;exists\\;below\\;critical\\;temperature",

    description:"A vapour can be converted into liquid by pressure."
},



// ==================================================
// VAPOUR PRESSURE
// ==================================================

{
    category:"Vapour Pressure",

    title:"Saturated Vapour",

    formula:"P=P_s",

    description:"Vapour pressure remains constant at equilibrium."
},

{
    category:"Vapour Pressure",

    title:"Unsaturated Vapour",

    formula:"\ P&lt;P_s\ ",

    description:"Vapour pressure is less than saturated vapour pressure."
},

{
    category:"Vapour Pressure",

    title:"Saturated Vapour Pressure Relation",

    formula:"P_s=f(T)",

    description:"Saturated vapour pressure depends only on temperature."
},

{
    category:"Vapour Pressure",

    title:"Increase of Temperature",

    formula:"T\\uparrow\\Rightarrow P_s\\uparrow",

    description:"Saturated vapour pressure increases with temperature."
},



// ==================================================
// HUMIDITY
// ==================================================

{
    category:"Humidity",

    title:"Absolute Humidity",

    formula:"AH=\\frac{m}{V}",

    description:"Mass of water vapour present per unit volume of air."
},

{
    category:"Humidity",

    title:"Relative Humidity",

    formula:"RH=\\frac{p}{p_s}\\times100",

    description:"Ratio of actual vapour pressure to saturated vapour pressure."
},

{
    category:"Humidity",

    title:"Relative Humidity Using Density",

    formula:"RH=\\frac{\\rho}{\\rho_s}\\times100",

    description:"Relative humidity expressed using vapour densities."
},

{
    category:"Humidity",

    title:"Dry and Wet Bulb Relation",

    formula:"RH=f(T_d,T_w)",

    description:"Humidity can be determined from dry bulb and wet bulb temperatures."
},



// ==================================================
// DEW POINT
// ==================================================

{
    category:"Dew Point",

    title:"Dew Point Definition",

    formula:"RH=100\\%",

    description:"Temperature at which air becomes saturated and dew forms."
},

{
    category:"Dew Point",

    title:"Dew Formation Condition",

    formula:"Actual\\ vapour\\ pressure=Saturated\\ vapour\\ pressure",

    description:"Dew forms when both pressures become equal."
},

// ==================================================
// HYGROMETER
// ==================================================

{
    category:"Hygrometer",

    title:"Hygrometer Principle",

    formula:"RH=\\frac{Actual\\ Vapour\\ Pressure}{Saturated\\ Vapour\\ Pressure}\\times100",

    description:"Hygrometers measure humidity using vapour pressure relation."
},

{
    category:"Hygrometer",

    title:"Dew Point Hygrometer",

    formula:"RH=\\frac{p_d}{p_s}\\times100",

    description:"Relative humidity determined using dew point temperature."
},

{
    category:"Hygrometer",

    title:"Wet and Dry Bulb Hygrometer",

    formula:"RH=100\\times\\frac{p_w-e}{p_s-e_w}",

    description:"Humidity determined from dry bulb and wet bulb readings."
},

{
    category:"Hygrometer",

    title:"Humidity Difference",

    formula:"\\Delta T=T_d-T_w",

    description:"Difference between dry bulb and wet bulb temperatures."
},



// ==================================================
// GLAISHER EQUATION
// ==================================================

{
    category:"Glaisher Equation",

    title:"Glaisher Formula",

    formula:"RH=100\\left(1-\\frac{T_d-T_w}{C}\\right)",

    description:"Approximate relation between relative humidity and wet-dry bulb temperature difference."
},

{
    category:"Glaisher Equation",

    title:"Humidity from Depression",

    formula:"RH=100-k(T_d-T_w)",

    description:"Relative humidity decreases as wet bulb depression increases."
},



// ==================================================
// GAS MIXTURE & AIR PRESSURE
// ==================================================

{
    category:"Gas Pressure",

    title:"Dalton's Law",

    formula:"P=P_1+P_2+P_3+...",

    description:"Total pressure of mixture of non-reacting gases."
},

{
    category:"Gas Pressure",

    title:"Partial Pressure",

    formula:"P_i=\\frac{n_iRT}{V}",

    description:"Pressure contributed by individual gas component."
},

{
    category:"Gas Pressure",

    title:"Dry Air Pressure",

    formula:"P_{air}=P_{total}-P_v",

    description:"Pressure of dry air after subtracting vapour pressure."
},



// ==================================================
// CLAUSIUS-CLAPEYRON RELATION
// ==================================================

{
    category:"Vapour",

    title:"Clausius-Clapeyron Equation",

    formula:"\\ln\\frac{P_2}{P_1}=\\frac{L}{R}\\left(\\frac1{T_1}-\\frac1{T_2}\\right)",

    description:"Relation between vapour pressure and temperature."
},

{
    category:"Vapour",

    title:"Approximate Vapour Relation",

    formula:"\\frac{dP}{dT}=\\frac{L}{T(V_2-V_1)}",

    description:"Rate of change of vapour pressure with temperature."
},



// ==================================================
// IMPORTANT RESULTS
// ==================================================

{
    category:"Important Results",

    title:"Molecular Speed and Temperature",

    formula:"v\\propto\\sqrt T",

    description:"Molecular velocity increases with absolute temperature."
},

{
    category:"Important Results",

    title:"Pressure and Temperature",

    formula:"P\\propto T",

    description:"For fixed volume ideal gas."
},

{
    category:"Important Results",

    title:"Volume and Temperature",

    formula:"V\\propto T",

    description:"For fixed pressure ideal gas."
},

{
    category:"Important Results",

    title:"Pressure and Volume",

    formula:"P\\propto\\frac1V",

    description:"For fixed temperature ideal gas."
},

{
    category:"Important Results",

    title:"Mean Free Path",

    formula:"\\lambda\\propto\\frac{T}{P}",

    description:"Mean free path increases with temperature and decreases with pressure."
},

{
    category:"Important Results",

    title:"Internal Energy",

    formula:"U\\propto T",

    description:"Internal energy of ideal gas depends only on temperature."
},

{
    category:"Important Results",

    title:"Density",

    formula:"\\rho\\propto\\frac PT",

    description:"Gas density depends on pressure and temperature."
}

    ],

    problems: [

        // ==================================================
// GAS LAW PROBLEMS
// ==================================================

{
    category:"Boyle's Law",

    type:"Pressure Change",

    question:"A gas occupies 4 L volume at 2 atm pressure. If temperature remains constant, find its volume at 8 atm pressure.",

    answer:"\\(1\\;L\\)",

    explanation:"Using \\(P_1V_1=P_2V_2\\)."
},

{
    category:"Boyle's Law",

    type:"Finding Pressure",

    question:"A gas occupies 500 cm³ at pressure 760 mmHg. What will be the pressure if volume becomes 200 cm³?",

    answer:"\\(1900\\;mmHg\\)",

    explanation:"Using Boyle's law."
},

{
    category:"Boyle's Law",

    type:"Inverse Relation",

    question:"If the volume of a gas is doubled at constant temperature, what happens to pressure?",

    answer:"Pressure becomes half.",

    explanation:"Pressure is inversely proportional to volume."
},



// ==================================================
// CHARLES LAW PROBLEMS
// ==================================================

{
    category:"Charles Law",

    type:"Volume Change",

    question:"A gas occupies 300 cm³ at 27°C. Find its volume at 127°C at constant pressure.",

    answer:"\\(400\\;cm^3\\)",

    explanation:"Convert temperature into Kelvin and use \\(V/T=constant\\)."
},

{
    category:"Charles Law",

    type:"Finding Temperature",

    question:"A gas volume changes from 500 cm³ to 600 cm³. Initial temperature is 300 K. Find final temperature.",

    answer:"\\(360\\;K\\)",

    explanation:"Using Charles' law."
},



// ==================================================
// GAY LUSSAC LAW PROBLEMS
// ==================================================

{
    category:"Gay Lussac Law",

    type:"Pressure Variation",

    question:"A gas has pressure 1 atm at 300 K. Find pressure at 600 K if volume remains constant.",

    answer:"\\(2\\;atm\\)",

    explanation:"Pressure is directly proportional to absolute temperature."
},

{
    category:"Gay Lussac Law",

    type:"Temperature Change",

    question:"Pressure of a gas increases from 100 kPa to 150 kPa. Initial temperature was 300 K. Find final temperature.",

    answer:"\\(450\\;K\\)",

    explanation:"Using \\(P_1/T_1=P_2/T_2\\)."
},



// ==================================================
// AVOGADRO LAW PROBLEMS
// ==================================================

{
    category:"Avogadro Law",

    type:"Mole and Volume Relation",

    question:"If 2 moles of gas occupy 10 L, what volume will be occupied by 5 moles at same temperature and pressure?",

    answer:"\\(25\\;L\\)",

    explanation:"Volume is directly proportional to number of moles."
},

{
    category:"Avogadro Law",

    type:"Molecules Calculation",

    question:"How many molecules are present in 0.5 mole of gas?",

    answer:"\\(3.011\\times10^{23}\\)",

    explanation:"Using \\(N=nN_A\\)."
},



// ==================================================
// COMBINED GAS LAW
// ==================================================

{
    category:"Combined Gas Law",

    type:"Three Variable Change",

    question:"A gas occupies 2 L at 300 K and 1 atm. Find its volume at 600 K and 2 atm.",

    answer:"\\(2\\;L\\)",

    explanation:"Using \\(\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}\\)."
},

{
    category:"Combined Gas Law",

    type:"Unknown Pressure",

    question:"A gas volume changes from 5 L to 3 L and temperature changes from 300 K to 270 K. Find final pressure if initial pressure was 2 atm.",

    answer:"\\(3\\;atm\\)",

    explanation:"Using combined gas equation."
},



// ==================================================
// IDEAL GAS EQUATION
// ==================================================

{
    category:"Ideal Gas",

    type:"Finding Number of Moles",

    question:"Find the number of moles of a gas occupying 22.4 L at STP.",

    answer:"\\(1\\;mole\\)",

    explanation:"Using \\(PV=nRT\\)."
},

{
    category:"Ideal Gas",

    type:"Finding Volume",

    question:"Find the volume occupied by 2 moles of ideal gas at 300 K and 1 atm pressure.",

    answer:"\\(49.2\\;L\\)",

    explanation:"Using ideal gas equation."
},

{
    category:"Ideal Gas",

    type:"Finding Pressure",

    question:"A 5 mole gas occupies 10 m³ at 300 K. Find pressure.",

    answer:"\\(1247\\;Pa\\)",

    explanation:"Using \\(P=nRT/V\\)."
},

// ==================================================
// GAS DENSITY PROBLEMS
// ==================================================

{
    category:"Gas Density",

    type:"Finding Density",

    question:"Find the density of oxygen gas at pressure \\(1.01\\times10^5\\;Pa\\) and temperature 300 K. Molar mass of oxygen is \\(0.032\\;kg/mol\\).",

    answer:"\\(1.29\\;kg/m^3\\)",

    explanation:"Using \\(\\rho=\\frac{PM}{RT}\\)."
},

{
    category:"Gas Density",

    type:"Finding Molar Mass",

    question:"A gas has density \\(2\\;kg/m^3\\) at pressure \\(10^5\\;Pa\\) and temperature 300 K. Find its molar mass.",

    answer:"\\(0.0499\\;kg/mol\\)",

    explanation:"Using \\(M=\\frac{\\rho RT}{P}\\)."
},

{
    category:"Gas Density",

    type:"Density Change with Temperature",

    question:"The temperature of a gas is increased from 300 K to 600 K at constant pressure. Compare densities.",

    answer:"\\(\\rho_2=\\frac12\\rho_1\\)",

    explanation:"Density is inversely proportional to temperature."
},

{
    category:"Gas Density",

    type:"Density Change with Pressure",

    question:"Pressure of a gas is increased three times at constant temperature. Find the change in density.",

    answer:"Density becomes three times.",

    explanation:"Density is directly proportional to pressure."
},



// ==================================================
// KINETIC THEORY PRESSURE PROBLEMS
// ==================================================

{
    category:"Kinetic Theory",

    type:"Finding Pressure",

    question:"A gas has density \\(1.5\\;kg/m^3\\) and RMS velocity \\(400\\;m/s\\). Find pressure.",

    answer:"\\(8.0\\times10^4\\;Pa\\)",

    explanation:"Using \\(P=\\frac13\\rho c_{rms}^2\\)."
},

{
    category:"Kinetic Theory",

    type:"Finding RMS Velocity",

    question:"The pressure of a gas is \\(1.2\\times10^5\\;Pa\\) and density is \\(1.8\\;kg/m^3\\). Find RMS velocity.",

    answer:"\\(447\\;m/s\\)",

    explanation:"Using \\(c_{rms}=\\sqrt{\\frac{3P}{\\rho}}\\)."
},

{
    category:"Kinetic Theory",

    type:"Pressure and Molecular Energy",

    question:"Show that gas pressure is proportional to molecular kinetic energy.",

    answer:"\\(PV=\\frac23E\\)",

    explanation:"From kinetic theory equation."
},



// ==================================================
// MOLECULAR VELOCITY PROBLEMS
// ==================================================

{
    category:"Molecular Velocity",

    type:"RMS Velocity",

    question:"Find RMS velocity of oxygen molecules at 300 K. Molar mass is 0.032 kg/mol.",

    answer:"\\(484\\;m/s\\)",

    explanation:"Using \\(c_{rms}=\\sqrt{\\frac{3RT}{M}}\\)."
},

{
    category:"Molecular Velocity",

    type:"Effect of Temperature",

    question:"The temperature of gas increases from 300 K to 1200 K. How does RMS velocity change?",

    answer:"Becomes twice.",

    explanation:"Velocity is proportional to square root of temperature."
},

{
    category:"Molecular Velocity",

    type:"Effect of Molecular Mass",

    question:"Two gases are at the same temperature. Their molar masses are in ratio 4:1. Find RMS velocity ratio.",

    answer:"\\(1:2\\)",

    explanation:"Velocity is inversely proportional to square root of molar mass."
},

{
    category:"Molecular Velocity",

    type:"Most Probable Velocity",

    question:"Find the most probable velocity of nitrogen molecules at temperature T.",

    answer:"\\(c_p=\\sqrt{\\frac{2RT}{M}}\\)",

    explanation:"Using Maxwell distribution."
},



// ==================================================
// KINETIC ENERGY PROBLEMS
// ==================================================

{
    category:"Kinetic Theory",

    type:"Energy of One Molecule",

    question:"Find average kinetic energy of one molecule at 300 K.",

    answer:"\\(6.21\\times10^{-21}\\;J\\)",

    explanation:"Using \\(E=\\frac32kT\\)."
},

{
    category:"Kinetic Theory",

    type:"Energy of One Mole",

    question:"Find total kinetic energy of one mole of gas at 300 K.",

    answer:"\\(3741\\;J\\)",

    explanation:"Using \\(E=\\frac32RT\\)."
},

{
    category:"Kinetic Theory",

    type:"Temperature from Energy",

    question:"The average kinetic energy of molecules doubles. How does temperature change?",

    answer:"Temperature doubles.",

    explanation:"Kinetic energy is directly proportional to absolute temperature."
},

{
    category:"Kinetic Theory",

    type:"Comparison of Energies",

    question:"Two gases are at the same temperature. Compare their average molecular kinetic energies.",

    answer:"Equal.",

    explanation:"Average kinetic energy depends only on temperature."
},

// ==================================================
// MEAN FREE PATH PROBLEMS
// ==================================================

{
    category:"Mean Free Path",

    type:"Effect of Pressure",

    question:"The pressure of a gas is increased 5 times while temperature remains constant. How does mean free path change?",

    answer:"Becomes \\(\\frac15\\) times.",

    explanation:"Since \\(\\lambda\\propto\\frac1P\\)."
},

{
    category:"Mean Free Path",

    type:"Effect of Temperature",

    question:"Temperature of a gas is doubled at constant pressure. Compare mean free paths.",

    answer:"Becomes twice.",

    explanation:"Since \\(\\lambda\\propto T\\)."
},

{
    category:"Mean Free Path",

    type:"Finding Mean Free Path",

    question:"The molecular diameter of a gas is \\(3\\times10^{-10}\\;m\\) and number density is \\(10^{25}\\;m^{-3}\\). Find mean free path.",

    answer:"\\(2.5\\times10^{-7}\\;m\\) approximately",

    explanation:"Using \\(\\lambda=\\frac1{\\sqrt2\\pi d^2n}\\)."
},

{
    category:"Mean Free Path",

    type:"Collision Frequency",

    question:"A gas molecule has average speed 500 m/s and mean free path 0.5 mm. Find collision frequency.",

    answer:"\\(10^6\\;s^{-1}\\)",

    explanation:"Using \\(Z=\\frac{\\bar c}{\\lambda}\\)."
},



// ==================================================
// DEGREE OF FREEDOM PROBLEMS
// ==================================================

{
    category:"Degree of Freedom",

    type:"Monatomic Gas",

    question:"Find the degrees of freedom of helium gas.",

    answer:"3",

    explanation:"Monatomic gases have three translational degrees of freedom."
},

{
    category:"Degree of Freedom",

    type:"Diatomic Gas",

    question:"Find the degrees of freedom of nitrogen gas at ordinary temperature.",

    answer:"5",

    explanation:"Three translational and two rotational modes."
},

{
    category:"Degree of Freedom",

    type:"Polyatomic Gas",

    question:"Find the degrees of freedom of a nonlinear polyatomic gas.",

    answer:"6",

    explanation:"Three translational and three rotational modes."
},



// ==================================================
// EQUIPARTITION ENERGY PROBLEMS
// ==================================================

{
    category:"Equipartition Energy",

    type:"Energy Per Molecule",

    question:"Find the energy contribution of each degree of freedom at temperature T.",

    answer:"\\(\\frac12kT\\)",

    explanation:"According to equipartition theorem."
},

{
    category:"Equipartition Energy",

    type:"Internal Energy",

    question:"Find internal energy of 2 moles of monatomic gas at 300 K.",

    answer:"\\(7474\\;J\\)",

    explanation:"Using \\(U=\\frac32nRT\\)."
},

{
    category:"Equipartition Energy",

    type:"Internal Energy Comparison",

    question:"Two ideal gases have same temperature and number of moles. One is monatomic and another is diatomic. Compare internal energies.",

    answer:"Diatomic gas has \\(\\frac53\\) times energy.",

    explanation:"Energy depends on degree of freedom."
},



// ==================================================
// SPECIFIC HEAT PROBLEMS
// ==================================================

{
    category:"Specific Heat",

    type:"Finding Cv",

    question:"Find molar specific heat at constant volume for a monatomic gas.",

    answer:"\\(\\frac32R\\)",

    explanation:"Using \\(C_v=\\frac f2R\\)."
},

{
    category:"Specific Heat",

    type:"Finding Cp",

    question:"Find molar specific heat at constant pressure for a monatomic gas.",

    answer:"\\(\\frac52R\\)",

    explanation:"Using \\(C_p=C_v+R\\)."
},

{
    category:"Specific Heat",

    type:"Gamma of Gas",

    question:"Find gamma for a diatomic gas.",

    answer:"\\(\\frac75\\)",

    explanation:"Using \\(\\gamma=\\frac{f+2}{f}\\)."
},

{
    category:"Specific Heat",

    type:"Finding Degree of Freedom",

    question:"A gas has \\(\\gamma=\\frac43\\). Find its degree of freedom.",

    answer:"6",

    explanation:"Using \\(\\gamma=\\frac{f+2}{f}\\)."
},

{
    category:"Specific Heat",

    type:"Specific Heat Ratio",

    question:"If \\(C_p=29\\;Jmol^{-1}K^{-1}\\), find \\(C_v\\).",

    answer:"\\(20.7\\;Jmol^{-1}K^{-1}\\)",

    explanation:"Using \\(C_p-C_v=R\\)."
},



// ==================================================
// INTERNAL ENERGY PROBLEMS
// ==================================================

{
    category:"Internal Energy",

    type:"Temperature Dependence",

    question:"The temperature of an ideal gas is increased from 300 K to 600 K. Compare internal energies.",

    answer:"Doubles.",

    explanation:"Internal energy is proportional to absolute temperature."
},

{
    category:"Internal Energy",

    type:"Energy Change",

    question:"A diatomic gas of 3 moles is heated by 100 K. Find change in internal energy.",

    answer:"\\(6235.5\\;J\\)",

    explanation:"Using \\(\\Delta U=\\frac52nR\\Delta T\\)."
},

// ==================================================
// VAPOUR PRESSURE PROBLEMS
// ==================================================

{
    category:"Vapour Pressure",

    type:"Saturated Vapour Condition",

    question:"The vapour pressure of water vapour is equal to its saturated vapour pressure. What type of vapour is it?",

    answer:"Saturated vapour",

    explanation:"At equilibrium, actual vapour pressure equals saturated vapour pressure."
},

{
    category:"Vapour Pressure",

    type:"Unsaturated Vapour",

    question:"The actual vapour pressure is half of the saturated vapour pressure. Find relative humidity.",

    answer:"50%",

    explanation:"Using \\(RH=\\frac{p}{p_s}\\times100\\)."
},

{
    category:"Vapour Pressure",

    type:"Pressure Difference",

    question:"At a certain temperature saturated vapour pressure is 40 mmHg and actual vapour pressure is 20 mmHg. Find humidity.",

    answer:"50%",

    explanation:"Using relative humidity formula."
},



// ==================================================
// ABSOLUTE HUMIDITY PROBLEMS
// ==================================================

{
    category:"Humidity",

    type:"Finding Absolute Humidity",

    question:"5 g of water vapour is present in 2 m³ of air. Find absolute humidity.",

    answer:"\\(2.5\\;gm^{-3}\\)",

    explanation:"Using \\(AH=\\frac mV\\)."
},

{
    category:"Humidity",

    type:"Change in Volume",

    question:"The amount of vapour remains constant but air volume doubles. How does absolute humidity change?",

    answer:"Becomes half.",

    explanation:"Absolute humidity is mass per unit volume."
},



// ==================================================
// RELATIVE HUMIDITY PROBLEMS
// ==================================================

{
    category:"Relative Humidity",

    type:"Finding Relative Humidity",

    question:"Actual vapour pressure is 18 mmHg and saturated vapour pressure is 24 mmHg. Find relative humidity.",

    answer:"75%",

    explanation:"Using \\(RH=\\frac{p}{p_s}\\times100\\)."
},

{
    category:"Relative Humidity",

    type:"Temperature Effect",

    question:"Air temperature increases while moisture content remains unchanged. What happens to relative humidity?",

    answer:"It decreases.",

    explanation:"Saturated vapour pressure increases with temperature."
},

{
    category:"Relative Humidity",

    type:"Maximum Humidity",

    question:"When does relative humidity become 100%?",

    answer:"When air becomes saturated.",

    explanation:"Actual and saturated vapour pressures become equal."
},



// ==================================================
// DEW POINT PROBLEMS
// ==================================================

{
    category:"Dew Point",

    type:"Finding Dew Point",

    question:"At what condition does dew begin to form?",

    answer:"When air temperature reaches dew point.",

    explanation:"At dew point, air becomes saturated."
},

{
    category:"Dew Point",

    type:"Dew Formation",

    question:"Why does dew form more easily during cold nights?",

    answer:"Because temperature falls near dew point.",

    explanation:"Cooling reduces the capacity of air to hold vapour."
},



// ==================================================
// HYGROMETER PROBLEMS
// ==================================================

{
    category:"Hygrometer",

    type:"Wet Bulb Depression",

    question:"Dry bulb temperature is 30°C and wet bulb temperature is 25°C. Find wet bulb depression.",

    answer:"5°C",

    explanation:"Depression = dry bulb temperature − wet bulb temperature."
},

{
    category:"Hygrometer",

    type:"Humidity Comparison",

    question:"Two places have same temperature. Place A has larger wet bulb depression than place B. Which place has lower humidity?",

    answer:"Place A",

    explanation:"Greater depression means less humidity."
},

{
    category:"Hygrometer",

    type:"Determining Humidity",

    question:"A hygrometer measures dry bulb temperature 30°C and wet bulb temperature 28°C. Explain the humidity condition.",

    answer:"High humidity",

    explanation:"Small depression indicates air is close to saturation."
},



// ==================================================
// GLAISHER EQUATION PROBLEMS
// ==================================================

{
    category:"Glaisher Equation",

    type:"Humidity Calculation",

    question:"Dry bulb temperature is 30°C and wet bulb depression is 4°C. Using approximate relation \\(RH=100-5(T_d-T_w)\\), find humidity.",

    answer:"80%",

    explanation:"Substitute temperature difference in Glaisher equation."
},

{
    category:"Glaisher Equation",

    type:"Finding Depression",

    question:"If relative humidity is 70% and \\(RH=100-5d\\), find wet bulb depression.",

    answer:"6°C",

    explanation:"Solve the equation for d."
},



// ==================================================
// MIXED HUMIDITY PROBLEMS
// ==================================================

{
    category:"Humidity",

    type:"Air Pressure Relation",

    question:"Total atmospheric pressure is 760 mmHg and vapour pressure is 20 mmHg. Find pressure of dry air.",

    answer:"740 mmHg",

    explanation:"Using \\(P_{air}=P_{total}-P_v\\)."
},

{
    category:"Humidity",

    type:"Temperature and Vapour Pressure",

    question:"Why does vapour pressure increase when temperature increases?",

    answer:"More molecules gain enough energy to escape into vapour state.",

    explanation:"Molecular kinetic energy increases with temperature."
},

{
    category:"Humidity",

    type:"Fog Formation",

    question:"Why does fog form when moist air cools?",

    answer:"Cooling reduces saturation capacity and condensation occurs.",

    explanation:"Air reaches dew point."
},

{
    category:"Humidity",

    type:"Cloud Formation",

    question:"Why do clouds form at high altitude?",

    answer:"Rising air expands, cools and reaches saturation.",

    explanation:"Condensation occurs after reaching dew point."
},

// ==================================================
// ADVANCED GAS CONTAINER PROBLEMS
// ==================================================

{
    category:"Advanced Gas Problems",

    type:"Gas Transfer Between Containers",

    question:"Two containers of volumes 2 L and 3 L contain the same gas at pressures 5 atm and 2 atm respectively. They are connected at constant temperature. Find final pressure.",

    answer:"\\(3.2\\;atm\\)",

    explanation:"Using conservation of molecules: \\(P_f(V_1+V_2)=P_1V_1+P_2V_2\\)."
},

{
    category:"Advanced Gas Problems",

    type:"Vacuum Mixing",

    question:"A gas at pressure 8 atm occupies 4 L. It is allowed to expand into an evacuated container of volume 12 L at constant temperature. Find final pressure.",

    answer:"\\(2\\;atm\\)",

    explanation:"Using Boyle's law: \\(P_1V_1=P_2(V_1+V_2)\\)."
},

{
    category:"Advanced Gas Problems",

    type:"Three Container Equilibrium",

    question:"Three identical vessels contain gas at pressures 2 atm, 4 atm and 6 atm. They are connected at constant temperature. Find final pressure.",

    answer:"\\(4\\;atm\\)",

    explanation:"Final pressure equals average pressure when volumes are equal."
},



// ==================================================
// GAS LEAKAGE PROBLEMS
// ==================================================

{
    category:"Gas Leakage",

    type:"Molecules Escaped",

    question:"A container contains gas at pressure 10 atm. After leakage, pressure becomes 8 atm at constant temperature. What fraction of molecules escaped?",

    answer:"20%",

    explanation:"At constant temperature and volume, pressure is proportional to number of molecules."
},

{
    category:"Gas Leakage",

    type:"Mass Loss",

    question:"A cylinder initially contains 5 kg gas at pressure 20 atm. If pressure falls to 15 atm at constant temperature, find remaining mass.",

    answer:"\\(3.75\\;kg\\)",

    explanation:"Mass is proportional to pressure when temperature and volume remain constant."
},



// ==================================================
// TYRE BURST PROBLEMS
// ==================================================

{
    category:"Tyre Problems",

    type:"Air Added to Tyre",

    question:"A tyre contains air at pressure 2 atm. After pumping, pressure becomes 3 atm without changing temperature or volume. What fraction of air was added?",

    answer:"50%",

    explanation:"Number of molecules is proportional to pressure."
},

{
    category:"Tyre Problems",

    type:"Pressure Drop After Burst",

    question:"A tyre pressure falls from 4 atm to atmospheric pressure 1 atm after bursting. Find the fraction of air lost.",

    answer:"75%",

    explanation:"Remaining molecules = 1/4 of original."
},

{
    category:"Tyre Problems",

    type:"Temperature Effect in Tyre",

    question:"A tyre is filled at 20°C with pressure 2 atm. After driving, temperature rises to 60°C. Find new pressure.",

    answer:"\\(2.27\\;atm\\)",

    explanation:"Using Gay-Lussac's law."
},



// ==================================================
// GAS MIXTURE PROBLEMS
// ==================================================

{
    category:"Gas Mixture",

    type:"Partial Pressure",

    question:"A vessel contains 2 moles oxygen and 3 moles nitrogen at total pressure 5 atm. Find partial pressure of oxygen.",

    answer:"\\(2\\;atm\\)",

    explanation:"Using Dalton's law: \\(P_i=X_iP\\)."
},

{
    category:"Gas Mixture",

    type:"Mole Fraction",

    question:"A mixture contains 4 moles helium and 6 moles neon. Find mole fraction of helium.",

    answer:"0.4",

    explanation:"Mole fraction = individual moles / total moles."
},

{
    category:"Gas Mixture",

    type:"Average Molar Mass",

    question:"A gas mixture contains 2 moles helium and 3 moles oxygen. Find average molar mass.",

    answer:"\\(14.4\\;g/mol\\)",

    explanation:"Using \\(M_{avg}=\\frac{total\\ mass}{total\\ moles}\\)."
},



// ==================================================
// PARTIAL PRESSURE ADVANCED
// ==================================================

{
    category:"Dalton Law",

    type:"Gas Collected Over Water",

    question:"A gas is collected over water at total pressure 760 mmHg. Vapour pressure of water is 20 mmHg. Find dry gas pressure.",

    answer:"740 mmHg",

    explanation:"Subtract water vapour pressure."
},

{
    category:"Dalton Law",

    type:"Pressure After Adding Gas",

    question:"A vessel contains gas A at 2 atm. Gas B is added until total pressure becomes 5 atm. Find pressure of gas B.",

    answer:"3 atm",

    explanation:"Total pressure equals sum of partial pressures."
},

// ==================================================
// ADVANCED DEW POINT PROBLEMS
// ==================================================

{
    category:"Advanced Humidity",

    type:"Finding Dew Point from Vapour Pressure",

    question:"The actual vapour pressure of air is 17.5 mmHg. From a vapour pressure table, saturation vapour pressure becomes 17.5 mmHg at 20°C. Find dew point.",

    answer:"20°C",

    explanation:"Dew point is the temperature at which actual vapour pressure becomes saturated vapour pressure."
},

{
    category:"Advanced Humidity",

    type:"Dew Point from Relative Humidity",

    question:"Air temperature is 30°C and relative humidity is 50%. Saturated vapour pressure at 30°C is 32 mmHg. Find actual vapour pressure.",

    answer:"16 mmHg",

    explanation:"Using \\(RH=\\frac{p}{p_s}\\times100\\)."
},

{
    category:"Advanced Humidity",

    type:"Finding Dew Point Using Table",

    question:"At 30°C the saturation vapour pressure is 32 mmHg. The actual vapour pressure is 20 mmHg. If saturation vapour pressures at 20°C and 25°C are 17.5 mmHg and 23.8 mmHg respectively, estimate dew point.",

    answer:"Approximately 22°C",

    explanation:"Dew point lies between temperatures where saturation pressure equals actual pressure. Interpolation is used."
},



// ==================================================
// RELATIVE HUMIDITY AFTER HEATING/COOLING
// ==================================================

{
    category:"Relative Humidity Change",

    type:"Heating Without Adding Moisture",

    question:"Air at 20°C has relative humidity 80%. It is heated to 30°C without adding moisture. What happens to relative humidity?",

    answer:"It decreases.",

    explanation:"Actual vapour pressure remains constant but saturation pressure increases."
},

{
    category:"Relative Humidity Change",

    type:"Exact New Humidity",

    question:"Air at 20°C has RH 60%. Saturation vapour pressure at 20°C is 18 mmHg. It is heated to 30°C where saturation pressure is 32 mmHg. Find new RH.",

    answer:"33.75%",

    explanation:"Actual pressure remains 10.8 mmHg. New RH = \\(\\frac{10.8}{32}\\times100\\)."
},

{
    category:"Relative Humidity Change",

    type:"Cooling Until Saturation",

    question:"Air at 30°C has vapour pressure 15 mmHg. At what condition will condensation start?",

    answer:"When saturation vapour pressure becomes 15 mmHg.",

    explanation:"That temperature is the dew point."
},



// ==================================================
// MIXING MOIST AIR PROBLEMS
// ==================================================

{
    category:"Moist Air Mixing",

    type:"Mixing Equal Volumes",

    question:"Two equal volumes of air are mixed at the same temperature. Their vapour pressures are 10 mmHg and 20 mmHg. Find final vapour pressure.",

    answer:"15 mmHg",

    explanation:"For equal volumes at same temperature, average vapour pressure."
},

{
    category:"Moist Air Mixing",

    type:"Mixing Different Volumes",

    question:"2 m³ air has vapour pressure 10 mmHg and 3 m³ air has vapour pressure 20 mmHg. Find final vapour pressure.",

    answer:"16 mmHg",

    explanation:"Weighted average according to volume."
},

{
    category:"Moist Air Mixing",

    type:"Humidity After Mixing",

    question:"Two air samples with different humidity values are mixed. Explain why final relative humidity cannot be found by simple average.",

    answer:"Because saturation vapour pressure depends on temperature.",

    explanation:"Actual vapour pressure mixes, but saturation pressure depends on final temperature."
},



// ==================================================
// VAPOUR PRESSURE TRANSFORMATION
// ==================================================

{
    category:"Vapour Pressure",

    type:"Changing Temperature at Constant Vapour Amount",

    question:"A closed vessel contains unsaturated vapour. Temperature increases while volume remains constant. How does vapour pressure change?",

    answer:"It increases.",

    explanation:"Using ideal gas relation, pressure increases with temperature."
},

{
    category:"Vapour Pressure",

    type:"Saturated Vapour Expansion",

    question:"A saturated vapour expands isothermally. What happens to pressure?",

    answer:"It decreases and becomes unsaturated.",

    explanation:"Density decreases, reducing collisions."
},

{
    category:"Vapour Pressure",

    type:"Maximum Vapour Density",

    question:"Why does saturated vapour pressure increase with temperature?",

    answer:"More molecules escape from liquid surface due to higher kinetic energy.",

    explanation:"Evaporation rate increases with temperature."
},



// ==================================================
// HYGROMETER ADVANCED
// ==================================================

{
    category:"Advanced Hygrometer",

    type:"Finding Humidity from Depression",

    question:"Dry bulb temperature is 28°C and wet bulb temperature is 24°C. Using Glaisher relation \\(RH=100-5d\\), find humidity.",

    answer:"80%",

    explanation:"Wet bulb depression \\(d=4°C\\)."
},

{
    category:"Advanced Hygrometer",

    type:"Finding Wet Bulb Temperature",

    question:"Relative humidity is 75%. Using \\(RH=100-5d\\), dry bulb temperature is 30°C. Find wet bulb temperature.",

    answer:"25°C",

    explanation:"Depression = 5°C."
},

{
    category:"Advanced Hygrometer",

    type:"Comparing Places",

    question:"Two cities have dry bulb temperatures 30°C. City A has wet bulb 27°C and city B has wet bulb 20°C. Which has more moisture?",

    answer:"City A",

    explanation:"Smaller wet bulb depression indicates higher humidity."
},

// ==================================================
// ADIABATIC PROCESS PROBLEMS
// ==================================================

{
    category:"Adiabatic Process",

    type:"Finding Final Pressure",

    question:"A gas expands adiabatically from volume \\(V\\) to \\(2V\\). If \\(\\gamma=1.4\\) and initial pressure is \\(P\\), find final pressure.",

    answer:"\\(P_2=\\frac{P}{2^{1.4}}\\)",

    explanation:"Using \\(PV^\\gamma=constant\\)."
},

{
    category:"Adiabatic Process",

    type:"Finding Final Temperature",

    question:"A gas expands adiabatically and its volume becomes 8 times. For a diatomic gas, find ratio of final and initial temperatures.",

    answer:"\\(T_2:T_1=1:4\\)",

    explanation:"Using \\(TV^{\\gamma-1}=constant\\), where \\(\\gamma=7/5\\)."
},

{
    category:"Adiabatic Process",

    type:"Compression Heating",

    question:"A gas is compressed adiabatically to one-fourth of its volume. For a monatomic gas, compare final and initial temperatures.",

    answer:"\\(T_2:T_1=4^{2/3}:1\\)",

    explanation:"Using \\(TV^{\\gamma-1}=constant\\)."
},

{
    category:"Adiabatic Process",

    type:"Pressure Temperature Relation",

    question:"A gas undergoes adiabatic compression. What happens to pressure and temperature?",

    answer:"Both increase.",

    explanation:"Work is done on the gas, increasing internal energy."
},



// ==================================================
// GAS THERMOMETER PROBLEMS
// ==================================================

{
    category:"Gas Thermometer",

    type:"Constant Volume Gas Thermometer",

    question:"A gas thermometer reads pressure 80 cmHg at 0°C and 90 cmHg at unknown temperature. Find temperature.",

    answer:"\\(34.1^\\circ C\\)",

    explanation:"Using \\(\\frac{P_1}{T_1}=\\frac{P_2}{T_2}\\)."
},

{
    category:"Gas Thermometer",

    type:"Absolute Temperature",

    question:"A gas pressure becomes zero at -273°C. Explain the significance.",

    answer:"It represents absolute zero temperature.",

    explanation:"Molecular motion theoretically stops at absolute zero."
},



// ==================================================
// VELOCITY DISTRIBUTION PROBLEMS
// ==================================================

{
    category:"Molecular Velocity",

    type:"Relation Between Velocities",

    question:"Find relation among most probable velocity, average velocity and RMS velocity.",

    answer:"\\(v_p<v_{avg}<v_{rms}\\)",

    explanation:"Due to Maxwell velocity distribution."
},

{
    category:"Molecular Velocity",

    type:"Finding Average Velocity",

    question:"Express average velocity of gas molecules.",

    answer:"\\(v_{avg}=\\sqrt{\\frac{8RT}{\\pi M}}\\)",

    explanation:"Derived from Maxwell distribution."
},

{
    category:"Molecular Velocity",

    type:"Velocity Ratio",

    question:"Find ratio of RMS velocity and most probable velocity.",

    answer:"\\(v_{rms}:v_p=\\sqrt3:\\sqrt2\\)",

    explanation:"Using their standard expressions."
},

{
    category:"Molecular Velocity",

    type:"Temperature Effect",

    question:"Temperature of a gas increases four times. Compare RMS, average and most probable velocities.",

    answer:"All become twice.",

    explanation:"All velocities are proportional to \\(\\sqrt T\\)."
},



// ==================================================
// MOLECULAR COLLISION PROBLEMS
// ==================================================

{
    category:"Molecular Collision",

    type:"Mean Free Path Change",

    question:"Pressure of a gas increases four times at constant temperature. How does mean free path change?",

    answer:"Becomes one-fourth.",

    explanation:"\\(\\lambda\\propto\\frac1P\\)."
},

{
    category:"Molecular Collision",

    type:"Collision Frequency",

    question:"A molecule travels with average speed 600 m/s and mean free path 0.3 mm. Find collision frequency.",

    answer:"\\(2\\times10^6\\;s^{-1}\\)",

    explanation:"Using \\(Z=\\frac{v}{\\lambda}\\)."
},

{
    category:"Molecular Collision",

    type:"Molecular Diameter Effect",

    question:"The diameter of molecules becomes twice. Compare mean free path.",

    answer:"Becomes one-fourth.",

    explanation:"\\(\\lambda\\propto\\frac1{d^2}\\)."
},



// ==================================================
// ADVANCED KINETIC THEORY
// ==================================================

{
    category:"Advanced Kinetic Theory",

    type:"Same Pressure Different Density",

    question:"Two gases have equal pressure. Gas A has four times density of gas B. Compare RMS velocities.",

    answer:"\\(v_A:v_B=1:2\\)",

    explanation:"From \\(P=\\frac13\\rho v^2\\)."
},

{
    category:"Advanced Kinetic Theory",

    type:"Same Temperature Different Gases",

    question:"Two gases at same temperature have molar masses 16 and 64. Compare RMS velocities.",

    answer:"\\(2:1\\)",

    explanation:"Velocity varies inversely with square root of molar mass."
},

{
    category:"Advanced Kinetic Theory",

    type:"Same RMS Velocity",

    question:"Two gases have same RMS velocity. Gas A has twice molar mass of gas B. Compare temperatures.",

    answer:"\\(T_A:T_B=2:1\\)",

    explanation:"Since \\(v_{rms}^2\\propto\\frac TM\\)."
},

{
    category:"Advanced Kinetic Theory",

    type:"Pressure from Molecular Motion",

    question:"If RMS velocity of molecules becomes three times while density remains constant, how does pressure change?",

    answer:"Becomes nine times.",

    explanation:"Pressure is proportional to square of velocity."
},

// ==================================================
// MOLECULAR MASS & GAS CONSTANT PROBLEMS
// ==================================================

{
    category:"Advanced Gas Problems",

    type:"Finding Molar Mass from Velocity",

    question:"The RMS velocity of a gas is \\(500\\;m/s\\) at 300 K. Find its molar mass.",

    answer:"\\(0.0299\\;kg/mol\\)",

    explanation:"Using \\(v_{rms}=\\sqrt{\\frac{3RT}{M}}\\)."
},

{
    category:"Advanced Gas Problems",

    type:"Finding Temperature from RMS Velocity",

    question:"The RMS velocity of oxygen molecules becomes 1.5 times its value at 300 K. Find new temperature.",

    answer:"675 K",

    explanation:"Since \\(v_{rms}\\propto\\sqrt T\\)."
},

{
    category:"Advanced Gas Problems",

    type:"Gas Constant from Molecular Data",

    question:"Find the universal gas constant from Boltzmann constant and Avogadro number.",

    answer:"\\(R=N_Ak\\)",

    explanation:"Relationship between microscopic and macroscopic gas constants."
},



// ==================================================
// BOLTZMANN CONSTANT PROBLEMS
// ==================================================

{
    category:"Boltzmann Constant",

    type:"Energy of Molecule",

    question:"Calculate the average kinetic energy of one molecule at 27°C.",

    answer:"\\(6.21\\times10^{-21}\\;J\\)",

    explanation:"Using \\(E=\\frac32kT\\)."
},

{
    category:"Boltzmann Constant",

    type:"Temperature from Energy",

    question:"The average kinetic energy of molecules is \\(8.28\\times10^{-21}\\;J\\). Find temperature.",

    answer:"400 K",

    explanation:"Using \\(E=\\frac32kT\\)."
},



// ==================================================
// ADVANCED GAS LAW CASES
// ==================================================

{
    category:"Gas Laws",

    type:"Combined Gas Law",

    question:"A gas occupies 500 cm³ at 27°C and 760 mmHg. Find its volume at 127°C and 380 mmHg.",

    answer:"\\(1000\\;cm^3\\)",

    explanation:"Using \\(\\frac{P_1V_1}{T_1}=\\frac{P_2V_2}{T_2}\\)."
},

{
    category:"Gas Laws",

    type:"Pressure Change Due to Temperature",

    question:"A sealed cylinder contains gas at 300 K and 2 atm. It is heated to 450 K. Find final pressure.",

    answer:"3 atm",

    explanation:"Using Gay-Lussac's law."
},

{
    category:"Gas Laws",

    type:"Volume Change Due to Heating",

    question:"A gas expands at constant pressure from 300 K to 600 K. Compare volumes.",

    answer:"\\(1:2\\)",

    explanation:"Using Charles' law."
},



// ==================================================
// MIXED ADMISSION LEVEL PROBLEMS
// ==================================================

{
    category:"Mixed Ideal Gas",

    type:"Equal Density Condition",

    question:"Two gases at the same temperature and pressure have equal density. What can be concluded?",

    answer:"They have equal molar masses.",

    explanation:"Using \\(\\rho=\\frac{PM}{RT}\\)."
},

{
    category:"Mixed Ideal Gas",

    type:"Molecules in Two Containers",

    question:"Two identical containers have same temperature. One has twice the pressure of the other. Compare number of molecules.",

    answer:"2:1",

    explanation:"Pressure is proportional to number of molecules."
},

{
    category:"Mixed Ideal Gas",

    type:"Gas Removal",

    question:"Half of the molecules are removed from a container while temperature and volume remain constant. Find pressure change.",

    answer:"Pressure becomes half.",

    explanation:"Pressure depends on number density."
},

{
    category:"Mixed Ideal Gas",

    type:"Heating and Leakage Together",

    question:"A container loses half its molecules and temperature doubles. Find pressure ratio.",

    answer:"1:1",

    explanation:"Pressure depends on \\(nT\\). Loss of molecules is compensated by temperature increase."
},



// ==================================================
// REAL GAS CONCEPTS
// ==================================================

{
    category:"Real Gas",

    type:"Deviation from Ideal Behaviour",

    question:"Why do real gases deviate from ideal behaviour at high pressure?",

    answer:"Because molecular volume and intermolecular forces become significant.",

    explanation:"Ideal gas assumptions fail at high pressure."
},

{
    category:"Real Gas",

    type:"Low Temperature Behaviour",

    question:"Why do gases deviate from ideal behaviour at low temperature?",

    answer:"Because intermolecular attraction becomes important.",

    explanation:"Molecules lose enough kinetic energy to interact strongly."
},

{
    category:"Real Gas",

    type:"Ideal Condition",

    question:"Under what conditions does a real gas behave approximately as an ideal gas?",

    answer:"Low pressure and high temperature.",

    explanation:"Molecular interactions become negligible."
},



// ==================================================
// CRITICAL TEMPERATURE PROBLEMS
// ==================================================

{
    category:"Critical Temperature",

    type:"Definition",

    question:"What is critical temperature?",

    answer:"Maximum temperature above which a gas cannot be liquefied by pressure alone.",

    explanation:"Above critical temperature, intermolecular attraction is insufficient."
},

{
    category:"Critical Temperature",

    type:"Effect of Temperature",

    question:"Why is CO₂ easily liquefied while hydrogen is difficult to liquefy?",

    answer:"CO₂ has stronger intermolecular forces and higher critical temperature.",

    explanation:"Liquefaction depends on intermolecular attraction."
},



// ==================================================
// FINAL CONCEPTUAL MATHEMATICAL CASES
// ==================================================

{
    category:"Advanced Ideal Gas",

    type:"Same Internal Energy",

    question:"Two ideal gases have the same internal energy. If one is monatomic and another is diatomic, compare their temperatures.",

    answer:"Diatomic gas has lower temperature.",

    explanation:"Internal energy depends on degree of freedom and temperature."
},

{
    category:"Advanced Ideal Gas",

    type:"Same Pressure and Volume",

    question:"Two gases occupy same volume at same pressure. Compare number of molecules.",

    answer:"Equal.",

    explanation:"From ideal gas equation, number of molecules depends on PV/T."
},

{
    category:"Advanced Ideal Gas",

    type:"Maximum Molecular Speed",

    question:"Does increasing temperature increase the number of molecules having high speed?",

    answer:"Yes.",

    explanation:"Maxwell distribution shifts toward higher velocities."
}


    ]

};