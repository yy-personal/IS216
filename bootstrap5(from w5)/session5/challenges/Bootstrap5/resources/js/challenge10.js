//================================================
// DO NOT MODIFY THIS CONSTANT VARIABLE
//================================================
const stars_dataset = [
    {
        "Ryan Gosling": [
            "sm_bg_ryan.jpg",
            "I'm going to make a movie about 'Hey Girl.'",
            "https://en.wikipedia.org/wiki/Ryan_Gosling"
        ],
        "Zac Efron": [
            "sm_bg_zac.jpg",
            "A girl can tell I like her when I blush or start telling bad jokes.",
            "https://en.wikipedia.org/wiki/Zac_Efron"
        ],
        "Eminem": [
            "sm_bg_eminem.jpg",
            "I am whatever you say I am; if I wasn't, then why would you say I am.",
            "https://en.wikipedia.org/wiki/Eminem"
        ]
    },
    {
        "Irina Shayk": [
            "sm_bg_irina.jpg",
            "I am trying to concentrate on books. You know, I love Dostoevsky. He's my favorite writer.",
            "https://en.wikipedia.org/wiki/Irina_Shayk"
        ],
        "Anna Kendrick": [
            "sm_bg_anna.jpg",
            "An actor should always let humility outweigh ambition.",
            "https://en.wikipedia.org/wiki/Anna_Kendrick"
        ],
        "Taylor Swift": [
            "sm_bg_taylor.jpg",
            "I'm intimidated by the fear of being average.",
            "https://en.wikipedia.org/wiki/Taylor_Swift"
        ]
    }
];


// [TODO] IMPLEMENT THIS FUNCTION
// When the webpage loads, the web browser will call this function.
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    let random_num = Math.floor(Math.random() * 2);
    // console.log(random_num);

    let gender_list = stars_dataset[random_num];
    // console.log(gender_list);

    gender_list = Object.entries(gender_list);
    let count = 0;

    for(person of gender_list){
        console.log(person);
        let new_website_link = person[1][2];
        // console.log(website);
        count++;
        let name = person[0];
        
        let wiki_id = 'wiki' + count;
        // console.log(wiki_id);

        // New website link at navbar here
        let node = document.getElementById(wiki_id);
        node.innerText = name;
        // console.log(node.innerText);
        node.setAttribute('href',new_website_link);

        // Get image_id
        let image_id = 'image' + count;
        // console.log(person[1][0]);
        // New carousell items here.
        let new_image_link = "images/" + person[1][0]; 
        document.getElementById(image_id).setAttribute("src", new_image_link); 

        let heading_id = "slide_heading"+count;
        document.getElementById(heading_id).innerText=name
        
        let quote = person[1][1];
        let slide_title = "slide_title"+count;
        document.getElementById(slide_title).innerText=quote
    }
    // Look for "[IMPORTANT]" inside challenge10.html file.
    // It tells you what elements need to be updated by JavaScript functions.

    // [IMPORTANT] Buttons
    //
    // When displaying "male" stars:
    //  - "Show Male Stars" button must be "disabled" (the user cannot click on it)
    //  - "Show Female Stars" button must be activated (the user should be able to click on it)
    //
    // When displaying "female" stars:
    //  - "Show Male Stars" button must be activated (the user should be able to click on it)
    //  - "Show Female Stars" button must be "disabled" (the user cannot click on it)
}



// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Male Stars" button is clicked, the web browser calls this function.
function show_male_stars() {

    // YOUR CODE GOES HERE
    let gender_list = stars_dataset[0];
    // console.log(gender_list);

    gender_list = Object.entries(gender_list);
    let count = 0;

    for(person of gender_list){
        console.log(person);
        let new_website_link = person[1][2];
        // console.log(website);
        count++;
        let name = person[0];
        
        let wiki_id = 'wiki' + count;
        // console.log(wiki_id);

        // New website link at navbar here
        let node = document.getElementById(wiki_id);
        node.innerText = name;
        // console.log(node.innerText);
        node.setAttribute('href',new_website_link);

        // Get image_id
        let image_id = 'image' + count;
        // console.log(person[1][0]);
        // New carousell items here.
        let new_image_link = "images/" + person[1][0]; 
        document.getElementById(image_id).setAttribute("src", new_image_link); 

        let heading_id = "slide_heading"+count;
        document.getElementById(heading_id).innerText=name
        
        let quote = person[1][1];
        let slide_title = "slide_title"+count;
        document.getElementById(slide_title).innerText=quote
    }
    document.getElementById("male_button").disabled = true;
    document.getElementById("female_button").disabled = false;
}


// [TODO] IMPLEMENT THIS FUNCTION
// When "Show Female Stars" button is clicked, the web browser calls this function.
function show_female_stars() {

    // YOUR CODE GOES HERE
    let gender_list = stars_dataset[1];
    // console.log(gender_list);

    gender_list = Object.entries(gender_list);
    let count = 0;

    for(person of gender_list){
        console.log(person);
        let new_website_link = person[1][2];
        // console.log(website);
        count++;
        let name = person[0];
        
        let wiki_id = 'wiki' + count;
        // console.log(wiki_id);

        // New website link at navbar here
        let node = document.getElementById(wiki_id);
        node.innerText = name;
        // console.log(node.innerText);
        node.setAttribute('href',new_website_link);

        // Get image_id
        let image_id = 'image' + count;
        // console.log(person[1][0]);
        // New carousell items here.
        let new_image_link = "images/" + person[1][0]; 
        document.getElementById(image_id).setAttribute("src", new_image_link); 

        let heading_id = "slide_heading"+count;
        document.getElementById(heading_id).innerText=name
        
        let quote = person[1][1];
        let slide_title = "slide_title"+count;
        document.getElementById(slide_title).innerText=quote
    }
    document.getElementById("male_button").disabled = false;
    document.getElementById("female_button").disabled = true;
}