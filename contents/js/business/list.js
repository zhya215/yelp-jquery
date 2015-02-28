var _ = require('lodash')

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

function searchByName(name, location){
        if(!(location && name)){
            alert("Please enter name and location")
            return
        }
        $.get("https://agile-woodland-5195.herokuapp.com/v2/search?term=business&location=" + location, function(data) {
                var prebusinesses = (JSON.parse(data).businesses)

                var businesses = []
                for(index in prebusinesses){
                        var testbusiness = prebusinesses[index];
                        if(testbusiness.name === name)
                            businesses.push(testbusiness)
                }
                $.get("/yelp-jquery/templates/listBusinesses.jade",  function(template) {
                 var html = jade.render(template, {
                  items: businesses,
                  nameEntry: name,
                  locationEntry: location
             })
             $("#list").html(html)
             })

        })

    }

function searchByLocation(location){
    if(!location){
            alert("Please enter location")
            return
        }


        $.get("https://agile-woodland-5195.herokuapp.com/v2/search?term=business&location=" + location,  function(data) {
                var businesses = (JSON.parse(data)).businesses
                $.get("/yelp-jquery/templates/listBusinesses.jade", function(template) {
                    var html = jade.render(template, {
                      items: businesses,
                      locationEntry: location
                    })
                    $("#list").html(html)
                })

        })
    }
