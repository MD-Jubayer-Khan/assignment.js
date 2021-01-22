//Convert Kilometer to Meter
function kilometerToMeter(meter) {
    if (meter < 0) {
        return 'converted-meter';
    }
    return meter * 1000;
}

var $5kilometer = kilometerToMeter(5);
console.log($5kilometer);

// 2. Budget Calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'Result total-amount';
    }

    var totalWatch = watch * 50;
    var totalPhone = phone * 100;
    var totalLaptop = laptop * 500;
    return totalWatch + totalPhone + totalLaptop;
}
var watch5Phone2Laptop2 = budgetCalculator(5, 2, 2);
console.log(watch5Phone2Laptop2);

//Hotel Cost
function hotelCost(day) {
    var money = 0;

    if (day < 0) {
        return 'staying Day';
    } else if (day <= 10) {

        money = day * 100;
    } else if (day <= 20) {
        var firstPackage = 10 * 100;
        var limit = day - 10;

        var secondPackage = limit * 80;
        money = firstPackage + secondPackage;
    } else {
        var firstPackage = 10 * 100;
        var secondPackage = 10 * 80;
        var limit = day - 20;

        var thirdPackage = limit * 50;
        money = firstPackage + secondPackage + thirdPackage;
    }

    return money;
}

console.log(hotelCost(43));

//Mega Friend
function megaFriend(friends) {
    var friendsName = '';
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length <= 0) {
            return 'largest name';
        } else if (friends[i].length > friendsName.length) {
            friendsName = friends[i];
        }
    }
    return friendsName;
}
console.log(megaFriend(['abul', 'kabul', 'sholimuddin', 'kolimuddin']));