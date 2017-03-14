$( document ).ready(function() {
      $.ajax({
          method:"GET",
          url: "https://4geeksacademy.github.io/exercise-assets/json/project_list.json", 
          datatype: "json",
          success: function(data){
             // $('#list-of-items').html('');
              for (var i =0; i<data.length; i++)
              {
                  $("#list-of-items").append(renderPortfolio(data[i]));
               //   (result[ind].name);
                 // alert(result[ind].name);
              }
              
    }});

});

function renderPortfolio(data){
    var htmlString = '';
     htmlString ='<li>';
     htmlString +=   ' <h1 class ="myTitle"> '+data.name+'</h1>';
     htmlString +=   '  <img   src='+data.thumb+' />';
     htmlString +=    ' <P class="myCap">'+data.description+ ' text here.';
     htmlString +='</li>';
         return htmlString; 
}

//var myObject = {
    //"title": "here are the titles",
  // "thumb": "",
    //"caption":""
    //}
    
$

