export default function Tutorial() {
  return (
    <div className="App">
      <div className="rules border">
        <h3>Rules:</h3>
        <p>
          Hello there and welcome to aaaaaaaaaaaaaand ACTION: Directors cut!
          <br /> <br /> This will go over the super complex list of rules this
          game has to offer. Grab some friends or classmates and go to town!
          <br /> <br /> RULE NUMBER ONE: Someone needs to be a host! Someone
          will select the “Host” button on the main menu and a location will be
          generated. Once you figure out the event you’re doing, we head into …
          <br /> <br /> RULE NUMBER TWO: Everyone playing will select the
          “Player” button on the main menu, and a player card will be generated.
          As a player, you must become the character you’re given, change your
          voice, formalities, and speech patterns using the information on your
          player card. Players will have a secret quest they must complete
          before the scene ends.
        </p>
      </div>
      <div className="rules border">
        <h3>Player:</h3>
        <img src="/img/tutorial/player.png" />
        <p>
          This is an example of a player card. Here we have the wonderful (yet
          unstable) Cassie! Based on the information we’re given, and based on
          her picture, we can tell she’s a bit of a screwball. They whistle mid
          conversation, have the attention span of a TikToker, and are convinced
          they can talk to birds. And if we take a look at the large number to
          the right, we can see which quest we have to complete before the end
          of the scene. In this example we are given the quest “Special gift”.
          This means we must convince another player in the scene to do
          something for a special feather from a super rare bird. This bird can
          be a real bird, a mythical bird, or anything you want to come up with,
          as long as it’s in character, it’s totally allowed!
        </p>
      </div>
      <div className="rules border">
        <h3>Host: </h3>
        <img src="/img/tutorial/host.png" />
        <p>
          And wrapping up this extensive tutorial, we have a location card. In
          every event on a location, there will be a mention of a player that
          must do something, on top of being the character they’re given. In
          this example, the large number to the right tells us that the
          situation is “Ancient relics”. One player must be a store clerk, and
          everyone else will be looking at, and potentially buying random items
          in the store. The store clerk must think of creative ways to make
          these items seem like they are much more valuable than they are in
          order to get as much money as possible. Anyway, that’s the end of the
          tutorial, feel free to ignore rules one and two, thanks and have fun.
        </p>
      </div>
    </div>
  );
}
