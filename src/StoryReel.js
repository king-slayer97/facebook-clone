import React from 'react';
import Story from './Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://picsum.photos/seed/picsum/200/300" title="Sonny Sangha" profileSrc="https://picsum.photos/id/1/200/300"/>
            <Story image="https://picsum.photos/200/300/?blur" title="John Cena" profileSrc="https://picsum.photos/id/1/200/300"/>
            <Story image="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68" title="John Abraham" profileSrc="https://picsum.photos/id/1/200/300"/>
            <Story image="https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w" title="Stupid idiot" profileSrc="https://picsum.photos/id/1/200/300"/>
        </div>
    )
}

export default StoryReel
