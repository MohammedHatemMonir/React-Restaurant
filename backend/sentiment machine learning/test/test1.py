# import matplotlib.pyplot as plt
import pandas as pd
from preprocess import *
# # Sample data
# data1 = [2, 3, 5, 7, 8, 10, 13,13, 12, 14]
# data2 = [1,1, 4, 6, 9, 11, 13, 15, 17]

# # Define bins (5 bins in this example)
# # bins = range(min(data1 + data2), max(data1 + data2) )
# list1=[]
# print ( max(data1 + data2))
# for i in range(1, max(data1 + data2)+2):
#     list1.append(i)
#     i+=1
# # print(bin_labels)
# list2=[]
# for i in range(1, 17):
#     list2.append(i)
#     i+=1
# # Plotting the histograms
# plt.hist(data1, bins=list1, alpha=0.5, label='Data Set 1', color='blue', width=-0.4)
# plt.hist(data2, bins=list1, alpha=0.5, label='Data Set 2', color='orange', width=0.4)
# # bin_labels = ['Low', 'Medium Low', 'Medium', 'Medium High', 'High', 'Very High','Low', 'Medium Low', 'Medium', 'Medium High', 'High', 'Very High','Low', 'Medium Low', 'Medium', 'Medium High']



# plt.xticks(list1, list1, rotation=45)
# # Adding labels and title
# plt.xlabel('Data Values')
# plt.ylabel('Frequency')
# plt.title('Distribution of Two Datasets')
# plt.legend()

# # Display the plot
# plt.show()
print(open_parquet_pandas("0000.parquet"))






