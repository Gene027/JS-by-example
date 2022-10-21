//these are objects without a name
class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [new Card("A", "Hearts"), 
             new Card("A", "Spades"), 
             new Card("A", "Diamonds"), 
             new Card("A", "Clubs"), 
             new Card("2", "Hearts"), 
             new Card("2", "Spades"), 
             new Card("2", "Diamonds"), 
             new Card("2", "Clubs")]; // they can be stored in an array this way

cards.forEach(card => console.log(`${card.value} ${card.suit}`));
