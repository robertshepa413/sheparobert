export const profile = {
  name: "Shepa Robert",
  role: "Civil Engineer",
  location: "Ubungo, Dar es Salaam, Tanzania",
  phoneE164: "+255658468692",
  email: "sheparobert@gmail.com",
  summary:
    "Civil Engineer with a degree from St. Joseph University in Tanzania, skilled in structural design, architectural drawings, and drafting for construction projects. Experienced with engineering software including AutoCAD and Prota Structural Design for designing and producing building plans. Hardworking, quick to learn, and effective at collaborating with teams on construction projects.",
  education: [
    {
      title: "Bachelor of Engineering (B.E) – Civil Engineering",
      institution: "St. Joseph University In Tanzania",
      location: "Dar es Salaam, Tanzania"
    }
  ],
  technicalSkills: [
    "AutoCAD (2D Drafting)",
    "Architectural Design",
    "Prota Structural Design",
    "Reinforced Concrete Design",
    "Structural Detailing (Slabs, Beams, Columns)",
    "Quantity Estimation"
  ],
  professionalSkills: [
    "Construction planning",
    "Problem solving",
    "Team collaboration",
    "Communication skills",
    "Project coordination"
  ],
  projects: [
    {
      title: "Residential Building Structural Drawings",
      location: "Dar es Salaam",
      bullets: [
        "Preparation of structural drawings for residential buildings",
        "Reinforced concrete detailing (slabs, beams, columns)",
        "Architectural planning and layout design"
      ]
    }
  ],
  languages: ["English – Good", "Swahili – Fluent"],
  references: "Available upon request."
} as const;

export const contact = {
  telHref: `tel:${profile.phoneE164.replace(/\s+/g, "")}`,
  whatsappHref: `https://wa.me/${profile.phoneE164.replace("+", "")}`
} as const;

