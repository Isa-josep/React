import { useState } from "react"
export function Card({children, userName, name, isfollowing}){
    // const state=useState(false);
    // const isfollowing=state[0];
    // const setisfollowing=state[1];

    const imageSrc = `https://unavatar.io/${userName}`
    const text =isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing 
    ? 'tw-followcard-button isfollowing' 
    : 'tw-followcard-button'
    return(
        <article className='tw-followcard'>
        <header className='tw-followcard-header'>
            <img className='tw-followcard-avatar' src={imageSrc} alt="Kitten" />
            <div className='tw-followcard-info'>
                <strong>{children}</strong>
                <span className='tw-followcard-infoUserName'>@{userName}</span>
            </div>
        </header>
        <aside>
          <button className={buttonClassName}>{text}</button>
        </aside>
    </article>
    )
}