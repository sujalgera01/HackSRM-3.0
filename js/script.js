var test_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2Y2Y4YTE0ODI0OWUyMjMwNjg4MjciLCJuYW1lIjoiSGFyZGlrIFVwYWRoeWF5IiwiZW1haWwiOiJoYXJkaWtraXhAZ21haWwuY29tIiwiaWF0IjoxNjA1ODk3NDUxLCJleHAiOjE2MDU5ODM4NTF9.tdyw_hmrjI8atsEQc_bEUUJJQcsPPy-iF4URRnWn47U'

function submitProject() {
    r = document.getElementById("mobile")
    console.log(r.value)
    $.ajax({
        url: 'http://localhost:3000/user/contact',
        type: 'POST',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('auth-token', test_token);
        },
        data: {
            contact: r.value,
        },
        success: function(data,status) {
            alert("Working added")
        }
    });

    r.value = null
    // document.getElementById("left-side").style.display = "none"
    // addProjectButton.style.display = "inline";
}

async function reportincident() {
    var check = document.getElementById("textarena")
    
    var latitude ;
    var longitude ;
    await navigator.geolocation.getCurrentPosition(async function (success) {
        console.log(success.coords.latitude)
        latitude = success.coords.latitude
        console.log(success.coords.longitude)
        console.log(check.value)
        $.ajax({
            url: 'http://localhost:3000/reports/crime',
            type: 'POST',
            beforeSend: function (xhr) {
                xhr.setRequestHeader('auth-token', test_token);
            },
            data:{
                description : check.value,
                arealocation : [{"lat" : success.coords.latitude, "lng" : success.coords.longitude}]
            },
            success: function(data,status) {
                console.log("Working added")
                console.log(data)
            }
        });
    });
}


// GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1605908708947}
// coords: GeolocationCoordinates
// accuracy: 23395
// altitude: null
// altitudeAccuracy: null
// heading: null
// latitude: 28.6362211
// longitude: 77.2922332
// speed: null
// __proto__: GeolocationCoordinates
// timestamp: 1605908708947
