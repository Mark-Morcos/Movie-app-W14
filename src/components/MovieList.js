import React,{Component} from 'react'
import Stars from './Stars'
import ReviewForm from './ReviewForm'
import Navbar from './Navbar'

export default class MovieList extends Component {
  render() {
    return (
      
        
        <div className="card m-3" style={{width: "25rem", display: "inline-block"}}>
            <div className="card-body"> //in each card the Movie details binds with the stars and reviewlist component//
                <h5 className="card-title">{this.props.title}</h5>
                <p className="card-text">{this.props.text}</p>
                <p className='card-picture'>{this.props.pic}</p>
                <div className="Stars">
                <Stars />
                </div>
                <div className="Review">
                <ReviewForm />
                </div>
                {/* <a href="#" className="btn btn-primary"
                    onClick={() => alert(`Clicked on ${this.props.title}`)}
                >Read More...</a> */}
            </div>
        </div>
    )
  }
}