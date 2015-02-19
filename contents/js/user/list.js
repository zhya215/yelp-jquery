function listUsers(){

    console.log('listing doctors')

    $.get("/yelp-jquery/data/users.json.data", function(data) {

        var users = JSON.parse(data)

        $.get("/yelp-jquery/templates/listUsers.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: users})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first doctor to view
            viewUser(users[0].user_id)

        })

    })
}