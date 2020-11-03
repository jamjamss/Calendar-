$(document).ready(function(){

    $("#currentDay").text(moment().format("MMMM Do YY"))

    $("#hour9").val(localStorage.getItem("hour.9"))
    $("#hour10").val(localStorage.getItem("hour.10"))
    $("#hour11").val(localStorage.getItem("hour.11"))
    $("#hour12").val(localStorage.getItem("hour.12"))
    $("#hour13").val(localStorage.getItem("hour.13"))
    $("#hour14").val(localStorage.getItem("hour.14"))
    $("#hour15").val(localStorage.getItem("hour.15"))
    $("#hour16").val(localStorage.getItem("hour.16"))
    $("#hour17").val(localStorage.getItem("hour.17"))

    $(".saveBtn").on("click", function () {
        let timeBlock = $(this).parent().attr("id");
        let textArea = $(this).siblings(".description").val()
        localStorage.setItem(timeBlock, textArea);
        console.log()
    });



  function trackTime (){
    let currentTime = moment().hour();
    $(".time-block").each(function(){
        let allTime = parseInt($(this).attr("id").split(".")[1]);

        if(allTime < currentTime){
            $(this).addClass("past")

        }if (allTime === currentTime){
            $(this).addClass("present")
            $(this).removeClass("past")
        }if (allTime > currentTime){
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("past")
        }
    })

  }
  trackTime()
}) 



   
   






    

  
 



    


        

