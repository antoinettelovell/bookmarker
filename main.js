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
    //check if name or url is empty
    if(siteName === '' || siteUrl === ''){
        alert('Site name and url cannot be empty');
        return false;
    }

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
    // console.log(bookmarks);

    //add new bookmark into bookmarks
    bookmarks.push(bookmark);
    //reset bookmarks to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } 
    //reset the form
    document.querySelector("#myForm").reset();
    fetchBookmarks();
 }
     //fetch Bookmarks
    function fetchBookmarks(){
        //get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        //get the output div by id
        var bookmarksResult = document.querySelector("#bookmarksResult");

        // console.log(bookmarksResult);
        //reset the output div
        bookmarksResult.innerHTML ="";
        //loop through bookmarks
        for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name;
        var url = bookmarks[i].url;
        bookmarksResult.innerHTML +=
        '<div>' +
        '<h3>' +
        name + ' ' +
        '<a class ="btn btn-success" href ="'+
        url +
        '">Visit</a>  ' + 
        '<button class="btn btn-danger" onclick="deleteBookmark(\''+name+ "')\">Delete</button>" +
        '</h3>' +
        '</div>';
        }
    }

    function deleteBookmark(name){
       //console.log(name);

       //get bookmarks from localStorage
       var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

       //loop through bookmarks
       for(var i= 0; i < bookmarks.length; i++){
           //remove the bookmark with the given name
           if(bookmarks[i].name === name){
               bookmarks.splice(i, 1);
               break;
           }
       }
       //reset bookmarks back to localStorage
       localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
       
       //re-fetch bookmarks result
       fetchBookmarks();
    }