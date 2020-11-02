$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YY, H:mm a"))

    let timeId = parseInt($(this).attr("id").split("-")[1])

    console.log(timeId)

   $(".row").each(function(index){
    
    let currentTime = moment().format("H:mm a")

    if (currentTime === timeId){
        $(this).addClass(".past")
    }

    


   })

    

   

 

})

    


        

