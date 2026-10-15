use("lesson_05_cohort_86");
// db.animal.insertMany([
//   { kind: "tiger", weight: 300, name: "Alan", predatory: true },
//   { kind: "penguin", weight: 2, name: "Kovalsky", predatory: true },
//   { kind: "chicken", weight: 1, name: "Cipa", predatory: false },
//   { kind: "shark", weight: 400, name: "Sharp", predatory: false },
//   { kind: "shark", weight: 450, name: "John", predatory: false },
//   { kind: "panda", weight: 200, name: "Po", predatory: false },
// ]);

// db.animal.updateMany (
//     {
//         kind: "shark"
//     },
//     {
//        $set: {predatory: true}
//     }
// )
/////////////
// db.animal.updateMany(
//     {},
//     {$rename: {weight: "weight_kg"}}
// );


// db.animal.updateMany(
//     {predatory: true},
//     {$set: {food: ["fish","squid"]}}
// );
// db.animal.insertMany([
//   {
//     kind: "t-rex",
//     weightKg: 1500,
//   },
//   {
//     kind: "reptile",
//     weightKg: 1800,
//   },
// ]);
// db.animal.deleteMany(
//     {kind: {$in: ["t-rex","reptile"]}
//     }
// );
// db.animal.find();
// db.kids.insertMany([
//   { name: "John", age: 5, gender: "boy" },
//   { name: "Anna", age: 6, gender: "girl" },
//   { name: "Leyla", age: 4, gender: "girl" },
//   { name: "Frieda", age: 3, gender: "boy" },
//   { name: "Bob", age: 5, gender: "boy" },
// ]);
// - поиск среднего возраста мальчиков и девочек
// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       averageAge: {
//         $avg: "$age",
//       },
//     },
//   },
// ]);
// - поиск минимального возраста мальчиков и девочек
// db.kids.aggregate([
//   {
//     $group: {
//       _id: "$gender",
//       minimumAge: {
//         $min: "$age",
//       },
//     },
//   },
// ]);
// - поиск максимального возраста мальчиков и девочек
db.kids.aggregate([
  {
    $group: {
      _id: "$gender",
      maximumAge: {
        $max: "$age",
      },
    },
  },
]);