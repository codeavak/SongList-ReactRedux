import {combineReducers} from 'redux'

const songsReducer=()=>{
   return [
        {id:1,artist:'Britney Spears',song:'I\'m the best dancer in the world',length:'4:22'},
        {id:2,artist:'Metallica',song:'Song for the brave',length:'3:22'},
        {id:3,artist:'The Ramones',song:'Party in the house',length:'2:22'},
        {id:4,artist:'Sheryl Crow',song:'Choose your friends wisely',length:'1:22'},
        {id:5,artist:'Led Zeppelin',song:'Ocean blues',length:'5:22'}
      ]
}



const selectedSongReducer=(selectedSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({songs:songsReducer,selectedSong:selectedSongReducer});
