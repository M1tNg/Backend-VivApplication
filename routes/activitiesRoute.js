const express = require('express');
const activitiesRouter = express.Router();

const activitiesController = require('../controller/activitiesController');

const activitiesModels = require('../models/activitiesModels')

activitiesRouter.param("act_id", async (req,res,next,id) => {
    const Act = await activitiesModels.findById(id);
    if(!Act) {
        return res.status(404).send();
    };

    req.Act = Act;
    next();
}); 

activitiesRouter.get("/", activitiesController.get_allAct);
activitiesRouter.get("/:act_id", activitiesController.get_soloAct);
activitiesRouter.post("/", activitiesController.create_Act);
activitiesRouter.put("/:act_id", activitiesController.edit_Act);
activitiesRouter.delete("/:act_id", activitiesController.delete_Act);

module.exports = activitiesRouter;