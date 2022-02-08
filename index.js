//console.log(document)
//const heading = document.querySelector("h1");
//const findClass = document.querySelector(".value");
//const element = document.querySelector("button");
//const otherElement = document.querySelector(".area-display");
//const division = document.querySelector(".stat div");
//const elementOther = document.querySelector(".hello"); //hello doesn't exist
//console.log(heading);
//console.log(findClass);
//console.log(element);
//console.log(otherElement);
//console.log(division);
// console.log(elementOther); // hello doesn't exist

// Find all the buttons on the page
//const buttons = document.querySelectorAll("button");
//console.log(buttons);

// Get a list of all `<h3>` elements
//const heading3List = document.querySelectorAll("h3");

/* Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}

for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}*/
/*
const ratings = document.querySelectorAll("div.rating-display");

console.log(ratings)

for (let i = 0; i < ratings.length; i++) {
  const element = ratings[i];
  console.log(element);
}

const area = document.querySelectorAll("div.area-display");

console.log(area)

for (let i = 0; i < area.length; i++) {
  const element = area[i];
  console.log(element);
}
*/

const descriptions = document.querySelectorAll(".description-display");

console.log(descriptions)

for (let desc of descriptions.values()) {
    let content = desc.innerText;
  
    if (content.length > 250) {
      content = content.slice(0, 250);
      content = content + '<a href="#">...</a>';
    }
  
    desc.innerHTML = content;
  }
/*
  const ratings = document.querySelectorAll("div.rating-display.stat > div.value");

  console.log(ratings)

  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
    console.log(ratingValue);
  }

  for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);
  
    if (ratingValue > 4.7) {
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }*/

  const parks = document.querySelectorAll(".park-display");

  const numberParks = parks.length;

  const newElement = document.createElement("div");

  newElement.innerText = `${numberParks} exciting parks to visit`;

  newElement.classList.add("header-statement");

  const header = document.querySelector("header");

  header.appendChild(newElement);

  /*
// Get the parent element of all parks
const main = document.querySelector("main");

// Select a single park
const park = main.querySelector(".park-display");

// Remove that park
main.removeChild(park);*/

/*const firstBtn = document.querySelector("button");

firstBtn.addEventListener("click", (event) => {
    console.log("You clicked the button", event);
  });*/

  // Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
/*allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      console.log(event.target.parentNode);
    });
  });*/

  allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const park = event.target.parentNode;
        console.log(park)
        park.style.backgroundColor = "#c8e6c9";
    });
  });
/*
  // Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

  // 1. Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main element
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  });

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
});*/

// Function for sorting by name
const sortByName = (parkA, parkB) => {
    const parkAName = parkA.querySelector("h2").innerText;
    const parkBName = parkB.querySelector("h2").innerText;
    if (parkAName < parkBName) {
      return -1;
    } else if (parkAName > parkBName) {
      return 1;
    } else {
      return 0;
    }
  };

  // function for sorting by rating
const sortByRating = (parkA, parkB) => {
    const parkARating = parseFloat(
      parkA.querySelector(".rating-display > .value").innerText
    );
    const parkBRating = parseFloat(
      parkB.querySelector(".rating-display > .value").innerText
    );
    return parkBRating - parkARating;
  };

  // function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  get the main element
    const main = document.querySelector("main");
  
    // 2. get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. empty the main
    main.innerHTML = "";
  
    // 4. create an array
    const parksArray = Array.from(parksList);
  
    // 5. sort the array
    parksArray.sort(sortByRating);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };

  
  // Function for handling the `nameSorter` click
  const nameSorterClickHandler = (event) => {
    event.preventDefault();
  
    // 1.  Get the main element
    const main = document.querySelector("main");
  
    // 2. Get the list of parks
    const parksList = main.querySelectorAll(".park-display");
  
    // 3. Empty the main
    main.innerHTML = "";
  
    // 4. Create an array
    const parksArray = Array.from(parksList);
  
    // 5. Sort the array
    parksArray.sort(sortByName);
  
    // 6. Insert each park into the DOM
    parksArray.forEach((park) => {
      main.appendChild(park);
    });
  };
  
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");
  
  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);


// The code that runs once the DOM is loaded
const main = () => {
    // Select the `nameSorter` link
    const nameSorter = document.querySelector("#name-sorter");
  
    // Add an event listener
    nameSorter.addEventListener("click", nameSorterClickHandler);
  
    // Select the `ratingSorter` link
    const ratingSorter = document.querySelector("#rating-sorter");
  
    // Add an event listener
    ratingSorter.addEventListener("click", ratingSorterClickHandler);
  }
  
  // Add event listener for `DOMContentLoaded`
  window.addEventListener("DOMContentLoaded", main);