import { Briefcase, Code, User } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="flex flex-col items-center gap-12">
          <div className="space-y-6 max-w-xl text-center">
            <p className="text-muted-foreground text-left">
              I'm currently a senior studying computer science at the University of Michigan, Ann Arbor, and I 
              plan to pursue a Master's degree in computer science after graduation. My interests are in perception and computer vision 
              for autonomous and driver assistance systems.
            </p>
            <p className="text-muted-foreground text-left">
              My experience includes interning at Subaru, where I worked on computer vision projects for driver assistance systems and supported autonomous research 
              vehicle development. I also worked as a research assistant at the University of Michigan 
              Transportation Research Institute, contributing to a study on how horizontal curves affect
              the visual demand of driving, examining vehicle safety from a human factors perspective.
            </p>
            <p className="text-muted-foreground text-left">
              I'm interested in current challenges that surround deep-learning based computer vision models
              in perception, especially in real-world conditions. My goal is to work in the automotive field, particularly in vehicle safety, contributing to 
              improving the reliability of perception systems in intelligent vehilcles and ensuring greater road safety.
            </p>
          
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="space-button"> Contact </a>
              <a 
                href="" 
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                See Resume
              </a>
            </div>
          </div>

          {/*<div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> title </h4>
                  <p className="text-muted-foreground">desc</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">title </h4>
                    <p className="text-muted-foreground">desc</p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">title</h4>
                    <p className="text-muted-foreground">desc</p>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};