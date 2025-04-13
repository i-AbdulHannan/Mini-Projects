const adjectives = [
    "Swift", "Bold", "Quantum", "Smart", "Pixel", "Dynamic", "Epic", "Nova", "Bright", "Silent"
  ];
  
  const nouns = [
    "Labs", "Forge", "Nest", "Works", "Hive", "Pulse", "Cloud", "Verse", "Dock", "Engine"
  ];
  
  function getRandomWord(list) {
    return list[Math.floor(Math.random() * list.length)];
  }
  
  function generateName() {
    const user = document.getElementById("username").value.trim();
    const adjective = getRandomWord(adjectives);
    const noun = getRandomWord(nouns);
    const startupName = user ? `${user}'s ${adjective}${noun}` : `${adjective}${noun}`;
    const outputBox = document.getElementById("output");
  
    outputBox.innerText = startupName;
    outputBox.style.opacity = "0";
    setTimeout(() => (outputBox.style.opacity = "1"), 100);
  }
  
  function copyName() {
    const text = document.getElementById("output").innerText;
    if (!text) return;
  
    navigator.clipboard.writeText(text)
      .then(() => {
        const btn = document.getElementById("copyBtn");
        btn.innerText = "✅ Copied!";
        setTimeout(() => (btn.innerText = "Copy to Clipboard"), 2000);
      });
  }
  
  function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById("themeIcon");
    body.classList.toggle("light");
  
    if (body.classList.contains("light")) {
      icon.innerText = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      icon.innerText = "🌙";
      localStorage.setItem("theme", "dark");
    }
  }
  
  window.onload = () => {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    if (savedTheme === "light") {
      document.body.classList.add("light");
      icon.innerText = "☀️";
    } else {
      icon.innerText = "🌙";
    }
  };
  