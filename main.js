$(document).ready(function () {
    $(".btn").click(function () {
        let url = "https://api.chucknorris.io/jokes/random";
        $.get(url, (value, date) => {
            date = new Date().getDate();
            $(".dev").html(`
                <div>
                    Chuck joke: ${value.value}
                </div>
                <div>
                    ID: ${value.id}
                </div>
                <div>
                    Icon: <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png">
                </div>
                <div>
                    Date: ${value.created_at.getDate()}
                </div>
            `);
        });
    });
});
