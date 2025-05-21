
const users = [
  { id: 1, name: { first: "ravi", last: "theja" }, email: "ravi@example.com" },
  { id: 2, name: { first: "raju", last: "gn" }, email: "raju@example.com" },
  { id: 3, name: { first: "sandeep", last: "kumar" }, email: "sandeep@example.com" },
  { id: 4, name: { first: "kiran", last: "kumar" }, email: "kiran@example.com" },
];


function getNestedValue(obj, path) {
  return path.split('.').reduce((o, key) => (o ? o[key] : ""), obj);
}

function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

function throttle(fn, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

function highlight(text, term) {
  const regex = new RegExp(`(${term})`, 'gi');
  return text.replace(regex, '<span class="highlight">$1</span>');
}


function deepSearch(data, fields, query) {
  return data.filter(item => 
    fields.some(field => {
      const value = getNestedValue(item, field);
      return value.toLowerCase().includes(query.toLowerCase());
    })
  );
}

function renderDropdown(results, fields, query) {
  const dropdown = document.getElementById("dropdown");
  dropdown.innerHTML = "";

  if (!query.trim()) return;

  results.forEach(item => {
    const matchField = fields.find(field =>
      getNestedValue(item, field).toLowerCase().includes(query.toLowerCase())
    );
    const value = getNestedValue(item, matchField);
    const highlighted = highlight(value, query);

    const div = document.createElement("div");
    div.className = "dropdown-item";
    div.innerHTML = highlighted;
    dropdown.appendChild(div);
  });
}

const input = document.getElementById("searchInput");

const handleSearch = () => {
  const query = input.value;
  const results = deepSearch(users, ["name.first", "name.last", "email"], query);
  renderDropdown(results, ["name.first", "name.last", "email"], query);
};

input.addEventListener("input", debounce(handleSearch, 300));

window.addEventListener("resize", throttle(() => {
  console.log("Window resized at", new Date().toLocaleTimeString());
}, 1000));

window.addEventListener("scroll", throttle(() => {
  console.log("Window scrolled at", new Date().toLocaleTimeString());
}, 1000));
