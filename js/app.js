/**
* @description Gets Nav items by looking for any HTML that has class nav-head.
*/
function getNavItems() {
    const items = document.getElementsByClassName("nav-head");
    return items;
}


/**
* @description Adds items to nav bar
* @constructor
* @param {string} navItems -  The items to add to the nav bar
*/
function createNavBarEntries(navItems) {
    let nbl = document.getElementById("nav-list"); //Select Navbar
    for (const item of navItems) {
        const li = document.createElement("li"); // Create a li element
        li.innerText = item.innerText; // set the inner text to match the section
        nbl.appendChild(li); // Append li to navbar
    }
}

/**
* @description makes scroll between headings smooth
*/
function smoothScroll() {
    const liItems = document.getElementsByTagName("li");
    for (const li of liItems) {
        li.addEventListener("click", function () {
            const scrollToElement = document.getElementById(`${li.innerText.toLowerCase()}`);
            scrollToElement.scrollIntoView({ behavior: "smooth", block: "start" })
        })
    }
}

/**
* @description highlights a section
*/

function highlight() {
    const sections = document.getElementsByTagName("section");
    const nav = document.getElementsByClassName("nav-bar")[0]
    for (const section of sections) {
        window.addEventListener("scroll", function () {
            if (isInViewport(section)) {
                section.setAttribute("class", "highlight");
            }
            else {
                section.removeAttribute("class", "highlight")
            }
        });
    }
}

/**
* @description Checks if an element is the view port.
* @param element - The element to check in view port.
*   Source: https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function hideNav() {
    const nav = document.getElementsByClassName("nav-bar")[0];
    nav.hidden = true;

}

/**
 * @description calls all required functions.
 */
function main() {
    const navItems = getNavItems();
    createNavBarEntries(navItems);
    smoothScroll();
    highlight();

}

main();
