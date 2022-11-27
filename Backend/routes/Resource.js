const express = require("express");

const router = express.Router();
const {fetchResources,
       fetchResource,
       createResource,
       updateResource,
       deleteResource,
       filterResources,
       likeResource,   } = require('../controllers/Resource')

// create Resource
router.post("/createResource", createResource);

// fetch Resources by name 
router.get("/fetchResources", fetchResources);
router.
// fetch Resource by id
router.get("/fetchResource", fetchResource);

// filter Resource by tag
router.get("/filterResources", filterResources);

// update Resource
router.patch("/updateResource", updateResource);

// delete Resource
router.delete("/deleteResource", deleteResource);

// like Resource
router.delete("/likeResource", likeResource);

module.exports = router;