class RandomizedSet {
    constructor() {
        this.map = new Map(); // Stores value -> index mapping
        this.list = []; // Stores the values
    }

    insert(val) {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) return false;
        const index = this.map.get(val);
        const lastElement = this.list[this.list.length - 1];
        this.list[index] = lastElement; // Move last element to the removed spot
        this.map.set(lastElement, index);
        this.list.pop(); // Remove the last element
        this.map.delete(val);
        return true;
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.list.length);
        return this.list[randomIndex];
    }
}
