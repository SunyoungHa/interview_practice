import re

def reverse_string(input_str):
    # Remove special characters and spaces using regex
    normalized_str = re.sub(r'[^a-zA-Z0-9]', '', input_str)

    # Reverse the normalized string using a loop
    reversed_str = ''
    for i in range(len(normalized_str) - 1, -1, -1):
        reversed_str += normalized_str[i]

    return reversed_str

# Example usage:
input_str = "h@e!llo wo&rl d1"
reversed_str = reverse_string(input_str)
print(reversed_str)  # Output: "1dlrowolleh"
