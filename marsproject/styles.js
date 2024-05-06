function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}

function changeImage(imageFile) {
    var imgElement = document.getElementById('menu-image');
    imgElement.src = imageFile;
    imgElement.alt = imageFile;
}

const rovers = [
    { name: "Curiosity", flag: "images/USA.webp", image: {
        low: "resize/Curiosity.jpeg",
        high: "images/Curiosity.jpeg"
    }, text:"Launched by NASA on November 26, 2011, the Curiosity rover's mission was to explore the Gale Crater on Mars as part of the Mars Science Laboratory (MSL) mission. Landing on Mars on August 6, 2012, Curiosity was designed to assess whether Mars ever had the environmental conditions to support microbial life. The rover is equipped with advanced scientific instruments, including a laser-firing instrument to vaporize rock surfaces and analyze the composition, and a mobile laboratory to study rocks and soils. Curiosity has made significant discoveries, such as the presence of ancient water flows and complex organic compounds, providing invaluable insights into the planet's geology and climate history." },
    { name: "Perseverance", flag: "images/USA.webp", image: {
        low: "resize/Perservance2.jpg",
        high: "images/Perservance2.jpg"
    }, text: "NASA's Perseverance rover, part of the Mars 2020 mission, touched down in the Jezero Crater on February 18, 2021. Its primary goal is to search for signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth. Perseverance is an improved version of the Curiosity rover, featuring a more robust mobility system and enhanced instruments. Among these are the PIXL and SHERLOC instruments, which can micro-map chemical and organic compounds. The rover also carries Ingenuity, the first helicopter to fly on another planet, demonstrating the feasibility of powered flight in Mars' thin atmosphere." },
    { name: "Zhurong", flag: "images/China.png", image: {
        low: "resize/Zhurong.jpeg",
        high: "images/Zhurong.jpeg"
    }, text: "China's Zhurong rover, part of the Tianwen-1 mission, made its historic landing on Mars in May 2021. Named after the Chinese mythological god of fire, Zhurong marks a significant milestone as it represents China’s first Mars rover mission, successfully making China the second country to land and operate a rover on Mars. The rover landed in the Utopia Planitia, a vast plain within the largest recognized impact basin on Mars, where it is tasked with investigating Martian surface geology and atmosphere. Equipped with six scientific instruments, including ground-penetrating radar, a magnetic field detector, and weather measurement devices, Zhurong's findings are expected to offer substantial insights into the planet's meteorology and geophysical characteristics." }
];

let currentRoverIndex = 0;

function changeRover(direction) {
    currentRoverIndex += direction;
    if (currentRoverIndex >= rovers.length) {
        currentRoverIndex = 0;
    } else if (currentRoverIndex < 0) {
        currentRoverIndex = rovers.length - 1;
    }
    updateRoverDisplay();
}

function updateRoverDisplay() {
    const rover = rovers[currentRoverIndex];
    const imageElement = document.getElementById('rover-image');
    document.getElementById('rover-name').textContent = rover.name;
    document.getElementById('rover-flag').src = rover.flag;
    document.getElementById('rover-flag').alt = 'Flag of ' + rover.name;
    document.getElementById('rover-image').src = rover.image.high;
    imageElement.srcset = `
        ${rover.image.low} 800w,
        ${rover.image.high} 1600w
    `;
    document.getElementById('rover-image').alt = 'Image of ' + rover.name;
    document.getElementById('rover-text').textContent = rover.text;
}

const moons = [
    { name: "Phobos", image: {
        low: "resize/Phobos.jpeg",
        high: "images/Phobos.jpeg"
    }, text: "Phobos, the larger of Mars' two moons, is a mysterious, irregularly shaped celestial body, closely orbiting the Red Planet. Measuring about 22 kilometers across at its widest, Phobos is so close to Mars that it orbits the planet faster than Mars rotates, completing an orbit in just over 7 hours. This proximity causes it to rise in the west and set in the east, presenting a unique phenomenon in our solar system. The surface of Phobos is characterized by a dusty, gray landscape, heavily cratered and grooved with deep ridges and chains of craters, possibly caused by tidal forces from Mars. The most prominent feature on Phobos is Stickney Crater, a large impact crater that bears evidence of the moon's violent history. Phobos is gradually spiraling inward towards Mars, and it is expected to either crash into Mars or break apart into a ring system in the distant future." },
    { name: "Deimos", image: {
        low: "resize/deimos.jpeg",
        high: "images/deimos.jpeg"
    }, text: "Deimos, the smaller and more distant of Mars' two moons, presents a stark contrast to its sibling, Phobos. With a diameter of only about 12 kilometers, Deimos orbits Mars at a leisurely pace, taking about 30 hours to complete one orbit. This slow movement means Deimos appears to move very slowly across the Martian sky. The moon's surface is less cratered than Phobos, covered in a layer of regolith (loose dust and rock), which softens the appearance of its landscape. The regolith is believed to be a result of constant bombardment over millions of years, which has pulverized the surface and filled in larger impact sites. Deimos is also believed to be a captured asteroid, similar to Phobos, featuring a composition that includes carbon-rich rock and ice. Its smoother, darker appearance and gentler craters give Deimos an eerily calm demeanor, standing as a silent sentinel in the Martian system." }
];

let currentMoonIndex = 0;

function changeMoon(direction) {
    currentMoonIndex += direction;
    if (currentMoonIndex >= moons.length) {
        currentMoonIndex = 0;
    } else if (currentMoonIndex < 0) {
        currentMoonIndex = moons.length - 1;
    }
    updateMoonDisplay();
}

function updateMoonDisplay() {
    const moon = moons[currentMoonIndex];
    const imageElement = document.getElementById('moon-image');
    document.getElementById('moon-name').textContent = moon.name;
    document.getElementById('moon-image').src = moon.image.high;
    imageElement.srcset = `
        ${moon.image.low} 800w,
        ${moon.image.high} 1600w
    `;
    document.getElementById('moon-image').alt = 'Image of ' + moon.name;
    document.getElementById('moon-text').textContent = moon.text;
}