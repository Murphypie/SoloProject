import { set } from 'mongoose';
import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
//import GameImageGallery from './GameImageGallery.jsx'

//let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' + this.props.imgurl[0] + '/' + this.props.imgurl[1] +'.jpg';
class GameLinkResult extends Component {
    constructor(){
        super();
        this.state={
            current: 0,
            length: 0,
        }
        this.moveRight = this.moveRight.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.stripHTML = this.stripHTML.bind(this);
    }

    componentDidMount(){
        if(this.props.data.data.gameDetails[this.props.imgurl[0]].data.screenshots.length > 0){
            //console.log(this.props.data.data.gameDetails[this.props.imgurl[0]].data.screenshots.length);
            this.setState({length: this.props.data.data.gameDetails[this.props.imgurl[0]].data.screenshots.length})
        }
    }

    moveRight(){
        if(this.state.current === this.state.length -1){
            this.setState({current: 0})
        }else{
            this.setState({current: this.state.current+1})
        }
    }
    moveLeft(){
        if(this.state.current === 0){
            this.setState({current: this.state.length-1})
        }else{
            this.setState({current: this.state.current-1})
        }
    }

    stripHTML(str){
        const result = str.replace(/<\/?[^>]+>/gi, '');
        return result;
    }

    render(){
        const fetchedData = this.props.data.data.gameDetails[this.props.imgurl[0]].data
        const {name, about_the_game, background, categories, detailed_description, developers, release_data, metacritic, screenshots, price_overview} = this.props.data.data.gameDetails[this.props.imgurl[0]].data
        const images = [];
        let metacritic_score = 0;
        let strippedHTML;
        if(metacritic){
            metacritic_score = metacritic.score
        }
        strippedHTML = this.stripHTML(about_the_game)
        for(let i = 0; i<screenshots.length; i++){
            images.push({
                original: screenshots[i].path_full})
                //thumbnail: screenshots[i].path_thumbnail})
            }

        return(
            <div className = 'resultMain'>
                <div className = 'result-leftArrow'>
                    <button className = 'left-arrow' onClick={this.moveLeft}>Previous</button>
                </div>
                <div className = 'result-pic'>
                    <img src={images[this.state.current].original} id="lol"></img>
                </div >
                <div className = 'result-leftArrow'>
                    <button className = 'right-arrow' onClick={this.moveRight}>Next</button>
                </div>
                <div className = 'description'>
                    <h5>About the game: {strippedHTML}</h5>
                    <h1>Developers: {developers}</h1>
                    <h1>Metacritic Score: {metacritic_score}</h1>
                </div>
            </div>
            )
        }
}

export default GameLinkResult