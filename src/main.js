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

const HT = {
    ready(hydrated) {
        $(window).load(() => {
            setTimeout(() => {
                $("body").show()
                $("html").removeClass("loading")
                // snapshot doesnt work with particles js
                if (hydrated) {
                    particlesJS.load("introImage", "./assets/particlesBusted.json", () => {
                        console.log("callback - particles.js config loaded")
                    })
                }
            }, 100)
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
            console.log("hydrated")
            ReactDOM.hydrate(
                appElement,
                appTarget)
        } else {
            console.log("not hydrated")
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
