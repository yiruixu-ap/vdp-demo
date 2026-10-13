/**
 * Return an asset path prefixed with the public base path.
 * Required for GitHub Pages subpath deploys where NEXT_PUBLIC_BASE_PATH
 * is set to /repo-name; local dev leaves it empty.
 */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${base}${path}`;
}
