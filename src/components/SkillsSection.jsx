import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {name: "Python", level: 95, category: "languages"},
  {name: "R", level: 95, category: "languages"},
  {name: "C/C++", level: 95, category: "languages"},
  {name: "Java", level: 95, category: "languages"},
  {name: "JavaScript", level: 95, category: "languages"},
  {name: "SQL", level: 95, category: "languages"},
  {name: "HTML/CSS", level: 95, category: "languages"},

  {name: "TensorFlow/Keras", level: 95, category: "frameworks"},
  {name: "PyTorch", level: 95, category: "frameworks"},

  {name: "Git/GitHub", level: 95, category: "tools"},
  {name: "MATLAB", level: 95, category: "tools"},
  {name: "Linux", level: 95, category: "tools"},
  {name: "Jupyter", level: 95, category: "tools"},
  {name: "Visual Studio Code", level: 95, category: "tools"},
  {name: "PyCharm", level: 95, category: "tools"}
];

const categories = ["all", "languages", "frameworks", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section 
      id="skills" 
      className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-primary"> Skills </span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button 
                key={key} 
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                )}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
              <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                <div className="text-left mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
};