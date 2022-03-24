import React from 'react'
import './Welcomepage.css';
import { PlayCircleOutline } from '@mui/icons-material';

const Welcompage = () => {
    return (
        <div className='background-div'>
            <div className='welcome-page-text'>
                <h1>Launch your idea start your startup</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi, similique laudantium nulla ea aut aspernatur velit
                    dolores quam fugiat dolorem saepe excepturi porro sapiente
                    rem veniam totam ducimus tempora facilis.
                </p>
                <div className='welcome-page-buttons'> 
                    <p className='button'>Get started &rarr;</p>
                    <div className='watch-button'>
                        <div><PlayCircleOutline /></div>
                        <div>Watch our video</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcompage