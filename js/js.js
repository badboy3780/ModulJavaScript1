const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const INVALID_INPUT = "Доступ запрещен!";
const VALID_INPUT = 'Добро пожаловать!';
const NULL_INPUT = 'Отменено пользователем!';

const login = prompt("Введите Логин");


if (login === adminLogin ){

  const password = prompt("Введите пароль!");

  if (password === adminPassword){
    alert(VALID_INPUT);

  } else if(password === null){
    alert(NULL_INPUT);

  }else {
    alert(INVALID_INPUT);
  }

} else if (login === null){
  alert(NULL_INPUT);
} else {
    alert(INVALID_INPUT);
}
