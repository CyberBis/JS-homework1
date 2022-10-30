let balance = 100;
let code = "A001DFX0";
let postbox = [null, null, null, "4 - ваша посылка", null];
if (code === "A001DFX0") {
  balance -= 100;
  console.log(
    `Вы получили посылку ${postbox[3]} и ваш счет составляет: ${balance} р.`
  );
} else {
  console.log(`Sorry your code was not found`);
}
