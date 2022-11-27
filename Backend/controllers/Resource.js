const Resource = require("../models/Resource");

//create a resource
const createResource = async (req, res) => {
    const {title, author, price} = req.body;

    //add to database
    try {
        const resource = await Resource.create({title, description, tags, postedBy, likes});
        res.status(201).json(resource);
    } catch (error) {
        res.status(404).json({error: true, message: error.message});
    }
};

// Fetch all resources
const fetchResources = async (req, res) => {
    const resources = await Resource.find({});
  
    res.status(200).json(resources);
  };
  
  // Fetch on resources by title
  const fetchResource = async (req, res) => {
    const { title } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(title)) {
      return res.status(404).json({ error: "Resource not found!" });
    }
  
    const resource = await Resource.findByName(title);
  
    if (!resource) {
      return res.status(404).json({ error: "Resource not found!" });
    }
  
    res.status(200).json(resource);
  };

  //filter resource by tags
  const filterResources = async (req, res) => {
    const { tags } = req.params;
  
    if (!mongoose.Types.ObjectId.isValid(tags)) {
      return res.status(404).json({ error: "Resource(s) not found!" });
    }
  
    const resources = await Resource.findByName(tags);
  
    if (!resources) {
      return res.status(404).json({ error: "Resource(s) not found!" });
    }
  
    res.status(200).json(resources);
  }
  
const updateResource = async (req, res) => {
    const {id} = rea.params;

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Resource not found"});
    }
    res.status(200).json(resource);
}

const deleteResource = async (req, res) => {
    const {id} = rea.params;

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Resource not found"});
    }
}

const likeResource = async (req, res) => {
    const {id} = rea.params;

    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Resource not found"});
    }
}

module.exports = {
    fetchResources,
    fetchResource,
    filterResources,
    createResource,
    updateResource,
    deleteResource, 
    likeResource,
};