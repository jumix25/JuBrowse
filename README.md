# JuBrowse 6.0 Beta

**JuBrowse 6.0 Beta** is an experimental cross-platform Electron browser prototype by JuGroup.

- Website: https://jumix25.github.io/JuBrowse/
- Repository: https://github.com/jumix25/JuBrowse
- Beta releases: https://github.com/jumix25/JuBrowse/releases

## Desktop prototype

The new app lives in `desktop/`.

```bash
cd desktop
npm install
npm start
```

Requires Node.js 22+.

## Build pipeline

GitHub Actions workflow: `.github/workflows/jubrowse6-beta.yml`.

- Windows: NSIS `.exe` installer
- macOS: `.dmg` and ZIP containing the `.app`
- Linux: `.AppImage`

A tagged release matching `v6.0.0-beta*` triggers builds and publishes a GitHub prerelease. Manually running the workflow uploads build artifacts to the Actions run.

## Beta status and security

This is an early prototype, not yet a production browser. Chrome Web Store installation and a real network adblocker are not implemented. The sandbox uses a separate non-persistent Electron session, not a complete OS-level isolation boundary. Do not rely on it to safely open malware or highly suspicious sites.

Features include a configurable home page, light/dark theme, PNG background selection, custom shortcuts, Homelab alias `homelab:PORT`, and early game demos. Some game experiences remain incomplete.
