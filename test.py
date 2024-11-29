import random
import time

# Constants
BASE_TEMPERATURE = random.randint(350, 370)/10
BASE_TIMESTAMP = int(time.time())  # Start from current timestamp
BASE_TIME_INCREMENT = 300  # Time increments
RANGE_TIME_NOISE = 30  # Noise in time increments

# Define temperature ranges
TEMP_RANGES = [(-0.25, 0.5), (-0.25, 0.25), (-0.5, 0.25)]

# Initialize starting values
temperature = BASE_TEMPERATURE
timestamp = BASE_TIMESTAMP

# Generate ten lines of data
lines = []
temp_range = random.choice(TEMP_RANGES)
for _ in range(10):
    # Select a random range and generate temperature adjustment
    temp_change = random.uniform(*temp_range)
    temperature += temp_change

    # Calculate risk
    risk = abs((temperature - BASE_TEMPERATURE) / 2.4)

    # Adjust timestamp with random noise
    time_increment = BASE_TIME_INCREMENT + random.randint(-RANGE_TIME_NOISE, RANGE_TIME_NOISE)
    timestamp += time_increment

    # Format line
    line = {
        "risk": round(risk, 3),
        "temperature": round(temperature, 2),
        "timestamp": timestamp
    }
    lines.append(line)

# Convert lines to desired string format
output = ",\n".join(str(line).replace("'", "\"") for line in lines) + ","

# Print the result
print(output)
