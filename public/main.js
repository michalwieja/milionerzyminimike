const buttons = document.querySelectorAll('.answear')
const question = document.querySelector('.question')
const numberOfCorrectAnswears = document.querySelector('#numberOfCorrectAnswears')

fetch('/getNumberOfCorrectAnswears', )
    .then(r => r.json())
    .then(data => fillNumberOfCorrectAnswears(data));

function fillNumberOfCorrectAnswears(data) {
    console.log(data);

    numberOfCorrectAnswears.innerText = data;
}

fetch('/getQuestions', )
    .then(r => r.json())
    .then(data => fillContent(data));

function fillContent(data) {
    question.innerText = data.question;

    buttons.forEach((button, index) => {
        button.innerText = data.asnwears[index];
    })

}

function sendAnswear() {
    buttons.forEach((button, index) => {
        button.addEventListener('click', function () {

            fetch(`/answear/${index}`, {
                    method: 'POST'
                })
                .then(r => r.json())
                .then(data => console.log(data));

            fetch('/getNumberOfCorrectAnswears', )
                .then(r => r.json())
                .then(data => fillNumberOfCorrectAnswears(data));



            fetch('/getQuestions', )
                .then(r => r.json())
                .then(data => fillContent(data));



        })
    })
}
sendAnswear()