/*1. Write a function called hasMostFollowers, which accepts a variable number of arguments. You should then make an 
AJAX call to the Github User API (https://developer.github.com/v3/users/#get-a-single-user) to get the name and number 
of followers of each argument. The function should return a string which displays the username who has the most followers. 

Hint - Try to use Promise.all to solve this and remember that the jQuery AJAX methods ($.getJSON, $.ajax, etc.) 
return a promise.
*/

async function hasMostFollowers(){
    var promiseArray=[];
    await Array.from(arguments).forEach((x)=>{
        promiseArray.push($.getJSON(`https://api.github.com/users/${x}`))}
    );
    var t=await Promise.all(promiseArray);
    var maxe=0;
    t.forEach((elem,i,arr)=>{maxe=(elem.followers>arr[maxe].followers?i:maxe)})
    console.log(`${t[maxe].login} has the most followers ${t[maxe].followers}`);
}

hasMostFollowers('elie','tigarcia','colt').then(function(data){
    console.log(data)
});


function hasMostFollowers(){
    var promiseArray=[];
    for(var i=0;i<arguments.length;i++){
        promiseArray.push(getFollower(arguments[i]));
    }
    return Promise.all(promiseArray).then((users)=>{
            //console.log(users);
            var maxFollowers=0;var maxFollowersIndex=0;
            users.forEach((elem,i)=>{
                if(elem.followers>maxFollowers){maxFollowers=elem.followers; maxFollowersIndex=i;}
            });
            return `${users[maxFollowersIndex].login} has the most followers with ${maxFollowers}`;
    });
}

/*
2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API
(https://swapi.co/ ) to search for a specific character by the number passed to the function. 
Your function should return a promise that when resolved will console.log the name of the character.

Bonus 1 -  Using the data from the previous AJAX call above, make another AJAX request to get the first film that 
character is featured in and return a promise that when resolved will console.log the name of the character and the
film they are featured in 

Bonus 2 -  Using the data from Bonus 1 - make another AJAX call to get the information about the first planet that 
the film contains. Your function should return a promise that when resolved will console.log the name of the character
and the film they are featured in and the name of the planet. 
 */

async function starWarsString(rank){
    var heroName="",movieName="",movieDirector="",planet="";
    var hero= await $.getJSON(`https://swapi.co/api/people/${rank}`);
    heroName=hero.name;
    var movie=await $.getJSON(hero.films[0]);
    movieName=movie.title; movieDirector=movie.director;
    var planet=await $.getJSON(movie.planets[0]);
    return `${heroName} is featured in ${movieName}, directed by ${movieDirector} and it takes place on ${planet.name}`;
}

function starWarsString(rank){
var heroName="",movieName="",movieDirector="",planet="";
    return $.getJSON(`https://swapi.co/api/people/${rank}`)
        .then((hero)=>{heroName=hero.name; return $.getJSON(hero.films[0])})
        .then((movie)=>{
                movieName=movie.title; movieDirector=movie.director;
                 return $.getJSON(movie.planets[0]);
         })
        .then((planet)=>`${heroName} is featured in ${movieName}, directed by ${movieDirector} and it takes place on ${planet.name}`);
}

starWarsString(1).then(function(data){
    console.log(data)
})

starWarsString(1).then(function(data){
    console.log(data)
})