$(document).ready(function() {
  console.log("Coded by Bartłomiej Tuchowski"); //Signature.

  //Colors dictionary - to get random button & body color.
  var colors = ["Black","BlueViolet","CadetBlue","Coral","CornflowerBlue","DarkCyan","DarkSalmon","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkViolet","DimGray","DimGrey","DodgerBlue","ForestGreen","Gray","Grey","IndianRed","Indigo","LightCoral","LightGreen","LightSeaGreen","LightSlateGray","LightSlateGrey","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","Peru","RoyalBlue","Salmon","SeaGreen","SlateBlue","SlateGray","SlateGrey","SteelBlue","Teal","Tomato", "#009688", "#536DFE", "#673AB7", "#4CAF50", "#455A64", "#795548" ];

  //Quotes dictionary - to get random quote.
  var quotes = [{
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
  }, {
    "quoteText": "You can observe a lot just by watching.",
    "quoteAuthor": "Yogi Berra"
  }, {
    "quoteText": "A house divided against itself cannot stand.",
    "quoteAuthor": "Abraham Lincoln"
  }, {
    "quoteText": "Difficulties increase the nearer we get to the goal.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
    "quoteText": "Fate is in your hands and no one elses",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "Be the chief but never the lord.",
    "quoteAuthor": "Lao Tzu"
  }, {
    "quoteText": "Nothing happens unless first we dream.",
    "quoteAuthor": "Carl Sandburg"
  }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
  }, {
    "quoteText": "Life is a learning experience, only if you learn.",
    "quoteAuthor": "Yogi Berra"
  }, {
    "quoteText": "Self-complacency is fatal to progress.",
    "quoteAuthor": "Margaret Sangster"
  }, {
    "quoteText": "Peace comes from within. Do not seek it without.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
  }, {
    "quoteText": "Life is change. Growth is optional. Choose wisely.",
    "quoteAuthor": "Karen Clark"
  }, {
    "quoteText": "You'll see it when you believe it.",
    "quoteAuthor": "Wayne Dyer"
  }, {
    "quoteText": "Today is the tomorrow we worried about yesterday.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Every man dies. Not every man really lives.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "To lead people walk behind them.",
    "quoteAuthor": "Lao Tzu"
  }, {
    "quoteText": "Having nothing, nothing can he lose.",
    "quoteAuthor": "William Shakespeare"
  }, {
    "quoteText": "Trouble is only opportunity in work clothes.",
    "quoteAuthor": "Henry J. Kaiser"
  }, {
    "quoteText": "A rolling stone gathers no moss.",
    "quoteAuthor": "Publilius Syrus"
  }, {
    "quoteText": "Ideas are the beginning points of all fortunes.",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "Everything in life is luck.",
    "quoteAuthor": "Donald Trump"
  }, {
    "quoteText": "Doing nothing is better than being busy doing nothing.",
    "quoteAuthor": "Lao Tzu"
  }, {
    "quoteText": "Trust yourself. You know more than you think you do.",
    "quoteAuthor": "Benjamin Spock"
  }, {
    "quoteText": "Study the past, if you would divine the future.",
    "quoteAuthor": "Confucius"
  }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
  }, {
    "quoteText": "Well done is better than well said.",
    "quoteAuthor": "Benjamin Franklin"
  }, {
    "quoteText": "Bite off more than you can chew, then chew it.",
    "quoteAuthor": "Ella Williams"
  }, {
    "quoteText": "Work out your own salvation. Do not depend on others.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "One today is worth two tomorrows.",
    "quoteAuthor": "Benjamin Franklin"
  }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
  }, {
    "quoteText": "God always takes the simplest way.",
    "quoteAuthor": "Albert Einstein"
  }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
  }, {
    "quoteText": "From small beginnings come great things.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Learning is a treasure that will follow its owner everywhere",
    "quoteAuthor": "Chinese proverb"
  }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
  }, {
    "quoteText": "The world is always in movement.",
    "quoteAuthor": "V. Naipaul"
  }, {
    "quoteText": "Never mistake activity for achievement.",
    "quoteAuthor": "John Wooden"
  }, {
    "quoteText": "What worries you masters you.",
    "quoteAuthor": "Haddon Robinson"
  }, {
    "quoteText": "One faces the future with ones past.",
    "quoteAuthor": "Pearl Buck"
  }, {
    "quoteText": "Goals are the fuel in the furnace of achievement.",
    "quoteAuthor": "Brian Tracy"
  }, {
    "quoteText": "Who sows virtue reaps honour.",
    "quoteAuthor": "Leonardo da Vinci"
  }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
  }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
  }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "Be as you wish to seem.",
    "quoteAuthor": "Socrates"
  }, {
    "quoteText": "A goal without a plan is just a wish.",
    "quoteAuthor": "Larry Elder"
  }, {
    "quoteText": "To succeed, we must first believe that we can.",
    "quoteAuthor": "Michael Korda"
  }, {
    "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
    "quoteAuthor": "Albert Einstein"
  }, {
    "quoteText": "A weed is no more than a flower in disguise.",
    "quoteAuthor": "James Lowell"
  }, {
    "quoteText": "Do, or do not. There is no try.",
    "quoteAuthor": "Yoda"
  }, {
    "quoteText": "All serious daring starts from within.",
    "quoteAuthor": "Harriet Beecher Stowe"
  }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
  }, {
    "quoteText": "Love is the flower you've got to let grow.",
    "quoteAuthor": "John Lennon"
  }, {
    "quoteText": "Don't wait. The time will never be just right.",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
  }, {
    "quoteText": "Time is the wisest counsellor of all.",
    "quoteAuthor": "Pericles"
  }, {
    "quoteText": "You give before you get.",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "Wisdom begins in wonder.",
    "quoteAuthor": "Socrates"
  }, {
    "quoteText": "Without courage, wisdom bears no fruit.",
    "quoteAuthor": "Baltasar Gracian"
  }, {
    "quoteText": "Change in all things is sweet.",
    "quoteAuthor": "Aristotle"
  }, {
    "quoteText": "What you fear is that which requires action to overcome.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "The best teacher is experience learned from failures.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "When performance exceeds ambition, the overlap is called success.",
    "quoteAuthor": "Cullen Hightower"
  }, {
    "quoteText": "When deeds speak, words are nothing.",
    "quoteAuthor": "African proverb"
  }, {
    "quoteText": "Real magic in relationships means an absence of judgement of others.",
    "quoteAuthor": "Wayne Dyer"
  }, {
    "quoteText": "When performance exceeds ambition, the overlap is called success.",
    "quoteAuthor": "Cullen Hightower"
  }, {
    "quoteText": "I never think of the future. It comes soon enough.",
    "quoteAuthor": "Albert Einstein"
  }, {
    "quoteText": "Skill to do comes of doing.",
    "quoteAuthor": "Ralph Emerson"
  }, {
    "quoteText": "Wisdom is the supreme part of happiness.",
    "quoteAuthor": "Sophocles"
  }, {
    "quoteText": "I believe that every person is born with talent.",
    "quoteAuthor": "Maya Angelou"
  }, {
    "quoteText": "Important principles may, and must, be inflexible.",
    "quoteAuthor": "Abraham Lincoln"
  }, {
    "quoteText": "The undertaking of a new action brings new strength.",
    "quoteAuthor": "Richard Evans"
  }, {
    "quoteText": "I believe that every person is born with talent.",
    "quoteAuthor": "Maya Angelou"
  }, {
    "quoteText": "The years teach much which the days never know.",
    "quoteAuthor": "Ralph Emerson"
  }, {
    "quoteText": "Our distrust is very expensive.",
    "quoteAuthor": "Ralph Emerson"
  }, {
    "quoteText": "All know the way; few actually walk it.",
    "quoteAuthor": "Bodhidharma"
  }, {
    "quoteText": "Great talent finds happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
    "quoteText": "Faith in oneself is the best and safest course.",
    "quoteAuthor": "Michelangelo"
  }, {
    "quoteText": "Courage is going from failure to failure without losing enthusiasm.",
    "quoteAuthor": "Winston Churchill"
  }, {
    "quoteText": "The two most powerful warriors are patience and time.",
    "quoteAuthor": "Leo Tolstoy"
  }, {
    "quoteText": "Anticipate the difficult by managing the easy.",
    "quoteAuthor": "Lao Tzu"
  }, {
    "quoteText": "Those who are free of resentful thoughts surely find peace.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
  }, {
    "quoteText": "A short saying often contains much wisdom.",
    "quoteAuthor": "Sophocles"
  }, {
    "quoteText": "The day is already blessed, find peace within it.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "It takes both sunshine and rain to make a rainbow.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "A beautiful thing is never perfect.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Only do what your heart tells you.",
    "quoteAuthor": "Princess Diana"
  }, {
    "quoteText": "Life is movement-we breathe, we eat, we walk, we move!",
    "quoteAuthor": "John Pierrakos"
  }, {
    "quoteText": "No one can make you feel inferior without your consent.",
    "quoteAuthor": "Eleanor Roosevelt"
  }, {
    "quoteText": "One fails forward toward success.",
    "quoteAuthor": "Charles Kettering"
  }, {
    "quoteText": "Argue for your limitations, and sure enough theyre yours.",
    "quoteAuthor": "Richard Bach"
  }, {
    "quoteText": "Luck is what happens when preparation meets opportunity.",
    "quoteAuthor": "Seneca"
  }, {
    "quoteText": "Victory belongs to the most persevering.",
    "quoteAuthor": "Napoleon Bonaparte"
  }, {
    "quoteText": "Once you choose hope, anythings possible.",
    "quoteAuthor": "Christopher Reeve"
  }, {
    "quoteText": "Love all, trust a few, do wrong to none.",
    "quoteAuthor": "William Shakespeare"
  }, {
    "quoteText": "In order to win, you must expect to win.",
    "quoteAuthor": "Richard Bach"
  }, {
    "quoteText": "A goal is a dream with a deadline.",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "You can do it if you believe you can!",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "Set your goals high, and don't stop till you get there.",
    "quoteAuthor": "Bo Jackson"
  }, {
    "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
    "quoteAuthor": "Thomas Edison"
  }, {
    "quoteText": "Every new day is another chance to change your life.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Smile, breathe, and go slowly.",
    "quoteAuthor": "Thich Nhat Hanh"
  }, {
    "quoteText": "Nobody will believe in you unless you believe in yourself.",
    "quoteAuthor": "Liberace"
  }, {
    "quoteText": "Be kind whenever possible. It is always possible.",
    "quoteAuthor": "Dalai Lama"
  }, {
    "quoteText": "Do more than dream: work.",
    "quoteAuthor": "William Arthur Ward"
  }, {
    "quoteText": "No man was ever wise by chance.",
    "quoteAuthor": "Seneca"
  }, {
    "quoteText": "Some pursue happiness, others create it.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "It's easier to see the mistakes on someone else's paper.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Think how hard physics would be if particles could think.",
    "quoteAuthor": "Murray Gell-Mann"
  }, {
    "quoteText": "Well begun is half done.",
    "quoteAuthor": "Aristotle"
  }, {
    "quoteText": "He that is giddy thinks the world turns round.",
    "quoteAuthor": "William Shakespeare"
  }, {
    "quoteText": "Don't ruin the present with the ruined past.",
    "quoteAuthor": "Ellen Gilchrist"
  }, {
    "quoteText": "Do something wonderful, people may imitate it.",
    "quoteAuthor": "Albert Schweitzer"
  }, {
    "quoteText": "We do what we do because we believe.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Great talent finds happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
    "quoteText": "Do one thing every day that scares you.",
    "quoteAuthor": "Eleanor Roosevelt"
  }, {
    "quoteText": "If you cannot be silent be brilliant and thoughtful.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "Smile, breathe, and go slowly.",
    "quoteAuthor": "Thich Nhat Hanh"
  }, {
    "quoteText": "Who looks outside, dreams; who looks inside, awakes.",
    "quoteAuthor": "Carl Jung"
  }, {
    "quoteText": "What we think, we become.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "The shortest answer is doing.",
    "quoteAuthor": "Lord Herbert"
  }, {
    "quoteText": "All our knowledge has its origins in our perceptions.",
    "quoteAuthor": "Leonardo da Vinci"
  }, {
    "quoteText": "He is able who thinks he is able.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "The harder you fall, the higher you bounce.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Trusting our intuition often saves us from disaster.",
    "quoteAuthor": "Anne Wilson Schaef"
  }, {
    "quoteText": "Truth is powerful and it prevails.",
    "quoteAuthor": "Sojourner Truth"
  }, {
    "quoteText": "Talk doesn't cook rice.",
    "quoteAuthor": "Chinese proverb"
  }, {
    "quoteText": "Light tomorrow with today!",
    "quoteAuthor": "Elizabeth Browning"
  }, {
    "quoteText": "Silence is a fence around wisdom.",
    "quoteAuthor": "German proverb"
  }, {
    "quoteText": "Society develops wit, but its contemplation alone forms genius.",
    "quoteAuthor": "Madame de Stael"
  }, {
    "quoteText": "Real magic in relationships means an absence of judgement of others.",
    "quoteAuthor": "Wayne Dyer"
  }, {
    "quoteText": "The years teach much which the days never know.",
    "quoteAuthor": "Ralph Emerson"
  }, {
    "quoteText": "We can only learn to love by loving.",
    "quoteAuthor": "Iris Murdoch"
  }, {
    "quoteText": "The simplest things are often the truest.",
    "quoteAuthor": "Richard Bach"
    }, {
    "quoteText": "What you give is what you get.",
    "quoteAuthor": "Byron Pulsifer"
  }, {
    "quoteText": "Everyone smiles in the same language.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "A short saying often contains much wisdom.",
    "quoteAuthor": "Sophocles"
  }, {
    "quoteText": "Yesterday I dared to struggle. Today I dare to win.",
    "quoteAuthor": "Bernadette Devlin"
  }, {
    "quoteText": "Victory belongs to the most persevering.",
    "quoteAuthor": "Napoleon Bonaparte"
  }, {
    "quoteText": "No alibi will save you from accepting the responsibility.",
    "quoteAuthor": "Napoleon Hill"
  }, {
    "quoteText": "If you can dream it, you can do it.",
    "quoteAuthor": "Walt Disney"
  }, {
    "quoteText": "From error to error one discovers the entire truth.",
    "quoteAuthor": "Sigmund Freud"
  }, {
    "quoteText": "It is better to travel well than to arrive.",
    "quoteAuthor": "Buddha"
  }, {
    "quoteText": "Life shrinks or expands in proportion to one's courage.",
    "quoteAuthor": "Anais Nin"
  }, {
    "quoteText": "You have to believe in yourself.",
    "quoteAuthor": "Sun Tzu"
  }, {
    "quoteText": "Our intention creates our reality.",
    "quoteAuthor": "Wayne Dyer"
  }, {
    "quoteText": "Silence is a true friend who never betrays.",
    "quoteAuthor": "Confucius"
  }, {
    "quoteText": "Character develops itself in the stream of life.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
    "quoteText": "From little acorns mighty oaks do grow.",
    "quoteAuthor": "American proverb"
  }, {
    "quoteText": "You have to believe in yourself.",
    "quoteAuthor": "Sun Tzu"
  }, {
    "quoteText": "You can't stop the waves, but you can learn to surf.",
    "quoteAuthor": "Jon Kabat-Zinn"
  }, {
    "quoteText": "Reality does not conform to the ideal, but confirms it.",
    "quoteAuthor": "Gustave Flaubert"
  }, {
    "quoteText": "Speak low, if you speak love.",
    "quoteAuthor": "William Shakespeare"
  }, {
    "quoteText": "A really great talent finds its happiness in execution.",
    "quoteAuthor": "Johann Wolfgang von Goethe"
  }, {
    "quoteText": "Reality leaves a lot to the imagination.",
    "quoteAuthor": "John Lennon"
  }, {
    "quoteText": "Our intention creates our reality.",
    "quoteAuthor": "Wayne Dyer"
  }, {
    "quoteText": "Society develops wit, but its contemplation alone forms genius.",
    "quoteAuthor": "Madame de Stael"
  }, {
    "quoteText": "The greatest remedy for anger is delay.",
    "quoteAuthor": "Seneca"
  }, {
    "quoteText": "Growth itself contains the germ of happiness.",
    "quoteAuthor": "Pearl Buck"
  }, {
    "quoteText": "You can do what's reasonable or you can decide what's possible.",
    "quoteAuthor": "anonym"
  }, {
    "quoteText": "Nothing strengthens authority so much as silence.",
    "quoteAuthor": "Leonardo da Vinci"
  }, {
    "quoteText": "Don't tell me that it isn't work plox ;3",
    "quoteAuthor": "Bartłomiej Tuchowski"
  }];
  //Function gets random number from the range.
  function gettingRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  //Function fades in body and buttons with new colors.
  function fadeInBody() {
    var colorIndex = gettingRandom(0, colors.length); //Gets random number in colors dictionary range.
    console.log(colors[colorIndex]);
    $("body").css("background-color", colors[colorIndex]); //Updates body color.
    $(".btn").css("background-color", colors[colorIndex]); //Updates buttons color.
    $("body").fadeIn(1000);
    $(".btn").fadeIn(1000);
  };
  //Function fades in new quoute.
  function fadeInQuote() {
    var quoteIndex = gettingRandom(0, quotes.length); //Gets random number in quotes dictionary range.
    $(".central-box__quote-text").html('"' + quotes[quoteIndex].quoteText + '"'); //Updates quote text.
    $(".central-box__quote-author").html('-' + quotes[quoteIndex].quoteAuthor); //Updates quote author.
    $(".central-box__quote-text, .central-box__quote-author").fadeIn(1000); 
  };

  //Getting new Quote when clicked.
  $(".btn--new-quote").on("click", function () {
    $("body").fadeOut(1000, fadeInBody); //fade out old body and fade in new.
    $(".central-box__quote-text, .central-box__quote-author").fadeOut(1000, fadeInQuote); //fade out old quoute and fade in new.
  })
  //Like this app and share it on Facebook when clicked.
  $(".btn--like").click(function() {
    window.open("https://www.facebook.com/sharer/sharer.php?u=https://fjollsfinn.github.io/Random_Quote_Machine/index.html");
  })
  //Tweet current quote with #inspiration hashtag when clicked.
  $(".btn--twitter").click(function() {
    window.open("https://twitter.com/intent/tweet?text=" + document.getElementsByClassName("central-box__quote-text")[0].textContent + document.getElementsByClassName("central-box__quote-author")[0].textContent + "&hashtags=inspiration");
  })
  //Footer buttons
  //Opens Codepen profile in new widnow when clicked.
  $(".btn--codepen").click(function() {
    window.open("https://codepen.io/Milthir/#");
  })
  //Opens Github profile in new window when clicked.
  $(".btn--github").click(function() {
    window.open("https://github.com/Fjollsfinn");
  })
  //Opens Facebook profile in new window when clicked.
  $(".btn--facebook").click(function() {
    window.open("https://www.facebook.com/Fjollsfinn.dev/");
  })

  //Calling fadeInQuote() function when refreshes the page- first call.
  fadeInQuote();
})