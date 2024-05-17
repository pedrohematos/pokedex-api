export function normalizeTextFormatting(text: string): string {
  // Page breaks are treated just like newlines.
  // Soft hyphens followed by newlines vanish.
  // Letter-hyphen-newline becomes letter-hyphen, to preserve real hyphenation.
  // Any other newline becomes a space.

  return text
    .replace(/\f/g, '\n')
    .replace(/\u00ad\n/g, '')
    .replace(/\u00ad/g, '')
    .replace(/ -\n/g, ' - ')
    .replace(/-\n/g, '-')
    .replace(/\n/g, ' ');
}
