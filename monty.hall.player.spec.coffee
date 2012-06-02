describe "MontyHallPlayer", ->

  beforeEach ->
    @monty_hall_game = new MontyHallPlayer()

  it "should be instantiable", ->
    expect(@monty_hall_game).toBeTruthy()

  describe "play", ->

    it "should be a function", ->
      expect(_.isFunction(@monty_hall_game.play)).toBeTruthy()