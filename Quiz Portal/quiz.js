const form = document.getElementById('quizForm');
const resultBox = document.getElementById('result');

form.addEventListener('submit', function(e){
    e.preventDefault(); // stop the page from reloading/navigating

    const questions = document.querySelectorAll('.question');
    let score = 0;
    let unanswered = 0;

    questions.forEach((q, index) => {
        const qName = 'q' + (index + 1);
        const correctAnswer = q.getAttribute('data-answer');
        const selected = form.querySelector('input[name="' + qName + '"]:checked');

        // reset previous highlight styles
        q.classList.remove('correct', 'wrong');

        if(!selected){
            unanswered++;
            return;
        }

        if(selected.value === correctAnswer){
            score++;
            q.classList.add('correct');
        } else {
            q.classList.add('wrong');
        }
    });

    const total = questions.length;
    let message = 'You scored ' + score + ' out of ' + total + '.';

    if(unanswered > 0){
        message += ' (' + unanswered + ' question(s) left unanswered.)';
    }

    resultBox.textContent = message;
    resultBox.className = 'show ' + (score >= total / 2 ? 'pass' : 'fail');

    // scroll to result so user sees it
    resultBox.scrollIntoView({ behavior: 'smooth' });
});