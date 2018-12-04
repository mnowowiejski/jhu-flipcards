var cards = document.querySelectorAll("div.flashcard");

for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function() {
    this.className = (this.className === 'flashcard') ? 'flashcard flipped' : 'flashcard';
  });
}

// var cssId = 'flipcards';
//
// if (!document.getElementById(cssId)) {
//   var head  = document.getElementsByTagName('head')[0];
//   var link  = document.createElement('link');
//   link.id   = cssId;
//   link.rel  = 'stylesheet';
//   link.type = 'text/css';
//   link.href = 'https://content2.learntoday.info/media_team_tools/flipcard/public/css/cards.css';
//   link.media = 'all';
//   head.appendChild(link);
// }
