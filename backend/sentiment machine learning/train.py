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
# nltk.download('punkt')
# nltk.download('stopwords')


# ------------------------------------
# IMPORT THE DATASET

sarcastic_tr =pd.read_csv('SemEval2018-T3-train-taskA.txt', sep='\t')
sentences_ts =pd.read_csv('SemEval2018-T3_input_test_taskA.txt', sep='\t')
sarcastic_ts =pd.read_csv('SemEval2018-T3_gold_test_taskA_emoji.txt', sep='\t')




# -------------------------------------------------------------------------------
# # processing the data

train_sentences = []
train_sarcastic= []
test_sentences = []
test_sarcastic= []
for i,r in sarcastic_tr.iterrows():
    train_sentences.append(r['Tweet text'])
    train_sarcastic.append(r['Label'])

for i,r in sentences_ts.iterrows():
    test_sentences.append(r['tweet text'])

for i,r in sarcastic_ts.iterrows():
    test_sarcastic.append(r['Label'])


new_train_sentences=preprocess_array(train_sentences)
new_test_sentences=preprocess_array(test_sentences)
# -----------------------------------------
# TEST
# print(new_train_sentences)
# graff(train_emotion)

text_test1= pd.DataFrame(new_train_sentences)
text_test2= pd.DataFrame(new_test_sentences)
data_test=pd.concat([text_test1,text_test2])
data_test.columns=['text']
# print(data_test)
# print(len(tokenized (data_test['text'])))#13045
vocab_size = len(tokenized (data_test['text']))
Tokenizer =Tokenizer(num_words=vocab_size , oov_token="<OOV>")
Tokenizer.fit_on_texts(data_test['text'])

word_index2=Tokenizer.word_index

train_sequences = Tokenizer.texts_to_sequences(text_test1[0])
test_sequences = Tokenizer.texts_to_sequences(text_test2[0])
# -----------------------------------------
# TEST
# print(len(tokenized (new_train_sentences)))
# print(len(word_index2))
# print(find_key(word_index2,45))



# graff(new_train_sentences)

maxlen=20
train_padded = pad_sequences(train_sequences , padding='post',truncating='post',maxlen=maxlen)
test_padded = pad_sequences(test_sequences , padding='post',truncating='post',maxlen=maxlen)
# tf.cast(train_padded, tf.int32)
train_padded_tensor = tf.convert_to_tensor(train_padded)
test_padded_tensor = tf.convert_to_tensor(test_padded)
train_sarcastic_tensor = tf.convert_to_tensor(train_sarcastic)
test_sarcastic_tensor = tf.convert_to_tensor(test_sarcastic)


# -------------------------------------------------------------------------------
# creating the model 1-positive

test={}
def objective(trial):
    # Define the TensorFlow model
    try_units=trial.suggest_int("units",6,26,4)
    try_embedding_dim=trial.suggest_categorical("embedding_dim",[100,200])
    try_idk={try_units:try_embedding_dim} 
    if test.get(try_units)==try_embedding_dim:
        idk=1.0
        
        return idk
    else:
        test.update(try_idk)
        model=tf.keras.Sequential([
            tf.keras.layers.Embedding(vocab_size,try_embedding_dim,input_length=20),
            tf.keras.layers.GlobalAveragePooling1D(),
            tf.keras.layers.Dense(try_units,activation='relu'),
            tf.keras.layers.Dense(1,activation='sigmoid')
            ])
        model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
        num_epochs=2
        early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5)
        model.fit(train_padded_tensor, train_sarcastic_tensor, epochs=num_epochs,batch_size=10,callbacks=[early_stopping], validation_data=(test_padded_tensor, test_sarcastic_tensor))
        val_accuracy = model.evaluate(test_padded_tensor, test_sarcastic_tensor)[1]

        # Return the validation accuracy
        return val_accuracy
# search_space = {
#     "units": optuna.distributions.IntUniformDistribution(6,26,4),
#     "embedding_dim": optuna.distributions.CategoricalDistribution([10, 200])
# }


# study = optuna.create_study()
# study.optimize(objective, n_trials=100)

# best_params = study.best_trial.params
#  output_dim best_params['embedding_dim']
# embedding_dim=94
model=tf.keras.Sequential([
    tf.keras.layers.Embedding(vocab_size,200,input_length=20),
    tf.keras.layers.GlobalAveragePooling1D(),
    tf.keras.layers.Dense(26,activation='relu'),
    tf.keras.layers.Dense(1,activation='sigmoid')
    ])
model.compile(loss='binary_crossentropy',optimizer='adam',metrics=['accuracy'])
num_epochs=30
#,varbose=2
early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5)

history=model.fit(train_padded_tensor, train_sarcastic_tensor, epochs=num_epochs,batch_size=10,callbacks=[early_stopping], validation_data=(test_padded_tensor, test_sarcastic_tensor))
# print( best_params["embedding_dim"])
# print( best_params["units"])
# -----------------------------------------
# TEST
# model.get_weights()
# print(train_padded_tensor.shape[1])
# model.summary()



# -------------------------------------------------------------------------------
# save the model

model.save('analising_model.h5')
pickle.dump(Tokenizer, open('Tokenizer.pkl', 'wb'))






# -------------------------------------------------------------------------------
# creating the emotion model 


# train=pd.read_table('train.txt',delimiter=';',header=None,)
# val=pd.read_table('val.txt',delimiter=';',header=None,)
# test=pd.read_table('test.txt',delimiter=';',header=None,)


# data=pd.concat([train,val,test])
# data.columns=['text','label']
# # print(data.shape)
# # print(data.isna().any(axis=1).sum())

# data['text']=preprocess_array(data['text'])
# print(data['text'])
# label_encoder=preprocessing.LabelEncoder()
# data['n_label']=label_encoder.fit_transform(data['label'])


# cv = CountVectorizer(max_features=5000,ngram_range=(1,3))#example: the course was long-> [the,the course,the course was,course, course was, course was long,...]
# data_cv = cv.fit_transform(data['text']).toarray()
# # len(cv.vocabulary_)
# # print(data_cv)
# x_train,x_test,y_train,y_test=train_test_split(data_cv,data['n_label'],test_size=0.25,random_state=42)
# # print(len(x_train))
# # print(len(x_test))
# # print(len(y_train))
# # print(len(y_test))

# model=tf.keras.Sequential([
#     tf.keras.layers.Dense(12,input_shape=(x_train.shape[1],),activation='relu'),
#     tf.keras.layers.Dense(8,activation='relu'),
#     tf.keras.layers.Dense(6,activation='softmax')
#     ])

# model.compile(loss='sparse_categorical_crossentropy',optimizer='adam',metrics=['accuracy'])
# num_epochs=10
# # early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss', patience=5)
# # callbacks=[early_stopping],
# history=model.fit(x_train, y_train, epochs=num_epochs,batch_size=10, validation_data=(x_test, y_test))
# not_important, accuracy = model.evaluate(x_test, y_test)
# print('Accuracy: %.2f' % (accuracy*100))



# -------------------------------------------------------------------------------
# save the model

# tf.keras.models.save_model(model,'emotion_model.h5')
# import pickle
# pickle.dump(label_encoder, open('encoder.pkl', 'wb'))
# pickle.dump(cv, open('CountVectorizer.pkl', 'wb'))



