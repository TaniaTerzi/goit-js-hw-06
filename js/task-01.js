
const listOfEl = document.querySelectorAll('.item');

const NumberOfCategories = listOfEl.length;
console.log(`Number of categories: ${NumberOfCategories}`);

let markup = '';

    listOfEl.forEach((ell) => {
        markup += `
        Category: ${ell.querySelector("h2").textContent};
        Elements: ${ell.querySelectorAll("li").length};
        `;
    });
    
    console.log(markup);

