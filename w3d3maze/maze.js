$(document).ready(function(){

    // set events
    $(".boundary").on('mouseover', touchedBoundary);
    $("#maze").on('mouseleave', touchedBoundary);
    $("#start").on('click', reset);
    $("#end").on('mouseover', end);

    let boundaryTouched = false;
    let started = false;


    function touchedBoundary(){
        if(started){
            $(".boundary").addClass("youlose");
            boundaryTouched = true;
        }
    }

    function reset(){
        $(".boundary").removeClass("youlose");
        boundaryTouched = false;
        started = true;
        $("#status").text("Move cursor across white path until you reach \"E\". ");
    }

    function end(){
        if(!boundaryTouched){
            alert("You win!");
        }else{
            alert("Sorry, you lost.");
        }

        started = false;
    }
});