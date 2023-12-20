class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageURI = imageUri;
    this.address = address;
    this.location = location; //latitude and longitude
    this.id = new Date().toString() + Math.random().toString();
  }
}
