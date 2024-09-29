import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      res.status(400).send("User Already Exists..!!");
    }
    const hash = bcrypt.hashSync(req.body.password, 7);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    await newUser.save();
    res.status(201).json({ message: "User created successfully.", newUser });
  } catch (err) {
    res.status(500).send("Something Went Wrong..!!");
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(404).send("User Not Found.");

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return res.status(400).send("Invalid login credentials.");

    res.status(200).send("Login Successful.");
  } catch (err) {
    res.status(500).send("Something Is Wrong..!!");
  }
};
