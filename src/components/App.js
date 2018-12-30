import React, { Component } from 'react';
import SongList from './songlist'
import SongDetail from './songdetail'

export default function  () {
  return (
    <div className='ui container grid'>
    <div className="row">
    <div className="column wide sixteen">
    <h1>Welcome to Song Details React/Redux Project</h1>
    </div>
    </div>
    <div className='row'>
      <SongList />
      <SongDetail/>
      </div>
    </div>
  )
}

