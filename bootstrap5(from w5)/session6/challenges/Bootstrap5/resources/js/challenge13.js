// KrazyStars API v1.0 - Documentation
// http://krazywoman.com/krazystars/


// When the webpage loads
// Randomly determine whether to show "male" stars or "female" stars
function display_default() {

    // YOUR CODE GOES HERE
    // Call API
    console.log("**** [START] display_default() *****")
    let random_num = Math.floor(Math.random() * 2)
    let gender = ""
    if(random_num == 0){
        gender = 'm'
    }
    else{
        gender = 'f'
    }

    let api_endpoint_url_by_gender = "http://krazywoman.com/krazystars/api/star/search.php?g="+gender
    console.log("API endpoint URL by gender: " + api_endpoint_url_by_gender)

    axios.get(api_endpoint_url_by_gender)
    .then(response => {
        let star_list = response.data.records
        // console.log(star_list)
        let stars_carousel_str = ''
        let first_time = true
        let count = 0
        let wiki_link_str = ''
        let imdb_link_str = ''

        for(star of star_list){
            console.log(star)
            count++
            wiki_link_str += 
            `
            <a id="wiki${count}" class="dropdown-item" href="${star['wikipedia_url']}" target="_blank">${star['fullname']}</a>
            `
            imdb_link_str += 
            `
            <a id="imdb${count}" class="dropdown-item" href="${star['imdb_url']}" target="_blank">${star['fullname']}</a>
            `

            
            if(first_time == true){
                stars_carousel_str+=
                    `
                    <div class="carousel-item active">
                    `
            }
            else{
                stars_carousel_str+=
                    `
                    <div class="carousel-item">
                    `
            }
            stars_carousel_str+=`
                <img id="image${count}" src="${star['photo_background_url']}" alt="">
                    <div class="carousel-caption">
                            <h2 class="star_h2" id="slide_heading1" style="padding: 5px; background-color: grey; color: white">${star['fullname']}</h2>
                            <p id="slide_title1" style="padding: 5px; background-color: black; color: white">${star['quote']}</p>
                    </div>
                </div>
                `
            
            first_time = false
        }
        document.getElementById('slide_show').innerHTML = stars_carousel_str
        document.getElementById('wiki_links').innerHTML = wiki_link_str
        document.getElementById('imdb_links').innerHTML = imdb_link_str
        console.log(document.getElementById('wiki_links'))

    })
    .catch(error => {
        console.log(error.message)
    })


    console.log("**** [END] display_default() *****")
}


// This function is called when user clicks on "Show Male Stars" button.
function show_male_stars() {

    // YOUR CODE GOES HERE

}


// This function is called when user clicks on "Show Female Stars" button.
function show_female_stars() {

    // YOUR CODE GOES HERE

}