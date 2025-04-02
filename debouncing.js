function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(this, args), delay);
    };
}

function searchQuery(query) {
    console.log("Searching for:", query);
}

const debouncedSearch = debounce(searchQuery, 500);


debouncedSearch("Java");
debouncedSearch("JavaS");
debouncedSearch("JavaScript");  
