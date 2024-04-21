# from transformers import AutoModelForSequenceClassification, AutoTokenizer
# import torch
# import torch.utils._pytree
# # Select your chosen model name (replace with your selection)
# model_name = 'finiteautomata/bertweet-base-emotion-analysis'

# # Load the model and tokenizer
# model = AutoModelForSequenceClassification.from_pretrained(model_name)
# tokenizer = AutoTokenizer.from_pretrained(model_name)

# text = "1"
# emotions = {
#         0: "joy",
#         1: "joy",
#         2: "love",
#         3: "anger",
#         4: "fear",
#         5: "surprise",
#     }
# encoded_text = tokenizer(text, return_tensors="pt")  # Convert to PyTorch tensors

# # Perform prediction
# outputs = model(**encoded_text)

# predictions = torch.argmax(outputs.logits, dim=-1)  # Get the predicted class index
# print(outputs)
# print(predictions)
# # Depending on the model's output format, interpret the prediction (e.g., map class index to emotion label)

from transformers import pipeline
emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa', return_all_scores=True)
emotion_labels = emotion("I'm sorry that the order got delayed")
print(emotion_labels)
def get_basic_emotion(predictions):
  basic_emotions = ['joy', 'sadness', 'anger', 'fear', 'disgust']
  max_probability = 0
  basic_emotion = 'neutral'
  for item in predictions:
    for sentiment in item:
        label = sentiment['label']
        score = sentiment['score']
        if label in basic_emotions and score > max_probability:
            max_probability = score
            basic_emotion = label
  return basic_emotion

text = "This is a very happy sentence."  # Replace with your text
predictions = emotion(text)
basic_emotion = get_basic_emotion(predictions)
print(f"Predicted basic emotion: {basic_emotion}")
