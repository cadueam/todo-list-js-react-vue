$('#btn').click(function (e) {
  const tarefa = $('#tarefa').val();
  if (tarefa == '') {
    alert('Digite uma tarefa válida!');
  } else {
    $('#lista').append(
      `<li>
        <i class="fas fa-check-circle check" id="btn"></i
        ><span>${tarefa}</span
        ><i class="fa-solid fa-trash-can close"></i>
        </li>`
    );
    $('#tarefa').val('');
  }

  $('.close').each(function () {
    $(this).click(() => {
      $(this).parent().remove();
    });
  });

  $('#lista li').click(function () {
    $(this).find('.check').css('color', '#349223');
    $(this).find('span').css('textDecoration', 'line-through');
  });
});
