// @flow
import React from "react"
import ReactDOM from "react-dom"
import {render as RenderSnapShot} from "react-snapshot"
import "./scss/style.scss"
import {Provider} from "react-redux"
import ReduxToastr from "react-redux-toastr"
import store from "./DynamicReact/Redux"
import $ from "./jquery.min"
import App from "./App"

declare var particlesJS

const blockerImages = [
    "/assets/images/CRISPR.jpg",
]

const HT = {
    ready(hydrated) {
        // Ensure any blocking images are loaded, in particular the large background image on the splash screen
        let loadedCount = 0

        const onLoad = () => {
            if (loadedCount >= (blockerImages.length + 1)) {
                $("body").show()
                $("html").removeClass("loading")
                // snapshot doesnt work with particles js
                if (hydrated) {
                    particlesJS.load("introImage", "./assets/particlesBusted.json", () => {
                        console.log("callback - particles.js config loaded")
                    })
                }
            } else {
                loadedCount += 1
            }
        }
        blockerImages.forEach((imageURL) => {
            const img = new Image()
            img.onload = onLoad
            img.src = imageURL
            if (img.complete) onLoad()
        })
        $(window).load(() => {
            setImmediate(onLoad)
        })
    },

    resize() {
        if ($(window).scrollTop() === 0) {
            $(".intro-logo").css({top: (($(window).height() / 2) - 21)})
        }
    },
}

$(document).ready(() => {
    const appTarget = document.getElementById("app1")
    const appElement = (
        <Provider store={store}>
            <div>
                <App />
                <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                />
            </div>
        </Provider>
    )

    let hydrated = false
    if (appTarget) {
        if (appTarget.hasChildNodes()) {
            hydrated = true
            ReactDOM.hydrate(
                appElement,
                appTarget)
        } else {
            RenderSnapShot(
                appElement,
                appTarget)
        }
        HT.ready(hydrated)
    }
})

$(window).resize(() => {
    HT.resize()
})
