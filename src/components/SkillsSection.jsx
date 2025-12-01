import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  {name: "Python", category: "languages"},
  {name: "R", category: "languages"},
  {name: "C/C++", category: "languages"},
  {name: "Java", category: "languages"},
  {name: "JavaScript", category: "languages"},
  {name: "SQL", category: "languages"},
  {name: "HTML/CSS", category: "languages"},

  {name: "TensorFlow/Keras", category: "frameworks"},
  {name: "PyTorch", category: "frameworks"},
  {name: "PyBullet", category: "frameworks"},
  {name: "ROS/ROS2", category: "frameworks"},
  {name: "Gazebo", category: "frameworks"},

  {name: "Git/GitHub", category: "tools"},
  {name: "MATLAB", category: "tools"},
  {name: "Linux", category: "tools"},
  {name: "Jupyter", category: "tools"},
  {name: "Visual Studio Code", category: "tools"},
  {name: "PyCharm", category: "tools"}
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