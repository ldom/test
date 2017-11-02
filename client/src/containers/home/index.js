import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import axios from 'axios'

import {
  setClients
} from '../../modules/clients'

class Home extends Component {
    handleResponse(response) {
        const props = this.props;
        props.setClients(response.data.clients);
    }

    timer() {
        axios.get('http://127.0.0.1:5000/').then(this.handleResponse.bind(this));
    }

    componentDidMount() {
        this.intervalId = setInterval(this.timer.bind(this), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    renderClients(clients) {
        const listItems = clients.map((client) =>
            <li>{client.ip_address}</li>
          );
          return (
            <ul>{listItems}</ul>
          );
    }

    renderLatest(clients) {
        if (clients && clients.length > 0) {
            return (
              <p>Last connected: {clients[0].ip_address}</p>
            );
        }
    }

    render() {
        const props = this.props;

        return (
          <div>
            <h2>Currently viewing:</h2>
            {this.renderClients(props.clients)}

            {this.renderLatest(props.clients)}
          </div>
        );
      }
}

const mapStateToProps = state => ({
  clients: state.clients.clients_list
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setClients
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
