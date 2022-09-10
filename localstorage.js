function DataStoring(name, email, message) {
  const formField = { StoredName: name, StoredEmail: email, StoredMsg: message };
  localStorage.setItem('ContactDataStorage', JSON.stringify(formField));
  return true;
}
const StoredContact = JSON.parse(localStorage.getItem('ContactDataStorage'));
document.getElementById('full-name').value = StoredContact.StoredName;
document.getElementById('mail').value = StoredContact.StoredEmail;
document.getElementById('message').value = StoredContact.StoredMsg;
const x = '';
if (x !== '') { DataStoring(x, x, x); }
