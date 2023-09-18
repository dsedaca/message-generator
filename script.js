let dadJokes = ["I'm afraid for the calendar. Its days are numbered.", "My wife said I should do lunges to stay in shape. That would be a big step forward.", "Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "What do a tick and the Eiffel Tower have in common? They're both Paris sites.", "How do you follow Will Smith in the snow? You follow the fresh prints."];

const randomJoke = array => {
    let chooseRandomJoke = Math.floor(Math.random() * array.length)

    console.log(array[chooseRandomJoke]);
}

randomJoke(dadJokes);