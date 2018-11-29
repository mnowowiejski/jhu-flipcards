var cards = document.querySelectorAll("div.flashcard");

for (var i = 0; i < cards.length; i++) {
	cards[i].addEventListener("click", function() {
    this.className = (this.className === 'flashcard') ? 'flashcard flipped' : 'flashcard';
  });
}
