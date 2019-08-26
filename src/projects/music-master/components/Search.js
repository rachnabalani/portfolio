import React , { Component } from 'react';
import spotifyIcon from '../assets/Spotify-Icon.png';
import swal from '@sweetalert/with-react';


class Search extends Component {

    state = { artistQuery: '' };

     updateArtistQuery = event => {
        this.setState({artistQuery: event.target.value });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
            this.searchArtist();
        }
    }

    searchArtist = () => {
        if(this.state.artistQuery === '') {
            swal({
                        content: <div>Please enter a name to search!</div>,
                        buttons: true,
                        });
        }
        this.props.searchArtist(this.state.artistQuery);
    }

    render() {
        return (
            <div>
           
           <input
            onChange={this.updateArtistQuery}
            onKeyPress={this.handleKeyPress}
            placeholder='Search artist here' 
            style= {{ width: 330, height: 38}}
            />
           <button style= {{ height: 40}} onClick={this.searchArtist}><img src={spotifyIcon} style= {{ width: 23 , margin: 3}}/>Search</button>
       
            </div>
        )
    }

}

export default Search;