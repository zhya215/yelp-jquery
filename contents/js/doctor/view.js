function viewDoctor(business_id){

    console.log('viewing doctor id = ', business_id)

    $.get("/yelp-jquery/data/doctors.json.data", function(data) {

        var doctors = JSON.parse(data)
        var doctor = _.find(doctors, {business_id: business_id})

        $.get("/yelp-jquery/templates/viewDoctor.jade", function(template) {

            var html = jade.render(template, {item: doctor})
            
            $("#details").html(html)

        })

    })

}