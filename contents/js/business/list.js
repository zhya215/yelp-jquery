

function listBusinesses(){
    console.log('listing businesses')
    $.get("https://agile-woodland-5195.herokuapp.com/v2/search?term=business&location=Denver", function(data) {
        var businesses = (JSON.parse(data)).businesses
        console.log(businesses)
        $.get("/yelp-jquery/templates/listBusinesses.jade", function(template) {
            var html = jade.render(template, {
                items: businesses
            })
            $("#list").html(html)
        })
    })
}

function searchByName(location, name){
    console.log('searching businesses')
    if(location && name){
        var replaced_location = location.split(' ').join('+')
        console.log(replaced_location)
        $.get("https://agile-woodland-5195.herokuapp.com/v2/search?term=business&location="+replaced_location, function(data) {
        var businesses = (JSON.parse(data)).businesses
        var business=_.find(businesses, {"name": name})
       /* for(i = 0; i < businesses.length; i++){
            if((businesses[i]).name === name){
                business=businesses[i]
                break
            }
        }*/
            $.get("https://agile-woodland-5195.herokuapp.com/v2/business/lakewood-garage-door-lakewood", function(data) {
                $.get("/yelp-jquery/templates/listBusinesses.jade", function(template) {
                    var html = jade.render(template, {
                        items: JSON.parse(data)
                    })
                    $("#list").html(html)
                })
            }) 
        })
    }
    else{
        alert('please fill location and name')
    }

}
