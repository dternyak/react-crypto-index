from flask import request, abort, jsonify, Blueprint, g, redirect, url_for
from google.appengine.api import urlfetch

api = Blueprint('api', __name__, url_prefix='/api/v1')


@api.route("/get_coins", methods=["GET"])
def test():
    url = "http://coinmarketcap.northpole.ro/api/v5/all.json"
    result = urlfetch.fetch(url)
    if result.status_code == 200:
        return result.content
    else:
        return jsonify(error=True)
