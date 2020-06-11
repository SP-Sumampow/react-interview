const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/OceansEightPoster.jpeg",
    likes: 4,
    dislikes: 1,
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Midnight_Sun_2017.jpg",
    likes: 2,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/e/ec/The_Incredibles.jpg",
    likes: 3,
    dislikes: 1,
  },
  {
    id: "4",
    title: "Sans un bruit",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/A_Quiet_Place_film_poster.png",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
  },
  {
    id: "5",
    title: "Creed II",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Creed_II_poster.png",
    category: "Drame",
    likes: 16,
    dislikes: 2,
  },
  {
    id: "6",
    title: "Pulp Fiction",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
  },
  {
    id: "7",
    title: "My Neighbor Totoro",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/0/02/My_Neighbor_Totoro_-_Tonari_no_Totoro_%28Movie_Poster%29.jpg",
    category: "Animation",
    likes: 12333,
    dislikes: 32,
  },
  {
    id: "8",
    title: "Seven",
    picture:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/35/91/33/19255605.jpg",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "9",
    title: "Inception",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
  },
  {
    id: "10",
    title: "Gone Girl",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/Gone_Girl_%28Flynn_novel%29.jpg",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
  },
];

export const movies$ = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, movies)
);
