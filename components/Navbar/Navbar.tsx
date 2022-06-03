const Navbar: React.FC = () => {
  return(
    <>
      <div className="divider mb-0"/>
      <nav className='flex justify-evenly w-full'>
        <div><a>projects </a></div>
        <span>|</span>
        <div><a>about</a></div>
        <span>|</span>
        <div><a>dev journey</a></div>
      </nav>
      <div className="divider mt-0 mb-12"/>
    </>
  )
}

export default Navbar