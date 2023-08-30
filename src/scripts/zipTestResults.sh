#!/bin/bash

# Folder to be zipped
folder_to_zip="test-results"

# Get the current date in YYYY-MM-DD format
date_stamp=$(date +'%d_%m_%Y_%H%M%S')

# Specify the folder path you want to create
folder_path="test-results-zip"

if [ ! -d "$folder_path" ]; then
    mkdir -p "$folder_path"
    echo "Folder '$folder_path' has been created."
fi

# Name for the zip file with date stamp
zip_file_name="$folder_path/archive_${date_stamp}.zip"

# Zip the folder with date stamp
zip -r "${zip_file_name}" "${folder_to_zip}"

# echo "Folder '${folder_to_zip}' has been zipped as '${zip_file_name}'."
