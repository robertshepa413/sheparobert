export const profile = {
  name: "Shepa Robert",
  role: "Civil Engineer",
  location: "Ubungo, Dar es Salaam, Tanzania",
  phoneE164: "+255658468692",
  email: "sheparobert@gmail.com",
  summary:
    "Civil Engineer mwenye shahada kutoka St. Joseph University in Tanzania mwenye ujuzi katika structural design, architectural drawings na drafting ya miradi ya ujenzi. Nina uzoefu wa kutumia software za engineering kama AutoCAD na Prota Structural Design kwa ajili ya kubuni na kuchora ramani za majengo. Nina uwezo wa kufanya kazi kwa bidii, kujifunza haraka na kushirikiana na timu katika miradi ya ujenzi.",
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
  languages: ["Swahili – Fluent", "English – Good"],
  references: "Available upon request."
} as const;

export const contact = {
  telHref: `tel:${profile.phoneE164.replace(/\s+/g, "")}`,
  whatsappHref: `https://wa.me/${profile.phoneE164.replace("+", "")}`
} as const;

