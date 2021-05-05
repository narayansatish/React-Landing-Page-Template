import { Card, Button } from 'react-bootstrap';
import Blink from 'react-blink-text';
export const Features = (props) => {
  return (
    <div className='text-center' style={{ marginLeft: "5%" }} >
      <div >
        <div className='col-md-12  section-title' style={{ width: "100%" }}>
          <h2>Programming Langauge</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <Card key={`${d.title}-${i}`} className='col-xs-12 col-md-6' >
                {' '}
                <img src={d.icon} />
                <h3>{d.title}</h3>
                <h2> Concepts Covered
                </h2>
                <h4>{d.content}</h4>
                <h2>Features</h2>
                <ol style={{ fontSize: "20px" }}>
                  <li>
                    7 days live bootcamp
                  </li>
                  <li>
                    Small Batch Size
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
                  <li>
                    Hinglish Langauge
                  </li>
                  <li>
                    *Book Only If You have laptop and  Free For 7 days
                  </li>
                </ol>
                <a href="https://rzp.io/l/hs7CGJ8NW"> <Button><Blink color="white" text='Book Your Spot Now @ 289 ₹' fontSize='20'></Blink></Button></a>
                <br />
                <br />
              </Card>
            ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
