var showingUsers = false;


// console.log('Usuarios', usuariosData);
// console.log('Stickers', stickersData);
// console.log('Conversaciones', conversacionesData);

if (!localStorage.getItem('usuarios')) {
  localStorage.setItem('usuarios',JSON.stringify(usuariosData));
}

if (!localStorage.getItem('stickers')) {
  localStorage.setItem('stickers', JSON.stringify(stickersData));
}

for (let chatKey in conversacionesData) {
  if (!localStorage.getItem(chatKey)) {
    localStorage.setItem(chatKey, JSON.stringify(conversacionesData[chatKey]));
  }
}

var usuarios = JSON.parse(localStorage.getItem('usuarios'));
var stickers = JSON.parse(localStorage.getItem('stickers'));
var idUsuarioSeleccionado = null;

console.log(usuarios);

function renderUsers() {
  for (let i=0; i<usuarios.length; i++) {
    document.getElementById('users-list').innerHTML += 
    `<div class="col-2" onclick="renderChatList(${usuarios[i].id})">
        <img
          src="assets/profile-pics/${usuarios[i].imagen}"
          class="rounded-circle"
        />
      </div>`;
  }
}

renderUsers();

function renderChatList(id) {
  idUsuarioSeleccionado = id;
  let usuarioSeleccionado = usuarios.filter(item => item.id == id)[0];
  console.log('Renderizar chats del usuario', usuarioSeleccionado);

  let conversaciones = usuarioSeleccionado.conversaciones;
  console.log('conversaciones',conversaciones);
  document.getElementById('chats').innerHTML = ''; 
  for (let i=0; i < conversaciones.length ; i++ ) {
    document.getElementById('chats').innerHTML += 
      `<div class="chat-card my-2 mx-1 py-2 px-3" onclick="showChatDetail('${conversaciones[i].id}')">
        <div class="p-2">
          <img
            src="assets/profile-pics/${conversaciones[i].imagenDestinatario}"
            class="rounded-circle img-chat"
          />
        </div>
        <div class="texts p-2">
          <!-- Textos -->
          <div class="d-flex justify-content-between">
            <div><b>${conversaciones[i].nombreDestinatario}</b></div>
            <div>${conversaciones[i].horaUltimoMensaje}</div>
          </div>
          <div class="small">${conversaciones[i].ultimoMensaje}</div>
        </div>
      </div>`;
  }
}

function sendMessage() {

}

function sendSticker() {

}

function renderContacts() {

}

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

function showChatDetail(chatId) {
  document.getElementById('chats').style.display = 'none';
  document.getElementById('contacts').style.display = 'none';
  document.getElementById('chat-detail').style.display = 'flex';

  let currentChatDetail = JSON.parse(localStorage.getItem(chatId));
  console.log(currentChatDetail);
  document.getElementById('chat-messages').innerHTML = '';
  for (let i=0; i< currentChatDetail.length; i++) {
    
    let tipoMensaje = idUsuarioSeleccionado === currentChatDetail[i].emisor ? 'sent' : 'received';
    let mensaje = '';
    if (currentChatDetail[i].tipo === 'text') {
      mensaje = currentChatDetail[i].mensaje;
    }

    if (currentChatDetail[i].tipo === 'sticker') {
      let sticker = stickers.filter(item => item.id = currentChatDetail[i].sticker)[0];
      mensaje = `<img src="assets/stickers/${sticker.sticker}" style="width:150px">`;
    }

    document.getElementById('chat-messages').innerHTML += 
      `<div class="message ${tipoMensaje}">
        ${ mensaje }
        <div class="small text-end">9:00pm</div>
      </div>`
  }
}
