export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Know Your Mentor</h2>
          <p>

          </p>
        </div>
        <div id='row'>

          <div className='thumbnail'>
            {' '}
            <img src={"https://i.ibb.co/tBVNb7b/profile-pic.jpg"} alt='...' className='team-img' />
            <div className='caption'>
              <h4><a href="https://satishnarayan.netlify.app/">Satish Narayan</a></h4>
              <p>Mentor</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}
