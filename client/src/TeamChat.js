import React, { useState } from "react";
import './TeamChat.css';


const filterMessages = (messages, keyword) => {
  return messages.filter((m) =>
    m.text.toLowerCase().includes(keyword.toLowerCase())
  );
};

const TeamChat = ({ project, user, members = [] }) => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");
  const [search, setSearch] = useState(""); 
  const [domainFilter, setDomainFilter] = useState("All");
  const [groupSizeFilter, setGroupSizeFilter] = useState(0); 

  const sendMessage = () => {
    if (msg.trim()) {
      setMessages([
        ...messages,
        { sender: user.username, text: msg, gender: user.gender },
      ]);
      setMsg("");
    }
  };
  const filteredMessages = filterMessages(messages, search);

  const filteredMembers = members
    .filter((member) => domainFilter === "All" || member.domain === domainFilter)
    .filter((_, index, arr) => groupSizeFilter === 0 || arr.length <= groupSizeFilter);

  return (
    <div className="team-chat">
      <h4>Chat: {project?.title || "Untitled Project"}</h4>

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
            onChange={(e) => setGroupSizeFilter(Number(e.target.value))}
            placeholder="Max group size"
          />
        </div>
      </div>

      <div className="chat-box">
        {filteredMessages.length === 0 ? (
          <p>No messages found.</p>
        ) : (
          filteredMessages.map((m, i) => (
            <div
              key={i}
              className={`chat-msg ${
                m.sender === user.username ? "own-msg" : "other-msg"
              }`}
            >
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
