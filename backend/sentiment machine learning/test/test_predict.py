import pandas as pd
import joblib
from preprocess import *
pipe_lr=joblib.load(open("text_emotion.pkl","rb"))

# print(pipe_lr.predict([preprocess("i am so happy")]))
train=pd.read_table('/backend/sentiment machine learning/train.txt',delimiter=';',header=None,)
val=pd.read_table('/backend/sentiment machine learning/val.txt',delimiter=';',header=None,)
test=pd.read_table('/backend/sentiment machine learning/test.txt',delimiter=';',header=None,)

data=open_parquet_pandas("0000.parquet")
data=data[:200]
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix
y_pred=[]
y_test=data['label']
for i in data['text']:
    y_pred.append(pipe_lr.predict([preprocess(i)]))
# ... (your code till creating confusion matrix 'cm')
cm = confusion_matrix(y_test, y_pred)
fig, ax = plt.subplots()
ax.matshow(cm, cmap=plt.cm.Blues)

# Add labels and title
for (i, j), z in np.ndenumerate(cm):
    ax.text(j, i, str(z), ha='center', va='center', fontsize=7, bbox=dict(boxstyle='round', facecolor='white', edgecolor='0.3'))
ax.set_xlabel('Predicted Label')
ax.set_ylabel('True Label')
ax.set_title('Confusion Matrix')
plt.show()
