import React, { useState } from "react";

// Helper function to filter messages based on search keyword
const filterMessages = (messages, keyword) => {
  return messages.filter((m) =>
    m.text.toLowerCase().includes(keyword.toLowerCase())
  );
};

const TeamChat = ({ project, user, members }) => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState("");  // Search functionality
  const [domainFilter, setDomainFilter] = useState("All");  // Domain filter
  const [groupSizeFilter, setGroupSizeFilter] = useState(0);  // Group size filter

  // Function to send a message
  const sendMessage = () => {
    if (msg.trim()) {
      setMessages([
        ...messages,
        { sender: user.username, text: msg, gender: user.gender },
      ]);
      setMsg("");
    }
  };

  // Filtering messages based on the search keyword
  const filteredMessages = filterMessages(messages, search);

  // Filter members based on domain and group size
  const filteredMembers = members
    .filter((member) => domainFilter === "All" || member.domain === domainFilter)
    .filter((member, index, self) => 
      groupSizeFilter === 0 || self.length <= groupSizeFilter
    );

  return (
    <div className="team-chat">
      <h4>Chat: {project.title}</h4>

      <div className="filters">
        <div>
          <label htmlFor="search">Search Messages: </label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search messages..."
          />
        </div>

        <div>
          <label htmlFor="domainFilter">Filter by Domain: </label>
          <select
            id="domainFilter"
            onChange={(e) => setDomainFilter(e.target.value)}
            value={domainFilter}
          >
            <option value="All">All</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div>
          <label htmlFor="groupSizeFilter">Filter by Group Size: </label>
          <input
            type="number"
            id="groupSizeFilter"
            min="0"
            value={groupSizeFilter}
            onChange={(e) => setGroupSizeFilter(e.target.value)}
            placeholder="Max group size"
          />
        </div>
      </div>

      <div className="chat-box">
        {filteredMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          filteredMessages.map((m, i) => (
            <div key={i}>
              <strong>{m.sender} ({m.gender}):</strong> {m.text}
            </div>
          ))
        )}
      </div>

      <div className="chat-input">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>

      <div className="members">
        <h5>Project Members</h5>
        {filteredMembers.length === 0 ? (
          <p>No members found.</p>
        ) : (
          <ul>
            {filteredMembers.map((member, i) => (
              <li key={i}>
                {member.username} ({member.gender}, {member.domain})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TeamChat;
