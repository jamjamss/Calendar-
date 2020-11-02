$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YY, H:mm a"))

    let timeId = $(".hour").each(function(i){
        $(this).attr("value")

       

    })

    
    

    

   $(".row").each(function(index){
    
    let currentTime = moment().format("H:mm a") 

    if(timeId === currentTime) {
        $(this).addClass(".present")
    }
   

    console.log(timeId)


   })

    

  
 

})

    


        

