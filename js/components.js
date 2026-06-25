async function loadComponent(
    elementId,
    filePath
) {

    const response =
        await fetch(filePath);

    const html =
        await response.text();

    document.getElementById(
        elementId
    ).innerHTML = html;
}



async function initializeLayout() {


    await loadComponent(
        "header",
        appUrl("/components/header.html")
    );

    await loadComponent(
        "sidebar",
        appUrl("/components/sidebar.html")
    );

    await loadComponent(
        "footer",
        appUrl("/components/footer.html")
    );


    loadCurrentUser();

    setActiveMenu();
}



function loadCurrentUser() {

    const element =
        document.getElementById(
            "loggedInUser"
        );

    if (!element) {
        return;
    }

    element.textContent =
        getCurrentUser();
}
