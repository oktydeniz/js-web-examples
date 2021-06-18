document.querySelector('#getOne').addEventListener('click', getOne);

document.querySelector('#getAll').addEventListener('click', getAll);

function getAll() {
    var url = "https://jsonplaceholder.typicode.com/posts";

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            var html = "";



            posts.forEach(element => {
                html += `
                    <div class="card">
                        <div class="card-header">
                        ${element.title}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                ${element.body}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                `;
            });
            document.querySelector('#result').innerHTML = html;
        }
    }
    xhr.send();
}

function getOne() {
    var id = document.querySelector('#postId').value;
    var url = "https://jsonplaceholder.typicode.com/posts/" + id;

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            var posts = JSON.parse(this.responseText);
            var html = "";

            html += `
                    <div class="card">
                        <div class="card-header">
                        ${posts.id} --- ${posts.title}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>
                                ${posts.body}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                `;

            document.querySelector('#result').innerHTML = html;
        }
    }
    xhr.send();

}