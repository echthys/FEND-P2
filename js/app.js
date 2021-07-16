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
    console.log(liItems);
    for (const li of liItems) {
        console.log(`#${li.innerText}`);
        li.addEventListener("click", function () {
            console.log(`#${li.innerText.toLowerCase()}`);
            const scrollToElement = document.getElementById(`${li.innerText.toLowerCase()}`);
            scrollToElement.scrollIntoView({ behavior: "smooth", block: "start" })
        })
    }
}



function main() {
    const navItems = getNavItems();
    createNavBarEntries(navItems);
    smoothScroll();

}

main();
