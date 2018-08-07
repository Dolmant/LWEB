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

$(document).ready(() => {
    const appTarget = document.getElementById("app")
    const appElement = (
        <Provider store={store}>
            <div>
                <App />
                {/* <ReduxToastr
                    timeOut={4000}
                    newestOnTop={false}
                    preventDuplicates
                    position="top-left"
                    transitionIn="fadeIn"
                    transitionOut="fadeOut"
                    progressBar
                /> */}
            </div>
        </Provider>
    )

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
    }
})
