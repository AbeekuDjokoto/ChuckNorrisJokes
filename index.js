// const JOKE_CATEGORIES = [];

// renderjoke(joke){
//   //add joke to DOM
// };
// getRandomJoke(){

// };
// searchJoke(searchString){
//   // fetch joke with search param
//   //loop through results
//   //append to DOM
// };
// getJokeWithCategory(category){
//   // fetch joke with category
// };
// getCategories(){
//   //fetch categories
//   //append categories to select
// };

let random = document.getElementById('random')
let randomBtn = document.getElementById('randomJoke')
function getStuff(){
    let jokes = fetch('https://api.chucknorris.io/jokes/random')
    .then((res)=> res.json())
    .then((res)=> {
        let para = document.getElementById('para')
        para.innerHTML = res.value
        random.appendChild(para)
    })
}

randomBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    getStuff()
})

function category(){
    let categoryList = fetch('https://api.chucknorris.io/jokes/categories')
    .then((res) => res.json())
    .then((res) => {
        let result = res
        // console.log(result)
        for(let i in result){
            let category = document.getElementById('category')
            let option = document.createElement('option')
            option.innerHTML = result[i]
            category.appendChild(option)
        }
    })
}

category()

function categoriesList(category){
    let byCategory = fetch(`https://api.chucknorris.io/jokes/random?category=${category}`,
    {
        headers: {
            accept: "application/json",
        }
    }
    )
    .then((res)=> res.json())
    .then((res)=> {
        let input = res
        console.log(input)
        let categoryJoke = document.getElementById('categoryJoke')
        categoryJoke.innerHTML= input.value
    }).catch((err)=> console.log(err))
}

let categoryBtn = document.getElementById('categoryBtn')


categoryBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    let selected = document.getElementById('category')
    categoriesList(selected.value)
    
})


function freeTextSearch(query){
    let search = fetch(`https://api.chucknorris.io/jokes/search?query=${query}`,
    {
        headers: {
            accept: "application/json",
        }
    }
    )
    .then((res)=> res.json())
    .then((res)=> {
        let result = res;
        console.log(result)
        let searchResult = document.getElementById('searchResult')
        let search = document.getElementById('search')
        let sliced = result.result.slice(0, 10)
        sliced.forEach(element => {
            searchResult.innerHTML += `${element.value} <br>`
        });
    })    
}


let searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    let search = document.getElementById('search')
    freeTextSearch(search.value)
    

})

