// Builds a path that works locally ("/") and on GitHub Pages ("/REPO_NAME/").
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
