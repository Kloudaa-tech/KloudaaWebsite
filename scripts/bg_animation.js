async function observeObjectsOnScreen() {
    const obs1 = document.querySelector("#observer1");
    const obs2 = document.querySelector("#observer2");
    const obs3 = document.querySelector("#observer3");

    const options = {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.3, // When 50% of the target is visible
    };

    const observer = new IntersectionObserver(callback, options);

    function callback(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $('body').removeClass('bg2 bg3').addClass('bg1')
            }
        });
    }

    observer.observe(obs1);

    const observer_2 = new IntersectionObserver(callback2, options);

    function callback2(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $('body').removeClass('bg1 bg3').addClass('bg2')
            }
        });
    }

    observer_2.observe(obs2);

    const observer_3 = new IntersectionObserver(callback3, options);

    function callback3(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                $('body').removeClass('bg1 bg2').addClass('bg3')
            }
        });
    }

    observer_3.observe(obs3);
}

observeObjectsOnScreen()