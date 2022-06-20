function displayFizzBuzz() {
    var num = document.getElementById("number").value;
    for (let i = 0; i <= num; i++) {
        if (i == 0) {
            document.getElementById("result").innerHTML = 'Invalid input';
        } else if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById("result").innerHTML = 'FizzBuzz';
        } else if (i % 5 === 0) {
            document.getElementById("result").innerHTML = 'Fizz';
        } else if (i % 3 === 0) {
            document.getElementById("result").innerHTML = 'Buzz';
        } else {
            document.getElementById("result").innerHTML = i;
        }
    }
}
