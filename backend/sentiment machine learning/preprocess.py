from nltk.stem.porter import PorterStemmer
import re
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import matplotlib.pyplot as plt
from keras.preprocessing.sequence import pad_sequences 
import numpy  as np
import tensorflow as tf
ps = PorterStemmer()
def preprocess(sentence):
    sentences_no_stop_words=[]
    sentence_no_stop_words =""
    lower_sentence =sentence.lower()#MAKE IT ALL SMALL
    test=re.sub(pattern="[^\w\s]",repl="",string=lower_sentence)
    sentence_words=test.split()
    for word in sentence_words:
        if word in ['not', 'no']:
            sentences_no_stop_words.append('-')
        elif word not in set(stopwords.words('english')):
            stem_word=ps.stem(word)
            sentences_no_stop_words.append(stem_word+' ')
            sentence_no_stop_words="".join(sentences_no_stop_words)
    return sentence_no_stop_words


# ----------------------------------------
# example 
# sentence = "I do not like this product"
# preprocessed_sentence = preprocess(sentence)
# print(preprocessed_sentence)
# -----------------------------------------
# output
# -like product 



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
#   # THE OUTPUT= cat




def preprocess_array(array):
    new_array=[]
    for sentence in array:
        new_array.append(preprocess(sentence)) 
    return new_array




def graff(sentences):
    lengths=[len(t.split(" ")) for t in sentences]
    plt.hist(lengths,bins=len(set(lengths)))
    plt.show()





def tweets_analising (tweets,CountVectorizer,encoder,Tokenizer,analising_model,emotion_model):
    
    prediction=[]
    tweets_2=[]
    for sentence in tweets:
        preprocess_sentence=preprocess(sentence)
        tweets_2.append(preprocess_sentence)
        array = CountVectorizer.transform([preprocess_sentence]).toarray()
        pred = emotion_model.predict(array) 
        a=np.argmax(pred, axis=1)
        prediction.append(encoder.inverse_transform(a)[0])
    new_sequence1 = Tokenizer.texts_to_sequences(tweets_2)
    new_padded = pad_sequences(new_sequence1, padding='post',truncating='post',maxlen=20)

    new_padded_tensor = tf.convert_to_tensor(new_padded)
    predictions = analising_model.predict(new_padded_tensor)
    i=0

    for numpers in new_sequence1:
        embty=True
        testr=str(predictions[i][i])
        print(testr)
        for numper in numpers:
            if  numper!=0:
                embty=False
        if embty==True:
            sentiment=['not positive or negative','no emotion']
        elif predictions[i] > 0.5:
            sentiment=['positive',prediction[i],testr]
            # sentiment=tweets[i]+'"'':''" positive.'+prediction[i]+testr
        else:
            sentiment=['negative.',prediction[i],testr]
        i+=1
    return sentiment


   