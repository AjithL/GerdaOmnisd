window.addEventListener('DOMContentLoaded', function() {
  
   var activityHandler = null
   
   navigator.mozSetMessageHandler('activity', function(activityRequest) {
    let option = activityRequest.source

    if(option.name === "tech.gerda.pkg.help") {
      activityHandler = activityRequest
    }
  })

  
  window.addEventListener('keydown', function(e) {
   switch(e.key) {
     case 'Enter': //close the activity
       activityHandler.postResult({})
       break;
   }})
  
  
}, false)