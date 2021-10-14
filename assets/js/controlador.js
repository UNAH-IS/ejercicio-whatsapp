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

function toggleStickers() {
  if (document.getElementById('stickers').style.display == 'block') {
    document.getElementById('stickers').style.display = 'none';
  } else {
    document.getElementById('stickers').style.display = 'block';
  }
}

function selectOption(id, menuOption) {
  document.getElementById('chat-detail').style.display = 'none';
  document.getElementById('chats').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById(id).style.display = 'block';

  document.querySelectorAll('.menu-option').forEach(etiqueta => {
    etiqueta.classList.remove('active');
  });
  menuOption.classList.add('active');

}

function showChatDetail() {
  document.getElementById('chats').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById('chat-detail').style.display = 'flex';
}
