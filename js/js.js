const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let login = prompt("Введите Логин");


if (login == null){
  alert("Отменено пользователем!");
} else if (login != adminLogin){
  alert("Доступ запрещен!");
} else {

  let password = prompt("Введите пароль!");

  if (password == null){
    alert("Отменено пользователем!");
  } else if(password != adminPassword){
    alert("Доступ запрещен!");
  }else {
    alert('Добро пожаловать!');
  }

}
