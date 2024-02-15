items = [
    {"name": "a", "price": 1},
    {"name": "b", "price": 2},
    {"name": "c", "price": 3}
]

total_price = 0
for item in items:
    total_price += item["price"]

print("Total price:", total_price)