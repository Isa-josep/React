import { useState } from "react"
export function Card({children, userName, name}){
    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const text =isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followcard-button isfollowing' 
    : 'tw-followcard-button'
    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }
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
          <button className={buttonClassName} onClick={handleClick} >{text} <span className="tw-followcard-stopFollow">Dejar de seguir</span></button>
        </aside>
    </article>
    )
}