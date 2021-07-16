// Gets a list of all nav items
function getNavItems() {
    const items = document.getElementsByClassName("nav-head");
    return items;
}

function createNavBarEntries(navItems) {
    let nbl = document.getElementById("nav-list"); //Select Navbar
    for (const item of navItems) {
        const li = document.createElement("li"); // Create a li element
        li.innerText = item.innerText; // set the inner text to match the section
        nbl.appendChild(li); // Append li to navbar
    }
}


function smoothScroll() {
    const liItems = document.getElementsByTagName("li");
    for (const li of liItems) {
        li.addEventListener("click", function () {
            const scrollToElement = document.getElementById(`${li.innerText.toLowerCase()}`);
            scrollToElement.scrollIntoView({ behavior: "smooth", block: "start" })
        })
    }
}

function highlight() {
    const sections = document.getElementsByTagName("section");
    for (const section of sections) {
        window.addEventListener("scroll", function () {
            // console.log(section.)
            if (isInViewport(section)) {
                section.setAttribute("class", "highlight");
            }
            else {
                section.removeAttribute("class", "highlight")
            }
        });
    }
}


// Source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
function isInViewport(element) {
    console.log(element)
    const rect = element.getBoundingClientRect();
    console.log(rect.top)
    // console.log(window.innerHeight)
    // console.log(document.documentElement.clientHeight)
    // console.log(window.innerWidth)
    // console.log(document.documentElement.clientWidth)
    console.log(rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function main() {
    const navItems = getNavItems();
    createNavBarEntries(navItems);
    smoothScroll();
    highlight();

}

main();
