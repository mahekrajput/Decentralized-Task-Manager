// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Smart Contract: TaskLedger
// This contract stores tasks directly on the blockchain.
contract TaskLedger {

    // Define a structure for each Task
    struct Task {
        uint id;               // Unique ID for each task
        string content;        // Description of the task
        address createdBy;     // Wallet address of the person who added it
        uint timestamp;        // When the task was added
    }

    // Array to store all tasks
    Task[] public tasks;

    // Event that gets triggered whenever a new task is added
    event TaskAdded(uint id, string content, address createdBy, uint timestamp);

    // Function to add a new task to the blockchain
    function addTask(string memory _content) public {
        tasks.push(Task({
            id: tasks.length,
            content: _content,
            createdBy: msg.sender,
            timestamp: block.timestamp
        }));

        emit TaskAdded(tasks.length - 1, _content, msg.sender, block.timestamp);
    }

    // Function to view all tasks
    function getAllTasks() public view returns (Task[] memory) {
        return tasks;
    }
}
