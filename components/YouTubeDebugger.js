import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.handleClickBitrate = this.handleClickBitrate.bind(this)
    this.handleClickResolution = this.handleClickResolution.bind(this)
  }

  handleClickBitrate() {
    return this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      })

      // settings: {
      //   ...this.state.settings,
      //   bitrate: 12
      // }

    })
  }

  handleClickResolution() {
    return this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: "720p"
        })
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <button className="bitrate" onClick={this.handleClickBitrate}>Change bitrate</button>
          <button className="resolution" onClick={this.handleClickResolution}>Change resolution</button>
        </div>
        <div>
          <p>{`The current bitrate is ${this.state.settings.bitrate}`}</p>
          <p>{`The current resolution is ${this.state.settings.video.resolution}`}</p>
        </div>
      </div>
    )
  }

}
