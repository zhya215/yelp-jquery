function viewRestaurant(business_id){

   console.log('viewing restaurant id = ', business_id)

    $.get("/yelp-jquery/data/restaurants.json.data", function(data) {

        var restaurants = JSON.parse(data)
        var restaurant = _.find(restaurants, {business_id: business_id})

        $.get("/yelp-jquery/templates/viewRestaurant.jade", function(template) {

            var html = jade.render(template, {item: restaurant})
            
            $("#details").html(html)

        })

    })
}