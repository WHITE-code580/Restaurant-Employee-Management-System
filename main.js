class RestaurantEmployee{
    constructor(name) {
        this._name = name;
        this._nominatingBestEmployeeDaysLeft = 58;
    }
    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    get nominatingBestEmployeeDaysLeft() {
        return this._nominatingBestEmployeeDaysLeft;
    }
    decreaseNominatingBestEmployeeDaysLeft(days) {
        this._nominatingBestEmployeeDaysLeft = Math.max(0, this._nominatingBestEmployeeDaysLeft - days);
    }
    static getRandomEmployeeCount() {
        return Math.floor(Math.random() * 10);
    }

}

class RestaurantManager extends RestaurantEmployee {
    constructor(name, nominatedLastYear = []) {
        super(name);
        this._nominatedLastYear = nominatedLastYear;
    }
    get nominatedLastYear() {
        return this._nominatedLastYear;
    }
    addNominatedLastYear(newNominated) {
        this._nominatedLastYear.push(newNominated);
    }
}

class RestaurantWaiter extends RestaurantEmployee {
    constructor(name, tips = []) {
        super(name);
        this._tips = tips;
    }
    get tips() {
        return this._tips;
    }

    addTips(newTip) {
        this._tips.push(newTip);
    }
}

class RestaurantChef extends RestaurantEmployee {
    constructor(name, dishesPrepared = []) {
        super(name);
        this._dishesPrepared = dishesPrepared;
    }
    get dishesPrepared() {
        return this._dishesPrepared;
    }

    addDishesPrepared(newDish) {
        this._dishesPrepared.push(newDish);
    }
}

// Example usage 1:
const managerAllan = new RestaurantManager("Allan", ["John", "Mary"]); 
managerAllan.decreaseNominatingBestEmployeeDaysLeft(10); 

console.log(managerAllan.nominatingBestEmployeeDaysLeft); // Output: 48
managerAllan.addNominatedLastYear("Steve"); 
console.log(managerAllan.nominatedLastYear); // Output: ["John", "Mary", "Steve"]

// Example usage 2:
const waiterMary = new RestaurantWaiter("Mary", [5, 10]);
waiterMary.decreaseNominatingBestEmployeeDaysLeft(20); 

console.log(waiterMary.nominatingBestEmployeeDaysLeft); // Output: 38
waiterMary.addTips(15); 
console.log(waiterMary.tips); // Output: [5, 10, 15]

// Example usage 3:
const chefJohn = new RestaurantChef("John", ["Pasta", "Pizza"]);
chefJohn.decreaseNominatingBestEmployeeDaysLeft(17);

console.log(chefJohn.nominatingBestEmployeeDaysLeft);  //Output: 41
chefJohn.addDishesPrepared("Fish");
console.log(chefJohn.dishesPrepared); // Output: ["Pasta", "Pizza", "Fish"]


