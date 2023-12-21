export function getMapPreview(lat, lng) {
  const GOOGLE_API_KEY = "";
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?
   center=${lat},${lng}
   &zoom=14
   &size=400x200
   &maptype=roadmap
   &markers=color:red%7Clabel:S%7C${lat},${lng}
   &key=${GOOGLE_API_KEY}`;

  return imagePreviewUrl;
}

// locationPreview = (
//   <Image
//     style={styles.image}
//     source={{
//       uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
//     }}
//   />
// );

export async function getAddress(lat, lng) {
  const API_KEY = "";
  const URL = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=${API_KEY}`;
  const response = await fetch(URL);

  if (!response.ok) {
    throw new Error("Failed to fetch address!");
  }

  const data = await response.json();
  const address = data.features[0].properties.formatted;

  return address;
}
