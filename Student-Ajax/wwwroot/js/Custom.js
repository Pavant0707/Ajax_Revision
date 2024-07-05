$(document).ready(function () {
    ShowData();

});
function ShowData() {
    $.ajax({
        url: '/StudentController1/StudentList',
        type: 'Get',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8;',
        success: function (result, status, xhr) {
            var object = '';
            $.each(result, function (index, item) {
                object += '<tr>';
                object += '<td>' + item.id + '</td>';
                object += '<td>' + item.name + '</td>';
                object += '<td>' + item.school + '</td>';
                object += '<td>' + item.email + '</td>';
                object += '<td><a href="#" class="btn btn-primary" onclick="Edit(' + item.id + ')">Edit</a> || <a href="#" class="btn btn-danger" onclick="Delete(' + item.id + ')">Delete</a> </td>';
                object += '<tr>';


            });
            $('#table_data').html(object);

        },
        error: function () {
            alert("Data can't retrieved..");
        }

    });
};


$('#btnAdd').click(function () {
    $('#StudentModal').modal('show');
});

function AddStudent() {
    var objdata = {
        Name: $('#Name').val(),
        School: $('#School').val(),
        Email: $('#Email').val(),

    };
    $.ajax({
        url: '/StudentController1/AddStudent',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Saved');
            clearTextBox();
            ShowData();
            HideModalPopUp();
        },
        error: function () {
            alert("Data can't Saved");
        }
    });
    function HideModalPopUp() {
        $('#StudentModal').modal('hide');
    }
    function clearTextBox() {
        $('#Name').val(''),
            $('#School').val(''),
            $('#Email').val('')
    }
}
function Edit(id) {
    $.ajax({

        url: '/StudentController1/Edit?id=' + id,
        type: 'Get',
        contextType: 'application/json;charset=utf-8',
        datatype: 'json',
        success: function (response) {
            $('#StudentModal').modal('show');
            $('#Id').val(response.id)
            $('#Name').val(response.name),
                $('#School').val(response.school),
                $('#Email').val(response.email),
            $('#AddStudent').css('display', 'none');
            $('#btnUpdate').css('display', 'block');

        },
        error: function () {
            alert('Data not found');
        }
    })
}
function UpdateStudent() {
    var objdata = {
        Id: $('#Id').val(),
        Name: $('#Name').val(),
        School: $('#School').val(),
        Email: $('#Email').val()


    };
    $.ajax({
        url: '/StudentController1/Update',
        type: 'Post',
        data: objdata,
        contentType: 'application/x-www-form-urlencoded;charset=utf-8;',
        dataType: 'json',
        success: function () {
            alert('Data Saved');
            clearTextBox();
            ShowData();
            HideModalPopUp();
        },
        error: function () {
            alert("Data can't Saved");
        }

    })
}

function Delete(id) {
    $.ajax({
        url: '/StudentController1/Delete?id=' + id,
        success: function () {
            alert('Record Deleted!');
            ShowData();
        },
        error: function () {
            alert('Data cant be deleted');
        }
    })
}
function GetById(id) {
    $.ajax({
        url: '/StudentController1/GetById?id=' + id,
        success: function () {
            alert('Record Deleted!');
            ShowData();
        },
        error: function () {
            alert('Data cant be deleted');
        }
    })
}