import Realm from "realm";

// Shared instance of the Realm app.
const app = new Realm.App({id: "your-realm-app-id-here"}); // Set Realm app ID here.
// to find your Realm App ID see: https://docs.mongodb.com/realm/get-started/find-your-project-or-app-id/#find-a-realm-application-id 
// You need to create a Free MongoDB Atlas Database, and a Realm App connected to that DB

export default app;

