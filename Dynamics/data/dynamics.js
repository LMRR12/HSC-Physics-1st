// ==========================================
// Physics Practice Book
// Chapter 3 : Dynamics
// data/dynamics.js
// ==========================================

const chapterData = {

    title: "Chapter 3 : Dynamics",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",


    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [

        // ==================================================
        // REFERENCE FRAME
        // ==================================================

        {
            category: "Reference Frame",

            title: "Position Vector",

            formula: "\\vec r=x\\hat i+y\\hat j+z\\hat k",

            description: "Represents the position of an object with respect to a reference frame."
        },

        {
            category: "Reference Frame",

            title: "Displacement Vector",

            formula: "\\Delta \\vec r=\\vec r_2-\\vec r_1",

            description: "Change in position vector gives displacement."
        },

        {
            category: "Reference Frame",

            title: "Reference Frame Transformation",

            formula: "\\vec r_{AB}=\\vec r_A-\\vec r_B",

            description: "Position of object A relative to observer B."
        },

        {
            category: "Reference Frame",

            title: "Rest and Motion",

            formula: "Motion\\ depends\\ on\\ observer\\ or\\ reference\\ frame",

            description: "An object may be at rest in one frame and moving in another."
        },


        // ==================================================
        // MOTION RELATED QUANTITIES
        // ==================================================

        {
            category: "Motion Quantities",

            title: "Distance",

            formula: "Distance=Total\\ path\\ travelled",

            description: "Scalar quantity representing total length of path."
        },

        {
            category: "Motion Quantities",

            title: "Displacement",

            formula: "\\Delta x=x_2-x_1",

            description: "Shortest distance between initial and final position with direction."
        },

        {
            category: "Motion Quantities",

            title: "Average Speed",

            formula: "Average\\ speed=\\frac{Total\\ distance}{Total\\ time}",

            description: "Ratio of total distance travelled to total time."
        },

        {
            category: "Motion Quantities",

            title: "Average Velocity",

            formula:
            "\\vec v_{avg}=\\frac{Total\\ displacement}{Total\\ time}",

            description: "Ratio of displacement to total time."
        },


        // ==================================================
        // SPEED AND VELOCITY
        // ==================================================

        {
            category: "Speed & Velocity",

            title: "Speed",

            formula: "v=\\frac{s}{t}",

            description: "Rate of change of distance."
        },

        {
            category: "Speed & Velocity",

            title: "Velocity",

            formula: "\\vec v=\\frac{\\Delta \\vec r}{\\Delta t}",

            description: "Rate of change of displacement."
        },

        {
            category: "Speed & Velocity",

            title: "Instantaneous Velocity",

            formula: "\\vec v=\\frac{d\\vec r}{dt}",

            description: "Velocity at a particular instant."
        },

        {
            category: "Speed & Velocity",

            title: "Instantaneous Speed",

            formula: "v=\\frac{ds}{dt}",

            description: "Rate of change of distance at an instant."
        },

        {
            category: "Speed & Velocity",

            title: "Relation Between Average Speed and Average Velocity",

            formula:
            "Average\\ speed\\geq |Average\\ velocity|",

            description: "Average speed is always equal to or greater than magnitude of average velocity."
        },


        // ==================================================
        // ACCELERATION
        // ==================================================

        {
            category: "Acceleration",

            title: "Acceleration",

            formula:
            "\\vec a=\\frac{\\Delta\\vec v}{\\Delta t}",

            description: "Rate of change of velocity."
        },

        {
            category: "Acceleration",

            title: "Instantaneous Acceleration",

            formula:
            "\\vec a=\\frac{d\\vec v}{dt}",

            description: "Acceleration at a particular instant."
        },

        {
            category: "Acceleration",

            title: "Acceleration in Cartesian Form",

            formula:
            "\\vec a=a_x\\hat i+a_y\\hat j+a_z\\hat k",

            description: "Acceleration expressed using components."
        },

        {
            category: "Acceleration",

            title: "Acceleration from Position",

            formula:
            "\\vec a=\\frac{d^2\\vec r}{dt^2}",

            description: "Second derivative of position gives acceleration."
        },


        // ==================================================
        // RELATIVE MOTION
        // ==================================================

        {
            category: "Relative Motion",

            title: "Relative Position",

            formula:
            "\\vec r_{AB}=\\vec r_A-\\vec r_B",

            description: "Position of A relative to B."
        },

        {
            category: "Relative Motion",

            title: "Relative Velocity",

            formula:
            "\\vec v_{AB}=\\vec v_A-\\vec v_B",

            description: "Velocity of A relative to B."
        },

        {
            category: "Relative Motion",

            title: "Relative Acceleration",

            formula:
            "\\vec a_{AB}=\\vec a_A-\\vec a_B",

            description: "Acceleration of A relative to B."
        },

        {
            category: "Relative Motion",

            title: "Same Direction Relative Velocity",

            formula:
            "v_{rel}=v_1-v_2",

            description: "Relative velocity when two objects move in the same direction."
        },

        {
            category: "Relative Motion",

            title: "Opposite Direction Relative Velocity",

            formula:
            "v_{rel}=v_1+v_2",

            description: "Relative velocity when two objects move in opposite directions."
        },

        {
            category: "Relative Motion",

            title: "Perpendicular Relative Velocity",

            formula:
            "v_{rel}=\\sqrt{v_1^2+v_2^2}",

            description: "Relative velocity when two velocities are perpendicular."
        },

        {
            category: "Relative Motion",

            title: "Relative Velocity at Angle",

            formula:
            "v_{AB}=\\sqrt{v_A^2+v_B^2-2v_Av_B\\cos\\theta}",

            description: "Magnitude of relative velocity between two objects moving at an angle."
        },

        // ==================================================
        // POSITION-TIME GRAPH
        // ==================================================

        {
            category: "Position-Time Graph",

            title: "Slope of Position-Time Graph",

            formula:
            "Slope=\\frac{\\Delta x}{\\Delta t}=v",

            description: "The slope of a position-time graph gives velocity."
        },

        {
            category: "Position-Time Graph",

            title: "Constant Velocity Motion",

            formula:
            "x=x_0+vt",

            description: "For uniform motion, position changes linearly with time."
        },

        {
            category: "Position-Time Graph",

            title: "Instantaneous Velocity from x-t Graph",

            formula:
            "v=\\frac{dx}{dt}",

            description: "Tangent slope at any point gives instantaneous velocity."
        },

        {
            category: "Position-Time Graph",

            title: "Zero Velocity Condition",

            formula:
            "\\frac{dx}{dt}=0",

            description: "Horizontal tangent on position-time graph represents zero velocity."
        },


        // ==================================================
        // VELOCITY-TIME GRAPH
        // ==================================================

        {
            category: "Velocity-Time Graph",

            title: "Slope of Velocity-Time Graph",

            formula:
            "Slope=\\frac{\\Delta v}{\\Delta t}=a",

            description: "Slope of velocity-time graph gives acceleration."
        },

        {
            category: "Velocity-Time Graph",

            title: "Area Under Velocity-Time Graph",

            formula:
            "Area=Displacement",

            description: "Area under v-t graph gives displacement."
        },

        {
            category: "Velocity-Time Graph",

            title: "Area Under Speed-Time Graph",

            formula:
            "Area=Distance",

            description: "Area under speed-time graph gives total distance."
        },

        {
            category: "Velocity-Time Graph",

            title: "Uniform Acceleration",

            formula:
            "v=u+at",

            description: "Straight line v-t graph represents constant acceleration."
        },

        {
            category: "Velocity-Time Graph",

            title: "Average Velocity from v-t Graph",

            formula:
            "v_{avg}=\\frac{u+v}{2}",

            description: "Average velocity for uniformly accelerated motion."
        },


        // ==================================================
        // EQUATIONS OF MOTION
        // ==================================================

        {
            category: "Equations of Motion",

            title: "First Equation of Motion",

            formula:
            "v=u+at",

            description: "Relation between initial velocity, final velocity, acceleration and time."
        },

        {
            category: "Equations of Motion",

            title: "Second Equation of Motion",

            formula:
            "s=ut+\\frac12at^2",

            description: "Displacement equation for uniformly accelerated motion."
        },

        {
            category: "Equations of Motion",

            title: "Third Equation of Motion",

            formula:
            "v^2=u^2+2as",

            description: "Velocity-displacement relation."
        },

        {
            category: "Equations of Motion",

            title: "Fourth Equation of Motion",

            formula:
            "s=\\frac{(u+v)}2t",

            description: "Displacement using average velocity."
        },

        {
            category: "Equations of Motion",

            title: "Distance Covered in nth Second",

            formula:
            "S_n=u+\\frac a2(2n-1)",

            description: "Distance travelled during the nth second."
        },

        {
            category: "Equations of Motion",

            title: "Average Velocity",

            formula:
            "v_{avg}=\\frac{u+v}{2}",

            description: "Valid for uniformly accelerated motion."
        },


        // ==================================================
        // FALLING BODIES
        // ==================================================

        {
            category: "Falling Bodies",

            title: "Acceleration Due to Gravity",

            formula:
            "g=9.8\\,m/s^2\\approx10\\,m/s^2",

            description: "Acceleration produced by Earth's gravitational field."
        },

        {
            category: "Falling Bodies",

            title: "Velocity During Free Fall",

            formula:
            "v=u+gt",

            description: "Velocity of a falling object after time t."
        },

        {
            category: "Falling Bodies",

            title: "Distance Fallen",

            formula:
            "h=ut+\\frac12gt^2",

            description: "Distance covered during free fall."
        },

        {
            category: "Falling Bodies",

            title: "Velocity-Height Relation",

            formula:
            "v^2=u^2+2gh",

            description: "Velocity after falling through height h."
        },

        {
            category: "Falling Bodies",

            title: "Object Dropped from Rest",

            formula:
            "u=0",

            description: "For an object simply released from height."
        },

        {
            category: "Falling Bodies",

            title: "Velocity After Falling from Height h",

            formula:
            "v=\\sqrt{2gh}",

            description: "Final velocity of a body dropped from height h."
        },

        {
            category: "Falling Bodies",

            title: "Time of Falling from Height",

            formula:
            "t=\\sqrt{\\frac{2h}{g}}",

            description: "Time required to fall from height h."
        },

        {
            category: "Falling Bodies",

            title: "Maximum Height in Upward Throw",

            formula:
            "H=\\frac{u^2}{2g}",

            description: "Maximum height reached by an upward projected body."
        },

        {
            category: "Falling Bodies",

            title: "Time to Reach Maximum Height",

            formula:
            "t=\\frac ug",

            description: "Time required for upward velocity to become zero."
        },

        {
            category: "Falling Bodies",

            title: "Total Time of Upward and Downward Journey",

            formula:
            "T=\\frac{2u}{g}",

            description: "Total time when a body returns to the same level."
        },

                // ==================================================
        // PROJECTILE MOTION
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Initial Velocity Components",

            formula:
            "u_x=u\\cos\\theta,\\quad u_y=u\\sin\\theta",

            description: "Resolves initial velocity into horizontal and vertical components."
        },

        {
            category: "Projectile Motion",

            title: "Horizontal Velocity",

            formula:
            "v_x=u\\cos\\theta",

            description: "Horizontal component of velocity remains constant."
        },

        {
            category: "Projectile Motion",

            title: "Vertical Velocity After Time t",

            formula:
            "v_y=u\\sin\\theta-gt",

            description: "Vertical component changes due to gravitational acceleration."
        },

        {
            category: "Projectile Motion",

            title: "Velocity at Any Time",

            formula:
            "\\vec v=(u\\cos\\theta)\\hat i+(u\\sin\\theta-gt)\\hat j",

            description: "Velocity vector of a projectile after time t."
        },

        {
            category: "Projectile Motion",

            title: "Magnitude of Velocity at Any Time",

            formula:
            "v=\\sqrt{(u\\cos\\theta)^2+(u\\sin\\theta-gt)^2}",

            description: "Speed of projectile at any instant."
        },

        {
            category: "Projectile Motion",

            title: "Direction of Velocity at Any Time",

            formula:
            "\\tan\\phi=\\frac{u\\sin\\theta-gt}{u\\cos\\theta}",

            description: "Angle made by velocity with horizontal."
        },


        // ==================================================
        // TIME OF FLIGHT
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Time of Flight",

            formula:
            "T=\\frac{2u\\sin\\theta}{g}",

            description: "Total time taken by projectile to return to the same level."
        },

        {
            category: "Projectile Motion",

            title: "Time to Reach Maximum Height",

            formula:
            "t_H=\\frac{u\\sin\\theta}{g}",

            description: "Time required to reach highest point."
        },

        {
            category: "Projectile Motion",

            title: "Relation Between Time to Maximum Height and Total Time",

            formula:
            "t_H=\\frac T2",

            description: "Highest point occurs halfway through the total flight time."
        },


        // ==================================================
        // MAXIMUM HEIGHT
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Maximum Height",

            formula:
            "H=\\frac{u^2\\sin^2\\theta}{2g}",

            description: "Maximum vertical height reached by projectile."
        },

        {
            category: "Projectile Motion",

            title: "Vertical Velocity at Highest Point",

            formula:
            "v_y=0",

            description: "Vertical component becomes zero at maximum height."
        },

        {
            category: "Projectile Motion",

            title: "Velocity at Highest Point",

            formula:
            "v=u\\cos\\theta",

            description: "Only horizontal velocity remains at the highest point."
        },


        // ==================================================
        // HORIZONTAL RANGE
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Horizontal Range",

            formula:
            "R=\\frac{u^2\\sin2\\theta}{g}",

            description: "Horizontal distance travelled when projectile returns to same level."
        },

        {
            category: "Projectile Motion",

            title: "Range Using Components",

            formula:
            "R=u_xT",

            description: "Range equals horizontal velocity multiplied by time of flight."
        },

        {
            category: "Projectile Motion",

            title: "Maximum Horizontal Range",

            formula:
            "\\theta=45^\\circ",

            description: "Range becomes maximum when projection angle is 45 degrees."
        },

        {
            category: "Projectile Motion",

            title: "Maximum Range Value",

            formula:
            "R_{max}=\\frac{u^2}{g}",

            description: "Maximum possible horizontal range."
        },


        // ==================================================
        // TRAJECTORY
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Trajectory Equation",

            formula:
            "y=x\\tan\\theta-\\frac{gx^2}{2u^2\\cos^2\\theta}",

            description: "Equation of path followed by a projectile."
        },

        {
            category: "Projectile Motion",

            title: "Trajectory Nature",

            formula:
            "y=ax-bx^2",

            description: "Projectile path is a parabola."
        },

        {
            category: "Projectile Motion",

            title: "Horizontal Distance",

            formula:
            "x=u\\cos\\theta\\,t",

            description: "Horizontal displacement after time t."
        },

        {
            category: "Projectile Motion",

            title: "Vertical Displacement",

            formula:
            "y=u\\sin\\theta\\,t-\\frac12gt^2",

            description: "Vertical displacement after time t."
        },


        // ==================================================
        // SPECIAL PROJECTILE CASES
        // ==================================================

        {
            category: "Projectile Motion",

            title: "Horizontal Projection Initial Velocity",

            formula:
            "u_y=0,\\quad u_x=u",

            description: "For a body projected horizontally."
        },

        {
            category: "Projectile Motion",

            title: "Horizontal Projection Time",

            formula:
            "t=\\sqrt{\\frac{2h}{g}}",

            description: "Time taken by horizontal projectile to hit ground from height h."
        },

        {
            category: "Projectile Motion",

            title: "Horizontal Projection Range",

            formula:
            "R=u\\sqrt{\\frac{2h}{g}}",

            description: "Horizontal distance covered by a projectile projected from height h."
        },

        {
            category: "Projectile Motion",

            title: "Projectile From Height Time Equation",

            formula:
            "h=u_y t+\\frac12gt^2",

            description: "Used when projectile lands at a different height."
        },

        {
            category: "Projectile Motion",

            title: "Projectile Landing Velocity",

            formula:
            "v^2=u^2+2g\\Delta h",

            description: "Velocity when projectile reaches another height."
        },

        {
            category: "Projectile Motion",

            title: "Complementary Angle Property",

            formula:
            "R(\\theta)=R(90^\\circ-\\theta)",

            description: "Two complementary projection angles produce equal ranges."
        },

        {
            category: "Projectile Motion",

            title: "Maximum Height and Range Relation",

            formula:
            "\\frac HR=\\frac{\\tan\\theta}{4}",

            description: "Relation between maximum height and horizontal range."
        },

        {
            category: "Projectile Motion",

            title: "Speed at Same Height",

            formula:
            "v_{up}=v_{down}",

            description: "Speed remains same at equal heights when air resistance is neglected."
        },

                // ==================================================
        // CIRCULAR MOTION
        // ==================================================

        {
            category: "Circular Motion",

            title: "Angular Displacement",

            formula:
            "\\theta=\\frac{s}{r}",

            description: "Angular displacement is the ratio of arc length to radius."
        },

        {
            category: "Circular Motion",

            title: "Arc Length",

            formula:
            "s=r\\theta",

            description: "Distance travelled along circular path."
        },

        {
            category: "Circular Motion",

            title: "Angular Displacement in Revolution",

            formula:
            "1\\ revolution=2\\pi\\ rad",

            description: "Conversion between revolution and radian."
        },

        {
            category: "Circular Motion",

            title: "Degree-Radian Conversion",

            formula:
            "180^\\circ=\\pi\\ rad",

            description: "Converts angular measurements."
        },


        // ==================================================
        // ANGULAR VELOCITY
        // ==================================================

        {
            category: "Circular Motion",

            title: "Angular Velocity",

            formula:
            "\\omega=\\frac{\\theta}{t}",

            description: "Rate of change of angular displacement."
        },

        {
            category: "Circular Motion",

            title: "Instantaneous Angular Velocity",

            formula:
            "\\omega=\\frac{d\\theta}{dt}",

            description: "Angular velocity at a particular instant."
        },

        {
            category: "Circular Motion",

            title: "Relation Between Linear and Angular Velocity",

            formula:
            "v=r\\omega",

            description: "Linear velocity of a particle moving in circular motion."
        },

        {
            category: "Circular Motion",

            title: "Angular Velocity in Terms of Period",

            formula:
            "\\omega=\\frac{2\\pi}{T}",

            description: "Angular velocity using time period."
        },

        {
            category: "Circular Motion",

            title: "Angular Velocity in Terms of Frequency",

            formula:
            "\\omega=2\\pi f",

            description: "Angular velocity using frequency."
        },


        // ==================================================
        // PERIOD AND FREQUENCY
        // ==================================================

        {
            category: "Circular Motion",

            title: "Frequency",

            formula:
            "f=\\frac1T",

            description: "Number of revolutions completed per second."
        },

        {
            category: "Circular Motion",

            title: "Time Period",

            formula:
            "T=\\frac1f",

            description: "Time required to complete one revolution."
        },

        {
            category: "Circular Motion",

            title: "Number of Revolutions",

            formula:
            "n=ft",

            description: "Number of revolutions completed in time t."
        },

        {
            category: "Circular Motion",

            title: "Angular Displacement After n Revolutions",

            formula:
            "\\theta=2\\pi n",

            description: "Angular displacement after completing n revolutions."
        },


        // ==================================================
        // ANGULAR ACCELERATION
        // ==================================================

        {
            category: "Circular Motion",

            title: "Angular Acceleration",

            formula:
            "\\alpha=\\frac{\\Delta\\omega}{\\Delta t}",

            description: "Rate of change of angular velocity."
        },

        {
            category: "Circular Motion",

            title: "Instantaneous Angular Acceleration",

            formula:
            "\\alpha=\\frac{d\\omega}{dt}",

            description: "Angular acceleration at an instant."
        },

        {
            category: "Circular Motion",

            title: "Tangential Acceleration",

            formula:
            "a_t=r\\alpha",

            description: "Acceleration due to change in angular velocity."
        },


        // ==================================================
        // ANGULAR EQUATIONS OF MOTION
        // ==================================================

        {
            category: "Circular Motion",

            title: "First Angular Equation",

            formula:
            "\\omega=\\omega_0+\\alpha t",

            description: "Angular equivalent of first equation of motion."
        },

        {
            category: "Circular Motion",

            title: "Second Angular Equation",

            formula:
            "\\theta=\\omega_0t+\\frac12\\alpha t^2",

            description: "Angular displacement under constant angular acceleration."
        },

        {
            category: "Circular Motion",

            title: "Third Angular Equation",

            formula:
            "\\omega^2=\\omega_0^2+2\\alpha\\theta",

            description: "Angular velocity-displacement relation."
        },

        {
            category: "Circular Motion",

            title: "Angular Displacement Using Average Angular Velocity",

            formula:
            "\\theta=\\frac{\\omega_0+\\omega}{2}t",

            description: "Valid for constant angular acceleration."
        },


        // ==================================================
        // CENTRIPETAL MOTION
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

            title: "Centripetal Acceleration Using Angular Velocity",

            formula:
            "a_c=r\\omega^2",

            description: "Centripetal acceleration in terms of angular velocity."
        },

        {
            category: "Circular Motion",

            title: "Centripetal Force",

            formula:
            "F_c=\\frac{mv^2}{r}",

            description: "Force required for circular motion."
        },

        {
            category: "Circular Motion",

            title: "Centripetal Force Using Angular Velocity",

            formula:
            "F_c=mr\\omega^2",

            description: "Centripetal force expressed using angular velocity."
        },

        {
            category: "Circular Motion",

            title: "Centripetal Force Direction",

            formula:
            "F_c\\rightarrow Center",

            description: "Centripetal force always acts towards the centre."
        },


        // ==================================================
        // UNIFORM CIRCULAR MOTION
        // ==================================================

        {
            category: "Circular Motion",

            title: "Constant Speed Condition",

            formula:
            "v=constant",

            description: "In uniform circular motion speed remains constant."
        },

        {
            category: "Circular Motion",

            title: "Velocity Change in Circular Motion",

            formula:
            "\\Delta v\\neq0",

            description: "Velocity changes continuously due to change in direction."
        },

        {
            category: "Circular Motion",

            title: "Acceleration in Uniform Circular Motion",

            formula:
            "a=a_c",

            description: "Only centripetal acceleration exists in uniform circular motion."
        },

        {
            category: "Circular Motion",

            title: "Distance Travelled in One Revolution",

            formula:
            "s=2\\pi r",

            description: "Circumference of circular path."
        },


        // ==================================================
        // VERTICAL CIRCULAR MOTION BASIC
        // ==================================================

        {
            category: "Circular Motion",

            title: "Minimum Velocity at Top of Vertical Circle",

            formula:
            "v=\\sqrt{gr}",

            description: "Minimum velocity required at the top for complete vertical circular motion."
        },

        {
            category: "Circular Motion",

            title: "Minimum Velocity at Bottom of Vertical Circle",

            formula:
            "v=\\sqrt{5gr}",

            description: "Minimum velocity required at bottom for complete vertical circle."
        },


        // ==================================================
        // BANKING BASIC RELATIONS
        // ==================================================

        {
            category: "Circular Motion",

            title: "Angle of Banking",

            formula:
            "\\tan\\theta=\\frac{v^2}{rg}",

            description: "Banking angle required for safe circular motion."
        },

        {
            category: "Circular Motion",

            title: "Safe Velocity on Banked Road",

            formula:
            "v=\\sqrt{rg\\tan\\theta}",

            description: "Velocity for which no friction is required on a banked road."
        }

    ],

    // ==================================================
// PROBLEMS
// CHAPTER 3 : DYNAMICS
// ==================================================

problems: [


// ==================================================
// REFERENCE FRAME
// ==================================================

{
    type: "Reference Frame - Rest and Motion",

    question: `
A passenger sitting inside a moving train observes another passenger
sitting beside him.

Is the second passenger at rest or in motion relative to him?
`,

    solution: `
Both passengers have the same velocity relative to the ground.

Relative velocity,

\\[
V_{AB}=V_A-V_B
\\]

\\[
=0
\\]

Hence the second passenger is

\\[
\\boxed{\\text{at rest}}
\\]

relative to the first passenger.
`
},


{
    type: "Reference Frame - Observer Dependent Motion",

    question: `
A person standing on a platform observes a train moving with velocity

\\[
20\\,m/s
\\]

Find the velocity of the train relative to the person.
`,

    solution: `
Relative velocity,

\\[
V_{train/person}
=
V_{train}-V_{person}
\\]

Since,

\\[
V_{person}=0
\\]

Therefore,

\\[
V_{train/person}=20m/s
\\]

\\[
\\boxed{20m/s}
\\]
`
},


{
    type: "Reference Frame - Changing Observer",

    question: `
A car moves east with velocity

\\[
40\\,km/h
\\]

A person inside another car moving east with velocity

\\[
60\\,km/h
\\]

Find the velocity of the first car relative to the second car.
`,

    solution: `
Taking east as positive,

\\[
V_{A/B}=V_A-V_B
\\]

\\[
=40-60
\\]

\\[
=-20km/h
\\]

Negative sign indicates opposite direction.

Therefore,

\\[
\\boxed{20km/h\\ west}
\\]
`
},



// ==================================================
// RELATIVE VELOCITY
// ==================================================


{
    type: "Relative Velocity - Same Direction",

    question: `
Two cars move in the same direction with velocities

\\[
72km/h
\\]

and

\\[
54km/h.
\\]

Find the velocity of the faster car relative to the slower car.
`,

    solution: `
For same direction motion,

\\[
V_{rel}=V_1-V_2
\\]

\\[
=72-54
\\]

\\[
\\boxed{18km/h}
\\]
`
},


{
    type: "Relative Velocity - Opposite Direction",

    question: `
Two trains move towards each other with velocities

\\[
50km/h
\\]

and

\\[
70km/h.
\\]

Find their relative velocity.
`,

    solution: `
For opposite directions,

relative velocity is the sum.

\\[
V_{rel}=50+70
\\]

\\[
\\boxed{120km/h}
\\]
`
},


{
    type: "Train Crossing Problem",

    question: `
A train of length

\\[
200m
\\]

moves with velocity

\\[
20m/s.
\\]

How much time will it take to cross a pole?
`,

    solution: `
Distance travelled,

\\[
s=200m
\\]

Velocity,

\\[
v=20m/s
\\]

Using,

\\[
t=\\frac{s}{v}
\\]

\\[
t=\\frac{200}{20}
\\]

\\[
\\boxed{10s}
\\]
`
},


{
    type: "Train Crossing Moving Train",

    question: `
Two trains of lengths

\\[
150m
\\]

and

\\[
250m
\\]

move in opposite directions with speeds

\\[
10m/s
\\]

and

\\[
15m/s.
\\]

Find the time required for complete crossing.
`,

    solution: `
Total distance,

\\[
s=150+250
\\]

\\[
=400m
\\]

Relative velocity,

\\[
v=10+15
\\]

\\[
=25m/s
\\]

Time,

\\[
t=\\frac{400}{25}
\\]

\\[
\\boxed{16s}
\\]
`
},


{
    type: "Rain Man Relative Velocity",

    question: `
Rain falls vertically with velocity

\\[
12m/s.
\\]

A man runs horizontally with velocity

\\[
5m/s.
\\]

Find the apparent velocity of rain observed by the man.
`,

    solution: `
Relative velocity,

\\[
V_{rain/man}
=
V_{rain}-V_{man}
\\]

Components:

Vertical component:

\\[
12m/s
\\]

Horizontal component:

\\[
5m/s
\\]

Magnitude,

\\[
V=
\\sqrt{12^2+5^2}
\\]

\\[
\\boxed{13m/s}
\\]
`
},


{
    type: "Rain Direction Problem",

    question: `
Rain falls vertically at

\\[
20m/s.
\\]

A man runs horizontally at

\\[
15m/s.
\\]

At what angle should he tilt his umbrella?
`,

    solution: `
For apparent rain,

\\[
\\tan\\theta
=
\\frac{horizontal\\ velocity}
{vertical\\ velocity}
\\]

\\[
=
\\frac{15}{20}
\\]

\\[
\\theta
=
\\tan^{-1}(0.75)
\\]

\\[
\\boxed{36.87^\\circ}
\\]

from vertical.
`
},


{
    type: "Boat and River Relative Velocity",

    question: `
A boat moves east with velocity

\\[
8m/s
\\]

while river current flows north with velocity

\\[
6m/s.
\\]

Find the resultant velocity.
`,

    solution: `
The velocities are perpendicular.

\\[
V=
\\sqrt{8^2+6^2}
\\]

\\[
\\boxed{10m/s}
\\]

Direction,

\\[
\\tan\\theta=
\\frac68
\\]

\\[
\\theta=36.87^\\circ
\\]
`
},


{
    type: "Average Speed - Equal Distances",

    question: `
A car travels half of a distance with speed

\\[
40km/h
\\]

and the remaining half with speed

\\[
60km/h.
\\]

Find the average speed.
`,

    solution: `
For equal distances,

\\[
v_{avg}
=
\\frac{2v_1v_2}{v_1+v_2}
\\]

\\[
=
\\frac{2(40)(60)}{100}
\\]

\\[
\\boxed{48km/h}
\\]
`
},


{
    type: "Average Velocity",

    question: `
A particle moves

\\[
30m
\\]

east and then

\\[
40m
\\]

north in

\\[
10s.
\\]

Find average velocity.
`,

    solution: `
Displacement,

\\[
s=
\\sqrt{30^2+40^2}
\\]

\\[
=50m
\\]

Average velocity,

\\[
=
\\frac{50}{10}
\\]

\\[
\\boxed{5m/s}
\\]

Direction,

\\[
\\theta=\\tan^{-1}\\frac{40}{30}
\\]
`
},

// ==================================================
// ACCELERATION
// ==================================================


{
    type: "Finding Acceleration from Velocity Change",

    question: `
A car increases its velocity from

\\[
10m/s
\\]

to

\\[
30m/s
\\]

in

\\[
5s.
\\]

Find the acceleration.
`,

    solution: `
Using,

\\[
a=\\frac{v-u}{t}
\\]

\\[
a=\\frac{30-10}{5}
\\]

\\[
\\boxed{4m/s^2}
\\]
`
},


{
    type: "Retardation",

    question: `
A car moving with velocity

\\[
25m/s
\\]

comes to rest in

\\[
5s.
\\]

Find its retardation.
`,

    solution: `
\\[
a=\\frac{v-u}{t}
\\]

\\[
a=\\frac{0-25}{5}
\\]

\\[
a=-5m/s^2
\\]

Retardation,

\\[
\\boxed{5m/s^2}
\\]
`
},


{
    type: "Acceleration from Distance and Time",

    question: `
A body starts from rest and travels

\\[
100m
\\]

in

\\[
10s.
\\]

Find its acceleration.
`,

    solution: `
Given,

\\[
u=0
\\]

Using,

\\[
s=ut+\\frac12at^2
\\]

\\[
100=0+\\frac12a(10)^2
\\]

\\[
100=50a
\\]

\\[
\\boxed{a=2m/s^2}
\\]
`
},


{
    type: "Finding Final Velocity",

    question: `
A particle starts with velocity

\\[
5m/s
\\]

and accelerates uniformly at

\\[
3m/s^2
\\]

for

\\[
4s.
\\]

Find final velocity.
`,

    solution: `
\\[
v=u+at
\\]

\\[
v=5+3(4)
\\]

\\[
\\boxed{17m/s}
\\]
`
},


{
    type: "Finding Displacement Using Velocity Equation",

    question: `
A particle has initial velocity

\\[
8m/s
\\]

and acceleration

\\[
2m/s^2.
\\]

Find displacement in

\\[
6s.
\\]
`,

    solution: `
\\[
s=ut+\\frac12at^2
\\]

\\[
=8(6)+\\frac12(2)(6)^2
\\]

\\[
=48+36
\\]

\\[
\\boxed{84m}
\\]
`
},


{
    type: "Acceleration Opposite to Velocity",

    question: `
A body moving with velocity

\\[
20m/s
\\]

has acceleration

\\[
-4m/s^2.
\\]

Find the time required to stop.
`,

    solution: `
At stopping,

\\[
v=0
\\]

Using,

\\[
v=u+at
\\]

\\[
0=20-4t
\\]

\\[
t=5s
\\]

\\[
\\boxed{5s}
\\]
`
},



// ==================================================
// POSITION TIME GRAPH
// ==================================================


{
    type: "Position-Time Graph - Velocity from Slope",

    question: `
The position of a particle changes from

\\[
x=20m
\\]

to

\\[
x=80m
\\]

in

\\[
5s.
\\]

Find velocity.
`,

    solution: `
Velocity is slope of position-time graph.

\\[
v=\\frac{\\Delta x}{\\Delta t}
\\]

\\[
=
\\frac{80-20}{5}
\\]

\\[
\\boxed{12m/s}
\\]
`
},


{
    type: "Position-Time Graph - Rest Condition",

    question: `
A particle has a horizontal position-time graph.

What does it represent?
`,

    solution: `
Slope of position-time graph gives velocity.

For horizontal line,

\\[
slope=0
\\]

Therefore,

\\[
\\boxed{v=0}
\\]

The particle is at rest.
`
},


{
    type: "Position-Time Graph - Increasing Slope",

    question: `
A position-time graph becomes steeper with time.

What does this indicate?
`,

    solution: `
The slope of position-time graph represents velocity.

Increasing slope means velocity is increasing.

Therefore,

\\[
\\boxed{\\text{The particle is accelerating}}
\\]
`
},


{
    type: "Comparing Velocities from Position Graph",

    question: `
Two particles A and B have straight position-time graphs.

The graph of A is steeper than B.

Which has greater velocity?
`,

    solution: `
Velocity is proportional to slope.

Since A has greater slope,

\\[
\\boxed{v_A>v_B}
\\]
`
},



// ==================================================
// VELOCITY TIME GRAPH
// ==================================================


{
    type: "Velocity-Time Graph - Acceleration",

    question: `
Velocity of a particle increases from

\\[
10m/s
\\]

to

\\[
40m/s
\\]

in

\\[
6s.
\\]

Find acceleration.
`,

    solution: `
Acceleration is slope of velocity-time graph.

\\[
a=\\frac{40-10}{6}
\\]

\\[
\\boxed{5m/s^2}
\\]
`
},


{
    type: "Velocity-Time Graph - Displacement from Area",

    question: `
A particle moves with constant velocity

\\[
20m/s
\\]

for

\\[
10s.
\\]

Find displacement using velocity-time graph.
`,

    solution: `
Displacement equals area under v-t graph.

Rectangle area,

\\[
s=vt
\\]

\\[
=20\\times10
\\]

\\[
\\boxed{200m}
\\]
`
},


{
    type: "Velocity-Time Graph - Uniform Acceleration",

    question: `
A velocity-time graph is a straight line increasing from

\\[
0m/s
\\]

to

\\[
30m/s
\\]

in

\\[
5s.
\\]

Find displacement.
`,

    solution: `
Area under graph is triangle.

\\[
s=
\\frac12 \\times base \\times height
\\]

\\[
=
\\frac12(5)(30)
\\]

\\[
\\boxed{75m}
\\]
`
},


{
    type: "Velocity-Time Graph - Retardation",

    question: `
A car slows down uniformly from

\\[
20m/s
\\]

to

\\[
0
\\]

in

\\[
8s.
\\]

Find distance travelled.
`,

    solution: `
Area under v-t graph:

\\[
s=
\\frac12(8)(20)
\\]

\\[
\\boxed{80m}
\\]
`
},


{
    type: "Velocity-Time Graph - Two Stage Motion",

    question: `
A particle moves with velocity

\\[
10m/s
\\]

for

\\[
5s
\\]

and then accelerates to

\\[
20m/s
\\]

in next

\\[
5s.
\\]

Find total displacement.
`,

    solution: `
First stage:

\\[
s_1=10\\times5=50m
\\]


Second stage:

Area of trapezium,

\\[
s_2=
\\frac12(10+20)5
\\]

\\[
=75m
\\]


Total displacement,

\\[
s=50+75
\\]

\\[
\\boxed{125m}
\\]
`
},


{
    type: "Velocity-Time Graph - Negative Velocity",

    question: `
A particle has velocity

\\[
-5m/s
\\]

for

\\[
10s.
\\]

Find displacement.
`,

    solution: `
Negative velocity indicates opposite direction.

\\[
s=vt
\\]

\\[
=(-5)(10)
\\]

\\[
\\boxed{-50m}
\\]

Negative sign indicates direction.
`
},

// ==================================================
// EQUATIONS OF MOTION
// ==================================================


{
    type: "First Equation of Motion",

    question: `
A car starts with velocity

\\[
15m/s
\\]

and accelerates at

\\[
4m/s^2
\\]

for

\\[
5s.
\\]

Find the final velocity.
`,

    solution: `
Using,

\\[
v=u+at
\\]

\\[
v=15+4(5)
\\]

\\[
\\boxed{35m/s}
\\]
`
},


{
    type: "Second Equation of Motion",

    question: `
A body starts from rest and accelerates at

\\[
5m/s^2.
\\]

Find the distance travelled in

\\[
6s.
\\]
`,

    solution: `
Using,

\\[
s=ut+\\frac12at^2
\\]

Since,

\\[
u=0
\\]

\\[
s=\\frac12(5)(6)^2
\\]

\\[
\\boxed{90m}
\\]
`
},


{
    type: "Third Equation of Motion",

    question: `
A particle moving with velocity

\\[
10m/s
\\]

accelerates uniformly at

\\[
3m/s^2.
\\]

Find the velocity after travelling

\\[
50m.
\\]
`,

    solution: `
Using,

\\[
v^2=u^2+2as
\\]

\\[
v^2=10^2+2(3)(50)
\\]

\\[
=400
\\]

\\[
v=\\boxed{20m/s}
\\]
`
},


{
    type: "Finding Time from Equation of Motion",

    question: `
A car accelerates from

\\[
20m/s
\\]

to

\\[
50m/s
\\]

with acceleration

\\[
5m/s^2.
\\]

Find time.
`,

    solution: `
\\[
v=u+at
\\]

\\[
50=20+5t
\\]

\\[
t=6s
\\]

\\[
\\boxed{6s}
\\]
`
},


{
    type: "Finding Acceleration from Distance",

    question: `
A train increases its velocity from

\\[
10m/s
\\]

to

\\[
30m/s
\\]

while covering

\\[
200m.
\\]

Find acceleration.
`,

    solution: `
Using,

\\[
v^2=u^2+2as
\\]

\\[
30^2=10^2+2(a)(200)
\\]

\\[
900-100=400a
\\]

\\[
\\boxed{a=2m/s^2}
\\]
`
},


{
    type: "Distance Covered in nth Second",

    question: `
A body starts from rest with acceleration

\\[
2m/s^2.
\\]

Find the distance travelled during the 5th second.
`,

    solution: `
Distance in nth second,

\\[
s_n=u+\\frac{a}{2}(2n-1)
\\]

Here,

\\[
u=0,n=5
\\]

\\[
s_5=
\\frac22(9)
\\]

\\[
\\boxed{9m}
\\]
`
},


{
    type: "Comparing Distance in Consecutive Seconds",

    question: `
A body starts from rest with uniform acceleration.

Find the ratio of distances travelled in

1st, 2nd and 3rd seconds.
`,

    solution: `
For uniformly accelerated motion,

Distances in consecutive seconds are:

\\[
1:3:5
\\]

Therefore,

\\[
\\boxed{1:3:5}
\\]
`
},



// ==================================================
// MEETING AND CATCHING PROBLEMS
// ==================================================


{
    type: "Two Bodies Moving Towards Each Other",

    question: `
Two cars are initially

\\[
300m
\\]

apart.

They move towards each other with velocities

\\[
20m/s
\\]

and

\\[
30m/s.
\\]

Find the time when they meet.
`,

    solution: `
Relative velocity,

\\[
V=20+30
\\]

\\[
=50m/s
\\]

Time,

\\[
t=\\frac{300}{50}
\\]

\\[
\\boxed{6s}
\\]
`
},


{
    type: "Chasing Problem",

    question: `
A thief runs at

\\[
8m/s.
\\]

A police officer starts chasing him with speed

\\[
10m/s.
\\]

If the initial gap is

\\[
100m,
\\]

find the catching time.
`,

    solution: `
Relative velocity,

\\[
=10-8
\\]

\\[
=2m/s
\\]

Time,

\\[
t=\\frac{100}{2}
\\]

\\[
\\boxed{50s}
\\]
`
},


{
    type: "Two Objects Same Starting Point",

    question: `
Two particles start from the same point.

A moves with constant velocity

\\[
5m/s
\\]

and B accelerates at

\\[
2m/s^2.
\\]

When will B overtake A?
`,

    solution: `
For A,

\\[
s_A=5t
\\]


For B,

\\[
s_B=\\frac12(2)t^2
\\]

\\[
=t^2
\\]


At overtaking,

\\[
t^2=5t
\\]

\\[
t(t-5)=0
\\]

Ignoring initial point,

\\[
\\boxed{t=5s}
\\]
`
},



// ==================================================
// FALLING BODIES
// ==================================================


{
    type: "Free Fall from Height",

    question: `
A stone is dropped from a height

\\[
80m.
\\]

Find the time taken to reach ground.

Take

\\[
g=10m/s^2.
\\]
`,

    solution: `
For falling body,

\\[
u=0
\\]

\\[
s=\\frac12gt^2
\\]

\\[
80=5t^2
\\]

\\[
t^2=16
\\]

\\[
\\boxed{t=4s}
\\]
`
},


{
    type: "Velocity Before Hitting Ground",

    question: `
A stone falls freely from height

\\[
45m.
\\]

Find its velocity before hitting the ground.

\\[
g=10m/s^2
\\]
`,

    solution: `
Using,

\\[
v^2=u^2+2gh
\\]

\\[
v^2=2(10)(45)
\\]

\\[
v=\\boxed{30m/s}
\\]
`
},


{
    type: "Distance Covered During Last Second of Fall",

    question: `
A body falls from a height.

Find the distance travelled during the last second if total falling time is

\\[
5s.
\\]

Take

\\[
g=10m/s^2.
\\]
`,

    solution: `
Distance in nth second,

\\[
s_n=
\\frac g2(2n-1)
\\]

For last second,

\\[
n=5
\\]

\\[
s_5=5(9)
\\]

\\[
\\boxed{45m}
\\]
`
},


{
    type: "Body Thrown Downward",

    question: `
A ball is thrown downward with velocity

\\[
5m/s
\\]

from a height

\\[
20m.
\\]

Find its velocity when it reaches ground.
`,

    solution: `
Using,

\\[
v^2=u^2+2gh
\\]

\\[
v^2=5^2+2(10)(20)
\\]

\\[
=425
\\]

\\[
\\boxed{v=20.6m/s}
\\]
`
},


{
    type: "Upward Projection",

    question: `
A ball is projected vertically upward with velocity

\\[
40m/s.
\\]

Find maximum height.

\\[
g=10m/s^2.
\\]
`,

    solution: `
At maximum height,

\\[
v=0
\\]

Using,

\\[
v^2=u^2-2gh
\\]

\\[
0=40^2-20h
\\]

\\[
h=\\boxed{80m}
\\]
`
},


{
    type: "Time of Ascent",

    question: `
A ball is projected vertically upward with velocity

\\[
30m/s.
\\]

Find time to reach maximum height.
`,

    solution: `
At maximum height,

\\[
v=0
\\]

\\[
0=u-gt
\\]

\\[
t=\\frac{30}{10}
\\]

\\[
\\boxed{3s}
\\]
`
},


{
    type: "Velocity at a Given Height",

    question: `
A ball is projected upward with velocity

\\[
50m/s.
\\]

Find its velocity after rising

\\[
80m.
\\]
`,

    solution: `
\\[
v^2=u^2-2gh
\\]

\\[
v^2=2500-2(10)(80)
\\]

\\[
=900
\\]

\\[
v=\\boxed{30m/s}
\\]
`
},

// ==================================================
// PROJECTILE MOTION
// ==================================================


{
    type: "Projectile - Resolving Initial Velocity",

    question: `
A projectile is thrown with velocity

\\[
50m/s
\\]

at an angle

\\[
37^\\circ
\\]

with horizontal.

Find the horizontal and vertical components.

\\[
\\cos37^\\circ=0.8,
\\sin37^\\circ=0.6
\\]
`,

    solution: `
Horizontal component,

\\[
u_x=u\\cos\\theta
\\]

\\[
=50(0.8)
\\]

\\[
\\boxed{40m/s}
\\]


Vertical component,

\\[
u_y=u\\sin\\theta
\\]

\\[
=50(0.6)
\\]

\\[
\\boxed{30m/s}
\\]
`
},


{
    type: "Projectile - Time of Flight",

    question: `
A projectile is thrown with velocity

\\[
40m/s
\\]

at an angle

\\[
30^\\circ.
\\]

Find the time of flight.

Take

\\[
g=10m/s^2.
\\]
`,

    solution: `
Vertical component,

\\[
u_y=40\\sin30^\\circ
\\]

\\[
=20m/s
\\]


Time of flight,

\\[
T=\\frac{2u_y}{g}
\\]

\\[
=\\frac{2(20)}{10}
\\]

\\[
\\boxed{4s}
\\]
`
},


{
    type: "Projectile - Maximum Height",

    question: `
A projectile is thrown with speed

\\[
60m/s
\\]

at

\\[
30^\\circ.
\\]

Find maximum height.

\\[
g=10m/s^2
\\]
`,

    solution: `
Vertical velocity,

\\[
u_y=60\\sin30^\\circ
\\]

\\[
=30m/s
\\]


Maximum height,

\\[
H=\\frac{u_y^2}{2g}
\\]

\\[
=\\frac{900}{20}
\\]

\\[
\\boxed{45m}
\\]
`
},


{
    type: "Projectile - Horizontal Range",

    question: `
A projectile is projected with velocity

\\[
50m/s
\\]

at

\\[
37^\\circ.
\\]

Find its range.

Take

\\[
g=10m/s^2
\\]

and

\\[
\\sin74^\\circ=0.96
\\]
`,

    solution: `
Range,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]


\\[
=
\\frac{50^2(0.96)}{10}
\\]


\\[
\\boxed{240m}
\\]
`
},


{
    type: "Projectile - Velocity at Any Time",

    question: `
A projectile is thrown with initial velocity

\\[
(20\\hat i+30\\hat j)m/s.
\\]

Find velocity after

\\[
2s.
\\]

Take

\\[
g=10m/s^2.
\\]
`,

    solution: `
Horizontal velocity remains constant,

\\[
v_x=20m/s
\\]


Vertical velocity,

\\[
v_y=u_y-gt
\\]

\\[
=30-10(2)
\\]

\\[
=10m/s
\\]


Therefore,

\\[
\\boxed{\\vec v=20\\hat i+10\\hat j}
\\]
`
},


{
    type: "Projectile - Resultant Velocity at Time",

    question: `
A projectile has velocity components

\\[
v_x=15m/s
\\]

and

\\[
v_y=20m/s.
\\]

Find resultant velocity.
`,

    solution: `
\\[
v=\\sqrt{v_x^2+v_y^2}
\\]

\\[
=\\sqrt{15^2+20^2}
\\]

\\[
\\boxed{25m/s}
\\]
`
},


{
    type: "Projectile - Velocity at Highest Point",

    question: `
A projectile is projected with speed

\\[
50m/s
\\]

at

\\[
37^\\circ.
\\]

Find velocity at maximum height.

\\[
\\cos37^\\circ=0.8
\\]
`,

    solution: `
At highest point,

\\[
v_y=0
\\]


Only horizontal component remains.

\\[
v=u\\cos\\theta
\\]

\\[
=50(0.8)
\\]

\\[
\\boxed{40m/s}
\\]
`
},


{
    type: "Projectile - Angle of Velocity at Time",

    question: `
A projectile has velocity components

\\[
20m/s
\\]

horizontal and

\\[
15m/s
\\]

vertical at a certain instant.

Find angle of velocity with horizontal.
`,

    solution: `
\\[
\\tan\\theta=
\\frac{v_y}{v_x}
\\]


\\[
=
\\frac{15}{20}
\\]


\\[
\\boxed{\\theta=36.87^\\circ}
\\]
`
},


{
    type: "Projectile - Horizontal Projection",

    question: `
A ball is projected horizontally with speed

\\[
20m/s
\\]

from a height

\\[
45m.
\\]

Find:

1. Time of fall

2. Horizontal distance travelled.

Take

\\[
g=10m/s^2
\\]
`,

    solution: `
Vertical motion:

\\[
h=\\frac12gt^2
\\]


\\[
45=5t^2
\\]


\\[
t=3s
\\]


Horizontal distance,

\\[
x=ut
\\]


\\[
=20(3)
\\]


\\[
\\boxed{60m}
\\]
`
},


{
    type: "Projectile - Horizontal Projection Velocity Before Landing",

    question: `
A body is projected horizontally with speed

\\[
15m/s
\\]

from height

\\[
20m.
\\]

Find velocity before hitting ground.
`,

    solution: `
Time of fall,

\\[
20=5t^2
\\]

\\[
t=2s
\\]


Vertical velocity,

\\[
v_y=gt
\\]

\\[
=20m/s
\\]


Horizontal velocity,

\\[
v_x=15m/s
\\]


Resultant velocity,

\\[
v=\\sqrt{15^2+20^2}
\\]


\\[
\\boxed{25m/s}
\\]
`
},


{
    type: "Projectile - Complementary Angles",

    question: `
Two projectiles are thrown with the same speed at angles

\\[
30^\\circ
\\]

and

\\[
60^\\circ.
\\]

Compare their ranges.
`,

    solution: `
Range,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]


For

\\[
30^\\circ:
\\]

\\[
\\sin60^\\circ
\\]


For

\\[
60^\\circ:
\\]

\\[
\\sin120^\\circ=\\sin60^\\circ
\\]


Therefore,

\\[
\\boxed{R_1=R_2}
\\]
`
},


{
    type: "Projectile - Maximum Range",

    question: `
At what angle should a projectile be projected to obtain maximum range?
`,

    solution: `
Range equation,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]


Maximum value of sine is 1.

Therefore,

\\[
2\\theta=90^\\circ
\\]


\\[
\\boxed{\\theta=45^\\circ}
\\]
`
},


{
    type: "Projectile - Maximum Range Value",

    question: `
A projectile is thrown with speed

\\[
40m/s.
\\]

Find maximum possible range.

\\[
g=10m/s^2
\\]
`,

    solution: `
Maximum range occurs at

\\[
45^\\circ
\\]


\\[
R_{max}=\\frac{u^2}{g}
\\]


\\[
=
\\frac{40^2}{10}
\\]


\\[
\\boxed{160m}
\\]
`
},


{
    type: "Projectile - Trajectory Equation",

    question: `
A projectile is projected with velocity

\\[
u
\\]

at angle

\\[
\\theta.
\\]

Write the equation of trajectory.
`,

    solution: `
The trajectory equation is,

\\[
\\boxed{
y=x\\tan\\theta-
\\frac{gx^2}{2u^2\\cos^2\\theta}
}
\\]
`
},

// ==================================================
// ADVANCED PROJECTILE MOTION
// ==================================================


{
    type: "Projectile From Height",

    question: `
A stone is projected horizontally with speed

\\[
10m/s
\\]

from the top of a tower of height

\\[
80m.
\\]

Find the horizontal distance travelled before hitting ground.

Take

\\[
g=10m/s^2.
\\]
`,

    solution: `
Vertical motion:

\\[
h=\\frac12gt^2
\\]


\\[
80=5t^2
\\]


\\[
t=4s
\\]


Horizontal distance,

\\[
x=ut
\\]


\\[
=10(4)
\\]


\\[
\\boxed{40m}
\\]
`
},


{
    type: "Projectile Landing Velocity from Height",

    question: `
A projectile is thrown horizontally with speed

\\[
30m/s
\\]

from a height

\\[
45m.
\\]

Find velocity just before reaching ground.
`,

    solution: `
Time of fall,

\\[
45=5t^2
\\]


\\[
t=3s
\\]


Vertical velocity,

\\[
v_y=gt
\\]


\\[
=30m/s
\\]


Horizontal velocity,

\\[
v_x=30m/s
\\]


Resultant velocity,

\\[
v=\\sqrt{30^2+30^2}
\\]


\\[
\\boxed{30\\sqrt2 m/s}
\\]
`
},


{
    type: "Projectile Returning to Same Height",

    question: `
A projectile is thrown with velocity

\\[
25m/s
\\]

at

\\[
53^\\circ.
\\]

Find its speed when it returns to the same height.

Ignore air resistance.
`,

    solution: `
During projectile motion without air resistance,

speed at same height remains unchanged.

Therefore,

\\[
\\boxed{25m/s}
\\]
`
},


{
    type: "Finding Projection Angle from Range and Height",

    question: `
A projectile has maximum height

\\[
20m
\\]

and range

\\[
80m.
\\]

Find the angle of projection.
`,

    solution: `
Using,

\\[
H=\\frac{u^2\\sin^2\\theta}{2g}
\\]


and,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]


Divide:

\\[
\\frac{R}{H}
=
\\frac{2\\sin2\\theta}{\\sin^2\\theta}
\\]


\\[
\\frac{80}{20}
=
\\frac{2(2\\sin\\theta\\cos\\theta)}
{\\sin^2\\theta}
\\]


\\[
4=4\\cot\\theta
\\]


\\[
\\cot\\theta=1
\\]


\\[
\\boxed{\\theta=45^\\circ}
\\]
`
},


{
    type: "Trajectory Passing Through Point",

    question: `
A projectile follows the path

\\[
y=x-\\frac{x^2}{100}.
\\]

Find the angle of projection.
`,

    solution: `
Trajectory equation:

\\[
y=x\\tan\\theta-
\\frac{gx^2}{2u^2\\cos^2\\theta}
\\]


Comparing,

\\[
\\tan\\theta=1
\\]


Therefore,

\\[
\\boxed{\\theta=45^\\circ}
\\]
`
},


{
    type: "Same Range Different Angles",

    question: `
A projectile is thrown with angle

\\[
20^\\circ.
\\]

Find another angle giving the same range.
`,

    solution: `
For same velocity,

complementary angles give same range.

\\[
\\theta_1+\\theta_2=90^\\circ
\\]


\\[
20+\\theta_2=90
\\]


\\[
\\boxed{\\theta_2=70^\\circ}
\\]
`
},


// ==================================================
// ADVANCED FALLING BODY & PROJECTILE APPLICATIONS
// ==================================================


// ---------------- FALLING BODY ADVANCED ----------------


{
    type: "Two Bodies Dropped Together",

    question: `
Two stones are dropped simultaneously from the same height.

Find the difference in their velocities after

5 seconds.

Take

g=10m/s².
`,

    solution: `
Both stones have the same acceleration and same initial velocity.

\\[
v=gt
\\]

Both acquire the same velocity.

Therefore,

\\[
\\boxed{\\Delta v=0}
\\]
`
},


{
    type: "Two Stones Released at Different Times",

    question: `
A stone is dropped from the top of a tower.

After

2 seconds,

another stone is dropped from the same point.

Find the difference between their velocities

5 seconds after the first stone was dropped.

Take

g=10m/s².
`,

    solution: `
First stone:

\\[
v_1=10(5)=50m/s
\\]


Second stone falls for:

\\[
5-2=3s
\\]


\\[
v_2=10(3)=30m/s
\\]


Difference,

\\[
\\Delta v=50-30
\\]

\\[
\\boxed{20m/s}
\\]
`
},


{
    type: "Finding Height of Tower from Falling Time",

    question: `
A stone takes

4 seconds

to reach the ground after being dropped from a tower.

Find the height.

Take

g=10m/s².
`,

    solution: `
For free fall,

\\[
h=\\frac12gt^2
\\]


\\[
=
\\frac12(10)(16)
\\]


\\[
\\boxed{80m}
\\]
`
},


{
    type: "Upward Throw from Building",

    question: `
A ball is thrown vertically upward from the top of a

45 m

high building with velocity

20m/s.

Find the time taken to reach the ground.

Take

g=10m/s².
`,

    solution: `
Taking upward direction positive,

\\[
-45=20t-5t^2
\\]


\\[
5t^2-20t-45=0
\\]


\\[
t^2-4t-9=0
\\]


\\[
t=2+\\sqrt{13}
\\]


\\[
\\boxed{t=5.6s}
\\]
`
},


{
    type: "Final Velocity Before Hitting Ground",

    question: `
A stone falls from a height of

80m.

Find its velocity just before reaching the ground.

Take

g=10m/s².
`,

    solution: `
Using,

\\[
v^2=u^2+2gh
\\]


\\[
v^2=2(10)(80)
\\]


\\[
v=40m/s
\\]


\\[
\\boxed{40m/s}
\\]
`
},


{
    type: "Multiple Bounce Problem",

    question: `
A ball is dropped from a height.

After each bounce it reaches half of the previous height.

If the first fall takes

2 seconds,

find the time taken for all subsequent upward and downward motions.

`,

    solution: `
Heights form a geometric progression:

\\[
h,\\frac h2,\\frac h4,...
\\]


Time is proportional to

\\[
\\sqrt h
\\]


Therefore total time after first bounce,

\\[
2\\left(
\\frac1{\\sqrt2}
+
\\frac1{2}
+
\\frac1{2\\sqrt2}
+...
\\right)
\\]


Using geometric series,

\\[
\\boxed{\\text{Finite geometric time series}}
\\]

`
},



// ==================================================
// ADVANCED PROJECTILE MOTION
// ==================================================


{
    type: "Horizontal Projection from Height",

    question: `
A ball is projected horizontally with speed

20m/s

from the top of a cliff of height

45m.

Find:

1. time of flight

2. horizontal range.

Take

g=10m/s².
`,

    solution: `
Vertical motion:

\\[
45=\\frac12gt^2
\\]


\\[
45=5t^2
\\]


\\[
t=3s
\\]


Horizontal range:

\\[
R=u_xt
\\]


\\[
=20(3)
\\]


\\[
\\boxed{R=60m}
\\]
`
},


{
    type: "Horizontal Projectile Impact Velocity",

    question: `
A particle is projected horizontally with speed

15m/s

from a height of

20m.

Find its velocity before hitting ground.

Take

g=10m/s².
`,

    solution: `
Horizontal component:

\\[
v_x=15m/s
\\]


Vertical component:

\\[
v_y=\\sqrt{2gh}
\\]


\\[
=\\sqrt{400}
\\]


\\[
=20m/s
\\]


Resultant velocity:

\\[
v=\\sqrt{15^2+20^2}
\\]


\\[
\\boxed{25m/s}
\\]
`
},


{
    type: "Projectile from Elevated Ground",

    question: `
A projectile is thrown with velocity

30m/s

at

30°

from the top of a

20m

building.

Find the time to hit ground.

Take

g=10m/s².
`,

    solution: `
Vertical component,

\\[
u_y=15m/s
\\]


Equation:

\\[
-20=15t-5t^2
\\]


\\[
t^2-3t-4=0
\\]


\\[
t=4s
\\]


\\[
\\boxed{4s}
\\]
`
},


{
    type: "Finding Initial Velocity from Range and Time",

    question: `
A projectile covers horizontal range

120m

in

4s.

Find the horizontal component of initial velocity.
`,

    solution: `
\\[
R=u_xt
\\]


\\[
120=4u_x
\\]


\\[
\\boxed{u_x=30m/s}
\\]
`
},


{
    type: "Finding Projectile Height from Time",

    question: `
A projectile reaches maximum height after

3 seconds.

Find its initial vertical velocity.

Take

g=10m/s².
`,

    solution: `
At maximum height,

\\[
v_y=0
\\]


\\[
0=u_y-gt
\\]


\\[
u_y=10(3)
\\]


\\[
\\boxed{30m/s}
\\]
`
},


{
    type: "Projectile Given Range and Height",

    question: `
A projectile has maximum height

20m

and range

80m.

Find the initial velocity components.

Take

g=10m/s².
`,

    solution: `
Maximum height,

\\[
H=\\frac{u_y^2}{2g}
\\]


\\[
20=
\\frac{u_y^2}{20}
\\]


\\[
u_y=20m/s
\\]


Time,

\\[
T=\\frac{2u_y}{g}=4s
\\]


Range,

\\[
80=u_x(4)
\\]


\\[
u_x=20m/s
\\]


\\[
\\boxed{u_x=20m/s,\\ u_y=20m/s}
\\]
`
},


{
    type: "Two Projectiles Meeting",

    question: `
Two projectiles are fired simultaneously from the same point with the same speed.

One is projected at angle

30°

and another at

60°.

Compare their ranges.
`,

    solution: `
Range,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]


For both:

\\[
\\sin60^\\circ=\\sin120^\\circ
\\]


Therefore,

\\[
\\boxed{R_1=R_2}
\\]
`
},


{
    type: "Projectile on Inclined Plane Basic",

    question: `
A projectile is fired on an inclined plane.

The range along the plane depends on both projection angle and inclination angle.

What special condition gives maximum range?

`,

    solution: `
For an inclined plane,

maximum range occurs when

\\[
\\boxed{
\\theta=
45^\\circ+
\\frac{\\alpha}{2}
}
\\]

where

\\(\\alpha\\)

is inclination angle.
`
},


{
    type: "Projectile Maximum Height and Range Relation",

    question: `
A projectile has range

100m

and maximum height

25m.

Find the angle of projection.

Take

g=10m/s².
`,

    solution: `
Using,

\\[
R=u_xT
\\]


and

\\[
H=\\frac{u_y^2}{2g}
\\]


From height,

\\[
u_y=\\sqrt{500}
\\]


The relation gives,

\\[
\\boxed{\\theta=45^\\circ}
\\]

`
},





// ==================================================
// CIRCULAR MOTION
// ==================================================


{
    type: "Angular Displacement",

    question: `
A wheel rotates through

\\[
5
\\]

complete revolutions.

Find angular displacement.
`,

    solution: `
One revolution,

\\[
=2\\pi rad
\\]


Therefore,

\\[
\\theta=5(2\\pi)
\\]


\\[
\\boxed{10\\pi rad}
\\]
`
},


{
    type: "Degree to Radian Conversion",

    question: `
Convert

\\[
180^\\circ
\\]

into radians.
`,

    solution: `
Using,

\\[
180^\\circ=\\pi rad
\\]


Therefore,

\\[
\\boxed{\\pi rad}
\\]
`
},


{
    type: "Radian to Degree Conversion",

    question: `
Convert

\\[
\\frac{2\\pi}{3}
\\]

radians into degrees.
`,

    solution: `
\\[
1rad=\\frac{180^\\circ}{\\pi}
\\]


\\[
\\frac{2\\pi}{3}
\\times
\\frac{180}{\\pi}
\\]


\\[
\\boxed{120^\\circ}
\\]
`
},


{
    type: "Angular Velocity",

    question: `
A body completes

\\[
10
\\]

revolutions in

\\[
5s.
\\]

Find angular velocity.
`,

    solution: `
Angular displacement,

\\[
\\theta=10(2\\pi)
\\]


\\[
=20\\pi
\\]


Angular velocity,

\\[
\\omega=\\frac{\\theta}{t}
\\]


\\[
=\\frac{20\\pi}{5}
\\]


\\[
\\boxed{4\\pi rad/s}
\\]
`
},


{
    type: "Linear Velocity from Angular Velocity",

    question: `
A particle moves in a circle of radius

\\[
2m
\\]

with angular velocity

\\[
5rad/s.
\\]

Find linear velocity.
`,

    solution: `
Relation,

\\[
v=r\\omega
\\]


\\[
=2(5)
\\]


\\[
\\boxed{10m/s}
\\]
`
},


{
    type: "Angular Velocity from Linear Velocity",

    question: `
A particle moves with speed

\\[
20m/s
\\]

in a circular path of radius

\\[
4m.
\\]

Find angular velocity.
`,

    solution: `
\\[
v=r\\omega
\\]


\\[
20=4\\omega
\\]


\\[
\\boxed{5rad/s}
\\]
`
},


{
    type: "Angular Acceleration",

    question: `
The angular velocity of a wheel changes from

\\[
5rad/s
\\]

to

\\[
25rad/s
\\]

in

\\[
4s.
\\]

Find angular acceleration.
`,

    solution: `
\\[
\\alpha=
\\frac{\\omega_2-\\omega_1}{t}
\\]


\\[
=
\\frac{25-5}{4}
\\]


\\[
\\boxed{5rad/s^2}
\\]
`
},


{
    type: "Centripetal Acceleration",

    question: `
A car moves in a circular path of radius

\\[
50m
\\]

with speed

\\[
20m/s.
\\]

Find centripetal acceleration.
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]


\\[
=
\\frac{20^2}{50}
\\]


\\[
\\boxed{8m/s^2}
\\]
`
},


{
    type: "Centripetal Acceleration Using Angular Velocity",

    question: `
A particle rotates with angular velocity

\\[
4rad/s
\\]

in a circle of radius

\\[
3m.
\\]

Find centripetal acceleration.
`,

    solution: `
Using,

\\[
a_c=r\\omega^2
\\]


\\[
=3(4)^2
\\]


\\[
\\boxed{48m/s^2}
\\]
`
},


{
    type: "Finding Radius from Centripetal Acceleration",

    question: `
A particle moves with velocity

\\[
30m/s
\\]

and centripetal acceleration

\\[
15m/s^2.
\\]

Find radius.
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]


\\[
15=\\frac{900}{r}
\\]


\\[
\\boxed{r=60m}
\\]
`
},


{
    type: "Circular Motion Period",

    question: `
A particle completes one revolution in

\\[
4s.
\\]

Find angular velocity.
`,

    solution: `
Time period,

\\[
T=4s
\\]


\\[
\\omega=\\frac{2\\pi}{T}
\\]


\\[
\\boxed{\\frac{\\pi}{2}rad/s}
\\]
`
},


{
    type: "Frequency and Angular Velocity",

    question: `
A rotating body has frequency

\\[
5Hz.
\\]

Find angular velocity.
`,

    solution: `
\\[
\\omega=2\\pi f
\\]


\\[
=2\\pi(5)
\\]


\\[
\\boxed{10\\pi rad/s}
\\]
`
},


{
    type: "Clock Hand Angular Velocity",

    question: `
Find angular velocity of the second hand of a clock.
`,

    solution: `
The second hand completes one revolution in

\\[
60s
\\]


\\[
\\omega=
\\frac{2\\pi}{60}
\\]


\\[
\\boxed{\\frac{\\pi}{30}rad/s}
\\]
`
},


// ==================================================
// ADVANCED CIRCULAR MOTION APPLICATIONS
// ==================================================


// ---------------- CONICAL PENDULUM ----------------


{
    type: "Conical Pendulum Basic",

    question: `
A bob of mass

2 kg

is attached to a string of length

1 m

and moves in a horizontal circle making an angle

60°

with the vertical.

Find the tension in the string.

Take

g=10m/s².
`,

    solution: `
For vertical equilibrium,

\\[
T\\cos\\theta=mg
\\]


\\[
T\\cos60^\\circ=2(10)
\\]


\\[
T(0.5)=20
\\]


\\[
\\boxed{T=40N}
\\]
`
},


{
    type: "Conical Pendulum Angular Velocity",

    question: `
A conical pendulum has length

2m

and makes an angle

30°

with the vertical.

Find its angular velocity.

Take

g=10m/s².
`,

    solution: `
For conical pendulum,

\\[
\\omega^2=
\\frac{g}{l\\cos\\theta}
\\]


\\[
=
\\frac{10}{2\\cos30^\\circ}
\\]


\\[
\\omega^2=5.77
\\]


\\[
\\boxed{\\omega=2.4rad/s}
\\]
`
},


{
    type: "Conical Pendulum Radius",

    question: `
A pendulum of length

5m

makes an angle

37°

with the vertical.

Find the radius of its circular path.
`,

    solution: `
Radius,

\\[
r=l\\sin\\theta
\\]


\\[
=5\\sin37^\\circ
\\]


\\[
\\boxed{3m}
\\]
`
},


{
    type: "Conical Pendulum Time Period",

    question: `
Find the time period of a conical pendulum of length

4m

making angle

60°

with vertical.

Take

g=10m/s².
`,

    solution: `
Time period,

\\[
T=2\\pi\\sqrt{\\frac{l\\cos\\theta}{g}}
\\]


\\[
=
2\\pi
\\sqrt{
\\frac{4(0.5)}{10}
}
\\]


\\[
\\boxed{T=2.81s}
\\]
`
},



// ---------------- LOOP THE LOOP ----------------


{
    type: "Loop the Loop Minimum Speed at Top",

    question: `
A particle moves in a vertical loop of radius

4m.

Find minimum speed at the highest point.

Take

g=10m/s².
`,

    solution: `
At highest point,

\\[
\\frac{mv^2}{r}=mg
\\]


\\[
v=\\sqrt{rg}
\\]


\\[
=\\sqrt{40}
\\]


\\[
\\boxed{6.32m/s}
\\]
`
},


{
    type: "Loop the Loop Minimum Speed at Bottom",

    question: `
Find the minimum speed required at the bottom of a vertical loop of radius

3m.

Take

g=10m/s².
`,

    solution: `
For complete looping,

\\[
v_b=\\sqrt{5gr}
\\]


\\[
=
\\sqrt{5(10)(3)}
\\]


\\[
\\boxed{12.25m/s}
\\]
`
},


{
    type: "Loop the Loop Minimum Height",

    question: `
A particle starts from rest and slides into a vertical loop of radius

2m.

Find the minimum height required.

Take

g=10m/s².
`,

    solution: `
Using energy conservation,

\\[
mgh=
mg(2r)+\\frac12mv^2
\\]


At top,

\\[
v^2=rg
\\]


Therefore,

\\[
h=2r+\\frac r2
\\]


\\[
=\\frac52r
\\]


\\[
\\boxed{h=5m}
\\]
`
},


{
    type: "Loop Tension at Bottom",

    question: `
A mass of

1kg

moves in a vertical loop of radius

2m.

Its speed at bottom is

10m/s.

Find tension at bottom.

Take

g=10m/s².
`,

    solution: `
At bottom,

\\[
T-mg=\\frac{mv^2}{r}
\\]


\\[
T=10+\\frac{100}{2}
\\]


\\[
\\boxed{T=60N}
\\]
`
},


{
    type: "Loop Tension at Top",

    question: `
A particle of mass

2kg

moves at the top of a loop of radius

5m

with speed

10m/s.

Find tension.

Take

g=10m/s².
`,

    solution: `
At top,

\\[
T+mg=\\frac{mv^2}{r}
\\]


\\[
T=
\\frac{2(100)}5-20
\\]


\\[
\\boxed{T=20N}
\\]
`
},



// ---------------- ENERGY + CIRCULAR MOTION ----------------


{
    type: "Energy Conservation in Circular Motion",

    question: `
A particle starts from rest at height

10m

and reaches the bottom of a circular track.

Find its velocity.

Take

g=10m/s².
`,

    solution: `
Energy conservation,

\\[
mgh=\\frac12mv^2
\\]


\\[
v=\\sqrt{2gh}
\\]


\\[
=\\sqrt{200}
\\]


\\[
\\boxed{14.14m/s}
\\]
`
},


{
    type: "Finding Height from Circular Speed",

    question: `
A particle reaches the bottom of a track with speed

20m/s.

From what height was it released?

Take

g=10m/s².
`,

    solution: `
\\[
mgh=\\frac12mv^2
\\]


\\[
h=
\\frac{v^2}{2g}
\\]


\\[
=
\\frac{400}{20}
\\]


\\[
\\boxed{20m}
\\]
`
},



// ---------------- ROUGH HORIZONTAL CIRCULAR TRACK ----------------


{
    type: "Maximum Speed on Rough Circular Track",

    question: `
A car moves on a horizontal circular road of radius

40m.

Coefficient of friction is

0.4.

Find maximum speed.

Take

g=10m/s².
`,

    solution: `
Friction provides centripetal force,

\\[
\\mu mg=
\\frac{mv^2}{r}
\\]


\\[
v=\\sqrt{\\mu rg}
\\]


\\[
=
\\sqrt{0.4(40)(10)}
\\]


\\[
\\boxed{12.65m/s}
\\]
`
},


{
    type: "Maximum Radius on Rough Circular Road",

    question: `
A car moves with speed

20m/s.

Coefficient of friction is

0.5.

Find the minimum radius required.

Take

g=10m/s².
`,

    solution: `
\\[
\\mu mg=
\\frac{mv^2}{r}
\\]


\\[
r=
\\frac{v^2}{\\mu g}
\\]


\\[
=
\\frac{400}{5}
\\]


\\[
\\boxed{80m}
\\]
`
},


{
    type: "Friction Direction in Circular Motion",

    question: `
A vehicle moves on a horizontal circular road.

What is the direction of frictional force?
`,

    solution: `
Friction provides centripetal force.

Therefore it acts:

\\[
\\boxed{\\text{towards the centre of the circle}}
\\]
`
},


{
    type: "Circular Motion with Changing Radius",

    question: `
A particle moves with constant angular velocity.

If its radius is doubled,

what happens to centripetal acceleration?
`,

    solution: `
\\[
a_c=\\omega^2r
\\]


If radius doubles,

\\[
a'_c=2a_c
\\]


\\[
\\boxed{\\text{Acceleration doubles}}
\\]
`
},


{
    type: "Circular Motion with Changing Speed",

    question: `
A particle moves in a circle.

If its speed is doubled while radius remains constant,

how does centripetal force change?
`,

    solution: `
\\[
F_c=\\frac{mv^2}{r}
\\]


Since,

\\[
v'=2v
\\]


\\[
F'_c=4F_c
\\]


\\[
\\boxed{\\text{Force becomes four times}}
\\]
`
},



// ==================================================
// ADVANCED CIRCULAR MOTION & APPLICATIONS
// ==================================================


// ---------------- CENTRIPETAL FORCE ----------------


{
    type: "Centripetal Force Basic",

    question: `
A body of mass

2 kg

moves in a circle of radius

5 m

with speed

10 m/s.

Find the centripetal force.
`,

    solution: `
Centripetal force,

\\[
F_c=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{2(10)^2}{5}
\\]

\\[
\\boxed{40N}
\\]
`
},


{
    type: "Finding Mass from Centripetal Force",

    question: `
A particle moves in a circle of radius

4 m

with speed

8 m/s.

If the centripetal force is

32 N,

find its mass.
`,

    solution: `
\\[
F_c=\\frac{mv^2}{r}
\\]

\\[
32=
\\frac{m(64)}4
\\]

\\[
m=2kg
\\]

\\[
\\boxed{2kg}
\\]
`
},


{
    type: "Finding Speed from Centripetal Force",

    question: `
A 5 kg body moves in a circular path of radius

10 m.

The centripetal force acting on it is

50 N.

Find its speed.
`,

    solution: `
\\[
F_c=\\frac{mv^2}{r}
\\]

\\[
50=
\\frac{5v^2}{10}
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
    type: "Centripetal Force and Angular Velocity",

    question: `
A particle of mass

3 kg

moves in a circle of radius

2 m

with angular velocity

5 rad/s.

Find the centripetal force.
`,

    solution: `
Using,

\\[
F_c=m\\omega^2r
\\]

\\[
=3(5)^2(2)
\\]

\\[
\\boxed{150N}
\\]
`
},


{
    type: "Centripetal Acceleration from Speed",

    question: `
A car moves with speed

20 m/s

along a circular road of radius

50 m.

Find centripetal acceleration.
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]

\\[
=
\\frac{400}{50}
\\]

\\[
\\boxed{8m/s^2}
\\]
`
},


{
    type: "Centripetal Acceleration from Angular Velocity",

    question: `
A particle rotates with angular velocity

4 rad/s

in a circle of radius

3 m.

Find centripetal acceleration.
`,

    solution: `
\\[
a_c=\\omega^2r
\\]

\\[
=16\\times3
\\]

\\[
\\boxed{48m/s^2}
\\]
`
},

// ==================================================
// ADVANCED CIRCULAR MOTION
// ==================================================

{
    type: "Centripetal Acceleration from Velocity and Radius",

    question: `
A car moves in a circular path of radius

50 m

with speed

20 m/s.

Find its centripetal acceleration.
`,

    solution: `
Centripetal acceleration,

\\[
a_c=\\frac{v^2}{r}
\\]

\\[
=
\\frac{20^2}{50}
\\]

\\[
\\boxed{8m/s^2}
\\]
`
},


{
    type: "Finding Velocity for Given Centripetal Acceleration",

    question: `
A particle moves in a circle of radius

4 m.

If its centripetal acceleration is

16 m/s²,

find its velocity.
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]

\\[
16=\\frac{v^2}{4}
\\]

\\[
v^2=64
\\]

\\[
\\boxed{v=8m/s}
\\]
`
},


{
    type: "Finding Radius of Circular Motion",

    question: `
A body moves with velocity

30 m/s

and centripetal acceleration

15 m/s².

Find the radius of the circular path.
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]

\\[
15=\\frac{30^2}{r}
\\]

\\[
r=60m
\\]

\\[
\\boxed{60m}
\\]
`
},


{
    type: "Angular Velocity and Linear Velocity Relation",

    question: `
A wheel of radius

0.5 m

rotates with angular velocity

20 rad/s.

Find the linear velocity of a point on its rim.
`,

    solution: `
Relation,

\\[
v=r\\omega
\\]

\\[
v=0.5\\times20
\\]

\\[
\\boxed{10m/s}
\\]
`
},


{
    type: "Centripetal Acceleration Using Angular Velocity",

    question: `
A particle moves in a circle of radius

2 m

with angular velocity

5 rad/s.

Find its centripetal acceleration.
`,

    solution: `
\\[
a_c=r\\omega^2
\\]

\\[
=2(5)^2
\\]

\\[
\\boxed{50m/s^2}
\\]
`
},


{
    type: "Number of Revolutions from Angular Displacement",

    question: `
A wheel rotates through an angle of

20π rad.

Find the number of revolutions.
`,

    solution: `
One revolution,

\\[
=2\\pi rad
\\]

Number of revolutions,

\\[
n=\\frac{20\\pi}{2\\pi}
\\]

\\[
\\boxed{10}
\\]
`
},


{
    type: "Time Period from Angular Velocity",

    question: `
A particle rotates with angular velocity

4π rad/s.

Find its time period.
`,

    solution: `
\\[
\\omega=\\frac{2\\pi}{T}
\\]

\\[
4\\pi=\\frac{2\\pi}{T}
\\]

\\[
\\boxed{T=0.5s}
\\]
`
},


// ==================================================
// CENTRIPETAL FORCE APPLICATIONS
// ==================================================

{
    type: "Centripetal Force from Mass and Velocity",

    question: `
A body of mass

2 kg

moves with velocity

10 m/s

in a circle of radius

5 m.

Find the centripetal force.
`,

    solution: `
\\[
F_c=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{2(10)^2}{5}
\\]

\\[
\\boxed{40N}
\\]
`
},


{
    type: "Finding Mass from Centripetal Force",

    question: `
A particle moving at

12 m/s

in a circle of radius

6 m

experiences centripetal force

48 N.

Find its mass.
`,

    solution: `
\\[
F_c=\\frac{mv^2}{r}
\\]

\\[
48=\\frac{m(144)}6
\\]

\\[
m=2kg
\\]

\\[
\\boxed{2kg}
\\]
`
},


{
    type: "Tension Providing Centripetal Force",

    question: `
A stone of mass

0.5 kg

is tied to a string of length

2 m

and rotated with speed

4 m/s.

Find the tension in the string.
`,

    solution: `
\\[
T=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{0.5(16)}2
\\]

\\[
\\boxed{4N}
\\]
`
},


{
    type: "Vertical Circular Motion Minimum Velocity",

    question: `
Find the minimum velocity required at the top of a vertical circle of radius

2 m

so that the string remains just taut.

Take

g=10m/s^2.
`,

    solution: `
At limiting condition,

\\[
\\frac{mv^2}{r}=mg
\\]

\\[
v^2=rg
\\]

\\[
v=\\sqrt{2(10)}
\\]

\\[
\\boxed{\\sqrt{20}m/s}
\\]
`
},


{
    type: "Banking Angle Without Friction",

    question: `
A road is banked for a vehicle moving with speed

20 m/s.

The radius of the curve is

50 m.

Find the banking angle.

Take

g=10m/s².
`,

    solution: `
For frictionless banking,

\\[
\\tan\\theta=\\frac{v^2}{rg}
\\]

\\[
=
\\frac{400}{50(10)}
\\]

\\[
=0.8
\\]

\\[
\\boxed{\\theta=38.66^\\circ}
\\]
`
},


{
    type: "Finding Safe Speed on Banked Road",

    question: `
A road is banked at

30°.

The radius of the curve is

100 m.

Find the safe speed.

Take

g=10m/s².
`,

    solution: `
\\[
v=\\sqrt{rg\\tan\\theta}
\\]

\\[
=
\\sqrt{100(10)(\\tan30^\\circ)}
\\]

\\[
\\boxed{24m/s}
\\]
`
},


// ==================================================
// ROTATING WHEEL PROBLEMS
// ==================================================

{
    type: "Wheel Angular Speed",

    question: `
A wheel rotates at

120 rpm.

Find its angular velocity.
`,

    solution: `
\\[
120rpm=2rps
\\]

\\[
\\omega=2\\pi(2)
\\]

\\[
\\boxed{4\\pi rad/s}
\\]
`
},


{
    type: "Distance Travelled by Rolling Wheel",

    question: `
A wheel of radius

0.4 m

makes

50 revolutions.

Find the distance travelled.
`,

    solution: `
One revolution distance,

\\[
2\\pi r
\\]

Total distance,

\\[
=50(2\\pi)(0.4)
\\]

\\[
\\boxed{40\\pi m}
\\]
`
},


{
    type: "Acceleration of Point on Rotating Wheel",

    question: `
A point on a wheel is

0.2 m

from the centre.

If angular velocity is

10 rad/s,

find centripetal acceleration.
`,

    solution: `
\\[
a_c=r\\omega^2
\\]

\\[
=0.2(100)
\\]

\\[
\\boxed{20m/s^2}
\\]
`
},


// ==================================================
// MIXED DYNAMICS
// ==================================================

{
    type: "Friction Providing Centripetal Force",

    question: `
A car of mass

1000 kg

moves on a flat circular road of radius

50 m

with speed

10 m/s.

Find the required frictional force.
`,

    solution: `
Friction provides centripetal force,

\\[
f=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{1000(100)}{50}
\\]

\\[
\\boxed{2000N}
\\]
`
},


{
    type: "Pendulum Circular Motion Component",

    question: `
A conical pendulum has length

2 m

and makes an angle

60°

with the vertical.

Find the radius of the circular path.
`,

    solution: `
Radius,

\\[
r=l\\sin\\theta
\\]

\\[
=2\\sin60^\\circ
\\]

\\[
\\boxed{\\sqrt3m}
\\]
`
},


{
    type: "Mixed Projectile and Circular Motion Concept",

    question: `
A particle is projected horizontally with speed

20 m/s

from a height.

At any instant its velocity components are

20 m/s horizontally

and

15 m/s vertically.

Find its speed.
`,

    solution: `
\\[
v=\\sqrt{v_x^2+v_y^2}
\\]

\\[
=\\sqrt{20^2+15^2}
\\]

\\[
\\boxed{25m/s}
\\]
`
},



// ---------------- VERTICAL CIRCULAR MOTION ----------------


{
    type: "Vertical Circle Minimum Velocity at Top",

    question: `
A particle is moving in a vertical circle of radius

2 m.

Find the minimum velocity required at the highest point.

Take

g=10m/s².
`,

    solution: `
At the highest point,

\\[
\\frac{mv^2}{r}=mg
\\]

Therefore,

\\[
v^2=rg
\\]

\\[
v=\\sqrt{2(10)}
\\]

\\[
\\boxed{4.47m/s}
\\]
`
},


{
    type: "Vertical Circle Minimum Velocity at Bottom",

    question: `
Find the minimum velocity required at the bottom of a vertical circle of radius

5 m.

Take

g=10m/s².
`,

    solution: `
For complete vertical motion,

\\[
v_b=\\sqrt{5gr}
\\]

\\[
=
\\sqrt{5(10)(5)}
\\]

\\[
\\boxed{15.81m/s}
\\]
`
},


{
    type: "Tension at Lowest Point of Vertical Circle",

    question: `
A mass of

2 kg

moves in a vertical circle of radius

4 m.

Its speed at the lowest point is

10 m/s.

Find the tension.

Take

g=10m/s².
`,

    solution: `
At lowest point,

\\[
T-mg=\\frac{mv^2}{r}
\\]

\\[
T=mg+\\frac{mv^2}{r}
\\]

\\[
=20+\\frac{2(100)}4
\\]

\\[
\\boxed{70N}
\\]
`
},


{
    type: "Tension at Highest Point",

    question: `
A particle of mass

1 kg

moves at the top of a vertical circle of radius

5 m

with speed

10 m/s.

Find the tension.

Take

g=10m/s².
`,

    solution: `
At top,

\\[
T+mg=\\frac{mv^2}{r}
\\]

\\[
T=
\\frac{100}{5}-10
\\]

\\[
\\boxed{10N}
\\]
`
},



// ---------------- BANKING OF ROADS ----------------


{
    type: "Banking Angle Basic",

    question: `
A road is banked at an angle

\\(\\theta\\)

for a vehicle moving with speed

v.

Write the relation between radius and banking angle.
`,

    solution: `
For ideal banking,

\\[
\\tan\\theta=
\\frac{v^2}{rg}
\\]

`
},


{
    type: "Finding Banking Angle",

    question: `
A car moves with speed

20 m/s

on a circular road of radius

80 m.

Find the banking angle.

Take

g=10m/s².
`,

    solution: `
\\[
\\tan\\theta=
\\frac{v^2}{rg}
\\]

\\[
=
\\frac{400}{800}
\\]

\\[
=0.5
\\]

\\[
\\boxed{\\theta=26.56^\\circ}
\\]
`
},


{
    type: "Finding Maximum Speed on Banked Road",

    question: `
A road is banked at

30°

with radius

50 m.

Find the safe speed.

Take

g=10m/s².
`,

    solution: `
\\[
v=\\sqrt{rg\\tan\\theta}
\\]

\\[
=
\\sqrt{50(10)(\\tan30^\\circ)}
\\]

\\[
\\boxed{16.99m/s}
\\]
`
},



// ---------------- ROTATING WHEEL ----------------


{
    type: "Linear Speed of Rotating Wheel",

    question: `
A wheel rotates at

120 rpm.

Its radius is

0.5 m.

Find the linear speed at the rim.
`,

    solution: `
Frequency,

\\[
f=\\frac{120}{60}=2Hz
\\]

Angular velocity,

\\[
\\omega=2\\pi f=4\\pi
\\]

Linear speed,

\\[
v=\\omega r
\\]

\\[
=4\\pi(0.5)
\\]

\\[
\\boxed{2\\pi m/s}
\\]
`
},


{
    type: "Centripetal Acceleration of Wheel Point",

    question: `
A point on a rotating wheel has radius

0.4 m

and angular velocity

10 rad/s.

Find centripetal acceleration.
`,

    solution: `
\\[
a_c=\\omega^2r
\\]

\\[
=100(0.4)
\\]

\\[
\\boxed{40m/s^2}
\\]
`
},


{
    type: "Angular Velocity from Rotation",

    question: `
A fan rotates at

300 rpm.

Find angular velocity.
`,

    solution: `
\\[
f=\\frac{300}{60}=5Hz
\\]

\\[
\\omega=2\\pi f
\\]

\\[
\\boxed{10\\pi rad/s}
\\]
`
},



// ---------------- MIXED DYNAMICS ----------------


{
    type: "Friction Providing Centripetal Force",

    question: `
A car of mass

1000 kg

moves on a flat circular road of radius

50 m

with speed

10 m/s.

Find the required frictional force.
`,

    solution: `
Friction provides centripetal force.

\\[
F=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{1000(100)}{50}
\\]

\\[
\\boxed{2000N}
\\]
`
},


{
    type: "Maximum Speed Before Skidding",

    question: `
A car moves on a horizontal circular road.

Coefficient of friction is

0.5

and radius is

20 m.

Find maximum speed.

Take

g=10m/s².
`,

    solution: `
Maximum friction provides centripetal force.

\\[
\\mu mg=\\frac{mv^2}{r}
\\]

\\[
v=\\sqrt{\\mu rg}
\\]

\\[
=
\\sqrt{0.5(20)(10)}
\\]

\\[
\\boxed{10m/s}
\\]
`
},


{
    type: "Earth Rotation Linear Speed",

    question: `
Earth completes one rotation in

24 hours.

Find angular velocity.
`,

    solution: `
\\[
\\omega=
\\frac{2\\pi}{T}
\\]

\\[
T=86400s
\\]

\\[
\\boxed{
\\omega=7.27\\times10^{-5}rad/s
}
\\]
`
},


{
    type: "Combining Linear and Circular Motion",

    question: `
A particle moves with velocity

10 m/s

in a circular path of radius

25 m.

Find acceleration.
`,

    solution: `
Only centripetal acceleration acts.

\\[
a_c=
\\frac{v^2}{r}
\\]

\\[
=
\\frac{100}{25}
\\]

\\[
\\boxed{4m/s^2}
\\]
`
},


{
    type: "Angular Momentum in Circular Motion",

    question: `
A particle of mass

2 kg

moves in a circle of radius

3 m

with speed

5 m/s.

Find angular momentum.
`,

    solution: `
\\[
L=mvr
\\]

\\[
=2(5)(3)
\\]

\\[
\\boxed{30kgm^2/s}
\\]
`
},


{
    type: "Mixed Projectile and Circular Concept",

    question: `
A stone tied to a string moves in a horizontal circle.

If radius is doubled while speed remains constant,

what happens to centripetal acceleration?
`,

    solution: `
\\[
a_c=\\frac{v^2}{r}
\\]

If radius becomes double,

\\[
a_c'=
\\frac{a_c}{2}
\\]

Hence acceleration becomes half.
`
}

]

};