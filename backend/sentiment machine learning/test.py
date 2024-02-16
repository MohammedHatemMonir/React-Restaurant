import tensorflow as tf 

model =tf.keras.Sequential([
    tf.keras.layers.Dense(units=1,input_shape=[1])
])
model.compile(loss='mean_squared_error',optimizer='adam')


input_1=[0,1,4,12,30,45,100,105,90,77,-40,-10,8,15,22,38]
output_1=[32.0, 33.8, 39.2, 53.6, 86.0, 113.0, 212.0, 221.0, 194.0, 170.6, -40.0, 14.0, 46.4, 59.0, 71.6, 100.4]


num_epochs=500
history=model.fit(input_1,output_1,epochs=num_epochs)
# ------------------------------
# output
# Epoch 498/500
# 1/1 [==============================] - 0s 7ms/step - loss: 0.0105
# Epoch 499/500
# 1/1 [==============================] - 0s 6ms/step - loss: 0.0104
# Epoch 500/500
# 1/1 [==============================] - 0s 7ms/step - loss: 0.0103


c = 101.65
print('model prediction:',model.predict([c]))
print('actual value:',c*1.8+32)
# ------------------------------
# output
# 1/1 [==============================] - 0s 63ms/step
# model prediction: [[214.99748]]
# actual value: 214.97000000000003


model.get_weights()
# ------------------------------
# output
# [array([[1.8015147]], dtype=float32), array([31.87351], dtype=float32)]