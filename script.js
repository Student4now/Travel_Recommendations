document.addEventListener('DOMContentLoaded', () => {
    const destinations = [
      {
        name: 'Siesta Beach, Florida',
        description: 'Renowned for its white-quartz sand and clear shallow waters, Siesta Beach offers a family-friendly environment with nearby cafes and opportunities to spot wildlife like manatees and dolphins.',
        imageUrl: 'https://www.southernliving.com/thmb/Siesta-Beach-Florida.jpg',
        link: 'https://www.southernliving.com/best-beach-us-florida-siesta-beach-11681842'
      },
      {
        name: 'Pura Ulun Danu Bratan, Bali',
        description: 'A famous Hindu temple and tourist attraction in Bali, Indonesia, known for its stunning architecture and serene lake setting.',
        imageUrl: 'https://www.muse-motivation.com/wp-content/uploads/2018/10/Pura-Ulun-Danu-Bratan-Bali.jpg',
        link: 'https://www.muse-motivation.com/pura-ulun-danu-bratan-famous-hindu-temple-and-tourist-attraction-in-bali-indonesia/'
      },
      {
        name: 'Maldives',
        description: 'An island nation known for its luxurious resorts, clear waters, and beautiful beaches, making it a top travel destination.',
        imageUrl: 'https://www.veranda.com/wp-content/uploads/2023/07/Maldives.jpg',
        link: 'https://www.veranda.com/travel/g36522292/beautiful-countries-in-the-world/'
      }
    ];
  
    const destinationsContainer = document.getElementById('destinations');
  
    destinations.forEach(destination => {
      const destinationElement = document.createElement('div');
      destinationElement.classList.add('destination');
  
      const image = document.createElement('img');
      image.src = destination.imageUrl;
      image.alt = destination.name;
  
      const name = document.createElement('h2');
      name.textContent = destination.name;
  
      const description = document.createElement('p');
      description.textContent = destination.description;
  
      const link = document.createElement('a');
      link.href = destination.link;
      link.textContent = 'Learn more';
  
      destinationElement.appendChild(image);
      destinationElement.appendChild(name);
      destinationElement.appendChild(description);
      destinationElement.appendChild(link);
  
      destinationsContainer.appendChild(destinationElement);
    });
  });
  