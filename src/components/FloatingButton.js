import React, { Component } from "react";

// CSS import //
import '../styles/floatingButton.css';

export default class FloatingButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            is_visible: true
        };
    }

    scrollToTop() {
        window.scrollTo({
            top: 1200,
            left: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <div className="btnScroll">
                <div className="top" onClick={() => this.scrollToTop()}>
                    <i class="fas fa-arrow-down fa-2x"></i>
                </div>
            </div>
        );
    }
}