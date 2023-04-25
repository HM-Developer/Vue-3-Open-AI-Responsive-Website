export default function loadImages(imgs: string | string[]) {
  const load = (path: string) => new URL(path, import.meta.url).href
  if (typeof imgs == 'string') return load(imgs)

  return imgs.map((img) => load(img))
}
