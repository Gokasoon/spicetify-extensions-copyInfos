// NAME: Copy Infos
// AUTHOR: Gokasoon
// DESCRIPTION: Add a context menu to copy song title and artist

(function CopyInfos() {
  // Wait for Spicetify to be fully initialized
  if (!Spicetify || !Spicetify.ContextMenu) {
      setTimeout(CopyInfos, 300);
      return;
  }

  // Create a new menu item
  new Spicetify.ContextMenu.Item(
      "Copy Infos", 
      async (uris) => {
          try {
              // Get the first URI from the array
              const uri = uris[0];
              
              // Get the track info using CosmosAsync API for reliability
              const trackData = await Spicetify.CosmosAsync.get(`https://api.spotify.com/v1/tracks/${uri.split(":")[2]}`);
              
              if (!trackData) {
                  throw new Error("Could not fetch track data");
              }
              
              // Format the track information
              const trackName = trackData.name;
              const artistName = trackData.artists.map(artist => artist.name).join(", ");
              const infos = `${trackName} - ${artistName}`;
              
              // Copy to clipboard
              await navigator.clipboard.writeText(infos);
              
              // Show notification
              Spicetify.showNotification(`Copied: ${infos}`);
          } catch (error) {
              console.error("Failed to copy track info:", error);
              Spicetify.showNotification("Failed to copy track info", true);
          }
      },
      // Only show for tracks
      (uris) => {
          return uris.length === 1 && Spicetify.URI.isTrack(uris[0]);
      },
      // Use copy icon
      "copy"
  ).register();
  
  console.log("Copy Infos extension loaded!");
})();