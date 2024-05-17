export function removeControlCharacters(text: string): string {
  return text.replace(/[\x00-\x1F\x7F]/g, ' ');
}
