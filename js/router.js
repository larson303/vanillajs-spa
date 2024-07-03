document.addEventListener('click', (e) => {
    const {target} = e;

    if (!target.matches("nav a")) {
        return;
    }
    e.preventDefault();
    urlRoute(e);
});

const urlRoutes = {
    404: {
        title: "Page not found",
        template: "/pages/404.html",
        description: "The page you are looking for does not exist.",
    },
    "/": {
        title: "Home",
        template: "/pages/home.html",
        description: "The home page.",
    },
    "/about": {
        title: "About",
        template: "/pages/about.html",
        description: "The about page.",
    },

    "/blog": {
        title: "Blog",
        template: "/pages/blog.html",
        description: "The blog page.",
    },
};

const urlRoute = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    urlLocationHandler();
};

const urlLocationHandler = async () => {
    let location = window.location.pathname;
    if (location.length == 0)  {
        location = "/";
    }
    const route = urlRoutes[location] || urlRoutes[404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("page-container").innerHTML = html;
};

window.onpopstate = urlLocationHandler;
window.route = urlRoute;
urlLocationHandler();