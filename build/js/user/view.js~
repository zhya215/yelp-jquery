function viewUser(user_id){

    console.log('viewing doctor id = ', user_id)

    $.get("/yelp-jquery/data/users.json.data", function(data) {

        var users = JSON.parse(data)
        var user = _.find(users, {user_id: user_id})

        $.get("/yelp-jquery/templates/viewUser.jade", function(template) {

            var html = jade.render(template, {item: user})
            
            $("#details").html(html)

        })

    })

}

