import React, { useEffect, useState } from 'react';

const programmingLanguages = [
  { iconId: 'c', name: 'C' },
  { iconId: 'cpp', name: 'C++' },
  { iconId: 'java', name: 'Java' },
  { iconId: 'python', name: 'Python' },
  { iconId: 'js', name: 'JavaScript' },
  { iconId: 'ts', name: 'TypeScript' },
];

const frontendSkills = [
  { iconId: 'html', name: 'HTML5' },
  { iconId: 'css', name: 'CSS3' },
  { iconId: 'tailwind', name: 'Tailwind CSS' },
  { iconId: 'js', name: 'JavaScript' },
  { iconId: 'react', name: 'React.js' },
  { iconId: 'nextjs', name: 'Next.js' },
  { iconId: 'framer', name: 'Framer Motion' },
  { iconId: 'threejs', name: 'Three.js' },
];

const backendSkills = [
  { iconId: 'nodejs', name: 'Node.js' },
  { iconId: 'express', name: 'Express.js' },
  { iconId: 'python', name: 'FastAPI' }, // fallback to Python icon
];

const authSkills = [
  { iconId: 'jwt', name: 'JWT' }, // not supported — fallback or skip
  { iconId: 'nextjs', name: 'NextAuth.js' },
];

const dbSkills = [
  { iconId: 'mongodb', name: 'MongoDB' },
  { iconId: 'mysql', name: 'MySQL' },
];

const tools = [
  { iconId: 'git', name: 'Git' },
  { iconId: 'github', name: 'GitHub' },
  { iconId: 'vscode', name: 'VS Code' },
  { iconId: 'vite', name: 'Vite' },
];

const SkillsSection = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [selectedTab, setSelectedTab] = useState('frontend');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme === 'dark' ? 'dark' : 'light');
  }, []);

  const renderSkills = (skills) => (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-6">
      {skills.map((skill, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <img
            src={`https://skillicons.dev/icons?i=${skill.iconId}`}
            alt={skill.name}
            className="w-16 h-16"
          />
          <span className="mt-2 text-lg">{skill.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-20 px-6 md:px-12 lg:px-32" id="skills">
      <h2 className="text-3xl font-bold text-center mb-12">Skills & Stats</h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
  {/* LeetCode Stats */}
  <a
    href="https://leetcode.com/NishantKumar5"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-1/2"
  >
    <img
      src={`https://leetcard.jacoblin.cool/NishantKumar5?theme=${theme}`}
      alt="LeetCode Stats"
      className="rounded-lg shadow-md w-full hover:scale-105 transition-transform duration-300"
    />
  </a>

  {/* GitHub Stats */}
  <a
    href="https://github.com/VAIBHAVranjan1"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full md:w-1/2"
  >
    <img
      src={`https://github-readme-stats.vercel.app/api?username=VAIBHAVranjan1&show_icons=true&theme=${theme === 'dark' ? 'dark' : 'default'}`}
      alt="GitHub Stats"
      className="rounded-lg shadow-md w-full hover:scale-105 transition-transform duration-300"
    />
  </a>
</div>


      {/* Programming Languages */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 text-center">👨‍💻 Programming Languages</h3>
        {renderSkills(programmingLanguages)}
      </div>

      {/* Tabs for Other Skills */}
      <div className="border border-gray-300 p-6 rounded-xl shadow-md">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {['frontend', 'backend', 'auth', 'database', 'tools'].map((tab) => (
            <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-colors duration-300 cursor-pointer ${
              selectedTab === tab
                ? 'bg-primary'
                : 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {tab}
          </button>
          ))}
        </div>

        {selectedTab === 'frontend' && renderSkills(frontendSkills)}
        {selectedTab === 'backend' && renderSkills(backendSkills)}
        {selectedTab === 'auth' && renderSkills(authSkills)}
        {selectedTab === 'database' && renderSkills(dbSkills)}
        {selectedTab === 'tools' && renderSkills(tools)}
      </div>
    </section>
  );
};

export default SkillsSection;
