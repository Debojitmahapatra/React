

const webSeriesList = [
  {
    title: 'Stranger Things',
    ageRestriction: true,
    image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1506741,resizemode-75,msid-113163244/magazines/panache/stranger-things-to-return-on-netflix-for-season-6-check-season-5-release-date-cast-and-plot.jpg',
    description: 'A thrilling Netflix series set in the 80s with supernatural elements.',
    rating: 4.8
  },
  {
    title: 'The Witcher',
    ageRestriction: false,
    image: 'https://img.etimg.com/thumb/width-1200,height-900,imgsize-1160551,resizemode-75,msid-109426403/magazines/panache/the-witcher-season-5-confirmed-as-the-last-chapter-by-netflix.jpg',
    description: 'A dark fantasy series following the adventures of Geralt of Rivia.',
    rating: 4.6
  },
  {
    title: 'Money Heist',
    ageRestriction: true,
    image: 'https://www.worthcrete.com/wp-content/uploads/2023/01/Money-Heist-Online-HINDI-WorthCrete.webp',
    description: 'A criminal mastermind recruits eight people for a grand heist on Spain’s Royal Mint.',
    rating: 4.8
  },
  {
    title: 'Breaking Bad',
    ageRestriction: false,
    image: 'https://addons-media.operacdn.com/media/CACHE/images/themes/85/172285/1.0-rev1/images/50b41d81-8185-4a3a-9227-7553dfb4d749/11abb37935c9f6f6929ae4491255c7a3.jpg',
    description: 'A chemistry teacher turns to making meth after being diagnosed with cancer.',
    rating: 4.8,
  },
];

export const WebSeriesGallery = () => {
  const age = 19;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Popular Web Series</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {webSeriesList.map((series, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={series.image} alt={series.title} width={"600px"} className="w-full h-60 object-cover" />
            <br />
            <button
              className={`mt-2 px-4 py-2 rounded-xl font-medium transition-colors duration-300 ${age < 18 && series.ageRestriction
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              disabled={age < 18 && series.ageRestriction}
            >
              {age < 18 && series.ageRestriction ? 'Not Available' : 'Watch Now'}
            </button>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">Title: {series.title}</h2>
              <h3 className="text-xl font-semibold mb-2">Rating: {series.rating}</h3>
              <p className="text-sm text-gray-600">Description: {series.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};