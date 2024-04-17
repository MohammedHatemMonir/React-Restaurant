import pandas as pd
import pickle
import tensorflow as tf
from keras.preprocessing.text import Tokenizer 
from keras.preprocessing.sequence import pad_sequences 
from sklearn.feature_extraction.text import CountVectorizer
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from preprocess import *
import matplotlib.pyplot as plt

train=pd.read_table('/backend/sentiment machine learning/train.txt',delimiter=';',header=None,)
val=pd.read_table('/backend/sentiment machine learning/val.txt',delimiter=';',header=None,)
test=pd.read_table('/backend/sentiment machine learning/test.txt',delimiter=';',header=None,)

data=open_parquet_pandas("backend/sentiment machine learning/0000.parquet")
data2=pd.concat([train,val,test],ignore_index=True)
data2.columns=['text','label']
# emotions = {
#         0: "sadness",
#         1: "joy",
#         2: "love",
#         3: "anger",
#         4: "fear",
#         5: "surprise",
#     }

# # data2=data2[:20]
# # data1=data1[:20]
# print(set(data2['label']))
# i=0
# for t in data2['label']:
#     for key, emotion in emotions.items():
#         if emotion == t:
#             data2['label'][i]=key
#             i+=1
# data=pd.concat([data2,data1],ignore_index=True)
# data.columns=['text','label']
print(set(data['label']))
print(data)
print(len(data['text']))
data['text']=preprocess_array(data['text'])

x_train,x_test,y_train,y_test=train_test_split(data['text'],data['label'],test_size=0.3,random_state=42)
# print((x_train))
# print((x_test))
# print((y_train))
# print((y_test))
from sklearn.pipeline import Pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LogisticRegression
# pipe_lr=Pipeline(steps=[('cv',CountVectorizer()),('lr',LogisticRegression())])
# pipe_lr=Pipeline(steps=[('cv',CountVectorizer()),('svc',SVC(kernel='rbf',c=1.0))])
pipe_lr=Pipeline(steps=[('cv',CountVectorizer()),('rf',RandomForestClassifier(n_estimators=10))])
pipe_lr.fit(x_train,y_train)
# pipe_lr.score(x_test,y_test)
print(pipe_lr.score(x_test,y_test))
import joblib
Pipeline_file= open("text_emotion.pkl","wb")
joblib.dump(pipe_lr,Pipeline_file)
Pipeline_file.close
