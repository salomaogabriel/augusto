let articles = document.getElementsByTagName("article");
function changePage(id) {
  for (let i = 0; i < articles.length; i++) {
    articles[i].classList.add("hide");
  }
  document.getElementById(id).classList.remove("hide");
}
