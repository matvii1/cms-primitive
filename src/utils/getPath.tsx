export function getPath(path: string) {
  return path.split("/")[1].split(".")[0];
}
