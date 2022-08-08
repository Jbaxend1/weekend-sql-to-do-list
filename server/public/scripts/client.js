// console.log('JS sourced');

$(readyNow);

function readyNow () {
    // console.log('in readyNow');

    // Event deligators

    // Click handlers
    $('#submit-task').on('click', addTask);

    getTasks();
}

// POST function
function addTask () {

}

// GET  function
function getTasks () {

    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        $('#taskTable').empty()

        for (let i = 0; i < response.length; i ++) {
        let task = response[i];
        $('#taskTable').append(`
            <tr>
                <td>${task.task}</td>
            </tr>
        `)
        }
    })
}