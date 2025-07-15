
const about = document.querySelector("#about")
const mission = document.querySelector("#Mission")
const vission = document.querySelector("#vission")
const bandhig = document.querySelector("#bandhig")
const bandhig2 = document.querySelector("#bandhig2")
const core = document.querySelector("#core")
const obj = document.querySelector("#obj")
const nav = document.querySelector("#nav")
const navs = document.querySelector("#navs")
const navbar = document.querySelector("#navbar")
const navbars = document.querySelector("#navbars")


about.addEventListener("click", () =>{
about.style.background = "green",
bandhig.innerHTML = `Greenvolt Energy Solutions Co. is a dynamic and forward-thinking company established to respond to the growing demand for clean, sustainable, and affordable energy solutions in Somalia and the East African region. Founded by a team of seasoned renewable energy professionals in November 2018, the company aims to serve both the social and commercial sectors by delivering reliable and environmentally responsible energy solutions.
Our commitment is to drive the transition to renewable energy by empowering individuals, institutions, and communities through solar technology and innovative energy systems.`

mission.style.background = ""
vission.style.background = ""


})
mission.addEventListener("click", () =>{
//    navbar.classList.toggle("hidden")

mission.style.background = "green"
bandhig.innerHTML = `To become a regional leader in renewable energy solutions, transforming lives and industries by providing clean, reliable, and cost-effective energy alternatives.`;

about.style.background = ""
vission.style.background = ""

})
vission.addEventListener("click", () =>{
//    navbar.classList.toggle("hidden")

vission.style.background = "green"
bandhig.innerHTML = `To accelerate access to sustainable energy in Somalia and beyond by delivering high-quality, innovative, and customized renewable energy solutions that improve livelihoods, foster development, and preserve the environment
`;
about.style.background = ""
mission.style.background = ""

})

// objectives and core values

obj.addEventListener("click", () =>{
//    navbar.classList.toggle("hidden")

obj.style.background = "green"
bandhig2.innerHTML = `To deliver top-quality renewable energy services that meet the unique needs of our clients.
To promote green energy awareness and adoption across all sectors.
To ensure client satisfaction through a reliable delivery service and technical support.
To contribute to the economic development of Somalia by enhancing energy access.
To create jobs and develop local capacity in the renewable energy sector.

`;
about.style.background = ""
mission.style.background = ""
bandhig.innerHTML =" "

})

core.addEventListener("click", () =>{
//    navbar.classList.toggle("hidden")

core.style.background = "green"
bandhig2.innerHTML = `Design & Installation of Solar Systems
Solar Power for Off-Grid Communities
Energy Audits & Consultations
Hybrid Energy Solutions
Maintenance & After-Sales Support
Capacity Building & Training in Renewable Energy


`;
about.style.background = ""
mission.style.background = ""
bandhig.innerHTML =" "
obj.style.background = ""

})


// core values


// nav



navbar.addEventListener("click", () =>{
   nav.classList.toggle("hidden")
})


// animation

const animatedItems = document.querySelectorAll('.scroll-animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  animatedItems.forEach(item => observer.observe(item));

