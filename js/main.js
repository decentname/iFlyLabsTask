
$(document).ready(function(){

  var flag=true;
  var itr = 0;
  var users;
  if(flag){

  var ajax_call = $.ajax({
    type: 'GET',
    url:"https://api.iflychat.com/users/list/demo/c-g",
    success:function(data, textStatus, xhr) {
      console.log(data);
      users = data;
      displayUsers(itr);
    },
    error:function(){
      console.log("error fetching data");
    }

  })

};


$("#start").click(function(){
  flag = true;
  var interval = 1000 * 60 * 1;
  setInterval(ajax_call, interval);  
});

$("#stop").click(function(){
  flag = false;
});


$("#next").click(function(){
    itr++;
    displayUsers(itr);
})

$("#prev").click(function(){
    itr--;
    displayUsers(itr);
})


function displayUsers(j) {
  // body...
    // console.log(data[0]['u']);
    add='';
    for (var i=j;i<(j+10);i++){

      if(users[i]['p'] == undefined){
          users[i]['p'] = "./images/image_not_found.jpg";
      }else
      {
        if(users[i]['p'].indexOf("http") == -1){
          users[i]['p'] = "http://"+users[i]['p'];    
        } 
         
      }

      if(users[i]['n'] == undefined){
          users[i]['n'] = "Unknown User";
      }

      add+=     `<div class="card">
    <div class="image">
      <img src="`+users[i]['p']+`">
    </div>
    <div class="extra">
    `+users[i]['n']+`
    </div>
  </div>`
    };

    

     $("div.ui.ten.cards").html(add);
}

});
 