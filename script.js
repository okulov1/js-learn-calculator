let result_button = document.getElementById('result-button'),
    first_num = document.getElementById('first_number'),
    last_num = document.getElementById('last_number'),
    action = document.getElementById('action');

result_button.addEventListener('click', get_result);

function get_result(){
    let fn = parseFloat(first_num.value),
        ln = parseFloat(last_num.value),
        a = action.value;
    
    let result;

    if (a == 'plus') {
        result = fn + ln;
    } else if (a == 'minus') {
        result = fn - ln;
    } else if (a == 'multiply') {
        result = fn * ln;
    } else if (a == 'divide') {
        result = fn / ln;
    }
    
    if (result == Infinity || result == NaN) {
        result = 'Error';
    }

    document.getElementById('show_result').innerHTML = result;
}