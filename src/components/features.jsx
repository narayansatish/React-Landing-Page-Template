import { Card } from 'react-bootstrap';
export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Programming Langauge</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <Card key={`${d.title}-${i}`} className='col-xs-12 col-md-6'>
                {' '}
                <img src={d.icon} />
                <h3>{d.title}</h3>
                <h2> Concepts Covered
                </h2>
                <h4>{d.content}</h4>
                <h2>Features</h2>
                <ol style={{ fontSize: "20px" }}>
                  <li>
                    Live Class
                  </li>
                  <li>
                    Problem solving from Hackerrank
                  </li>
                  <li>
                    Live Doubts Solving
                  </li>
                  <li>
                    Discord Group
                  </li>
                  <li>
                    Opportunity To Work With Us
                  </li>
                </ol>
              </Card>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
