const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

const correctAnswers = {
    question1: 'A',
    question2: 'D',
    question3: 'B',
    question4: 'D',
};


function checkClickedAnswer(event) {

    const clickedAnswerElement = event.currentTarget;
    
    const selectedAnswer = clickedAnswerElement.dataset.answer;
    
    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    const correctAnswer = correctAnswers[questionId];
    
    let message;

    let answerColorCode;

    if (selectedAnswer === correctAnswer) {
        message = '正解です!おめでとう！';
        answerColorCode = '';

    } else {
        message = '残念！不正解です!';
        answerColorCode = '#f05959';

    }

    alert(message);
    
    document.querySelector('span#correct-answer').style.color = answerColorCode;

    document.querySelector('div#section-correct-answer').style.display = 'block';
}
