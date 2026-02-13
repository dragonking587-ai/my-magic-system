# GitHub‑Only In‑Browser Editor (No Netlify, No External Services)

This repo includes an in-browser editor at:

- `/editor/`

Because GitHub Pages is static, the safest GitHub‑only way to allow *write access* from a browser is to use a **Fine‑grained Personal Access Token (PAT)**.

> The token is stored locally in your browser (localStorage). Anyone who has the token can push commits, so keep it private.

## 1) Enable GitHub Pages
In your GitHub repo:
- Settings → Pages
- Source: **Deploy from a branch**
- Branch: **main** (or whatever you use)
- Folder: **/ (root)**

After it builds, your site will be:
- `https://<owner>.github.io/<repo>/`

## 2) Create a Fine‑grained PAT (recommended)
GitHub → Settings → Developer settings → Personal access tokens → Fine‑grained tokens → Generate new token.

Set:
- **Resource owner**: your account (or org)
- **Repository access**: *Only select repositories* → select this repo
- **Permissions**:
  - Repository permissions → **Contents: Read and write**
  - (Optional) Pull requests: Read and write (only if you later add PR workflow)

Generate the token and copy it.

## 3) Open the editor
Go to:
- `https://<owner>.github.io/<repo>/editor/`

Click **Set GitHub Token** and paste your token.

## 4) Edit + Save
- Click **Load book files**
- Select a file
- Edit
- **Save** creates a commit on your branch.

## Notes
- For extra safety, create a dedicated branch (e.g., `draft`) and set the editor to use that branch.
- If you rotate the token, just paste the new one in the editor.
