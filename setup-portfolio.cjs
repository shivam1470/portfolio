const fs = require("fs");
const path = require("path");

// Map common files/extensions to tech
const techMap = {
  "package.json": "Node.js / JavaScript / TypeScript",
  "tsconfig.json": "TypeScript",
  "next.config.js": "Next.js",
  "angular.json": "Angular",
  "vue.config.js": "Vue.js",
  "requirements.txt": "Python",
  "Gemfile": "Ruby / Rails",
  "pom.xml": "Java / Maven",
  "Dockerfile": "Docker",
  ".env": "Environment variables",
  ".eslintrc.js": "ESLint",
  ".prettierrc": "Prettier",
};

function detectTech(files) {
  const detected = new Set();
  files.forEach((file) => {
    if (techMap[file]) {
      detected.add(techMap[file]);
    } else {
      // Detect based on extension
      if (file.endsWith(".ts")) detected.add("TypeScript");
      if (file.endsWith(".js")) detected.add("JavaScript");
      if (file.endsWith(".jsx")) detected.add("React.js");
      if (file.endsWith(".tsx")) detected.add("React.js / TypeScript");
      if (file.endsWith(".html")) detected.add("HTML");
      if (file.endsWith(".css") || file.endsWith(".scss")) detected.add("CSS / SCSS");
    }
  });
  return Array.from(detected);
}

function scanDir(dirPath) {
  const structure = { path: dirPath, folders: [], files: [], tech: [] };

  const items = fs.readdirSync(dirPath);
  structure.files = items.filter((item) =>
    fs.statSync(path.join(dirPath, item)).isFile()
  );

  structure.tech = detectTech(structure.files);

  const folders = items.filter((item) =>
    fs.statSync(path.join(dirPath, item)).isDirectory()
  );

  folders.forEach((folder) => {
    structure.folders.push(scanDir(path.join(dirPath, folder)));
  });

  return structure;
}

// Change this path to your project root
const projectRoot = path.join(__dirname, "src");

const projectStructure = scanDir(projectRoot);

// Pretty print
console.log(JSON.stringify(projectStructure, null, 2));