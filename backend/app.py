from web3 import Web3

# Connect to local blockchain (Ganache or simulated Hardhat network)
# You can think of this like connecting to your own mini Ethereum
blockchain_url = "http://127.0.0.1:8545"
web3 = Web3(Web3.HTTPProvider(blockchain_url))

if web3.is_connected():
    print("✅ Connected to local blockchain")
else:
    print("❌ Connection failed")

# Example account (temporary for local use)
account = web3.eth.account.create()
print("🧍 Account Address:", account.address)

# Simulating the concept of adding and viewing tasks
# (This would normally interact with the Solidity contract)

class TaskLedger:
    def __init__(self):
        self.tasks = []

    def add_task(self, content):
        task = {
            "id": len(self.tasks),
            "content": content,
            "createdBy": account.address,
            "timestamp": web3.eth.get_block('latest')['timestamp']
        }
        self.tasks.append(task)
        print(f"🧾 Task Added: {content}")

    def get_all_tasks(self):
        return self.tasks

# Simulate blockchain usage
ledger = TaskLedger()
ledger.add_task("Prepare GATE notes")
ledger.add_task("Finish blockchain project")

print("\n📜 All Tasks Stored on Blockchain (Simulated):")
for t in ledger.get_all_tasks():
    print(t)
