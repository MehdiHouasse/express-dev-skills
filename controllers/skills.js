const Skill = require('../models/skills');

// Function to get all skills
function index(req, res) {
  console.log('hey');
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: 'All skills'
  });
}

// Function to add a new skill
function addSkill(skill) {
  skill.id = skills.length + 1;
  skills.push(skill);
}

// Function to delete a skill by ID
function deleteSkill(id) {
  const skillIndex = skills.findIndex((s) => s.id === id);

  if (skillIndex !== -1) {
    skills.splice(skillIndex, 1);
  }
}

module.exports = {
  index,
  addSkill,
  deleteSkill,
};
