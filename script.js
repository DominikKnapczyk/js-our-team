//  Milestone 0:
// Creazione dell'array di membri del team
const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "wayne-barnett-founder-ceo.jpg"
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "angela-caroll-chief-editor.jpg"
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "walter-gordon-office-manager.jpg"
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "angela-lopez-social-media-manager.jpg"
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    photo: "scott-estrada-developer.jpg"
  },
  {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "barbara-ramos-graphic-designer.jpg"
  }
];

// Milestone 1
// Stampa delle informazioni sulla console
team.forEach(member => {
  console.log(`Name: ${member.name}`);
  console.log(`Role: ${member.role}`);
  console.log(`Photo: ${member.photo}\n`);
});

// Milestone 2

// Selezioniamo il contenitore sul DOM in cui inseriremo i membri del team
const teamContainer = document.getElementById("team-container");

// Utilizziamo ancora il metodo forEach() per iterare attraverso ogni membro del team
team.forEach(member => {
  const memberDiv = document.createElement("div");
  memberDiv.innerHTML = `
    <p>Name: ${member.name}</p>
    <p>Role: ${member.role}</p>
    <p>Photo: ${member.photo}</p>
  `;
  teamContainer.appendChild(memberDiv);
});

// BONUS 1

team.forEach(member => {
   // Creazione della struttura per ogni membro del team
  const memberDiv = document.createElement("div");
  memberDiv.innerHTML = `
    <p>Name: ${member.name}</p>
    <p>Role: ${member.role}</p>
    <img src="./img/${member.photo}" alt="${member.name}" />
  `;
  // Aggiunta della struttura al container principale
  teamContainer.appendChild(memberDiv);
});

// BONUS 2

team.forEach(member => {
   // Creazione della struttura per ogni membro del team
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("team-member");
  memberDiv.innerHTML = `
    <img src="./img/${member.photo}" alt="${member.name}" />
    <h3>${member.name}</h3>
    <p>${member.role}</p>
  `;
  // Aggiunta della struttura al container principale
  teamContainer.appendChild(memberDiv);
});