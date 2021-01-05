let paragraphs = [
    'Assertiveness is a skill regularly referred to in social and communication skills training. Being assertive means being able to stand up for your own or other peoples rights in a calm and positive way, without being either aggressive, or passively accepting wrong.',
    'Cloud computing is a model for enabling convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.',
    'PHP stands for Hypertext Pre-Processor. PHP is one of the most widely used server side scripting language for web development.',
    'C++ Programming: Program Design Including Data Structures started as a collection of brief examples, exercises, and lengthy programming examples to supplement the books that were in use at our university.',
    'Ideology is the combination of two Greek word, "Ideo" means "Ideas" and "Logos" means, "Science". Thus ideology means, "Science of Ideas" Ideology is a set of beliefs, ideas and values which directs one\'s goals.',
    'Sir Syed Ahmed Khan flourished from 1817 to 1898. As the founder of Aligarh movement, he is ranked among the greatest Muslim reformers of the 19th century.',
    'Stimulate your mind as you test your typing speed with this standard English paragraph typing test. Watch your typing speed and accuracy increase as you learn about a variety of new topics! Over 40 typing test selections available.',
    'The basic technique stands in contrast to hunt and peck typing in which the typist keeps his or her eyes on the source copy at all times. Touch typing also involves the use of the home row method, where typists keep their wrists up, rather than resting them on a desk or keyboard (which can cause carpal tunnel syndrome). To avoid this, typists should sit up tall, leaning slightly forward from the waist, place their feet flat on the floor in front of them with one foot slightly in front of the other, and keep their elbows close to their sides with forearms slanted slightly upward to the keyboard; fingers should be curved slightly and rest on the home row.',
    'Trying to make a wise, good choice when thinking about what kinds of careers might be best for you is a hard thing to do. Your future may very well depend on the ways you go about finding the best job openings for you in the world of work. Some people will feel that there is one and only one job in the world for them.',
    'Hard thinking and a lot of hard work will help them find the one job that is best for them. Jobs are there for those with skills and a good work ethic. Many new young artists in the upper New England states are famous around the world as leaders in new American art. These fine artists are very good in their chosen fields and are willing to share their many talents by teaching others.',
    'The students have had the chance to learn and use skills in oil painting, sketching with chalk, sculpting, and weaving. Learning to typewrite is a skill that will help all of us in our work today. The development of the computer will open doors for people with the keyboarding skills and will make typing a necessity. Managers, as well as secretaries, will need skill at the keyboard to input data and process words. Therefore, good keyboarding skills may be important to you.',
    'A teacher professional duties may extend beyond formal teaching. Outside of the classroom teachers may accompany students on field trips, supervise study halls, help with the organization of school functions, and serve as supervisors for extracurricular activities. In some education systems, teachers may have responsibility for student discipline.',
    'One morning my friend and I were thinking about how we could plan our summer break away from school. Driving from our own state to several nearby states would help to expand our limited funds. Inviting six other friends to accompany us would lower our car expenses.',
    `must have detailed knowledge of the system's memory organization. A program with a sophisticated overlay structure can be difficult to modify. Indeed, as programs grew in complexity, by some estimates as much as 40 percent of programming expense were for organizing overlays. It became clear that the operating system needed to insulate the programmer from complex memory management tasks such as overlays.`,
    `single-user systems waste a considerable amount of the computing resources. A typical process would consume the processor time it needed to generate an input/output request; the process could not continue until the I/O finished. Because I/O speeds were extremely slow compared with processor speeds (and still are), the processor was severely underutilized.`,
    `Clearly, multi-programming normally requires more memory than does a single-user system. However, the improved resource use for the processor and the peripheral devices justifies the expense of the additional memory.`
]

const typingareaDom = document.querySelector('.typingArea');
const desDom = document.querySelector('.des');
const startDom = document.querySelector('.start');
const errorDom = document.querySelector('.error');
const completeDom = document.querySelector('.completed');
const enteredDom = document.querySelector('.entered-text');
const timeTakenDom = document.querySelector('.timeTaken');
const typingSpeedDom = document.querySelector('.typingSpeed');
let givenText = paragraphs[Math.round(Math.random() * (paragraphs.length - 1))];
let givenTextArr = givenText.split('');
let enteredText = "";
let enteredTextArr = enteredText.split('');
let enteredTextlen = enteredText.length;
let error = '<br>';
let errorsCount;
let secondsDom = document.getElementById('seconds');
let minutesDom = document.getElementById('minutes');
let timeDom = document.querySelector('.time');
let totalSeconds = 0;
let totalTimeTaken = 0;
let intervalfun;
let forTimerstart = 0;
let speed = 0;

// Start Typing
const start = () => {
    console.log('start');
    typingareaDom.classList.remove('hide');
    timeDom.classList.remove('hide');
    startDom.classList.add('hide');
    desDom.classList.add('hide');
    enteredDom.focus();
    forTimerstart = 0;

}

document.querySelector('.given-text').innerHTML = givenText;
const check = () => {

    // This if statment is for starting timer
    ++forTimerstart;
    if (enteredText.length === 0 && forTimerstart <= 1) {
        timerStart();
        console.log('start timer');
    }
    errorsCount = 0
    enteredText = enteredDom.value;
    enteredTextArr = enteredText.split('');
    enteredTextlen = enteredText.length;

    for (let i = -1; i < enteredTextArr.length; i++) {
        if (enteredTextArr[i] !== givenTextArr[i]) {
            ++errorsCount;
            error = "Incorrect word!";
            errorDom.innerHTML = error;

        } else if (errorsCount > 0) {
            error = "Incorrect word!";
            errorDom.innerHTML = error;
        }
        else {
            errorDom.innerHTML = '<br>';
            if (enteredText == givenText) {
                completeDom.classList.remove('hide');
                typingareaDom.classList.add('hide');
                timeDom.classList.add('hide');
                console.log('completed');
                totalTimeTaken = totalSeconds;
                clearInterval(intervalfun);
                speed = Math.round((givenText.split(' ').length + 1) / (totalTimeTaken / 60));
                results();
                console.log(totalTimeTaken);
            }
        }

    }



}

const Type = () => {
    console.log('new');
    givenText = paragraphs[Math.round(Math.random() * (paragraphs.length - 1))];
    givenTextArr = givenText.split('');
    enteredText = "";
    enteredTextArr = enteredText.split('');
    enteredTextlen = enteredText.length;
    error = '<br>';
    document.querySelector('.given-text').innerHTML = givenText;
    enteredDom.value = '';
    enteredDom.focus();
    completeDom.classList.add('hide');
    typingareaDom.classList.remove('hide');
    timeDom.classList.remove('hide');
    clearInterval(intervalfun);
    forTimerstart = 0;
    setTimeToZero();

}
const restart = () => {
    console.log('restart');
    enteredText = "";
    enteredTextArr = enteredText.split('');
    enteredTextlen = enteredText.length;
    error = '<br>';
    enteredDom.value = '';
    enteredDom.focus();
    clearInterval(intervalfun);
    forTimerstart = 0;
    setTimeToZero();

}
function timerStart() {
    totalSeconds = 0;
    intervalfun = setInterval(setTime, 1000);
    function setTime() {
        ++totalSeconds;
        secondsDom.innerHTML = pad(totalSeconds % 60);
        minutesDom.innerHTML = pad(parseInt(totalSeconds / 60));
    };


}
function pad(val) {
    valString = val + '';
    if (valString.length < 2) {
        return '0' + val;
    } else {
        return valString;
    }
}
function setTimeToZero() {
    secondsDom.innerHTML = '00';
    minutesDom.innerHTML = '00';
}
function results() {
    timeTakenDom.innerHTML = `Time Taken: <b>${pad(parseInt(totalTimeTaken / 60))}</b> min and <b>${pad(totalTimeTaken % 60)}</b> seconds.`;
    typingSpeedDom.innerHTML = `Your Average typing speed is <b>${speed}</b> wpm.`;

}
// speed = (givenText.split(' ').length + 1) / (parseInt(totalTimeTaken / 60));