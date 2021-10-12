var showingUsers = false;

function toggleUsers() {
  if (showingUsers) {
    document.getElementById('users-list').style.display = 'none';
    showingUsers = false;
  } else {
    document.getElementById('users-list').style.display = 'flex';
    showingUsers = true;
  }
}

function selectOption(id, menuOption) {

  document.getElementById('chats').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.menu-option').forEach(etiqueta => {
    etiqueta.classList.remove('active');
  });
  menuOption.classList.add('active');

}