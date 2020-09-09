import {idx, searchPerfumes} from './Search.js';

var searchInput;
var searchResults = null;

window.onload = function() {
    // get dom elements
    searchInput = document.getElementById('Search-box')
    searchResults = document.getElementById('search-results')
    
    // data is loaded, next register handler
    registerSearchHandler()
    }

//main function to set the search behaviour in motion
function registerSearchHandler() {

    // register on input event
    searchInput.oninput = function(event) {
    
        // remove search results if the user empties the search input field
        if (searchInput.value == '') {
            
            searchResults.innerHTML = ''
        } else {
    
            // run fuzzy search
            var results = searchPerfumes(searchInput.value);
    
            // render results
            renderSearchResults(results)
        }
    }
    
    // set focus on search input and remove loading placeholder
    searchInput.focus()
    searchInput.placeholder = ''
    }

// function to render the results received on screen
function renderSearchResults(results){


    if (results.length > 0) {
    
        // show max 10 results
        if (results.length > 9){
            results = results.slice(0,10)
        }
    
        // reset search results
        searchResults.innerHTML = ''
    
        // append results
        results.forEach(result => {
        
            // create result item
            var li = document.createElement('li')
            li.innerHTML = 
            
            `<img src="images/${result.id}.jpg">
            <div class="product-info">
          <div class="product-text">
            <h1>${result.fragrance}</h1>
            <h2>by&nbsp;${result.brand}<h2>
          </div>
          <p class="product-type">${result.type}</p>
          <div class="product-price-btn">
            <p><span>${result.price}</span></p>
            <button type="button">buy now</button>
          </div>
        </div>
      </div>`
    
            searchResults.appendChild(li)
        })
    
    // if results are empty
    } else {
        searchResults.innerHTML = '<li>No results found.</li>'
    }
    }