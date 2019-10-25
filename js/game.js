const questions = require('./questions')

let numberOfCorrectAnswears = 0;
let correctAnswearIndex;

function game(app) {
    app.get('/getQuestions', function (req, res) {
        const currentQ = questions[numberOfCorrectAnswears];
        const {
            question,
            asnwears
        } = currentQ;

        res.json({
            question,
            asnwears
        })
    })

    app.post('/answear/:index', function (req, res) {
        correctAnswearIndex = req.params.index;
        const currentQ = questions[numberOfCorrectAnswears];
        const {
            correctAnswear
        } = currentQ;

        if (Number(correctAnswearIndex) === Number(correctAnswear)) {
            console.log('ok')
            numberOfCorrectAnswears++;

        } else {
            console.log('zle')
        }
    })

    app.get('/getNumberOfCorrectAnswears', function (req, res) {
        console.log(numberOfCorrectAnswears);

        res.json(
            numberOfCorrectAnswears
        )
    })

}


module.exports = game;