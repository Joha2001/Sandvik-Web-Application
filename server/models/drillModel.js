// Import mongoose and define any variables needed to create the schema
import mongoose from 'mongoose';

// Create a schema for the data in the drills.json file that will define how data is saved in the database
const drillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    engine: { type: String, required: true },
    search:[String],

});



// Use your schema to instantiate a Mongoose model and
// export the model to make it available to other parts of your Node application */
export default mongoose.model('drills', drillSchema);