import pandas as pd
import random

num_entries = 12  # You can adjust this to 10-15

data = []
for i in range(num_entries):
    engine_temp = random.uniform(85, 98)
    engine_rpm = random.uniform(2200, 2800)
    coolant_temp = engine_temp - random.uniform(5, 10)
    oil_level = random.uniform(50, 75)
    battery_voltage = random.uniform(12.2, 13.0)
    mileage = random.uniform(80000, 180000)
    tire_pressure = random.uniform(980, 1020)
    fuel_pressure = random.uniform(42, 52)
    rul_hours = random.uniform(300, 1000)
    temp_anomaly = 0
    tire_anomaly = 0
    oil_anomaly = 0
    penalty = 0

    # Introduce some variations to trigger anomalies
    if engine_temp > 95:
        temp_anomaly = random.choice([0, 1])
        penalty += temp_anomaly * random.uniform(2, 5)
    if tire_pressure < 990 or tire_pressure > 1010:
        tire_anomaly = random.choice([0, 1])
    if oil_level < 55:
        oil_anomaly = random.choice([0, 1])
        penalty += oil_anomaly * random.uniform(1, 3)
    if mileage > 150000:
        rul_hours -= random.uniform(50, 200)

    data.append([engine_temp, engine_rpm, coolant_temp, oil_level, battery_voltage, mileage, tire_pressure, fuel_pressure, rul_hours, temp_anomaly, tire_anomaly, oil_anomaly, penalty])

df = pd.DataFrame(data, columns=['Engine_Temperature', 'Engine_RPM', 'Coolant_Temperature', 'Oil_Level', 'Battery_Voltage', 'Mileage', 'Tire_Pressure', 'Fuel_Pressure', 'RUL_Hours', 'temp_anomaly', 'tire_pressure_anomaly', 'oil_level_anomaly', 'penalty'])

# Save the combined data to a CSV file
df.to_csv('sample.csv', index=False)

print("Generated truck_test_data.csv with {} entries.".format(num_entries))