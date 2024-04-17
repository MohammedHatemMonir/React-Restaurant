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





# -------------------------------------------------------------------------------
# creating the emotion model 

# print(open_parquet_pandas("0000.parquet"))

train=pd.read_table('/backend/sentiment machine learning/train.txt',delimiter=';',header=None,)
val=pd.read_table('/backend/sentiment machine learning/val.txt',delimiter=';',header=None,)
test=pd.read_table('/backend/sentiment machine learning/test.txt',delimiter=';',header=None,)

data=open_parquet_pandas("0000.parquet")
# data=pd.concat([train,val,test])
# data.columns=['text','label']
data=data[:10]
print(data)

# print(data.shape)
# print(data.isna().any(axis=1).sum())
print(len(data['text']))
data['text']=preprocess_array(data['text'])
# print(data['text'])




# label_encoder=preprocessing.LabelEncoder()
# data['n_label']=label_encoder.fit_transform(data['label'])



# # ---------------------------------------------
# # feature extraction all the data
word_index = create_word_index(data['text'])
data_sequences =texts_to_sequences(data['text'], word_index)
vocab_size = len(word_index)


maxlen=22
data_padded = pad_sequences(data_sequences , padding='post',truncating='post',maxlen=maxlen)
data_padded_tensor = tf.convert_to_tensor(data_padded)
# train_sarcastic_tensor = tf.convert_to_tensor(label_train['label'])
label = tf.convert_to_tensor(data['label'])
print(data_padded)
print(data_padded_tensor[0])
print(data['label'])
print(label[0])
Chart(data['text'])

print(set(data['label']))
lengths=len([t.split(" ") for t in data['text']])
print(lengths)#20000
# ,ngram_range=(1,3)
cv = CountVectorizer()#example: the course was long-> [the,the course,the course was,course, course was, course was long,...]
datatest=cv.fit(data['text'])
data_cv = cv.fit_transform(data['text']).toarray()
# len(cv.vocabulary_)
print(data_cv)
x_train,x_test,y_train,y_test=train_test_split(data_padded,data['label'],test_size=0.3,random_state=42)
print((x_train))
print((x_test))
print((y_train))
print((y_test))
x_train=tf.convert_to_tensor(x_train)
x_test=tf.convert_to_tensor(x_test)
y_train=tf.convert_to_tensor(y_train)
y_test=tf.convert_to_tensor(y_test)
model=tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size+1,200,input_length=maxlen),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(26,activation='relu'),
    tf.keras.layers.Dense(1,activation='softmax')
    ])
model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
num_epochs=30
#,varbose=2
early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_accuracy', patience=2)
history=model.fit(x_train, y_train, epochs=num_epochs,callbacks=[early_stopping], 
                  validation_data=(x_test, y_test))
not_important, accuracy = model.evaluate(x_test, y_test)
print('Accuracy: %.2f' % (accuracy*100))



train_acc = history.history['accuracy']
val_acc = history.history['val_accuracy']
print(val_acc)
print(train_acc)
train_acc_list=[]
val_acc_list=[]
epoch_num=1
for acc in train_acc:
    for i in range(1,int(round(acc*100))+1):
        i+=1
        train_acc_list.append(epoch_num)
    epoch_num+=1 
print(epoch_num)
epoch_num=1
for acc in val_acc:
    for i in range(1,int(round(acc*100))+1):
        i+=1
        val_acc_list.append(epoch_num)
    epoch_num+=1 
print(epoch_num)
# Define bins (5 bins in this example)
# bins = range(min(data1 + data2), max(data1 + data2) )
list1=[]
bin_labels = []
# print ( max(data1 + data2))
for i in range(1, len(train_acc)+2):
    list1.append(i)
    bin_labels.append('epoch_'+str(i))
    i+=1
print(list1)

# Plotting the histograms
plt.hist(train_acc_list, bins=list1, alpha=0.5, label='training accuracy', color='blue', width=-0.4)
plt.hist(val_acc_list, bins=list1, alpha=0.5, label='validation accuracy', color='orange', width=0.4)



plt.xticks(list1, bin_labels, rotation=45)
# Adding labels and title
plt.xlabel('epoch')
plt.ylabel('accuracy')
plt.title('Training and Validation Accuracy')
plt.legend()

# Display the plot
plt.show()
# -------------------------------------------------------------------------------
# save the model

tf.keras.models.save_model(model,'emotion_model.h5')
import pickle
# pickle.dump(label_encoder, open('encoder.pkl', 'wb'))
pickle.dump(cv, open('CountVectorizer.pkl', 'wb'))