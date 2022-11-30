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
    try {
      const resources = await Resource.find({}).sort({createdAt: -1});
      res.status(200).json(resources);
    } catch (error) {
      
    }
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
    try {
      const {id} = rea.params;

      if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Resource not found"});
    }
      //check weather this resource belongs to the signed in user
      if(!resource.postedBy.equals(user_id)){
        throw new Error("You are not authorized to do this!");
      }
    res.status(200).json(resource);  
    } catch (error) {
      throw new Error("Error finding the resource");
    }
};

const deleteResource = async (req, res) => {
    try {
      const {id} = rea.params;
    if(!mongoose.Types.ObjectID.isValid(id)){
        return res.status(404).json({error: "Resource not found"});
    }
    //check weather this resource belongs to the signed in user
    if(!resource.postedBy.equals(user_id)){
      throw new Error("You are not authorized to do this!");
    }
    } catch (error) {
      throw new Error("Error finding the resource");
    }
};

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