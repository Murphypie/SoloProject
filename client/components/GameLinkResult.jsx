import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
//import GameImageGallery from './GameImageGallery.jsx'

class GameLinkResult extends Component {
    render(){
        const fetchedData = this.props.data.data.gameDetails[this.props.imgurl[0]].data
        const {name, about_the_game, background, categories, detailed_description, developers, release_data, metacritic, screenshots, price_overview} = this.props.data.data.gameDetails[this.props.imgurl[0]].data
        const images = [];
        //console.log(fetchedData)
        //console.log(screenshots);
        for(let i = 0; i<screenshots.length; i++){
            images.push({
                original: screenshots[i].path_full,
                thumbnail: screenshots[i].path_thumbnail})
        }

        //let url ='http://media.steampowered.com/steamcommunity/public/images/apps/' + this.props.imgurl[0] + '/' + this.props.imgurl[1] +'.jpg';
        return(
            <div>
                {/* <img src={url}></img> */}
                <ImageGallery items={images}/>
            </div>
            )
        }
}

export default GameLinkResult