export function sanitizeName(name) {
  return name?.replace(/[()"':\s]/g, "");
}
