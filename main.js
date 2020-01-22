$(document).ready(function () {
    $(".btn").click(function () {
        let url = "https://api.chucknorris.io/jokes/random";
        $.get(url, value => {
            $(".dev").html("Chuck joke: " + value.value + "<br>" + " ID: " + value.id + "<br>" + " Icon: " + value.icon_url + "<br>" + " Date: " + value.updated_at);
        });
    });
});
