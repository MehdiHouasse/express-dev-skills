const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

// Import from models/skills.js
const skillsData = require('./models/skills');

// Set EJS
app.set('view engine', 'ejs');

// Set up middleware
app.use(express.urlencoded({ extended: false }));

// Include method-override middleware
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Include skills router
const skillsRouter = require('./routes/skills');
app.use('/skills', skillsRouter);

//root route
app.get('/', (req, res) => {
  const skills = skillsData.getAll();
  res.render('skills/index', { title: 'Skills', skills });
});

// Listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
