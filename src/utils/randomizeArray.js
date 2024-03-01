const getRand = () => Math.random() * 1000;

export default function randomizeArray(a) {
  return a
    .map((player, i) => ({ i, ...player, weight: getRand() }))
    .sort((a, b) => a.weight - b.weight);
}
