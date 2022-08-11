// console.log('JS sourced');

$(readyNow);

function readyNow () {
    // console.log('in readyNow');

    // Event deligators
    $('body').on('click', '#compBtn', completeBtn)
    $('body').on('click', '#delBtn', deleteBtn)
    // Click handlers
    $('#task-submit').on('click', addTask);

}

function deleteBtn () {
    console.log('in deleteBtn');
    $(this).parent().parent().empty();
}

function completeBtn () {
    console.log('in completeBtn');
    $(this).parent().parent().css('background-color', 'green');

}

// POST function
function addTask () {
    // console.log('in addTask');

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
                    <td>
                        ${task.task}
                    </td>
                    <td>
                        <button id="compBtn">Complete</button>
                    </td>
                    <td>
                        <button id="delBtn">Delete</button>
                    </td>
                </tr>
            `);
        }
    })
}