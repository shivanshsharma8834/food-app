import requests
from bs4 import BeautifulSoup

def get_recipe(dish_name):
    # Construct the search query URL
    search_url = f"https://www.google.com/search?q={dish_name.replace(' ', '+')}+recipe"

    # Send a GET request to Google and parse the HTML response
    response = requests.get(search_url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Find the link to the recipe website
    recipe_link = None
    for link in soup.find_all('a'):
        href = link.get('href')
        if href.startswith('https://') and 'recipe' in href:
            recipe_link = href
            break

    if recipe_link:
        # Fetch the recipe details from the recipe website
        recipe_response = requests.get(recipe_link)
        recipe_soup = BeautifulSoup(recipe_response.text, 'html.parser')

        # Extract the recipe details from the webpage
        recipe = recipe_soup.find('div', class_='recipe-instructions')
        if recipe:
            return recipe.text.strip()
        else:
            return "Recipe details not found."
    else:
        return "Recipe not found."

# Example usage
dish_name = "Chicken Alfredo"
recipe = get_recipe(dish_name)
print(f"Recipe for {dish_name}:\n{recipe}")
