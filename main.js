//when the user clicks on the members link, retrieve
//the profile photos of the emberjs group members
$("#members-link").on("click", function(){
  $("#results").html("Loading...");

  let promise = $.get("https://api.github.com/orgs/emberjs/members");

  promise.done(function(members){
    let fragment = document.createDocumentFragment();
    members.forEach(function(member){
      let img = document.createElement('img');
      img.src = member.avatar_url;
      img.width = 150;
      img.alt = `image of ${member.login}`;
      fragment.append(img);
    });
    $("#results").html(fragment);
  });

  promise.fail(function(){
    $("#results").html("error retrieving data");
  });

});


//when the user clicks the repos link, retrieve
//the names and descriptions of each emberjs repo
$("#repos-link").on("click", function() {
  $('#results').html("Loading...");

  let promise = $.get("https://api.github.com/orgs/emberjs/repos");

  promise.done(function(repos){
    let fragment = document.createDocumentFragment();
    repos.forEach(function(repo){
      let h2 = document.createElement('h2');
      h2.innerText = repo.name;
      let p = document.createElement('p');
      p.innerText = repo.description;
      fragment.append(h2, p);
    });
    $("#results").html(fragment);
  });

  promise.fail(function(){
    $("#results").html("error loading repos");
  });

});
