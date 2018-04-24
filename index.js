let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let current;
let dequeue = [];

$(document).ready(() => {
    console.log('hello')
    populate();
});

const populate = () => {
    console.log('populating!')
    $("#previous").empty();
    for (let i = 0; i < queue.length; i++) {
        $("#previous").append(
            `<li>${queue[i]}</li>`
        );
    };
    $("#current").empty();
    if (current) {
        $("#current").append(`<li>${current}</li>`);
    };
    $("#next").empty();
    for (let j = 0; j < dequeue.length; j++) {
        $("#next").append(
            `<li>${dequeue[j]}</li>`
        );
    };    
}

const next = () => {
    if (!current && queue.length === 0) {
        alert('The current list of jobs is empty.')
    }
    let newValue = queue.shift();
    if (current && current.length !== 0) {
        dequeue.push(current);
    };
    current = newValue;
    console.log(current);
    console.log(dequeue);
    return populate();
};

const prev = () => {
    if (!current && dequeue.length === 0) {
        alert('The list of completed jobs is empty.')
    }
    let newValue = dequeue.splice(dequeue.length - 1, 1);
    if (current && current.length !== 0) {
        queue.splice(0, 0, current);
    };
    if (newValue.length !== 0) {
        current = newValue;
    } else {
        current = undefined;
    }

    return populate();
}