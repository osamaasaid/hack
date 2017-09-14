console.log("hello!!");

$(document).ready(function(){
  $.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty", function(data, staus){
    var stories = data.slice(0,30);
    var storyObj = {};
    storyObj[stories.id] = stories;
    console.log(stories);
    for (var i = 0; i < stories.length; i++){
      console.log(stories[i]);
    }
    var newUrl = "https://news.ycombinator.com/item?id=${stories[i]}";
    console.log(newUrl);

  });
});