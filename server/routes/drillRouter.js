import * as drillController from '../controllers/drillController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const drillRouter = express.Router();

// these method calls are responsible for routing requests to the correct request handler
 
drillRouter.get('/', drillController.getAllDrills);
drillRouter.post('/', drillController.create);

/*
  The ':' specifies a URL parameter. 
  Also, it allows the passing of data which is stored in req.params in the controller
 */
drillRouter.get('/:drillId', drillController.read);
drillRouter.put('/:drillId', drillController.update);
drillRouter.delete('/:drillId', drillController.remove);

drillRouter.delete('/:drillEngine', drillController.deleteAllByEngine);
drillRouter.get('/:drillName', drillController.getByName);


export default drillRouter;
