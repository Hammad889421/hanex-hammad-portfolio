const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
document.querySelectorAll(".nav-link").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));

const skillObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.querySelectorAll(".skill-bar i").forEach(bar=>bar.style.width=bar.dataset.level+"%");skillObserver.unobserve(entry.target);}}),{threshold:.2});
const skills=document.querySelector(".skills-column");if(skills)skillObserver.observe(skills);

const sections=[...document.querySelectorAll("main section[id],#hanex")];
const navLinks=[...document.querySelectorAll(".nav-link")];
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle("active",link.getAttribute("href")==="#"+entry.target.id));}}),{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(section=>sectionObserver.observe(section));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{glow.style.left=e.clientX+"px";glow.style.top=e.clientY+"px";},{passive:true});

const projectData={
 soc:{title:"AI SOC Alert Triage System",description:"An AI-assisted security operations concept focused on helping analyze, classify and prioritize security alerts. The project is part of my cybersecurity and AI work.",tags:["AI","SOC","Cybersecurity","Alert Triage"]},
 agent:{title:"Enterprise AI Agent Platform",description:"An enterprise-oriented AI agent platform concept designed around intelligent assistance and business workflow support.",tags:["AI Agents","Enterprise","Automation"]},
 factory:{title:"AI Smart Factory Dashboard",description:"A dashboard concept focused on presenting smart-factory information and operational insights in a clear visual interface.",tags:["AI","Dashboard","Analytics"]},
 voice:{title:"Voice AI Agent for Patient Registration",description:"A voice-enabled AI agent concept designed to support patient registration workflows and improve the interaction process.",tags:["Voice AI","AI Agents","Automation"]},
 gnss:{title:"Flutter + ESP32 GNSS Mapping Application",description:"A mobile mapping application integrating Flutter with ESP32 Bluetooth connectivity for GNSS-related field data collection and visualization.",tags:["Flutter","ESP32","Bluetooth","IoT"]},
 web:{title:"Web & Business Applications",description:"A collection of web and backend development work involving application interfaces, REST APIs, database-backed workflows and custom business software.",tags:["MERN","REST APIs","SQL","Custom Software"]},
 heart:{title:"Heart Attack Prediction Using Machine Learning",description:"A data science and machine-learning project focused on exploring heart attack risk prediction from health-related input features. This project was completed as part of my data science project work.",tags:["Machine Learning","Data Science","Prediction"]}
};
const modal=document.getElementById("project-modal");
const modalTitle=document.getElementById("modal-title");
const modalDescription=document.getElementById("modal-description");
const modalTags=document.getElementById("modal-tags");
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>{const data=projectData[button.dataset.open];if(!data)return;modalTitle.textContent=data.title;modalDescription.textContent=data.description;modalTags.innerHTML=data.tags.map(tag=>`<span>${tag}</span>`).join("");modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}));
document.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
