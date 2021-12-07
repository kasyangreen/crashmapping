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
# Note on data format. For best results, Excel spreadsheet should:
#   - have 9 columns with the following headings:
#       -date, name, age, city, mode, lat, lon & link
#   - cells empty cells should have the value 'none'
#   - City names should have the 1st letter capitalized
#   - City names should have subsequent letters in lower case
#   - City names should follow offical vocabulary (i.e. Attleboro &
#       North Attleborough)
#   - not use double quotes in cell entries
#   - each cell should include only one data item (no multiple links)
#   - output will be written to the Excel spreadsheet directory
#   - output file name is fatalData.json

import pandas as pd
import os
import tkinter as tk
from tkinter import filedialog

finder = tk.Tk()
finder.withdraw()

my_filetypes = (['Excel spreadsheets', '.xlsx'])
dataXLSX = tk.filedialog.askopenfilename(title="Please choose new fata data spreadsheet",
                                        filetypes=[("Excel files", ".xlsx .xls")])
path=os.path.dirname(dataXLSX)

data_type={'Date': str,
    'Name': str,
    'Age': str,
    'City': str,
    'Mode': str,
    'Lat': float,
    'Lon': float,
    'Link': str
    }

data_file = pd.read_excel(dataXLSX, index_col=None, dtype=data_type, na_filter = False)

try:
        file = open(path + '\FatalData.json',"w")
        file.write("fatalData = [\n")
        for i in range(len(data_file)):             # loop thru datafile
            file.write("    {\n")
            file.write('        "date":  "' + data_file.loc[i,"Date"] + '",\n')
            file.write('        "name":  "' + data_file.loc[i,"Name"] + '",\n')
            file.write('        "age":  "' + data_file.loc[i,"Age"] + '",\n')
            file.write('        "mode":  "' + data_file.loc[i,"Mode"] + '",\n')
            file.write('        "city":  "' + data_file.loc[i,"City"] + '",\n')
            file.write('        "link":  "' + data_file.loc[i,"Link"] + '",\n')
            file.write('        "coord":  {\n')
            file.write('                   "lon":  ' + str(data_file.loc[i,"Lon"]) + ',\n')
            file.write('                   "lat":  ' + str(data_file.loc[i,"Lat"]) + '\n')
            file.write('                   }\n')
            if i < len(data_file) -1:               # test for last record
                file.write('    },\n')              # include comma
            else:
                file.write('    }\n')               # last record, no comma
        # file.write("  }\n")
        file.write("];\n")
except Exception as e:
    print (e)
finally:
        file.close()
        print ("Script ended")
