var cards = document.querySelectorAll("div.wiley-flip-card");

for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function() {
    this.className = (this.className === 'wiley-flip-card') ? 'wiley-flip-card flipped' : 'wiley-flip-card';
  });
}

var cssId = 'flipcards';

if (!document.getElementById(cssId)) {
  var head  = document.getElementsByTagName('head')[0];
  var link  = document.createElement('link');
  link.id   = cssId;
  link.rel  = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://content2.learntoday.info/media_team_tools/flipcard/public/css/cards.css';
  link.media = 'all';
  head.appendChild(link);
}
