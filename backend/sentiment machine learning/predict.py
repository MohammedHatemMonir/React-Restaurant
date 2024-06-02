import pickle
import tensorflow as tf 
from preprocess import *
import sys
import joblib

toke_nizer=pickle.load(open('backend/sentiment machine learning/Tokenizer.pkl', 'rb'))
loaded_model = tf.keras.models.load_model('backend/sentiment machine learning/analising_model.h5')
# pipe_lr=joblib.load(open("backend/sentiment machine learning/text_emotion.pkl","rb"))
# ["i love this product it's good" , "i hate this product it's bad"]
# print(sys.argv)
# inputs =sys.argv
# # print(inputs)
# tweets_analising(inputs,cv,encoder,toke_nizer,loaded_model,model)
# text=["like"]
# print(tweets_analising(text,toke_nizer,loaded_model))

from flask import Flask, request, jsonify

app = Flask(__name__)

def analyze_sentiment(text):
    # Your sentiment analysis logic using scikit-learn or other libraries
    sentiment= tweets_analising(text,toke_nizer,loaded_model)
    return sentiment

sentiment = analyze_sentiment(["this is lovely"])
print(sentiment)
@app.route("/analyze2", methods=["POST"])
def analyze():
    try:
        data = request.get_json()
        text = data["text"]
        sentiment = analyze_sentiment([text])
        print(sentiment)
        return jsonify({"text": text, "sentiment": sentiment})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000) 
    import tensorflow as tf
print(tf.__version__) 