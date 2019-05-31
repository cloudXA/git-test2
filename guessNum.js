var getGuesser = function (lowest,highest) {
    var secret = between(lowest, highest);
    return function (userNumber) {
        if (userNumber === secret) {
            return "well done!"
        } else if (userNumber > secret) {
            return "too high";
        } else {
            return "too low";
        }
    };
};

var guess = getGuesser(5, 10);