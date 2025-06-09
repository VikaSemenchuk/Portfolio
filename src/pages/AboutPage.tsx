import { motion } from "framer-motion";
import { 
  Code, 
  Users, 
  Globe, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin,
  MapPin,
  Calendar
} from "lucide-react";
// import { ProjectSlider } from "@/components";
import AnimeAvatar from "@/assets/anime-avatar.png"; 

import { useTranslation } from "react-i18next";

const AboutPage = () => {
  // const { t: tCommon } = useTranslation('common');
  const { t: tPages } = useTranslation('pages');
  
  const techSkills = tPages('about.skills.technical', { returnObjects: true }) as string[];
  const softSkills = tPages('about.skills.soft', { returnObjects: true }) as string[];
  const languages = tPages('about.skills.languages', { returnObjects: true }) as string[];
  const education = tPages('about.education', { returnObjects: true }) as {
    program: string;
    institution: string;
    dates: string;
  }[];
  const contacts = tPages('about.contacts', { returnObjects: true }) as {
    email: string;
    github: string;
    linkedin: string;
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero секція */}
      <motion.section 
        className="section pt-8 pb-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              
              {/* Контент */}
              <div className="lg:col-span-2 text-center lg:text-left space-y-6">
                <motion.h1 
                  className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {tPages("about.name")}
                </motion.h1>
                
                <motion.h2 
                  className="text-xl md:text-2xl text-accent font-medium mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {tPages("home.hero.title")}
                </motion.h2>
                
                <motion.p 
                  className="text-lg md:text-xl text-text-secondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {tPages("about.intro")}
                </motion.p>
              </div>

             
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0, rotateY: 20 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative group"
                >
                 
                  <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent-hover/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300" />
                  
                
                  <div className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                  
                    <div className="relative w-full h-full rounded-full overflow-hidden shadow-soft-lg group-hover:shadow-soft-lg transition-all duration-300">
                      <img 
                        src={AnimeAvatar}
                        alt="Viktoriia Semenchuk - Anime Style Portrait"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                   
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    
                   
                    <div className="absolute inset-0 rounded-full border-4 border-white/20 group-hover:border-accent/30 transition-all duration-300" />
                    
                   
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-accent-hover rounded-full border-2 border-background shadow-lg animate-pulse" 
                         style={{ animationDelay: '1s' }} />
                  </div>
                  
                
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-400 rounded-full border-4 border-background shadow-lg">
                    <div className="absolute inset-1 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

   
      <motion.section 
        className="section py-12 bg-surface"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.a
                href={`mailto:${contacts.email}`}
                className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Mail className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-text-secondary break-all">{contacts.email}</p>
              </motion.a>

              <motion.a
                href={contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Github className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">GitHub</h3>
                <p className="text-sm text-text-secondary">VikaSemenchuk</p>
              </motion.a>

              <motion.a
                href={contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-background rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Linkedin className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <p className="text-sm text-text-secondary">Connect with me</p>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* <ProjectSlider /> */}

      <motion.section 
        className="section py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
              >
                
                <motion.div 
                  className="bg-surface p-8 rounded-2xl shadow-soft"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {tPages("about.skills.techTitle")}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {techSkills.map((skill, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-3 flex-shrink-0" />
                        <span className="text-text-secondary">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              
                <motion.div 
                  className="bg-surface p-8 rounded-2xl shadow-soft"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {tPages("about.skills.softTitle")}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {softSkills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center p-4 bg-background rounded-lg min-h-[3rem]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-sm font-medium leading-tight break-words">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

            
              <motion.div 
                className="space-y-8"
                variants={containerVariants}
              >
              
                <motion.div 
                  className="bg-surface p-8 rounded-2xl shadow-soft"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {tPages("about.skills.languagesTitle")}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {languages.map((lang, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center p-4 bg-background rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <MapPin className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                        <span>{lang}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

              
                <motion.div 
                  className="bg-surface p-8 rounded-2xl shadow-soft"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mr-4">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      {tPages("about.educationTitle")}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {education.map((edu, idx) => (
                      <motion.div 
                        key={idx}
                        className="relative pl-6 border-l-2 border-accent/20 last:border-l-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full" />
                        <div className="pb-6">
                          <h4 className="font-bold text-lg mb-2">{edu.program}</h4>
                          <p className="text-text-secondary mb-1">{edu.institution}</p>
                          <div className="flex items-center text-sm text-accent">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.dates}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;
