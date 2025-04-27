const { v4: uuidv4 } = require('uuid'); // import uuid
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length > 0) return res.status(400).json({ message: 'Email already registered' });

    const hashedPassword = bcrypt.hashSync(password, 10);
    const id = uuidv4(); // generate UUID

    const newUser = { id, email, password: hashedPassword };
    User.createUser(newUser, (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: 'User registered successfully' });
    });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).send(err);
    if (results.length === 0) return res.status(400).json({ message: 'Invalid email or password' });

    const user = results[0];
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) return res.status(400).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ token });
  });
};
