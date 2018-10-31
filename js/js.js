const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const login = prompt("Введите Логин");


if (login === adminLogin ){

  const password = prompt("Введите пароль!");

  if (password === adminPassword){
    alert('Добро пожаловать!');

  } else if(password == null){
    alert("Отменено пользователем!");

  }else {
    alert("Доступ запрещен!");
  }

} else if (login == null){
  alert("Отменено пользователем!");
} else {
    alert("Доступ запрещен!");
}
