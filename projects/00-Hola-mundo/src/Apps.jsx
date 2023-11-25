import './App.css'
export function App() {
  return (
    <article className='tw-followcard'>
        <header className='tw-followcard-header'>
            <img className='tw-followcard-avatar' src="https://unavatar.io/isa-josep" alt="Kitten" />
            <div className='tw-followcard-info'>
                <strong>Isa Josep</strong>
                <span className='tw-followcard-infoUserName'>@isajosep</span>
            </div>
        </header>
        <aside>
          <button className='tw-followcard-button'>Seguir</button>
        </aside>
    </article>
  )
}