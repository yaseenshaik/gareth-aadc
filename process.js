const fs = require("node:fs/promises");

(async function process() {
  const file = await fs.readFile("./AADCInfo.txt", "utf-8");

  const players = file.split("                ");
  let type = "player";
  const playerData = [];
  const hostData = [];

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const name = player.slice(0, player.indexOf("\n"));

    // Charity is the first host and marks the end of player list
    if (name === "Charity") {
      type = "host";
    }
    const [bio, powers] = player.slice(name.length + 1).split("\n\n");
    if (!name || !powers || !bio) {
      console.warn("malformed text", player);
    }
    const data = { name, powers: powers.trim(), bio };
    if (type === "player") {
      playerData.push(data);
    } else {
      hostData.push(data);
    }
  }

  await fs.writeFile(
    "./src/data.json",
    JSON.stringify({ players: playerData, hosts: hostData }, null, 2),
  );
})();
