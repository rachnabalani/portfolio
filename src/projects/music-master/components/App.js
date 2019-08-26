import React , { Component } from 'react';
import Artist from './Artist';
import Tracks from './Tracks';
import Search from './Search';
import swal from '@sweetalert/with-react';

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';



class App extends Component {
    state = { 
        artist: null,
        tracks: []
    };

   componentDidMount() {
       this.searchArtist('Khalid');
   }

    searchArtist = artistQuery => {
       
        fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {

            if(json.artists.total >0){
                const artist = json.artists.items[0];
                this.setState({ artist: artist});
                
                //make a request for top tracks
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                .then(response => response.json())
                .then (json => {
                    this.setState({tracks: json.tracks});
                })
                .catch(error => alert(error.message));

            }
            else{
                    swal({
                        content: <div>Artist not found! Please check the name and try again.</div>,
                        buttons: true,
                        });
            }
        })
        .catch(error => alert(error.message));
        
    }

    render () {
        console.log('this.state', this.state);
        return (
        <div class='music-master'> 
           <h2> Artist Top Tracks </h2>
           <Search searchArtist= {this.searchArtist}/>
           <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks}/>
        </div>
        )
    }
}

export default App;