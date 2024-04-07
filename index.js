const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

let btts = document.getElementById("btts");
let btt_1 = document.getElementById("why_react");
let btt_2 = document.getElementById("core_fea");
let btt_3 = document.getElementById("realated_res");
let ul_list = document.getElementById("ul_list");

function displayContent(items) {
  let listcontent = "";
  for (const item of items) {
    listcontent += `<li>${item}</li>`;
  }
  ul_list.innerHTML = "";
  ul_list.innerHTML = listcontent;
}

function highlisghtButton(btn) {
  btt_1.classList.remove('active')
  btt_2.classList.remove('active')
  btt_3.classList.remove('active')
  btn.classList.add('active')
}
function handleClick(event){
    const btnId = event.target.id;
    highlisghtButton(event.target);
    if (btnId == 'why_react' ){
        displayContent(content[0])
    } else if (btnId == 'core_fea'){
        displayContent(content[1])
    }else{
        displayContent(content[2])
    }
}

displayContent(content[0]);

btt_1.addEventListener("click", handleClick); // Corrected
btt_2.addEventListener("click", handleClick);
btt_3.addEventListener("click", handleClick);