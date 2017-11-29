import React, { Component } from 'react';
// import react from 'react-dom';

var UserProfile = (function() {
    
    var id = null;
    var name = "";
    var level = null;
  
    var getUser = function() {
      return {"name":name,"id":id,"level":level};
    };
  
    var setUser = function(user){
        name=user.name;
        id = user.id;
        level = user.level;
    }
  
    return {
      getUser: getUser,
      setUser: setUser
    }
  })();
  
export default UserProfile;