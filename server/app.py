from datetime import datetime, timedelta
import json
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = '1234'
CORS(app)

# our storage is a dict of dicts: key = ip_address, value = { connection_time and expiry_time }
clients = {}

EXPIRY_SECONDS = 3

@app.route('/')
def hello():
    global clients

    # we get the client's IP from the request
    client_addr = request.remote_addr

    # we check that we don't have it yet
    try:
        client_properties = clients[client_addr]
        # if we do, we update its expiry (keepalive)
        client_properties['expiry_time'] = datetime.now() + timedelta(seconds = EXPIRY_SECONDS)
    except KeyError:
        # if we don't, we save it
        clients[client_addr] = {
            'ip_address': client_addr,
            'connection_time': datetime.now(),
            'expiry_time': datetime.now() + timedelta(seconds = EXPIRY_SECONDS),
        }

    # we update our clients dict with those non expired
    clients_list = [v for k, v in clients.items() if v['expiry_time'] > datetime.now()]
    # then we sort it most recent first
    ordered = sorted(clients_list, key=lambda k: k['connection_time'])
    reversed_list = list(reversed(ordered))

    response = make_response(jsonify({'clients': reversed_list}))
    return response

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1')
