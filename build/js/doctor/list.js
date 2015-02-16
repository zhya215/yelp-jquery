function listDoctors(){

    console.log('listing doctors')

    $.get("/yelp-jquery/data/doctors.json.data", function(data) {

        var doctors = JSON.parse(data)

        $.get("/yelp-jquery/templates/listDoctors.jade", function(template) {

            // render the template
            var html = jade.render(template, {items: doctors})            

            // assign the rendered html to the dom element whose id is #list
            $("#list").html(html)

            // load the first doctor to view
            viewDoctor(doctors[0].business_id)

        })

    })

}