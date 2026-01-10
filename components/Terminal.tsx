import React, { useState } from "react";

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>([
    "Welcome to Shrey's Portfolio OS Terminal",
    'Type "help" for a list of commands.',
  ]);
  const [input, setInput] = useState("");

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    let response = `sh: command not found: ${cmd}`;
    let type: "normal" | "error" | "info" = "normal";

    if (cmd === "help") {
      response = "Available commands: bio, skills, github, clear, contact";
      type = "info";
    } else if (cmd === "bio") {
      response =
        "Front-end engineer focused on efficient web applications with React and Next.js.";
    } else if (cmd === "skills") {
      response =
        "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB.";
    } else if (cmd === "github") {
      response = "Opening github.com/shreykuvera...";
      type = "info";
    } else if (cmd === "contact") {
      response = "shrey.kuvera@gmail.com | 9981175111";
    } else if (cmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      type = "error";
    }

    setHistory([
      ...history,
      `shrey@portfolio:~$ ${input}`,
      `${type}:${response}`,
    ]);
    setInput("");
  };

  return (
    <div
      className="h-full w-full mono text-sm overflow-auto no-scrollbar font-medium p-4"
      style={{
        backgroundColor: "#1d2021", // Gruvbox bg0 hard
        color: "#ebdbb2", // Gruvbox fg1
      }}
    >
      {history.map((line, i) => {
        // Prompt line
        if (line.startsWith("shrey@portfolio")) {
          return (
            <div key={i} style={{ color: "#b8bb26" }}>
              {line}
            </div>
          );
        }

        // Error line
        if (line.startsWith("error:")) {
          return (
            <div key={i} style={{ color: "#fb4934" }}>
              {line.replace("error:", "")}
            </div>
          );
        }

        // Info line
        if (line.startsWith("info:")) {
          return (
            <div key={i} style={{ color: "#83a598" }}>
              {line.replace("info:", "")}
            </div>
          );
        }

        // Normal output
        return (
          <div key={i} style={{ color: "#d5c4a1" }}>
            {line}
          </div>
        );
      })}

      <form onSubmit={handleCommand} className="flex gap-2 mt-2">
        <span style={{ color: "#b8bb26" }}>shrey@portfolio:~$</span>
        <input
          autoFocus
          className="bg-transparent border-none outline-none flex-1"
          style={{ color: "#ebdbb2" }}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Terminal;
