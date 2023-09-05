let skills = [
  { id: 1, skill: 'JavaScript', level: 'Intermediate' },
  { id: 2, skill: 'React.js', level: 'Advanced' },
  { id: 3, skill: 'Node.js', level: 'Intermediate' }
];

// Function to get all skills
function getAll() {
  return skills;
}

// Function to add a new skill
function addSkill(skill) {
  skill.id = skills.length + 1; // Generate a new ID (you might want to handle this differently)
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
  getAll,
  addSkill,
  deleteSkill,
};
