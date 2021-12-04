#-------------------------------------------------------------------------------
# Name:         xlsx_to_geoJson.py
# Purpose:      convert Excel file to geojson for Webmapping Final Project
#
# Author:       Tom Francis 
#
# Created:     21/11/2021
# Copyright:   (c) bosto 2021
# Licence:     <your licence>
#-------------------------------------------------------------------------------

import pandas as pd
import os

# hard coded paths and file names - todo: allow user to choose file; set path file directory
path = r"C:\Users\bosto\Documents\ClarkGIS\WebMapping\FinalProj"
data = r"\FatalData_20162020_clean.xlsx"

data_type={'Date': str,
    'Name': str,
    'Age': str,
    'City': str,
    'Mode': str,
    'Lat': float,
    'Lon': float,
    'Link': str
    }

data_file = pd.read_excel(path + data, index_col=None, dtype=data_type, na_filter = False)

try:
        file = open(path + r'\fatalData.js',"w")
        file.write('var fatalData = {"type":"FeatureCollection","features":[\n')
        for i in range(len(data_file)):             # loop thru datafile
            file.write('    {"type":"Feature", "id":"' + str(i+1) + '","properties":{\n')
            file.write('        "date":  "' + data_file.loc[i,"Date"] + '",\n')
            file.write('        "name":  "' + data_file.loc[i,"Name"] + '",\n')
            file.write('        "age":  "' + data_file.loc[i,"Age"] + '",\n')
            file.write('        "mode":  "' + data_file.loc[i,"Mode"] + '",\n')
            file.write('        "city":  "' + data_file.loc[i,"City"] + '",\n')
            file.write('        "link":  "' + data_file.loc[i,"Link"] + '"},\n')
            file.write('        "geometry":{"type":"Point","coordinates":[' + str(data_file.loc[i,"Lon"]) + ',' + str(data_file.loc[i,"Lat"]) + ']}')
            if i < len(data_file) -1:               # test for last record
                file.write('},\n')              # include comma
            else:
                file.write('}\n')               # last record, no comma
        # file.write("  }\n")
        file.write("]};\n")
except Exception as e:
    print (e)
finally:
        file.close()
        print ("Script ended")
