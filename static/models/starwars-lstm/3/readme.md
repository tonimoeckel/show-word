- Sequenz = 3
[]: # Epochs = 70


Model: "sequential"
_________________________________________________________________
Layer (type)                Output Shape              Param #
=================================================================
embedding (Embedding)       (None, 3, 10)             35580

lstm (LSTM)                 (None, 3, 1000)           4044000

lstm_1 (LSTM)               (None, 1000)              8004000

dense (Dense)               (None, 1000)              1001000

dense_1 (Dense)             (None, 3558)              3561558
                                                                 
=================================================================
Total params: 16646138 (63.50 MB)
Trainable params: 16646138 (63.50 MB)
Non-trainable params: 0 (0.00 Byte)
_________________________________________________________________

