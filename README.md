# Copy Infos - Spicetify Extension

A simple Spicetify extension that adds a "Copy Infos" option to the right-click menu when right-clicking on a song in Spotify. This allows you to quickly copy the song title and artist name to your clipboard.

## Features

* Adds a "Copy Infos" option to the right-click context menu for songs
* Copies the song title and artist name in the format `Title - Artist`
* Shows a notification when the information is copied
* Only appears when right-clicking on tracks (not albums, playlists, etc.)

## Installation

### Prerequisites

* [Spicetify](https://spicetify.app/) installed

### Manual Installation

1. Download the `copyInfos.js` file (`dist/copyInfos.js`)
2. Place it in your Spicetify Extensions directory:
   * Windows: `%userprofile%\AppData\Local\spicetify\Extensions\`
3. Add the extension to your Spicetify config:
   ```bash
   spicetify config extensions copyInfos.js
   ```
4. Apply the changes:
   ```bash
   spicetify apply
   ```
5. Restart Spotify

## Usage

1. Right-click on any song in Spotify
2. Click on "Copy Infos" in the context menu
3. The song title and artist name will be copied to your clipboard in the format `Title - Artist`
4. A notification will appear confirming the information was copied
