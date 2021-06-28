/* jshint esversion: 6 */
"use strict";

window.onload = function () {

    const defaultAnimationSpeed = 250;
    const turboAnimationSpeed = 50;
    let timer;

    // set events
    const startElement = document.getElementById("start");
    startElement.onclick = startAnimation;

    const stopElement = document.getElementById("stop");
    stopElement.onclick = stopAnimation;

    const animationElement = document.getElementById("animation");
    animationElement.onchange = changeAnimation;

    const fontsizeElement = document.getElementById("fontsize");
    fontsizeElement.onchange = changeFontSize;

    const textAreaElement = document.getElementById("text-area");

    document.getElementById("turbo").addEventListener("change", function () {
        if (document.getElementById("start").hasAttribute("disabled")) {
            clearInterval(timer);
            const animation = document.getElementById("animation").value;
            const timeout = this.checked ? turboAnimationSpeed : defaultAnimationSpeed;
            timer = createAnimationInterval(animation, timeout);
        }
    });

    function startAnimation() {
        startElement.disabled = true;
        stopElement.disabled = false;
        animationElement.disabled = true;
        clearInterval(timer);

        const animation = animationElement.value;
        const isTurbo = document.getElementById("turbo").checked;
        const timeout = isTurbo ? turboAnimationSpeed : defaultAnimationSpeed;
        timer = createAnimationInterval(animation, timeout);
    }

    const createAnimationInterval = (animation, timeout) => {
        const frames = ANIMATIONS[animation].split("=====");
        let loopIndex = -1;
        return setInterval(function () {
            ++loopIndex;
            if (loopIndex >= frames.length) {
                loopIndex = 0;
            }
            textAreaElement.value = frames[loopIndex];
        }, timeout);
    };

    function stopAnimation() {
        stopElement.disabled = true;
        startElement.disabled = false;
        animationElement.disabled = false;
        clearInterval(timer);
    }

    function changeAnimation() {
        const animation = animationElement.value;
        textAreaElement.value = ANIMATIONS[animation];
    }

    function changeFontSize() {
        textAreaElement.style.fontSize = fontsizeElement.value;
    }
}