
# import packages to read csv file and write a new json file
import csv
import json

csvFilePath = 'MOCK_DATA.csv'
jsonFilePath = 'convertedData.json'

# read csv file and add to data
data = {}

with open(csvFilePath) as csvFile:
    csvReader = csv.DictReader(csvFile)
    for rows in csvReader:
        newId = rows['_id']
        data[newId] = rows

# create new json file and write data on it
with open(jsonFilePath, 'w') as jsonFile:
    # make it more readable and pretty
    jsonFile.write(json.dumps(data, indent=4))
