// ==========================================
// Physics Practice Book
// script.js
// ==========================================

// ---------- Elements ----------

const title = document.getElementById("chapterTitle");
const subtitle = document.getElementById("chapterSubtitle");

const formulaCount = document.getElementById("formulaCount");
const problemCount = document.getElementById("problemCount");

const formulaContainer = document.getElementById("formulaContainer");
const problemContainer = document.getElementById("problemContainer");

const categoryButtons = document.getElementById("categoryButtons");
const searchBox = document.getElementById("searchBox");


// ---------- State ----------

let currentCategory = "All";


// ==========================================
// Initialize
// ==========================================

function init() {

    title.textContent = chapterData.title;

    if (chapterData.subtitle)
        subtitle.textContent = chapterData.subtitle;

    formulaCount.textContent = chapterData.formulas.length;
    problemCount.textContent = chapterData.problems.length;

    createCategoryButtons();

    render();

}

init();


// ==========================================
// Render Everything
// ==========================================

function render() {

    renderFormulas();

    renderProblems();

    if (window.MathJax) {
        MathJax.typesetPromise();
    }

}


// ==========================================
// Category Buttons
// ==========================================

function createCategoryButtons() {

    const categories = [

        "All",

        ...new Set(
            chapterData.formulas.map(item => item.category)
        )

    ];

    categoryButtons.innerHTML = "";

    categories.forEach(category => {

        const button = document.createElement("button");

        button.textContent = category;

        if (category === "All")
            button.classList.add("active");

        button.onclick = () => {

            currentCategory = category;

            document
                .querySelectorAll(".categories button")
                .forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            render();

        };

        categoryButtons.appendChild(button);

    });

}


// ==========================================
// Formula Cards
// ==========================================

function renderFormulas() {

    formulaContainer.innerHTML = "";

    const keyword = searchBox.value.trim().toLowerCase();

    const formulas = chapterData.formulas.filter(item => {

        const matchCategory =
            currentCategory === "All" ||
            item.category === currentCategory;

        const matchSearch =

            item.title.toLowerCase().includes(keyword)

            ||

            item.description.toLowerCase().includes(keyword)

            ||

            item.formula.toLowerCase().includes(keyword);

        return matchCategory && matchSearch;

    });

    if (formulas.length === 0) {

        formulaContainer.innerHTML =

            `<p>No formula found.</p>`;

        return;

    }

    formulas.forEach(item => {

        const card = document.createElement("div");

        card.className = "formula-card";

        card.innerHTML = `

            <span class="category">
                ${item.category}
            </span>

            <h3>
                ${item.title}
            </h3>

            <div class="formula">
                \\[
                ${item.formula}
                \\]
            </div>

            <p class="description">
                ${item.description}
            </p>

        `;

        formulaContainer.appendChild(card);

    });

}


// ==========================================
// Problem Cards
// ==========================================

function renderProblems() {

    problemContainer.innerHTML = "";

    const keyword = searchBox.value.trim().toLowerCase();

    const problems = chapterData.problems.filter(problem => {

        return (

            problem.type.toLowerCase().includes(keyword)

            ||

            problem.question.toLowerCase().includes(keyword)

            ||

            problem.solution.toLowerCase().includes(keyword)

            ||

            keyword === ""

        );

    });

    if (problems.length === 0) {

        problemContainer.innerHTML =

            `<p>No problem found.</p>`;

        return;

    }

    problems.forEach((problem, index) => {

        const card = document.createElement("div");

        card.className = "problem-card";

        card.innerHTML = `

            <span class="category">

                Type ${index + 1}

            </span>

            <h3>

                ${problem.type}

            </h3>

            <div class="question">

                ${problem.question}

            </div>

            <button

                class="show-btn"

                data-id="${index}"

            >

                Show Solution

            </button>

            <div

                class="solution"

                id="solution-${index}"

            >

                ${problem.solution}

            </div>

        `;

        problemContainer.appendChild(card);

    });

}


// ==========================================
// Search
// ==========================================

searchBox.addEventListener("input", render);


// ==========================================
// Toggle Solution
// ==========================================

document.addEventListener("click", function (e) {

    if (!e.target.classList.contains("show-btn"))
        return;

    const id = e.target.dataset.id;

    const box = document.getElementById(

        `solution-${id}`

    );

    if (box.style.display === "block") {

        box.style.display = "none";

        e.target.textContent =

            "Show Solution";

    }

    else {

        box.style.display = "block";

        e.target.textContent =

            "Hide Solution";

    }

    if (window.MathJax) {
        MathJax.typesetPromise([box]);
    }

});