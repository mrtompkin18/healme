export function elipsis(text, length) {
  return text.length > length
    ? `${text.substring(0, length)}...${text.substring(
        text.length - Math.floor(length / 3)
      )}`
    : text;
}
