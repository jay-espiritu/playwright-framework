#!/bin/bash

# Define the directory where your folders are located
directory="test-results"

# Loop through each folder in the directory
for folder in "$directory"/*; do
    if [ -d "$folder" ]; then
        # Extract the part after "TC-" or "QAR"
        new_name=$(echo "$folder" | sed -E 's/.*-(TC|QAR)-(.+)/\1-\2/')

        # Rename the folder
        mv "$folder" "$directory/$new_name"
        echo "Renamed $folder to $new_name"
    fi
done
