const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title: "NYC AI Users - AI Tech Talks, Demo & Social",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format",
      type: "offline",
      attendees: 43,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format",
      type: "online",
      attendees: 10,
      category: "Technology",
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format",
      type: "online",
      attendees: 77,
      category: "Business",
    },
    {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
      },
      {
        title: "NYC AI Users - AI Tech Talks, Demo & Social",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
      },
      {
        title: "Book 40+ Appointments Per Month Using AI",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format",
        type: "online",
        attendees: 10,
        category: "Technology",
      },
      {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format",
        type: "online",
        attendees: 77,
        category: "Business",
      },
      {
        title: "INFJ Personality Type - Coffee Shop Meet & Greet",
        description: "Being an INFJ",
        date: new Date(2024, 2, 23, 15),
        image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format",
        type: "offline",
        attendees: 99,
        category: "Hobbies and Passions",
        distance: 50,
      },
      {
        title: "NYC AI Users - AI Tech Talks, Demo & Social",
        description: "New York AI Users",
        date: new Date(2024, 2, 23, 11, 30),
        image: "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format",
        type: "offline",
        attendees: 43,
        category: "Technology",
        distance: 25,
      },
      {
        title: "Book 40+ Appointments Per Month Using AI",
        description: "New Jersey Business Network",
        date: new Date(2024, 2, 16, 14),
        image: "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format",
        type: "online",
        attendees: 10,
        category: "Technology",
      },
      {
        title: "Dump writing group weekly meetup",
        description: "Dump writing group",
        date: new Date(2024, 2, 13, 11),
        image: "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format",
        type: "online",
        attendees: 77,
        category: "Business",
      },
  ];
  
  const filters = {
    category: "all",
    type: "all",
    distance: "all",
  };
  
  function renderEvents(events) {
    const eventList = document.getElementById("eventList");
    eventList.innerHTML = "";
  
    events.forEach((event) => {
      const eventCard = document.createElement("div");
      eventCard.className = "event-card";
  
      const eventImage = document.createElement("img");
      eventImage.src = event.image;
      eventImage.alt = event.title;
  
      const eventDetails = document.createElement("div");
      eventDetails.className = "event-details";
  
      const eventTitle = document.createElement("h3");
      eventTitle.className = "event-title";
      eventTitle.textContent = event.title;
  
      const eventDescription = document.createElement("p");
      eventDescription.className = "event-description";
      eventDescription.textContent = `${event.description} - ${event.type.toUpperCase()}`;
  
      const eventDate = document.createElement("p");
      eventDate.textContent = `Date: ${event.date.toLocaleString()}`;
  
      const eventDistance = document.createElement("p");
      if (event.type === "offline") {
        eventDistance.textContent = `Distance: ${event.distance} km`;
      }
  
      eventDetails.appendChild(eventTitle);
      eventDetails.appendChild(eventDescription);
      eventDetails.appendChild(eventDate);
      if (eventDistance) {
        eventDetails.appendChild(eventDistance);
      }
  
      eventCard.appendChild(eventImage);
      eventCard.appendChild(eventDetails);
  
      eventList.appendChild(eventCard);
    });
  }
  
  function setFilter(criteria, value) {
    filters[criteria] = value;
    applyFilters();
  }
  
  function applyFilters() {
    let filteredEvents = eventsStore;
  
    // Фильтруем по категории
    if (filters.category !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) => event.category === filters.category
      );
    }
  
    // Фильтруем по типу
    if (filters.type !== "all") {
      filteredEvents = filteredEvents.filter((event) => event.type === filters.type);
    }
  
    // Фильтруем по дистанции (только для оффлайн событий)
    if (filters.distance !== "all") {
      filteredEvents = filteredEvents.filter(
        (event) =>
          event.type === "offline" && event.distance <= parseInt(filters.distance)
      );
    }
  
    renderEvents(filteredEvents);
  }
  
  // Изначальное отображение всех событий
  renderEvents(eventsStore);