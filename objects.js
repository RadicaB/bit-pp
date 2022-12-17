//1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!

var coffee = {
    name: "Long with milk",
    strength: "mild",
    flavour: "chockolate",
    milk: "mandatory",
    sugar: "signal that I am kidnapped",
}

//2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

var movie = {
    title: "Avengers",
    actors: "",
    director: "Who Cares",
    genre: "super-hero",
    popularity: "the highest gross earnings of all time",
}

//3.Write a function that creates an object that represents a project. Each project is described by: description,  programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

/*function createProject(projekat) { 
    projekat.description = "Recepies";
    projekat["programming language"] = "Java Script";
    projekat["git repository"] = "PP";
    //projekat.status = function (params) {
    }
    return projekat;
var objekat = {};
console.log(createProject(0));*/
//4.Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
//○	Add a method that prints out all the ingredients necessary for the meal preparation. 
//○	Add a method that checks if a meal can be prepared in under 15 minutes. 
//○	Add a method that changes the type of cuisine to the given value. 
//○	Add a method that delete a given ingredient from the list of ingredients


function createRecipe(n, ct, cm, ing, t, ins) {   //ovo su parametri funkcije koje posaljemo i smestamo vrednosti na atributinma - property objekta - name, cuisineType, itf
    //if (typeof name !== "string")
    var recipe = {
        name: n,       //nasi recepti ce biti iste klase - imace uvek iste atribute, fabrika istih objekata, osiguramo se da imaju iste metod i propertije
        cuisineType: ct,   // zato setujemo ovako - da bude dinamicno, ako stavimo var name = 'paprikas' i sve zakucamo onda ce davati samo jedan objekat
        complexity: cm,
        ingredients: ing,
        time: t,
        instructions: ins,
        printIng: function () { 
            console.log(recipe.ingredients);
        },
        checkIsUnder15Min: function () {
            return recipe.time < 15;
        },
        changeCuisineType: function (newCuiseneType) {
            recipe.cuisineType = newCuiseneType;
        },
        deleteIngrident: function (ingredient) { 
            //ova metoda samo treba da obrise neki sastojak, bez da ostavi prazan prostor
            var updatedIngredients = [];
            for (var i = 0; i < recipe.ingredients.length; i++) { 
                if (recipe.ingredients[i] !== ingredient) { 
                    updatedIngredients[updatedIngredients.length] = recipe.ingredients[i];
                } 
            }
            recipe.ingredients = updatedIngredients;
        }
    };
    return recipe;
}

var paprikas = createRecipe(
    'paprikas',
    'madjarska kuhinja',
     2,
    ['krompir', 'paprike', 'meso'],
    60,
    'Sipati vodu u lonac...'
);
console.log(paprikas);
paprikas.printIng();
console.log(paprikas.checkIsUnder15Min());
paprikas.changeCuisineType('Italijanska kuhinja');
console.log(paprikas);
paprikas.deleteIngrident('paprike');
console.log(paprikas);


var hero = {
    name: 'Superman',
    saynName: function () {
        return 'Hi I am' + hero.name;
    }
};


var hero = {
    name: 'Superman',
    saynName: function () {
        return 'Hi I am' + this.name;
    }
};

var testObj = {
    nesto: 'test',
};
//console.log(paprikas instanceof Recipe);
//console.log(paprikas instanceof Object);
console.log(testObj instanceof Object);
if (!(testObj instanceof Object)) { 
    console.log('Object is not from Recip con fun')
        return;
}

/*var c = paprikas;
c.name = 'test';
console.log(c);
console.log(paprikas);*/

var stringObj = JSON.stringify(paprikas);  // sad imamo string verziju objekta paprikas, a onda ga vracamo nazad u objekat sa:
var c = JSON.parse(stringObj);  //ovo c je sad potpuno druga verzija paprikasa, ali se sad gube metode, zato ovo ne koristimo u objektima koje ih imaju
c.name = 'test';

console.log(c);
console.log(paprikas); //sad se samo razlikuju u imenu, ali ovaj prvi vise nema metode - funkcije, vidi u console.log-u