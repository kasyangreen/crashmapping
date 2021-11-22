#-------------------------------------------------------------------------------
# Name:         xlsx_to_json.py
# Purpose:      convert Excel file to json for Webmapping Final Project
#
# Author:       Tom Francis
#
# Created:     21/11/2021
# Copyright:   (c) bosto 2021
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import pandas as pd
import os

path = r"C:\Users\bosto\Documents\ClarkGIS\WebMapping\FinalProj"
data = r"\FatalData_20162020_clean.xlsx"
data_type={'Date': str,
    'Name': str,
    'Age': str,
    'City': str,
    'Lat': float,
    'Lon': float,
    'Link': str
    }


data_file = pd.read_excel(path + data, index_col=None, dtype=data_type, na_filter = False)

try:
        file = open(path + '/FatalData.json',"w")
        file.write("[\n")
        file.write("  {\n")
        # for i in range(5):
        for i in range(len(data_file)):
            file.write("    {\n")
            file.write('        "date":  "' + data_file.loc[i,"Date"] + '",\n')
            file.write('        "name":  "' + data_file.loc[i,"Name"] + '",\n')
            file.write('        "age":  "' + data_file.loc[i,"Age"] + '",\n')
            file.write('        "city":  "' + data_file.loc[i,"City"] + '",\n')
            file.write('        "link":  "' + data_file.loc[i,"Link"] + '",\n')
            file.write('        "coord":  {\n')
            file.write('                   "lon":  ' + str(data_file.loc[i,"Lon"]) + ',\n')
            file.write('                   "lat":  ' + str(data_file.loc[i,"Lat"]) + '\n')
            file.write('                   }\n')
            file.write('    },\n')
        file.write("  }\n")
        file.write("]\n")
except Exception as e:
    print (e)
finally:
        file.close()
        print ("Script ended")

