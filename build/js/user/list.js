function listUsers(){

    console.log('listing users')
    $.get("/yelp-jquery/data/users.json.data", function(data){
    	var users=JSON.parse(data)

    	$.get("/yelp-jquery/templates/listUsers.jade", function(template){
    		var html = jade.render(template, {items: users})

    		$("#list").html(html)

    		viewUser(users[0].user_id)
    	})
    })
}