import pandas as pd
import pickle
import tensorflow as tf
from keras.preprocessing.text import Tokenizer 
from keras.preprocessing.sequence import pad_sequences 
import optuna
from sklearn.feature_extraction.text import CountVectorizer
from sklearn import preprocessing
from sklearn.model_selection import train_test_split
from preprocess import *
import matplotlib.pyplot as plt





# ---------------------------------------------
# Read the CSV file into a DataFrame

# encodings = ['utf-8', 'latin-1', 'cp1252', 'iso-8859-1']
# for encoding in encodings:
#     try:
#         df = pd.read_csv('backend/sentiment machine learning/train.csv', encoding=encoding)
#         print(encoding)
#         break  # If successful, exit the loop
#     except UnicodeDecodeError:
#         pass
# Access data using column names
# print(df['text'],df['sentiment'])  # Access a specific column


# ---------------------------------------------
# ACCESSING THE FIRST TRAIN AND TEST DATA

# train_data =pd.read_csv('backend/sentiment machine learning/train.csv', encoding="latin-1")
# test_data =pd.read_csv('backend/sentiment machine learning/test.csv', encoding="latin-1")
# train_sentences = []
# train_sarcastic= []
# test_sentences = []
# test_sarcastic= []
# testl2=1
# for i,r in train_data.iterrows():
#     if (testl2 <27482):
#         testl2+=1
#         # print(testl2)
#     train_sentences.append(preprocess(r['text']))
#     train_sarcastic.append(r['sentiment'])
# testl=1   
# for i,r in test_data.iterrows():
#     if (testl <3535):
#         testl+=1
#         # print(testl)
#         test_sentences.append(preprocess(r['text']))
#         test_sarcastic.append(r['sentiment'])
# filtered_train_text, filtered_train_labels = remove_neutral_elements(train_sentences, train_sarcastic)
# filtered_test_text, filtered_test_labels = remove_neutral_elements(test_sentences, test_sarcastic)



train_data = pd.read_csv('backend/sentiment machine learning/train.csv', encoding="latin-1")
test_data = pd.read_csv('backend/sentiment machine learning/test.csv', encoding="latin-1")

train_sentences = train_data['text'].apply(preprocess).tolist()
train_sarcastic = train_data['sentiment'].tolist()

train_sentences.extend(test_data['text'].apply(preprocess).tolist())

train_sarcastic.extend(test_data['sentiment'].tolist())

filtered_train_text, filtered_train_labels = remove_neutral_elements(train_sentences, train_sarcastic)
# filtered_test_text, filtered_test_labels = remove_neutral_elements(test_sentences, test_sarcastic)



# ---------------------------------------------
# ACCESSING THE SECOND TRAIN AND TEST DATA
sarcastic_tr =pd.read_csv('backend/sentiment machine learning/SemEval2018-T3-train-taskA.txt', sep='\t')
sentences_ts =pd.read_csv('backend/sentiment machine learning/SemEval2018-T3_input_test_taskA.txt', sep='\t')
sarcastic_ts =pd.read_csv('backend/sentiment machine learning/SemEval2018-T3_gold_test_taskA_emoji.txt', sep='\t')



# for i,r in sarcastic_tr.iterrows():
#     filtered_train_text.append(preprocess(r['Tweet text']))
#     filtered_train_labels.append(r['Label'])


# for i,r in sentences_ts.iterrows():
#     filtered_test_text.append(preprocess(r['tweet text']))

# for i,r in sarcastic_ts.iterrows():
#     filtered_test_labels.append(r['Label'])

print("sarcastic_tr",len(sarcastic_tr))

filtered_train_text.extend(sarcastic_tr['Tweet text'].apply(preprocess).tolist())
filtered_train_labels.extend(sarcastic_tr['Label'].tolist())

print("FINISHED LABLES AND TWEET TEXT")


filtered_train_text.extend(sentences_ts['tweet text'].apply(preprocess).tolist())
print("FINISHED TWEET TEXT", len(filtered_train_text))


filtered_train_labels.extend(sarcastic_ts['Label'].tolist())
print("FINISHED LABLES", len(filtered_train_labels))






# ---------------------------------------------
# SPLITING THE DATA 30/70
text_train= pd.DataFrame(filtered_train_text)
label_train= pd.DataFrame(filtered_train_labels)
data= text_train #pd.concat([text_train,[]], ignore_index=True)
label= label_train #pd.concat([label_train,[]], ignore_index=True)
data.columns=['text']
label.columns=['label']

split_index = int(len(data) * 0.7)
# print(len(data))
# print(split_index)
text_train=data.iloc[:split_index]
text_test1=data.iloc[split_index:]
label_train=label.iloc[:split_index]
label_test=label.iloc[split_index:]
empty= pd.DataFrame([])
text_train=pd.concat([text_train,empty], ignore_index=True)
text_test1=pd.concat([text_test1,empty], ignore_index=True)
label_train=pd.concat([label_train,empty], ignore_index=True)
label_test=pd.concat([label_test,empty], ignore_index=True)


# ---------------------------------------------
# TEST  
print(len(data))
print(len(text_train))
print(len(text_test1))


# ---------------------------------------------
# ANOTHER WAY 
# vocab_size = len(tokenized (data['text']))
# Tokenizer1 =Tokenizer(num_words=vocab_size , oov_token="<OOV>")
# Tokenizer1.fit_on_texts(data['text'])
# print(data['text'])
# word_index2=Tokenizer1.word_index
# train_sequences = Tokenizer1.texts_to_sequences(text_train['text'])
# test_sequences = Tokenizer1.texts_to_sequences(text_test1['text'])


# ---------------------------------------------
# feature extraction all the data
word_index = create_word_index(data['text'])
train_sequences =texts_to_sequences(text_train['text'], word_index)
test_sequences = texts_to_sequences(text_test1['text'], word_index)
vocab_size = len(word_index)
maxlen=29
train_padded = pad_sequences(train_sequences , padding='post',truncating='post',maxlen=maxlen)
test_padded = pad_sequences(test_sequences , padding='post',truncating='post',maxlen=maxlen)
train_padded_tensor = tf.convert_to_tensor(train_padded)
test_padded_tensor = tf.convert_to_tensor(test_padded)
train_sarcastic_tensor = tf.convert_to_tensor(label_train['label'])
test_sarcastic_tensor = tf.convert_to_tensor(label_test['label'])

# ---------------------------------------------
# TEST  
# print(word_index)
# print(word_index['-good'])
# print(vocab_size)
# Chart(data['text'])


# ---------------------------------------------
# TEST FINDING THE PEST embedding_dim AND units

# test={}
# def objective(trial):
#     # Define the TensorFlow model
#     try_units=trial.suggest_int("units",6,26,4)
#     try_embedding_dim=trial.suggest_categorical("embedding_dim",[100,200])
#     try_idk={try_units:try_embedding_dim} 
#     if test.get(try_units)==try_embedding_dim:
#         idk=1.0
        
#         return idk
#     else:
#         test.update(try_idk)
#         model=tf.keras.Sequential([
#             tf.keras.layers.Embedding(vocab_size,try_embedding_dim,input_length=20),
#             tf.keras.layers.GlobalAveragePooling1D(),
#             tf.keras.layers.Dense(try_units,activation='relu'),
#             tf.keras.layers.Dense(1,activation='sigmoid')
#             ])
#         model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
#         num_epochs=2
#         early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5)
#         model.fit(train_padded_tensor, train_sarcastic_tensor, epochs=num_epochs,batch_size=10,callbacks=[early_stopping], validation_data=(test_padded_tensor, test_sarcastic_tensor))
#         val_accuracy = model.evaluate(test_padded_tensor, test_sarcastic_tensor)[1]

#         # Return the validation accuracy
#         return val_accuracy
# search_space = {
#     "units": optuna.distributions.IntUniformDistribution(6,26,4),
#     "embedding_dim": optuna.distributions.CategoricalDistribution([10, 200])
# }


# study = optuna.create_study()
# study.optimize(objective, n_trials=100)

# best_params = study.best_trial.params
# embedding_dim =best_params['embedding_dim']

# embedding_dim=94
# ---------------------------------------------
# TRAINING THE MODEL  
model=tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size+1,200,input_length=maxlen),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(26,activation='relu'),
    tf.keras.layers.Dense(1,activation='sigmoid')
    ])
model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
num_epochs=30
#,varbose=2
early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_accuracy', patience=2)
history=model.fit(train_padded_tensor, train_sarcastic_tensor, epochs=num_epochs,callbacks=[early_stopping], 
                validation_data=(test_padded_tensor, test_sarcastic_tensor))
# batch_size=10


# print(early_stopping.stopped_epoch)
# training_accuracy = history.history['accuracy']
# validation_accuracy = history.history['val_accuracy']
# plt.figure(figsize=(8, 6))
# plt.plot(range(early_stopping.stopped_epoch+1), training_accuracy, label='Training Accuracy')
# plt.plot(range(early_stopping.stopped_epoch+1), validation_accuracy, label='Validation Accuracy')
# plt.xlabel('Epochs')
# plt.ylabel('Accuracy')
# plt.title('Model Accuracy over Training')
# plt.legend()
# plt.grid(True)
# plt.show()



# train_acc = history.history['accuracy']
# val_acc = history.history['val_accuracy']
# print(val_acc)
# print(train_acc)
# train_acc_list=[]
# val_acc_list=[]
# epoch_num=1
# for acc in train_acc:
#     for i in range(1,int(round(acc*100))+1):
#         i+=1
#         train_acc_list.append(epoch_num)
#     epoch_num+=1 
# print(epoch_num)
# epoch_num=1
# for acc in val_acc:
#     for i in range(1,int(round(acc*100))+1):
#         i+=1
#         val_acc_list.append(epoch_num)
#     epoch_num+=1 
# print(epoch_num)
# # Define bins (5 bins in this example)
# # bins = range(min(data1 + data2), max(data1 + data2) )
# list1=[]
# bin_labels = []
# # print ( max(data1 + data2))
# for i in range(1, len(train_acc)+2):
#     list1.append(i)
#     bin_labels.append('epoch_'+str(i))
#     i+=1
# print(list1)
train_acc = history.history['accuracy']
val_acc = history.history['val_accuracy']

train_acc_list = [epoch for epoch, acc in enumerate(train_acc, start=1) for _ in range(int(round(acc*100)))]
val_acc_list = [epoch for epoch, acc in enumerate(val_acc, start=1) for _ in range(int(round(acc*100)))]

print(len(train_acc_list))
print(len(val_acc_list))

list1 = list(range(1, len(train_acc) + 2))
bin_labels = ['epoch_' + str(i) for i in list1]

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
# ---------------------------------------------
# SAVEING THE MODEL AND THE  word_index Tokenizer
model.save('analising_model.h5')
pickle.dump(word_index, open('Tokenizer.pkl', 'wb'))