// import SchemaBuilder from "formulate-schema";

// const schema = new SchemaBuilder();
// const correctSchemaToInsert = {
//   fullName: {
//     string: [true, "Full Name Must Be A Valid String"],
//     matches: [
//       true,
//       new RegExp(/^[A-Za-z ]*$/),
//       "Full Name Must Only Be Letters.",
//     ],
//     min: [5, "Full Name Must Not Be Less Than 5 Characters."],
//     required: [true, "Full Name Required."],
//   },
//   email: {
//     email: [true, "Must Be A Valid Email."],
//     required: [true, "Email Required."],
//   },
//   password: {
//     password: [
//       true,
//       "Must Be A Strong Password: containing uppercase, number, and lowercase.",
//     ],
//     min: [8, "Password Must Be Longer Than 8."],
//     required: [true, "Password Required."],
//   },
//   age: {
//     number: [true, "Age Must Be A Number."],
//     min: [18, "Must Be Older Than 18"],
//     required: [true, "Age Required."],
//   },
//   created_at: {
//     date: [true, "Must Be A Valid Date."],
//     required: [true, "Timestamp Required"],
//   },
//   username: {
//     string: [true, "Username Must Be A String."],
//     min: [5, "Username Must Be Longer Than 5 Characters."],
//     required: [true, "Username Required."],
//     matches: [
//       true,
//       new RegExp(/^[A-Za-z0-9]+$/),
//       "Username Must Contain A Number, A Lowercase, and Uppercase Letter.",
//     ],
//   },
// };
// const incorrectSchemaToInsert = {
//     fullName: {
//       string: [true, "Full Name Must Be A Valid String"],
//       number: [true, "Must Be A Number."],
//       matches: [
//         true,
//         new RegExp(/^[A-Za-z ]*$/),
//         "Full Name Must Only Be Letters.",
//       ],
//       min: [5, "Full Name Must Not Be Less Than 5 Characters."],
//       required: [true, "Full Name Required."],
//     },
//     email: {
//       email: [true, "Must Be A Valid Email."],
//       required: [true, "Email Required."],
//     },
//     password: {
//       password: [
//         true,
//         "Must Be A Strong Password: containing uppercase, number, and lowercase.",
//       ],
//       min: [8, "Password Must Be Longer Than 8."],
//       required: [true, "Password Required."],
//     },
//     age: {
//       number: [true, "Age Must Be A Number."],
//       min: [18, "Must Be Older Than 18"],
//       required: [true, "Age Required."],
//     },
//     created_at: {
//       date: [true, "Must Be A Valid Date."],
//       required: [true, "Timestamp Required"],
//     },
//     username: {
//       string: [true, "Username Must Be A String."],
//       min: [5, "Username Must Be Longer Than 5 Characters."],
//       required: [true, "Username Required."],
//       matches: [
//         true,
//         new RegExp(/^[A-Za-z0-9]+$/),
//         "Username Must Contain A Number, A Lowercase, and Uppercase Letter.",
//       ],
//     },
//   };

// describe("Tests The Build Function.", () => {
//   test("Error Is Thrown If More Than One DataType Is Marked As A Constraint", async() => {
//     try {
//         await schema.build(incorrectSchemaToInsert);
//     } catch(err) {
//         console.log(err);
//     }
//   });
// });
