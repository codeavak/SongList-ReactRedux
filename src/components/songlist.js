import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../actions'

class SongList extends Component {

    renderSonglist=()=>{
        return this.props.songs.map((song)=>{return(
            <div className='item' key={song.id}>
    <h3 className='content'>{song.song}</h3>
    <button type="button" className='ui primary button' onClick={()=>{this.props.selectSong(song)}}>Select</button>
       <br/></div>)})
    }
  render() {
    return (
      <div className='ui divided items six wide column'>
       {this.renderSonglist()}
        </div>
    )
  }
}

const mapStateToProps=(state)=>{
    
    return {songs:state.songs};
}

export default connect(mapStateToProps, {selectSong})(SongList)