const userName = document.getElementById('name');
const userEmail = document.getElementById('mail');
const userMsg = document.getElementById('message');
// storing users'Data in the local storage
const populateLocalStorage = () => {
  const formData = {
    userName: userName.value,
    userEmail: userEmail.value,
    userMsg: userMsg.value,
  };
  window.localStorage.setItem('userData', JSON.stringify(formData));
};
// Retrieving the stored data in local storage

