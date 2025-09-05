import './Footer.css';
function Footer() {

  const emoji1 = '╰(*°▽°*)╯'
  const emoji2 = '☜(ﾟヮﾟ☜)'
  return (
    <footer>
      <p><span className='emoji'>{emoji1}</span>©Green Corp<span className='emoji'>{emoji2}</span></p>

    </footer>
  )
}

export default Footer;