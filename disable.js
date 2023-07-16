(function () {
    if (window.Event) document.captureEvents(Event.MOUSEUP);

    function nocontextmenu() {
        (event.cancelBubble = true), (event.returnValue = false);

        return false;
    }

    function norightclick(e) {
        if (window.Event) {
            if (e.which == 2 || e.which == 3) return false;
        } else if (event.button == 2 || event.button == 3) {
            (event.cancelBubble = true), (event.returnValue = false);
            return false;
        }
    }

    if (document.layers) document.captureEvents(Event.MOUSEDOWN);

    document.oncontextmenu = nocontextmenu;
    document.onmousedown = norightclick;
    document.onmouseup = norightclick;
    document.onkeydown = function (e) {
        if (event.keyCode == 123) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
            return false;
        }
        if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
            return false;
        }
    };
    document.addEventListener(
        "wheel",
        function touchHandler(e) {
            if (e.ctrlKey) {
                e.preventDefault();
            }
        },
        {passive: false},
    );
    document.body.addEventListener(
        "wheel",
        (e) => {
            if (e.ctrlKey) e.preventDefault();
        },
        {passive: false},
    );
    window.addEventListener(
        "keydown",
        function (e) {
            if ((e.ctrlKey || e.metaKey) && (e.which === 61 || e.which === 107 || e.which === 173 || e.which === 109 || e.which === 187 || e.which === 189)) {
                e.preventDefault();
            }
        },
        {passive: false},
    );
    const handleWheel = function (e) {
        if (e.ctrlKey || e.metaKey) e.preventDefault();
    };
    window.addEventListener("wheel", handleWheel, {passive: false});
})();
