import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPts, minusPts } from './../../../actions/actions';
 
import loadingGif from './../../../assets/loading.gif';

class Marvel extends Component {
   state = {
       marvelEasy: ['wolverine', 'captain%20america', 'iron%20man', 'daredevil', 'deadpool', 'human%20torch', 'magneto', 'thanos', 'black%20panther', 'venom', 'spider-man', 'hulk', 'cyclops', 'mystique', 'hela', 'black%20widow',],
       marvelMedium: ['galactus', 'silver%20surfer', 'doctor%20doom', 'cable', 'gambit', 'jean%20grey', 'punisher', 'rogue', 'elektra', 'carnage', 'quicksilver', 'ghost%20rider', 'howard%20the%20duck', 'psylocke'],
       image: '',
       userAnswer: '',
       answer: '',
       redirect: false
   }

   componentDidMount() {
       this.fetchMarvelChar();
   }

   shuffleArray = (points) => {
       if (points === 200) {
           return this.state.marvelEasy[Math.floor(Math.random() * this.state.marvelEasy.length)]
       } else if (points === 300) {
           return this.state.marvelMedium[Math.floor(Math.random() * this.state.marvelMedium.length)]
       }
   }

   fetchMarvelChar = () => {
       axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${this.shuffleArray(parseInt(this.props.match.params.pointsId))}&apikey=41961b79291434ed6a69c4e92a27afde`)
           .then(response => {
               console.log(response.data.data.results[0])
               this.setState({
                   image: response.data.data.results[0].thumbnail.path,
                   answer: response.data.data.results[0].name
               })
           })
   };

   submitAnswer = () => {
       if (this.state.userAnswer.toLowerCase() === this.state.answer.toLowerCase()) {
           this.props.addPts(this.props.match.params.pointsId)
           this.setState({
               redirect: true
           })
       } else if (this.state.userAnswer.toLowerCase() !== this.state.answer.toLowerCase()) {
            this.props.minusPts(this.props.match.params.pointsId)
            this.setState({
                redirect: true
            })
       }
   };

   onRedirect = () => {
       return <Redirect to='/game' />
   }

   render() {
       return (
           <div className='marvel-container'>
                {this.state.image === '' 
                ? <img src={loadingGif} />
                : ( 
                <div className='marvelImage-container'>
                    <h1>Who Dat?</h1>
                    <img src={`${this.state.image}.jpg`} alt="" />         
                </div>
                )}
               <div className= "input-container input-group mb-3">
                   <input
                       type="text"
                       className="form-control"
                       value={this.state.userAnswer}
                       onChange={(e) => this.setState({ userAnswer: e.target.value })} />
                   <div className="input-group-append">
                       <button
                           className="btn btn-outline-primary"
                       onClick={this.submitAnswer}
                       >Final Answer?</button>
                   </div>
               </div>
               {this.state.redirect && this.onRedirect()}
           </div>
       );
   }
}

const matchStateToProps = dispatch => ({
    addPts: points => {( dispatch(addPts(points)) )},
    minusPts: points => {( dispatch(minusPts(points)) )}
});

export default connect(null, matchStateToProps)(Marvel);