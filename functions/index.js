

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// The Cloud Functions for Firebase SDK to create Cloud Functions and triggers.
const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
// const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// const admin = require('firebase-admin');
// const functions = require('firebase-functions');
// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");
const cors = require("cors")({origin: true});

initializeApp();
// admin.initializeApp(functions.config().firebase);
/*
exports.helloworld = onRequest(async (req, res) => {
  res.send("hello from firebase");
});
*/

// retrieve posts for the client side
exports.getposts = onRequest(async (req, res) => {
  cors(req, res, async () => {
    const posts = [];
    await getFirestore().collection("blogs")
      .orderBy("date").get().then(
        (querySnapshot) => (
          querySnapshot.forEach((doc) => {
            posts.push(doc.data())
          }
          )
        )
      )

    logger.log(posts)
    res.send(JSON.stringify(posts.reverse()))
  });
});

// Add blog to all posts
exports.addblog = onRequest(async (req, res) => {
  cors(req, res, async () => {
    const original = JSON.parse(JSON.stringify(req.body));
    logger.log(original);
    const writeResult = await getFirestore()
      .collection("blogs")
      .add(
        {
          title: original.title,
          author: original.author,
          body: original.body,
          date: original.date,
        },
      );
    res.json({ result: `Blog post with ID: ${writeResult.id} added.` });
  });
});


exports.addresponse = onRequest(async (req, res) => {
  cors(req, res, async () => {
    const original = JSON.parse(JSON.stringify(req.body));
    logger.log(original);
    const writeResult = await getFirestore()
      .collection("responses")
      .add(
        {
          author: original.author,
          body: original.body,
          date: original.date,
        },
      );
    res.json({ result: `Response post with ID: ${writeResult.id} added.` });
  });
});

exports.getresponse = onRequest(async (req, res) => {
  cors(req, res, async () => {
    const posts = [];
    const result = await getFirestore().collection("responses").orderBy("date").get().then(
      (querySnapshot) => (
        querySnapshot.forEach((doc) => {
          posts.push(doc.data())
        }
        )
      )
    )

    logger.log(posts)
    res.send(JSON.stringify(posts.reverse()))
  });
});
/*
// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path /messages/:documentId/original
exports.addmessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
      .collection("messages")
      .add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `Message with ID: ${writeResult.id} added.`});
});

// Listens for new messages added to /messages/:documentId/original
// and saves an uppercased version of the message
// to /messages/:documentId/uppercase
exports.makeuppercase = onDocumentCreated("/messages/{documentId}", (event) => {
  // Grab the current value of what was written to Firestore.
  const original = event.data.data().original;

  // Access the parameter `{documentId}` with `event.params`
  logger.log("Uppercasing", event.params.documentId, original);

  const uppercase = original.toUpperCase();

  // You must return a Promise when performing
  // asynchronous tasks inside a function
  // such as writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return event.data.ref.set({uppercase}, {merge: true});
});

*/
