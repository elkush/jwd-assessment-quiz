window.addEventListener('DOMContentLoaded', () => {
    const start = document.querySelector('#start');
    const scoreElement = document.querySelector("#score");
    const submitBtn = document.getElementById('btnSubmit');
    const quizMessage = document.querySelector('#quizM');
    const quizMessage2 = document.querySelector('#time');

    start.addEventListener('click', function (e) {
      document.querySelector('#quizBlock').style.display = 'block';
      start.style.display = 'none';
    });
    // quizArray QUESTIONS & ANSWERS
    // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
    // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
    const quizArray = [
      {
        q: 'Which is the third planet from the sun?',
        o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
        a: 1, // array index 1 - so Earth is the correct answer here
      },
      {
        q: 'Which is the largest ocean on Earth?',
        o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
        a: 3,
      },
      {
        q: 'What is the capital of Australia',
        o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
        a: 1,
      },
    ];
     //console.log(quizArray[0].o[1]);

  quizArray.push({
    q: 'What do koalas eat?',
    o: ['Meat', 'Eucalypt leaves', 'Grass', 'Other animals'],
    a: 1, 
  },
  {
    q: 'What is the largest city in Australia?',
    o: ['Canberra', 'Darwin', 'Sydney', 'Melbourne'],
    a: 2,
  },)
  
    // function to Display the quiz questions and answers from the object
    const displayQuiz = () => {
      const quizWrap = document.querySelector('#quizWrap');
      let quizDisplay = '';
      quizArray.map((quizItem, index) => {
        quizDisplay += `<ul class="list-group">
                     Q - ${quizItem.q}
                      <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                      <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                      <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                      <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                      </ul>
                      <div>&nbsp;</div>`;
        quizWrap.innerHTML = quizDisplay;
      });
    };
  
    // Calculate the score
    const calculateScore = () => {
      let score = 0;
      quizArray.map((quizItem, index) => {
        for (let i = 0; i < 4; i++) {
          //highlight the li if it is the correct answer
          let li = `li_${index}_${i}`;
          let r = `radio_${index}_${i}`;
          liElement = document.querySelector('#' + li);
          radioElement = document.querySelector('#' + r);
  
          if (quizItem.a == i) {
            //change background color of li element here
            liElement.style.backgroundColor = 'green';
          }
  
          if (radioElement.checked) {
            // code for task 1 goes here
            if (i==quizItem.a) {
                score++
                console.log(`Score is : ${score}`);
              }
          }
        }
      });
      
      scoreElement.innerHTML=`Total score: ${score}`;
      if (score === 5) {
        const congrat = document.createElement('h4');
        scoreElement.appendChild(congrat);
        congrat.innerHTML = "Amazing work! Well Done!";
        congrat.style.color = "blue";
        congrat.style.paddingTop = "30px";
      }
        submitBtn.style.display = "none";
    };
  
    // call the displayQuiz function
    displayQuiz();
     //call the calculateScore when submit is clicked

 //reload page on reset
const reset = document.getElementById('btnReset');
reset.addEventListener("click", (e) => {
      window.location.reload();
});
// countdown timer
  function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const startCount = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
          clearInterval(startCount);
          const newEl = document.createElement('h4');
          quizMessage.appendChild(newEl);
          newEl.innerHTML = "Your time is over! See your score below.";
          newEl.style.color = "red";
          newEl.style.paddingTop = "30px";
          calculateScore();
          
        } 

        submitBtn.addEventListener("click", val);
        function val () {
            clearInterval(startCount);
            calculateScore();
            display.textContent = minutes + ":" + seconds + ".\n" + "\nYou have submitted your answers on time!";
            display.style.color = "green";
        }
      
    }, 1000);
};

window.onload = function () {
    var fiveMinutes = 60 * 1,
    display = document.querySelector('#time');  
    startTimer(fiveMinutes, display);
};

  });