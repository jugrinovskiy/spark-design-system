var request = new XMLHttpRequest();
request.open("GET", "https://spark-assets.netlify.com/spark-core-icons.svg");
request.send();
request.onload = function() {
  document.querySelector('#sprk-icons').innerHTML = this.response;
};