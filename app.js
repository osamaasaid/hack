
// store final results in this object
var hashTable = {};
var url = "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"

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


// execute here
runAll()

function storyInfo(responseText) {
    var stories = JSON.parse(responseText);
    hashTable[stories.id] = stories;
    // console.log(hashTable);
    console.log(stories.title)
    console.log(stories.url)
    console.log(stories.score)
    console.log(stories.by)
    console.log(stories.kids)


    }
// run everything
function runAll() {
    xhr(url, newStories);
}

//Create the new links
    //story's title
    // var p = document.getElementById('news').appendChild('');
    // var story =  `<p>${stories.title}</p>`
    // console.log(stories.title)
    // p.innerHTML =  story ;

    // var link = document.getElementById("storyUrl");
    // var storyLink = `${stories.url}`;
    // link.innerHTML = storyLink;

    // //points for the story
    // var rank = document.getElementById('score');
    // var score = `<p> ${stories.score} ${  stories.score < 2 ? '<span>Point</span>': 'Points'} </p>`;
    // rank.innerHTML = score;


