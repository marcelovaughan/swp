import Glide from '@glidejs/glide'
import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";

import './styles.css'

const PlanetsSlider = (props) => {

    const { element = 'glide', options, children, go } = props

    const [slider] = useState(new Glide(`.${element}`, options))

    useEffect(() => {
        slider.mount()
        slider.go('='+go)
    }, [go, slider])

   return (
        <div className={element}>
            <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                    {children.map((slide, index) => {
                            return React.cloneElement(slide, {
                                key: index,
                                className: `${slide.props.className} glide__slide`
                            })
                        })
                    }
                </ul>
            </div>
        </div>
  )
}

export default PlanetsSlider

PlanetsSlider.defaulProps = {
    element: 'glide', 
}

PlanetsSlider.propTypes = {    
    element: PropTypes.string, 
    options: PropTypes.object, 
    children: PropTypes.array, 
    go: PropTypes.number
};