export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item relative overflow-hidden">
      <div className="hover-bg group">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[rgba(99,114,255,0.8)] to-[rgba(92,169,251,0.8)] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <h4 className="text-white text-lg font-medium uppercase transform translate-y-full transition-transform duration-300 group-hover:translate-y-0 aspect-square">
              {title}
            </h4>
          </div>
          <img
            src={smallImage}
            className="img-responsive w-full h-auto"
            alt={title}
          />
        </a>
      </div>
    </div>
  );
};
