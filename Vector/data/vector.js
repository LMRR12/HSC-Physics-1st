// ==========================================
// Physics Practice Book
// Chapter 2 : Vector
// data/vector.js
// ==========================================

const chapterData = {

    title: "Chapter 2 : Vector",

    subtitle: "Complete Formula Sheet & Type-wise Mathematical Problems",

    // ==========================================
    // FORMULAS
    // ==========================================

    formulas: [

        // ==================================================
        // BASIC VECTORS
        // ==================================================

        {
            category: "Basic",

            title: "Position Vector",

            formula: "\\vec r=x\\hat i+y\\hat j+z\\hat k",

            description: "Represents the position of a point with respect to the origin."
        },

        {
            category: "Basic",

            title: "Vector Joining Two Points",

            formula: "\\overrightarrow{AB}=(x_2-x_1)\\hat i+(y_2-y_1)\\hat j+(z_2-z_1)\\hat k",

            description: "Represents the vector directed from point A to point B."
        },

        {
            category: "Basic",

            title: "Magnitude of a Vector",

            formula: "|\\vec A|=\\sqrt{A_x^2+A_y^2+A_z^2}",

            description: "Calculates the magnitude (length) of a vector."
        },

        {
            category: "Basic",

            title: "Unit Vector",

            formula: "\\hat A=\\frac{\\vec A}{|\\vec A|}",

            description: "Determines a unit vector along the direction of a given vector."
        },

        {
            category: "Basic",

            title: "Distance Between Two Points",

            formula: "AB=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}",

            description: "Finds the distance between two points in space."
        },



        // ==================================================
        // VECTOR ALGEBRA
        // ==================================================

        {
            category: "Vector Algebra",

            title: "Vector Addition",

            formula: "\\vec R=\\vec A+\\vec B",

            description: "Obtains the resultant vector by adding two vectors."
        },

        {
            category: "Vector Algebra",

            title: "Vector Subtraction",

            formula: "\\vec R=\\vec A-\\vec B",

            description: "Finds the difference between two vectors."
        },

        {
            category: "Vector Algebra",

            title: "Resultant of Two Vectors",

            formula: "R=\\sqrt{A^2+B^2+2AB\\cos\\theta}",

            description: "Calculates the magnitude of the resultant of two vectors."
        },

        {
            category: "Vector Algebra",

            title: "Direction of Resultant",

            formula: "\\tan\\alpha=\\frac{B\\sin\\theta}{A+B\\cos\\theta}",

            description: "Determines the angle of the resultant with the first vector."
        },



        // ==================================================
        // RESOLUTION OF VECTOR
        // ==================================================

        {
            category: "Resolution",

            title: "Horizontal Component",

            formula: "A_x=A\\cos\\theta",

            description: "Horizontal component of a vector."
        },

        {
            category: "Resolution",

            title: "Vertical Component",

            formula: "A_y=A\\sin\\theta",

            description: "Vertical component of a vector."
        },

        {
            category: "Resolution",

            title: "Three-Dimensional Components",

            formula: "\\vec A=A_x\\hat i+A_y\\hat j+A_z\\hat k",

            description: "Represents a vector in Cartesian form."
        },

        {
            category: "Resolution",

            title: "Magnitude from Components",

            formula: "|\\vec A|=\\sqrt{A_x^2+A_y^2+A_z^2}",

            description: "Calculates the magnitude from rectangular components."
        },

        {
            category: "Resolution",

            title: "Direction Cosines",

            formula: "\\cos\\alpha=\\frac{A_x}{A},\\;\\cos\\beta=\\frac{A_y}{A},\\;\\cos\\gamma=\\frac{A_z}{A}",

            description: "Determines the angles made by a vector with the coordinate axes."
        },

        {
            category: "Resolution",

            title: "Relation Between Direction Cosines",

            formula: "\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1",

            description: "Fundamental relation among the direction cosines."
        },

                // ==================================================
        // DOT PRODUCT (SCALAR PRODUCT)
        // ==================================================

        {
            category: "Dot Product",

            title: "Definition",

            formula: "\\vec A\\cdot\\vec B=|\\vec A||\\vec B|\\cos\\theta",

            description: "Calculates the scalar product of two vectors."
        },

        {
            category: "Dot Product",

            title: "Component Form",

            formula: "\\vec A\\cdot\\vec B=A_xB_x+A_yB_y+A_zB_z",

            description: "Calculates the dot product using rectangular components."
        },

        {
            category: "Dot Product",

            title: "Angle Between Two Vectors",

            formula: "\\cos\\theta=\\frac{\\vec A\\cdot\\vec B}{|\\vec A||\\vec B|}",

            description: "Determines the angle between two vectors."
        },

        {
            category: "Dot Product",

            title: "Projection of A on B",

            formula: "\\frac{\\vec A\\cdot\\vec B}{|\\vec B|}",

            description: "Calculates the scalar projection of one vector on another."
        },

        {
            category: "Dot Product",

            title: "Vector Projection of A on B",

            formula: "\\frac{\\vec A\\cdot\\vec B}{|\\vec B|^2}\\vec B",

            description: "Calculates the vector projection of one vector on another."
        },

        {
            category: "Dot Product",

            title: "Perpendicular Condition",

            formula: "\\vec A\\cdot\\vec B=0",

            description: "Condition for two vectors to be perpendicular."
        },

        {
            category: "Dot Product",

            title: "Dot Product of Unit Vectors",

            formula: "\\hat i\\cdot\\hat i=\\hat j\\cdot\\hat j=\\hat k\\cdot\\hat k=1",

            description: "Dot product of identical unit vectors."
        },

        {
            category: "Dot Product",

            title: "Dot Product of Different Unit Vectors",

            formula: "\\hat i\\cdot\\hat j=\\hat j\\cdot\\hat k=\\hat k\\cdot\\hat i=0",

            description: "Dot product of mutually perpendicular unit vectors."
        },



        // ==================================================
        // CROSS PRODUCT (VECTOR PRODUCT)
        // ==================================================

        {
            category: "Cross Product",

            title: "Definition",

            formula: "\\vec A\\times\\vec B=|\\vec A||\\vec B|\\sin\\theta\\,\\hat n",

            description: "Calculates the vector product of two vectors."
        },

        {
            category: "Cross Product",

            title: "Determinant Form",

            formula: "\\vec A\\times\\vec B=\\begin{vmatrix}\\hat i&\\hat j&\\hat k\\\\A_x&A_y&A_z\\\\B_x&B_y&B_z\\end{vmatrix}",

            description: "Evaluates the cross product using Cartesian components."
        },

        {
            category: "Cross Product",

            title: "Magnitude of Cross Product",

            formula: "|\\vec A\\times\\vec B|=|\\vec A||\\vec B|\\sin\\theta",

            description: "Calculates the magnitude of the vector product."
        },

        {
            category: "Cross Product",

            title: "Area of a Parallelogram",

            formula: "|\\vec A\\times\\vec B|",

            description: "Calculates the area of the parallelogram formed by two vectors."
        },

        {
            category: "Cross Product",

            title: "Area of a Triangle",

            formula: "\\frac12|\\vec A\\times\\vec B|",

            description: "Calculates the area of the triangle formed by two vectors."
        },

        {
            category: "Cross Product",

            title: "Unit Normal Vector",

            formula: "\\hat n=\\frac{\\vec A\\times\\vec B}{|\\vec A\\times\\vec B|}",

            description: "Determines the unit vector perpendicular to both vectors."
        },

        {
            category: "Cross Product",

            title: "Parallel Condition",

            formula: "\\vec A\\times\\vec B=0",

            description: "Condition for two vectors to be parallel."
        },

        {
            category: "Cross Product",

            title: "Cross Product of Unit Vectors",

            formula: "\\hat i\\times\\hat j=\\hat k,\\;\\hat j\\times\\hat k=\\hat i,\\;\\hat k\\times\\hat i=\\hat j",

            description: "Cyclic cross-product relations of unit vectors."
        },

        {
            category: "Cross Product",

            title: "Reverse Cyclic Relations",

            formula: "\\hat j\\times\\hat i=-\\hat k,\\;\\hat k\\times\\hat j=-\\hat i,\\;\\hat i\\times\\hat k=-\\hat j",

            description: "Reverse cyclic cross-product relations."
        },

        {
            category: "Cross Product",

            title: "Cross Product of Same Unit Vectors",

            formula: "\\hat i\\times\\hat i=\\hat j\\times\\hat j=\\hat k\\times\\hat k=0",

            description: "Cross product of identical unit vectors."
        },


                // ==================================================
        // USEFUL RELATIONS
        // ==================================================

        {
            category: "Useful Relations",

            title: "Magnitude of Sum of Two Vectors",

            formula: "|\\vec A+\\vec B|=\\sqrt{A^2+B^2+2AB\\cos\\theta}",

            description: "Calculates the magnitude of the sum of two vectors."
        },

        {
            category: "Useful Relations",

            title: "Magnitude of Difference of Two Vectors",

            formula: "|\\vec A-\\vec B|=\\sqrt{A^2+B^2-2AB\\cos\\theta}",

            description: "Calculates the magnitude of the difference of two vectors."
        },

        {
            category: "Useful Relations",

            title: "Resultant of Two Perpendicular Vectors",

            formula: "R=\\sqrt{A^2+B^2}",

            description: "Special case when the angle between two vectors is 90°."
        },

        {
            category: "Useful Relations",

            title: "Resultant of Two Parallel Vectors (Same Direction)",

            formula: "R=A+B",

            description: "Special case when vectors act in the same direction."
        },

        {
            category: "Useful Relations",

            title: "Resultant of Two Opposite Vectors",

            formula: "R=|A-B|",

            description: "Special case when vectors act in opposite directions."
        },

        {
            category: "Useful Relations",

            title: "Parallelogram Law",

            formula: "\\vec R=\\vec A+\\vec B",

            description: "Determines the resultant of two vectors represented by adjacent sides of a parallelogram."
        },

        {
            category: "Useful Relations",

            title: "Triangle Law",

            formula: "\\vec R=\\vec A+\\vec B",

            description: "Determines the resultant by placing vectors head-to-tail."
        },

        {
            category: "Useful Relations",

            title: "Polygon Law",

            formula: "\\vec R=\\sum\\vec A",

            description: "Determines the resultant of several vectors arranged head-to-tail."
        },

        {
            category: "Useful Relations",

            title: "Equilibrium Condition",

            formula: "\\sum\\vec F=0",

            description: "A body is in equilibrium when the vector sum of all forces is zero."
        },

        {
            category: "Useful Relations",

            title: "Three-Dimensional Magnitude",

            formula: "|\\vec A|=\\sqrt{x^2+y^2+z^2}",

            description: "Calculates the magnitude of a vector expressed in Cartesian coordinates."
        },

                // ==================================================
        // SCALAR TRIPLE PRODUCT
        // ==================================================

        {
            category: "Triple Product",

            title: "Scalar Triple Product",

            formula: "\\vec A\\cdot(\\vec B\\times\\vec C)",

            description: "Calculates the scalar triple product of three vectors."
        },

        {
            category: "Triple Product",

            title: "Determinant Form",

            formula: "\\begin{vmatrix}A_x&A_y&A_z\\\\B_x&B_y&B_z\\\\C_x&C_y&C_z\\end{vmatrix}",

            description: "Evaluates the scalar triple product using Cartesian components."
        },

        {
            category: "Triple Product",

            title: "Volume of a Parallelepiped",

            formula: "\\left|\\vec A\\cdot(\\vec B\\times\\vec C)\\right|",

            description: "Calculates the volume of the parallelepiped formed by three vectors."
        },

        {
            category: "Triple Product",

            title: "Coplanarity Condition",

            formula: "\\vec A\\cdot(\\vec B\\times\\vec C)=0",

            description: "Condition for three vectors to be coplanar."
        },



        // ==================================================
        // VECTOR TRIPLE PRODUCT
        // ==================================================

        {
            category: "Triple Product",

            title: "Vector Triple Product (BAC-CAB Rule)",

            formula: "\\vec A\\times(\\vec B\\times\\vec C)=\\vec B(\\vec A\\cdot\\vec C)-\\vec C(\\vec A\\cdot\\vec B)",

            description: "Expands a vector triple product using the BAC-CAB identity."
        },



        // ==================================================
        // VECTOR CALCULUS
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Derivative of a Vector Function",

            formula: "\\frac{d\\vec r}{dt}=\\frac{dx}{dt}\\hat i+\\frac{dy}{dt}\\hat j+\\frac{dz}{dt}\\hat k",

            description: "Differentiates a vector with respect to time."
        },

        {
            category: "Vector Calculus",

            title: "Velocity Vector",

            formula: "\\vec v=\\frac{d\\vec r}{dt}",

            description: "Defines velocity as the time derivative of position."
        },

        {
            category: "Vector Calculus",

            title: "Acceleration Vector",

            formula: "\\vec a=\\frac{d\\vec v}{dt}=\\frac{d^2\\vec r}{dt^2}",

            description: "Defines acceleration as the time derivative of velocity."
        },

        {
            category: "Vector Calculus",

            title: "Integration of a Vector",

            formula: "\\int\\vec A\\,dt=\\hat i\\int A_xdt+\\hat j\\int A_ydt+\\hat k\\int A_zdt",

            description: "Integrates each component of a vector separately."
        },



        // ==================================================
        // SCALAR FIELD
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Scalar Field",

            formula: "\\phi(x,y,z)",

            description: "A scalar quantity defined at every point in space."
        },



        // ==================================================
        // VECTOR FIELD
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Vector Field",

            formula: "\\vec F(x,y,z)",

            description: "A vector quantity defined at every point in space."
        },



        // ==================================================
        // VECTOR OPERATOR
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Del Operator",

            formula: "\\nabla=\\hat i\\frac{\\partial}{\\partial x}+\\hat j\\frac{\\partial}{\\partial y}+\\hat k\\frac{\\partial}{\\partial z}",

            description: "Fundamental vector differential operator."
        },



        // ==================================================
        // GRADIENT
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Gradient",

            formula: "\\nabla\\phi",

            description: "Represents the direction and rate of maximum increase of a scalar field."
        },



        // ==================================================
        // DIVERGENCE
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Divergence",

            formula: "\\nabla\\cdot\\vec F",

            description: "Measures the net outward flow of a vector field."
        },



        // ==================================================
        // CURL
        // ==================================================

        {
            category: "Vector Calculus",

            title: "Curl",

            formula: "\\nabla\\times\\vec F",

            description: "Measures the rotational tendency of a vector field."
        }

    ],



    // ==========================================
    // PROBLEMS
    // ==========================================

    problems: [

       // ==================================================
// BASIC VECTORS
// ==================================================

{
    type: "Magnitude of a Vector",

    question: `
Find the magnitude of

\\[
\\vec A=5\\hat i+12\\hat j.
\\]
`,

    solution: `
\\[
|\\vec A|
=
\\sqrt{5^2+12^2}
=
13
\\]
`
},

{
    type: "Magnitude of a 3D Vector",

    question: `
Find the magnitude of

\\[
\\vec A=2\\hat i-3\\hat j+6\\hat k.
\\]
`,

    solution: `
\\[
|\\vec A|
=
\\sqrt{2^2+(-3)^2+6^2}
=
7
\\]
`
},

{
    type: "Unit Vector",

    question: `
Find the unit vector along

\\[
\\vec A=8\\hat i+6\\hat j.
\\]
`,

    solution: `
\\[
|A|=10
\\]

\\[
\\hat A
=
\\frac45\\hat i
+
\\frac35\\hat j
\\]
`
},

{
    type: "Position Vector",

    question: `
Find the position vector of
\\(P(-2,4,5)\\).
`,

    solution: `
\\[
\\vec r
=
-2\\hat i
+
4\\hat j
+
5\\hat k
\\]
`
},

{
    type: "Vector Joining Two Points",

    question: `
Find
\\(
\\overrightarrow{AB}
\\)

where

\\(A(1,2,-1)\\)

and

\\(B(5,-1,3)\\).
`,

    solution: `
\\[
\\overrightarrow{AB}
=
4\\hat i
-
3\\hat j
+
4\\hat k
\\]
`
},

{
    type: "Distance Between Two Points",

    question: `
Find the distance between

\\(A(-1,2)\\)

and

\\(B(5,10)\\).
`,

    solution: `
\\[
AB
=
\\sqrt{6^2+8^2}
=
10
\\]
`
},

{
    type: "Midpoint",

    question: `
Find the midpoint of

\\(A(4,-2)\\)

and

\\(B(10,8)\\).
`,

    solution: `
\\[
M=(7,3)
\\]
`
},

{
    type: "Internal Division",

    question: `
Point
\\(P\\)

divides

\\(AB\\)

internally in the ratio

\\(2:3\\).

If

\\(A(2,5)\\)

and

\\(B(12,10)\\),

find
\\(P\\).
`,

    solution: `
\\[
P
=
(6,7)
\\]
`
},

{
    type: "External Division",

    question: `
Find the point dividing

\\(A(2,1)\\)

and

\\(B(8,7)\\)

externally in the ratio

\\(1:2\\).
`,

    solution: `
\\[
P=(-4,-5)
\\]
`
},

{
    type: "Collinearity",

    question: `
Show whether

\\((2,1)\\),

\\((4,3)\\)

and

\\((6,5)\\)

are collinear.
`,

    solution: `
The slopes are equal.

Hence the three points are collinear.
`
},

{
    type: "Unknown Endpoint",

    question: `
If

\\[
\\overrightarrow{AB}
=
5\\hat i
-
4\\hat j
\\]

and

\\(A(3,6)\\),

find
\\(B\\).
`,

    solution: `
\\[
B=(8,2)
\\]
`
},

{
    type: "Unknown Starting Point",

    question: `
If

\\[
\\overrightarrow{AB}
=
3\\hat i
+
7\\hat j
\\]

and

\\(B(9,11)\\),

find
\\(A\\).
`,

    solution: `
\\[
A=(6,4)
\\]
`
},

{
    type: "Displacement",

    question: `
A person walks

3 km east,

4 km north.

Find the displacement.
`,

    solution: `
\\[
R
=
\\sqrt{3^2+4^2}
=
5\\text{ km}
\\]
`
},

{
    type: "Successive Displacements",

    question: `
A particle moves

4 m east,

6 m north,

4 m west.

Find the resultant displacement.
`,

    solution: `
Net displacement

\\[
=
6\\hat j
\\]

Magnitude

\\[
6\\text{ m}
\\]
`
},

{
    type: "Finding Coordinates from Position Vector",

    question: `
The position vector of a point is

\\[
3\\hat i
-
5\\hat j
+
2\\hat k.
\\]

Find its coordinates.
`,

    solution: `
\\[
(3,-5,2)
\\]
`
// ==================================================
// VECTOR ALGEBRA
// ==================================================

},

{
    type: "Addition",

    question: `
Find

\\[
(2\\hat i+3\\hat j)
+
(5\\hat i-7\\hat j).
\\]
`,

    solution: `
\\[
7\\hat i
-
4\\hat j
\\]
`
},

{
    type: "Subtraction",

    question: `
Find

\\[
(8\\hat i+2\\hat j)
-
(3\\hat i+9\\hat j).
\\]
`,

    solution: `
\\[
5\\hat i
-
7\\hat j
\\]
`
},

{
    type: "Unknown Vector",

    question: `
If

\\[
\\vec X
+
(2\\hat i+5\\hat j)
=
(9\\hat i+3\\hat j),
\\]

find
\\(\\vec X\\).
`,

    solution: `
\\[
\\vec X
=
7\\hat i
-
2\\hat j
\\]
`
},

{
    type: "Resultant of Two Perpendicular Forces",

    question: `
Two perpendicular forces are

9 N

and

12 N.

Find the resultant.
`,

    solution: `
\\[
R
=
15\\text{ N}
\\]
`
},

{
    type: "Resultant of Inclined Forces",

    question: `
Two forces

10 N

and

10 N

act at

60°.

Find the resultant.
`,

    solution: `
\\[
R
=
10\\sqrt3
\\text{ N}
\\]
`
},

{
    type: "Direction of Resultant",

    question: `
Two perpendicular vectors are

8

and

6.

Find the direction of the resultant with the first vector.
`,

    solution: `
\\[
\\theta
=
\\tan^{-1}
\\left(
\\frac68
\\right)
=
36.87^\\circ
\\]
`
},

{
    type: "Maximum Resultant",

    question: `
Two vectors have magnitudes

18

and

7.

Find the maximum resultant.
`,

    solution: `
\\[
25
\\]
`
},

{
    type: "Minimum Resultant",

    question: `
Two vectors have magnitudes

18

and

7.

Find the minimum resultant.
`,

    solution: `
\\[
11
\\]
`
},

{
    type: "Resultant of Three Vectors",

    question: `
Find the resultant of

\\[
2\\hat i+3\\hat j,
\\]

\\[
-4\\hat i+2\\hat j,
\\]

and

\\[
5\\hat i-7\\hat j.
\\]
`,

    solution: `
\\[
3\\hat i
-
2\\hat j
\\]
`
},

{
    type: "Balancing Force",

    question: `
Two forces are

\\[
5\\hat i+3\\hat j
\\]

and

\\[
2\\hat i-8\\hat j.
\\]

Find the balancing force.
`,

    solution: `
Resultant

\\[
=
7\\hat i
-
5\\hat j
\\]

Balancing force

\\[
=
-7\\hat i
+
5\\hat j
\\]
`
},

{
    type: "Resultant of Equal Vectors",

    question: `
Two vectors each have magnitude

10

and the angle between them is

120°.

Find the magnitude of the resultant.
`,

    solution: `
\\[
R
=
\\sqrt{10^2+10^2+2(10)(10)\\cos120^\\circ}
\\]

\\[
=
10
\\]
`
},

{
    type: "Angle for Zero Resultant",

    question: `
Two vectors have equal magnitudes.

What should be the angle between them so that their resultant becomes zero?
`,

    solution: `
For zero resultant,

\\[
R=0
\\]

This is possible only when the vectors act in opposite directions.

\\[
\\boxed{180^\\circ}
\\]
`
},

{
    type: "Finding Included Angle",

    question: `
Two vectors have magnitudes

8

and

15.

Their resultant is

17.

Find the angle between them.
`,

    solution: `
Using

\\[
17^2
=
8^2+15^2+2(8)(15)\\cos\\theta
\\]

\\[
289=289+240\\cos\\theta
\\]

\\[
\\boxed{\\theta=90^\\circ}
\\]
`
},

{
    type: "Equal Resultant and Larger Vector",

    question: `
Two vectors have magnitudes

12

and

5.

Find the angle between them if the magnitude of the resultant equals 12.
`,

    solution: `
\\[
12^2
=
12^2+5^2+2(12)(5)\\cos\\theta
\\]

\\[
25+120\\cos\\theta=0
\\]

\\[
\\boxed{
\\cos\\theta
=
-\\frac5{24}
}
\\]
`
},

{
    type: "Finding One Vector",

    question: `
The resultant of two perpendicular vectors is

13.

One vector has magnitude

5.

Find the other.
`,

    solution: `
\\[
13^2
=
5^2+x^2
\\]

\\[
x=12
\\]
`
},

{
    type: "Balancing Force Magnitude",

    question: `
The resultant of several forces is

24 N.

Find the magnitude of the balancing force.
`,

    solution: `
The balancing force has the same magnitude as the resultant but acts in the opposite direction.

\\[
\\boxed{24\\text{ N}}
\\]
`
},

{
    type: "Resultant Along x-axis",

    question: `
Find the resultant of

\\[
5\\hat i+4\\hat j
\\]

and

\\[
3\\hat i-4\\hat j.
\\]
`,

    solution: `
\\[
(5+3)\\hat i+(4-4)\\hat j
=
8\\hat i
\\]
`
},

{
    type: "Resultant Along y-axis",

    question: `
Find the resultant of

\\[
6\\hat i+7\\hat j
\\]

and

\\[
-6\\hat i+2\\hat j.
\\]
`,

    solution: `
\\[
9\\hat j
\\]
`
},

{
    type: "Equal and Opposite Vectors",

    question: `
Find the resultant of

\\[
4\\hat i-3\\hat j
\\]

and

\\[
-4\\hat i+3\\hat j.
\\]
`,

    solution: `
The vectors cancel each other.

\\[
\\boxed{\\vec R=\\vec0}
\\]
`
},

{
    type: "Polygon Law of Vectors",

    question: `
Three vectors represented by the three sides of a triangle taken in order act on a particle.

Find the resultant.
`,

    solution: `
According to the polygon law,

\\[
\\boxed{\\vec R=\\vec0}
\\]
`
},

// ==================================================
// RESOLUTION OF VECTORS
// ==================================================

{
    type: "Horizontal and Vertical Components",

    question: `
Resolve a force of

40 N

acting at

30°

with the horizontal.
`,

    solution: `
\\[
F_x
=
40\\cos30^\\circ
=
20\\sqrt3\\text{ N}
\\]

\\[
F_y
=
40\\sin30^\\circ
=
20\\text{ N}
\\]
`
},

{
    type: "Finding Magnitude from Components",

    question: `
A vector has components

24

and

7.

Find its magnitude.
`,

    solution: `
\\[
R
=
\\sqrt{24^2+7^2}
=
25
\\]
`
},

{
    type: "Finding Direction",

    question: `
A vector has components

5

and

12.

Find its direction with the positive x-axis.
`,

    solution: `
\\[
\\theta
=
\\tan^{-1}
\\left(
\\frac{12}{5}
\\right)
=
67.38^\\circ
\\]
`
},

{
    type: "Unknown Vertical Component",

    question: `
A vector has magnitude

17

and horizontal component

8.

Find the vertical component.
`,

    solution: `
\\[
17^2
=
8^2+y^2
\\]

\\[
y=15
\\]
`
},

{
    type: "Unknown Horizontal Component",

    question: `
A vector has magnitude

25

and vertical component

24.

Find the horizontal component.
`,

    solution: `
\\[
25^2
=
x^2+24^2
\\]

\\[
x=7
\\]
`
},

{
    type: "Resolving Velocity",

    question: `
A particle moves with velocity

30 m/s

at

37°.

Resolve the velocity into horizontal and vertical components.
`,

    solution: `
\\[
v_x
=
30\\cos37^\\circ
=
24\\text{ m/s}
\\]

\\[
v_y
=
30\\sin37^\\circ
=
18\\text{ m/s}
\\]
`
},

{
    type: "Resolving Acceleration",

    question: `
Resolve an acceleration of

20 m/s²

acting at

60°

into rectangular components.
`,

    solution: `
\\[
a_x
=
20\\cos60^\\circ
=
10
\\]

\\[
a_y
=
20\\sin60^\\circ
=
10\\sqrt3
\\]
`
},

{
    type: "Resolving Force on an Inclined Plane",

    question: `
A block is pulled by a force of

100 N

making an angle of

30°

with the horizontal.

Find the horizontal component responsible for moving the block.
`,

    solution: `
\\[
100\\cos30^\\circ
=
50\\sqrt3\\text{ N}
\\]
`
},

{
    type: "Vertical Component Reducing Normal Reaction",

    question: `
A force of

80 N

acts at

60°

above the horizontal on a block.

Find the upward component.
`,

    solution: `
\\[
80\\sin60^\\circ
=
40\\sqrt3\\text{ N}
\\]
`
},

{
    type: "Cable Supporting a Load",

    question: `
A cable exerts a tension of

500 N

at

45°.

Find its horizontal and vertical components.
`,

    solution: `
\\[
T_x
=
500\\cos45^\\circ
=
250\\sqrt2\\text{ N}
\\]

\\[
T_y
=
500\\sin45^\\circ
=
250\\sqrt2\\text{ N}
\\]
`
},

{
    type: "Finding Magnitude from Direction Cosines",

    question: `
A vector has components

6, 3 and 2.

Find its magnitude.
`,

    solution: `
\\[
|\\vec A|
=
\\sqrt{6^2+3^2+2^2}
=
7
\\]
`
},

{
    type: "Direction Cosines",

    question: `
Find the direction cosines of

\\[
\\vec A
=
2\\hat i
+
3\\hat j
+
6\\hat k.
\\]
`,

    solution: `
Magnitude,

\\[
|A|
=
7
\\]

Hence,

\\[
l
=
\\frac27,
\\quad
m
=
\\frac37,
\\quad
n
=
\\frac67
\\]
`
},

{
    type: "Direction Angles",

    question: `
Find the direction angles of

\\[
\\vec A
=
2\\hat i
+
2\\hat j
+
\\hat k.
\\]
`,

    solution: `
\\[
|A|
=
3
\\]

\\[
\\alpha
=
\\cos^{-1}
\\left(
\\frac23
\\right)
\\]

\\[
\\beta
=
\\cos^{-1}
\\left(
\\frac23
\\right)
\\]

\\[
\\gamma
=
\\cos^{-1}
\\left(
\\frac13
\\right)
\\]
`
},

{
    type: "Verifying Direction Cosines",

    question: `
Verify whether

\\[
\\frac13,
\\frac23,
\\frac23
\\]

can be the direction cosines of a vector.
`,

    solution: `
\\[
\\left(
\\frac13
\\right)^2
+
\\left(
\\frac23
\\right)^2
+
\\left(
\\frac23
\\right)^2
=
1
\\]

Hence they are valid direction cosines.
`
},

{
    type: "Finding One Direction Cosine",

    question: `
If the direction cosines of a vector are

\\[
\\frac35,
\\frac45,
n,
\\]

find
\\(n\\).
`,

    solution: `
Since

\\[
l^2+m^2+n^2=1
\\]

\\[
\\frac9{25}
+
\\frac{16}{25}
+
n^2
=
1
\\]

\\[
n=0
\\]
`
},

{
    type: "Projectile Initial Velocity Components",

    question: `
A projectile is fired with speed

40 m/s

at

30°.

Find the horizontal and vertical components of the initial velocity.
`,

    solution: `
\\[
u_x
=
40\\cos30^\\circ
=
20\\sqrt3
\\text{ m/s}
\\]

\\[
u_y
=
40\\sin30^\\circ
=
20
\\text{ m/s}
\\]
`
},

{
    type: "Finding Angle from Components",

    question: `
A force has horizontal component

30 N

and vertical component

30√3 N.

Find the angle of inclination.
`,

    solution: `
\\[
\\tan\\theta
=
\\frac{30\\sqrt3}{30}
=
\\sqrt3
\\]

\\[
\\boxed{\\theta=60^\\circ}
\\]
`
},

{
    type: "Finding Magnitude from One Component and Angle",

    question: `
The horizontal component of a force is

40 N.

If the force acts at

60°,

find its magnitude.
`,

    solution: `
\\[
40
=
F\\cos60^\\circ
\\]

\\[
F
=
80\\text{ N}
\\]
`
},

{
    type: "Wind Velocity Components",

    question: `
Wind blows with speed

25 m/s

towards the north-east.

Find its eastward and northward components.
`,

    solution: `
Since

\\[
\\theta=45^\\circ
\\]

\\[
v_x=v_y
=
25\\cos45^\\circ
=
\\frac{25}{\\sqrt2}
\\text{ m/s}
\\]
`
},

{
    type: "Finding Resultant from Two Inclined Components",

    question: `
A force has components

15 N

and

20 N

along two perpendicular directions.

Find the magnitude of the force.
`,

    solution: `
\\[
R
=
\\sqrt{15^2+20^2}
=
25\\text{ N}
\\]
`
},

// ==================================================
// DOT PRODUCT
// ==================================================

{
    type: "Dot Product by Components",

    question: `
Find

\\[
(2\\hat i+3\\hat j-\\hat k)
\\cdot
(4\\hat i-2\\hat j+5\\hat k).
\\]
`,

    solution: `
\\[
8-6-5
=
-3
\\]
`
},

{
    type: "Angle Between Two Vectors",

    question: `
Find the angle between

\\[
\\hat i+\\hat j
\\]

and

\\[
\\hat i-\\hat j.
\\]
`,

    solution: `
Dot product

\\[
=0
\\]

Hence,

\\[
\\boxed{90^\\circ}
\\]
`
},

{
    type: "Checking Perpendicularity",

    question: `
Show that

\\[
3\\hat i-\\hat j
\\]

and

\\[
\\hat i+3\\hat j
\\]

are perpendicular.
`,

    solution: `
\\[
3(1)+(-1)(3)=0
\\]

Hence the vectors are perpendicular.
`
},

{
    type: "Finding Unknown Component",

    question: `
If

\\[
(2\\hat i+x\\hat j)
\\]

is perpendicular to

\\[
(3\\hat i-4\\hat j),
\\]

find
\\(x\\).
`,

    solution: `
\\[
6-4x=0
\\]

\\[
x
=
\\frac32
\\]
`
},

{
    type: "Finding Unknown Angle",

    question: `
Two vectors have magnitudes

5

and

8.

Their dot product is

20.

Find the angle between them.
`,

    solution: `
\\[
\\cos\\theta
=
\\frac{20}{40}
=
\\frac12
\\]

\\[
\\boxed{60^\\circ}
\\]
`
},

{
    type: "Work Done by a Force",

    question: `
A force of

50 N

acts through

8 m

making an angle of

60°

with the displacement.

Find the work done.
`,

    solution: `
\\[
W
=
50\\times8\\times\\cos60^\\circ
=
200
\\text{ J}
\\]
`
},

{
    type: "Zero Work",

    question: `
A force acts perpendicular to the displacement.

Find the work done.
`,

    solution: `
\\[
W
=
Fs\\cos90^\\circ
=
0
\\]
`
},

{
    type: "Maximum Work",

    question: `
A force of

30 N

acts along the direction of displacement

5 m.

Find the work done.
`,

    solution: `
\\[
30\\times5
=
150
\\text{ J}
\\]
`
},

{
    type: "Negative Work",

    question: `
A force of

40 N

acts opposite to a displacement of

10 m.

Find the work done.
`,

    solution: `
\\[
40\\times10\\cos180^\\circ
=
-400
\\text{ J}
\\]
`
},

{
    type: "Scalar Projection",

    question: `
Find the scalar projection of

\\[
6\\hat i+8\\hat j
\\]

on

\\[
5\\hat i.
\\]
`,

    solution: `
\\[
\\frac{30}{5}
=
6
\\]
`
},

{
    type: "Dot Product of Unit Vectors",

    question: `
Find

\\[
(2\\hat i+\\hat j+3\\hat k)
\\cdot
(\\hat i-4\\hat j+2\\hat k)
\\]
`,

    solution: `
\\[
=2(1)+1(-4)+3(2)
\\]

\\[
=4
\\]
`
},

{
    type: "Finding Vector Magnitude Using Dot Product",

    question: `
Find the magnitude of

\\[
\\vec A=3\\hat i+4\\hat j+12\\hat k
\\]

using dot product.
`,

    solution: `
\\[
A\\cdot A
=
3^2+4^2+12^2
\]

\\[
=169
\\]

\\[
|A|=13
\\]
`
},

{
    type: "Angle Between 3D Vectors",

    question: `
Find the angle between

\\[
\\vec A=2\\hat i+3\\hat j+6\\hat k
\\]

and

\\[
\\vec B=\\hat i+2\\hat j+2\\hat k
\\]
`,

    solution: `
\\[
A\\cdot B
=
2+6+12
=
20
\\]

\\[
|A|=7
\\]

\\[
|B|=3
\\]

\\[
\\cos\\theta
=
\\frac{20}{21}
\\]

\\[
\\theta=18.2^\\circ
\\]
`
},

{
    type: "Finding Projection of One Vector on Another",

    question: `
Find the projection of

\\[
\\vec A=4\\hat i+3\\hat j
\\]

on

\\[
\\vec B=3\\hat i+4\\hat j
\\]
`,

    solution: `
\\[
A\\cdot B
=
12+12=24
\\]

\\[
|B|=5
\\]

Projection

\\[
=
\\frac{24}{5}
\\]
`
},

{
    type: "Vector Perpendicular Condition",

    question: `
Find the value of k so that

\\[
(3\\hat i+k\\hat j+2\\hat k)
\\]

is perpendicular to

\\[
(2\\hat i-4\\hat j+\\hat k)
\\]
`,

    solution: `
\\[
6-4k+2=0
\\]

\\[
8-4k=0
\\]

\\[
k=2
\\]
`
},

{
    type: "Work Done in Three Dimensions",

    question: `
A force

\\[
\\vec F=4\\hat i+3\\hat j+2\\hat k
\\]

moves an object through

\\[
\\vec s=5\\hat i-\\hat j+4\\hat k
\\]

Find the work done.
`,

    solution: `
\\[
W=F\\cdot s
\\]

\\[
=20-3+8
\\]

\\[
=25J
\\]
`
},

{
    type: "Finding Angle When Dot Product is Negative",

    question: `
Two vectors have magnitudes

6 and 10.

Their dot product is

-30.

Find the angle between them.
`,

    solution: `
\\[
\\cos\\theta
=
\\frac{-30}{60}
\]

\\[
\\cos\\theta=-\\frac12
\\]

\\[
\\theta=120^\\circ
\\]
`
},

{
    type: "Parallel Vector Test",

    question: `
Determine whether

\\[
2\\hat i+4\\hat j+6\\hat k
\\]

and

\\[
\\hat i+2\\hat j+3\\hat k
\\]

are parallel.
`,

    solution: `
\\[
\\vec A=2\\vec B
\\]

Therefore,

\\[
\\boxed{\\text{They are parallel}}
\\]
`
},

{
    type: "Finding Angle Between Force and Displacement",

    question: `
A force

\\[
\\vec F=6\\hat i+8\\hat j
\\]

moves a particle through

\\[
\\vec s=4\\hat i+3\\hat j
\\]

Find the angle between force and displacement.
`,

    solution: `
\\[
F\\cdot s
=
24+24=48
\\]

\\[
|F|=10
\\]

\\[
|s|=5
\\]

\\[
\\cos\\theta
=
\\frac{48}{50}
\]

\\[
\\theta=16.3^\\circ
\\]
`
},

{
    type: "Finding Unknown Vector from Dot Product",

    question: `
If

\\[
(2\\hat i+3\\hat j)
\\cdot
(x\\hat i+4\\hat j)=20
\\]

find x.
`,

    solution: `
\\[
2x+12=20
\\]

\\[
x=4
\\]
`
},

// ==================================================
// CROSS PRODUCT
// ==================================================

{
    type: "Basic Cross Product",

    question: `
Find

\\[
\\hat i \\times \\hat j
\\]
`,

    solution: `
Using right hand rule,

\\[
\\boxed{\\hat i\\times\\hat j=\\hat k}
\\]
`
},

{
    type: "Unit Vector Cross Products",

    question: `
Find

\\[
\\hat j\\times\\hat k
\\]

and

\\[
\\hat k\\times\\hat i
\\]
`,

    solution: `
Using cyclic order,

\\[
\\hat j\\times\\hat k=\\hat i
\\]

\\[
\\hat k\\times\\hat i=\\hat j
\\]
`
},

{
    type: "Cross Product of Parallel Vectors",

    question: `
Find

\\[
(3\\hat i+2\\hat j)
\\times
(6\\hat i+4\\hat j)
\\]
`,

    solution: `
The second vector is

\\[
2(3\\hat i+2\\hat j)
\\]

Hence they are parallel.

\\[
\\boxed{\\vec A\\times\\vec B=0}
\\]
`
},

{
    type: "Magnitude of Cross Product",

    question: `
Two vectors have magnitudes

5 and 8.

The angle between them is

30°.

Find the magnitude of their cross product.
`,

    solution: `
\\[
|A\\times B|
=
AB\\sin\\theta
\\]

\\[
=5\\times8\\times\\sin30^\\circ
\\]

\\[
=20
\\]
`
},

{
    type: "Cross Product Using Determinant",

    question: `
Find

\\[
(2\\hat i+3\\hat j+\\hat k)
\\times
(\\hat i-2\\hat j+4\\hat k)
\\]
`,

    solution: `
\\[
=
\\begin{vmatrix}
\\hat i&\\hat j&\\hat k\\\\
2&3&1\\\\
1&-2&4
\\end{vmatrix}
\\]

\\[
=14\\hat i-7\\hat j-7\\hat k
\\]
`
},

{
    type: "Area of Parallelogram",

    question: `
Find the area of the parallelogram formed by

\\[
\\vec A=3\\hat i
\\]

and

\\[
\\vec B=4\\hat j
\\]
`,

    solution: `
Area

\\[
=|A\\times B|
\\]

\\[
=3\\times4
\\]

\\[
=12
\\]
`
},

{
    type: "Area of Triangle",

    question: `
Find the area of the triangle formed by vectors

\\[
\\vec A=6\\hat i
\\]

and

\\[
\\vec B=8\\hat j
\\]
`,

    solution: `
Triangle area

\\[
=
\\frac12|A\\times B|
\\]

\\[
=
\\frac12(48)
\\]

\\[
=24
\\]
`
},

{
    type: "Finding Angle Using Cross Product",

    question: `
Two vectors have magnitudes

10 and 5.

Their cross product magnitude is

25.

Find the angle between them.
`,

    solution: `
\\[
25=10(5)\\sin\\theta
\\]

\\[
\\sin\\theta=\\frac12
\\]

\\[
\\theta=30^\\circ
\\]
`
},

{
    type: "Checking Perpendicularity by Cross Product",

    question: `
Show whether

\\[
2\\hat i+3\\hat j
\\]

and

\\[
-3\\hat i+2\\hat j
\\]

are perpendicular.
`,

    solution: `
Dot product,

\\[
2(-3)+3(2)=0
\\]

Therefore,

\\[
\\boxed{90^\\circ}
\\]
`
},

{
    type: "Finding Vector Perpendicular to Two Vectors",

    question: `
Find a vector perpendicular to both

\\[
\\hat i+\\hat j
\\]

and

\\[
\\hat i-\\hat j
\\]
`,

    solution: `
\\[
(\\hat i+\\hat j)
\\times
(\\hat i-\\hat j)
\\]

\\[
=-2\\hat k
\\]

Any scalar multiple of

\\[
\\boxed{\\hat k}
\\]

is the answer.
`
},

{
    type: "Torque Using Cross Product",

    question: `
A force of

20 N

acts at a distance

3 m

from a pivot making an angle

90°.

Find torque.
`,

    solution: `
\\[
\\tau=rF\\sin\\theta
\\]

\\[
=3\\times20
\\]

\\[
=60Nm
\\]
`
},

{
    type: "Torque at Inclined Force",

    question: `
A force of

50 N

acts at a distance

4 m

making an angle

30°

with the lever arm.

Find torque.
`,

    solution: `
\\[
\\tau
=
4\\times50\\times\\sin30^\\circ
\\]

\\[
=100Nm
\\]
`
},

{
    type: "Finding Force from Torque",

    question: `
A torque of

120 Nm

is produced by a force acting at

6 m

distance perpendicular to the lever.

Find the force.
`,

    solution: `
\\[
120=6F
\\]

\\[
F=20N
\\]
`
},

{
    type: "Angular Momentum",

    question: `
A particle has momentum

5 kg m/s

at a perpendicular distance

2 m

from origin.

Find angular momentum.
`,

    solution: `
\\[
L=r\\times p
\\]

\\[
=2\\times5
\\]

\\[
=10
\\]
`
},

{
    type: "Vector Area Problem",

    question: `
Find the area of the triangle whose two sides are

\\[
2\\hat i+3\\hat j
\\]

and

\\[
4\\hat i-\\hat j
\\]
`,

    solution: `
Cross product magnitude,

\\[
|(2\\hat i+3\\hat j)
\\times
(4\\hat i-\\hat j)|
\]

\\[
=| -2\\hat k-12\\hat k|
\]

\\[
=14
\\]

Triangle area,

\\[
=7
\\]
`
},

{
    type: "Finding Unknown k in Cross Product",

    question: `
Find k if

\\[
(2\\hat i+k\\hat j)
\\]

and

\\[
(4\\hat i+2\\hat j)
\\]

are parallel.
`,

    solution: `
For parallel vectors,

\\[
\\frac24=\\frac{k}{2}
\\]

\\[
k=1
\\]
`
},

{
    type: "Cross Product Direction",

    question: `
Find the direction of

\\[
\\hat i\\times\\hat j
\\]
`,

    solution: `
Using right hand rule,

\\[
\\boxed{+\\hat k}
\\]
`
},

{
    type: "Zero Cross Product Condition",

    question: `
When will

\\[
\\vec A\\times\\vec B=0
\\]

?
`,

    solution: `
Cross product is zero when:

1. One vector is zero

or

2. Vectors are parallel.

\\[
\\boxed{\\theta=0^\\circ \\text{ or }180^\\circ}
\\]
`
},

{
    type: "Maximum Cross Product",

    question: `
Two vectors have magnitudes

7 and 9.

Find the maximum possible value of their cross product.
`,

    solution: `
Maximum occurs when

\\[
\\sin\\theta=1
\\]

Therefore,

\\[
|A\\times B|
=
7\\times9
\\]

\\[
=63
\\]
`
},

{
    type: "Cross Product and Area Application",

    question: `
The position vectors of two points are

\\[
\\vec A=3\\hat i+4\\hat j
\\]

and

\\[
\\vec B=5\\hat i-2\\hat j
\\]

Find the area of the triangle formed with the origin.
`,

    solution: `
\\[
A\\times B
=
(3)(-2)-(4)(5)
\\]

\\[
=-26
\\]

Area

\\[
=
\\frac12(26)
\\]

\\[
=13
\\]
`
},

// ==================================================
// APPLICATIONS OF VECTORS
// ==================================================

// ---------------- RIVER BOAT / RELATIVE VELOCITY ----------------

{
    type: "River Boat - Direct Crossing",

    question: `
A boat moves with speed

8 m/s

perpendicular to a river of width

160 m.

Find the time required to cross the river.
`,

    solution: `
For direct crossing,

\\[
t=\\frac{width}{boat\\ speed}
\\]

\\[
t=\\frac{160}{8}
\\]

\\[
\\boxed{20s}
\\]
`
},

{
    type: "River Boat - Drift Due to Current",

    question: `
A river is

200 m

wide.

A boat moves perpendicular to the bank with speed

10 m/s.

The river current is

3 m/s.

Find the drift.
`,

    solution: `
Crossing time,

\\[
t=\\frac{200}{10}=20s
\\]

Drift,

\\[
=vt
\\]

\\[
=3\\times20
\\]

\\[
\\boxed{60m}
\\]
`
},

{
    type: "River Boat - Minimum Time Crossing",

    question: `
A boat can move with speed

12 m/s

in still water.

The river width is

240 m.

Find the minimum time required to cross.
`,

    solution: `
Minimum time occurs when boat velocity is perpendicular to river.

\\[
t=\\frac{240}{12}
\\]

\\[
\\boxed{20s}
\\]
`
},

{
    type: "River Boat - Shortest Distance Crossing",

    question: `
A boat moves at

5 m/s

in still water.

River current speed is

3 m/s.

Find the direction in which the boat should be aimed to reach exactly opposite.
`,

    solution: `
For zero drift,

\\[
v\\sin\\theta=3
\\]

where

\\[
v=5
\\]

\\[
\\sin\\theta=\\frac35
\\]

\\[
\\boxed{\\theta=36.87^\\circ}
\\]

upstream.
`
},

{
    type: "River Boat - Resultant Velocity",

    question: `
A boat moves east with speed

6 m/s.

River current flows north with speed

8 m/s.

Find the resultant velocity.
`,

    solution: `
\\[
R=
\\sqrt{6^2+8^2}
\\]

\\[
\\boxed{10m/s}
\\]

Direction,

\\[
\\theta=\\tan^{-1}(8/6)
\\]
`
},

{
    type: "River Boat - Given Drift Find Current",

    question: `
A boat crosses a river of width

300 m

in

50 s.

It drifts

40 m.

Find the river current speed.
`,

    solution: `
Time,

\\[
t=50s
\\]

Current speed,

\\[
v=\\frac{drift}{t}
\\]

\\[
=
\\frac{40}{50}
\\]

\\[
\\boxed{0.8m/s}
\\]
`
},

{
    type: "River Boat - Boat Speed from Crossing Data",

    question: `
A river is

180 m

wide.

A boat crosses it in

30 s.

Find its velocity component perpendicular to the bank.
`,

    solution: `
\\[
v=
\\frac{180}{30}
\\]

\\[
\\boxed{6m/s}
\\]
`
},

{
    type: "River Boat - Finding Resultant Direction",

    question: `
A boat velocity is

4 m/s east.

Current velocity is

3 m/s south.

Find the direction of resultant velocity.
`,

    solution: `
\\[
\\tan\\theta=
\\frac34
\\]

\\[
\\boxed{\\theta=36.87^\\circ}
\\]

south of east.
`
},

{
    type: "Relative Velocity of Two Boats",

    question: `
Boat A moves east with

15 m/s.

Boat B moves west with

10 m/s.

Find velocity of A relative to B.
`,

    solution: `
\\[
V_{AB}=V_A-V_B
\\]

Opposite directions add,

\\[
=15+10
\\]

\\[
\\boxed{25m/s\\ east}
\\]
`
},

{
    type: "Relative Velocity Same Direction",

    question: `
Two cars move in the same direction.

Their speeds are

80 km/h

and

50 km/h.

Find relative velocity.
`,

    solution: `
\\[
V_{rel}=80-50
\\]

\\[
\\boxed{30km/h}
\\]
`
},

// ---------------- PROJECTILE VECTOR APPLICATION ----------------

{
    type: "Projectile Initial Components",

    question: `
A projectile is thrown with velocity

50 m/s

at an angle

37°.

Find horizontal and vertical components.
`,

    solution: `
\\[
u_x=50\\cos37^\\circ
\\]

\\[
=40m/s
\\]

\\[
u_y=50\\sin37^\\circ
\\]

\\[
=30m/s
\\]
`
},

{
    type: "Projectile Velocity After Time",

    question: `
A projectile is thrown vertically upward with initial velocity

30 m/s.

Find velocity after

2s.

Take

g=10m/s².
`,

    solution: `
\\[
v=u-gt
\\]

\\[
=30-10(2)
\\]

\\[
\\boxed{10m/s}
\\]
`
},

{
    type: "Projectile Resultant Velocity",

    question: `
A projectile has horizontal velocity

20 m/s

and vertical velocity

15 m/s.

Find its resultant velocity.
`,

    solution: `
\\[
v=
\\sqrt{20^2+15^2}
\\]

\\[
\\boxed{25m/s}
\\]
`
},

{
    type: "Projectile Direction",

    question: `
A projectile velocity has components

12 m/s horizontal

and

5 m/s vertical.

Find the angle with horizontal.
`,

    solution: `
\\[
\\tan\\theta=\\frac5{12}
\\]

\\[
\\boxed{22.6^\\circ}
\\]
`
},

// ==================================================
// APPLICATIONS OF VECTORS (CONTINUED)
// ==================================================

// ---------------- PROJECTILE VECTOR APPLICATION ----------------

{
    type: "Projectile Maximum Height Using Components",

    question: `
A projectile is thrown with velocity

40 m/s

at an angle

30°.

Find the maximum height.

Take

g=10m/s².
`,

    solution: `
Vertical component,

\\[
u_y=40\\sin30^\\circ
\\]

\\[
u_y=20m/s
\\]

Maximum height,

\\[
H=
\\frac{u_y^2}{2g}
\\]

\\[
=
\\frac{20^2}{20}
\\]

\\[
\\boxed{20m}
\\]
`
},

{
    type: "Projectile Range Using Horizontal Component",

    question: `
A projectile is thrown with speed

50 m/s

at

37°.

Find its range.

Take

g=10m/s².
`,

    solution: `
Components,

\\[
u_x=40m/s
\\]

\\[
u_y=30m/s
\\]

Time of flight,

\\[
T=\\frac{2u_y}{g}
\\]

\\[
=6s
\\]

Range,

\\[
R=u_xT
\\]

\\[
=40\\times6
\\]

\\[
\\boxed{240m}
\\]
`
},

{
    type: "Projectile Velocity at Highest Point",

    question: `
A projectile is thrown with initial velocity

30 m/s.

Find its velocity at maximum height if the horizontal component is

18 m/s.
`,

    solution: `
At highest point,

vertical velocity becomes zero.

Only horizontal component remains.

\\[
\\boxed{18m/s}
\\]
`
},

{
    type: "Projectile Landing Velocity",

    question: `
A projectile is projected vertically upward with velocity

40 m/s.

Find its velocity when it returns to the starting point.
`,

    solution: `
Ignoring air resistance,

speed remains unchanged.

Direction reverses.

\\[
\\boxed{40m/s\\ downward}
\\]
`
},

{
    type: "Projectile Complementary Angles",

    question: `
Two projectiles are thrown with the same speed at angles

30°

and

60°.

Compare their ranges.
`,

    solution: `
Range,

\\[
R=\\frac{u^2\\sin2\\theta}{g}
\\]

For

30°,

\\[
\\sin60^\\circ
\\]

For

60°,

\\[
\\sin120^\\circ=\\sin60^\\circ
\\]

Hence,

\\[
\\boxed{R_1=R_2}
\\]
`
},


// ---------------- FORCE EQUILIBRIUM ----------------

{
    type: "Three Force Equilibrium",

    question: `
Two forces

6 N

and

8 N

act perpendicular to each other.

Find the third force required for equilibrium.
`,

    solution: `
Resultant,

\\[
R=\\sqrt{6^2+8^2}
\\]

\\[
R=10N
\\]

Balancing force,

\\[
\\boxed{10N}
\\]

opposite to resultant.
`
},

{
    type: "Two Forces with Included Angle",

    question: `
Two forces

20 N

and

15 N

act at

60°.

Find the force required to balance them.
`,

    solution: `
Resultant,

\\[
R^2=20^2+15^2+2(20)(15)\\cos60^\\circ
\\]

\\[
R^2=925
\\]

\\[
R=5\\sqrt{37}N
\\]

Balancing force,

\\[
\\boxed{5\\sqrt{37}N}
\\]
`
},

{
    type: "Finding Equilibrium Force Direction",

    question: `
Two perpendicular forces are

5 N east

and

12 N north.

Find the magnitude and direction of the equilibrant.
`,

    solution: `
Resultant,

\\[
R=13N
\\]

Direction,

\\[
\\tan\\theta=\\frac{12}{5}
\\]

Equilibrant acts opposite.

\\[
\\boxed{13N}
\\]
`
},

{
    type: "Three Vector Equilibrium",

    question: `
Three forces acting on a particle are

\\[
4\\hat i+3\\hat j
\\]

and

\\[
-2\\hat i+5\\hat j
\\]

Find the third force for equilibrium.
`,

    solution: `
Sum of first two,

\\[
=2\\hat i+8\\hat j
\\]

Third force,

\\[
=-(2\\hat i+8\\hat j)
\\]

\\[
\\boxed{-2\\hat i-8\\hat j}
\\]
`
},


// ---------------- INCLINED PLANE APPLICATION ----------------

{
    type: "Component of Weight on Incline",

    question: `
A block of mass

10 kg

rests on an inclined plane of angle

30°.

Find the component of weight down the plane.

Take

g=10m/s².
`,

    solution: `
Weight,

\\[
W=mg=100N
\\]

Component,

\\[
W\\sin30^\\circ
\\]

\\[
=50N
\\]

\\[
\\boxed{50N}
\\]
`
},

{
    type: "Normal Component on Incline",

    question: `
A block of weight

200 N

is placed on a smooth incline of angle

60°.

Find normal reaction.
`,

    solution: `
Normal component,

\\[
N=W\\cos60^\\circ
\\]

\\[
=200\\times\\frac12
\\]

\\[
\\boxed{100N}
\\]
`
},

{
    type: "Force Pulling Block Up Incline",

    question: `
A force of

100 N

acts at

30°

above an inclined surface.

Find the component along the surface.
`,

    solution: `
Component along surface,

\\[
F\\cos30^\\circ
\\]

\\[
=50\\sqrt3N
\\]
`
},

{
    type: "Friction Direction Using Vectors",

    question: `
A block tends to move downward on an incline.

In which direction does friction act?
`,

    solution: `
Friction opposes motion.

Therefore,

\\[
\\boxed{\\text{up the incline}}
\\]
`
},

{
    type: "Resolving Weight into Components",

    question: `
A body of weight

500 N

is placed on a

37°

inclined plane.

Find the components parallel and perpendicular to the plane.
`,

    solution: `
Parallel,

\\[
500\\sin37^\\circ
\\]

\\[
=300N
\\]

Perpendicular,

\\[
500\\cos37^\\circ
\\]

\\[
=400N
\\]
`
},

// ==================================================
// APPLICATIONS OF VECTORS (FINAL)
// ==================================================

// ---------------- TORQUE APPLICATIONS ----------------

{
    type: "Torque Direction",

    question: `
A force acts perpendicular to a rod in the upward direction.

Find the direction of torque if the rod extends towards east.
`,

    solution: `
Using right hand rule,

\\[
\\boxed{\\text{Torque acts upward from the plane}}
\\]
`
},

{
    type: "Torque with Angled Force",

    question: `
A force of

40 N

acts on a rod of length

5 m

making an angle

30°

with the rod.

Find the torque.
`,

    solution: `
\\[
\\tau=rF\\sin\\theta
\\]

\\[
=5\\times40\\times\\sin30^\\circ
\\]

\\[
\\boxed{100Nm}
\\]
`
},

{
    type: "Couple Force Torque",

    question: `
Two equal and opposite forces of

50 N

form a couple.

The perpendicular distance between them is

2 m.

Find the torque.
`,

    solution: `
Torque of couple,

\\[
\\tau=Fd
\\]

\\[
=50\\times2
\\]

\\[
\\boxed{100Nm}
\\]
`
},

{
    type: "Finding Lever Arm",

    question: `
A force of

25 N

produces a torque of

75 Nm.

Find the perpendicular distance from the pivot.
`,

    solution: `
\\[
\\tau=Fr
\\]

\\[
75=25r
\\]

\\[
\\boxed{r=3m}
\\]
`
},


// ---------------- CIRCULAR MOTION APPLICATION ----------------

{
    type: "Centripetal Force Vector",

    question: `
A body of mass

2 kg

moves in a circle of radius

4 m

with velocity

6 m/s.

Find the centripetal force.
`,

    solution: `
\\[
F=\\frac{mv^2}{r}
\\]

\\[
=
\\frac{2(36)}4
\\]

\\[
\\boxed{18N}
\\]
`
},

{
    type: "Velocity Direction in Circular Motion",

    question: `
A particle moves in a circular path.

What is the angle between velocity and centripetal acceleration?
`,

    solution: `
Velocity is tangential.

Acceleration is radial.

Therefore,

\\[
\\boxed{90^\\circ}
\\]
`
},


// ---------------- WORK ENERGY VECTOR ----------------

{
    type: "Work by Variable Direction Force",

    question: `
A force of

60 N

moves an object

5 m

at an angle

60°

with displacement.

Find work done.
`,

    solution: `
\\[
W=Fs\\cos\\theta
\\]

\\[
=60\\times5\\times\\frac12
\\]

\\[
\\boxed{150J}
\\]
`
},

{
    type: "Power Using Force and Velocity",

    question: `
A force of

100 N

acts on a body moving with velocity

5 m/s

in the same direction.

Find power.
`,

    solution: `
\\[
P=Fv\\cos\\theta
\\]

\\[
=100\\times5
\\]

\\[
\\boxed{500W}
\\]
`
},

{
    type: "Power at Inclined Direction",

    question: `
A force of

200 N

acts at

60°

to the velocity of a particle moving at

4 m/s.

Find power.
`,

    solution: `
\\[
P=Fv\\cos60^\\circ
\\]

\\[
=200\\times4\\times\\frac12
\\]

\\[
\\boxed{400W}
\\]
`
},

{
    type: "Momentum Vector Change",

    question: `
A particle of mass

4 kg

changes velocity from

\\[
3\\hat i
\\]

to

\\[
8\\hat i
\\]

Find change in momentum.
`,

    solution: `
\\[
\\Delta p=m(v-u)
\\]

\\[
=4(5)
\\]

\\[
\\boxed{20\\hat i}
\\]
`
},

// ==================================================
// ADVANCED + MIXED CHALLENGE
// ==================================================

{
    type: "Advanced Vector Identity",

    question: `
If

\\[
\\vec A\\cdot\\vec B=0
\\]

what can be concluded?
`,

    solution: `
The vectors are perpendicular.

\\[
\\boxed{\\theta=90^\\circ}
\\]
`
},

{
    type: "Finding Resultant of Multiple Forces",

    question: `
Three forces act on a particle:

\\[
5\\hat i+2\\hat j,
\\]

\\[
-3\\hat i+4\\hat j,
\\]

\\[
2\\hat i-6\\hat j.
\\]

Find the resultant.
`,

    solution: `
Adding components,

\\[
(5-3+2)\\hat i+(2+4-6)\\hat j
\\]

\\[
\\boxed{4\\hat i}
\\]
`
},

{
    type: "Mixed Vector Angle Problem",

    question: `
Two vectors have magnitudes

6 and 8.

Their resultant is

10.

Find the angle between them.
`,

    solution: `
\\[
10^2=6^2+8^2+2(6)(8)\\cos\\theta
\\]

\\[
100=100+96\\cos\\theta
\\]

\\[
\\boxed{\\theta=90^\\circ}
\\]
`
},

{
    type: "Vector Equation Problem",

    question: `
If

\\[
2\\vec A+3\\vec B=0
\\]

what is the relation between

\\(\\vec A\\)

and

\\(\\vec B\\)?
`,

    solution: `
\\[
2\\vec A=-3\\vec B
\\]

Therefore,

\\[
\\boxed{\\vec A=-\\frac32\\vec B}
\\]

They are opposite parallel vectors.
`
},

{
    type: "Finding Unknown Force in Equilibrium",

    question: `
A force

\\[
6\\hat i+8\\hat j
\\]

is balanced by another force.

Find the balancing force.
`,

    solution: `
Equilibrant is opposite:

\\[
\\boxed{-6\\hat i-8\\hat j}
\\]
`
},

// ==================================================
// ADVANCED + MIXED CHALLENGE
// ==================================================

{
    type: "Advanced Vector Addition with Parameters",

    question: `
Find the value of k if the resultant of

\\[
(3\\hat i+4\\hat j)
\\]

and

\\[
(k\\hat i-2\\hat j)
\\]

is along the x-axis.
`,

    solution: `
For resultant along x-axis,

y-component must be zero.

\\[
4-2=0
\\]

Already satisfied.

Therefore,

\\[
\\boxed{\\text{k can have any value}}
\\]

because only the x-component changes.
`
},

{
    type: "Advanced Resultant Direction",

    question: `
Two forces

\\[
20N
\\]

and

\\[
15N
\\]

act at

60°.

Find the angle made by the resultant with the 20 N force.
`,

    solution: `
Using

\\[
\\tan\\alpha=
\\frac{B\\sin\\theta}
{A+B\\cos\\theta}
\\]

\\[
=
\\frac{15\\sin60}
{20+15\\cos60}
\\]

\\[
=
\\frac{15\\sqrt3}
{55}
\\]

\\[
\\boxed{\\alpha=40.9^\\circ}
\\]
`
},

{
    type: "Vector Projection in Three Dimensions",

    question: `
Find the scalar projection of

\\[
\\vec A=2\\hat i+3\\hat j+6\\hat k
\\]

on

\\[
\\vec B=\\hat i+2\\hat j+2\\hat k.
\\]
`,

    solution: `
\\[
A\\cdot B
=
2+6+12
\]

\\[
=20
\\]

\\[
|B|=3
\\]

Projection,

\\[
=
\\frac{20}{3}
\\]

\\[
\\boxed{6.67}
\\]
`
},

{
    type: "Finding Vector Perpendicular to Plane",

    question: `
Find a vector perpendicular to the plane containing

\\[
\\vec A=2\\hat i+\\hat j
\\]

and

\\[
\\vec B=\\hat i-3\\hat j.
\\]
`,

    solution: `
\\[
A\\times B
\]

\\[
=
(2)(-3)-(1)(1)
\\]

\\[
=-7\\hat k
\\]

Therefore,

\\[
\\boxed{\\hat k}
\\]

is perpendicular to the plane.
`
},

{
    type: "Mixed River Boat Challenge",

    question: `
A boat can move at

10 m/s

in still water.

A river flows at

6 m/s.

Find the minimum angle upstream required to reach exactly opposite.
`,

    solution: `
For no drift,

\\[
10\\sin\\theta=6
\\]

\\[
\\sin\\theta=0.6
\\]

\\[
\\boxed{\\theta=36.87^\\circ}
\\]
`
},

{
    type: "Relative Velocity Aircraft Problem",

    question: `
An airplane flies north with velocity

200 km/h.

Wind blows east with velocity

50 km/h.

Find the ground velocity.
`,

    solution: `
\\[
V=
\\sqrt{200^2+50^2}
\\]

\\[
=
\\sqrt{42500}
\\]

\\[
\\boxed{206.2\\ km/h}
\\]

Direction,

\\[
\\tan\\theta=
\\frac{50}{200}
\\]

\\[
\\theta=14^\\circ
\\]

east of north.
`
},

{
    type: "Mixed Torque and Vector Direction",

    question: `
A force

\\[
F=5\\hat i+12\\hat j
\\]

acts at position

\\[
r=3\\hat k.
\\]

Find torque.
`,

    solution: `
\\[
\\tau=r\\times F
\\]

\\[
=
3\\hat k\\times(5\\hat i+12\\hat j)
\\]

Using cyclic rule,

\\[
=15\\hat j-36\\hat i
\\]

\\[
\\boxed{-36\\hat i+15\\hat j}
\\]
`
},

{
    type: "Advanced Work Vector Problem",

    question: `
A particle moves through displacement

\\[
\\vec s=4\\hat i+3\\hat j
\\]

under force

\\[
\\vec F=6\\hat i-2\\hat j.
\\]

Find the work done.
`,

    solution: `
\\[
W=F\\cdot s
\\]

\\[
=24-6
\\]

\\[
\\boxed{18J}
\\]
`
},

{
    type: "Finding Unknown Vector from Magnitude",

    question: `
A vector is

\\[
\\vec A=3\\hat i+x\\hat j
\\]

and its magnitude is

5.

Find x.
`,

    solution: `
\\[
3^2+x^2=5^2
\\]

\\[
x^2=16
\\]

\\[
\\boxed{x=\\pm4}
\\]
`
},

{
    type: "Advanced Equilibrium Problem",

    question: `
A particle is in equilibrium under three forces.

Two forces are

\\[
8\\hat i+6\\hat j
\\]

and

\\[
-3\\hat i+4\\hat j.
\\]

Find the third force.
`,

    solution: `
Resultant of two forces,

\\[
=5\\hat i+10\\hat j
\\]

Third force,

\\[
=-(5\\hat i+10\\hat j)
\\]

\\[
\\boxed{-5\\hat i-10\\hat j}
\\]
`
},

// ==================================================
// ADVANCED + MIXED CHALLENGE (FINAL)
// ==================================================

{
    type: "Advanced Resultant Minimum Condition",

    question: `
Two vectors have magnitudes

12

and

5.

Find the possible range of their resultant.
`,

    solution: `
Maximum resultant:

\\[
R_{max}=12+5
\\]

\\[
=17
\\]

Minimum resultant:

\\[
R_{min}=12-5
\\]

\\[
=7
\\]

Therefore,

\\[
\\boxed{7\\le R\\le17}
\\]
`
},

{
    type: "Vector Triple Product Concept",

    question: `
If

\\[
\\vec A\\times\\vec B=\\vec0
\\]

what relation exists between

\\(\\vec A\\)

and

\\(\\vec B\\)?
`,

    solution: `
Cross product becomes zero when vectors are parallel or one vector is zero.

Therefore,

\\[
\\boxed{\\vec A\\parallel\\vec B}
\\]

or one vector is zero.
`
},

{
    type: "Mixed Projectile and Vector Challenge",

    question: `
A projectile is fired with velocity

60 m/s

at an angle

53°.

Find the velocity vector at the highest point.

Take

\\[
\\sin53^\\circ=0.8
\\]
`,

    solution: `
Horizontal component remains unchanged.

\\[
u_x=60\\cos53^\\circ
\\]

\\[
=60(0.6)
\\]

\\[
\\boxed{36\\hat i\\ m/s}
\\]

At maximum height,

\\[
v_y=0
\\]
`
},

{
    type: "Finding Force Using Vector Components",

    question: `
A force has components

\\[
F_x=12N
\\]

and

\\[
F_y=16N.
\\]

Find the magnitude and direction of the force.
`,

    solution: `
Magnitude,

\\[
F=
\\sqrt{12^2+16^2}
\\]

\\[
=20N
\\]

Direction,

\\[
\\tan\\theta=\\frac{16}{12}
\\]

\\[
\\boxed{\\theta=53.13^\\circ}
\\]
`
},

{
    type: "Master Mixed Vector Problem",

    question: `
A particle is acted upon by three forces:

\\[
F_1=6\\hat i+8\\hat j
\\]

\\[
F_2=-4\\hat i+3\\hat j
\\]

\\[
F_3=-2\\hat i-11\\hat j
\\]

Find the resultant force and state whether the particle is in equilibrium.
`,

    solution: `
Adding all vectors,

\\[
R=
(6-4-2)\\hat i
+
(8+3-11)\\hat j
\\]

\\[
R=0
\\]

Therefore,

\\[
\\boxed{\\text{The particle is in equilibrium}}
\\]
`
},

// ==================================================
// VECTOR CHAPTER COMPLETE
// ==================================================


    ]

};