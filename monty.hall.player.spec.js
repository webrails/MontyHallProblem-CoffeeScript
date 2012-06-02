describe("MontyHallPlayer", function() {
    beforeEach(function() {
        return this.monty_hall_game = new MontyHallPlayer();
    });
    it("should be instantiable", function() {
        return expect(this.monty_hall_game).toBeTruthy();
    });
    return describe("play", function() {
        return it("should be a function", function() {
            return expect(_.isFunction(this.monty_hall_game.play)).toBeTruthy();
        });
    });
});