const btn = document.querySelector('button');
let drinkObject;
let drinkIngred;

btn.addEventListener('click', getFetch);

function getFetch() {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      let drinkObj = data.drinks[0];
      console.log(drinkObj)
      let ingredients = [];
      for (const [key, value] of Object.entries(drinkObj)) {
        if (value !== null && key.startsWith('strIngredient')) { 
          ingredients.push(value);
        }
      }  
      document.querySelector('.name').textContent = drinkObj.strDrink;

      document.querySelector('img').src = drinkObj.strDrinkThumb;

      document.querySelector('.ingredients').textContent = `ingredients: ${ingredients.join(', ')}`; 

      document.querySelector('.type').textContent = `Drink Type: ${drinkObj.strAlcoholic}`;
      
      document.querySelector('.instructions').textContent = `Instructions: ${drinkObj.strInstructions} Served in a ${drinkObj.strGlass}. Enjoy!`;  
    })
    .catch(err => {
      console.log(`error ${err}`)
    })
}