import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Semantic Segmentation of Road Scenes",
    description: "Implemented the UNet model for semantic segmentation of road scenes. Built a custom dataset for preprocessing and loading images, implemented Dice loss and IoU metrics, and wrote training and evaluation functions, tracking both per-class and overall performance.",
    image: "/personal_website/projects/proj1.png",
    tags: ["Python", "PyTorch", "OpenCV", "PyTorch Custom Datasets", "Image Preprocessing", "UNet", "Model Training", "Model Evaluation"],
    githubUrl: "https://github.com/judithwu/road_semseg"
  },
  {
    id: 2,
    title: "Image Style Transfer",
    description: "Replicated the CycleGAN architecture for unpaired image-to-image translation, training a pair of generator and discriminator networks to transform regular photos into Monet style paintings. Implemented adversarial, cycle consistency, and identity losses and constructed the full training loop coordinating two generators and two discriminators, and evaluated performance through visualizations and metric tracking.",
    image: "/personal_website/projects/proj2.png",
    tags: ["Python", "PyTorch", "PyTorch Custom Datasets", "Image Preprocessing", "Generative Adversarial Networks", "CycleGAN", "Model Training", "Model Evaluation"],
    githubUrl: "https://github.com/judithwu/image-style-transfer/tree/master"
  },
  {
    id: 3,
    title: "Forward and Inverse Kinematics Simulation",
    description: "Implemented forward kinematics to predict the spatial layout of the robot given a configuration of its joints, then implemented inverse kinematics using gradient descent optimization with both Jacobian Transpose and Jacobian Pseudoinverse methods. Used a custom HTML/JS robotics simulator for testing and visualizing the end-effector reaching a given point in space.",
    image: "/personal_website/projects/proj3.gif",
    tags: ["HTML", "JavaScript", "Robot Kinematics", "Gradient Descent", "Jacobian Methods", "Simulation"],
    githubUrl: "https://github.com/AutoRob-W25/kineval-stencil-judithwu/tree/master/kineval"
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> 
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some projects I have done.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div 
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"></img>

                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                        {tag}
                      </span>
                    ))}

                  </div>
                
        
                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3> 
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>    
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <ExternalLink size={20}/>
                    </a>
                    )}
                    {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300">
                        <Github size={20}/>
                    </a>
                    )}
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            className="space-button w-fit flex items-center mx-auto gap-2" 
            target="_blank"
            href="https://github.com/judithwu">
            My GitHub <ArrowRight size={16}/>
          </a>
        </div>
      </div>
    </section>
  );
};