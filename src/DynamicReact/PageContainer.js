// @flow
import {connect} from "react-redux"
import React from "react"
import Slider from "react-slick"
import Checkout from "./../Shop/Checkout/Checkout"
import {category} from "./../consts"
import {actionCreators} from "./Actions"

type ButtonProps = {}

class LeftNavButton extends React.Component<ButtonProps> {
    render() {
        return <button {...this.props}><div className="slick-next-div" /></button>
    }
}

class RightNavButton extends React.Component<ButtonProps> {
    render() {
        return <button {...this.props}><div className="slick-prev-div" /></button>
    }
}

type Props = {
    list: any,
    onImageClick: number => void,
    category: string,
    page: string,
};

const PageContainer = (props: Props) => {
    const smallScreen = window.innerWidth > 900

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: smallScreen ? 4 : 2,
        slidesToScroll: 1,
        arrows: true,
        lazyLoad: false,
        autoplay: true,
        autoplaySpeed: 10000,
    }

    const listItems = (
        <ul className="projects">
            {props.list.map(item =>
                <li key={item.key} onClick={() => props.onImageClick(item.item_number)}>
                    <div className="img-wrap">
                        <img alt="It's not loading!" src={item.thumbs_src.toString()} />
                    </div>
                </li>,
            )}
        </ul>
    )

    const listCaruosel = props.list.map(item =>
        <div key={item.item_number.toString()} className="carousel-img-wrap">
            <div
                style={{
                    backgroundImage: `url("${item.thumbs_src.toString()}")`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "50vh",
                    width: smallScreen ? "20vw" : "40vw",
                }}
            />
        </div>,
    )

    if (props.page === "home") {
        return (
            <div>
                <div className="sidescroller">
                    <Slider {...settings} nextArrow={<LeftNavButton />} prevArrow={<RightNavButton />}>
                        { listCaruosel }
                    </Slider>
                </div>
                <div className="desc_holder">
                    <div className="desc_text">
                        <div>
                            <img alt="Not found" src="./assets/images/LeotideIcon-min.png" />
                        </div>
                        <h2>Hello!</h2>
                        I am Leonie (Leo) Herson, a multi-discliplinary, multi-talented and multi-limbed masters student from the University of Technology Sydney engaging in both<br />
                        <br />
                        <span className="pink"><b>Science</b></span>{"   and     "}<span className="blue"><b>Design</b></span><br />
                        <span className="pink">(Research) </span><span className="blue">(Animation/illustration)</span><br />
                        <img alt="Not found" src="./assets/icons/bubbles.png" /><br />
                        <span className="red"><b>Biomedical animation/Scientific illustration/data visulisation/communication</b></span><br />
                        Whilst following my passion as a freelance scientific illustrator!
                    </div>
                    <div className="desc_text">
                        <h2>News!</h2>
                        <div className="news">
                            Beautiful and dangerous: animating deadly viruses at Vivid Sydney <strong><a rel="noopener noreferrer" target="_blank" href="https://blog.csiro.au/beautiful-and-dangerous-animating-deadly-viruses-at-vivid-sydney/">here!</a></strong>
                            <br />
                            Mastering biomedical science by design <strong><a rel="noopener noreferrer" target="_blank" href="http://newsroom.uts.edu.au/news/2017/10/mastering-biomedical-science-design">here!</a></strong>
                        </div>
                    </div>
                    <div className="demoreel">
                        <h2>Check out the demo reel below!</h2>
                        <video preload="none" autoPlay="" loop="" controls="1">
                            <source src="./assets/images/LHDemoReel18.mp4" type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="desc_text last-element">
                        <h2>{"Interested in a commission or purchasing a print?"}</h2>
                        {"Please use the \"CONTACT ME!\" button on the bottom left of the screen to make an enquiry:"}<br />
                        <div className="left">
                            <span className="underline">For a commission:</span><br />
                            - What type of comission? 2D/3D animation, illustration, 3D model or sketch?<br />
                            - Subject matter, size, black/white or colour, etc<br />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    if (props.category === "CHECKOUT") {
        return (
            <Checkout />
        )
    }
    return (
        <div>
            <div className="desc">
                <div className="text">{category[props.category]}</div>
            </div>

            { listItems }
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.list,
    page: state.page,
    category: state.category,
    introOn: state.introOn,
})

const mapDispatchToProps = dispatch => ({
    onImageClick: (index) => {
        dispatch(actionCreators.updateOverlayImage(index))
        dispatch(actionCreators.toggleOverlay(true, true))
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(PageContainer)
