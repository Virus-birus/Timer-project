const all_inpute1 = document.querySelector('.input1')

all_inpute1.oninput = function() {
    this.value = this.value.substr(0, 2)
}

const all_inpute2 = document.querySelector('.input2')

all_inpute2.oninput = function() {
    this.value = this.value.substr(0, 2)
}

const all_inpute3 = document.querySelector('.input3')

all_inpute3.oninput = function() {
    this.value = this.value.substr(0, 2)
}

const all_timer = document.querySelectorAll('.input_all')
