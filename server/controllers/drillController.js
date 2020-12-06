import Drill from "../models/drillModel.js";
/*
  In this file, we use use Mongoose queries in order to retrieve/add/remove/update drills.
  On an error, we send a 404 status code, as well as the error message. 
  On success (aka no error), we send the drill as JSON in the response.
 */

// Create a drill
export const create = async (req, res) => {
  // get the drill data from req.body
  // then save the Drill to the database
  const drill = req.body;
  if (!drill) {
    return res.status(200).send({
      error: "Drill not found",
    });
  }
  await new Drill(drill).save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
};

// Show the current Drill
export const read = async (req, res) => {
  // get the drill id from the req.params
  // send back the Drill data as json from the request
  // If the Drill data could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'}
  let id = req.params.drillId;
  await Drill.findById(id)
    .then((drill) => {
      if (!drill) {
        return res.status(200).send({
          error: "Drill not found with an Id " + id,
        });
      }
      res.json(drill);
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

// Update a Drill - note the order in which this function is called by the router
export const update = async (req, res) => {
  // get both the drill id and new data from the request
  // replace the Drill's properties which are in the database with the new properties found in the new data
  // Save the Drill
  const drill = req.body;
  const id = req.params.drillId;
  if (!drill) {
    return res.status(200).send({
      error: "Drill not found",
    });
  }

  await Drill.findById(id)
    .then((data) => {
      data.name = drill.name;
      data.engine = drill.engine;
      if (drill.search) {
        data.search = drill.search;
      }
      data
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          res.status(200).send({
            error: err.message || "An unknown error has occurred.",
          });
        });
    })
    .catch((err) => {
      res.status(200).send({
        error: err.message || "An unknown error has occurred.",
      });
    });
};

// Delete a Drill
export const remove = async (req, res) => {
  // If the Drill could not be found, be sure to send back a response in the following format: {error: 'Some message that indicates an error'}
  let id = req.params.drillId;

  await Drill.deleteOne({ _id: id }, (err) => {
    if (err) {
      return res.status(200).send({
        error: err.message || "An unknown error occurred",
      });
    }
    res.send({
      error: id + " has been deleted successfully",
    });
  });
};

// Retrieve all the directory Drills
export const getAllDrills = async (req, res) => {
  await Drill.find({}, (err, data) => {
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred",
      });
    res.json(data);
  });
};


export const deleteAllByEngine = async(req, res) => {

  let engn = req.params.drillEngine;
  
  await Drill.deleteMany({ engine: engn}, (err, data) => {

    if (err) {
      return res.status(200).send({
        error: err.message || "An unknown error occurred",
      });
    }

    return res.json(data);
      
  });

  
} 

export const getByName = async(req, res) => {
  let _name = req.params.drillName;
  await Drill.find({name : _name}, (err, data) => {
    
    if (err)
      return res.status(200).send({
        message: err.message || "An unknown error occurred"
      });

      return res.json(data);
  })

};