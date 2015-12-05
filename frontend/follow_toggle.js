var FollowToggle = function($el) {
  this.followState = $el.getAttribute("data-initial-follow-state");
  this.userId = $el.getAttribute("data-user-id");
  this.$el = $($el);
  debugger
  this.url = "/users/" + this.userId + "/follow";
  this.$el.on("click", this.handleClick.bind(this));
};

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el.innerHTML = "Follow!";
  } else {
    this.$el.innerHTML = "Unfollow!";
  }
};

FollowToggle.prototype.handleClick = function (e) {
  var method;
  if(this.followState === "followed"){
    method = "DELETE";
  } else {
    method = "POST";
  }
  e.preventDefault();
  $.ajax({
        url: this.url,
        method: method,
        data: {"follows": {"user_id": this.userId }},
        success: function(responseData){console.log(responseData);}
  });
};



module.exports = FollowToggle;
