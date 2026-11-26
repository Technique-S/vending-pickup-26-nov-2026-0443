// A pickup line spoken by a vending machine to a passing human.
export const LINE = "I've got exact change and no judgment about your 3 a.m. snack run. Press B4 — that's where I keep the good stuff, and I only open up for the right person.";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not just whitespace.
export function isValid(text: string): boolean {
  const n = [...text].length;
  if (n < 1 || n > 200) return false;
  return text.trim().length > 0;
}
