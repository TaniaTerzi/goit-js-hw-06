const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const element of ingredients) {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  elementLi.classList.add('item');
  const container = document.querySelector('ul#ingredients');
  container.append(elementLi);

}

    // const li1 = document.createElement("li");
    // const li2 = document.createElement("li");
    // const li3 = document.createElement("li");
    // const li4 = document.createElement("li");
    // const li5 = document.createElement("li");
    // const li6 = document.createElement("li");
    
    // li1.textContent = ingredients[0];
    // li2.textContent = ingredients[1];
    // li3.textContent = ingredients[2];
    // li4.textContent = ingredients[3];
    // li5.textContent = ingredients[4];
    // li6.textContent = ingredients[5];
    
    // li1.classList.add('item');
    // li2.classList.add('item');
    // li3.classList.add('item');
    // li4.classList.add('item');
    // li5.classList.add('item');
    // li6.classList.add('item');
    // console.log(li1, li2, li3, li4, li5, li6);

    // const container = document.querySelector('ul#ingredients');
    // console.log(container);

    // container.append(li1, li2, li3, li4, li5, li6);

    ////////////////////////////////////////////////////////////

//  let  ingredientsEll  =  '' ;
   
//     ingredients.forEach( ( ingredient )  =>  {
//       console.log(ingredient);
//       ingredientsEll   +=  `        
//             <li> ${ ingredient } </li>
//             ` ;
//                 } ) ;
//     console.log(ingredientsEll);    

//     const container = document.querySelector('#ingredients');
//     console.log(container);

//     container.insertAdjacentHTML('beforeend', ingredientsEll);

//     container.innerHTML = ingredientsEll;

