// console.log('JS sourced');

$(readyNow);

function readyNow() {
    // console.log('in readyNow');

    // Event deligators
    $('body').on('click', '#compBtn', completeBtn)
    $('body').on('click', '#delBtn', deleteBtn)
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
    compGreen();
    console.log('in completeBtn');
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

function compGreen() {
}

// POST function
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

// GET  function
function getTasks() {

    $.ajax({
        type: 'GET',
        url: '/tasks'
    }).then(function (response) {
        $('#taskTable').empty();

        for (let i = 0; i < response.length; i++) {
            let task = response[i];

            $('#taskTable').append(`
                <tr>
                    <td>
                        ${task.id}
                    </td>
                    <td>
                        ${task.item}
                    </td>
                    <td>
                        ${task.completed}
                    </td>
                    <td>
                        <button id="compBtn" data-id="${task.id}">Complete</button>
                    </td>
                    <td>
                        <button id="delBtn" data-id="${task.id}">Delete</button>
                    </td>
                </tr>
                `);
        }
        
        emptyInput();
    });
}

function emptyInput() {
    $('#taskIn').val('');
}