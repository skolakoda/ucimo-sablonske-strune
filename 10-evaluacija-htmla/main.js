const korisnik = {
  id: 1,
  ime: "Ana Đorđević",
  zanimanje: "C developer."
}

// evaluira html
window.onload = () =>
  document.body.innerHTML = eval('`' + document.body.innerHTML + '`')
