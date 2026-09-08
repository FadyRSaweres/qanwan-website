import base64, sys

b64_file = sys.argv[1]
out_file = sys.argv[2]

with open(b64_file, 'r') as f:
    b64 = f.read().strip()

# Remove data URL prefix if present
if b64.startswith('data:'):
    b64 = b64.split(',', 1)[1]

# Pad to make it valid base64
missing = len(b64) % 4
if missing:
    b64 += '=' * (4 - missing)

data = base64.b64decode(b64)
with open(out_file, 'wb') as f:
    f.write(data)
print(f"Written {len(data)} bytes to {out_file}")
