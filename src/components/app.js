import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <div>

                <div className='main_container'>
                    <p className='hadi_text'>Welcome to Hadi react starter</p>
                    <h2 className='text_persian'>استارتر React باندل شده با Webpack</h2>
                    <h3 className='text_persian'>پکیج فوق به همراه فونت فیس فارسی و انگلیسی می باشد</h3>
                    <p className='copy_right'>طراحی و توسعه <a  href="http://haddi.ir" target='_blank'>Hadi Mousavi</a></p>
                    <div className='social_container'>
                            <a className='social_media' target='_blank' href="http://instagram.com/im.hadimousavi"> <i className='fab fa-instagram'></i></a>
                            <a className='social_media' target='_blank' href="http://github.com/hadimousavi"> <i className='fab fa-github'></i></a>
                            <a className='social_media' target='_blank' href="http://twitter.com/hadicast"> <i className='fab fa-twitter'></i></a>
                            <a className='social_media' target='_blank' href="https://www.youtube.com/channel/UCCPC-I_YU4CZzvOoEmkoKOQ"> <i className='fab fa-youtube'></i></a>
                     </div>
                </div>
                
            </div>
        )
    }
}

export default App
