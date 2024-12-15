/* Kullanıcıdan favori filmlerini al ve bir array'de tut.
Filmleri alfabetik sıraya dizip ekrana yazdır. */

const favouriteFilms = [];

const howMany = Number(prompt("Kac tane favori filmin bulunmakta?"));
alert("Favori filmlerin neler?");
for (let i = 0; i < howMany; i++) {
  const movies = prompt();
  favouriteFilms.push(movies);
}
favouriteFilms.sort();
console.log(favouriteFilms);
