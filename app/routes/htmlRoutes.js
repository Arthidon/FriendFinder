// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};





//  // AJAX request
//  $.ajax({
//   url: friendsAPI,
//   method: "GET"
// })
// // After data comes back from the request
// .then(function (friendsResults) {
//   // Convert answers to array
//   for (i in ans) {
//       answers.push(ans[i]);
//   }

//   // Create new friend object
//   newFriend = {"name": userName, "photo": pic, "scores": answers};

//   // Post new friend data
//   $.post("/api/friends", newFriend)
//   .then(function(data) {
//       console.log("Adding friends", data);
//   });

//   // Compare friend answers to users answers
//   for (i in friendsResults) {
//       friendName = friendsResults[i].name;
//       friendAnswers = friendsResults[i].scores;
//       friendPic = friendsResults[i].photo;
//       differences = 0;
//       for(x in friendAnswers) {
//           differences += Math.abs(friendAnswers[x] - answers[x]);
//       }
//       friend = {name: friendName, pic: friendPic, totalDifferences: differences};
//       comaptibility.push(friend);
//   }

//   // Find the friend with the least difference
//   var lowest = Number.POSITIVE_INFINITY;
//   for (y in comaptibility) {
//       if (comaptibility[y].totalDifferences < lowest) {
//           lowest = comaptibility[y].totalDifferences;
//           bestFriend = comaptibility[y];
//           console.log("Current Best Friend: " + bestFriend.name);
//       }
//   }
  
//   // Tell me the best friend match
//   console.log(comaptibility);
//   console.log("Absolute Best Friend: " + bestFriend.name);

//   percentMatch = (100 - ((bestFriend.totalDifferences / 40) * 100));

//   friendInfo = `
//   <h3>${bestFriend.name}</h3>
//   <p class="lead"><i>They'll really like you!</i></p>
//   <img src="${bestFriend.pic}">
//   <br>
//   <h5>${percentMatch}% Match</h5>
//   `

//   $( ".modal-body" ).html(friendInfo);
//   $('.modal').show();
// });

