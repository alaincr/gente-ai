

let request = {
        "zip": "21701",
        "variables": ["income", "population"],
        "level": "county",
        "sublevel": true,
        "state": "MD",
        "container": "state"
    };

    let data;

    CitySdk.request(request).then((response) => doSomethingWithData(response));

    function doSomethingWithData(data) {
        $(".data").html(response);
    }
