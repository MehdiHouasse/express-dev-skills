const express = require('express');
const router = express.Router();
const skillsData = require('../models/skills'); // Import skills data
const skillsControl = require('../controllers/skills');

// Display the form for adding a new skill
router.get('/', skillsControl.index)
router.get('/new', function (req, res) {
  res.render('skills/new');
});

//the submission of a new skill
router.post('/', function (req, res) {
  const skillData = {
    skill: req.body.skill,
    level: req.body.level,
  };

  // Add the new skill
  skillsData.addSkill(skillData);

  // Redirect back to the index view
  res.redirect('/skills');
});

// Display the delete button for a skill
router.get('/:id', function (req, res) {
  const skillId = parseInt(req.params.id);
  const skill = skillsData.getAll().find((s) => s.id === skillId);

  if (!skill) {
    return res.status(404).send('Skill not found');
  }

  res.render('skills/show', { skill });
});

// Handle the deletion of a skill
router.delete('/:id', function (req, res) {
  const skillId = parseInt(req.params.id);

  // Delete the skill from data
  skillsData.deleteSkill(skillId);

  // Redirect back to the index view
  res.redirect('/skills');
});

module.exports = router;
