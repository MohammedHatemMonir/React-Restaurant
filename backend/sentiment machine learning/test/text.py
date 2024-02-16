# Vader Sentiment Analysis
from nltk.sentiment.vader import SentimentIntensityAnalyzer

text = "I Hate this product! It's Bad."
analyzer = SentimentIntensityAnalyzer()
sentiments = analyzer.polarity_scores(text)

if sentiments['compound'] >= 0.05:
    print(f"Vader Sentiment: Positive (Score: {sentiments['compound']:.4f})")
elif sentiments['compound'] <= -0.05:
    print(f"Vader Sentiment: Negative (Score: {sentiments['compound']:.4f})")
else:
    print(f"Vader Sentiment: Neutral (Score: {sentiments['compound']:.4f}")

# Transformers (BERT-based Model) Sentiment Analysis
from transformers import pipeline

nlp = pipeline("sentiment-analysis", "distilbert-base-uncased-finetuned-sst-2-english")
results = nlp(text)

for result in results:
    label = result['label']
    score = result['score']
    
    print(f"Transformers Sentiment: {label} (Score: {score:.4f})")

# TextBlob Sentiment Analysis
from textblob import TextBlob

analysis = TextBlob(text)

if analysis.sentiment.polarity > 0:
    print(f"TextBlob Sentiment: Positive (Score: {analysis.sentiment.polarity:.4f})")
elif analysis.sentiment.polarity < 0:
    print(f"TextBlob Sentiment: Negative (Score: {analysis.sentiment.polarity:.4f})")
else:
    print(f"TextBlob Sentiment: Neutral (Score: {analysis.sentiment.polarity:.4f})")

# AFINN Sentiment Analysis
from afinn import Afinn

afinn = Afinn()
sentiment_score = afinn.score(text)

if sentiment_score > 0:
    print(f"AFINN Sentiment: Positive (Score: {sentiment_score:.4f})")
elif sentiment_score < 0:
    print(f"AFINN Sentiment: Negative (Score: {sentiment_score:.4f})")
else:
    print(f"AFINN Sentiment: Neutral (Score: {sentiment_score:.4f})")
