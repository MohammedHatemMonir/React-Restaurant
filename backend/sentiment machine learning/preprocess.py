from nltk.stem.porter import PorterStemmer
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import matplotlib.pyplot as plt
from keras.preprocessing.sequence import pad_sequences 
import numpy  as np
import tensorflow as tf
ps = PorterStemmer()
import pandas as pd
def remove_neutral_elements(text_array, label_array):
  filtered_labels2=[]
  # Handle potential mismatched array lengths (safety check)
  if len(text_array) != len(label_array):
    raise ValueError("Text and label arrays must have the same length.")

  # Filter both arrays simultaneously using list comprehension
  filtered_text, filtered_labels = zip(*[(text, label) for text, label in zip(text_array, label_array) if label != "neutral"])
  for label in filtered_labels:
      if label=="positive":
        filtered_labels2.append(1)  
      else:
        filtered_labels2.append(0)
  return list(filtered_text), list(filtered_labels2)

# ----------------------------------------
# example 
# text_data = ["This is positive text", "Neutral text here", "Negative sentiment"]
# labels = ["positive", "neutral", "negative"]

# filtered_text, filtered_labels = remove_neutral_elements(text_data, labels)

# print(filtered_text)  # Output: ["This is positive text", "Negative sentiment"]
# print(filtered_labels)  # Output: ["1", "0"]





idv=0
def preprocess(sentence):
    step1=[]
    step2=[]
    step3=[]
    step4=""
    # print(sentence)
    # global idv
    # idv+=1 
    # print(idv)
    sentence=str(sentence)
    step1+=sentence.split(" ")
    for word in step1:
       if not word.startswith("@") and not word.startswith("#") and not word.startswith("http:") and not word.startswith("/") :
            step2+=(re.sub(pattern="[^a-zA-Z\s]",repl=" ",string=str(word))).split(" ")
            # print(step2)
    for word in step2:
        if word in ['not', 'no']:
            step3.append('-')
        elif word not in set(stopwords.words('english')):
            stem_word=ps.stem(word)
            lower_sentence =stem_word.lower()
            if len(step3)<29:
              step3.append(lower_sentence+' ')
    step4="".join(step3)
    return step4

 
# ----------------------------------------
# example 
# sentence ="i Good'good_day not good @good"
# preprocessed_sentence = preprocess(sentence)
# print(preprocessed_sentence)
# -----------------------------------------
# output
# good good day -good 



def create_word_index(text_data):

  # Initialize an empty dictionary to store word counts
  word_counts = {}

  # Loop through each text string
  for text in text_data:
    # Split the text into words (lowercase and remove punctuation)
    words = text.split(' ')

    # Count occurrences of each word
    for word in words:
      if word in word_counts:
        word_counts[word] += 1
      else:
        word_counts[word] = 1

  # Create a unique integer mapping for each word
  word_index = {word: i for i, word in enumerate(word_counts)}

  return word_index


# ----------------------------------------
# example 
# text_data = ["This is a sentence about sentiment analysis.",
#             "Here's another example sentence."]

# word_index = create_word_index(text_data)

# print(word_index)
# -----------------------------------------
# output
# {'This': 0, 'is': 1, 'a': 2, 'sentence': 3...}

def texts_to_sequences(texts, word_index, unknown_token='<OOV>'):

  sequences = []
  for text in texts:
    # Lowercase the text and split it into words
    words = text.split()

    # Create a sequence of integer indices for the words
    sequence = []
    for word in words:
      # Check if the word exists in the word_index
      if word in word_index:
        index = word_index[word]
      else:
        # Use the unknown token if the word is not found
        index = word_index.get(unknown_token, 0)
         # Default to 0 for unknown words
      sequence.append(index)

    sequences.append(sequence)

  return sequences


# ----------------------------------------
# example 
# text_data = ["This is a sentence about sentiment analysis.",
#             "Here's another example sentence."]

# sequences = texts_to_sequences(text_data, word_index)

# print(sequences)
# -----------------------------------------
# output
# [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10]]




def tokenized (sentences):
    tokenize_ = set()
    for sentence in sentences:
        tokenize_.update(word_tokenize(sentence))#TOKENIZE THE DATA
    return tokenize_


def find_key (keys,value):
    for key in keys:
        if keys[key] == value:
            return key
        
# ---------------------------------------------
# TEST   
#   
# list={'love':1,'cat':2}
# print(find_key (list,2))
# -----------------------------------------
# output
#    cat



def open_parquet_pandas(filepath):
  """
  Opens a parquet file and returns a pandas DataFrame.

  Args:
      filepath (str): Path to the parquet file.

  Returns:
      pandas.DataFrame: The data loaded from the parquet file.
  """
  try:
    df = pd.read_parquet(filepath)
    return df
  except FileNotFoundError:
    print(f"Error: Parquet file not found at {filepath}")
    return None
  

def preprocess_array(array):
    new_array=[]
    for sentence in array:
        new_array.append(preprocess(sentence)) 
    return new_array




def Chart(sentences):
    lengths=[len(t.split(" ")) for t in sentences]
    plt.hist(lengths,bins=len(set(lengths)))
    plt.show()





def tweets_analising32 (tweets,pipe_lr,Tokenizer,analising_model):
    
    prediction=[]
    tweets_2=[]
    prediction_2=[]
    ttt=[]
    for sentence in tweets:
        preprocess_sentence=preprocess(sentence)
        tweets_2.append(preprocess_sentence)
        pred = pipe_lr.predict([preprocess_sentence])
        prediction.append(pred[0])
        print(pred[0])
    emotions = {
            0: "sadness",
            1: "joy",
            2: "love",
            3: "anger",
            4: "fear",
            5: "surprise",
        }
    for n in prediction:
       prediction_2.append(emotions[n])
    i=0
    for t in tweets_2:
      new_sequence1 = texts_to_sequences([t], Tokenizer)
      new_padded = pad_sequences(new_sequence1, padding='post',truncating='post',maxlen=22)

      new_padded_tensor = tf.convert_to_tensor(new_padded)
      predictions=analising_model.predict(new_padded_tensor)
    
      predictions=predictions[0][0]
      # print(predictions)
      for numpers in new_sequence1:
          # print(numpers)
          embty=True
          if len(numpers)!=0:
            embty=False 
          for numper in numpers:
              # print(numper)
              if  numper==0:
                  predictions=(predictions+0.5)/2
          testr=str(predictions)
          # print(testr)

          if embty==True:
              sentiment=['not positive or negative','no emotion']
          elif predictions > 0.5:
              sentiment=['positive',prediction_2[i],testr]
              # sentiment=tweets[i]+'"'':''" positive.'+prediction[i]+testr
          else:
              sentiment=['negative.',prediction_2[i],testr]
          i+=1
          ttt.append(sentiment)
    return ttt


# ////////////////////////////
from transformers import pipeline
emotion = pipeline('sentiment-analysis', model='arpanghoshal/EmoRoBERTa')
# emotion_labels = emotion("I'm sorry that the order got delayed")
# print(emotion_labels[0]['label'])
def tweets_analising (tweets,Tokenizer,analising_model):
    
    prediction=[]
    tweets_2=[]
    prediction_2=[]
    ttt=[]
    for sentence in tweets:
        preprocess_sentence=preprocess(sentence)
        tweets_2.append(preprocess_sentence)
        pred = emotion(sentence)
        prediction.append(pred[0]['label'])
    i=0
    for t in tweets_2:
      new_sequence1 = texts_to_sequences([t], Tokenizer)
      new_padded = pad_sequences(new_sequence1, padding='post',truncating='post',maxlen=22)

      new_padded_tensor = tf.convert_to_tensor(new_padded)
      predictions=analising_model.predict(new_padded_tensor)
    
      predictions=predictions[0][0]
      # print(predictions)
      for numpers in new_sequence1:
          # print(numpers)
          embty=True
          if len(numpers)!=0:
            embty=False 
          for numper in numpers:
              # print(numper)
              if  numper==0:
                  predictions=(predictions+0.5)/2
          testr=str(predictions)
          # print(testr)

          if embty==True:
              sentiment=['not positive or negative','no emotion']
          elif predictions > 0.5:
              sentiment=['positive',prediction[i],testr]
              # sentiment=tweets[i]+'"'':''" positive.'+prediction[i]+testr
          else:
              sentiment=['negative.',prediction[i],testr]
          i+=1
          ttt.append(sentiment)
    return ttt
