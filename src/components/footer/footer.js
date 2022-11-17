import './footer.scss'

function Footer({children}) {
  return (
    <footer className='footer'>
      <div className='footer-text'>
      © 2022 Наш адрес: прос Жуковского дом 32/119
      </div>
      {children}
     </footer>
  )
}

export default Footer