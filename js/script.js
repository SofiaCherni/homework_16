alert('Будь ласка дайте відповіді на запитання:');
let first = +prompt('Скільки буде 2+2?', '4');
let second = confirm('Сонце встає на сході?');
let third = +prompt('Скільки буде 5 / 0?', '0');
let fourth = prompt('Якого кольору небо?', 'блакитного');
let fifth = prompt('Яка правильна відповідь на головне питання життя, всесвіту та всього такого', '42');
let result = 0;

if(first == 4) {
    result +=10;
} 
if(second == true) {
    result +=10;
}
if(third == '0') {
    result +=10;
}
if(fourth == 'блакитного') {
    result +=10;
}
if(fifth == '42') {
    result +=10;
}

alert('Ваш результат: ' + result);


// через масив
/*
let questions = [first, second, third, fourth, fifth];
let answers = [4, true, 0, 'блакитного', 42];

for ( let i=0; i < questions.length; i++) {
    if (answers[i]==questions[i]){
        result += 10;
    }
}
*/