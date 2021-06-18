document.querySelector('#postData').addEventListener('click', postData);


function postData() {


    const data = {
        userId: 11110,
        title: "Lorem lorkds dsf ds ds dsf ds ds sd ds f f f",
        body: "enw sd d fdf ds sdf sdf sdf sdf sdf sdf dsf ds fsdf "
    }
    var json = JSON.stringify(data);
    console.log(json);

    var url = "https://jsonplaceholder.typicode.com/posts";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/json: charset=utf-8');
    xhr.onload = function () {
        {

            console.log(xhr.status);
            console.log(xhr.readyState);
            if (xhr.status === 201 && xhr.readyState === 4) {
                //post her zaman server taradından bize otomatik geri döndürülür.
                var post = xhr.responseText;
                console.log(post);
            }
        }
    }
    xhr.send(json);

}