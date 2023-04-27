import  {recipes} from "../data/recipes.js"
console.log(recipes)

// Grab the HTML reference
const myNav = document.querySelector('nav')
const myViewer = document.querySelector('#viewer')

// nav items
recipes.forEach(recipe => {
    console.log(recipe)
    const myBtn = document.createElement('button')
    myBtn.textContent = recipe.name
    myBtn.addEventListener('click', () => {
        showBook(recipe)
        changeImg()
        changeBlurb()
        changeBlurbName() 
        changeBlurbStuff()
    })
    myNav.appendChild(myBtn)
})

// author blurb name in h2
const recipeBlurbName = document.createElement('h2')
recipeBlurbName.textContent = "Once Upon a Recipe - Who We Are"
function changeBlurbName() {
    recipeBlurbName.className = "hide"
}
myViewer.appendChild(recipeBlurbName)

// Author Blurb more names and stuff....
const recipeBlurbStuff = document.createElement('h3')
recipeBlurbStuff.textContent = "Featured in Huffington Post | USA Today Special | Wall Street Journal bestselling cookbook award"
function changeBlurbStuff() {
    recipeBlurbStuff.className = "hide"
}
myViewer.appendChild(recipeBlurbStuff)

// create author blurb that dissapears on click
const recipeBlurb = document.createElement('p')
recipeBlurb.innerHTML = "In this space, I am always sharing fresh, flavorful, (mostly) healthy recipes that I love to make and eat in my real, actual, every day life. If I wouldn’t eat it in real life, I won’t put in on the blog. My goal is to inspire you with food that is both approachable AND exciting, whether you’re cooking for yourself, your family, your roommates, or your friends. I want you to be so excited about these recipes that you eagerly await 5pm when you can go home from work and start cooking. <br>I like to create and share recipes that feature real good, real food made for real people. My recipes are fresh, seasonal, mostly simple, often healthy, and sometimes peppered with a little cheese and butter mixed in. I created this little corner of the internet to celebrate life around the table and the good food that bring us all together. <br>  Here in our house, we gravitate towards recipes that are quick, easy, seasonal, (mostly) healthy, and big on flavor. So whether that’s whipping up a quick stir-fry or batch of cozy wild rice soup in the wintertime, blending up some refreshing gazpacho with sangria in the summertime, making our millionth batch of tacos and margs on Tuesdays, or baking up a warm batch of cinnamon rolls and eggs benny for sunny weekend brunches — my heart is never more happy than when my table is filled with good food and good people gathered ’round."
function changeBlurb() {
    recipeBlurb.className = "hide"
}
myViewer.appendChild(recipeBlurb)

// Create Hero Img that dissapears on click of buttons
const bookHero = document.querySelector('.hero');
function changeImg() {
    bookHero.className = "hide"
}

// function show friend
function showBook(recipe) {
    console.log(recipe)

    let recipeSection = document.createElement('section')
    let recipeName = document.createElement('h2')
    let recipePhoto = document.createElement('img')
    let recipePrepTime = document.createElement('p')
    let recipeCookTime = document.createElement('p')
    let recipeIngredients = document.createElement('ul')
    let recipeDirections = document.createElement('ul')


    recipeName.textContent = recipe.name
    recipePhoto.src = `images/${recipe.photo}`
    recipePhoto.alt = recipe.name
    recipePrepTime.textContent = `Prep: ${recipe.prepTime}`
    recipeCookTime.textContent = "Cook Time: " +recipe.cookTime

    let ingredientOpener = document.createElement('p')
    ingredientOpener.innerHTML = "The Ingredients: <br>"
    recipe.ingredients.forEach(ingredient => {
        console.log(ingredient)
        let theIngredients = document.createElement('li')
        theIngredients.textContent = ingredient
        recipeIngredients.appendChild(theIngredients)
    }
    )

    let directionsOpener = document.createElement('p')
    directionsOpener.innerHTML = "Directions: <br>"

    recipe.directions.forEach(direction => {
        console.log(direction)
        let Directions = document.createElement('li')
        Directions.textContent = direction
        recipeDirections.appendChild(Directions)
    })
    


// Assemble card for each friend
    recipeSection.appendChild(recipeName)
    recipeSection.appendChild(recipePhoto)
    recipeSection.appendChild(recipePrepTime)
    recipeSection.appendChild(recipeCookTime)
    recipeSection.appendChild(ingredientOpener)
    recipeSection.appendChild(recipeIngredients)
    recipeSection.appendChild(directionsOpener)
    recipeSection.appendChild(recipeDirections)
    

    myViewer.textContent = ""
    myViewer.appendChild(recipeSection)
} // end of function
