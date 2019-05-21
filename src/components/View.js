import React, { Component } from 'react'
import { connect } from 'react-redux'

import Toast from 'grommet/components/Toast'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import Image from 'grommet/components/Image'
import IPFS from 'ipfs-mini';
class View extends Component {
  constructor(props) {
    super(props)

    this.state = {
      success: '',
      failure: '',
      modalOpen: false,
      hash: '',
      data: 'https://miro.medium.com/max/854/1*qql4dMoER-RBpwimmsHP6Q.jpeg',
      loading: false
    }
  }

  async componentWillMount() {
    const ipfs = new IPFS({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    })
    this.setState({
      loading: true
    })
    if (window.location.pathname.split("/").pop() !== 'view') {
      ipfs.catJSON(window.location.pathname.split("/").pop(), async (err, data) => {
        if (err) {

        } else {
          this.setState({
            data: data
          })
        }
      })
    }


    this.setState({
      loading: false
    })


  }

  render() {
    return (
      <div>
        <a-scene>
          <a-sky src={this.state.data} rotation="0 -130 0"></a-sky>
        </a-scene>
      </div>
    )
  }
}

export default View
