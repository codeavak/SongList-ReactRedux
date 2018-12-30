import React,{Component} from 'react'
import {connect} from 'react-redux'


 const SongDetail =(props)=>
 { if(props.selectedSong===null)
  {return (<div className='ten wide column'>
  <h1>Please select a song from the songlist!</h1>
  </div>)}
  return (<div className='ten wide column'>
  Artist: { props.selectedSong!=null?props.selectedSong.artist:"" }<br/>
  Song Title: { props.selectedSong!=null?props.selectedSong.song:"" }<br/>
  Song Duration: { props.selectedSong!=null?props.selectedSong.length:"" }</div>
  )
}



const mapStateToProps=(state)=>{
  return {selectedSong:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
