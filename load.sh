#!/bin/bash

# Number of concurrent requests
NUM_REQUESTS=100000

# Loop to send concurrent requests using curl in the background
for i in $(seq 1 $NUM_REQUESTS); do
  curl http://192.168.49.2:30001 &
done

# Wait for all background processes to complete
wait

echo "All requests sent"