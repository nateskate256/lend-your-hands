const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://admin:wkbvDvVh6C0uiJcw@cluster0.mluh9.mongodb.net/pawprints?retryWrites=true&w=majority");

const animalSeeds = [
  {
    id: "123",
    name: "Spot",
    type: "Cat",
    breeds: "American Shorthair",
    gender: "Male",
    age: "Kitten",
    // photo: "small": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=100",
    status: "adoptable",
    contact: "phone",
    date: new Date(Date.now())
  },
  {
    id: "456",
    name: "Rover",
    type: "Dog",
    breeds: "Bulldog",
    gender: "Male",
    age: "Older",
    // photo: "small": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=100",
    status: "adoptable",
    contact: "Address (city, state, postcode)",
    date: new Date(Date.now())
  },
  {
    id: "789",
    name: "Lassie",
    type: "Dog",
    breeds: "Terrier",
    gender: "Male",
    age: "Middle",
    // photo: "small": "https://photos.petfinder.com/photos/pets/124/1/?bust=1546042081&width=100",
    status: "adoptable",
    contact: "Address (city, state, postcode)",
    date: new Date(Date.now())
  },
];

// db.Animals.deleteMany({})
  // .then(() =>
  (
   db.Animals.collection.insertMany(animalSeeds))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
