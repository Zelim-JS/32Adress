import './menuItem.scss'
function MenuItem({name, img, src}) {
  return (
   
    <div className='menu-item-wrapper'>
        <a href={src} target="_blank" rel="noreferrer">
        <h2 className='menu-page-title'>{name}</h2>
        <img src={img} alt={name}/>
        </a>
    </div>
    
  )
}

export default MenuItem