function displaySkills(skillsJSON) {
  const skillsContainer = document.getElementById("skills-container");
  const techIconsDiv = document.createElement("div");
  techIconsDiv.className = "tech-icons";
  skillsContainer.appendChild(techIconsDiv);

  skillsJSON.skills.forEach((skill) => {
    const skillDiv = document.createElement("div");
    skillDiv.className = "skill";

    const skillNameDiv = document.createElement("div");
    skillNameDiv.className = "skillName";

    const skillNameSpan = document.createElement("span");
    skillNameSpan.textContent = skill.name;
    skillNameDiv.appendChild(skillNameSpan);

    const badgeSpan = document.createElement("span");
    const badge = document.createElement("img");
    const formattedSkillName = skill.name.replace(/\s+/g, "").toLowerCase();
    badge.src = `https://img.shields.io/badge/${encodeURIComponent(
      skill.category
    )}-${encodeURIComponent(
      skill.name
    )}-informational?style=flat&logo=${formattedSkillName}&logoColor=white&color=2bbc8a`;
    badge.alt = `${skill.name} Badge`;
    badgeSpan.appendChild(badge);
    skillNameDiv.appendChild(badgeSpan);

    skillDiv.appendChild(skillNameDiv);

    const starsDiv = document.createElement("div");
    starsDiv.className = "stars";

    for (let i = 1; i <= 5; i++) {
      const icon = document.createElement("ion-icon");
      icon.setAttribute("name", i <= skill.rating ? "star" : "star-outline");
      starsDiv.appendChild(icon);
    }

    skillDiv.appendChild(starsDiv);
    techIconsDiv.appendChild(skillDiv);
  });
}

const skillsJSON = {
  skills: [
    { category: "Code", name: "Python", rating: 5 },
    { category: "Code", name: "JavaScript", rating: 4 },
    { category: "Code", name: "HTML5", rating: 5 },
    { category: "Code", name: "CSS3", rating: 4 },
    { category: "Framework", name: "React", rating: 4 },
    { category: "Framework", name: "Express", rating: 4 },
    { category: "Framework", name: "Angular", rating: 4 },
    { category: "Framework", name: "Node.js", rating: 4 },
    { category: "Tools", name: "Git", rating: 5 },
    { category: "Code", name: "C", rating: 4 },
    { category: "Code", name: "C++", rating: 4 },
  ],
};

displaySkills(skillsJSON);

// Path: script.js
