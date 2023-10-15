import React, { Fragment } from 'react'
import "../styles/external.css"
import moduleCssStyle from '../styles/cssModule.module.css'
import '../styles/sass.scss'

const  CssStyle = () => {
    let inlineCss = {backgroundColor : "yellowgreen", color : "red"}
  return (
    <Fragment>
        {/* Inline Css */}

        {/* <h2 style={{backgroundColor : "yellowgreen", color : "red"}}>Inline Css</h2> */}

        <h2 style={inlineCss}>Inline Css</h2> {/* Aa rite ek varable ni rite pn api sakay inline style */}

        {/* External Css */}
       
        <h2 className='external_css'>External Css</h2>


        {/* Css Module Style */}
         {/* Css Module style ma extension ma module.css lakhvu pde and import karti vakhte ek name aapvu pde and aj same name apre style apiye tyre apvanu p6i ( . ) kri class nu name apvu */}
        <h2 className={moduleCssStyle.cssModule}>Css Module Style</h2>


        {/* Sass Css Style */}
        {/* sass install krvu pde pehla ane install karva npm i sass lakhi install krvu and sass ni rite css apti vakhte scss extension use thy */}
        <h2 className='sassCss'>Sass Css Style</h2>
        <div className='main'>
            <h2>Hello</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, ullam.</p>
        </div>

        <div className='sub'>
            <div className='sub_name'>Pratik</div>
            <div className='sub_surname'>Chasiya</div>
        </div>

        <h2>World</h2>
    </Fragment>
  )
}

export default CssStyle