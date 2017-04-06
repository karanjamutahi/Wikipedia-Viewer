
var apiURL = "";
var title = "";


$(document).ready(function(){
    
console.log("Twende Kazi Sasa");

 $("#searchbtn").on("click",function(){
    console.log("clicked");
    var queryOld = $("#query").val();
    var query = queryOld.replace(" ", "%20");
    console.log(query);

    $("#query").val(""); //Reset TextField

    apiURL = "https://en.wikipedia.org/w/api.php?action=query&origin=*&generator=search&prop=extracts|pageimages&gsrsearch="+query+"&gsrlimit=20&exintro=1&explaintext=1&exchars=350&exlimit=20&format=json";
    console.log(apiURL);


    $.getJSON(apiURL,function(response){
        //console.log(response);
        var pages = response.query.pages;
        var keys = Object.getOwnPropertyNames(pages);
        //console.log(pages);
        //console.log(keys);
        $("#Results").children().remove();
        console.log("Removed");
        $("#Results").append("<ul class='collapsible' data-collapsible='accordion' id ='resultsList'></ul>");
        console.log("Appended");
        $('.collapsible').collapsible();

        for (i=0;i<keys.length;i++){
            var selector = keys[i];
           // console.log(pages[selector]);
            var title = pages[selector]['title'];
            var description = pages[selector]['extract'];
            var url = "https://en.wikipedia.org/?curid="+selector;

            $("#resultsList").append("<li><div class='collapsible-header'>"+title+"</div><div class ='collapsible-body'><span>"+description+"<br><a href="+url+">Read More</a></span></div></li>");
        
    }
        
        
    });
    //close the getjson method

 });   
});

