function listRestaurants(){

  console.log('listing restaurants')

    $.get("/yelp-jquery/data/restaurants.json.data", function(data) {

        var restaurants = JSON.parse(data)

        $.get("/yelp-jquery/templates/listRestaurants.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: restaurants})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first restaurant to view
            viewRestaurant(restaurants[0].business_id)

        })

    })

}