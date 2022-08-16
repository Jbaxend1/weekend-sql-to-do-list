// console.log('JS sourced');

$(readyNow);

// Ready
function readyNow() {
    // console.log('in readyNow');
    // Event deligators
    $('body').on('click', '#compBtn', completeBtn);
    $('body').on('click', '#delBtn', deleteBtn);

    // Click handlers
    $('#task-submit').on('click', addTask);
    $('#delBtn').on('click', deleteBtn);
    $('#compBtn').on('click', completeBtn);

    // On page load
    getTasks();
}

// DELETE
function deleteBtn() {

    const taskId = $(this).data('id');
    console.log('in deleteBtn', taskId);

    $.ajax({
        type: 'DELETE',
        url: `/tasks/${taskId}`
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something went wrong DELETE client');
    });
}

// PUT
function completeBtn() {
    // console.log('in completeBtn');
    const taskId = $(this).data('id');

    $.ajax({
        type: 'PUT',
        url: `/tasks/${taskId}`,
        data: { task: 'New task', completed: 'TRUE' }
    }).then(function (response) {
        getTasks();
    }).catch(function (error) {
        console.log(error);
        alert('Something wrong in client PUT');
    });
}

// POST
function addTask() {
    // console.log('in addTask');
    $.ajax({
        type: 'POST',
        url: '/tasks',
        data: {
            task: $('#taskIn').val(),
            completed: 'FALSE'
        }
    }).then(function (response) {
        console.log(response);
        getTasks();
    }).catch(function (error) {
        console.log('error in client POST', error);
        alert('error client POST');
    })
}

// GET
function getTasks() {

    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {

        $('#taskTable').empty();

        for (let i = 0; i < response.length; i++) {
            let task = response[i];

            // console.log(task.completed);
            let comp = 'Unfinished';
            let taskClass = 'uncomplete';

            if (task.completed === true) {
                taskClass = 'complete';
                comp = 'Done!'
            };

            $('#taskTable').append(`
                <tr class="${taskClass}">
                    <td>
                        ${task.item}
                    </td>
                    <td>
                        ${comp}
                    </td>
                    <td>
                        <button id="compBtn"  class="${taskClass}" data-id="${task.id}">Complete</button>
                    </td>
                    <td>
                        <button id="delBtn" data-id="${task.id}">Delete</button>
                    </td>
                </tr>
                `);
        }

        $('#taskIn').val('');
    });
}