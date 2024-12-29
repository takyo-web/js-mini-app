document.getElementById('searchRecipeBtn').addEventListener('click', async () => {
  const ingredients = document.getElementById('ingredientInput').value;
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`;

  try {
    const response = await axios.get(apiUrl);
    const meals = response.data.meals;

    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';
    if (meals) {
      meals.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'recipe';
        div.innerHTML = `
          <h3>${meal.strMeal}</h3>
          <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
          <button onclick="getRecipeDetails('${meal.idMeal}')">View Recipe</button>
        `;
        recipeResults.appendChild(div);
      });
    } else {
      recipeResults.innerHTML = '<p>No recipes found. Please try different ingredients.</p>';
    }

  } catch (error) {
    console.error('Error fetching the recipes', error);
    document.getElementById('recipeResults').innerHTML = '<p style="color: red;">Failed to fetch recipes. Please try again.</p>';
  }
});

async function getRecipeDetails(mealId) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  try {
    const response = await axios.get(apiUrl);
    const meal = response.data.meals[0];

    const recipeDetails = document.createElement('div');
    recipeDetails.className = 'recipe';
    recipeDetails.innerHTML = `
      <h2>${meal.strMeal}</h2>
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <p><strong>Category:</strong> ${meal.strCategory}</p>
      <p><strong>Area:</strong> ${meal.strArea}</p>
      <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
      <a href="${meal.strSource}" target="_blank">Source</a>
    `;

    const recipeResults = document.getElementById('recipeResults');
    recipeResults.innerHTML = '';
    recipeResults.appendChild(recipeDetails);

  } catch (error) {
    console.error('Error fetching the recipe details', error);
    document.getElementById('recipeResults').innerHTML = '<p style="color: red;">Failed to fetch recipe details. <br>Please try again.</p>';
  }
}