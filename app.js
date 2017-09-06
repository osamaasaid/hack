console.log("Hello!!");

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        console.log(xhr.responseText);
        var ids = xhr.responseText;
        var items = ids.slice(1, 20); //This just grabs the first 20 articles. Not done yet
        console.log(ids.length);
        console.log(items);
        var id; //article ID from the request goes here
    }


}
xhr.open('GET', "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty", true);
xhr.send();



// /"https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
