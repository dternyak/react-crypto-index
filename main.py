from flask import jsonify, Blueprint
import requests_toolbelt.adapters.appengine
import requests

requests_toolbelt.adapters.appengine.monkeypatch()

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route('/all')
def all():
    req = requests.get('http://api.coinmarketcap.com/v1/ticker')
    json_result = req.json()[:100]
    return jsonify(data=json_result)
