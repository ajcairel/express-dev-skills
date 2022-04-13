const skills = [
    {id: 125223, skill: 'HTML', comfy: true},
    {id: 127904, skill: 'CSS', comfy: false},
    {id: 139608, skill: 'JavaScript', comfy: true},
    {id: 902101, skill: 'Express', comfy: false},
    {id: 420696, skill: 'Node', comfy: true},
  ];
  

  module.exports = {
      getAll,
      getOne
  }; 

  function getOne(id) {
      id = parseInt(id);

      return skills.find(skill => skill.id === id);
  }

  function getAll() {
      return skills;
  }