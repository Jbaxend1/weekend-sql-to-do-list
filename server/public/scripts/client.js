// console.log('JS sourced');

$(readyNow);

function readyNow () {
    // console.log('in readyNow');

    // Event deligators

    // Click handlers
    $('#task-submit').on('click', addTask);

}

// POST function
function addTask () {
    console.log('in addTask');

    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            task: $('#taskIn').val()
        }
    }).then(function (response) {
        console.log(response.task);
        getTasks();
    }).catch(function (error) {
        console.log('error in client POST');
        alert('error client POST');
    })
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