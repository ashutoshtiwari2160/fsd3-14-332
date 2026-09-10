let teams = [
  {
    id: 1,
    tname: "Rusty",
    t1: "Ashutosh Tiwari",
    email: "ashutoshtiwari2160@gmail.com",
    members: 6
  },
  {
    id: 2,
    tname: "Code Acers",
    t2: "Ashish Raj Singh",
    email: "ashish2160@gmail.com",
    members: 6
  }
];

let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) =>
  teams.find((team) => team.id === id);

export const addTeam = (newTeam) => {
  const team = {
    id: nextId++,
    ...newTeam
  };

  teams.push(team);
  return team;
};

// Update team by ID
export const updateTeamById = (id, updateTeam) => {
  const team = getTeamById(id);

  if (!team) {
    return null;
  }

  Object.assign(team, updateTeam);
  return team;
};

// Delete team by ID
export const deleteTeam = (id) => {
  const index = teams.findIndex((team) => team.id === id);

  if (index === -1) {
    return false;
  }

  teams.splice(index, 1);
  return true;
};