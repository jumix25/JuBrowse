# JuBrowse 6.0 Beta

Cross-platform Electron prototype by JuGroup.

## Run locally
Requires Node.js 22+.
```bash
cd desktop
npm install
npm start
```

## Beta build pipeline
GitHub Actions builds Windows NSIS installer (.exe), macOS (.dmg and .zip containing the .app), and Linux AppImage. To publish a prerelease, push tag `v6.0.0-beta.1`; the workflow uploads assets to the GitHub Release titled **JuBrowse 6.0 beta**. A manually triggered workflow creates downloadable build artifacts only.

## Current limitations
- Chrome Web Store extension installation is not implemented.
- The adblock setting is not a functioning network filter yet.
- Sandbox uses a separate non-persistent Electron session; it is not an OS-level security boundary.
- This is an early beta prototype, not recommended as a primary browser for sensitive activity.
