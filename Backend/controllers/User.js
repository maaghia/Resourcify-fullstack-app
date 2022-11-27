const User = require("../models/User");
const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Login the user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //Create the JWT
    const token = generateToken(user._id);
    res.status(200).json({email: user.email, token});
  } catch (error) {
    res.status(401).json(error.message);
  }
};


// Signup the user
const signup = async (req, res) => {
  const { email, password } = req.body;
    try {
    const user = await User.signup(email, password);
    
    //Create the JWT
    //const token = generateToken(user._id);

    res.status(200).json(user);
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// Update the user
const updateUser = async (req, res) => {
    const { email, password, fullName } = req.params;

    if (!mongoose.Types.ObjectId.isValid({ email, password, fullName })) {
        return res.status(404).json({ error: "Resource not found!" });
    }

    const resource = await Resource.findByIdAndUpdate({ _id: id }, { ...req.body });

    if (!resource) {
        return res.status(404).json({ error: "Resource not found!" });
    }

    res.status(200).json(resource);
}

module.exports = { 
    login, 
    signup,
    updateUser,
};