//console.log("Hello from JavaScript");

//Event Listener for form submit
document.querySelector("#myForm").addEventListener("submit", saveBookmark);
// Save Bookmarks
function saveBookmark(e){
    e.preventDefault();
    // console.log("Hello from saveBookmark");

    //Get User Input 
    var siteName = document.querySelector("#siteName").value;
    // console.log(siteName);
    var siteUrl = document.getElementById("siteUrl").value;
    // console.log(siteUrl);

    // Create an object for bookmark
    var bookmark = {
        name: siteName,
        url: siteUrl
    };
    // console.log(bookmark);
    // localStorage.setItem("test", "Hello World");
    // console.log(localStorage.getItem("test"));
    // store bookmarks array into local storage
    // check if the bookmarks array exists
    if(localStorage.getItem("bookmarks") === null){
        // init bookmarks arrays
    var bookmarks = [];
    //adding new bookmark into array
    bookmarks.push(bookmark);
    //set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));    
    } else{
    //get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    console.log(bookmarks);
    //add new bookmark into bookmarks
    bookmarks.push(bookmark);
    //reset bookmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } 
    //reset the form
    document.querySelector("#myForm").reset();
 }