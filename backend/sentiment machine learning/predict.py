import pickle
import tensorflow as tf 
from preprocess import *
import sys

encoder = pickle.load(open('backend/sentiment machine learning/encoder.pkl', 'rb'))
cv = pickle.load(open('backend/sentiment machine learning/CountVectorizer.pkl', 'rb'))
toke_nizer=pickle.load(open('backend/sentiment machine learning/Tokenizer.pkl', 'rb'))
model=tf.keras.models.load_model('backend/sentiment machine learning/emotion_model.h5')
loaded_model = tf.keras.models.load_model('backend/sentiment machine learning/analising_model.h5')

# ["i love this product it's good" , "i hate this product it's bad"]
# print(sys.argv)
# inputs =sys.argv
# # print(inputs)
# tweets_analising(inputs,cv,encoder,toke_nizer,loaded_model,model)


from flask import Flask, request, jsonify

app = Flask(__name__)

def analyze_sentiment(text):
    # Your sentiment analysis logic using scikit-learn or other libraries
    sentiment= tweets_analising(text,cv,encoder,toke_nizer,loaded_model,model)
    return sentiment

@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        data = request.get_json()
        text = data["text"]
        sentiment = analyze_sentiment([text])
        return jsonify({"text": text, "sentiment": sentiment})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
    import tensorflow as tf
print(tf.__version__)