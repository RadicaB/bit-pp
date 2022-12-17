//1.	Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like!


function Coffee (n, str, flv, mlk, sgr) {
    this.name = n;
    this.strength = str;
    this.flavour = flv;
    this.milk = mlk;
    this.sugar = sgr;
}
var coffee = new Coffee('Long with milk', 'mild', 'chockolate', 'mandatory', 'signal that I am kidnapped')

console.log(coffee);

//2.	Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.

function Movie (name, actrs, dir, gnr, pop) {
    this.title = name;
    this.actors = actrs;
    this.director = dir;
    this.genre = gnr;
    this.popularity = pop;
}

var movie = new Movie ('Avengers', 'Pera Peric', 'Who Cares', 'super-hero', 'the highest gross earnings of all time')

console.log(movie);

//3.	Write a function that creates an object that represents a project. Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not. Add a method that prints out the project's repository, a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not.

function CreateProject(descrpt, prgmlng, git, boolstat) { 
    this.description = descrpt;
    this.programming_language = prgmlng;
    this.git_repository = git;
    this.boolean_status = boolstat;
    this.printGit = function () { 
        console.log(this.git_repository);
    }
    this.check = function () { 
        if (this.programming_language === 'JavaScript')
            console.log('written in JS')
        else { 
            console.log('not written in JS');
        };
    }
    this.checkDev = function () { 
        //if (this.boolean_status === true) {   ovde smo definisali ako ima nesto onda izvrsi kod
                                                //u else nema nista da bude automatski false
        if (this.boolean_status) {
            console.log('Project is in development');
        } else { 
            console.log('Project is not active');
        }     
        }
    }

var project1 = new CreateProject('Knjiga recepata', 'JavaScript', 'link neki bla', 'in development');
var project2 = new CreateProject('Knjiga recepata', 'Pyton', 'link neki drugi bla', '');

project1.check();
project2.check();

project1.printGit();
project2.printGit();

project1.checkDev();
project2.checkDev();

console.log(project1);

//4.	Write a function that creates an object that represents a culinary recipe.Each recipe is described by: name, type of cuisine, complexity(value from 1 to 5), list of ingredients, preparing time, preparing instruction.
//○	Add a method that prints out all the ingredients necessary for the meal preparation.
//○	Add a method that checks if a meal can be prepared in under 15 minutes.
//○	Add a method that changes the type of cuisine to the given value.
//○	Add a method that delete a given ingredient from the list of ingredients.

function Recepie(n, tc, cplx, ing, time, instr) {
    
    this.name = n;
    this.typeOfCuisine = tc;
    this.complexity = cplx;
    this.listOfIngredients = ing;
    this.preparingTime = time;
    this.preparingInstruction = instr;
    this.PrintIngr = function () {
        console.log(this.listOfIngredients);
    }
    this.CheckTime = function () {
        if (this.preparingTime < 15) {
            console.log('it takes less then 15 minutes');
        } else {
            console.log('this preparation is longer then 15 min');
        }
    }
    this.changeTypeOfCuisine = function () {
        console.log(this.typeOfCuisine);
        this.typeOfCuisine = 'srpska kuhinja';
    }
    this.deleteIngredint = function (ing, ing2) {
      var newArray = [];//meni treba pristup nizu, to cemo uraditi kroz petlju i to radimo: ... , onda trazimo pristup elementu koji zelimo da obrisemo i pravimo novi niz kome dodeljujemo sve elemente koje nismo obrisali
          /*for (var i = 0; i < this.listOfIngredients.length; i++) { 
              if (this.listOfIngredients[i] !== ing) { 
                  newArray[newArray.length] = this.listOfIngredients[i];
              }   
          }
          this.listOfIngredients = newArray;
        
        /* version 2: for (var i = 0; i < this.listOfIngredients.length; i++) {
            if (this.listOfIngredients[i] === ing) {
                delete this.listOfIngredients[i];
            }
        }version 3:*/
           var newArray = [];
        for (var i = 0; i < this.listOfIngredients.length; i++) { 
            if (this.listOfIngredients[i] === ing || this.listOfIngredients[i] === ing2) {
                continue;
            }
            newArray[newArray.length] = this.listOfIngredients[i];
          } this.listOfIngredients = newArray;
    }
}

var recepie = new Recepie('palacinke', 'svima pripada', 'lako', ['jaja', 'mleko', 'kisela voda', 'brasno', 'secer', 'ulje'], 30, 'zamesas sve sastojke i peces na tiganju');

console.log(recepie);
recepie.PrintIngr();
recepie.CheckTime();
recepie.changeTypeOfCuisine();
console.log(recepie);
recepie.deleteIngredint('brasno','jaja');
console.log(recepie);
