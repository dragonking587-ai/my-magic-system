// Simple GitHub token handler (GitHub Pages safe)

(function () {
  const TOKEN_KEY = "gh_editor_token_v1";

  function setToken() {
    const token = prompt("Paste your GitHub fine-grained token:");
    if (!token) {
      alert("Token not set.");
      return;
    }
    localStorage.setItem(TOKEN_KEY, token.trim());
    alert("GitHub token saved.");
  }

  function getToken() {
    return localStorage.getItem(TOKEN_KEY);
  }

  window.GitHubAuth = {
    setToken,
    getToken
  };
})();

