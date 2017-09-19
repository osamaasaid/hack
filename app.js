// store final results in this object
var hashTable = {};
var url = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
// ajax function, cb = callback
function xhr(url, cb) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            cb(xmlHttp.responseText);
        }
    }
    xmlHttp.open('GET', url, true);
    xmlHttp.send(null);
}
// grab 30 stories
function newStories(responseText) {
    // parse the json file
    var stories = JSON.parse(responseText);
    // iterate over it and find the id
    for (var i = 0; i < 30; i++) {
        // save the id here
       var storyID = stories[i];
        // ajax it and insert id
        xhr(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`, storyInfo);
    }
}
function storyInfo(responseText) {
    var stories = JSON.parse(responseText);
    hashTable[stories.id] = stories;
    //info related to the stories
    var storyTitle = stories.title;
    var storyUrl = stories.url;
    var storyScore = stories.score;
    var storyAuthor = stories.by;
    var storyComments = stories.kids;  //ToDo: Be able to display comments
    var commentCount = stories.descendants;
    var unixTime = stories.time;
    var realTime = new Date(unixTime * 1000); //ToDo: Change to "hours ago" rather than full timestamp
    //Append to DOM
    var htmlNews = '';
    for (var key in stories) {
        htmlNews =
        `
         <div class="row">
            <ul>
               <li>
                 <p> <a href="${storyUrl} id="title">${storyTitle}</a> </p>
                 <p>${storyScore} points by ${storyAuthor} | <a href="https://hacker-news.firebaseio.com/v0/item/${storyComments}.json?print=pretty">${commentCount} comments</a> | ${realTime} </p>
               </li>
            </ul>
         </div>
        `
    }
    $('#news').append(htmlNews);
    }

// run everything
function runAll() {
    xhr(url, newStories);
}
runAll()





