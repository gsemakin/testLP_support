document.addEventListener("DOMContentLoaded", () => {
    const control = $(".js-acc-contr");
    const content = $(".js-acc-content");

    $(control).on("click", accordionHandler);
    function accordionHandler() {
        $(this).parent().siblings().removeClass("is-open");
        $(control).not($(this)).next().slideUp(500);
        $(control).attr("aria-expanded", false);
        $(content).attr("aria-hidden", true);
        $(this).parent(".js-e-accordion").toggleClass("is-open");
        $(this).next().slideToggle(500);

        if ($(this).parent(".js-e-accordion").hasClass("is-open")) {
            $(this).attr("aria-expanded", true);
            $(this).next().attr("aria-hidden", false);
        }
    }

});
